import { useState, useRef, useEffect, useCallback } from 'react'
import { Sparkles } from 'lucide-react'
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
  c.fillStyle = 'rgba(198,206,216,0.22)'
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

// ─── Drip droplets ────────────────────────────────────────────────────────────
function createDroplet(W, H, randomY = true) {
  const rad = 1.5 + Math.random() * 4.0
  return {
    x:         Math.random() * W,
    y:         randomY ? Math.random() * H : -(rad + Math.random() * 80),
    rad,
    speed:     0.8 + rad * 0.7 + Math.random() * 1.0,
    alpha:     0.4 + Math.random() * 0.45,
    trailLen:  rad * (18 + Math.random() * 28),
    // squirm / wobble
    waveAmp:   0.4 + Math.random() * 1.4,   // horizontal drift amplitude (px)
    waveFreq:  0.018 + Math.random() * 0.04, // cycles per pixel fallen
    wavePhase: Math.random() * Math.PI * 2,
    xBase:     0,   // accumulated x offset (set on spawn)
  }
}

function drawDroplets(ctx, drops, W, H) {
  drops.forEach(d => {
    // Squirm — update x using a sine based on how far it has fallen
    d.x += Math.sin(d.y * d.waveFreq + d.wavePhase) * d.waveAmp * 0.18

    // Advance
    d.y += d.speed
    if (d.y > H + d.rad + d.trailLen) {
      Object.assign(d, createDroplet(W, H, false))
      return
    }

    const { x, y, rad, alpha, trailLen, waveAmp, waveFreq, wavePhase } = d

    // ── Trail: tapered, slightly wiggly streak ──────────────────────────────
    const segments = Math.max(12, Math.floor(trailLen / 3))
    for (let i = 0; i < segments; i++) {
      const t0 = i / segments
      const t1 = (i + 1) / segments
      const py0 = y - trailLen * (1 - t0)
      const py1 = y - trailLen * (1 - t1)
      const px0 = x + Math.sin(py0 * waveFreq + wavePhase) * waveAmp * 0.6
      const px1 = x + Math.sin(py1 * waveFreq + wavePhase) * waveAmp * 0.6
      const segAlpha = alpha * 0.45 * t1          // fades toward top
      const lw = rad * 0.22 + rad * 0.55 * t1    // tapers toward top

      ctx.strokeStyle = `rgba(220,228,240,${segAlpha})`
      ctx.lineWidth   = lw
      ctx.lineCap     = 'round'
      ctx.beginPath()
      ctx.moveTo(px0, py0)
      ctx.lineTo(px1, py1)
      ctx.stroke()
    }

    // ── Teardrop body ───────────────────────────────────────────────────────
    // Pointed tip at top (y - rad*2.2), round bulge at bottom (y + rad)
    const tipY  = y - rad * 2.2
    const bodyY = y + rad
    const cpX   = rad * 1.05   // control-point half-width for curves

    ctx.beginPath()
    ctx.moveTo(x, tipY)
    ctx.bezierCurveTo(x + cpX, tipY + rad * 1.1,  x + cpX, y,  x, bodyY)
    ctx.bezierCurveTo(x - cpX, y,                 x - cpX, tipY + rad * 1.1, x, tipY)
    ctx.closePath()

    // Glassy fill: radial gradient, lighter core → darker edge
    const gFill = ctx.createRadialGradient(x - rad * 0.25, y - rad * 0.35, 0, x, y, rad * 1.5)
    gFill.addColorStop(0,   `rgba(240,248,255,${alpha * 0.92})`)
    gFill.addColorStop(0.5, `rgba(210,222,238,${alpha * 0.75})`)
    gFill.addColorStop(1,   `rgba(175,192,215,${alpha * 0.55})`)
    ctx.fillStyle = gFill
    ctx.fill()

    // Thin rim highlight
    ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.28})`
    ctx.lineWidth   = 0.6
    ctx.stroke()

    // ── Primary crescent highlight (upper-left) ─────────────────────────────
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x, tipY)
    ctx.bezierCurveTo(x + cpX, tipY + rad * 1.1,  x + cpX, y,  x, bodyY)
    ctx.bezierCurveTo(x - cpX, y,                 x - cpX, tipY + rad * 1.1, x, tipY)
    ctx.clip()
    const hiGrad = ctx.createRadialGradient(
      x - rad * 0.32, y - rad * 0.5, 0,
      x - rad * 0.32, y - rad * 0.5, rad * 0.9
    )
    hiGrad.addColorStop(0,   `rgba(255,255,255,${alpha * 0.82})`)
    hiGrad.addColorStop(0.45, `rgba(255,255,255,${alpha * 0.3})`)
    hiGrad.addColorStop(1,   `rgba(255,255,255,0)`)
    ctx.fillStyle = hiGrad
    ctx.fill()
    ctx.restore()

    // ── Small secondary specular dot ────────────────────────────────────────
    ctx.beginPath()
    ctx.arc(x + rad * 0.22, y + rad * 0.28, rad * 0.2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${alpha * 0.38})`
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
    dropsRef.current = Array.from({ length: 70 }, () => createDroplet(canvas.width, canvas.height))
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
        itemsRef.current.forEach(({ text, fontSize, y, progress }) => {
          if (progress <= 0) return
          ctx.save()
          ctx.beginPath()
          ctx.rect(0, 0, W * progress, H)
          ctx.clip()
          cutLine(ctx, W, text, y, fontSize)
          ctx.restore()
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

  // Animate text writing — pre-calculates every wrapped line, reveals one at a time
  const writeText = useCallback((scripture, truth, feeling) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const W = canvas.width, H = canvas.height

    const fsLarge  = Math.min(Math.floor(W * 0.095), 70)
    const fsMed    = Math.min(Math.floor(W * 0.048), 34)
    const fsSmall  = Math.min(Math.floor(W * 0.030), 22)
    const fsLabel  = Math.min(Math.floor(W * 0.022), 15)

    // Measure lines using a temp canvas
    const tmp = makeCanvas(W, H)
    const tc  = tmp.getContext('2d')

    const calcBlock = (text, fs, yCentre) => {
      tc.font = `800 ${fs}px Caveat`
      const lines  = wrapText(tc, text, W * 0.78)
      const lineH  = fs * 1.18
      const startY = yCentre - ((lines.length - 1) * lineH) / 2
      return lines.map((l, i) => ({ text: l, fontSize: fs, y: startY + i * lineH }))
    }

    const allLines = [
      // ── "Who you were" section ──
      { text: 'who you were', fontSize: fsLabel, y: H * 0.10 },
      ...calcBlock(feeling,                    fsMed,   H * 0.175),
      // ── "Who you're becoming" section ──
      { text: "who you're becoming", fontSize: fsLabel, y: H * 0.34 },
      ...calcBlock(truth,                      fsLarge, H * 0.44),
      // ── Scripture ──
      ...calcBlock(`"${scripture.text}"`,      fsMed,   H * 0.68),
      { text: scripture.reference,             fontSize: fsSmall, y: H * 0.83 },
    ]

    itemsRef.current = allLines.map(l => ({ ...l, progress: 0 }))

    const WRITE_DUR = 850    // ms to reveal each line
    const STAGGER   = 900    // ms between line starts
    let startTs = null

    function animate(ts) {
      if (!startTs) startTs = ts
      const elapsed = ts - startTs
      itemsRef.current = allLines.map((line, i) => ({
        ...line,
        progress: Math.max(0, Math.min(1, (elapsed - i * STAGGER) / WRITE_DUR)),
      }))
      if (itemsRef.current.some(it => it.progress < 1)) requestAnimationFrame(animate)
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
function PromptSwiper({ onSelect }) {
  const scrollRef  = useRef(null)
  const idxRef     = useRef(0)

  // initialise scroll to first item
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollLeft = 0
    onSelect(PROMPTS[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    const newIdx = Math.round(el.scrollLeft / el.clientWidth)
    if (newIdx !== idxRef.current && newIdx >= 0 && newIdx < PROMPTS.length) {
      idxRef.current = newIdx
      onSelect(PROMPTS[newIdx])
    }
  }

  return (
    <div style={{ position: 'relative', marginBottom: '0.6rem' }}>
      {/* Edge fade */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.55) 100%)',
      }} />
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
        }}
      >
        {PROMPTS.map((p, i) => (
          <div key={p} style={{
            scrollSnapAlign: 'center',
            flexShrink: 0,
            width: '100%',
            textAlign: 'center',
            padding: '0.25rem 1.5rem',
          }}>
            <span style={{
              fontFamily: 'Caveat, cursive',
              fontWeight: 800,
              fontSize: 'clamp(1.15rem, 5.5vw, 1.5rem)',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.25,
              display: 'block',
            }}>{p}</span>
          </div>
        ))}
      </div>
      {/* Hide scrollbar in webkit */}
      <style>{`.prompt-scroll::-webkit-scrollbar{display:none}`}</style>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ScriptureMirror() {
  const { videoRef, ready: camReady } = useCamera()
  const { canvasRef, writeText, clearText } = useMirrorCanvas()
  const [feeling,   setFeeling]   = useState('')
  const [submitted, setSubmitted] = useState(false)
  const textareaRef = useRef(null)

  function handleSubmit(e) {
    e?.preventDefault()
    const input = feeling.trim()
    if (!input) return
    const [best] = getScripturesForFeeling(input)
    if (!best) return
    const truth = getMirrorTruth(input, best)
    setSubmitted(true)
    writeText(best, truth, input)
  }

  function handleReset() {
    clearText()
    setFeeling('')
    setSubmitted(false)
    setTimeout(() => textareaRef.current?.focus(), 100)
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
        {/* Label */}
        <div className="text-center" style={{ paddingTop: '4.5rem' }}>
          <p className="font-sans uppercase tracking-widest"
             style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)' }}>
            Scripture Mirror
          </p>
        </div>

        <div className="flex-1" />

        {/* Bottom panel */}
        <div className="px-4" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 2rem)' }}>
          {!submitted ? (
            <div className="rounded-2xl pt-3 pb-4 px-0"
              style={{
                background: 'rgba(0,0,0,0.52)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}
            >
              <p className="font-sans uppercase tracking-widest text-center mb-2 px-4"
                 style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.28)' }}>
                What do you feel or believe about yourself?
              </p>

              {/* Swipe to pick a prompt */}
              <PromptSwiper onSelect={p => setFeeling(p)} />

              {/* Or type your own */}
              <div className="px-4">
                <form onSubmit={handleSubmit} className="flex gap-2 items-end">
                  <textarea ref={textareaRef} value={feeling}
                    onChange={e => setFeeling(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit() } }}
                    placeholder="or type your own…" rows={2} maxLength={400}
                    className="flex-1 font-sans text-sm text-white placeholder:text-white/25 resize-none outline-none leading-relaxed rounded-xl px-4 py-3"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.09)' }}
                  />
                  <button type="submit" disabled={!feeling.trim()}
                    className="rounded-xl px-4 py-3 disabled:opacity-30"
                    style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.16)' }}
                  >
                    <Sparkles size={15} />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <button onClick={handleReset}
                className="font-sans text-xs"
                style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}
              >
                look again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
