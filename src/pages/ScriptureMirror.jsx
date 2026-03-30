import { useState, useRef, useEffect, useCallback } from 'react'
import { RotateCcw, Sparkles, CameraOff } from 'lucide-react'
import { getScripturesForFeeling, getMirrorTruth } from '../data/identityScriptures'

// ── Camera hook ────────────────────────────────────────────────────────────────
function useCamera() {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [cameraReady, setCameraReady] = useState(false)
  const [cameraDenied, setCameraDenied] = useState(false)

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = () => setCameraReady(true)
      }
    } catch {
      setCameraDenied(true)
    }
  }, [])

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
    setCameraReady(false)
  }, [])

  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [startCamera, stopCamera])

  return { videoRef, cameraReady, cameraDenied }
}

// ── Steam scripture card ───────────────────────────────────────────────────────
function SteamCard({ reference, text, mirrorTruth, index }) {
  return (
    <div
      className="steam-card animate-steam-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <p className="steam-truth">{mirrorTruth}</p>
      <p className="steam-reference">{reference}</p>
      <p className="steam-verse">"{text}"</p>
    </div>
  )
}

// ── Prompt chips ───────────────────────────────────────────────────────────────
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

// ── Main component ────────────────────────────────────────────────────────────
export default function ScriptureMirror() {
  const [feeling, setFeeling] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [scriptures, setScriptures] = useState([])
  const [mirrorTruths, setMirrorTruths] = useState([])
  const textareaRef = useRef(null)
  const resultsRef = useRef(null)
  const { videoRef, cameraReady, cameraDenied } = useCamera()

  function handleSubmit(e) {
    e?.preventDefault()
    const input = feeling.trim()
    if (!input) return
    const results = getScripturesForFeeling(input)
    const truths = results.map(s => getMirrorTruth(input, s))
    setScriptures(results)
    setMirrorTruths(truths)
    setSubmitted(true)
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
  }

  function handlePrompt(p) {
    setFeeling(p)
    setTimeout(() => textareaRef.current?.focus(), 50)
  }

  function handleReset() {
    setFeeling('')
    setSubmitted(false)
    setScriptures([])
    setMirrorTruths([])
    setTimeout(() => textareaRef.current?.focus(), 100)
  }

  return (
    <div className="pt-16 min-h-screen bg-black relative overflow-x-hidden">

      {/* ── Mirror background (camera or fallback) ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Camera video — always rendered so stream starts immediately */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-full object-cover scale-x-[-1] transition-opacity duration-1000 ${
            cameraReady ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'blur(14px) saturate(0.6) brightness(0.55)' }}
        />
        {/* Fallback gradient when no camera */}
        {(!cameraReady) && (
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: 'radial-gradient(ellipse at 40% 50%, #1a1a2e 0%, #0a0a0a 70%)',
              opacity: cameraReady ? 0 : 1,
            }}
          />
        )}
        {/* Vignette + dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)'
        }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Header */}
        <div className="text-center pt-12 pb-4 px-4">
          <p className="steam-label">Scripture Mirror</p>
          <h1 className="steam-title">
            What does God's Word<br />say about you?
          </h1>
          {cameraDenied && (
            <div className="inline-flex items-center gap-1.5 mt-3 text-white/30 font-sans text-xs">
              <CameraOff size={12} /> Enable camera for the full mirror experience
            </div>
          )}
        </div>

        {/* Input section */}
        {!submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center px-4 pb-12">
            <div className="w-full max-w-lg">
              {/* Prompt chips */}
              <div className="mb-5">
                <p className="text-white/30 font-sans text-xs uppercase tracking-widest text-center mb-3">
                  Start with…
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {PROMPTS.map(p => (
                    <button
                      key={p}
                      onClick={() => handlePrompt(p)}
                      className="text-xs font-sans text-white/50 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-3 py-1.5 transition-colors backdrop-blur-sm bg-white/5 hover:bg-white/10"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input area */}
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    value={feeling}
                    onChange={e => setFeeling(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSubmit()
                      }
                    }}
                    placeholder="I feel… / I think I am…"
                    rows={3}
                    maxLength={400}
                    className="w-full rounded-2xl px-5 py-4 font-sans text-base text-white placeholder:text-white/30 resize-none outline-none leading-relaxed"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!feeling.trim()}
                  className="mt-4 w-full flex items-center justify-center gap-2 font-sans font-semibold text-sm py-3.5 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed text-white"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <Sparkles size={15} />
                  Look in the mirror
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Results section */
          <div ref={resultsRef} className="flex-1 flex flex-col items-center px-4 pb-16 pt-4">

            {/* What they said */}
            <div className="w-full max-w-lg mb-8">
              <p className="text-center font-sans text-sm text-white/40 mb-2 uppercase tracking-widest">You said</p>
              <p className="text-center font-serif text-xl text-white/60 italic">"{feeling}"</p>
            </div>

            {/* Steam scripture cards */}
            <div className="w-full max-w-lg flex flex-col gap-5">
              {scriptures.map((s, i) => (
                <SteamCard
                  key={s.id}
                  index={i}
                  reference={s.reference}
                  text={s.text}
                  mirrorTruth={mirrorTruths[i]}
                />
              ))}
            </div>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="mt-10 inline-flex items-center gap-2 font-sans text-sm text-white/40 hover:text-white/80 border border-white/10 hover:border-white/30 px-7 py-3 rounded-full transition-all"
              style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.04)' }}
            >
              <RotateCcw size={13} /> Look again
            </button>
          </div>
        )}
      </div>

      {/* ── Steam styles ── */}
      <style>{`
        .steam-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 0.75rem;
        }
        .steam-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          color: rgba(255,255,255,0.85);
          line-height: 1.2;
          text-shadow:
            0 0 40px rgba(255,255,255,0.15),
            0 2px 8px rgba(0,0,0,0.5);
        }
        .steam-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 1.25rem;
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.1),
            0 8px 32px rgba(0,0,0,0.3);
          opacity: 0;
        }
        .steam-truth {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem;
          font-style: italic;
          color: rgba(255,255,255,0.95);
          line-height: 1.3;
          margin-bottom: 0.85rem;
          text-shadow:
            0 0 20px rgba(255,255,255,0.3),
            0 0 60px rgba(255,255,255,0.1);
          letter-spacing: 0.01em;
        }
        .steam-reference {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.5rem;
        }
        .steam-verse {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 0.75rem;
        }

        @keyframes steam-in {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform: translateY(6px) scale(0.98);
          }
          60% {
            opacity: 0.9;
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }
        .animate-steam-in {
          animation: steam-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  )
}
