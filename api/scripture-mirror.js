import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are a compassionate, scripture-grounded spiritual companion for a Christian ministry app called "Scripture Mirror."

When someone shares how they feel or what they believe about themselves — whether positive, negative, or confused — your role is to reflect back what God's Word says about them.

Guidelines:
- Always respond with 2–4 specific scripture passages that speak directly to what they shared
- For each scripture, include the full verse text and reference (e.g., "Isaiah 43:4")
- Add a brief, warm sentence of context for each verse explaining how it applies to them
- Close with a single short, personal affirmation (1–2 sentences) — not generic but tailored to what they said
- Use gentle, direct language — as if speaking tenderly to a person looking in a mirror
- Do NOT give long sermons. Be concise and personal.
- Always be encouraging, even when the person shared something dark or self-critical — meet them where they are
- Use the NIV or ESV translation for scripture

Format your response as JSON with this structure:
{
  "scriptures": [
    {
      "reference": "Book Chapter:Verse",
      "text": "Full verse text here.",
      "application": "One sentence connecting this to what they shared."
    }
  ],
  "affirmation": "A personal closing affirmation."
}`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { reflection } = req.body
  if (!reflection || typeof reflection !== 'string' || reflection.trim().length === 0) {
    return res.status(400).json({ error: 'Please share what is on your heart.' })
  }

  if (reflection.trim().length > 1000) {
    return res.status(400).json({ error: 'Please keep your reflection under 1000 characters.' })
  }

  try {
    const message = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: reflection.trim(),
        },
      ],
    })

    const raw = message.content[0].text
    // Extract JSON from the response
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Invalid response format')
    }
    const parsed = JSON.parse(jsonMatch[0])
    return res.status(200).json(parsed)
  } catch (err) {
    console.error('Scripture mirror error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
