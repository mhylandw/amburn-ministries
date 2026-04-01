import { useState } from 'react'
import { Heart, CheckCircle, Send, ShieldCheck } from 'lucide-react'

export default function PrayerRequest() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', request: '', private: false })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm({ ...form, [e.target.name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xaqpgayb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New Prayer Request',
          name: form.name,
          email: form.email,
          request: form.request,
          private: form.private ? 'Yes — keep confidential' : 'No — can be shared',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', request: '', private: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">We're Believing With You</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Prayer Requests</h1>
        <p className="text-white/50 font-sans max-w-md mx-auto leading-relaxed">
          You don't have to carry this alone. Share what's on your heart and we will stand with you in prayer.
        </p>
      </div>

      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-2xl mx-auto">

          {/* Scripture */}
          <div className="bg-coal-800 border border-coal-600 rounded-2xl p-6 mb-10 text-center">
            <p className="font-serif text-lg text-white/80 italic leading-relaxed mb-3">
              "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
            </p>
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest">Philippians 4:6</p>
          </div>

          {status === 'success' ? (
            <div className="bg-coal-800 border border-coal-600 rounded-2xl p-10 flex flex-col items-center text-center gap-4">
              <CheckCircle className="text-flame-400" size={48} />
              <h2 className="font-serif text-2xl text-white">We received your request.</h2>
              <p className="text-white/50 font-sans leading-relaxed max-w-sm">
                Michael and Katrina will be praying for you. You are not alone in this.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-flame-400 text-sm font-sans hover:underline mt-2"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <div className="bg-coal-800 border border-coal-600 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-flame-500/10 border border-flame-500/30 flex items-center justify-center">
                  <Heart className="text-flame-500" size={18} />
                </div>
                <h2 className="font-serif text-xl text-white">Share Your Request</h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">Your Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors"
                      placeholder="First name is fine"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">Email (optional)</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors"
                      placeholder="So we can follow up"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">Your Request</label>
                  <textarea
                    name="request" value={form.request} onChange={handleChange} required rows={6}
                    className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors resize-none"
                    placeholder="Share what's on your heart..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="private"
                    checked={form.private}
                    onChange={handleChange}
                    className="mt-0.5 accent-flame-500"
                  />
                  <div className="flex items-start gap-2">
                    <ShieldCheck size={15} className="text-white/30 group-hover:text-flame-400 transition-colors mt-0.5 shrink-0" />
                    <span className="text-white/50 font-sans text-sm">Keep this request private — only Michael & Katrina will see it</span>
                  </div>
                </label>

                {status === 'error' && (
                  <p className="text-red-400 text-xs font-sans">Something went wrong. Please try again or email us at admin@amburnministries.com</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 disabled:opacity-50 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors mt-2"
                >
                  <Send size={15} />
                  {status === 'sending' ? 'Sending...' : 'Submit Prayer Request'}
                </button>
              </form>
            </div>
          )}

          <p className="text-white/25 font-sans text-xs text-center mt-6">
            Your request is treated with care and confidentiality.
          </p>
        </div>
      </section>
    </div>
  )
}
