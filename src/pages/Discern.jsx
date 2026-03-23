import { Link } from 'react-router-dom'
import { ArrowRight, Bell, Sun, Heart, BookOpen, Compass, PenLine, Layers } from 'lucide-react'
import screenHome from '../assets/discern-screen-home.png'
import screenRoger from '../assets/discern-screen-roger.png'
import screenCheckin from '../assets/discern-screen-checkin.png'

function PhoneMockup({ src, alt, offset = false }) {
  return (
    <div className={`relative flex-shrink-0 ${offset ? 'mb-8' : ''}`}>
      <div className="w-44 rounded-[2.5rem] border-4 border-white/10 shadow-2xl overflow-hidden bg-coal-900">
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
    </div>
  )
}

const features = [
  { icon: Sun,      title: 'Morning Activation',   body: 'Start every day grounded — with a verse, a moment of stillness, and an intention to carry into your day.' },
  { icon: Heart,    title: 'Emotional Check-In',    body: 'Name what you\'re feeling. Receive scripture, a prayer, and a path forward — no wrong answers.' },
  { icon: Layers,   title: 'Guided Practices',      body: 'Evening reflection, prayerful reading, decision fasting, and more — for every season of life.' },
  { icon: Compass,  title: 'Discernment Tools',     body: 'Test impressions step by step. Track what God has said. See what unfolds over time.' },
  { icon: PenLine,  title: 'Private Journal',       body: 'Write freely, record prayers, capture what you sense God saying. Voice-to-text. Always private.' },
  { icon: BookOpen, title: 'Teaching Library',      body: 'Teachings on hearing God, identity, grace, and discernment — grounded in the word of God.' },
]

export default function Discern() {
  return (
    <div className="pt-16 bg-coal-900">

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flame-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-4">Coming Soon</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-4">
              Quiet your Heart.<br />And Listen.
            </h1>
            <p className="text-white/50 font-sans leading-relaxed text-lg mb-8 max-w-lg">
              A daily spiritual companion designed to help you hear God more clearly — through conversation, scripture, guided practices, and reflection.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:justify-start justify-center">
              <a
                href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-8 py-3 rounded-full transition-colors"
              >
                <Bell size={14} /> Notify Me When It Launches
              </a>
              <a
                href="https://discernapp.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/60 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
              >
                Visit discernapp.us <ArrowRight size={13} />
              </a>
            </div>
            <p className="text-white/25 font-sans text-xs mt-6">
              Based on the teachings of Daniel Amstutz & Michael Amstutz-Washburn
            </p>
          </div>

          {/* Phone mockups */}
          <div className="flex gap-4 items-end flex-shrink-0">
            <PhoneMockup src={screenHome} alt="Discern home screen" offset={true} />
            <PhoneMockup src={screenRoger} alt="Roger check-in screen" />
          </div>
        </div>
      </section>

      {/* Meet Roger */}
      <section className="py-20 px-4 bg-coal-800 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-flame-500/10 border border-flame-500/30 mb-6">
            <span className="font-serif text-2xl text-flame-400">R</span>
          </div>
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Meet Roger</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Your guide in truth.</h2>
          <p className="text-white/50 font-sans leading-relaxed mb-4 max-w-xl mx-auto">
            Every day, Roger checks in with you — asking how you're showing up, pointing you to scripture, leading you in prayer, and walking with you through whatever you're carrying.
          </p>
          <p className="text-white/30 font-sans text-sm italic">
            Grounded in scripture, not just AI. Roger is a guided discernment companion — a steady presence for your daily walk.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Everything You Need</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">A complete daily spiritual rhythm.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-coal-800 border border-coal-600 rounded-xl p-6">
                <div className="w-9 h-9 rounded-full bg-flame-500/10 border border-flame-500/20 flex items-center justify-center mb-4">
                  <Icon className="text-flame-400" size={16} />
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{title}</h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-coal-800 text-center">
        <div className="max-w-lg mx-auto">
          <Bell className="text-flame-500 mx-auto mb-4" size={28} />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Be the first to know.</h2>
          <p className="text-white/50 font-sans leading-relaxed mb-8">
            Join the newsletter and we'll notify you the moment Discern is ready to download.
          </p>
          <a
            href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold px-10 py-4 rounded-full transition-colors"
          >
            Notify Me <ArrowRight size={15} />
          </a>
          <p className="text-white/20 font-sans text-xs mt-4">Free to download when it launches.</p>
        </div>
      </section>

    </div>
  )
}
