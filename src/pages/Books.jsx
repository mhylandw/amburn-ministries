import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import overcomerCover from '../assets/overcomer-cover-3d.png'
import graceLiftsCover from '../assets/when-the-grace-lifts-3d.png'
import weightOfYesCover from '../assets/weight-of-yes-3d.png'
import afterBreakthroughCover from '../assets/after-the-breakthrough-3d.png'
import textingGodCover from '../assets/texting-with-god-3d.png'

const books = [
  {
    cover: overcomerCover,
    title: 'Overcomer',
    subtitle: "God's Love Through the Eyes of a Rebel",
    description: 'A raw, honest story of failure, faith, and the relentless love of God. Michael\'s debut memoir traces the wreckage of rebellion and the miracle of redemption.',
    status: 'available',
    buyLink: '#',
  },
  {
    cover: textingGodCover,
    title: 'Texting With God',
    subtitle: 'The Story Behind the Conversation',
    description: 'The story of how one man learned to hear God\'s voice — not in thunder, but in the quiet of a Notes app on his phone.',
    status: 'available',
    buyLink: '#',
  },
  {
    cover: graceLiftsCover,
    title: 'When the Grace Lifts',
    subtitle: 'Finding faithfulness in the inbetweens',
    description: 'A field guide for when God feels distant. Written in the quiet after the storm, this book helps you find God\'s voice in the seasons when heaven feels silent.',
    status: 'available',
    buyLink: '#',
  },
  {
    cover: weightOfYesCover,
    title: 'The Weight of Yes',
    subtitle: 'What obedience costs... and what it forms',
    description: 'Saying yes to God sounds simple — until it costs you something. This book explores what real obedience looks like when the stakes are high and the path is hard.',
    status: 'available',
    buyLink: '#',
  },
  {
    cover: afterBreakthroughCover,
    title: 'After the Breakthrough',
    subtitle: 'Living from intimacy, not outcomes',
    description: 'The breakthrough came — now what? This book helps you steward the revelation God gave you and actually live in the freedom He unlocked.',
    status: 'available',
    buyLink: '#',
  },
]

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
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">By Michael Amstutz-Washburn</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Books</h1>
        <p className="text-white/50 font-sans max-w-lg mx-auto text-sm leading-relaxed">
          Real stories and honest theology for people who are done with easy answers and ready for the real thing.
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
                      Available Now
                    </span>
                  )}
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">{book.title}</h2>
                  <p className="text-white/50 font-sans italic text-sm mb-4">{book.subtitle}</p>
                  <p className="text-white/60 font-sans leading-relaxed mb-6 max-w-lg">{book.description}</p>

                  {book.status === 'available' && book.buyLink && book.buyLink !== '#' ? (
                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href={book.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors w-fit"
                      >
                        Get the Book <ArrowRight size={15} />
                      </a>
                      <Link
                        to="/ebooks"
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/50 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors w-fit"
                      >
                        <BookOpen size={14} /> eBook
                      </Link>
                    </div>
                  ) : book.status === 'available' && book.buyLink === '#' ? (
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-2 border border-white/10 text-white/30 font-sans text-sm px-6 py-3 rounded-full w-fit cursor-default">
                        Print — Coming Soon
                      </span>
                      <Link
                        to="/ebooks"
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/50 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors w-fit"
                      >
                        <BookOpen size={14} /> eBook
                      </Link>
                    </div>
                  ) : book.status === 'coming-soon' ? (
                    <a
                      href="https://amburnministries.beehiiv.com/subscribe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/20 hover:border-flame-500 text-white/60 hover:text-flame-400 font-sans text-sm px-6 py-3 rounded-full transition-colors w-fit"
                    >
                      Notify Me <ArrowRight size={15} />
                    </a>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
