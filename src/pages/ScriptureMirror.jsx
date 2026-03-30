import { useState, useRef, useEffect, useCallback } from 'react'
import { getScripturesForFeeling, getMirrorTruth } from '../data/identityScriptures'

// ─── Camera ───────────────────────────────────────────────────────────────────
function useCamera() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let stream = null
    ;(async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = () => setReady(true)
        }
      } catch { /* no camera — fallback gradient is fine */ }
    })()
    return () => stream?.getTracks().forEach(t => t.stop())
  }, [])
  return { videoRef, ready }
}

// ─── Canvas factory (OffscreenCanvas with fallback for older iOS Safari) ──────
function makeCanvas(W, H) {
  if (typeof OffscreenCanvas !== 'undefined') {
    return new OffscreenCanvas(W, H)
  }
  const c = document.createElement('canvas')
  c.width = W; c.height = H
  return c
}

// ─── Seeded RNG ───────────────────────────────────────────────────────────────
function mkRng(seed) {
  let s = seed
  return () => {
    s += 0x6d2b79f5
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ─── Static fog buffer (texture only — no droplets, those are animated) ───────
function buildFogBuffer(W, H) {
  const buf = makeCanvas(W, H)
  const c   = buf.getContext('2d')
  const r   = mkRng(7)

  // Base fog
  c.fillStyle = 'rgba(198,206,216,0.32)'
  c.fillRect(0, 0, W, H)

  // Texture blobs
  for (let i = 0; i < 150; i++) {
    const x = r()*W, y = r()*H, rad = 28+r()*110, a = 0.03+r()*0.07
    const g = c.createRadialGradient(x,y,0,x,y,rad)
    g.addColorStop(0, `rgba(218,223,230,${a})`)
    g.addColorStop(1, 'rgba(200,205,215,0)')
    c.fillStyle = g; c.fillRect(x-rad,y-rad,rad*2,rad*2)
  }

  // Static background drip marks
  for (let i = 0; i < 55; i++) {
    const x = r()*W, y0 = r()*H*0.65
    const len = 20+r()*90, lw = 0.5+r()*1.5, a = 0.08+r()*0.22
    const d = c.createLinearGradient(x,y0,x,y0+len)
    d.addColorStop(0, `rgba(192,200,212,${a})`)
    d.addColorStop(0.6, `rgba(192,200,212,${a*0.4})`)
    d.addColorStop(1, 'rgba(192,200,212,0)')
    c.strokeStyle = d; c.lineWidth = lw
    c.beginPath(); c.moveTo(x,y0)
    c.bezierCurveTo(x+(r()-.5)*4,y0+len*.3,x+(r()-.5)*4,y0+len*.7,x+(r()-.5)*3,y0+len)
    c.stroke()
  }

  // Small static background droplets (faint)
  for (let i = 0; i < 200; i++) {
    const x = r()*W, y = r()*H, rad = 0.4+r()*1.4, a = 0.15+r()*0.3
    c.beginPath(); c.arc(x,y,rad,0,Math.PI*2)
    c.fillStyle = `rgba(210,218,228,${a})`; c.fill()
  }

  // Warm left-side light glow
  const wl = c.createRadialGradient(W*.16,H*.42,0, W*.16,H*.42,W*.42)
  wl.addColorStop(0,   'rgba(255,218,130,0.24)')
  wl.addColorStop(0.4, 'rgba(255,195,90,0.07)')
  wl.addColorStop(1,   'rgba(0,0,0,0)')
  c.fillStyle = wl; c.fillRect(0,0,W,H)

  // Edge vignette
  const v = c.createRadialGradient(W/2,H/2,Math.min(W,H)*.25, W/2,H/2,Math.max(W,H)*.78)
  v.addColorStop(0, 'rgba(0,0,0,0)')
  v.addColorStop(1, 'rgba(0,0,0,0.38)')
  c.fillStyle = v; c.fillRect(0,0,W,H)

  return buf
}

// ─── Unified light source direction (upper-left, normalised) ─────────────────
const LIGHT = { x: -0.38, y: -0.60 }

// ─── Windowpane water drops ───────────────────────────────────────────────────
function createDroplet(W, H, randomY = true) {
  const rad = 2.5 + Math.random() * 3.8
  return {
    x:        Math.random() * W,
    y:        randomY ? Math.random() * H : -(rad * 2 + Math.random() * 60),
    rad,
    vy:       0.18 + rad * 0.09 + Math.random() * 0.22,   // gentle gravity
    vx:       (Math.random() - 0.5) * 0.45,               // lateral drift
    alpha:    0.52 + Math.random() * 0.20,                 // narrow range — same pane
    trailLen: rad * (14 + Math.random() * 18),
    stuck:    Math.floor(Math.random() * 90),              // start staggered
  }
}

function drawDroplets(ctx, drops, W, H) {
  drops.forEach(d => {
    // Windowpane physics: surface tension causes sticking + random re-routing
    if (d.stuck > 0) {
      d.stuck -= 1
    } else {
      d.vx = d.vx * 0.82 + (Math.random() - 0.5) * 0.20
      d.vx = Math.max(-1.1, Math.min(1.1, d.vx))
      d.x += d.vx
      d.y += d.vy
      if (Math.random() < 0.0035) d.stuck = 20 + Math.floor(Math.random() * 55)
    }

    if (d.y > H + d.rad + d.trailLen) {
      Object.assign(d, createDroplet(W, H, false))
      return
    }

    const { x, y, rad, alpha, trailLen } = d

    // ── Thin hairline trail ─────────────────────────────────────────────────
    const trail = ctx.createLinearGradient(x, y - trailLen, x, y)
    trail.addColorStop(0,   'rgba(215,226,240,0)')
    trail.addColorStop(0.35, `rgba(215,226,240,${alpha * 0.14})`)
    trail.addColorStop(1,   `rgba(215,226,240,${alpha * 0.30})`)
    ctx.strokeStyle = trail
    ctx.lineWidth   = Math.max(0.7, rad * 0.20)
    ctx.lineCap     = 'round'
    ctx.beginPath(); ctx.moveTo(x, y - trailLen); ctx.lineTo(x, y); ctx.stroke()

    // ── Drop body: oblate ellipse (pressed flat against glass) ──────────────
    const bw = rad * 0.88
    const bh = rad * 1.10

    ctx.save()
    ctx.beginPath()
    ctx.ellipse(x, y, bw, bh, 0, 0, Math.PI * 2)

    // Glass fill: light-source-aware radial gradient
    const lcx = x + LIGHT.x * rad * 0.44
    const lcy = y + LIGHT.y * rad * 0.44
    const fill = ctx.createRadialGradient(lcx, lcy, 0, x, y, rad * 1.35)
    fill.addColorStop(0,    `rgba(242,249,255,${alpha * 0.88})`)
    fill.addColorStop(0.40, `rgba(212,224,240,${alpha * 0.68})`)
    fill.addColorStop(1,    `rgba(172,190,215,${alpha * 0.46})`)
    ctx.fillStyle = fill
    ctx.fill()

    // Thin glass rim
    ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.18})`
    ctx.lineWidth   = 0.65
    ctx.stroke()

    // ── Primary specular clipped inside drop ────────────────────────────────
    ctx.beginPath()
    ctx.ellipse(x, y, bw, bh, 0, 0, Math.PI * 2)
    ctx.clip()

    const sx = x + LIGHT.x * rad * 0.40
    const sy = y + LIGHT.y * rad * 0.40
    const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, rad * 0.72)
    sg.addColorStop(0,    `rgba(255,255,255,${alpha * 0.92})`)
    sg.addColorStop(0.38, `rgba(255,255,255,${alpha * 0.40})`)
    sg.addColorStop(1,    'rgba(255,255,255,0)')
    ctx.fillStyle = sg
    ctx.fillRect(x - rad * 1.5, y - rad * 1.5, rad * 3, rad * 3)
    ctx.restore()

    // ── Secondary refraction glint (opposite side, much softer) ────────────
    const rx = x - LIGHT.x * rad * 0.32
    const ry = y - LIGHT.y * rad * 0.28
    ctx.beginPath()
    ctx.arc(rx, ry, rad * 0.16, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${alpha * 0.20})`
    ctx.fill()
  })
}

