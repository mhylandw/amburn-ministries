import { useState, useEffect } from 'react'
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import img1 from '../assets/ministry-1.avif'
import img2 from '../assets/ministry-2.jpg'
import img3 from '../assets/ministry-3.avif'
import img4 from '../assets/ministry-4.avif'
import img5 from '../assets/ministry-5.avif'
import img6 from '../assets/ministry-6.png'
import img7 from '../assets/mk-photo.avif'
import img8 from '../assets/IMG_2773_edited.jpg'

const slides = [img1, img2, img3, img4, img5, img6, img7, img8]

const PRESETS = [10, 25, 50, 100]

function Slideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative w-full rounded-2xl overflow-hidden aspect-video shadow-2xl">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Amburn Ministries in action"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-coal-900/60 to-transparent pointer-events-none" />
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [custom, setCustom] = useState('')

  const finalAmount = custom || amount

  function handleGive() {
    if (!finalAmount || parseFloat(finalAmount) < 1) return
    window.open(`https://www.paypal.me/amburnmedia/${parseFloat(finalAmount).toFixed(2)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="pt-16">
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Partner With Us</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">Donate</h1>
      </div>

      {/* Photo slideshow + missions video */}
      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest">The Ministry in Action</p>
            <Slideshow />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest">Healing & Worship — Indonesia 2025</p>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Gu5wZN0Wr-M?rel=0"
                title="Healing and Worship Tour 2025 — Indonesia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section className="py-20 px-4 bg-coal-800">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-flame-500/10 border border-flame-500/30 mb-8">
            <Heart className="text-flame-500" size={28} />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Your Gift Changes Lives</h2>
          <p className="text-white/60 font-sans leading-relaxed mb-4">
            Amburn Ministries exists to heal, deliver, and restore. Every dollar given fuels the message—music, writing, travel, and ministry to those who need it most.
          </p>
          <p className="text-white/60 font-sans leading-relaxed mb-10">
            We believe generosity is an act of worship. Thank you for partnering with what God is doing through this ministry.
          </p>

          <div className="flex gap-3 justify-center mb-4 flex-wrap">
            {PRESETS.map(p => (
              <button
                key={p}
                onClick={() => { setAmount(String(p)); setCustom('') }}
                className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium border transition-colors ${
                  amount === String(p) && !custom
                    ? 'bg-flame-500 border-flame-500 text-white'
                    : 'border-white/20 text-white/60 hover:border-flame-500 hover:text-flame-400'
                }`}
              >
                ${p}
              </button>
            ))}
          </div>

          <div className="relative mb-6">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 font-sans text-sm">$</span>
            <input
              type="number"
              min="1"
              placeholder="Other amount"
              value={custom}
              onChange={e => { setCustom(e.target.value); setAmount('') }}
              className="w-full bg-white/5 border border-white/10 focus:border-flame-500 rounded-full pl-8 pr-5 py-3 text-sm font-sans text-white placeholder-white/30 outline-none transition-colors text-center"
            />
          </div>

          <button
            onClick={handleGive}
            disabled={!finalAmount}
            className="w-full flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 disabled:opacity-40 text-white font-sans font-semibold px-8 py-4 rounded-full transition-colors mb-4"
          >
            <Heart size={16} /> Give {finalAmount ? `$${parseFloat(finalAmount).toFixed(2)}` : 'Now'} via PayPal
          </button>

          <p className="text-white/30 text-xs font-sans">
            Amburn Ministries is operated under Amburn, LLC — a 501(c)(3) nonprofit organization. Donations may be tax-deductible.<br />
            For questions about giving, contact{' '}
            <a href="mailto:admin@amburnministries.com" className="text-flame-500 hover:underline">
              admin@amburnministries.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
