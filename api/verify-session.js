import Stripe from 'stripe'

const BOOK_FILES = {
  'when-the-grace-lifts': '/downloads/when-the-grace-lifts.epub',
  'texting-with-god': '/downloads/texting-with-god.epub',
  'weight-of-yes': '/downloads/weight-of-yes.epub',
  'after-the-breakthrough': '/downloads/after-the-breakthrough.epub',
}

export default async function handler(req, res) {
  const { session_id, book } = req.query

  if (!session_id || !book) {
    return res.status(400).json({ error: 'Missing session_id or book' })
  }

  if (!BOOK_FILES[book]) {
    return res.status(400).json({ error: 'Unknown book' })
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const session = await stripe.checkout.sessions.retrieve(session_id)

    if (session.payment_status !== 'paid') {
      return res.status(402).json({ error: 'Payment not completed' })
    }

    return res.status(200).json({ downloadUrl: BOOK_FILES[book] })
  } catch (err) {
    console.error('Stripe verify error:', err)
    return res.status(500).json({ error: 'Verification failed' })
  }
}
