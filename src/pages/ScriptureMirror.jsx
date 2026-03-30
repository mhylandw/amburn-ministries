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
  const buf = new OffscreenCanvas(W, H)
  const c   = buf.getContext('2d')
  const r   = mkRng(7)

  // Base fog
  c.fillStyle = 'rgba(198,206,216,0.34)'
  c.fillRect(0, 0, W, H)

  // Texture blobs
  for (let i = 0; i < 150; i++) {
    const x = r()*W, y = r()*H, rad = 28+r()*110, a = 0.025+r()*0.06
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
  const rad = 1.2 + Math.random() * 3.8
  return {
    x:        Math.random() * W,
    y:        randomY ? Math.random() * H : -(rad + Math.random() * 60),
    rad,
    speed:    0.2 + rad * 0.32 + Math.random() * 0.4,
    alpha:    0.35 + Math.random() * 0.5,
    trailLen: rad * (4 + Math.random() * 9),
  }
}

function drawDroplets(ctx, drops, W, H) {
  drops.forEach(d => {
    // Advance
    d.y += d.speed
    if (d.y > H + d.rad + d.trailLen) {
      Object.assign(d, createDroplet(W, H, false))
    }

    // Trail — gradient line above the droplet
    const trail = ctx.createLinearGradient(d.x, d.y - d.trailLen, d.x, d.y)
    trail.addColorStop(0, `rgba(210,218,230,0)`)
    trail.addColorStop(1, `rgba(210,218,230,${d.alpha * 0.55})`)
    ctx.strokeStyle = trail
    ctx.lineWidth   = d.rad * 0.55
    ctx.beginPath()
    ctx.moveTo(d.x, d.y - d.trailLen)
    ctx.lineTo(d.x, d.y)
    ctx.stroke()

    // Droplet body
    ctx.beginPath()
    ctx.arc(d.x, d.y, d.rad, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(215,222,232,${d.alpha})`
    ctx.fill()

    // Specular highlight
    ctx.beginPath()
    ctx.arc(d.x - d.rad*.28, d.y - d.rad*.28, d.rad*.36, 0, Math.PI*2)
    ctx.fillStyle = `rgba(255,255,255,${d.alpha * 0.62})`
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

// ─── Cut text into fog via destination-out ────────────────────────────────────
function cutText(ctx, W, H, text, yCentre, fontSize) {
  ctx.save()
  ctx.globalCompositeOperation = 'destination-out'
  ctx.font        = `800 ${fontSize}px Caveat`
  ctx.textAlign   = 'center'
  ctx.textBaseline= 'middle'

  const lines  = wrapText(ctx, text, W * 0.78)
  const lineH  = fontSize * 1.18
  const startY = yCentre - ((lines.length - 1) * lineH) / 2

  lines.forEach((line, i) => {
    const y = startY + i * lineH
    ctx.filter = 'blur(9px)';   ctx.fillStyle = 'rgba(0,0,0,0.5)';  ctx.fillText(line, W/2, y)
    ctx.filter = 'blur(4px)';   ctx.fillStyle = 'rgba(0,0,0,0.9)';  ctx.fillText(line, W/2, y)
    ctx.filter = 'blur(1px)';   ctx.fillStyle = 'rgba(0,0,0,1)';    ctx.fillText(line, W/2, y)
    ctx.filter = 'none'
  })

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
        itemsRef.current.forEach(({ text, fontSize, yCentre, progress }) => {
          if (progress <= 0) return
          ctx.save()
          ctx.beginPath()
          ctx.rect(0, 0, W * progress, H)
          ctx.clip()
          cutText(ctx, W, H, text, yCentre, fontSize)
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

  // Animate text writing — called externally
  const writeText = useCallback((scripture, truth) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const W = canvas.width, H = canvas.height
    const fsLarge  = Math.min(Math.floor(W * 0.095), 70)
    const fsMed    = Math.min(Math.floor(W * 0.048), 34)
    const fsSmall  = Math.min(Math.floor(W * 0.030), 22)

    const allItems = [
      { text: truth,              fontSize: fsLarge, yCentre: H * 0.30, progress: 0 },
      { text: `"${scripture.text}"`, fontSize: fsMed, yCentre: H * 0.58, progress: 0 },
      { text: scripture.reference,  fontSize: fsSmall, yCentre: H * 0.76, progress: 0 },
    ]
    itemsRef.current = allItems

    const WRITE_DUR = 1300
    const STAGGER   = 1400
    let startTs = null

    function animate(ts) {
      if (!startTs) startTs = ts
      const elapsed = ts - startTs
      itemsRef.current = allItems.map((item, i) => ({
        ...item,
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
]

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
    writeText(best, truth)
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
          filter: 'blur(10px) brightness(0.58) saturate(0.7)',
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
        <div className="px-4" style={{ paddingBottom: 'max(7rem, calc(env(safe-area-inset-bottom) + 7rem))' }}>
          {!submitted ? (
            <div className="rounded-2xl p-4"
              style={{
                background: 'rgba(0,0,0,0.48)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="font-sans uppercase tracking-widest text-center mb-3"
                 style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.28)' }}>
                What do you feel or believe about yourself?
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                {PROMPTS.map(p => (
                  <button key={p}
                    onClick={() => { setFeeling(p); setTimeout(() => textareaRef.current?.focus(), 50) }}
                    className="font-sans rounded-full px-2.5 py-1"
                    style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}
                  >{p}</button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2 items-end">
                <textarea ref={textareaRef} value={feeling}
                  onChange={e => setFeeling(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit() } }}
                  placeholder="I feel…" rows={2} maxLength={400}
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
