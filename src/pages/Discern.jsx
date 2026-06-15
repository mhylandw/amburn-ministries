import { useState } from 'react'
import { ArrowRight, Sun, Heart, BookOpen, Compass, PenLine, Sparkles, Check, ChevronDown } from 'lucide-react'
import screenHome from '../assets/discern-screen-home.png'
import screenRoger from '../assets/discern-screen-roger.png'
import { usePageTitle } from '../hooks/usePageTitle'
import { trackConversion } from '../lib/analytics'

const APP_STORE = 'https://apps.apple.com/app/id6760718115'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.discern.app'
// Flip to true once the Android listing is live
const ANDROID_LIVE = false

function trackDownload() {
  trackConversion('app')
}

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
  { icon: Sun,      title: 'Morning Activation',  body: 'Start every day grounded — a verse, a moment of stillness, and an intention to carry into your day. Free for everyone.' },
  { icon: Heart,    title: 'Emotional Check-In',  body: 'Name what you\'re carrying. Receive scripture, a source check (Fear / Desire / Peace), and a path forward — tailored to where you are.' },
  { icon: Sparkles, title: 'Guided Practices',    body: 'Lectio Divina, listening prayer, decision fasting, spiritual warfare, and more — a practice for every season of the spiritual life.' },
  { icon: Compass,  title: 'Discernment Tools',   body: 'Test impressions step by step. Track confirmations. See your whole spiritual journey unfold over time.' },
  { icon: PenLine,  title: 'Private Journal',     body: 'Write freely, record prayers, capture what you sense God saying. Voice-to-text. Always private and on your device.' },
  { icon: BookOpen, title: 'Teaching Library',    body: 'Video and text teachings on hearing God, identity, grace, and discernment — from Daniel Amstutz.' },
]

const steps = [
  {
    num: '01',
    title: 'Download the app',
    body: 'Free on the App Store. No account required to get started. Open it and meet Daniel.',
  },
  {
    num: '02',
    title: 'Check in with Daniel',
    body: 'Each day Daniel asks how you\'re showing up. You answer honestly. He meets you there with scripture, prayer, and presence.',
  },
  {
    num: '03',
    title: 'Build a daily rhythm',
    body: 'Morning activation, journal, guided practices, teachings — a complete spiritual life, one day at a time.',
  },
]

const plans = [
  {
    name: 'FREE',
    price: '$0',
    period: 'forever',
    sub: 'No trial, no credit card',
    features: [
      'Morning & Evening Activation',
      'Daily emotional check-in',
      '3 Daniel conversations per day',
      'Up to 10 journal entries',
    ],
    cta: 'Download free',
    highlight: false,
  },
  {
    name: 'STANDARD',
    price: '$4.99',
    period: '/month',
    sub: 'Cancel anytime',
    features: [
      'Unlimited journal entries',
      'Discernment check-in with guided questions',
      'Confirmation log',
      'Moments — quick spiritual captures',
      'Spiritual timeline',
      'Full teaching library',
      'Unlimited Daniel conversations',
    ],
    cta: 'Get Standard',
    highlight: true,
  },
  {
    name: 'PRO',
    price: '$9.99',
    period: '/month',
    sub: 'or $79.99/year — save 33%',
    features: [
      'Everything in Standard',
      'Daniel remembers your journey',
      'Deep-dive sermon & book library',
      'Leadership discernment paths',
    ],
    cta: 'Unlock Pro',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Is Discern free?',
    a: 'Yes — the core app is free forever. No trial, no credit card required. You get Morning Activation, daily check-ins, and 3 conversations with Daniel per day at no cost. Upgrade to Standard or Pro when you\'re ready to go deeper.',
  },
  {
    q: 'How does Daniel work?',
    a: 'Daniel is an AI companion grounded in scripture and the teachings of Daniel Amstutz. Each day he checks in with you, listens to where you are, and responds with scripture, prayer, and discernment principles. He\'s not a replacement for prayer or pastoral counsel — he\'s a tool to help you think clearly and stay anchored to the Word.',
  },
  {
    q: 'Who is Discern for?',
    a: 'Anyone who wants to hear God more clearly. Whether you\'re new to prayer or have been walking with God for years, Discern gives you practical tools for daily discernment, emotional honesty, and spiritual growth.',
  },
  {
    q: 'Is my journal private?',
    a: 'Yes. Your journal entries are stored privately on your device. They are never shared or used for training.',
  },
  {
    q: 'What is the teaching library based on?',
    a: 'The teaching library contains video and text teachings from Daniel Amstutz on hearing God, identity in Christ, grace, and discernment — all grounded in scripture.',
  },
  {
    q: 'Is this a replacement for church or pastoral counseling?',
    a: 'No. Discern is a discipleship tool, not a substitute for community or professional pastoral care. It\'s designed to support your daily walk alongside your local church and relationships.',
  },
  {
    q: 'What devices does it work on?',
    a: 'Discern is available on iOS (iPhone and iPad). Android is coming soon.',
  },
]

