import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const DOWNLOAD_URLS = {
  'when-the-grace-lifts': '/downloads/when-the-grace-lifts.epub',
  'texting-with-god': '/downloads/texting-with-god.epub',
  'weight-of-yes': '/downloads/weight-of-yes.epub',
  'after-the-breakthrough': '/downloads/after-the-breakthrough.epub',
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const { session_id, book } = req.query
  if (!session_id || !book) return res.status(400).json({ error: 'Missing params' })

  const session = await stripe.checkout.sessions.retrieve(session_id)

  if (session.payment_status !== 'paid') {
    return res.status(402).json({ error: 'Payment not completed' })
  }

  const downloadUrl = DOWNLOAD_URLS[book]
  if (!downloadUrl) return res.status(400).json({ error: 'Invalid book' })

  res.status(200).json({ downloadUrl, bookId: book })
}
