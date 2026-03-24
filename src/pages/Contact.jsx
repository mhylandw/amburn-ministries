import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle, Music, Users, Mic2 } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const res = await fetch('https://formspree.io/f/xaqpgayb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Reach Out</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">Contact Us</h1>
      </div>

      {/* Booking section */}
      <section className="py-16 px-4 bg-coal-900 border-b border-coal-700">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Available to Book</p>
          <h2 className="font-serif text-3xl text-white mb-4">Bring Amburn Ministries to Your Event</h2>
          <p className="text-white/50 font-sans leading-relaxed max-w-xl mx-auto">
            We're available for churches, conferences, retreats, and gatherings. Use the contact form below to inquire.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            { icon: Music, title: 'Worship Music Sessions', body: 'Live original worship — intimate and Spirit-led.' },
            { icon: Users, title: 'Awaken My Heart Gatherings', body: "A time of connection, relationship, stories, and always God's presence." },
            { icon: Mic2, title: 'Public Speaking', body: 'Michael & Katrina speak on healing, deliverance, restoration, identity, and hearing God.' },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-coal-800 border border-coal-600 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-flame-500/10 border border-flame-500/30 flex items-center justify-center">
                <Icon className="text-flame-500" size={18} />
              </div>
              <h3 className="font-serif text-lg text-white">{title}</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl text-white mb-8">Get in Touch</h2>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Management & Booking</p>
                <p className="text-white font-sans font-medium mb-1">Michael Amstutz-Washburn</p>
                <a href="mailto:admin@amburnmedia.com" className="flex items-center gap-2 text-white/50 hover:text-flame-400 text-sm font-sans transition-colors mb-1">
                  <Mail size={14} /> admin@amburnmedia.com
                </a>
                <a href="tel:7196506172" className="flex items-center gap-2 text-white/50 hover:text-flame-400 text-sm font-sans transition-colors">
                  <Phone size={14} /> 719-650-6172
                </a>
              </div>

              <div>
                <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">General Inquiries</p>
                <a href="mailto:admin@amburnministries.com" className="flex items-center gap-2 text-white/50 hover:text-flame-400 text-sm font-sans transition-colors">
                  <Mail size={14} /> admin@amburnministries.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-coal-800 border border-coal-600 rounded-2xl p-8">
            <h2 className="font-serif text-xl text-white mb-6">Send a Message</h2>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle className="text-flame-400" size={40} />
                <p className="font-serif text-xl text-white">Thank you for reaching out!</p>
                <p className="text-white/50 text-sm font-sans">We'll get back to you as soon as we can.</p>
                <button onClick={() => setStatus('idle')} className="text-flame-400 text-sm font-sans hover:underline mt-2">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">First Name</label>
                    <input
                      name="firstName" value={form.firstName} onChange={handleChange} required
                      className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">Last Name</label>
                    <input
                      name="lastName" value={form.lastName} onChange={handleChange} required
                      className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors"
                      placeholder="Last"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">Email</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">Phone (optional)</label>
                  <input
                    name="phone" type="tel" value={form.phone} onChange={handleChange}
                    className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors"
                    placeholder="(000) 000-0000"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-sans uppercase tracking-wide block mb-1">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-lg px-4 py-2.5 text-white text-sm font-sans outline-none transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-xs font-sans">Something went wrong. Please try again or email us directly.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 disabled:opacity-50 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors mt-2"
                >
                  <Send size={15} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
