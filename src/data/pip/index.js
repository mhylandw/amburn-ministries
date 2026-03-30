/**
 * Pip Knowledge Base — Unified Index & Utilities
 *
 * This module is the single entry point for all of Pip's internal knowledge.
 * It provides:
 *
 *   1. A unified `knowledgeBase` export with all subjects
 *   2. `findTopicsByKeyword(subject, gradeBand, query)` — for surfacing the
 *      most relevant topic given what a child typed
 *   3. `buildSystemPromptContext(subject, gradeBand, topicId)` — injects
 *      vetted knowledge into Pip's AI system prompt
 *   4. `getOfflineHints(subject, gradeBand, topicId)` — returns ordered hint
 *      steps for a non-AI guided experience
 *   5. `getBibleContext(topicId, gradeBand)` — specialized lookup for Bible
 *      topics, themes, and characters
 *
 * ─── Two Modes ──────────────────────────────────────────────────────────────
 *
 * AI Mode (default):
 *   Pass `buildSystemPromptContext()` output into the Anthropic API system
 *   prompt. The AI's natural language capabilities handle conversation;
 *   the knowledge base grounds it in vetted, curriculum-aligned content.
 *
 * Offline Mode (for families who prefer no AI):
 *   Use `getOfflineHints()` to show ordered, pre-written Socratic hints.
 *   Pip cycles through them when the child asks for help. No API call made.
 *   The experience is scripted but still Socratic — hints guide, not answer.
 */

import { math } from './math.js'
import { science } from './science.js'
import { history } from './history.js'
import { languageArts } from './language-arts.js'
import { geography } from './geography.js'
import { bible } from './bible.js'

// ─── Unified Knowledge Base ───────────────────────────────────────────────

export const knowledgeBase = {
  math,
  science,
  history,
  'language-arts': languageArts,
  geography,
  bible,
}

// Grade band keys in the academic subjects (Bible uses its own structure)
const GRADE_BANDS = ['k2', '35', '68', '912']

// Map child grade level (number or string) to a band key
export function gradeToBand(grade) {
  const g = parseInt(grade, 10)
  if (isNaN(g) || g <= 2) return 'k2'
  if (g <= 5) return '35'
  if (g <= 8) return '68'
  return '912'
}

// ─── Topic Lookup by Keyword ──────────────────────────────────────────────

/**
 * Score a topic against a query string.
 * Returns a score 0–N; higher = more relevant.
 */
function scoreTopic(topic, query) {
  const q = query.toLowerCase()
  const words = q.split(/\s+/).filter(Boolean)
  let score = 0

  // Direct title match is strongest signal
  if (topic.title.toLowerCase().includes(q)) score += 10

  // Keyword matches
  for (const word of words) {
    for (const kw of (topic.keywords || [])) {
      if (kw.toLowerCase().includes(word)) score += 3
      if (word.includes(kw.toLowerCase())) score += 2
    }
    // Vocabulary matches
    for (const v of (topic.vocabulary || [])) {
      if (v.toLowerCase().includes(word)) score += 1
    }
  }

  return score
}

/**
 * Find the most relevant topics given a child's question.
 *
 * @param {string} subject    — 'math' | 'science' | 'history' | 'language-arts' | 'geography'
 * @param {string} gradeBand  — 'k2' | '35' | '68' | '912'  (or pass a grade number via gradeToBand)
 * @param {string} query      — the child's raw question text
 * @param {number} maxResults — how many topics to return (default 3)
 * @returns {Array}           — topics sorted by relevance score, highest first
 */
export function findTopicsByKeyword(subject, gradeBand, query, maxResults = 3) {
  if (subject === 'bible') {
    return findBibleTopics(gradeBand, query, maxResults)
  }

  const subjectData = knowledgeBase[subject]
  if (!subjectData) return []

  const band = subjectData.bands[gradeBand]
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

/**
 * Bible-specific keyword search across grade band topics, themes, and characters.
 */
function findBibleTopics(gradeBand, query, maxResults) {
  const results = []

  // Search grade-band topics
  const band = bible.gradeBands[gradeBand]
  if (band) {
    for (const topic of band.topics) {
      const score = scoreTopic(topic, query)
      if (score > 0) results.push({ item: topic, score, type: 'topic' })
    }
  }

  // Search cross-cutting themes
  for (const theme of bible.themes) {
    const score = scoreTopic({ ...theme, keywords: [theme.title, theme.description] }, query)
    if (score > 0) results.push({ item: theme, score, type: 'theme' })
  }

  // Search character studies
  for (const character of bible.characters) {
    const charScore = scoreTopic({
      ...character,
      keywords: [character.title, ...character.themes],
      vocabulary: [],
    }, query)
    if (charScore > 0) results.push({ item: character, score: charScore, type: 'character' })
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ item, type }) => ({ ...item, _type: type }))
}

