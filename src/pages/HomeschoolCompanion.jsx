import { Link } from 'react-router-dom'
import {
  ArrowRight, Bell, BookOpen, Calculator, Globe, FlaskConical,
  PenLine, Heart, Users, Clock, Shield, Sparkles, ChevronRight
} from 'lucide-react'

function PipAvatar({ size = 'md' }) {
  const dim = size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'
  const text = size === 'lg' ? 'text-4xl' : 'text-2xl'
  return (
    <div className={`${dim} rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 flex items-center justify-center`}>
      <span className={`font-serif ${text} text-emerald-400`}>P</span>
    </div>
  )
}

const subjects = [
  { icon: Calculator, label: 'Math',          body: 'Break problems down step by step — Pip never solves it, but helps you see the path.' },
  { icon: FlaskConical, label: 'Science',      body: 'Observation and hypothesis framing — Pip turns every question into an experiment.' },
  { icon: BookOpen,   label: 'History',        body: 'Cause, effect, and perspective — Pip asks "why" until the story makes sense.' },
  { icon: PenLine,    label: 'Language Arts',  body: 'Comprehension and interpretation — Pip helps kids find meaning, not just answers.' },
  { icon: Globe,      label: 'Geography',      body: 'Spatial reasoning and comparison — Pip makes the world feel explorable.' },
  { icon: Heart,      label: 'Bible / Faith',  body: 'Optional faith-based mode for families whose curriculum includes scripture.' },
]

const parentFeatures = [
  { icon: Users,  title: 'Multiple Child Profiles',  body: 'Up to 4 children under one account, each with their own grade level and subject settings.' },
  { icon: Clock,  title: 'Session Time Limits',       body: 'Set daily or per-session limits. Pip gives a gentle 5-minute warning before time is up.' },
  { icon: Shield, title: 'Subject Restrictions',      body: 'Block categories that aren\'t part of your curriculum. Your plan, your boundaries.' },
  { icon: Sparkles, title: 'Stuck Points Report',     body: 'See which concepts your child revisited most — so you know where to spend extra time.' },
]

const pricing = [
  {
    name: 'Free',
    price: null,
    description: 'Try Pip with your family.',
    features: ['1 child profile', '3 sessions per week', '15 minutes per session', '3 subjects'],
    cta: 'Start Free',
    primary: false,
  },
  {
    name: 'Family Plan',
    price: '$7.99',
    period: '/mo',
    description: 'The full Pip experience.',
    features: ['Up to 4 child profiles', 'Unlimited sessions', 'All subjects + Faith mode', 'Full parent dashboard', 'Session summaries'],
    cta: 'Get Family Plan',
    primary: true,
    badge: 'Most Popular',
  },
  {
    name: 'Annual',
    price: '$69.99',
    period: '/yr',
    description: 'Best value — save 27%.',
    features: ['Everything in Family Plan', 'Priority support', '~$5.83/month billed annually'],
    cta: 'Get Annual Plan',
    primary: false,
  },
]

