import { useState } from 'react'
import { Mail, ArrowRight, Check } from 'lucide-react'

/**
 * Inline email subscribe form.
 * Submits to Beehiiv via their hosted form URL with the email pre-filled.
 * No API key required.
 */
export default function EmailSubscribe({ className = '' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // Open Beehiiv subscribe page with email pre-filled
    window.open(
      `https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
      '_blank',
      'noopener,noreferrer'
    )
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 text-flame-400 font-sans text-sm ${className}`}>
        <Check size={18} />
        <span>Check the new tab to confirm your subscription!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="relative flex-1">
        <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-white/5 border border-white/10 focus:border-flame-500 rounded-full pl-10 pr-4 py-3 text-sm font-sans text-white placeholder-white/30 outline-none transition-colors"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
      >
        Subscribe <ArrowRight size={14} />
      </button>
    </form>
  )
}
