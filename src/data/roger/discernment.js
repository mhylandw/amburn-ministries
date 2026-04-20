/**
 * Roger Knowledge Base — Discernment
 *
 * Covers the practices and theology of hearing God, testing impressions,
 * and making Spirit-led decisions. Life-stage banded.
 *
 * Life stage bands:
 *   new     — new believer or seeker (exploring faith)
 *   growing — committed, early formation (1–3 years of intentional practice)
 *   rooted  — mature believer (established spiritual rhythms)
 *   leading — spiritual leader, director, or mentor
 */

export const discernment = {
  label: 'Discernment',
  description: 'Hearing God, testing impressions, and making Spirit-led decisions.',

  bands: {
    // ── New Believer / Seeker ──────────────────────────────────────────────
    new: {
      label: 'New to Listening',
      approach: 'Simple, concrete, reassuring. Focus on the idea that God speaks and wants to be heard. No jargon. Meet the person where they are.',

      topics: [
        {
          id: 'can-god-speak',
          title: 'Can God Really Speak to Me?',
          keywords: ['hear', 'speak', 'voice', 'talk', 'listen', 'does god'],
          concepts: [
            'God is personal and relational, not distant',
            'God speaks in many ways: scripture, peace, impressions, people, circumstances',
            'Hearing God is learned, not innate — it takes practice and patience',
            'The starting posture is availability, not worthiness',
          ],
          vocabulary: ['impression', 'still small voice', 'peace', 'prompting', 'scripture'],
          pipPrompts: [
            'What made you wonder whether God was trying to say something to you?',
            'When you\'ve felt a strong pull toward something, how did it feel — heavy or light?',
            'What would it mean to you if God really could speak to you personally?',
          ],
          hints: [
            'God has always been a communicating God — the whole Bible is a record of that.',
            'Start simple: quiet your mind and notice what thoughts or images rise on their own.',
            'Peace is often a language God uses. Where do you feel peace?',
          ],
        },
        {
          id: 'first-steps-listening',
          title: 'First Steps in Listening Prayer',
          keywords: ['how', 'pray', 'listen', 'start', 'begin', 'quiet', 'silent'],
          concepts: [
            'Listening prayer is distinct from asking prayer — it creates space for God to speak',
            'Silence is not emptiness; it is receptivity',
            'A simple posture: "Lord, I\'m here. I\'m listening."',
            'Write down what comes — images, words, feelings — without evaluating immediately',
          ],
          vocabulary: ['listening prayer', 'receptivity', 'journaling', 'impression', 'contemplation'],
          pipPrompts: [
            'What happens inside you when you try to sit in silence?',
            'Have you ever had a thought during prayer that felt different from your normal thoughts? What was it like?',
            'What gets in the way of being still for you?',
          ],
          hints: [
            'Try two minutes. Just two. Close your eyes, breathe, and ask: "Lord, what do you want me to know today?"',
            'Write down whatever surfaces without editing it — you can test it afterward.',
            'It\'s okay if it feels like nothing is happening. Showing up is the practice.',
          ],
        },
      ],
    },

    // ── Growing Believer ───────────────────────────────────────────────────
    growing: {
      label: 'Learning to Hear',
      approach: 'Encouraging and instructive. Introduce the vocabulary and framework of discernment. Help them distinguish their voice, God\'s voice, and other voices.',

      topics: [
        {
          id: 'three-voices',
          title: 'Three Voices: God, Self, and the Adversary',
          keywords: ['voice', 'thoughts', 'myself', 'enemy', 'how know', 'distinguish', 'tell'],
          concepts: [
            'Not every impression is from God — self, culture, and the adversary also speak',
            'God\'s voice is typically peaceful, consistent with scripture, and builds rather than tears down',
            'Self-generated thoughts often center on comfort, reputation, or fear',
            'The adversary\'s suggestions tend toward accusation, urgency, shame, or confusion',
          ],
          vocabulary: ['discernment', 'interior movements', 'consolation', 'desolation', 'accusation', 'conviction'],
          pipPrompts: [
            'When you get an impression, where do you feel it — in your head, chest, gut?',
            'Does the thought you\'re testing build your faith or chip away at it?',
            'Is there urgency attached — a sense that you must decide right now?',
            'What would the people who know you best say about this impression?',
          ],
          hints: [
            'God rarely rushes. If something feels frantic or urgent, slow down — that\'s a signal to test more carefully.',
            'Does the impression line up with what scripture says about God\'s character?',
            'The adversary accuses ("you\'re worthless"). The Spirit convicts ("this specific action needs to change"). Feel the difference.',
          ],
          misconceptions: [
            'Thinking a strong emotion means God is speaking',
            'Assuming the first thought that comes is always God',
            'Confusing personal desire with divine direction',
          ],
        },
        {
          id: 'testing-impressions',
          title: 'How to Test an Impression',
          keywords: ['test', 'confirm', 'sure', 'know', 'right', 'wrong', 'check'],
          concepts: [
            'Impressions should be tested, not immediately acted on or immediately dismissed',
            'Five tests: scripture, peace, counsel, fruit, time',
            'Scripture never contradicts what God says; it\'s the foundation of all testing',
            'Trusted community is a vital check on personal impression',
          ],
          vocabulary: ['testing', 'confirmation', 'witness', 'counsel', 'fruit', 'bearing witness'],
          pipPrompts: [
            'What scripture comes to mind that speaks to this impression?',
            'Have you shared this with anyone you trust spiritually — what did they sense?',
            'If you acted on this, what fruit would it likely produce in your life and others\' lives?',
            'How long has this impression been present? Has it gotten stronger or faded?',
          ],
          hints: [
            'Write the impression down and date it. Then pray over it for a week before acting.',
            'What does scripture say about the subject of this impression? That\'s your first filter.',
            'Ask one trusted person to pray about it separately and report what they sense.',
          ],
        },
      ],
    },

    // ── Rooted Believer ────────────────────────────────────────────────────
    rooted: {
      label: 'Walking in Discernment',
      approach: 'Collaborative and deepening. Engage with the interior life, seasons of dryness, and the discipline of long-term discernment. Treat the person as a mature conversation partner.',

      topics: [
        {
          id: 'consolation-desolation',
          title: 'Consolation & Desolation (Ignatian Framework)',
          keywords: ['consolation', 'desolation', 'ignatius', 'dry', 'season', 'absence', 'felt', 'not feel'],
          concepts: [
            'Consolation: movements toward God — faith, hope, love, peace, tears of joy',
            'Desolation: movements away — darkness, confusion, restlessness, loss of hope',
            'Desolation is not absence of God — it is a season to be navigated, not escaped',
            'In desolation: don\'t make big decisions; hold previous resolutions; be honest with God',
          ],
          vocabulary: ['consolation', 'desolation', 'interior movements', 'spiritual direction', 'examen', 'affective prayer'],
          pipPrompts: [
            'Where in your life right now are you experiencing movement toward God vs. away from God?',
            'In this dry season — what are you holding onto that you received in a fuller season?',
            'What does desolation feel like in your body? Where do you feel it?',
            'Have you told God honestly what this season feels like?',
          ],
          hints: [
            'Ignatius: make no permanent decisions in desolation. Wait for the weather to change.',
            'What were the last clear things God said to you in consolation? Those are still true.',
            'Desolation is often the place where roots go deeper, even when it feels like dying.',
          ],
        },
        {
          id: 'big-decisions',
          title: 'Discerning Big Life Decisions',
          keywords: ['decision', 'job', 'move', 'marry', 'leave', 'stay', 'choice', 'direction'],
          concepts: [
            'Big decisions deserve unhurried discernment — weeks or months, not hours',
            'Ignatius\' three times of election: clarity given directly, clarity through consolation/desolation, clarity through reason alone',
            'Imagine yourself at the end of your life looking back — what choice would you wish you\'d made?',
            'Both options may be good; discernment is about which is better for God\'s purposes',
          ],
          vocabulary: ['election', 'indifference', 'availability', 'both-and', 'freedom'],
          pipPrompts: [
            'Can you hold both options as genuinely open right now — not favoring either?',
            'If you imagine saying yes — where does your body and spirit go? What about no?',
            'What do you most fear about each option? Is fear informing more than faith here?',
            'What would you advise a trusted friend in exactly your situation?',
          ],
          hints: [
            'Write a letter to God explaining why you want to choose each option. Read them back.',
            'Ignatian indifference: can you genuinely say, "Lord, either way is fine — I just want your will"?',
            'Ask: which choice leaves me more available to God, not less?',
          ],
        },
      ],
    },

    // ── Spiritual Leader / Director ────────────────────────────────────────
    leading: {
      label: 'Leading Others in Discernment',
      approach: 'Peer-level. Engage with the complexity of discerning for and with others. Address the unique weight and vulnerability of spiritual leadership.',

      topics: [
        {
          id: 'directing-others',
          title: 'Accompanying Others in Discernment',
          keywords: ['direct', 'accompany', 'guide', 'help others', 'spiritual director', 'listen for someone'],
          concepts: [
            'The spiritual director or companion holds space — they do not direct; God directs',
            'Asking questions is more powerful than offering interpretation',
            'Never be more invested in the outcome than the person you\'re accompanying',
            'Sacred secrecy: what is shared in direction stays there',
          ],
          vocabulary: [
            'spiritual direction', 'accompaniment', 'holy listening', 'detachment',
            'sacred secrecy', 'manifestation of conscience',
          ],
          pipPrompts: [
            'When you sit with someone in discernment, where does your own anxiety show up?',
            'Have you found yourself already knowing the answer before the person has finished speaking?',
            'What does "staying in your lane" look like for you as a companion?',
          ],
          hints: [
            'The best question is usually the one that came to you quietly, not the one you prepared.',
            'If you feel urgency to speak — pause. That urgency is often about you, not them.',
            'Your job is to create the conditions for God to speak, not to be the voice yourself.',
          ],
        },
        {
          id: 'communal-discernment',
          title: 'Communal Discernment (Quaker & Ignatian)',
          keywords: ['group', 'community', 'together', 'eldership', 'team', 'church', 'collective'],
          concepts: [
            'God speaks through the body, not only the individual',
            'Communal discernment requires each member to develop their own listening before contributing',
            'Clearness Committee (Quaker): a group gathered to ask questions only — no advice given',
            'Consensus in community is different from compromise — it requires every voice heard',
          ],
          vocabulary: ['clearness committee', 'gathered meeting', 'sense of the meeting', 'elder', 'corporate discernment'],
          pipPrompts: [
            'Where in your community has shared discernment produced something no individual could have arrived at alone?',
            'What role do you tend to play when a group discerns together — and is that role serving the process?',
            'How does your community handle it when someone disagrees with what seems to be the consensus?',
          ],
          hints: [
            'In Quaker clearness, the group asks only questions — they offer no solutions. Try it.',
            'Silence in a group meeting isn\'t a vacuum to fill. Let it hold weight.',
            'The most important voice in communal discernment is often the quietest one.',
          ],
        },
      ],
    },
  },
}
