import { useState } from 'react'
import { ArrowRight, BookOpen, Download, Check, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackConversion } from '../lib/analytics'
import overcomerCover from '../assets/overcomer-cover-3d.png'
import graceLiftsCover from '../assets/when-the-grace-lifts-3d.png'
import weightOfYesCover from '../assets/weight-of-yes-3d.png'
import afterBreakthroughCover from '../assets/after-the-breakthrough-3d.png'
import textingGodCover from '../assets/texting-with-god-3d.png'
import ravenCover from '../assets/wheres-my-raven.png'
import counterfeitLightCover from '../assets/counterfeit-light-3d.png'
import { usePageTitle } from '../hooks/usePageTitle'

const books = [
  {
    cover: counterfeitLightCover,
    title: 'The Counterfeit Light',
    slug: 'the-counterfeit-light',
    subtitle: 'How to Tell the Light From Its Shadow',
    description: 'Written by someone who spent forty years moving through religions and spiritual experiences that felt real but never loved him back. A field guide for sincere seekers learning to tell the true Light from its convincing counterfeit.',
    status: 'available',
    epub: '/The Counterfeit Light-wmO5aOUwgh.epub',
    filename: 'The Counterfeit Light - Amburn Ministries.epub',
  },
  {
    cover: overcomerCover,
    title: 'Overcomer',
    slug: 'overcomer',
    subtitle: "God's Love Through the Eyes of a Rebel",
    description: 'A raw, honest story of failure, faith, and the relentless love of God. Michael\'s debut memoir traces the wreckage of rebellion and the miracle of redemption.',
    status: 'coming-soon',
  },
  {
    cover: textingGodCover,
    title: 'Texting With God',
    slug: 'texting-with-god',
    subtitle: 'The Story Behind the Conversation',
    description: 'The story of how one man learned to hear God\'s voice — not in thunder, but in the quiet of a Notes app on his phone.',
    status: 'available',
    epub: '/texting-with-god.epub',
    filename: 'Texting With God - Amburn Ministries.epub',
  },
  {
    cover: graceLiftsCover,
    title: 'When the Grace Lifts',
    slug: 'when-the-grace-lifts',
    subtitle: 'Finding faithfulness in the inbetweens',
    description: 'A field guide for when God feels distant. Written in the quiet after the storm, this book helps you find God\'s voice in the seasons… when it feels silent.',
    status: 'available',
    epub: '/when-the-grace-lifts.epub',
    filename: 'When the Grace Lifts - Amburn Ministries.epub',
  },
  {
    cover: weightOfYesCover,
    title: 'The Weight of Yes',
    slug: 'the-weight-of-yes',
    subtitle: 'What obedience costs... and what it forms',
    description: 'Saying yes to God sounds simple — until it costs you something. This book explores what real obedience looks like when the stakes are high and the path is hard.',
    status: 'available',
    epub: '/weight-of-yes.epub',
    filename: 'The Weight of Yes - Amburn Ministries.epub',
  },
  {
    cover: afterBreakthroughCover,
    title: 'After the Breakthrough',
    slug: 'after-the-breakthrough',
    subtitle: 'Living from intimacy, not outcomes',
    description: 'The breakthrough came — now what? This book helps you steward the revelation God gave you and actually live in the freedom He unlocked.',
    status: 'available',
    epub: '/after-the-breakthrough.epub',
    filename: 'After the Breakthrough - Amburn Ministries.epub',
  },
  {
    cover: ravenCover,
    title: "Where's My Raven?",
    slug: 'wheres-my-raven',
    subtitle: 'Exposing the Entitlement Mindset in the Church',
    description: "What if the provision you're waiting on was never coming — because God already gave you coordinates? A sharp, honest look at entitlement, striving, and what it really means to trust God.",
    status: 'available',
    epub: '/wheres-my-raven.epub',
    filename: "Where's My Raven - Amburn Ministries.epub",
  },
]

function DownloadForm({ epub, filename, title }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [open, setOpen] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // Subscribe silently via serverless function
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(() => {}) // fire and forget
    // Trigger download immediately
    const link = document.createElement('a')
    link.href = epub
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDone(true)
    trackConversion('download', { item: title })
  }

  if (done) {
    return (
      <div className="flex items-center gap-2 text-flame-400 font-sans text-sm">
        <Check size={16} />
        <span>Download started — check your Downloads folder!</span>
      </div>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors w-fit"
      >
        <Download size={15} /> Free Download
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
      <div className="relative flex-1">
        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-full pl-9 pr-4 py-2.5 text-white text-sm font-sans outline-none transition-colors placeholder-white/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
      >
        <Download size={14} /> Get It
      </button>
    </form>
  )
}

function Book3D({ cover, title }) {
  return (
    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
      <img
        src={cover}
        alt={title}
        className="w-48 md:w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
      />
    </div>
  )
}

export default function Books() {
  usePageTitle('Books | Amburn Ministries', 'Books by Michael Amstutz-Washburn — free to download. Healing, faith, and breakthrough for real life.')

  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">By Michael Amstutz-Washburn</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Books</h1>
        <p className="text-white/50 font-sans max-w-lg mx-auto text-sm leading-relaxed">
          Real stories and honest theology for people who are ready to go deeper with God. All eBooks are free.
        </p>
      </div>

      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto flex flex-col gap-20">
          {books.map((book, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={book.title}
                className={`flex flex-col md:flex-row gap-12 items-center ${flip ? 'md:flex-row-reverse' : ''}`}
              >
                <Book3D cover={book.cover} title={book.title} />

                {/* Info */}
                <div className="flex flex-col justify-center">
                  {book.status === 'coming-soon' ? (
                    <span className="text-xs font-sans uppercase tracking-widest text-flame-500 bg-flame-500/10 border border-flame-500/30 px-3 py-1 rounded-full w-fit mb-4">
                      Coming Soon
                    </span>
                  ) : (
                    <span className="text-xs font-sans uppercase tracking-widest text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit mb-4">
                      Free eBook
                    </span>
                  )}
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">{book.title}</h2>
                  <p className="text-white/50 font-sans italic text-sm mb-4">{book.subtitle}</p>
                  <p className="text-white/60 font-sans leading-relaxed mb-6 max-w-lg">{book.description}</p>

                  {book.status === 'available' ? (
                    <div className="flex flex-col gap-3">
                      <DownloadForm epub={book.epub} filename={book.filename} title={book.title} />
                      <Link
                        to={`/books/${book.slug}`}
                        className="text-white/30 hover:text-flame-400 font-sans text-xs transition-colors inline-flex items-center gap-1"
                      >
                        Learn more <ArrowRight size={11} />
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/60 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors w-fit"
                      >
                        Get Notified <ArrowRight size={15} />
                      </a>
                      <Link
                        to={`/books/${book.slug}`}
                        className="text-white/30 hover:text-flame-400 font-sans text-xs transition-colors inline-flex items-center gap-1"
                      >
                        Learn more <ArrowRight size={11} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