// ─── System Prompt Context Builder ───────────────────────────────────────

/**
 * Build the knowledge-base section for Pip's AI system prompt.
 * Injects vetted concepts, vocabulary, Socratic prompts, and misconceptions
 * so the AI stays grounded in curriculum-appropriate content.
 *
 * @param {string} subject   — subject key
 * @param {string} gradeBand — grade band key
 * @param {string} topicId   — specific topic to inject (optional; if omitted, injects the full band)
 * @returns {string}         — plain-text block to append to the system prompt
 */
export function buildSystemPromptContext(subject, gradeBand, topicId = null) {
  if (subject === 'bible') {
    return buildBibleSystemContext(gradeBand, topicId)
  }

  const subjectData = knowledgeBase[subject]
  if (!subjectData) return ''

  const band = subjectData.bands[gradeBand]
  if (!band) return ''

  const topics = topicId
    ? band.topics.filter(t => t.id === topicId)
    : band.topics

  if (!topics.length) return ''

  const lines = [
    `## Pip Knowledge Base — ${subjectData.label} (${band.label})`,
    '',
    'You are helping a child with the following subject material.',
    'Use the concepts, vocabulary, and guiding questions below to inform your Socratic responses.',
    'NEVER state these concepts directly — use them to craft questions that guide the child to discover them.',
    '',
  ]

  for (const topic of topics) {
    lines.push(`### ${topic.title}`)

    lines.push('\n**Core concepts to guide toward:**')
    for (const concept of topic.concepts) {
      lines.push(`- ${concept}`)
    }

    lines.push('\n**Key vocabulary (ask about these, don\'t define them):**')
    lines.push(topic.vocabulary.join(', '))

    lines.push('\n**Suggested Socratic questions (adapt to context):**')
    for (const prompt of topic.pipPrompts) {
      lines.push(`- ${prompt}`)
    }

    if (topic.misconceptions?.length) {
      lines.push('\n**Common misconceptions to gently probe (don\'t confirm them):**')
      for (const m of topic.misconceptions) {
        lines.push(`- ${m}`)
      }
    }

    lines.push('')
  }

  return lines.join('\n')
}

function buildBibleSystemContext(gradeBand, topicId) {
  const band = bible.gradeBands[gradeBand]
  const lines = [
    '## Pip Knowledge Base — Bible & Faith',
    '',
    `Grade band approach: ${band?.approach || ''}`,
    '',
    'Guide the child to discover meaning through careful reading and reflection.',
    'Hold theological tension honestly — do not resolve questions the child should wrestle with.',
    'NEVER give a theological conclusion the child should reach themselves.',
    '',
  ]

  if (band) {
    const topics = topicId
      ? band.topics.filter(t => t.id === topicId)
      : band.topics

    for (const topic of topics) {
      lines.push(`### ${topic.title}`)
      lines.push(`Key passages: ${topic.keyPassages.join(', ')}`)
      lines.push('\n**Core concepts:**')
      for (const c of topic.concepts) lines.push(`- ${c}`)
      lines.push('\n**Guiding questions:**')
      for (const p of topic.pipPrompts) lines.push(`- ${p}`)
      lines.push('')
    }
  }

  lines.push('### Cross-Cutting Themes')
  for (const theme of bible.themes) {
    lines.push(`- **${theme.title}**: ${theme.description}`)
  }

  return lines.join('\n')
}

// ─── Offline Hint Mode ────────────────────────────────────────────────────

/**
 * Returns ordered hint steps for the offline (non-AI) experience.
 * Hints are designed to be shown one at a time — Pip reveals the next only
 * when the child asks for more help.
 *
 * @param {string} subject   — subject key
 * @param {string} gradeBand — grade band key
 * @param {string} topicId   — specific topic id
 * @param {number} hintIndex — which hint to return (0-based)
 * @returns {{ hint: string, hasMore: boolean, total: number } | null}
 */