export default function HomeschoolCompanion() {
  return (
    <div className="pt-16 bg-coal-900">

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-sans text-xs uppercase tracking-widest">Coming Soon</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
            The study buddy<br />
            <span className="text-emerald-400">that asks better questions.</span>
          </h1>

          <p className="text-white/50 font-sans text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            When your kid gets stuck, they need a safe place to get unstuck — not YouTube.
            Homeschool Companion brings Pip, a warm and curious AI guide who leads with questions,
            never answers. Distraction-free. Parent-transparent. Works with any curriculum.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <a
              href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-sm px-8 py-3 rounded-full transition-colors"
            >
              <Bell size={14} /> Notify Me When It Launches
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-emerald-500 text-white/60 hover:text-emerald-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
            >
              See Pricing <ChevronRight size={13} />
            </a>
          </div>

          <p className="text-white/25 font-sans text-xs mt-8">
            Built by a homeschool family, for homeschool families.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 px-4 bg-coal-800 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-500 text-xs font-sans uppercase tracking-widest mb-4">The Problem</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-snug">
            Every time they got stuck,<br />they opened YouTube.
          </h2>
          <p className="text-white/50 font-sans leading-relaxed mb-4">
            We homeschool our kids. The moment they hit a wall — fractions, the Civil War, a grammar rule —
            they'd either interrupt us or fall down a rabbit hole. We built Pip because we needed
            something that would ask the right questions, not give the answer away.
          </p>
          <p className="text-white/30 font-sans text-sm italic">
            Pip is not a full platform. Pip is a sidekick. That's the whole idea.
          </p>
        </div>
      </section>

      {/* Meet Pip */}
      <section className="py-24 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Visual */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <PipAvatar size="lg" />
              <div className="text-center">
                <p className="text-emerald-400 font-sans text-xs uppercase tracking-widest">Meet Pip</p>
              </div>
              {/* Conversation preview */}
              <div className="w-64 space-y-3 mt-4">
                <div className="bg-coal-700 border border-coal-600 rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="text-white/80 font-sans text-sm">What's 3/4 + 1/4?</p>
                </div>
                <div className="bg-emerald-600/15 border border-emerald-500/20 rounded-2xl rounded-tr-sm px-4 py-3">
                  <p className="text-emerald-300 font-sans text-sm">Great question! What do you think the denominator tells us about the pieces?</p>
                </div>
                <div className="bg-coal-700 border border-coal-600 rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="text-white/80 font-sans text-sm">That they're the same size?</p>
                </div>
                <div className="bg-emerald-600/15 border border-emerald-500/20 rounded-2xl rounded-tr-sm px-4 py-3">
                  <p className="text-emerald-300 font-sans text-sm">Exactly! So if you have 3 pieces and add 1 more piece of the same size — how many do you have?</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
                Warm. Curious.<br />Constitutionally incapable<br />of just giving the answer.
              </h2>
              <p className="text-white/50 font-sans leading-relaxed mb-6">
                Pip is a character, not a chatbot. A small, curious spirit who genuinely believes
                that discovering something yourself is better than being told. Pip uses your child's
                name, celebrates effort over outcomes, and rephrases — never repeats — when a kid gets stuck.
              </p>
              <ul className="space-y-3 text-white/60 font-sans text-sm">
                {[
                  'Never says "You\'re wrong" — asks "What makes you think that?"',
                  'Adapts vocabulary and tone for grades K–12',
                  'Redirects gently after one off-topic exchange',
                  'No links, no rabbit holes, no external resources',
                  'If Pip doesn\'t know, Pip turns it into a question to explore',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Focus */}
      <section className="py-20 px-4 bg-coal-800 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-500 text-xs font-sans uppercase tracking-widest mb-3">Subject Focus Mode</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Every subject, a different kind of question.</h2>
            <p className="text-white/40 font-sans text-sm mt-3 max-w-xl mx-auto">
              Before each session, choose a subject. Pip's approach shifts to match — math Pip thinks differently than history Pip.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {subjects.map(({ icon: Icon, label, body }) => (
              <div key={label} className="bg-coal-900 border border-coal-600 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Icon className="text-emerald-400" size={16} />
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{label}</h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Dashboard */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-500 text-xs font-sans uppercase tracking-widest mb-3">Parent Dashboard</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">You stay in the loop.</h2>
            <p className="text-white/40 font-sans text-sm mt-3 max-w-xl mx-auto">
              A separate parent view so you always know what subjects were covered, how long they worked, and where they got stuck.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {parentFeatures.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-coal-800 border border-coal-600 rounded-xl p-6">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Icon className="text-emerald-400" size={16} />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Bands */}
      <section className="py-20 px-4 bg-coal-800 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-500 text-xs font-sans uppercase tracking-widest mb-3">Age-Adaptive</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Pip speaks their language.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { band: 'K–2', ages: 'Ages 5–7',   desc: 'Simple vocabulary, short sessions, maximum encouragement. Big celebration for every small step.' },
              { band: '3–5', ages: 'Ages 8–10',  desc: 'Sentence-level responses, beginning to navigate subjects independently with Pip\'s guidance.' },
              { band: '6–8', ages: 'Ages 11–13', desc: 'Longer reasoning chains, more abstract concepts. Pip can handle light pushback and challenge.' },
              { band: '9–12', ages: 'Ages 14–18', desc: 'Near-peer tone. Complex subjects, SAT prep, college-level thinking. Pip takes them seriously.' },
            ].map(({ band, ages, desc }) => (
              <div key={band} className="bg-coal-900 border border-coal-600 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <span className="font-serif text-lg text-emerald-400">{band}</span>
                </div>
                <p className="text-white/40 font-sans text-xs mb-3">{ages}</p>
                <p className="text-white/60 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-500 text-xs font-sans uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">One fast food meal a month.</h2>
            <p className="text-white/40 font-sans text-sm mt-3">Unlimited Socratic tutoring help for your whole family.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {pricing.map(({ name, price, period, description, features, cta, primary, badge }) => (
              <div
                key={name}
                className={`rounded-2xl border p-8 relative ${
                  primary
                    ? 'bg-emerald-600/10 border-emerald-500/40'
                    : 'bg-coal-800 border-coal-600'
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-sans text-xs font-semibold px-4 py-1 rounded-full">
                    {badge}
                  </span>
                )}
                <p className={`font-sans text-xs uppercase tracking-widest mb-2 ${primary ? 'text-emerald-400' : 'text-white/40'}`}>
                  {name}
                </p>
                <div className="mb-2">
                  {price ? (
                    <span className="font-serif text-4xl text-white">
                      {price}<span className="text-white/40 text-base font-sans">{period}</span>
                    </span>
                  ) : (
                    <span className="font-serif text-4xl text-white">Free</span>
                  )}
                </div>
                <p className="text-white/40 font-sans text-sm mb-6">{description}</p>
                <ul className="space-y-2 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-white/70 font-sans text-sm">
                      <span className={`flex-shrink-0 mt-0.5 ${primary ? 'text-emerald-400' : 'text-white/30'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors ${
                    primary
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'border border-white/20 hover:border-emerald-500 text-white/60 hover:text-emerald-400'
                  }`}
                >
                  {cta} <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-coal-800 border-t border-white/5 text-center">
        <div className="max-w-lg mx-auto">
          <PipAvatar size="md" />
          <div className="mt-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Be the first to meet Pip.</h2>
          <p className="text-white/50 font-sans leading-relaxed mb-8">
            Join the newsletter and we'll notify you the moment Homeschool Companion is ready to download.
            Free to try when it launches.
          </p>
          <a
            href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold px-10 py-4 rounded-full transition-colors"
          >
            Notify Me <ArrowRight size={15} />
          </a>
          <p className="text-white/20 font-sans text-xs mt-4">No spam. Just a heads-up when Pip is ready.</p>
        </div>
      </section>

    </div>
  )
}
