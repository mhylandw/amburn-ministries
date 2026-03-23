import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { amount } = req.body
  const cents = Math.round(parseFloat(amount) * 100)

  if (!cents || cents < 100) return res.status(400).json({ error: 'Minimum donation is $1' })

  const origin = req.headers.origin || 'https://amburnministries.com'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Donation to Amburn Ministries',
          description: 'Thank you for supporting the mission to Heal · Deliver · Restore',
        },
        unit_amount: cents,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${origin}/donate?success=true`,
    cancel_url: `${origin}/donate`,
  })

  res.status(200).json({ url: session.url })
}
