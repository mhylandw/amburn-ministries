import { useState, useRef, useEffect, useCallback } from 'react'
import { RotateCcw, Sparkles } from 'lucide-react'
import { getScripturesForFeeling, getMirrorTruth } from '../data/identityScriptures'

// ─── Procedural fog canvas ────────────────────────────────────────────────────
// Generates a static bathroom-mirror condensation scene: warm dark background,
// fog texture built from overlapping soft circles, water droplets with specular
// highlights, and vertical drip streaks.

function buildFogScene(canvas) {
  const ctx = canvas.getContext('2d')
  const W = canvas.width
  const H = canvas.height

  ctx.clearRect(0, 0, W, H)

  // 1 ── Warm dark background
  const bg = ctx.createLinearGradient(0, 0, W * 0.6, H)
  bg.addColorStop(0,   '#1a1208')
  bg.addColorStop(0.5, '#100d08')
  bg.addColorStop(1,   '#080806')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, W, H)

  // 2 ── Soft warm overhead light (vanity bulb glow)
  const light = ctx.createRadialGradient(W * 0.5, -H * 0.05, 0, W * 0.5, H * 0.1, W * 0.85)
  light.addColorStop(0,   'rgba(255,210,130,0.13)')
  light.addColorStop(0.5, 'rgba(255,190,100,0.04)')
  light.addColorStop(1,   'rgba(0,0,0,0)')
  ctx.fillStyle = light
  ctx.fillRect(0, 0, W, H)

  // 3 ── Fog base — cold blue-white mist
  ctx.fillStyle = 'rgba(205,210,218,0.52)'
  ctx.fillRect(0, 0, W, H)

  // 4 ── Fog texture — overlapping soft circles (pseudo-noise)
  const rng = seededRng(42)
  for (let i = 0; i < 120; i++) {
    const x = rng() * W
    const y = rng() * H
    const r = 25 + rng() * 90
    const alpha = 0.03 + rng() * 0.06
    const fog = ctx.createRadialGradient(x, y, 0, x, y, r)
    fog.addColorStop(0, `rgba(220,222,228,${alpha})`)
    fog.addColorStop(1, 'rgba(200,205,215,0)')
    ctx.fillStyle = fog
    ctx.fillRect(x - r, y - r, r * 2, r * 2)
  }

  // 5 ── Drip streaks (condensation running downward)
  for (let i = 0; i < 50; i++) {
    const x  = rng() * W
    const y0 = rng() * H * 0.55
    const len = 18 + rng() * 70
    const w  = 0.4 + rng() * 1.2
    const a  = 0.08 + rng() * 0.22

    const drip = ctx.createLinearGradient(x, y0, x, y0 + len)
    drip.addColorStop(0,   `rgba(210,215,222,${a})`)
    drip.addColorStop(0.7, `rgba(210,215,222,${a * 0.5})`)
    drip.addColorStop(1,   'rgba(210,215,222,0)')
    ctx.strokeStyle = drip
    ctx.lineWidth = w
    ctx.beginPath()
    ctx.moveTo(x, y0)
    // Slight curve to look organic
    ctx.bezierCurveTo(x + (rng() - 0.5) * 4, y0 + len * 0.3,
                      x + (rng() - 0.5) * 4, y0 + len * 0.7,
                      x + (rng() - 0.5) * 3, y0 + len)
    ctx.stroke()
  }

  // 6 ── Water droplets
  for (let i = 0; i < 320; i++) {
    const x = rng() * W
    const y = rng() * H
    const r = 0.6 + rng() * 2.8
    const a = 0.25 + rng() * 0.55

    // Main droplet body
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(215,222,230,${a})`
    ctx.fill()

    // Specular highlight (upper-left)
    ctx.beginPath()
    ctx.arc(x - r * 0.28, y - r * 0.28, r * 0.38, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${a * 0.65})`
    ctx.fill()
  }

  // 7 ── Edge vignette (mirror frame darkening)
  const vignette = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.max(W,H)*0.75)
  vignette.addColorStop(0, 'rgba(0,0,0,0)')
  vignette.addColorStop(1, 'rgba(0,0,0,0.45)')
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, W, H)
}

// Minimal seeded pseudo-random (mulberry32)
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

function FogCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      buildFogScene(canvas)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

// ─── Wipe-in scripture card ───────────────────────────────────────────────────
// The cleared area sweeps from left to right (CSS clip-path animation),
// revealing text that then fades in — mimicking a finger dragging through fog.

