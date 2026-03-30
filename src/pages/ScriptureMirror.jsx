import { useState, useRef, useEffect } from 'react'
import { RotateCcw, Sparkles, CameraOff } from 'lucide-react'
import { getScripturesForFeeling, getMirrorTruth } from '../data/identityScriptures'

// ─── Camera hook ──────────────────────────────────────────────────────────────
function useCamera() {
  const videoRef = useRef(null)
  const [ready,  setReady]  = useState(false)
  const [denied, setDenied] = useState(false)

  useEffect(() => {
    let stream = null
    async function start() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = () => setReady(true)
        }
      } catch {
        setDenied(true)
      }
    }
    start()
    return () => { stream?.getTracks().forEach(t => t.stop()) }
  }, [])

  return { videoRef, ready, denied }
}

// ─── Fog canvas ───────────────────────────────────────────────────────────────
// When camera is live this sits on top at partial opacity so the camera shows
// through. When camera is denied it's the sole background.
function seededRng(seed) {
  let s = seed
  return () => {
    s += 0x6d2b79f5
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function drawFog(canvas, cameraActive) {
  const ctx = canvas.getContext('2d')
  const W = canvas.width, H = canvas.height
  ctx.clearRect(0, 0, W, H)

  if (!cameraActive) {
    // Warm dark background (used when no camera)
    const bg = ctx.createLinearGradient(0, 0, W * 0.5, H)
    bg.addColorStop(0,   '#1a1208')
    bg.addColorStop(0.5, '#100d08')
    bg.addColorStop(1,   '#080806')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, W, H)

    // Warm vanity-bulb glow
    const light = ctx.createRadialGradient(W * 0.5, 0, 0, W * 0.5, H * 0.15, W * 0.8)
    light.addColorStop(0, 'rgba(255,210,130,0.14)')
    light.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = light
    ctx.fillRect(0, 0, W, H)
  }

  // Fog base (lighter when camera is underneath)
  ctx.fillStyle = cameraActive ? 'rgba(195,205,215,0.42)' : 'rgba(205,210,218,0.55)'
  ctx.fillRect(0, 0, W, H)

  // Fog texture — soft overlapping blobs
  const rng = seededRng(42)
  for (let i = 0; i < 110; i++) {
    const x = rng() * W, y = rng() * H, r = 25 + rng() * 95
    const a = 0.025 + rng() * 0.055
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, `rgba(220,223,230,${a})`)
    g.addColorStop(1, 'rgba(200,205,215,0)')
    ctx.fillStyle = g
    ctx.fillRect(x - r, y - r, r * 2, r * 2)
  }

  // Drip streaks
  for (let i = 0; i < 50; i++) {
    const x = rng() * W, y0 = rng() * H * 0.55
    const len = 18 + rng() * 70, lw = 0.4 + rng() * 1.2, a = 0.08 + rng() * 0.22
    const drip = ctx.createLinearGradient(x, y0, x, y0 + len)
    drip.addColorStop(0,   `rgba(210,215,222,${a})`)
    drip.addColorStop(0.7, `rgba(210,215,222,${a * 0.4})`)
    drip.addColorStop(1,   'rgba(210,215,222,0)')
    ctx.strokeStyle = drip
    ctx.lineWidth = lw
    ctx.beginPath()
    ctx.moveTo(x, y0)
    ctx.bezierCurveTo(
      x + (rng() - 0.5) * 4, y0 + len * 0.3,
      x + (rng() - 0.5) * 4, y0 + len * 0.7,
      x + (rng() - 0.5) * 3, y0 + len,
    )
    ctx.stroke()
  }

  // Water droplets
  for (let i = 0; i < 300; i++) {
    const x = rng() * W, y = rng() * H
    const r = 0.6 + rng() * 2.8, a = 0.25 + rng() * 0.55
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(215,222,230,${a})`
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x - r * 0.28, y - r * 0.28, r * 0.38, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${a * 0.6})`
    ctx.fill()
  }

  // Edge vignette
  const vig = ctx.createRadialGradient(W/2, H/2, Math.min(W,H) * 0.3, W/2, H/2, Math.max(W,H) * 0.75)
  vig.addColorStop(0, 'rgba(0,0,0,0)')
  vig.addColorStop(1, 'rgba(0,0,0,0.4)')
  ctx.fillStyle = vig
  ctx.fillRect(0, 0, W, H)
}