// ─── Word-wrap ────────────────────────────────────────────────────────────────
function wrapText(ctx, text, maxW) {
  const words = text.split(' ')
  const lines = []; let cur = ''
  for (const w of words) {
    const t = cur ? `${cur} ${w}` : w
    if (cur && ctx.measureText(t).width > maxW) { lines.push(cur); cur = w }
    else cur = t
  }
  if (cur) lines.push(cur)
  return lines
}

// ─── Wipe a horizontal stripe clean (reveals camera beneath) ─────────────────
// ─── Pre-generate the zigzag wipe path (hand clearing a mirror up-and-down) ──
// Returns an array of {x, y} waypoints the wipe edge travels along.
function makeWipePath(W, H, y, stripeH, seed) {
  const r       = mkRng(seed)
  // Number of vertical strokes across the width
  const strokes = Math.max(6, Math.ceil(W / (stripeH * 1.8)))
  const pts     = []
  for (let i = 0; i <= strokes; i++) {
    const px = (i / strokes) * W
    // Alternate top-to-bottom and bottom-to-top strokes
    const goingDown = i % 2 === 0
    const py = goingDown
      ? y - stripeH * (0.55 + r() * 0.15)   // top of stroke
      : y + stripeH * (0.55 + r() * 0.15)   // bottom of stroke
    pts.push({ x: px, y: py, goingDown })
  }
  return { pts, strokes }
}

