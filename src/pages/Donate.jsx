import { Heart, ArrowRight } from 'lucide-react'

export default function Donate() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Partner With Us</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">Donate</h1>
      </div>

      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-2xl mx-auto text-center">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Replace this href with your actual PayPal.me or Stripe link */}
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold px-8 py-4 rounded-full transition-colors"
            >
              <Heart size={16} />
              Give via PayPal
            </a>
            <a
              href="https://venmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-flame-500 text-white/70 hover:text-flame-400 font-sans px-8 py-4 rounded-full transition-colors"
            >
              Give via Venmo <ArrowRight size={15} />
            </a>
          </div>

          <p className="text-white/30 text-xs font-sans mt-8">
            Amburn Ministries is operated under Amburn Media, LLC.<br />
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