function FogCanvas({ cameraActive }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      drawFog(canvas, cameraActive)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [cameraActive])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  )
}

// ─── Wipe card ────────────────────────────────────────────────────────────────
// Uses transform: scaleX (GPU-accelerated, works in all browsers).
// transform-origin: right  →  element shrinks toward the right edge,
// so the LEFT side clears first = natural left-to-right finger wipe.
function WipeCard({ reference, text, mirrorTruth, index }) {
  const DELAY = index * 440
  const DUR   = 1150

  return (
    <div className="relative rounded-2xl overflow-hidden">

      {/* Dark glass always behind the fog */}
      <div className="absolute inset-0" style={{
        background: 'rgba(6,5,4,0.68)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,255,255,0.09)',
      }} />

      {/* Fog overlay — scaleX from 1→0, origin right → wipes left to right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(192,202,215,0.88)',
          transformOrigin: 'right center',
          animation: `fog-wipe ${DUR}ms ${DELAY}ms cubic-bezier(0.4,0,0.2,1) forwards`,
          zIndex: 10,
        }}
      />

      {/* Gleam strip — rides the wipe boundary */}
      <div
        className="absolute inset-y-0 pointer-events-none"
        style={{
          left: 0,
          width: '14px',
          background: 'linear-gradient(90deg, transparent, rgba(238,245,255,0.85), transparent)',
          animation: `gleam-move ${DUR}ms ${DELAY}ms cubic-bezier(0.4,0,0.2,1) forwards`,
          zIndex: 11,
        }}
      />

      {/* Text content */}
      <div
        className="relative px-6 py-5"
        style={{
          zIndex: 5,
          opacity: 0,
          animation: `text-emerge 0.85s ${DELAY + 160}ms ease forwards`,
        }}
      >
        <p
          className="font-handwriting leading-snug mb-3"
          style={{
            fontSize: 'clamp(1.45rem, 4vw, 1.95rem)',
            color: 'rgba(248,244,235,0.96)',
            textShadow: '0 0 20px rgba(255,255,255,0.15)',
          }}
        >
          {mirrorTruth}
        </p>
        <p
          className="font-sans uppercase tracking-widest mb-2"
          style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.33)' }}
        >
          {reference}
        </p>
        <p
          className="font-sans leading-relaxed"
          style={{
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.48)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '0.6rem',
          }}
        >
          "{text}"
        </p>
      </div>
    </div>
  )
}

