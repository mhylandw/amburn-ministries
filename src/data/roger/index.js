/**
 * Roger Knowledge Base — Unified Index & Utilities
 *
 * Single entry point for Roger's internal knowledge base.
 * Mirrors the structure of src/data/pip/index.js.
 *
 * Roger is a spiritual discernment companion in the Discern app.
 * He does not give conclusions — he asks questions that help the
 * person discover what God is saying to them.
 *
 * ─── Two Modes ──────────────────────────────────────────────────────────────
 *
 * AI Mode (default):
 *   Pass `buildRogerSystemPrompt()` into the Anthropic API system prompt.
 *   Roger's responses are generated live; the knowledge base grounds him
 *   in theologically vetted, formation-oriented content.
 *
 * Offline Mode:
 *   Use `getOfflinePrompt()` to show ordered, pre-written Socratic prompts.
 *   Roger cycles through them when the user needs a next question.
 *   No API call required.
 */

import { discernment } from './discernment.js'
import { prayer } from './prayer.js'
import { scripture } from './scripture.js'
import { identity } from './identity.js'
import { spiritualHealth } from './spiritual-health.js'
import { rhythms } from './rhythms.js'

// ─── Unified Knowledge Base ───────────────────────────────────────────────

export const knowledgeBase = {
  discernment,
  prayer,
  scripture,
  identity,
  'spiritual-health': spiritualHealth,
  rhythms,
}

// Life stage band keys
const LIFE_STAGE_BANDS = ['new', 'growing', 'rooted', 'leading']

// Map a described stage to a band key
export function stageToBand(stage) {
  if (!stage) return 'growing'
  const s = stage.toLowerCase()
  if (s === 'new' || s === 'seeker' || s === 'exploring') return 'new'
  if (s === 'growing' || s === 'learning') return 'growing'
  if (s === 'rooted' || s === 'mature') return 'rooted'
  if (s === 'leading' || s === 'leader' || s === 'director') return 'leading'
  return 'growing'
}

// ─── Topic Lookup by Keyword ──────────────────────────────────────────────

function scoreTopic(topic, query) {
  const q = query.toLowerCase()
  const words = q.split(/\s+/).filter(Boolean)
  let score = 0

  if (topic.title.toLowerCase().includes(q)) score += 10

  for (const word of words) {
    for (const kw of (topic.keywords || [])) {
      if (kw.toLowerCase().includes(word)) score += 3
      if (word.includes(kw.toLowerCase())) score += 2
    }
    for (const v of (topic.vocabulary || [])) {
      if (v.toLowerCase().includes(word)) score += 1
    }
  }

  return score
}

/**
 * Find the most relevant topics given a user's question.
 *
 * @param {string} subject    — 'discernment' | 'prayer' | 'scripture' | 'identity' | 'spiritual-health' | 'rhythms'
 * @param {string} stageBand  — 'new' | 'growing' | 'rooted' | 'leading'
 * @param {string} query      — the user's raw question text
 * @param {number} maxResults — how many topics to return (default 3)
 * @returns {Array}
 */
export function findTopicsByKeyword(subject, stageBand, query, maxResults = 3) {
  const subjectData = knowledgeBase[subject]
  if (!subjectData) return []

  const band = subjectData.bands[stageBand]
  if (!band) return []

  const scored = band.topics.map(topic => ({
    topic,
    score: scoreTopic(topic, query),
  }))

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ topic }) => topic)
}

// ─── System Prompt Context Builder ───────────────────────────────────────

/**
 * Build the knowledge-base section for Roger's AI system prompt.
 *
 * @param {string} subject   — subject key
 * @param {string} stageBand — life stage band key
 * @param {string} topicId   — specific topic (optional; if omitted, injects full band)
 * @returns {string}         — plain-text block to append to the system prompt
 */
export function buildSystemPromptContext(subject, stageBand, topicId = null) {
  const subjectData = knowledgeBase[subject]
  if (!subjectData) return ''

  const band = subjectData.bands[stageBand]
  if (!band) return ''

  const topics = topicId
    ? band.topics.filter(t => t.id === topicId)
    : band.topics

  if (!topics.length) return ''

  const lines = [
    `## Roger Knowledge Base — ${subjectData.label} (${band.label})`,
    '',
    `Context: ${band.approach}`,
    '',
    'Use the concepts, vocabulary, and guiding questions below to inform your Socratic responses.',
    'NEVER state these concepts as conclusions — use them to craft questions that guide the person to discover them.',
    '',
  ]

  for (const topic of topics) {
    lines.push(`### ${topic.title}`)

    lines.push('\n**Core concepts to guide toward:**')
    for (const concept of topic.concepts) {
      lines.push(`- ${concept}`)
    }

    lines.push('\n**Key vocabulary (ask about, don\'t lecture):**')
    lines.push(topic.vocabulary.join(', '))

    lines.push('\n**Suggested guiding questions (adapt to context):**')
    for (const prompt of topic.pipPrompts) {
      lines.push(`- ${prompt}`)
    }

    if (topic.misconceptions?.length) {
      lines.push('\n**Common misunderstandings to gently surface:**')
      for (const m of topic.misconceptions) {
        lines.push(`- ${m}`)
      }
    }

    lines.push('')
  }

  return lines.join('\n')
}

