import { useState } from 'react'
import { BookOpen, ArrowRight, Loader } from 'lucide-react'
import textingCover from '../assets/texting-with-god-3d.png'
import graceLiftsCover from '../assets/when-the-grace-lifts-3d.png'
import weightCover from '../assets/weight-of-yes-3d.png'
import breakthroughCover from '../assets/after-the-breakthrough-3d.png'

const EBOOKS = [
  {
    id: 'when-the-grace-lifts',
    title: 'When the Grace Lifts',
    subtitle: 'Finding Faithfulness in the In-Between',
    cover: graceLiftsCover,
    price: 9.99,
  },
  {
    id: 'texting-with-god',
    title: 'Texting With God',
    subtitle: 'The story of how one man learned to hear God\'s voice',
    cover: textingCover,
    price: 9.99,
  },
  {
    id: 'weight-of-yes',
    title: 'The Weight of Yes',
    subtitle: 'eBook by Michael Amstutz-Washburn',
    cover: weightCover,
    price: 9.99,
  },
  {
    id: 'after-the-breakthrough',
    title: 'After the Breakthrough',
    subtitle: 'eBook by Michael Amstutz-Washburn',
    cover: breakthroughCover,
    price: 9.99,
  },
]

export default function Store() {
  const [loading, setLoading] = useState(null)

  async function handleBuy(bookId) {
    setLoading(bookId)
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookId }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-coal-900 pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Digital Store</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">eBooks</h1>
          <p className="text-white/50 font-sans max-w-md mx-auto">
            Instant download. Read on any device. Every purchase supports the mission.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EBOOKS.map(book => (
            <div key={book.id} className="bg-coal-800 border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center">
              <img src={book.cover} alt={book.title} className="w-28 mb-5 rounded-md shadow-lg" />
              <h3 className="font-serif text-lg text-white mb-1">{book.title}</h3>
              <p className="text-white/40 font-sans text-xs leading-relaxed mb-4">{book.subtitle}</p>
              <div className="mt-auto w-full">
                <p className="text-white/60 font-sans text-sm mb-3">${book.price.toFixed(2)}</p>
                <button
                  onClick={() => handleBuy(book.id)}
                  disabled={loading === book.id}
                  className="w-full flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-400 disabled:opacity-50 text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
                >
                  {loading === book.id
                    ? <><Loader size={14} className="animate-spin" /> Processing…</>
                    : <><BookOpen size={14} /> Buy eBook</>
                  }
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
