import { useState, useEffect } from 'react'
import { X, Download, ArrowRight, Check, BookOpen } from 'lucide-react'
import textingWithGodCover from '../assets/texting-with-god-promo.jpg'

export default function LeadMagnetPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed or submitted
    const dismissed = localStorage.getItem('popup_dismissed')
    if (dismissed) return

    // Show after 6 seconds
    const timer = setTimeout(() => setVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    localStorage.setItem('popup_dismissed', 'true')
    setVisible(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return

    // Trigger download immediately
    const link = document.createElement('a')
    link.href = '/texting-with-god.epub'
    link.download = 'Texting With God - Amburn Ministries.epub'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setSubmitted(true)
    localStorage.setItem('popup_dismissed', 'true')
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative bg-coal-800 border border-coal-600 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Book image */}
          <div className="bg-coal-900 flex items-center justify-center p-6 md:w-56 shrink-0">
            <img
              src={textingWithGodCover}
              alt="Texting With God"
              className="w-full object-contain drop-shadow-2xl rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            {submitted ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-flame-400">
                  <Check size={20} />
                  <span className="font-sans font-semibold text-sm">Your download is starting!</span>
                </div>
                <p className="text-white font-serif text-xl leading-snug">
                  Check your Downloads folder for <em>Texting With God</em>.
                </p>
                <a
                  href="/texting-with-god.epub"
                  download="Texting With God - Amburn Ministries.epub"
                  className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors w-fit"
                >
                  <Download size={15} />
                  Download Again
                </a>
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
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-flame-500">
                  <BookOpen size={16} />
                  <span className="font-sans text-xs uppercase tracking-widest">Free eBook</span>
                </div>
                <h2 className="font-serif text-2xl text-white leading-snug">
                  Get <em>Texting With God</em> — free.
                </h2>
                <p className="text-white/50 font-sans text-sm leading-relaxed">
                  The story of how one man learned to hear God's voice. Enter your email and get the free download.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-full px-5 py-3 text-white text-sm font-sans outline-none transition-colors placeholder-white/30"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                  >
                    Get My Free Copy <ArrowRight size={14} />
                  </button>
                </form>
                <p className="text-white/25 font-sans text-xs">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