// ─── Offline Prompt Mode ──────────────────────────────────────────────────

/**
 * Returns the next guiding prompt for the offline (non-AI) experience.
 *
 * @param {string} subject   — subject key
 * @param {string} stageBand — life stage band key
 * @param {string} topicId   — specific topic id
 * @param {number} hintIndex — which prompt to return (0-based)
 * @returns {{ hint: string, hasMore: boolean, hintIndex: number, total: number } | null}
 */
export function getOfflinePrompt(subject, stageBand, topicId, hintIndex = 0) {
  const subjectData = knowledgeBase[subject]
  if (!subjectData) return null

  const band = subjectData.bands[stageBand]
  if (!band) return null

  const topic = band.topics.find(t => t.id === topicId)
  if (!topic) return null

  const hints = topic.hints?.length ? topic.hints : topic.pipPrompts
  if (!hints.length) return null

  const safeIndex = Math.min(hintIndex, hints.length - 1)
  return {
    hint: hints[safeIndex],
    hasMore: safeIndex < hints.length - 1,
    hintIndex: safeIndex,
    total: hints.length,
  }
}

/**
 * Get all prompts for a topic — used to pre-load an offline session.
 */
export function getAllPrompts(subject, stageBand, topicId) {
  const allPrompts = []
  let index = 0
  let result = getOfflinePrompt(subject, stageBand, topicId, index)

  while (result) {
    allPrompts.push(result.hint)
    if (!result.hasMore) break
    index++
    result = getOfflinePrompt(subject, stageBand, topicId, index)
  }

  return allPrompts
}

// ─── Roger Prompt Builder ────────────────────────────────────────────────

/**
 * Build Roger's full system prompt.
 *
 * @param {object} config
 *   @param {string} config.userName      — user's name
 *   @param {string} config.stage         — life stage ('new' | 'growing' | 'rooted' | 'leading')
 *   @param {string} config.subject       — subject key
 *   @param {string} config.topicId       — specific topic (optional)
 *   @param {string} config.sessionNotes  — any user or parent notes
 * @returns {string} — full system prompt
 */
export function buildRogerSystemPrompt({ userName, stage, subject, topicId, sessionNotes = '' }) {
  const stageBand = stageToBand(stage)
  const subjectData = knowledgeBase[subject]
  const subjectLabel = subjectData?.label || subject
  const knowledgeContext = buildSystemPromptContext(subject, stageBand, topicId)

  const toneGuidance = {
    new:     'Simple, warm, and concrete. No jargon. Meet the person where they are with no judgment. Celebrate honest questions over polished answers.',
    growing: 'Encouraging and instructive. Introduce vocabulary gently. Connect spiritual concepts to daily experience. Build confidence.',
    rooted:  'Collaborative and deepening. Engage with the interior life. Acknowledge complexity and paradox. Treat as a mature conversation partner.',
    leading: 'Near-peer. Engage with the weight of spiritual leadership. Ask the harder questions about interior life, sustainability, and soul care.',
  }[stageBand] || ''

  return `You are Roger — a warm, honest spiritual companion and discernment guide in the Discern app.

## Your Identity
You are Roger. A steady presence for someone's daily walk with God.
You are not a pastor, not a theologian performing expertise, and not a spiritual problem-solver.
You are a companion who asks the right question at the right moment and creates space for God to speak.
Your whole approach is built around one conviction: God is already speaking — your job is to help the person hear.

## The Person
- Name: ${userName}
- Life stage: ${stage || 'not specified'}
- Topic area today: ${subjectLabel}
- Tone guidance: ${toneGuidance}
${sessionNotes ? `- Notes: ${sessionNotes}` : ''}

## Roger's Absolute Rules
1. NEVER give a spiritual conclusion the person should reach themselves. Always respond with a guiding question.
2. NEVER offer theological certainty about something the person is meant to discover in their own walk with God.
3. If someone is in genuine crisis (danger of harm to self or others), pause Roger's approach and direct them to human help immediately.
4. NEVER use shame, religiosity, or spiritual pressure. Warmth is the whole tone.
5. NEVER tell someone what God is saying to them. Help them hear for themselves.
6. If the person goes off-topic, engage warmly for one exchange, then gently return.
7. Use ${userName}'s name occasionally — it builds presence.
8. Celebrate honesty, questions, and partial movement — not just arrival.
9. If the topic is outside Roger's knowledge base, say so honestly and ask a question that opens the space anyway.
10. Keep responses concise. One good question is better than three mediocre ones.

## Roger's Guiding Question Strategies
- Reflect back: "What do you already sense God saying about this?"
- Go smaller: "Let's just hold one part of this — what does [word or phrase] mean to you personally?"
- Use their own language: "You used the word [word] — say more about that."
- Name what's present: "There's something underneath that feels important — what is it?"
- Create space: "If you were to sit quietly with that for a moment — what surfaces?"

## Roger's Encouragement Language
- "That's a question a lot of people are afraid to ask. I'm glad you're asking it."
- "You're already closer to hearing clearly than you think."
- "The fact that you're bringing this here is itself a form of prayer."
- "That's not a small thing you just named."

---

${knowledgeContext}`
}

// ─── Named exports for convenience ───────────────────────────────────────

export { discernment, prayer, scripture, identity, spiritualHealth, rhythms }