// ─── Wipe clear using an up-and-down zigzag hand motion ──────────────────────
function wipeStripe(ctx, W, y, stripeH, progress, wipePath) {
  if (progress <= 0 || !wipePath) return
  const { pts, strokes } = wipePath
  // How far along the path we are
  const pathPos = progress * strokes   // in stroke-units
  const edgeW   = stripeH * 0.9       // soft leading edge width

  ctx.save()
  ctx.globalCompositeOperation = 'destination-out'

  // Build the filled polygon for the already-cleared area
  // The polygon is bounded by the zigzag path on the right and screen edges elsewhere
  ctx.beginPath()
  // Start top-left
  ctx.moveTo(0, y - stripeH * 1.0)

  // Walk the zigzag pts up to the current progress position
  for (let i = 0; i < pts.length; i++) {
    const segStart = i
    const segEnd   = i + 1
    if (segStart >= pathPos) break
    const t = Math.min(1, pathPos - segStart)
    const p0 = pts[i]
    const p1 = pts[i + 1] || pts[i]
    const ex = p0.x + (p1.x - p0.x) * t
    const ey = p0.y + (p1.y - p0.y) * t
    ctx.lineTo(ex, ey)
  }

  // Close back along bottom-left
  ctx.lineTo(0, y + stripeH * 1.0)
  ctx.closePath()
  ctx.fillStyle = 'rgba(0,0,0,0.92)'
  ctx.fill()

  // Soft feathered leading edge (vertical gradient at tip)
  const tipIdx  = Math.min(Math.floor(pathPos), pts.length - 2)
  const tipFrac = pathPos - tipIdx
  const tp0     = pts[tipIdx]
  const tp1     = pts[tipIdx + 1] || tp0
  const tipX    = tp0.x + (tp1.x - tp0.x) * tipFrac
  const tipY    = tp0.y + (tp1.y - tp0.y) * tipFrac
  const g = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, edgeW * 2.2)
  g.addColorStop(0,    'rgba(0,0,0,0.55)')
  g.addColorStop(0.5,  'rgba(0,0,0,0.20)')
  g.addColorStop(1,    'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(Math.max(0, tipX - edgeW * 2.5), y - stripeH * 1.2, edgeW * 5.5, stripeH * 2.4)

  ctx.globalCompositeOperation = 'source-over'
  ctx.restore()
}

// ─── Cut a single line into fog via destination-out ──────────────────────────
// Extra passes give thick, bold finger-stroke edges
function cutLine(ctx, W, text, y, fontSize) {
  ctx.save()
  ctx.globalCompositeOperation = 'destination-out'
  ctx.font         = `900 ${fontSize}px Caveat`
  ctx.textAlign    = 'center'
  ctx.textBaseline = 'middle'
  // Wide soft halo
  ctx.filter = 'blur(11px)'; ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillText(text, W/2, y)
  // Medium feather
  ctx.filter = 'blur(5px)';  ctx.fillStyle = 'rgba(0,0,0,0.95)'; ctx.fillText(text, W/2, y)
  // Crisp stroke body (drawn 3× for density)
  ctx.filter = 'blur(1.5px)'; ctx.fillStyle = 'rgba(0,0,0,1)';   ctx.fillText(text, W/2, y)
  ctx.filter = 'blur(0.5px)'; ctx.fillStyle = 'rgba(0,0,0,1)';   ctx.fillText(text, W/2, y)
  ctx.filter = 'none';        ctx.fillStyle = 'rgba(0,0,0,1)';   ctx.fillText(text, W/2, y)
  ctx.globalCompositeOperation = 'source-over'
  ctx.restore()
}

