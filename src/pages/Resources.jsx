import { useState } from 'react'
import { Music, Download, ArrowRight, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import overcomerCover from '../assets/overcomer-cover.png'
import SongDownloadModal from '../components/SongDownloadModal'

export default function Resources() {
  const [showSongModal, setShowSongModal] = useState(false)
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Tools & Media</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">Resources</h1>
      </div>

      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">

          {/* Free Song Download */}
          <div className="bg-coal-800 border border-coal-600 rounded-2xl p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/10 border border-flame-500/30 mb-6">
              <Music className="text-flame-500" size={22} />
            </div>
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-2">Free Download</p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Healing You Again (Communion)</h2>
            <div className="text-white/60 font-sans leading-relaxed space-y-4 mb-8 max-w-2xl">
              <p>
                <em className="text-white/80">Healing You Again</em> was born in one of the most desperate seasons of my life—a time when I was doing everything in my power to "crack the code" of supernatural healing.
              </p>
              <p>
                My late wife was dying of cancer. The idea hit me sideways—in the best way. Communion became that anchor. Not a ritual, not a formula, not a magic key… but a rhythm of returning to Jesus.
              </p>
              <p>
                This song came from that collision—raw hope meeting raw pain, and Jesus still standing there in the middle of both.
              </p>
              <p>
                It's a reminder that God doesn't roll His eyes at your need. He draws near to it. He invites you back to the table.
              </p>
            </div>
            <button
              onClick={() => setShowSongModal(true)}
              className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-8 py-3 rounded-full transition-colors"
            >
              <Download size={15} />
              Get Free Download
            </button>
          </div>

          {/* Discern App */}
          <div className="bg-coal-800 border border-coal-600 rounded-2xl p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/10 border border-flame-500/30 mb-6">
              <Compass className="text-flame-500" size={22} />
            </div>
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-2">Coming Soon</p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Discern App</h2>
            <p className="text-white/60 font-sans leading-relaxed mb-8 max-w-2xl">
              A spiritual discernment tool built to help you hear God clearly — not just once, but every day. Guided prompts, Scripture-based testing, and a space to grow in two-way conversation with God.
            </p>
            <Link
              to="/discern"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/70 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
            >
              Learn More <ArrowRight size={15} />
            </Link>
          </div>

          {/* Book */}
          <div className="bg-coal-800 border border-coal-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
            <img src={overcomerCover} alt="Overcomer" className="w-40 rounded-lg shadow-xl flex-shrink-0" />
            <div>
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-2">Coming Soon</p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">Overcomer</h2>
            <p className="text-white/50 font-sans italic text-sm mb-4">God's Love Through the Eyes of a Rebel</p>
            <p className="text-white/60 font-sans leading-relaxed mb-8 max-w-2xl">
              Michael Amstutz-Washburn's debut book. A raw, honest story of failure, faith, and the relentless love of God. Stay connected to be the first to know when it drops.
            </p>
            <a
              href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/70 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
            >
              Notify Me <ArrowRight size={15} />
            </a>
            </div>
          </div>

        </div>
      </section>

      {showSongModal && <SongDownloadModal onClose={() => setShowSongModal(false)} />}
    </div>
  )
}
