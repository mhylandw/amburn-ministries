import { useState } from 'react'
import { Heart, ArrowRight } from 'lucide-react'

const PRESETS = [10, 25, 50, 100]

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

      <section className="py-20 px-4 bg-coal-900">
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
