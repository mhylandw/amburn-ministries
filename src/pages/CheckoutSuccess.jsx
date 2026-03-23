import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Download, CheckCircle, ArrowRight, Loader } from 'lucide-react'

export default function CheckoutSuccess() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState('loading')
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [bookName, setBookName] = useState('')

  const sessionId = params.get('session_id')
  const book = params.get('book')

  useEffect(() => {
    if (!sessionId || !book) { setStatus('error'); return }

    fetch(`/api/verify-session?session_id=${sessionId}&book=${book}`)
      .then(r => r.json())
      .then(data => {
        if (data.downloadUrl) {
          setDownloadUrl(data.downloadUrl)
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }, [sessionId, book])

  const BOOK_NAMES = {
    'when-the-grace-lifts': 'When the Grace Lifts',
    'texting-with-god': 'Texting With God',
    'weight-of-yes': 'The Weight of Yes',
    'after-the-breakthrough': 'After the Breakthrough',
  }

  return (
    <div className="min-h-screen bg-coal-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-4">
            <Loader size={32} className="animate-spin text-flame-500" />
            <p className="text-white/50 font-sans">Confirming your purchase…</p>
          </div>
        )}

        {status === 'success' && (
          <>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
              <CheckCircle className="text-green-400" size={28} />
            </div>
            <h1 className="font-serif text-3xl text-white mb-2">Thank you!</h1>
            <p className="text-white/50 font-sans mb-8">
              Your purchase of <em className="text-white/80">{BOOK_NAMES[book]}</em> is confirmed. Download your eBook below.
            </p>
            <a
              href={downloadUrl}
              download
              className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold px-8 py-3 rounded-full transition-colors mb-6"
            >
              <Download size={16} /> Download eBook
            </a>
            <p className="text-white/30 font-sans text-xs mb-8">
              Save this page or your confirmation email to re-download.
            </p>
            <Link to="/store" className="text-flame-400 hover:text-flame-300 font-sans text-sm flex items-center justify-center gap-1 transition-colors">
              Browse more books <ArrowRight size={14} />
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <h1 className="font-serif text-3xl text-white mb-4">Something went wrong</h1>
            <p className="text-white/50 font-sans mb-8">
              We couldn't verify your purchase. Please contact us at admin@amburnministries.com
            </p>
            <Link to="/store" className="text-flame-400 font-sans text-sm">
              Return to Store
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
