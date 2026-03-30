import { useState, useRef, useEffect } from 'react'
import { BookOpen, Sparkles, RotateCcw, Send } from 'lucide-react'

const CHAR_LIMIT = 1000

const PROMPTS = [
  "I feel like I'm not enough…",
  "I've been struggling with anxiety lately.",
  "I feel forgotten by God.",
  "I don't know my purpose.",
  "I feel unworthy of love.",
  "I keep failing and I'm ashamed.",
  "I feel strong and grateful today.",
  "I'm afraid of the future.",
]

function ScriptureCard({ reference, text, application, index }) {
  return (
    <div
      className="bg-coal-800 border border-white/8 rounded-2xl p-6 animate-fade-in"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <p className="text-flame-400 font-sans text-xs uppercase tracking-widest mb-3 font-semibold">
        {reference}
      </p>
      <p className="text-white font-serif text-lg md:text-xl leading-relaxed mb-3 italic">
        "{text}"
      </p>
      <p className="text-white/50 font-sans text-sm leading-relaxed border-t border-white/8 pt-3">
        {application}
      </p>
    </div>
  )
}

function MirrorSurface({ children, isReflecting }) {
  return (
    <div className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
      isReflecting
        ? 'shadow-[0_0_80px_rgba(232,98,26,0.15),0_0_200px_rgba(232,98,26,0.05)]'
        : 'shadow-[0_0_40px_rgba(0,0,0,0.6)]'
    }`}>
      {/* Mirror frame */}
      <div className={`absolute inset-0 rounded-3xl border transition-all duration-700 ${
        isReflecting ? 'border-flame-500/30' : 'border-white/8'
      }`} />
      {/* Mirror sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.01] pointer-events-none rounded-3xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default function ScriptureMirror() {
  const [reflection, setReflection] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const textareaRef = useRef(null)
  const resultsRef = useRef(null)

  useEffect(() => {
    if (result && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 200)
    }
  }, [result])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!reflection.trim() || loading) return
    setLoading(true)
    setError(null)
    setResult(null)
    setSubmitted(true)

    try {
      const res = await fetch('/api/scripture-mirror', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reflection: reflection.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setReflection('')
    setResult(null)
    setError(null)
    setSubmitted(false)
    setTimeout(() => textareaRef.current?.focus(), 100)
  }

  function handlePrompt(prompt) {
    setReflection(prompt)
    textareaRef.current?.focus()
  }

  const charCount = reflection.length
  const nearLimit = charCount > CHAR_LIMIT * 0.85

  return (
    <div className="pt-16 min-h-screen bg-coal-900">

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-flame-600/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coal-800 border border-flame-500/25 shadow-[0_0_30px_rgba(232,98,26,0.1)] mb-6">
            <Sparkles className="text-flame-400" size={24} />
          </div>

          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-4">Scripture Mirror</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-5">
            What does God's Word<br />say about you?
          </h1>
          <p className="text-white/50 font-sans leading-relaxed text-base md:text-lg max-w-lg mx-auto">
            Share what you're feeling or what you believe about yourself — and the mirror will reflect back what Scripture says about who you truly are.
          </p>
        </div>
      </section>

      {/* Mirror input */}
      <section className="px-4 pb-6 max-w-2xl mx-auto">
        <MirrorSurface isReflecting={loading || !!result}>
          <div className="bg-coal-800 rounded-3xl p-6 md:p-8">

            {!submitted ? (
              <>
                {/* Prompt suggestions */}
                <div className="mb-5">
                  <p className="text-white/30 font-sans text-xs uppercase tracking-widest mb-3">Start with something like…</p>
                  <div className="flex flex-wrap gap-2">
                    {PROMPTS.map((p) => (
                      <button
                        key={p}
                        onClick={() => handlePrompt(p)}
                        className="text-xs font-sans text-white/50 hover:text-flame-400 border border-white/10 hover:border-flame-500/40 rounded-full px-3 py-1.5 transition-colors bg-coal-900/50"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      value={reflection}
                      onChange={(e) => setReflection(e.target.value.slice(0, CHAR_LIMIT))}
                      placeholder="I feel… / I believe about myself… / Today I'm struggling with…"
                      rows={5}
                      className="w-full bg-coal-900/80 border border-white/10 focus:border-flame-500/50 rounded-2xl px-5 py-4 text-white font-sans text-base placeholder:text-white/25 resize-none outline-none transition-colors leading-relaxed"
                    />
                    <div className={`absolute bottom-3 right-4 font-sans text-xs transition-colors ${
                      nearLimit ? 'text-flame-400' : 'text-white/20'
                    }`}>
                      {charCount}/{CHAR_LIMIT}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!reflection.trim() || loading}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-sans font-semibold text-sm px-8 py-3.5 rounded-full transition-all"
                  >
                    <Sparkles size={15} />
                    Show me what Scripture says
                  </button>
                </form>
              </>
            ) : loading ? (
              /* Loading state */
              <div className="py-12 flex flex-col items-center gap-4">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 rounded-full border-2 border-flame-500/20" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-flame-500 animate-spin" />
                  <BookOpen className="absolute inset-0 m-auto text-flame-400" size={20} />
                </div>
                <p className="text-white/50 font-sans text-sm text-center max-w-xs">
                  Searching the scriptures for you…
                </p>
              </div>
            ) : error ? (
              /* Error state */
              <div className="py-10 text-center">
                <p className="text-white/60 font-sans text-sm mb-5">{error}</p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/60 hover:text-flame-400 font-sans text-sm px-6 py-2.5 rounded-full transition-colors"
                >
                  <RotateCcw size={13} /> Try again
                </button>
              </div>
            ) : null}
          </div>
        </MirrorSurface>
      </section>

      {/* Reflection shown above results */}
      {result && !loading && (
        <section className="px-4 pb-4 max-w-2xl mx-auto">
          <div className="bg-coal-800/50 border border-white/6 rounded-2xl px-5 py-4 flex items-start gap-3">
            <Send size={14} className="text-flame-500 mt-0.5 flex-shrink-0" />
            <p className="text-white/60 font-sans text-sm italic leading-relaxed">"{reflection}"</p>
          </div>
        </section>
      )}

      {/* Results */}
      {result && (
        <section ref={resultsRef} className="px-4 pb-16 max-w-2xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest">The Mirror Reflects</p>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {result.scriptures?.map((s, i) => (
              <ScriptureCard
                key={s.reference}
                index={i}
                reference={s.reference}
                text={s.text}
                application={s.application}
              />
            ))}
          </div>

          {/* Affirmation */}
          {result.affirmation && (
            <div className="bg-flame-500/8 border border-flame-500/20 rounded-2xl px-6 py-5 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Sparkles className="text-flame-400 mx-auto mb-3" size={18} />
              <p className="text-white/85 font-serif text-lg leading-relaxed italic">
                {result.affirmation}
              </p>
            </div>
          )}

          {/* Start over */}
          <div className="mt-8 text-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 border border-white/15 hover:border-flame-500/50 text-white/50 hover:text-flame-400 font-sans text-sm px-7 py-3 rounded-full transition-colors"
            >
              <RotateCcw size={13} /> Look in the mirror again
            </button>
          </div>
        </section>
      )}

    </div>
  )
}
