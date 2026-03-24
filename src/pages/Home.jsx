import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Music, Mail, Compass, Bell } from 'lucide-react'
import discernScreen from '../assets/discern-screen-home.png'
import discernRoger from '../assets/discern-screen-roger.png'
import heroBg from '../assets/mk-header.png'
import mkPhoto from '../assets/mk-hero.avif'
import logo from '../assets/logo.avif'
import overcomerCover from '../assets/overcomer-cover-3d.png'
import textingCover from '../assets/texting-with-god-3d.png'
import graceLiftsCover from '../assets/when-the-grace-lifts-3d.png'
import weightCover from '../assets/weight-of-yes-3d.png'
import breakthroughCover from '../assets/after-the-breakthrough-3d.png'
import EmailSubscribe from '../components/EmailSubscribe'
import SongDownloadModal from '../components/SongDownloadModal'

export default function Home() {
  const [showSongModal, setShowSongModal] = useState(false)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background image — heavy overlay removes color cast */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-coal-900/75" />
        </div>
        {/* Flame glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-flame-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Logo */}
          <img src={logo} alt="Amburn Ministries" className="w-64 md:w-96 h-auto" />

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={16} />
              Subscribe to Newsletter
            </a>
            <Link
              to="/about"
              className="flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/70 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
            >
              Learn More <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </section>

      {/* Our Vision */}
      <section className="bg-coal-800 py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Our Purpose</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Our Vision</h2>
            <p className="text-white/60 font-sans leading-relaxed mb-4">
              The world and the Church are searching for truth... They want to encounter the heart of God—to understand the Love of God. Our mission is to bring healing, deliverance, and restoration to every soul that God brings across our path.
            </p>
            <p className="text-white/60 font-sans leading-relaxed mb-8">
              Amburn Ministries stands as a beacon of hope and transformation. Rooted in the belief that every individual deserves an environment where healing, deliverance, and restoration are not just ideals but realities.
            </p>
            <Link to="/about" className="flex items-center gap-2 text-flame-400 hover:text-flame-300 font-sans text-sm font-medium transition-colors">
              Learn More <ArrowRight size={15} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={mkPhoto} alt="Michael & Katrina Amstutz-Washburn" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Free Song Download */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-flame-500/10 border border-flame-500/30 mb-6">
            <Music className="text-flame-500" size={24} />
          </div>
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Free Gift</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Free Song Download</h2>
          <p className="text-white/60 font-sans leading-relaxed max-w-xl mx-auto mb-8">
            <em className="text-white/80">Healing You Again (Communion)</em> — born in one of the most desperate seasons of life, this song is a reminder that God doesn't roll His eyes at your need. He draws near to it.
          </p>
          <button
            onClick={() => setShowSongModal(true)}
            className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-8 py-3 rounded-full transition-colors"
          >
            Get Free Download <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* Book Promo */}
      <section className="py-20 px-4 bg-coal-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Book cover */}
          <div className="flex justify-center">
            <img src={overcomerCover} alt="Overcomer by Michael Amstutz-Washburn" className="w-56 rounded-xl shadow-2xl" />
          </div>

          <div>
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">New Book</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">Overcomer</h2>
            <p className="text-white/50 font-sans text-sm italic mb-6">God's Love Through the Eyes of a Rebel</p>
            <p className="text-white/60 font-sans leading-relaxed mb-4">
              Michael Amstutz-Washburn is a gifted writer whose prose resonates with a rare blend of passion and precision. His writing moves you—and points you back to Jesus.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 border border-flame-500/40 text-flame-400 font-sans text-sm px-6 py-3 rounded-full w-fit">
                Coming Soon
              </span>
              <a
                href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-flame-400 font-sans text-sm transition-colors"
              >
                Get notified <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More Books */}
      <section className="py-10 px-4 bg-coal-800 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-white/40 font-sans text-xs uppercase tracking-widest">More Books</p>
            <Link to="/books" className="text-flame-400 font-sans text-xs hover:text-flame-300 transition-colors flex items-center gap-1">
              Browse All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="flex gap-4 justify-center">
            {[textingCover, graceLiftsCover, weightCover, breakthroughCover].map((cover, i) => (
              <Link to="/books" key={i}>
                <img src={cover} alt="Book" className="w-16 md:w-20 rounded-md shadow-lg hover:scale-105 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {showSongModal && <SongDownloadModal onClose={() => setShowSongModal(false)} />}

      {/* Discern App */}
      <section className="relative py-24 px-4 bg-coal-900 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-flame-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-14">

            {/* Phone mockups */}
            <div className="flex gap-3 items-end flex-shrink-0">
              <div className="mb-8 w-36 rounded-[2rem] border-4 border-white/10 shadow-2xl overflow-hidden bg-coal-900">
                <img src={discernScreen} alt="Discern home" className="w-full h-auto block" />
              </div>
              <div className="w-36 rounded-[2rem] border-4 border-white/10 shadow-2xl overflow-hidden bg-coal-900">
                <img src={discernRoger} alt="Roger check-in" className="w-full h-auto block" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Coming Soon</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
                Quiet your Heart.<br />And Listen.
              </h2>
              <p className="text-white/50 font-sans leading-relaxed mb-3 max-w-md">
                A daily spiritual companion built to help you hear God more clearly — through conversation, scripture, guided practices, and reflection.
              </p>
              <p className="text-white/30 font-sans text-xs mb-8 italic">
                Based on the teachings of Daniel Amstutz & Michael Amstutz-Washburn
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-start justify-center">
                <Link
                  to="/discern"
                  className="inline-flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-7 py-3 rounded-full transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
                <a
                  href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-flame-500 text-white/50 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
                >
                  <Bell size={13} /> Notify Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Stay Connected</h2>
          <p className="text-white/50 font-sans leading-relaxed mb-8">
            Join our mailing list for the latest updates, blog posts, and exclusive content from Amburn Ministries.
          </p>
          <EmailSubscribe />
        </div>
      </section>
    </div>
  )
}
