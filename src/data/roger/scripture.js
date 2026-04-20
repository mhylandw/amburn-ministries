/**
 * Roger Knowledge Base — Scripture
 *
 * Covers reading scripture slowly, meditatively, and formatively —
 * lectio divina, study methods, and living in the Word.
 */

export const scripture = {
  label: 'Scripture',
  description: 'Reading scripture slowly, formatively, and with expectation.',

  bands: {
    new: {
      label: 'Meeting the Word',
      approach: 'Make scripture accessible and personal. Remove the pressure of "getting it right." Invite curiosity over expertise.',

      topics: [
        {
          id: 'bible-as-conversation',
          title: 'Reading the Bible as God Speaking',
          keywords: ['read', 'bible', 'understand', 'where start', 'confusing', 'how'],
          concepts: [
            'Scripture is the primary way God has revealed himself — it is living and active',
            'The goal is encounter, not information — reading to meet God, not just learn about him',
            'Start where you\'re drawn, not where you think you "should"',
            'The Psalms and the Gospels are natural starting points for hearing God\'s heart',
          ],
          vocabulary: ['revelation', 'inspiration', 'canon', 'Gospels', 'Psalms', 'Old Testament', 'New Testament'],
          pipPrompts: [
            'When you read scripture, what usually happens — does anything catch your attention?',
            'Is there a story or verse you\'ve always found yourself returning to? What is it?',
            'What would it change for you to read a passage asking "God, what do you want me to see today?"',
          ],
          hints: [
            'Start with the Gospel of John. Read one chapter slowly. Notice what stands out.',
            'Ask three questions as you read: What do I see? What does it mean? What should I do?',
            'A single verse read slowly and honestly is worth more than a chapter skimmed.',
          ],
        },
      ],
    },

    growing: {
      label: 'Reading Formatively',
      approach: 'Introduce lectio divina and meditative reading. Help the person slow down and let scripture read them, not just the reverse.',

      topics: [
        {
          id: 'lectio-divina',
          title: 'Lectio Divina — Sacred Reading',
          keywords: ['lectio', 'divina', 'sacred reading', 'meditate', 'scripture meditation', 'slow'],
          concepts: [
            'Lectio Divina: four movements — Lectio (read), Meditatio (reflect), Oratio (respond), Contemplatio (rest)',
            'Read a short passage slowly, aloud if possible, 2–3 times',
            'Notice what word or phrase catches your attention — resist analyzing it immediately',
            'Respond to God from what you noticed, then sit in silence',
          ],
          vocabulary: ['lectio', 'meditatio', 'oratio', 'contemplatio', 'rumination', 'sacred reading'],
          pipPrompts: [
            'When you read a passage for lectio, what word or phrase surfaces first — and why do you think it stood out?',
            'In the oratio (response) movement, what did you find yourself wanting to say to God?',
            'What would it take to give 15 minutes to a single paragraph of scripture this week?',
          ],
          hints: [
            'Four movements: Read slowly. Sit with what catches you. Respond honestly. Rest in silence.',
            'Don\'t rush past the word or phrase that stops you. That stop is the invitation.',
            'Lectio is not study. Studying a text is different from letting a text study you.',
          ],
        },
        {
          id: 'memorization-internalization',
          title: 'Carrying Scripture Through the Day',
          keywords: ['memorize', 'memory', 'carry', 'meditate all day', 'scripture through day'],
          concepts: [
            'Ancient practice: carry one verse or passage in mind throughout the day',
            'Repetition is not mindless — each repetition at a different moment yields different insight',
            'Short passages are more portable than long ones — a phrase can go anywhere',
            'Memorization serves meditation, not performance',
          ],
          vocabulary: ['memorization', 'meditation', 'rumination', 'recitation', 'internalization'],
          pipPrompts: [
            'Is there a verse you know by heart that has stayed with you for years? What is it?',
            'What would it look like to carry today\'s passage into your commute, your meals, your conversations?',
            'When you repeat a verse at different moments in the day, does it mean something different each time?',
          ],
          hints: [
            'Pick a verse this week. Write it on an index card. Carry it. Repeat it at every transition.',
            'The Psalms were designed to be memorized and sung — they live better in memory than on a page.',
            'Let the verse speak to what actually happens in your day, not just to your quiet time.',
          ],
        },
      ],
    },

    rooted: {
      label: 'Living in the Word',
      approach: 'Engage with scripture as a lifelong conversation partner. Address hermeneutics lightly, spiritual reading of difficult texts, and the canon as whole.',

      topics: [
        {
          id: 'difficult-passages',
          title: 'When Scripture Is Hard to Receive',
          keywords: ['hard', 'difficult', 'uncomfortable', 'confusing', 'violence', 'conflict', 'contradict', 'wrestling'],
          concepts: [
            'Scripture contains passages that require wrestling — that\'s not a problem, it\'s an invitation',
            'Lament psalms give permission to bring the full range of human experience to God',
            'Difficult texts often yield the deepest formation — resist the urge to resolve them too quickly',
            'Context (historical, literary, canonical) shapes meaning — no verse stands alone',
          ],
          vocabulary: ['hermeneutics', 'canonical reading', 'lament', 'imprecatory psalms', 'trajectory', 'genre'],
          pipPrompts: [
            'Which passage of scripture do you find most difficult to sit with honestly?',
            'What would it mean to wrestle with this text rather than explain it away?',
            'When you encounter a biblical narrative that troubles you, what do you do with that?',
          ],
          hints: [
            'Jacob wrestled with God all night and received both a wound and a blessing. Wrestling is not wrong.',
            'The imprecatory psalms (like Psalm 109) are permission to be honest with God about anger.',
            'Ask: what is this passage doing in the canon? What would we lose without it?',
          ],
        },
        {
          id: 'scripture-and-life',
          title: 'Scripture Reading as a Practice, Not a Duty',
          keywords: ['obligation', 'duty', 'guilt', 'habit', 'love', 'delight', 'relationship'],
          concepts: [
            'Formative reading is motivated by love and relationship, not rule-keeping',
            'Guilt-driven scripture reading produces performance; love-driven reading produces transformation',
            'A dry season in scripture reading is data — ask why, not just try harder',
            'Variety in method (lectio, study, memorization, imaginative reading) sustains engagement over decades',
          ],
          vocabulary: ['formative reading', 'informative reading', 'imaginative prayer', 'Ignatian contemplation'],
          pipPrompts: [
            'When scripture reading feels like a duty rather than a delight, what is usually going on underneath that?',
            'What has your relationship with the Word looked like over the last month — honest assessment?',
            'Is there a form of scripture engagement you\'ve never tried that might open something for you?',
          ],
          hints: [
            'Ignatian imaginative prayer: place yourself in the scene. What do you see, smell, hear? Who do you identify with?',
            'A drought in scripture appetite often reflects a drought in prayer. They\'re related.',
            'You don\'t need to read more — you may need to read slower.',
          ],
        },
      ],
    },

    leading: {
      label: 'Teaching and Holding the Word',
      approach: 'Engage with the responsibility of handling scripture for others. Address the difference between formation and information in teaching contexts.',

      topics: [
        {
          id: 'teaching-scripture-formatively',
          title: 'Teaching Scripture for Transformation, Not Information',
          keywords: ['teach', 'preach', 'formation', 'information', 'transformation', 'sermon', 'bible study'],
          concepts: [
            'Informative teaching increases knowledge; formative teaching changes the person',
            'Questions open more than statements — a teaching that creates longing is more powerful than one that delivers answers',
            'The teacher\'s own encounter with the text must precede the teaching of it',
            'Space for silence and response in a teaching context can be more formative than more content',
          ],
          vocabulary: ['formative teaching', 'hermeneutics', 'homiletics', 'exegesis', 'application', 'inductive method'],
          pipPrompts: [
            'In your own preparation, how do you let the passage speak to you before you speak from it?',
            'Where in your teaching do you create space for people to respond — not just receive?',
            'When has a teaching experience surprised you — the text did something you didn\'t expect it to do?',
          ],
          hints: [
            'The best sermons often create more questions than they answer — and that\'s the point.',
            'Ask yourself: am I teaching people what to think, or teaching them how to meet God in the Word?',
            'Your own current encounter with the text is your best material. What is it doing in you right now?',
          ],
        },
      ],
    },
  },
}
