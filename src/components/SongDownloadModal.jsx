import { useState } from 'react'
import { X, Music, ArrowRight, Check } from 'lucide-react'

export default function SongDownloadModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return

    // Trigger the download immediately
    const link = document.createElement('a')
    link.href = '/healing-you-again.m4a'
    link.download = 'Healing You Again (Communion) - Amburn.m4a'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative bg-coal-800 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
          <X size={18} />
        </button>

        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/10 border border-flame-500/30 mb-5">
          <Music className="text-flame-500" size={20} />
        </div>

        {submitted ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <Check className="text-green-400" size={20} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2">Your download is starting</h3>
            <p className="text-white/50 font-sans text-sm mb-4">
              Check your Downloads folder for <em>Healing You Again (Communion)</em>.
            </p>
            <a
              href={`https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-flame-400 font-sans text-xs transition-colors"
            >
              Also subscribe to the Amburn Newsletter →
            </a>
          </div>
        ) : (
          <>
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-2">Free Song</p>
            <h3 className="font-serif text-2xl text-white mb-1">Healing You Again</h3>
            <p className="text-white/40 font-sans text-sm italic mb-5">Communion — Amburn</p>
            <p className="text-white/50 font-sans text-sm leading-relaxed mb-6">
              Enter your email to get the free download and join the Amburn Ministries newsletter.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 focus:border-flame-500 rounded-full px-5 py-3 text-sm font-sans text-white placeholder-white/30 outline-none transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              >
                Download Free Song <ArrowRight size={14} />
              </button>
            </form>
            <p className="text-white/20 font-sans text-xs text-center mt-4">No spam. Unsubscribe anytime.</p>
          </>
        )}
      </div>
    </div>
  )
}