export function getOfflineHint(subject, gradeBand, topicId, hintIndex = 0) {
  let hints = []

  if (subject === 'bible') {
    const band = bible.gradeBands[gradeBand]
    if (!band) return null
    const topic = band.topics.find(t => t.id === topicId)
    if (!topic) {
      // Try themes and characters
      const theme = bible.themes.find(t => t.id === topicId)
      if (theme) hints = theme.pipPrompts
      const character = bible.characters.find(c => c.id === topicId)
      if (character) hints = character.pipPrompts
    } else {
      hints = topic.hints?.length ? topic.hints : topic.pipPrompts
    }
  } else {
    const subjectData = knowledgeBase[subject]
    if (!subjectData) return null
    const band = subjectData.bands[gradeBand]
    if (!band) return null
    const topic = band.topics.find(t => t.id === topicId)
    if (!topic) return null
    hints = topic.hints?.length ? topic.hints : topic.pipPrompts
  }

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
 * Get all hints for a topic — used to pre-load the offline session.
 */
export function getAllHints(subject, gradeBand, topicId) {
  const allHints = []
  let index = 0
  let result = getOfflineHint(subject, gradeBand, topicId, index)

  while (result) {
    allHints.push(result.hint)
    if (!result.hasMore) break
    index++
    result = getOfflineHint(subject, gradeBand, topicId, index)
  }

  return allHints
}

// ─── Pip Prompt Builder (for use in both modes) ──────────────────────────

/**
 * Build Pip's full system prompt, combining:
 *   - Pip's core personality rules (Socratic method, no direct answers, etc.)
 *   - Grade-band tone guidance
 *   - Subject-specific knowledge context from the internal database
 *
 * @param {object} config
 *   @param {string} config.childName    — child's name
 *   @param {string} config.grade        — grade level (number string, e.g., "4")
 *   @param {string} config.subject      — subject key
 *   @param {string} config.topicId      — specific topic (optional)
 *   @param {string} config.sessionNotes — any parent notes about the session
 * @returns {string} — full system prompt
 */
export function buildPipSystemPrompt({ childName, grade, subject, topicId, sessionNotes = '' }) {
  const gradeBand = gradeToBand(grade)
  const subjectData = knowledgeBase[subject]
  const subjectLabel = subjectData?.label || subject
  const knowledgeContext = buildSystemPromptContext(subject, gradeBand, topicId)

  const toneGuidance = {
    k2:  'Use very simple words. Short sentences. Maximum warmth and encouragement. Celebrate every small step. Never show frustration.',
    '35':  'Use clear, friendly language. Encourage independence. Celebrate effort. Keep questions focused and not too abstract.',
    '68':  'Engage with some complexity. Acknowledge when something is genuinely hard. Light humor is fine. Be honest about ambiguity.',
    '912': 'Near-peer tone. Treat the student as a thoughtful person. Engage with real intellectual depth. Acknowledge complexity and uncertainty.',
  }[gradeBand] || ''

  return `You are Pip — a warm, curious AI study companion for children.

## Your Identity
You are Pip. Not a generic chatbot. A character who genuinely loves questions more than answers.
Your whole personality is built around the belief that discovering something yourself is better than being told.

## The Student
- Name: ${childName}
- Grade: ${grade}
- Subject today: ${subjectLabel}
- Tone guidance: ${toneGuidance}
${sessionNotes ? `- Parent notes: ${sessionNotes}` : ''}

## Pip's Absolute Rules
1. NEVER give a direct answer to a subject question. Always respond with a guiding question.
2. If asked the same question 3+ times in a row, acknowledge the frustration warmly, then try a SIMPLER entry question.
3. NEVER say "You're wrong." Say "What makes you think that?" or "Interesting — let's look at that more carefully."
4. NEVER use shame, sarcasm, or impatience.
5. NEVER provide links, external resources, or tell the child to look something up elsewhere.
6. If the child goes off-topic, engage warmly for ONE exchange, then gently redirect.
7. Use ${childName}'s name occasionally — it builds connection.
8. Celebrate effort, process, and partial answers — not just correct final answers.
9. If YOU don't know something, say so honestly and turn it into a question to explore together.
10. Keep responses concise. One good question is better than three mediocre ones.

## Pip's Guiding Question Strategies
- Reflect the question back: "What do you already know about this?"
- Break it smaller: "Let's just look at one part — what does [term] mean to you?"
- Use analogy: "This is kind of like [relatable situation] — how does that work?"
- Celebrate partial answers: "You've got part of it — what do you think comes next?"
- Redirect gently: "I love that curiosity! Let's finish this first, then we can explore that."

## Pip's Encouragement Language
- "That's a connection I haven't heard before — that's really smart thinking."
- "You figured that out in two questions. That's faster than last time."
- "You asked a better question today than you did yesterday."
- "You've got part of it — what do you think comes next?"

---

${knowledgeContext}`
}

// ─── Named exports for convenience ───────────────────────────────────────

export { math, science, history, languageArts, geography, bible }
