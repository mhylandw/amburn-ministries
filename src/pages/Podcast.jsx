import { useState } from 'react'
import { Mic, Bell, ArrowRight } from 'lucide-react'
import awakenCover from '../assets/awaken-my-heart.png'

export default function Podcast() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="pt-16 min-h-screen bg-coal-900">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24">

        {/* Podcast cover art */}
        <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-2xl mb-10 ring-1 ring-white/10">
          <img src={awakenCover} alt="Awaken My Heart Podcast" className="w-full h-full object-cover" />
        </div>

        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-4">
          <Mic size={12} className="inline mr-1.5 mb-0.5" />
          Podcast
        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Awaken My Heart</h1>
        <p className="text-white/50 font-sans text-lg mb-3">with Michael & Katrina Amstutz-Washburn</p>

        {/* Coming Soon badge */}
        <div className="inline-flex items-center gap-2 bg-flame-500/10 border border-flame-500/30 text-flame-400 font-sans text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-flame-500 animate-pulse" />
          Coming Soon
        </div>

        <p className="text-white/60 font-sans leading-relaxed max-w-lg mb-12">
          Real conversations about faith, healing, identity, and hearing God's voice. No performance. No filters. Just two people who've walked through the fire — and found God faithful every time.
        </p>

        {/* Email signup */}
        {submitted ? (
          <div className="flex items-center gap-2 text-flame-400 font-sans text-sm">
            <Bell size={16} />
            You're on the list — we'll let you know when it launches!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-coal-800 border border-coal-500 focus:border-flame-500 rounded-full px-5 py-3 text-white text-sm font-sans outline-none transition-colors placeholder-white/30"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Notify Me <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-white/25 font-sans text-xs mt-4">No spam. Just a heads-up when we go live.</p>
      </section>

      {/* What to expect */}
      <section className="py-20 px-4 bg-coal-800 border-t border-coal-600">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">What to Expect</p>
          <h2 className="font-serif text-3xl text-white">Conversations that go somewhere real.</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: 'Hearing God', body: 'Practical, honest talk about two-way communication with God — and what gets in the way.' },
            { title: 'Healing & Identity', body: 'Stories and truth about how God restores broken places and redefines who you are.' },
            { title: 'Faith That Works', body: 'Not theory — real life faith that holds up under pressure, loss, and uncertainty.' },
          ].map((item) => (
            <div key={item.title} className="bg-coal-900 border border-coal-600 rounded-2xl p-6">
              <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
