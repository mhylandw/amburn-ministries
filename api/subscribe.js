export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body
  if (!email) {
    return res.status(400).json({ error: 'Email required' })
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
        }),
      }
    )

    if (response.ok) {
      return res.status(200).json({ success: true })
    } else {
      const err = await response.json()
      return res.status(500).json({ error: err })
    }
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}
