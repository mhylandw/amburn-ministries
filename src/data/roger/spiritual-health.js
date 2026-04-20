/**
 * Roger Knowledge Base — Spiritual Health & Emotional Wellbeing
 *
 * Covers the intersection of emotional and spiritual health — naming feelings,
 * processing grief, anger, anxiety, and joy in the context of faith.
 * Life-stage banded.
 */

export const spiritualHealth = {
  label: 'Spiritual & Emotional Health',
  description: 'Naming feelings, processing grief and anxiety, and integrating emotional life with faith.',

  bands: {
    new: {
      label: 'Naming What\'s Real',
      approach: 'Create permission to bring the full emotional life into the spiritual space. No feeling is too dark, too small, or too messy for God.',

      topics: [
        {
          id: 'emotional-checkin',
          title: 'Naming How You\'re Actually Feeling',
          keywords: ['feel', 'emotion', 'name', 'what', 'okay', 'not okay', 'numb', 'anxious', 'sad', 'angry'],
          concepts: [
            'God meets us where we actually are, not where we wish we were',
            'Naming an emotion is the first step toward bringing it to God',
            'Spiritual bypassing: using spiritual language to avoid honest emotional acknowledgment',
            'The Psalms model full emotional honesty — anger, grief, fear, and joy are all present',
          ],
          vocabulary: ['emotional honesty', 'naming', 'spiritual bypassing', 'lament', 'examen'],
          pipPrompts: [
            'If you set aside how you think you should feel — what is actually happening inside you right now?',
            'Is there an emotion that feels "un-Christian" to acknowledge? What is it?',
            'When you bring what you\'re really feeling to God — what do you imagine God does with it?',
          ],
          hints: [
            'The Psalms are 150 chapters of emotional honesty. Start with Psalm 22 — Jesus prayed it from the cross.',
            '"Numb" is also an emotion. It often means there\'s something underneath that hasn\'t been named yet.',
            'Naming it doesn\'t mean you\'re controlled by it. It means you\'re honest about it.',
          ],
        },
        {
          id: 'anxiety-and-faith',
          title: 'Anxiety and Faith — Can They Coexist?',
          keywords: ['anxiety', 'worry', 'fear', 'anxious', 'nervous', 'afraid', 'peace', 'stress'],
          concepts: [
            '"Do not be anxious" is an invitation to bring anxiety to God, not a command to feel no anxiety',
            'Anxiety is a signal that something matters to you — not evidence of weak faith',
            'The peace of God "surpasses understanding" — it is not the absence of difficulty, but a presence in it',
            'Practical: breathing, grounding, naming, praying — all are valid responses to anxiety',
          ],
          vocabulary: ['anxiety', 'peace', 'worry', 'cast your cares', 'shalom', 'grounding'],
          pipPrompts: [
            'What is underneath the anxiety — what specifically are you afraid of?',
            'Has naming the fear ever made it smaller? What happened?',
            'What does "the peace of God that surpasses understanding" look like in your life, if it\'s present at all?',
          ],
          hints: [
            'Philippians 4:6-7 is not a command to stop feeling anxious. It\'s an instruction for what to do with it: tell God.',
            'Anxiety often shrinks when it\'s named and spoken aloud — even just to God in prayer.',
            '"Cast all your anxiety on him because he cares for you." He cares about what you\'re anxious about.',
          ],
        },
      ],
    },

    growing: {
      label: 'Integrating Emotion and Spirit',
      approach: 'Help them understand that emotional health is spiritual health. Introduce the examen, emotional intelligence, and processing grief.',

      topics: [
        {
          id: 'the-examen',
          title: 'The Daily Examen — Finding God in Your Day',
          keywords: ['examen', 'review', 'reflect', 'end of day', 'evening', 'presence', 'gratitude'],
          concepts: [
            'The Examen (Ignatius): a daily review of where you felt God\'s presence and absence',
            'Five movements: gratitude, review, noticing, choosing, forward',
            'Consolation and desolation show up in daily emotion — the Examen trains you to notice',
            'The Examen is not self-critique — it is a loving review with God, not a performance audit',
          ],
          vocabulary: ['examen', 'consolation', 'desolation', 'presence', 'awareness', 'gratitude'],
          pipPrompts: [
            'Today — where did you feel most alive? Where did you feel most drained?',
            'Looking back at today, where do you sense God was trying to get your attention?',
            'Is there anything from today you want to hand over before you sleep?',
          ],
          hints: [
            'Examen is not about guilt. It\'s about noticing. "Where was God? Where did I miss him?"',
            'Do it in five minutes. Gratitude → Review → Notice → Choose → Forward.',
            'Over time, the Examen builds a map of where God tends to meet you specifically.',
          ],
        },
        {
          id: 'grief-and-god',
          title: 'Grief — Honoring Loss Without Getting Stuck',
          keywords: ['grief', 'loss', 'death', 'mourning', 'sad', 'bereft', 'gone', 'hurt'],
          concepts: [
            '"Blessed are those who mourn, for they shall be comforted" — grief has a promised companion',
            'Grief is not a faith problem — it is a love problem. You grieve because you loved.',
            'Rushing grief — spiritual or otherwise — does not heal it; it displaces it',
            'Jesus wept at Lazarus\' tomb even knowing what was about to happen. Grief is not faithlessness.',
          ],
          vocabulary: ['grief', 'mourning', 'lament', 'comfort', 'resurrection hope', 'loss'],
          pipPrompts: [
            'What are you grieving right now — and have you let yourself actually feel it?',
            'Is anyone sitting with you in this grief, or are you carrying it alone?',
            'Where do you find yourself wanting to rush past the grief rather than move through it?',
          ],
          hints: [
            'Jesus wept. That is a complete theological argument for allowing yourself to grieve.',
            'Grief doesn\'t have a schedule. "Should be over it by now" is not a biblical concept.',
            'Lament in community is powerful. Is there one person who could hold this with you?',
          ],
        },
      ],
    },

    rooted: {
      label: 'Mature Emotional Life',
      approach: 'Engage with the long work of emotional and spiritual integration — shadow work, patterns, and sustainable wellbeing.',

      topics: [
        {
          id: 'shadow-work',
          title: 'The Shadow — What We Haven\'t Looked At',
          keywords: ['shadow', 'patterns', 'unconscious', 'repeat', 'trigger', 'blind spot', 'reaction'],
          concepts: [
            'The "shadow" (Jung): the unacknowledged parts of ourselves — both negative and positive',
            'What we refuse to integrate in ourselves, we project onto others',
            'Triggers are invitations — they reveal something unhealed beneath the reaction',
            'Spiritual maturity includes honest self-knowledge, not just theological knowledge',
          ],
          vocabulary: ['shadow', 'projection', 'integration', 'trigger', 'self-knowledge', 'blind spot'],
          pipPrompts: [
            'Where do you have the strongest emotional reactions to other people? What does that reveal?',
            'Is there a pattern in your relationships that keeps repeating? What is the common factor?',
            'What is the version of you that you most hide from others? What are you afraid they would see?',
          ],
          hints: [
            'What irritates you most in others is often what you most disown in yourself. Worth sitting with.',
            'A trigger is a teacher. Ask: "Why did this hit me so hard?" rather than "Why did they do that?"',
            'Shadow work is not self-condemnation — it\'s honest curiosity about the self God loves anyway.',
          ],
        },
        {
          id: 'sustainable-spiritual-health',
          title: 'Sustainable Spiritual Health Over a Lifetime',
          keywords: ['burnout', 'sustainable', 'long term', 'rhythms', 'sabbath', 'rest', 'seasons'],
          concepts: [
            'Spiritual health requires sustainable rhythms — sprint-and-crash cycles produce neither formation nor service',
            'Sabbath, retreat, community, and honest self-assessment are protective disciplines',
            'Seasons of flourishing and seasons of dormancy are both natural — neither is permanent',
            'The question is not "how do I stay in peak spiritual condition" but "how do I stay connected over decades"',
          ],
          vocabulary: ['sustainability', 'rhythms', 'Sabbath', 'retreat', 'seasons', 'dormancy', 'flourishing'],
          pipPrompts: [
            'Looking at the last year — what patterns of depletion and renewal are you noticing?',
            'Is there a protective practice you know you need but keep not making time for?',
            'What does a sustainable spiritual life look like for your actual personality and circumstances?',
          ],
          hints: [
            'You cannot give from empty. Sustainability is not selfish — it\'s stewarding what you\'ve been given.',
            'Build retreat into the calendar before exhaustion demands it.',
            'The goal is faithfulness over decades, not intensity over months.',
          ],
        },
      ],
    },

    leading: {
      label: 'Health for the Long Haul',
      approach: 'Address the specific health challenges of spiritual leaders — isolation, compassion fatigue, boundaries, and maintaining a genuine interior life.',

      topics: [
        {
          id: 'compassion-fatigue',
          title: 'Compassion Fatigue in Ministry',
          keywords: ['burnout', 'compassion fatigue', 'depleted', 'nothing left', 'tired of caring', 'ministry'],
          concepts: [
            'Compassion fatigue: secondary traumatic stress from sustained exposure to others\' suffering',
            'Symptoms: numbness, cynicism, difficulty feeling empathy, physical exhaustion',
            'Compassion fatigue is not a character failure — it is a physiological and spiritual reality',
            'Recovery requires rest, supervision, community, and time away from the caregiving role',
          ],
          vocabulary: ['compassion fatigue', 'secondary trauma', 'burnout', 'supervision', 'sabbatical', 'renewal'],
          pipPrompts: [
            'When did you last feel genuinely moved by someone\'s story — not just professionally engaged with it?',
            'Is there a numbness in your ministry right now? What has it replaced?',
            'Who cares for you the way you care for others?',
          ],
          hints: [
            'Compassion fatigue is a signal that you\'ve been giving without receiving. The direction needs to reverse temporarily.',
            'Supervision — someone who holds you and your work — is not a luxury for spiritual leaders. It\'s protective.',
            'Even Jesus withdrew. "He went to a solitary place." That was pastoral health, not avoidance.',
          ],
        },
      ],
    },
  },
}
