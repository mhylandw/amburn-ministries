import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Download, Check, Mail, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react'
import { bookDetails } from '../data/bookDetails'

function DownloadForm({ epub, filename }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [open, setOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    window.open(
      `https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
      '_blank',
      'noopener,noreferrer'
    )
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
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-flame-400 font-sans text-sm">
          <Check size={16} />
          <span>Download started — check your Downloads folder!</span>
        </div>
        <a
          href={epub}
          download={filename}
          className="text-white/30 hover:text-flame-400 font-sans text-xs underline transition-colors"
        >
          Download again
        </a>
      </div>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-colors"
      >
        <Download size={18} /> Free Download
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="relative flex-1">
        <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-white/10 border border-white/20 focus:border-flame-400 rounded-full pl-11 pr-4 py-3.5 text-white text-sm font-sans outline-none transition-colors placeholder-white/40"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-full transition-colors whitespace-nowrap"
      >
        <Download size={15} /> Get It Free
      </button>
    </form>
  )
}

export default function BookLanding() {
  const { slug } = useParams()
  const book = bookDetails.find((b) => b.slug === slug)

  if (!book) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 font-sans mb-4">Book not found.</p>
          <Link to="/books" className="text-flame-400 hover:underline text-sm font-sans">← Back to Books</Link>
        </div>
      </div>
    )
  }

  const others = bookDetails.filter((b) => b.slug !== slug && b.status === 'available').slice(0, 3)

  return (
    <div className="pt-16">

      {/* Hero */}
      <div className="relative bg-coal-900 overflow-hidden">
        {/* Background blur from cover */}
        <div
          className="absolute inset-0 opacity-10 blur-3xl scale-110"
          style={{ backgroundImage: `url(${book.promo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-5xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
          {/* Cover */}
          <div className="shrink-0">
            <img
              src={book.cover3d}
              alt={book.title}
              className="w-52 md:w-64 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <div>
              {book.status === 'available' ? (
                <span className="text-xs font-sans uppercase tracking-widest text-flame-400 bg-flame-500/10 border border-flame-500/30 px-3 py-1 rounded-full">
                  Free eBook
                </span>
              ) : (
                <span className="text-xs font-sans uppercase tracking-widest text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-2">{book.title}</h1>
              <p className="text-white/50 font-sans italic text-lg">{book.subtitle}</p>
            </div>
            <p className="font-serif text-xl text-white/80 leading-snug max-w-lg">{book.tagline}</p>

            {book.status === 'available' ? (
              <div className="flex flex-col gap-2">
                <DownloadForm epub={book.epub} filename={book.filename} />
                <p className="text-white/25 font-sans text-xs">Free forever. No credit card needed.</p>
              </div>
            ) : (
              <a
                href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/60 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors w-fit mx-auto md:mx-0"
              >
                Notify me when it's ready <ArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* About the book */}
      <section className="py-16 px-4 bg-coal-800 border-t border-coal-600">
        <div className="max-w-2xl mx-auto">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-6">About the Book</p>
          <div className="flex flex-col gap-4">
            {book.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-white/70 font-sans leading-relaxed text-base">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-16 px-4 bg-coal-900 border-t border-coal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-white leading-snug italic mb-4">
            {book.pullQuote}
          </p>
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest">— Michael Amstutz-Washburn</p>
        </div>
      </section>

      {/* Themes */}
      <section className="py-12 px-4 bg-coal-800 border-t border-coal-600">
        <div className="max-w-2xl mx-auto">
          <p className="text-white/40 font-sans text-xs uppercase tracking-widest mb-4 text-center">What You'll Explore</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {book.themes.map((theme) => (
              <span
                key={theme}
                className="text-white/60 font-sans text-sm bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      {book.status === 'available' && (
        <section className="py-16 px-4 bg-coal-900 border-t border-coal-700">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-flame-500/10 border border-flame-500/30 flex items-center justify-center">
              <BookOpen className="text-flame-500" size={20} />
            </div>
            <h2 className="font-serif text-3xl text-white">Read it free.</h2>
            <p className="text-white/50 font-sans leading-relaxed">
              Enter your email and download <em>{book.title}</em> instantly. No charge, no catch.
            </p>
            <DownloadForm epub={book.epub} filename={book.filename} />
            <p className="text-white/20 font-sans text-xs">No spam. Unsubscribe anytime.</p>
          </div>
        </section>
      )}

      {/* Other books */}
      {others.length > 0 && (
        <section className="py-16 px-4 bg-coal-800 border-t border-coal-600">
          <div className="max-w-4xl mx-auto">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-8 text-center">More Books</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {others.map((b) => (
                <Link
                  key={b.slug}
                  to={`/books/${b.slug}`}
                  className="flex flex-col items-center gap-4 bg-coal-700 border border-coal-600 rounded-2xl p-6 hover:border-flame-500/40 transition-colors group"
                >
                  <img
                    src={b.cover3d}
                    alt={b.title}
                    className="w-28 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="font-serif text-white text-base mb-1">{b.title}</p>
                    <p className="text-white/40 font-sans text-xs">{b.subtitle}</p>
                  </div>
                  <span className="text-flame-400 font-sans text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                    Free Download <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="py-8 px-4 bg-coal-900 border-t border-coal-700">
        <div className="max-w-4xl mx-auto">
          <Link to="/books" className="inline-flex items-center gap-2 text-white/30 hover:text-flame-400 font-sans text-sm transition-colors">
            <ArrowLeft size={14} /> All Books
          </Link>
        </div>
      </div>
    </div>
  )
}
