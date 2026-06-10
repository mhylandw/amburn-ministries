import { useState } from 'react'
import { Download, Check, Mail } from 'lucide-react'
import { trackConversion } from '../lib/analytics'
import textingCover from '../assets/texting-with-god-3d.png'
import graceLiftsCover from '../assets/when-the-grace-lifts-3d.png'
import weightCover from '../assets/weight-of-yes-3d.png'
import breakthroughCover from '../assets/after-the-breakthrough-3d.png'
import ravenCover from '../assets/wheres-my-raven.png'
import overcomerCover from '../assets/overcomer-cover-3d.png'
import { usePageTitle } from '../hooks/usePageTitle'

const EBOOKS = [
  {
    title: 'Texting With God',
    subtitle: 'The Story Behind the Conversation',
    cover: textingCover,
    epub: '/texting-with-god.epub',
    filename: 'Texting With God - Amburn Ministries.epub',
  },
  {
    title: 'When the Grace Lifts',
    subtitle: 'Finding faithfulness in the inbetweens',
    cover: graceLiftsCover,
    epub: '/when-the-grace-lifts.epub',
    filename: 'When the Grace Lifts - Amburn Ministries.epub',
  },
  {
    title: 'The Weight of Yes',
    subtitle: 'What obedience costs... and what it forms',
    cover: weightCover,
    epub: '/weight-of-yes.epub',
    filename: 'The Weight of Yes - Amburn Ministries.epub',
  },
  {
    title: 'After the Breakthrough',
    subtitle: 'Living from intimacy, not outcomes',
    cover: breakthroughCover,
    epub: '/after-the-breakthrough.epub',
    filename: 'After the Breakthrough - Amburn Ministries.epub',
  },
  {
    title: "Where's My Raven?",
    subtitle: 'Exposing the Entitlement Mindset in the Church',
    cover: ravenCover,
    epub: '/wheres-my-raven.epub',
    filename: "Where's My Raven - Amburn Ministries.epub",
  },
  {
    title: 'Overcomer',
    subtitle: "God's Love Through the Eyes of a Rebel",
    cover: overcomerCover,
    epub: null,
    filename: null,
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
    trackConversion('download', { item: filename })
  }

  if (done) {
    return (
      <div className="flex items-center justify-center gap-1.5 text-flame-400 font-sans text-xs">
        <Check size={13} /> Download started!
      </div>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
      >
        <Download size={13} /> Free Download
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      <div className="relative">
        <Mail size={11} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-coal-700 border border-coal-500 focus:border-flame-500 rounded-full pl-7 pr-3 py-2 text-white text-xs font-sans outline-none transition-colors placeholder-white/30"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-xs px-4 py-2 rounded-full transition-colors"
      >
        Get It Free
      </button>
    </form>
  )
}

export default function Store() {
  usePageTitle('Store | Amburn Ministries', 'Free ministry resources and books available for download from Amburn Ministries.')

  return (
    <div className="min-h-screen bg-coal-900 pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Digital Library</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">eBooks</h1>
          <p className="text-white/50 font-sans max-w-md mx-auto">
            All titles free to download. Enter your email and read on any device.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EBOOKS.map(book => (
            <div key={book.title} className="bg-coal-800 border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center">
              <img src={book.cover} alt={book.title} className="w-28 mb-5 rounded-md shadow-lg hover:scale-105 transition-transform duration-300" />
              <h3 className="font-serif text-lg text-white mb-1">{book.title}</h3>
              <p className="text-white/40 font-sans text-xs leading-relaxed mb-4">{book.subtitle}</p>
              <div className="mt-auto w-full">
                {book.epub ? (
                  <DownloadForm epub={book.epub} filename={book.filename} />
                ) : (
                  <span className="w-full flex items-center justify-center border border-white/10 text-white/30 font-sans text-sm px-4 py-2.5 rounded-full cursor-default">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