function DownloadButtons({ size = 'md' }) {
  const base = size === 'lg'
    ? 'inline-flex items-center gap-3 font-sans font-semibold px-8 py-4 rounded-full transition-colors text-base'
    : 'inline-flex items-center gap-2 font-sans font-semibold px-6 py-3 rounded-full transition-colors text-sm'
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <a
        href={APP_STORE}
        onClick={trackDownload}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-flame-500 hover:bg-flame-400 text-white`}
      >
        Download on iOS <ArrowRight size={size === 'lg' ? 16 : 14} />
      </a>
      {ANDROID_LIVE ? (
        <a
          href={PLAY_STORE}
          onClick={trackDownload}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} border border-white/20 hover:border-flame-500 text-white/70 hover:text-flame-400`}
        >
          Download on Android
        </a>
      ) : (
        <span
          className={`${base} border border-white/10 text-white/30 cursor-default select-none`}
          aria-disabled="true"
        >
          Android — Coming Soon
        </span>
      )}
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-sans text-white/80 text-sm font-medium">{q}</span>
        <ChevronDown
          size={16}
          className={`text-white/40 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="text-white/50 font-sans text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

export default function Discern() {
  usePageTitle('Discern App | Amburn Ministries', 'Discern — a daily companion for hearing God more clearly, built on scripture and biblical truth.')

  return (
    <div className="pt-16 bg-coal-900">

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flame-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-4">A Free Discipleship Tool</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-4">
              Quiet your Heart.<br />And Listen.
            </h1>
            <p className="text-white/50 font-sans leading-relaxed text-lg mb-8 max-w-lg">
              A daily spiritual companion to help you hear God more clearly — through conversation, scripture, guided practices, and reflection.
            </p>
            <div className="md:justify-start justify-center">
              <DownloadButtons size="md" />
            </div>
            <p className="text-white/25 font-sans text-xs mt-5">
              Free to try — no credit card required.
            </p>
          </div>
          <div className="flex gap-4 items-end flex-shrink-0">
            <PhoneMockup src={screenHome} alt="Discern home screen" offset={true} />
            <PhoneMockup src={screenRoger} alt="Discern daily companion screen" />
          </div>
        </div>
      </section>

      {/* Meet Daniel */}
      <section className="py-20 px-4 bg-coal-800 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-flame-500/10 border border-flame-500/30 mb-6">
            <span className="font-serif text-2xl text-flame-400">D</span>
          </div>
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Meet Daniel</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Your guide in truth.</h2>
          <p className="text-white/50 font-sans leading-relaxed mb-6 max-w-xl mx-auto">
            Daniel is a discernment companion — grounded in scripture and the teachings of Daniel Amstutz. He doesn't replace prayer or pastoral counsel. He helps you think clearly, hear honestly, and stay anchored to the Word.
          </p>
          <ul className="text-left max-w-sm mx-auto space-y-2 mb-6">
            {[
              'Daily check-ins tailored to where you are',
              'Scripture and prayer for every situation',
              'Remembers your journey over time (Pro)',
              'Ask anything — discernment, decisions, silence, struggle',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <Check size={14} className="text-flame-500 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-white/50 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-flame-500/70 font-sans text-xs uppercase tracking-widest">3 free conversations per day — no subscription required</p>
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

      {/* How it works */}
      <section className="py-20 px-4 bg-coal-800 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Simple by Design</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">How it works.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map(({ num, title, body }) => (
              <div key={num} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/10 border border-flame-500/20 mb-4">
                  <span className="font-sans text-flame-400 text-sm font-semibold">{num}</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Simple Pricing</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Start free.<br />Go as deep as you need.
            </h2>
            <p className="text-white/40 font-sans text-sm">The core app is free forever — no trial, no credit card. Upgrade only when you want more.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border flex flex-col ${
                  plan.highlight
                    ? 'bg-flame-500/10 border-flame-500/40'
                    : 'bg-coal-800 border-white/10'
                }`}
              >
                {plan.highlight && (
                  <p className="text-flame-400 font-sans text-xs uppercase tracking-widest mb-3">Most popular</p>
                )}
                <p className="font-sans text-white/50 text-xs uppercase tracking-widest mb-2">{plan.name}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-serif text-4xl text-white">{plan.price}</span>
                  <span className="font-sans text-white/40 text-sm pb-1">{plan.period}</span>
                </div>
                <p className="text-white/30 font-sans text-xs mb-6">{plan.sub}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={13} className="text-flame-500 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-white/60 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_STORE}
                  onClick={trackDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-sans font-semibold text-sm py-3 rounded-full transition-colors ${
                    plan.highlight
                      ? 'bg-flame-500 hover:bg-flame-400 text-white'
                      : 'border border-white/20 hover:border-flame-500 text-white/70 hover:text-flame-400'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 bg-coal-800 border-y border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-white/70 italic leading-relaxed mb-4">
            "God's voice is consistent with how He revealed Himself in Jesus — grace, truth, peace, love."
          </p>
          <p className="text-flame-500/60 font-sans text-xs uppercase tracking-widest">From the Discernment Guide</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Common questions.</h2>
          </div>
          <div className="border-t border-white/10">
            {faqs.map(faq => <FaqItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-coal-800 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Start hearing God more clearly.</h2>
          <p className="text-white/50 font-sans leading-relaxed mb-8">
            Free to download. No trial, no credit card. Daniel is waiting.
          </p>
          <DownloadButtons size="lg" />
          <p className="text-white/20 font-sans text-xs mt-6">
            An Amburn Ministries resource &nbsp;·&nbsp; Available on iOS and Android
          </p>
        </div>
      </section>

    </div>
  )
}
