import { BookOpen, Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import overcomerCover from '../assets/overcomer-cover-3d.png'
import graceLiftsCover from '../assets/when-the-grace-lifts-3d.png'
import weightOfYesCover from '../assets/weight-of-yes-3d.png'
import afterBreakthroughCover from '../assets/after-the-breakthrough-3d.png'
import textingGodCover from '../assets/texting-with-god-3d.png'

const ebooks = [
  {
    cover: overcomerCover,
    title: 'Overcomer',
    subtitle: "God's Love Through the Eyes of a Rebel",
    description: 'A raw, honest story of failure, faith, and the relentless love of God.',
    price: 9.99,
    stripeLink: null, // add Stripe Payment Link here
  },
  {
    cover: textingGodCover,
    title: 'Texting With God',
    subtitle: 'The Story Behind the Conversation',
    description: 'The story of how one man learned to hear God\'s voice — not in thunder, but in the quiet of a Notes app on his phone.',
    price: 9.99,
    stripeLink: 'https://buy.stripe.com/14AbJ1cwgcW7cxP5BH3sI03',
  },
  {
    cover: graceLiftsCover,
    title: 'When the Grace Lifts',
    subtitle: 'Finding faithfulness in the inbetweens',
    description: 'A field guide for when God feels distant — written for the seasons when heaven feels silent.',
    price: 9.99,
    stripeLink: 'https://buy.stripe.com/eVq3cvao8e0b41j9RX3sI00',
  },
  {
    cover: weightOfYesCover,
    title: 'The Weight of Yes',
    subtitle: 'What obedience costs... and what it forms',
    description: 'Saying yes to God sounds simple — until it costs you something.',
    price: 9.99,
    stripeLink: 'https://buy.stripe.com/cNi4gz9k43lx7dv9RX3sI01',
  },
  {
    cover: afterBreakthroughCover,
    title: 'After the Breakthrough',
    subtitle: 'Living from intimacy, not outcomes',
    description: 'The breakthrough came — now what? Learn to steward what God unlocked.',
    price: 9.99,
    stripeLink: 'https://buy.stripe.com/7sY3cvao8aNZ0P7c053sI02',
  },
]

export default function Ebooks() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Digital Library</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">eBooks</h1>
        <p className="text-white/50 font-sans max-w-lg mx-auto text-sm leading-relaxed">
          All titles available as ePub — compatible with Kindle, Apple Books, Kobo, and any ebook reader.
        </p>

        {/* Format badges */}
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

                {/* Price + CTA */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-sans text-white font-semibold text-lg">
                    ${book.price.toFixed(2)}
                  </span>

                  {book.stripeLink ? (
                    <a
                      href={book.stripeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                    >
                      Buy <ArrowRight size={14} />
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 border border-white/10 text-white/30 font-sans text-sm px-5 py-2.5 rounded-full cursor-default">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Also available in print */}
        <div className="max-w-5xl mx-auto mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-white/40 font-sans text-sm mb-4">Prefer a physical copy?</p>
          <Link
            to="/books"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/60 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors"
          >
            View Print Books <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