// ─── Mirror canvas hook ───────────────────────────────────────────────────────
// Runs a continuous RAF loop: static fog + animated drips + written text.
function useMirrorCanvas() {
  const canvasRef   = useRef(null)
  const fogRef      = useRef(null)
  const dropsRef    = useRef([])
  const itemsRef    = useRef([])   // [{ text, fontSize, yCentre, progress }]
  const rafRef      = useRef(null)

  const setup = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
    fogRef.current   = buildFogBuffer(canvas.width, canvas.height)
    dropsRef.current = Array.from({ length: 45 }, () => createDroplet(canvas.width, canvas.height))
  }, [])

  useEffect(() => {
    setup()
    window.addEventListener('resize', setup)

    function loop() {
      const canvas = canvasRef.current
      const fog    = fogRef.current
      if (canvas && fog) {
        const ctx = canvas.getContext('2d')
        const W = canvas.width, H = canvas.height
        ctx.clearRect(0, 0, W, H)
        ctx.drawImage(fog, 0, 0)
        drawDroplets(ctx, dropsRef.current, W, H)
        itemsRef.current.forEach(({ text, fontSize, y, progress, clearProgress = 0, wipePath }) => {
          const lineH     = fontSize * 1.55              // write-in band height
          const wipeH     = lineH + 70                   // wipe band 70px taller
          if (clearProgress > 0) {
            // Wipe this line clean — up-and-down hand motion reveals camera
            wipeStripe(ctx, W, y, wipeH, clearProgress, wipePath)
          } else if (progress > 0) {
            // Write text into fog — clip to just this line's band
            ctx.save()
            ctx.beginPath()
            ctx.rect(0, y - lineH / 2, W * progress, lineH)
            ctx.clip()
            cutLine(ctx, W, text, y, fontSize)
            ctx.restore()
          }
        })
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', setup)
      cancelAnimationFrame(rafRef.current)
    }
  }, [setup])

  // Animate text writing — per-line start offsets, scripture delayed after hero
  const writeText = useCallback((scripture, truth, feeling) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const W = canvas.width, H = canvas.height

    const fsLarge = Math.min(Math.floor(W * 0.098), 72)
    const fsMed   = Math.min(Math.floor(W * 0.068), 52)   // bigger top feeling text
    const fsSmall = Math.min(Math.floor(W * 0.042), 32)   // bigger scripture text
    const fsTiny  = Math.min(Math.floor(W * 0.028), 20)

    const tmp = makeCanvas(W, H)
    const tc  = tmp.getContext('2d')

    const calcBlock = (text, fs, yCentre) => {
      tc.font = `900 ${fs}px Caveat`
      const lines  = wrapText(tc, text.toUpperCase(), W * 0.82)
      const lineH  = fs * 1.22
      const startY = yCentre - ((lines.length - 1) * lineH) / 2
      return lines.map((l, i) => ({ text: l, fontSize: fs, y: startY + i * lineH }))
    }

    const WRITE_DUR    = 750   // ms per line write-in
    const STAGGER      = 820   // ms between lines
    const WIPE_DUR     = 480   // ms per feeling-line wipe-away
    const WIPE_STAGGER = 340   // ms between feeling line wipes
    const SCRIPT_PAUSE = 1500  // extra pause before scripture

    let t = 0

    // ── Feeling lines (write in, then wipe clean as truth starts) ──────────────
    const feelingLines = calcBlock(feeling, fsMed, H * 0.20)
    const feelingItems = feelingLines.map((line, i) => {
      const item = {
        ...line,
        startOffset: t,
        clearOffset: null,
        wipePath: makeWipePath(W, H, line.y, line.fontSize * 1.55 + 70, i * 37 + 11),
      }
      t += STAGGER
      return item
    })
    // Truth starts at current t — feeling lines begin clearing simultaneously
    const truthStart = t
    feelingItems.forEach((item, i) => {
      item.clearOffset = truthStart + i * WIPE_STAGGER
    })

    // ── Truth lines ─────────────────────────────────────────────────────────────
    const truthItems = calcBlock(truth, fsLarge, H * 0.50).map(line => {
      const item = { ...line, startOffset: t }
      t += STAGGER
      return item
    })

    t += SCRIPT_PAUSE

    // ── Scripture lines ─────────────────────────────────────────────────────────
    const scriptItems = calcBlock(`"${scripture.text}"`, fsSmall, H * 0.76).map(line => {
      const item = { ...line, startOffset: t }
      t += STAGGER
      return item
    })
    const refItem = {
      text: scripture.reference.toUpperCase(),
      fontSize: fsTiny,
      y: H * 0.90,
      startOffset: t,
    }

    const allLines = [...feelingItems, ...truthItems, ...scriptItems, refItem]
    itemsRef.current = allLines.map(l => ({ ...l, progress: 0, clearProgress: 0 }))

    let startTs = null
    function animate(ts) {
      if (!startTs) startTs = ts
      const elapsed = ts - startTs
      itemsRef.current = allLines.map(line => ({
        ...line,
        progress:      Math.max(0, Math.min(1, (elapsed - line.startOffset) / WRITE_DUR)),
        clearProgress: line.clearOffset != null
          ? Math.max(0, Math.min(1, (elapsed - line.clearOffset) / WIPE_DUR))
          : 0,
      }))
      if (itemsRef.current.some(it =>
        it.progress < 1 || (it.clearOffset != null && it.clearProgress < 1)
      )) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [])

  const clearText = useCallback(() => { itemsRef.current = [] }, [])

  return { canvasRef, writeText, clearText }
}

// ─── Prompts ──────────────────────────────────────────────────────────────────
const PROMPTS = [
  "I feel like I'm not enough",
  "I feel forgotten",
  "I feel ashamed",
  "I feel afraid",
  "I feel alone",
  "I feel hopeless",
  "I feel worthless",
  "I feel lost",
  "I feel broken",
  "I feel anxious",
  "I feel rejected",
  "I feel weak",
  "I feel unworthy of love",
  "I feel invisible",
  "I feel like a failure",
]

// ─── Prompt swipe carousel ─────────────────────────────────────────────────────
function PromptSwiper({ onSubmit }) {
  const scrollRef = useRef(null)
  const timerRef  = useRef(null)
  const [idx, setIdx] = useState(0)

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const newIdx = Math.round(el.scrollLeft / el.clientWidth)
      if (newIdx >= 0 && newIdx < PROMPTS.length) setIdx(newIdx)
    }, 60)
  }

  return (
    <div style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.2rem)' }}>
      {/* Hint */}
      <p style={{
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '0.5rem',
        color: 'rgba(255,255,255,0.2)',
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        marginBottom: '0.55rem',
      }}>swipe to find your feeling</p>

      {/* Carousel */}
      <div style={{ position: 'relative' }}>
        {/* Edge fade */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, transparent 26%, transparent 74%, rgba(0,0,0,0.72) 100%)',
        }} />
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {PROMPTS.map((p, i) => (
            <div key={p}
              onClick={() => onSubmit(PROMPTS[idx])}
              style={{
                scrollSnapAlign: 'center',
                flexShrink: 0,
                width: '100%',
                textAlign: 'center',
                padding: '0.15rem 3rem',
                cursor: 'pointer',
              }}>
              <span style={{
                fontFamily: 'Caveat, cursive',
                fontWeight: 800,
                fontSize: 'clamp(1.1rem, 5.5vw, 1.45rem)',
                color: `rgba(255,255,255,${i === idx ? 0.92 : 0.22})`,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                lineHeight: 1.2,
                transition: 'color 0.2s',
              }}>{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tap hint */}
      <p style={{
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '0.5rem',
        color: 'rgba(255,255,255,0.18)',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        marginTop: '0.55rem',
      }}>tap to reflect</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ScriptureMirror() {
  const { videoRef, ready: camReady } = useCamera()
  const { canvasRef, writeText, clearText } = useMirrorCanvas()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(prompt) {
    const input = prompt.trim()
    if (!input) return
    const [best] = getScripturesForFeeling(input)
    if (!best) return
    const truth = getMirrorTruth(input, best)
    setSubmitted(true)
    writeText(best, truth, input)
  }

  function handleReset() {
    clearText()
    setSubmitted(false)
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">

      {/* Camera */}
      <video ref={videoRef} autoPlay playsInline muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 1,
          transform: 'scaleX(-1)',
          filter: 'blur(3.5px) brightness(0.72) saturate(0.75)',
          opacity: camReady ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      />

      {/* Fog + drips + writing */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }} />

      {/* UI */}
      <div className="absolute inset-0 flex flex-col" style={{ zIndex: 10 }}>

        {/* Top — swipe selector (input) or spacer (submitted) */}
        <div style={{ paddingTop: 'max(2.2rem, env(safe-area-inset-top, 1rem))' }}>
          {!submitted ? (
            <PromptSwiper onSubmit={handleSubmit} />
          ) : null}
        </div>

        <div className="flex-1" />

        {/* Bottom — look again when submitted */}
        <div>
          {submitted && (
            <div className="text-center" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 2.5rem)' }}>
              <button onClick={handleReset}
                style={{
                  fontFamily: 'Caveat, cursive',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.3)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >look again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
