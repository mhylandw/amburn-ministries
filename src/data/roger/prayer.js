/**
 * Roger Knowledge Base — Prayer
 *
 * Covers the forms, rhythms, and depth of prayer — from first steps
 * to contemplative practice. Life-stage banded.
 */

export const prayer = {
  label: 'Prayer',
  description: 'Forms, rhythms, and depth of prayer — from first steps to contemplation.',

  bands: {
    new: {
      label: 'Starting to Pray',
      approach: 'Demystify prayer. It is conversation, not performance. Lower the bar to entry — raw, honest words are as valid as polished liturgy.',

      topics: [
        {
          id: 'prayer-basics',
          title: 'Prayer Is Just Talking to God',
          keywords: ['pray', 'how', 'what say', 'right words', 'wrong', 'start'],
          concepts: [
            'Prayer is conversation, not a ritual formula to get right',
            'God hears the heart, not the eloquence of words',
            'Honesty is more valuable than polish in prayer',
            'No prayer is too small, too strange, or too personal',
          ],
          vocabulary: ['prayer', 'petition', 'gratitude', 'confession', 'intercession'],
          pipPrompts: [
            'If prayer is just a conversation with God, what would you most want to say right now?',
            'What feels awkward or scary about praying out loud or in your own words?',
            'Is there something you\'ve wanted to bring to God but haven\'t known how to say?',
          ],
          hints: [
            'Start with what\'s true: "God, I don\'t know if you\'re listening, but I\'m here."',
            'The Psalms are full of raw, honest prayers — anger, confusion, joy, grief. God can handle all of it.',
            'You don\'t need special words. Just start talking.',
          ],
        },
        {
          id: 'lords-prayer',
          title: 'The Lord\'s Prayer as a Framework',
          keywords: ['lords prayer', 'our father', 'framework', 'model', 'structure'],
          concepts: [
            'Jesus gave his disciples a structure, not a script to recite',
            'The Lord\'s Prayer moves through: worship → surrender → provision → forgiveness → protection',
            'Each phrase can be a doorway into deeper conversation',
            'Praying through the model is a practice, not a performance',
          ],
          vocabulary: ['hallowed', 'kingdom', 'will', 'daily bread', 'trespasses', 'temptation', 'deliverance'],
          pipPrompts: [
            'Which phrase of the Lord\'s Prayer feels most natural to you right now? Which feels hardest?',
            '"Your kingdom come" — what would that look like in your specific situation today?',
            'Is there someone you need to forgive to pray "forgive us as we forgive" honestly?',
          ],
          hints: [
            'Sit with one phrase for a whole week. Don\'t rush through the whole prayer.',
            '"Give us today our daily bread" — what is your daily bread right now? Name it specifically.',
            'The prayer starts with "Our Father" — you are not alone when you pray it.',
          ],
        },
      ],
    },

    growing: {
      label: 'Building a Prayer Life',
      approach: 'Help them move from occasional prayer to rhythm. Introduce variety of forms without overwhelm. Connect prayer to daily experience.',

      topics: [
        {
          id: 'prayer-forms',
          title: 'Different Forms of Prayer',
          keywords: ['forms', 'types', 'kinds', 'ways', 'variety', 'methods', 'practices'],
          concepts: [
            'ACTS: Adoration, Confession, Thanksgiving, Supplication — a balanced prayer framework',
            'Intercessory prayer: praying on behalf of others',
            'Contemplative prayer: being present to God without words',
            'Breath prayer: a short prayer anchored to breathing, used throughout the day',
          ],
          vocabulary: ['adoration', 'confession', 'thanksgiving', 'supplication', 'intercession', 'contemplation', 'breath prayer'],
          pipPrompts: [
            'Which part of prayer comes most naturally — worship, confession, asking, or just being quiet?',
            'What\'s a breath prayer that fits where you are right now — a short phrase you could carry all day?',
            'Who are you interceding for consistently? What keeps you praying for them?',
          ],
          hints: [
            'A breath prayer: inhale "Lord Jesus Christ," exhale "have mercy on me." Try it for one day.',
            'Adoration shifts your posture before you ask for anything. Try starting there.',
            'You don\'t have to do every form every day. Pick one and go deep.',
          ],
        },
        {
          id: 'prayer-rhythms',
          title: 'Building a Daily Rhythm',
          keywords: ['daily', 'habit', 'routine', 'consistent', 'morning', 'evening', 'schedule', 'rhythm'],
          concepts: [
            'Ancient rhythms: morning prayer anchors the day; evening prayer processes and releases it',
            'Fixed-hour prayer (Liturgy of the Hours) is a 2,000-year-old rhythm of intentional pauses',
            'A rhythm doesn\'t have to be long — 5 minutes of intention beats 30 minutes of guilt',
            'Missing a day is data, not failure — ask what got in the way',
          ],
          vocabulary: ['compline', 'lauds', 'vespers', 'fixed-hour prayer', 'rule of life', 'examen'],
          pipPrompts: [
            'What time of day do you feel most open and least distracted? That\'s your prayer window.',
            'What has gotten in the way of consistency in the past — and what would need to change?',
            'If you missed your rhythm this week, what does that tell you about your current season?',
          ],
          hints: [
            'Start with two minutes. Consistency with two minutes beats inconsistency with thirty.',
            'Anchor prayer to something you already do — coffee, commute, shower. The habit stacks.',
            'Evening examen: What was I most grateful for today? Where did I sense God? What do I want to hand over before sleep?',
          ],
        },
      ],
    },

    rooted: {
      label: 'Deepening in Prayer',
      approach: 'Engage with the interior life of prayer — dryness, contemplation, union. Treat as a mature practitioner who has wrestled with prayer over years.',

      topics: [
        {
          id: 'contemplative-prayer',
          title: 'Contemplative and Centering Prayer',
          keywords: ['contemplative', 'centering prayer', 'silence', 'wordless', 'Thomas Keating', 'deep', 'union'],
          concepts: [
            'Centering Prayer: consent to God\'s presence and action within, using a sacred word',
            'The goal is not experience or information — it is openness and surrender',
            'Thoughts will arise; the practice is to gently return to the sacred word without frustration',
            'Regular contemplative practice gradually transforms the interior life over months and years',
          ],
          vocabulary: ['centering prayer', 'sacred word', 'consent', 'lectio divina', 'apophatic', 'union', 'interior silence'],
          pipPrompts: [
            'What happens when you try to sit in complete silence with God — what surfaces?',
            'What is your sacred word or phrase, and why did you choose it?',
            'In centering prayer, when a thought comes, what do you notice about your reaction to it?',
          ],
          hints: [
            'Thomas Keating: the method is simple. Consent. Sacred word. Twenty minutes. Return gently. Do not evaluate.',
            'What arises in centering prayer is often what most needs healing. Welcome it as information.',
            'The fruits of contemplative prayer show up in daily life, not necessarily in the prayer time itself.',
          ],
        },
        {
          id: 'dry-prayer-seasons',
          title: 'When Prayer Feels Dead',
          keywords: ['dry', 'nothing', 'feel', 'not working', 'silence', 'distant', 'desert', 'dark night'],
          concepts: [
            'Aridity in prayer is nearly universal among mature believers — it is not failure',
            'The Dark Night of the Soul (John of the Cross): God withdraws felt presence to deepen faith',
            'Fidelity in dryness is more spiritually formative than consoled prayer',
            'What to do: show up, be honest, hold the posture even without the feeling',
          ],
          vocabulary: ['aridity', 'dark night', 'consolation', 'desolation', 'fidelity', 'apophatic'],
          pipPrompts: [
            'How long has the dryness lasted, and has there been any variation within it?',
            'What are you doing in this dry season — continuing to show up, or pulling back?',
            'If you could say one honest thing to God right now about this season, what would it be?',
          ],
          hints: [
            'John of the Cross would say: show up anyway. The transformation happens in the dark.',
            'The Psalms of lament are permission: "My God, my God, why have you forsaken me?" is a prayer.',
            'This season will not last forever. What you learn here is not available in the sunshine.',
          ],
        },
      ],
    },

    leading: {
      label: 'Guiding Others in Prayer',
      approach: 'Engage with the responsibility and risk of leading others into deep prayer. Address the leader\'s own prayer life as the foundation.',

      topics: [
        {
          id: 'prayer-leadership',
          title: 'Leading Groups in Prayer',
          keywords: ['lead', 'group', 'team', 'congregation', 'corporate', 'facilitate'],
          concepts: [
            'A prayer leader creates space — they do not perform or generate the experience',
            'Silence is one of the most powerful tools a prayer leader has, and the hardest to use',
            'The leader\'s interior state is the floor of the group\'s experience',
            'Preparation and spontaneity are not opposites — the structure creates room for the Spirit',
          ],
          vocabulary: ['facilitation', 'holding space', 'liturgy', 'responsive prayer', 'soaking prayer'],
          pipPrompts: [
            'What is your own prayer life like in this season — and how does it affect what you lead?',
            'Where do you feel most comfortable with silence in a group? What amount feels right?',
            'Has a prayer gathering ever surprised you — gone somewhere you didn\'t plan? What happened?',
          ],
          hints: [
            'The most important preparation for leading prayer is your own prayer life. Nothing replaces that.',
            'Plan the structure; hold it loosely. God can work with a flexible leader.',
            'Long silences feel awkward to leaders and transformative to participants. Trust the silence.',
          ],
        },
      ],
    },
  },
}
