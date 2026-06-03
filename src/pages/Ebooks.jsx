import { useState } from 'react'
import { BookOpen, Download, ArrowRight, Check, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import overcomerCover from '../assets/overcomer-cover-3d.png'
import graceLiftsCover from '../assets/when-the-grace-lifts-3d.jpg'
import weightOfYesCover from '../assets/weight-of-yes-3d.jpg'
import afterBreakthroughCover from '../assets/after-the-breakthrough-3d.jpg'
import textingGodCover from '../assets/texting-with-god-3d.jpg'
import ravenCover from '../assets/wheres-my-raven.png'
import { usePageTitle } from '../hooks/usePageTitle'

const ebooks = [
  {
    cover: overcomerCover,
    title: 'Overcomer',
    subtitle: "God's Love Through the Eyes of a Rebel",
    description: 'A raw, honest story of failure, faith, and the relentless love of God.',
    epub: null,
    filename: null,
  },
  {
    cover: textingGodCover,
    title: 'Texting With God',
    subtitle: 'The Story Behind the Conversation',
    description: 'The story of how one man learned to hear God\'s voice — not in thunder, but in the quiet of a Notes app on his phone.',
    epub: '/texting-with-god.epub',
    filename: 'Texting With God - Amburn Ministries.epub',
  },
  {
    cover: graceLiftsCover,
    title: 'When the Grace Lifts',
    subtitle: 'Finding faithfulness in the inbetweens',
    description: 'A field guide for when God feels distant — written for the seasons when heaven feels silent.',
    epub: '/when-the-grace-lifts.epub',
    filename: 'When the Grace Lifts - Amburn Ministries.epub',
  },
  {
    cover: weightOfYesCover,
    title: 'The Weight of Yes',
    subtitle: 'What obedience costs... and what it forms',
    description: 'Saying yes to God sounds simple — until it costs you something.',
    epub: '/weight-of-yes.epub',
    filename: 'The Weight of Yes - Amburn Ministries.epub',
  },
  {
    cover: afterBreakthroughCover,
    title: 'After the Breakthrough',
    subtitle: 'Living from intimacy, not outcomes',
    description: 'The breakthrough came — now what? Learn to steward what God unlocked.',
    epub: '/after-the-breakthrough.epub',
    filename: 'After the Breakthrough - Amburn Ministries.epub',
  },
  {
    cover: ravenCover,
    title: "Where's My Raven?",
    subtitle: 'Exposing the Entitlement Mindset in the Church',
    description: "What if the provision you're waiting on was never coming — because God already gave you coordinates?",
    epub: '/wheres-my-raven.epub',
    filename: "Where's My Raven - Amburn Ministries.epub",
  },
]

function DownloadForm({ epub, filename }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [open, setOpen] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(() => {})
    const link = document.createElement('a')
    link.href = epub
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDone(true)
  }

  if (done) {
    return (
      <div className="flex items-center gap-2 text-flame-400 font-sans text-xs mt-2">
        <Check size={13} /> Download started!
      </div>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-4 py-2 rounded-full transition-colors"
      >
        <Download size={13} /> Free Download
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <div className="relative flex-1">
        <Mail size={11} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-full pl-7 pr-2 py-1.5 text-white text-xs font-sans outline-none transition-colors placeholder-white/30"
        />
      </div>
      <button
        type="submit"
        className="bg-flame-500 hover:bg-flame-400 text-white font-sans text-xs px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
      >
        Get It
      </button>
    </form>
  )
}

export default function Ebooks() {
  usePageTitle('Free eBooks | Amburn Ministries', 'Download free ministry books from Amburn Ministries. No cost, no catch.')

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Digital Library</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">eBooks</h1>
        <p className="text-white/50 font-sans max-w-lg mx-auto text-sm leading-relaxed">
          All titles available as ePub — compatible with Kindle, Apple Books, Kobo, and any ebook reader. Enter your email and download free.
        </p>
        <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
          {['ePub', 'Kindle', 'Apple Books', 'Kobo'].map(f => (
            <span key={f} className="text-xs font-sans text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((book) => (
            <div
              key={book.title}
              className="bg-coal-800 border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-white/10 transition-colors"
            >
              {/* Cover */}
              <div className="bg-coal-700 flex items-center justify-center py-10 px-6">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-32 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={13} className="text-flame-500" />
                  <span className="text-xs font-sans uppercase tracking-widest text-flame-500">ePub</span>
                </div>
                <h2 className="font-serif text-xl text-white mb-1">{book.title}</h2>
                <p className="text-white/40 font-sans italic text-xs mb-3">{book.subtitle}</p>
                <p className="text-white/50 font-sans text-sm leading-relaxed flex-1">{book.description}</p>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  {book.epub ? (
                    <DownloadForm epub={book.epub} filename={book.filename} />
                  ) : (
                    <span className="flex items-center gap-2 border border-white/10 text-white/30 font-sans text-sm px-4 py-2 rounded-full w-fit cursor-default">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-white/40 font-sans text-sm mb-4">Prefer a physical copy?</p>
          <Link
            to="/books"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/60 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
          >
            View All Books <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
