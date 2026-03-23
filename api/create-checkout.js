import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const BOOKS = {
  'when-the-grace-lifts': {
    name: 'When the Grace Lifts',
    description: 'Finding Faithfulness in the In-Between — eBook',
    price: 999,
  },
  'texting-with-god': {
    name: 'Texting With God',
    description: 'The story of how one man learned to hear God\'s voice — eBook',
    price: 999,
  },
  'weight-of-yes': {
    name: 'The Weight of Yes',
    description: 'eBook by Michael Amstutz-Washburn',
    price: 999,
  },
  'after-the-breakthrough': {
    name: 'After the Breakthrough',
    description: 'eBook by Michael Amstutz-Washburn',
    price: 999,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { bookId } = req.body
  const book = BOOKS[bookId]
  if (!book) return res.status(400).json({ error: 'Invalid book' })

  const origin = req.headers.origin || 'https://amburnministries.com'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: book.name,
          description: book.description,
        },
        unit_amount: book.price,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}&book=${bookId}`,
    cancel_url: `${origin}/store`,
    metadata: { bookId },
  })

  res.status(200).json({ url: session.url })
}