// ─── Prompt chips ─────────────────────────────────────────────────────────────
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
  const { videoRef, ready: camReady, denied: camDenied } = useCamera()
  const [feeling,     setFeeling]     = useState('')
  const [submitted,   setSubmitted]   = useState(false)
  const [scriptures,  setScriptures]  = useState([])
  const [mirrorTruths,setMirrorTruths]= useState([])
  const textareaRef = useRef(null)
  const resultsRef  = useRef(null)

  function handleSubmit(e) {
    e?.preventDefault()
    const input = feeling.trim()
    if (!input) return
    const results = getScripturesForFeeling(input)
    setScriptures(results)
    setMirrorTruths(results.map(s => getMirrorTruth(input, s)))
    setSubmitted(true)
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
  }

  function handleReset() {
    setFeeling('')
    setSubmitted(false)
    setScriptures([])
    setMirrorTruths([])
    setTimeout(() => textareaRef.current?.focus(), 100)
  }

  return (
    <div className="pt-16 min-h-screen bg-black relative">

      {/* ── Camera layer ── */}
      <video
        ref={videoRef}
        autoPlay playsInline muted
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          zIndex: 1,
          transform: 'scaleX(-1)',          // mirror flip
          filter: 'blur(12px) brightness(0.55) saturate(0.7)',
          opacity: camReady ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      />

      {/* ── Fog canvas (on top of camera, or sole bg if no camera) ── */}
      <FogCanvas cameraActive={camReady} />

      {/* ── No-camera notice ── */}
      {camDenied && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 flex items-center gap-2 font-sans text-xs rounded-full px-4 py-2 pointer-events-none"
          style={{ zIndex: 20, color: 'rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.3)' }}
        >
          <CameraOff size={12} /> Enable camera for the full mirror effect
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative min-h-screen flex flex-col" style={{ zIndex: 10 }}>

        {/* Header */}
        <div className="text-center pt-12 pb-6 px-4">
          <p className="font-sans uppercase tracking-widest mb-3"
             style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)' }}>
            Scripture Mirror
          </p>
          <h1 className="font-serif leading-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                color: 'rgba(255,255,255,0.82)',
                textShadow: '0 0 40px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.7)',
              }}>
            What does God's Word<br />say about you?
          </h1>
        </div>

        {/* Input */}
        {!submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
            <div className="w-full max-w-lg">
              <p className="font-sans uppercase tracking-widest text-center mb-3"
                 style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.22)' }}>
                Start with…
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {PROMPTS.map(p => (
                  <button key={p} onClick={() => { setFeeling(p); setTimeout(() => textareaRef.current?.focus(), 50) }}
                    className="font-sans rounded-full px-3 py-1.5 transition-all"
                    style={{
                      fontSize: '0.73rem',
                      color: 'rgba(255,255,255,0.42)',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.11)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.82)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.42)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  >{p}</button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <textarea
                  ref={textareaRef}
                  value={feeling}
                  onChange={e => setFeeling(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit() } }}
                  placeholder="I feel… / I think I am…"
                  rows={3} maxLength={400}
                  className="w-full font-sans text-base text-white placeholder:text-white/25 resize-none outline-none leading-relaxed rounded-2xl px-5 py-4"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.11)',
                  }}
                />
                <button type="submit" disabled={!feeling.trim()}
                  className="mt-3 w-full flex items-center justify-center gap-2 font-sans font-semibold text-sm py-3.5 rounded-full disabled:opacity-30"
                  style={{
                    color: 'rgba(255,255,255,0.88)',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Sparkles size={14} /> Look in the mirror
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div ref={resultsRef} className="flex-1 flex flex-col items-center px-4 pb-20 pt-4">
            <div className="w-full max-w-lg mb-7 text-center">
              <p className="font-sans uppercase tracking-widest mb-2"
                 style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)' }}>
                You said
              </p>
              <p className="font-handwriting"
                 style={{ fontSize: 'clamp(1.2rem,3vw,1.5rem)', color: 'rgba(255,255,255,0.42)' }}>
                "{feeling}"
              </p>
            </div>

            <div className="w-full max-w-lg flex flex-col gap-4">
              {scriptures.map((s, i) => (
                <WipeCard key={s.id} index={i} reference={s.reference} text={s.text} mirrorTruth={mirrorTruths[i]} />
              ))}
            </div>

            <button onClick={handleReset}
              className="mt-10 inline-flex items-center gap-2 font-sans text-sm rounded-full px-7 py-3"
              style={{
                color: 'rgba(255,255,255,0.35)',
                border: '1px solid rgba(255,255,255,0.09)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              <RotateCcw size={13} /> Look again
            </button>
          </div>
        )}
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        /* scaleX 1→0 with origin:right = fog retreats left-to-right */
        @keyframes fog-wipe {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
        /* Gleam strip travels across card width */
        @keyframes gleam-move {
          from { left: -7px; }
          to   { left: calc(100% + 7px); }
        }
        @keyframes text-emerge {
          from { opacity: 0; filter: blur(6px); }
          to   { opacity: 1; filter: blur(0px); }
        }
      `}</style>
    </div>
  )
}
