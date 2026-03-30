import { useState, useRef, useEffect, useCallback } from 'react'
import { RotateCcw, Sparkles } from 'lucide-react'
import { getScripturesForFeeling, getMirrorTruth } from '../data/identityScriptures'

// ─── Camera ───────────────────────────────────────────────────────────────────
function useCamera() {
  const videoRef = useRef(null)
  const [ready,  setReady]  = useState(false)
  const [denied, setDenied] = useState(false)
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
      } catch { setDenied(true) }
    })()
    return () => stream?.getTracks().forEach(t => t.stop())
  }, [])
  return { videoRef, ready, denied }
}

// ─── Seeded RNG ───────────────────────────────────────────────────────────────
function rng(seed) {
  let s = seed
  return () => {
    s += 0x6d2b79f5
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ─── Build fog layer (OffscreenCanvas, drawn once) ────────────────────────────
function buildFogBuffer(W, H) {
  const buf = new OffscreenCanvas(W, H)
  const c   = buf.getContext('2d')
  const r   = rng(7)

  // Dense fog base
  c.fillStyle = 'rgba(198,206,216,0.85)'
  c.fillRect(0, 0, W, H)

  // Fog texture blobs
  for (let i = 0; i < 150; i++) {
    const x = r()*W, y = r()*H, rad = 28 + r()*110, a = 0.03 + r()*0.07
    const g = c.createRadialGradient(x, y, 0, x, y, rad)
    g.addColorStop(0, `rgba(218,223,230,${a})`)
    g.addColorStop(1, 'rgba(200,205,215,0)')
    c.fillStyle = g
    c.fillRect(x-rad, y-rad, rad*2, rad*2)
  }

  // Drip streaks
  for (let i = 0; i < 70; i++) {
    const x = r()*W, y0 = r()*H*0.65
    const len = 25+r()*110, lw = 0.6+r()*1.8, a = 0.1+r()*0.28
    const d = c.createLinearGradient(x, y0, x, y0+len)
    d.addColorStop(0,   `rgba(192,200,212,${a})`)
    d.addColorStop(0.6, `rgba(192,200,212,${a*0.4})`)
    d.addColorStop(1,   'rgba(192,200,212,0)')
    c.strokeStyle = d; c.lineWidth = lw
    c.beginPath(); c.moveTo(x, y0)
    c.bezierCurveTo(x+(r()-.5)*5, y0+len*.3, x+(r()-.5)*5, y0+len*.7, x+(r()-.5)*4, y0+len)
    c.stroke()
  }

  // Droplets with specular highlight
  for (let i = 0; i < 480; i++) {
    const x = r()*W, y = r()*H, rad = 0.5+r()*3.4, a = 0.28+r()*0.6
    c.beginPath(); c.arc(x, y, rad, 0, Math.PI*2)
    c.fillStyle = `rgba(210,218,228,${a})`; c.fill()
    c.beginPath(); c.arc(x-rad*.28, y-rad*.28, rad*.36, 0, Math.PI*2)
    c.fillStyle = `rgba(255,255,255,${a*.62})`; c.fill()
  }

  // Warm left-side light glow (matches photo)
  const wl = c.createRadialGradient(W*.16, H*.42, 0, W*.16, H*.42, W*.42)
  wl.addColorStop(0,   'rgba(255,218,130,0.26)')
  wl.addColorStop(0.4, 'rgba(255,195,90,0.08)')
  wl.addColorStop(1,   'rgba(0,0,0,0)')
  c.fillStyle = wl; c.fillRect(0, 0, W, H)

  // Edge vignette
  const v = c.createRadialGradient(W/2, H/2, Math.min(W,H)*.25, W/2, H/2, Math.max(W,H)*.78)
  v.addColorStop(0, 'rgba(0,0,0,0)')
  v.addColorStop(1, 'rgba(0,0,0,0.38)')
  c.fillStyle = v; c.fillRect(0, 0, W, H)

  return buf
}

// ─── Word-wrap helper ─────────────────────────────────────────────────────────
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

// ─── Cut text into fog (destination-out + blur = soft finger edges) ───────────
function cutText(ctx, W, H, text, yCentre, fontSize) {
  ctx.save()
  ctx.globalCompositeOperation = 'destination-out'
  ctx.font = `600 ${fontSize}px Caveat`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const lines = wrapText(ctx, text, W * 0.75)
  const lineH  = fontSize * 1.18
  const startY = yCentre - ((lines.length - 1) * lineH) / 2

  lines.forEach((line, i) => {
    const y = startY + i * lineH
    // Wide soft blur — outer edge of the finger stroke
    ctx.filter = 'blur(6px)'
    ctx.fillStyle = 'rgba(0,0,0,0.55)'
    ctx.fillText(line, W/2, y)
    // Medium blur — fills the stroke width
    ctx.filter = 'blur(2.5px)'
    ctx.fillStyle = 'rgba(0,0,0,0.9)'
    ctx.fillText(line, W/2, y)
    // Sharp centre pass — fully clears the path
    ctx.filter = 'blur(0.8px)'
    ctx.fillStyle = 'rgba(0,0,0,1)'
    ctx.fillText(line, W/2, y)
    ctx.filter = 'none'
  })

  ctx.globalCompositeOperation = 'source-over'
  ctx.restore()
}

// ─── Canvas hook ──────────────────────────────────────────────────────────────
function useMirrorCanvas(items) {
  // items = [{ text, progress }]  where progress 0→1
  const canvasRef = useRef(null)
  const fogRef    = useRef(null)
  const rafRef    = useRef(null)

  const setup = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
    fogRef.current = buildFogBuffer(canvas.width, canvas.height)
  }, [])

  useEffect(() => {
    setup()
    window.addEventListener('resize', setup)
    return () => window.removeEventListener('resize', setup)
  }, [setup])

  // Redraw whenever items change
  useEffect(() => {
    cancelAnimationFrame(rafRef.current)

    const canvas = canvasRef.current
    const fog    = fogRef.current
    if (!canvas || !fog) return

    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const fs = Math.min(Math.floor(W * 0.10), 72)

    // Y positions depend on count
    const n  = items.length
    const ys = n === 0 ? []
      : n === 1 ? [H * 0.42]
      : n === 2 ? [H * 0.33, H * 0.60]
      :           [H * 0.27, H * 0.50, H * 0.72]

    function frame() {
      ctx.clearRect(0, 0, W, H)
      ctx.drawImage(fog, 0, 0)

      items.forEach(({ text, progress }, i) => {
        if (progress <= 0) return
        ctx.save()
        ctx.beginPath()
        ctx.rect(0, 0, W * progress, H)
        ctx.clip()
        cutText(ctx, W, H, text, ys[i] ?? H * 0.45, fs)
        ctx.restore()
      })
    }

    frame()
  }, [items])

  return canvasRef
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
  const [feeling,      setFeeling]      = useState('')
  const [submitted,    setSubmitted]    = useState(false)
  const [scriptures,   setScriptures]   = useState([])
  const [mirrorTruths, setMirrorTruths] = useState([])
  const [canvasItems,  setCanvasItems]  = useState([])
  const textareaRef = useRef(null)
  const rafRef      = useRef(null)

  const canvasRef = useMirrorCanvas(canvasItems)

  // Animate progress 0→1 for each truth, staggered
  const animateTruths = useCallback((truths) => {
    cancelAnimationFrame(rafRef.current)
    const WRITE_DUR = 1300   // ms to write each truth
    const STAGGER   = 1500   // ms between each
    let start = null

    function tick(ts) {
      if (!start) start = ts
      const elapsed = ts - start
      const next = truths.map((text, i) => ({
        text,
        progress: Math.max(0, Math.min(1, (elapsed - i * STAGGER) / WRITE_DUR)),
      }))
      setCanvasItems(next)
      if (next.some(it => it.progress < 1)) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  function handleSubmit(e) {
    e?.preventDefault()
    const input = feeling.trim()
    if (!input) return
    const results = getScripturesForFeeling(input)
    const truths  = results.map(s => getMirrorTruth(input, s))
    setScriptures(results)
    setMirrorTruths(truths)
    setSubmitted(true)
    animateTruths(truths)
  }

  function handleReset() {
    cancelAnimationFrame(rafRef.current)
    setFeeling('')
    setSubmitted(false)
    setScriptures([])
    setMirrorTruths([])
    setCanvasItems([])
    setTimeout(() => textareaRef.current?.focus(), 100)
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ paddingTop: 'env(safe-area-inset-top)' }}>

      {/* Camera background */}
      <video
        ref={videoRef} autoPlay playsInline muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 1,
          transform: 'scaleX(-1)',
          filter: 'blur(10px) brightness(0.58) saturate(0.7)',
          opacity: camReady ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      />

      {/* Fog + writing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 2 }}
      />

      {/* UI layer */}
      <div className="absolute inset-0 flex flex-col" style={{ zIndex: 10 }}>

        {/* Top label */}
        <div className="text-center" style={{ paddingTop: '4.5rem', paddingBottom: '0.5rem' }}>
          <p className="font-sans uppercase tracking-widest"
             style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.28)' }}>
            Scripture Mirror
          </p>
        </div>

        {/* Spacer — pushes UI to bottom */}
        <div className="flex-1" />

        {/* Bottom panel */}
        <div className="px-4" style={{ paddingBottom: 'max(7rem, calc(env(safe-area-inset-bottom) + 7rem))' }}>
          {!submitted ? (
            /* ── Input panel ── */
            <div className="rounded-2xl p-4"
              style={{
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.09)',
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
                    style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.42)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >{p}</button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2 items-end">
                <textarea
                  ref={textareaRef}
                  value={feeling}
                  onChange={e => setFeeling(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit() } }}
                  placeholder="I feel…"
                  rows={2} maxLength={400}
                  className="flex-1 font-sans text-sm text-white placeholder:text-white/25 resize-none outline-none leading-relaxed rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.09)' }}
                />
                <button type="submit" disabled={!feeling.trim()}
                  className="rounded-xl px-4 py-3 font-sans text-sm disabled:opacity-30 flex items-center gap-1.5"
                  style={{ background: 'rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.18)', whiteSpace: 'nowrap' }}
                >
                  <Sparkles size={14} />
                </button>
              </form>
            </div>
          ) : (
            /* ── Results — verse references fade in after writing ── */
            <div className="flex flex-col gap-2">
              {scriptures.map((s, i) => (
                <div key={s.id}
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: 'rgba(0,0,0,0.45)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    opacity: 0,
                    animation: `verse-in 0.7s ${i * 1500 + 1100}ms ease forwards`,
                  }}
                >
                  <p className="font-sans uppercase tracking-widest mb-1"
                     style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.3)' }}>
                    {s.reference}
                  </p>
                  <p className="font-sans leading-relaxed"
                     style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.48)' }}>
                    "{s.text}"
                  </p>
                </div>
              ))}

              <button onClick={handleReset}
                className="self-center mt-1 inline-flex items-center gap-1.5 font-sans text-xs rounded-full px-5 py-2"
                style={{
                  color: 'rgba(255,255,255,0.32)',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <RotateCcw size={12} /> Look again
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes verse-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