function WipeCard({ reference, text, mirrorTruth, index }) {
  const WIPE_DELAY  = index * 380   // ms between each card
  const WIPE_DUR    = 1100          // ms for the wipe sweep
  const TEXT_DELAY  = WIPE_DELAY + WIPE_DUR * 0.55

  return (
    <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: '8rem' }}>

      {/* ── Cleared mirror surface (wipes in) ── */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(245,240,230,0.11) 0%, rgba(230,230,235,0.07) 100%)',
          backdropFilter: 'blur(0.5px)',
          WebkitBackdropFilter: 'blur(0.5px)',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.3)',
          // Wipe from left → right
          clipPath: 'inset(0 100% 0 0 round 1rem)',
          animation: `mirror-wipe ${WIPE_DUR}ms ${WIPE_DELAY}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
        }}
      />

      {/* ── Residual moisture haze on leading edge (extra authenticity) ── */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(210,215,225,0.06) 85%, rgba(210,215,225,0.12) 100%)',
          clipPath: 'inset(0 100% 0 0 round 1rem)',
          animation: `mirror-wipe ${WIPE_DUR}ms ${WIPE_DELAY}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
        }}
      />

      {/* ── Text content ── */}
      <div
        className="relative z-10 px-6 py-5"
        style={{
          opacity: 0,
          animation: `text-emerge 0.7s ${TEXT_DELAY}ms ease forwards`,
        }}
      >
        {/* Mirror truth in handwriting */}
        <p
          className="font-handwriting leading-tight mb-3"
          style={{
            fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
            color: 'rgba(248,244,235,0.95)',
            textShadow: '0 0 18px rgba(255,255,255,0.18), 0 0 40px rgba(255,255,255,0.07)',
            letterSpacing: '0.01em',
          }}
        >
          {mirrorTruth}
        </p>

        {/* Reference */}
        <p
          className="font-sans uppercase tracking-widest mb-2"
          style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)' }}
        >
          {reference}
        </p>

        {/* Verse */}
        <p
          className="font-sans leading-relaxed"
          style={{
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.5)',
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
  const [feeling, setFeeling]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [scriptures, setScriptures] = useState([])
  const [mirrorTruths, setMirrorTruths] = useState([])
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

  function handlePrompt(p) {
    setFeeling(p)
    setTimeout(() => textareaRef.current?.focus(), 50)
  }

  return (
    <div className="pt-16 min-h-screen bg-black relative">

      {/* Fog background */}
      <FogCanvas />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Header */}
        <div className="text-center pt-12 pb-6 px-4">
          <p
            className="font-sans uppercase tracking-widest mb-3"
            style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}
          >
            Scripture Mirror
          </p>
          <h1
            className="font-serif leading-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              color: 'rgba(255,255,255,0.82)',
              textShadow: '0 0 40px rgba(255,255,255,0.12), 0 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            What does God's Word<br />say about you?
          </h1>
        </div>

        {/* Input */}
        {!submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
            <div className="w-full max-w-lg">

              <p
                className="font-sans uppercase tracking-widest text-center mb-3"
                style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)' }}
              >
                Start with…
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {PROMPTS.map(p => (
                  <button
                    key={p}
                    onClick={() => handlePrompt(p)}
                    className="font-sans transition-colors rounded-full px-3 py-1.5"
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.45)',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <textarea
                  ref={textareaRef}
                  value={feeling}
                  onChange={e => setFeeling(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit() }}}
                  placeholder="I feel… / I think I am…"
                  rows={3}
                  maxLength={400}
                  className="w-full font-sans text-base text-white placeholder:text-white/25 resize-none outline-none leading-relaxed rounded-2xl px-5 py-4"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.11)',
                  }}
                />
                <button
                  type="submit"
                  disabled={!feeling.trim()}
                  className="mt-3 w-full flex items-center justify-center gap-2 font-sans font-semibold text-sm py-3.5 rounded-full transition-opacity disabled:opacity-30"
                  style={{
                    color: 'rgba(255,255,255,0.88)',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Sparkles size={14} />
                  Look in the mirror
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div ref={resultsRef} className="flex-1 flex flex-col items-center px-4 pb-20 pt-2">

            {/* What they said */}
            <div className="w-full max-w-lg mb-8 text-center">
              <p
                className="font-sans uppercase tracking-widest mb-2"
                style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.28)' }}
              >
                You said
              </p>
              <p
                className="font-handwriting"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'rgba(255,255,255,0.45)' }}
              >
                "{feeling}"
              </p>
            </div>

            {/* Wipe cards */}
            <div className="w-full max-w-lg flex flex-col gap-4">
              {scriptures.map((s, i) => (
                <WipeCard
                  key={s.id}
                  index={i}
                  reference={s.reference}
                  text={s.text}
                  mirrorTruth={mirrorTruths[i]}
                />
              ))}
            </div>

            <button
              onClick={handleReset}
              className="mt-10 inline-flex items-center gap-2 font-sans text-sm rounded-full px-7 py-3 transition-opacity"
              style={{
                color: 'rgba(255,255,255,0.38)',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <RotateCcw size={13} /> Look again
            </button>
          </div>
        )}
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes mirror-wipe {
          from { clip-path: inset(0 100% 0 0 round 1rem); }
          to   { clip-path: inset(0 0%   0 0 round 1rem); }
        }
        @keyframes text-emerge {
          from { opacity: 0; filter: blur(4px); }
          to   { opacity: 1; filter: blur(0); }
        }
      `}</style>
    </div>
  )
}
