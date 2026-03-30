/**
 * Pip Knowledge Base — Bible & Faith
 *
 * This module is the optional faith-based track, enabled per family preference.
 * Pip's approach here is the same Socratic spirit: draw out what the child
 * already knows or wonders, help them sit with the text, and never give the
 * "right" theological conclusion — let them discover it through reflection.
 *
 * Organized by:
 *   - themes (cross-cutting ideas across the whole Bible)
 *   - Old Testament sections (Torah, History, Wisdom, Prophets)
 *   - New Testament sections (Gospels, Acts, Epistles, Revelation)
 *   - character studies (key figures studied as whole people)
 *   - grade-banded entry points (simpler language for younger students)
 */

export const bible = {
  subject: 'bible',
  label: 'Bible & Faith',

  // ─── Grade-Banded Entry Points ────────────────────────────────────────────
  // Helps Pip calibrate vocabulary and question depth
  gradeBands: {
    k2: {
      label: 'K–2 · Ages 5–7',
      approach: 'Stories, feelings, and simple "why" questions. God loves us — what does that look like in the story?',
      topics: [
        {
          id: 'creation-k2',
          title: 'Creation (Genesis 1–2)',
          keywords: ['creation', 'God made', 'world', 'light', 'animals', 'Adam', 'Eve', 'good', 'seven days'],
          keyPassages: ['Genesis 1:1', 'Genesis 1:31'],
          concepts: [
            'God created everything out of nothing',
            'God called everything "good" — creation has value and meaning',
            'Humans are made in God\'s image (imago Dei)',
            'God rested on the seventh day — rest matters',
          ],
          pipPrompts: [
            'What do you think it means that God said creation was "good"?',
            'Why do you think God made so many different kinds of animals and plants?',
            'What does it mean to be made "in God\'s image"?',
            'Why do you think God rested — does God get tired?',
          ],
          hints: [
            'Start with what the child notices in the story. What stands out to them?',
            'Connect creation to gratitude — what can they see around them that God made?',
          ],
        },
        {
          id: 'noah-k2',
          title: 'Noah & the Ark (Genesis 6–9)',
          keywords: ['Noah', 'ark', 'flood', 'rainbow', 'animals', 'promise', 'covenant'],
          keyPassages: ['Genesis 6:9', 'Genesis 9:13'],
          concepts: [
            'Noah trusted God even when it seemed strange',
            'God kept Noah and his family safe',
            'The rainbow is a sign of God\'s promise',
            'God makes and keeps promises',
          ],
          pipPrompts: [
            'Why do you think Noah obeyed God even when building the ark must have seemed strange?',
            'What do you think the rainbow meant to Noah and his family?',
            'What is a promise — can you think of a time someone kept a promise to you?',
          ],
          hints: [
            'Focus on trust and faithfulness, not the mechanics of the flood.',
          ],
        },
        {
          id: 'jesus-birth-k2',
          title: 'The Birth of Jesus (Luke 2)',
          keywords: ['Christmas', 'baby Jesus', 'manger', 'shepherd', 'angel', 'wise men', 'Bethlehem', 'Mary', 'Joseph'],
          keyPassages: ['Luke 2:11', 'Matthew 1:23'],
          concepts: [
            'Jesus is God\'s Son who came to earth as a baby',
            'He was born in a humble place — not a palace',
            'Angels announced His birth to shepherds — ordinary people were told first',
            '"Immanuel" means "God with us"',
          ],
          pipPrompts: [
            'Why do you think God chose a manger instead of a palace for Jesus to be born in?',
            'Why might God have told shepherds — not kings — first?',
            'What does "God with us" mean — why would God want to be with us?',
          ],
          hints: [
            'The humility of the birth is intentional — it tells us something about who Jesus came for.',
          ],
        },
        {
          id: 'good-samaritan-k2',
          title: 'The Good Samaritan (Luke 10:25–37)',
          keywords: ['neighbor', 'help', 'Samaritan', 'kind', 'love', 'hurt', 'ignore', 'parable'],
          keyPassages: ['Luke 10:27', 'Luke 10:36–37'],
          concepts: [
            'A parable is a story Jesus told to teach a lesson',
            'Loving your neighbor means helping people in need',
            'The Samaritan helped even though he didn\'t have to',
            '"Neighbor" means more than the person next door',
          ],
          pipPrompts: [
            'Why do you think the religious leaders walked past the hurt man?',
            'What made the Samaritan different from the others?',
            'Who do you think your neighbor is — does that include people you don\'t know?',
            'What does it cost to be a good neighbor?',
          ],
          hints: [
            'Help the child connect the story to situations in their own life.',
          ],
        },
      ],
    },

    '35': {
      label: '3–5 · Ages 8–10',
      approach: 'Deeper "why" questions, character motivation, connecting Old and New Testament themes.',
      topics: [
        {
          id: 'ten-commandments-35',
          title: 'The Ten Commandments (Exodus 20)',
          keywords: ['commandments', 'law', 'Moses', 'Sinai', 'covenant', 'God', 'obey', 'rules', 'love'],
          keyPassages: ['Exodus 20:1–17', 'Matthew 22:37–40'],
          concepts: [
            'The Ten Commandments are part of a covenant between God and Israel',
            'First four: relate to God. Last six: relate to other people',
            'Jesus summarized them: love God, love your neighbor',
            'Law reflects God\'s character — it\'s not arbitrary',
          ],
          pipPrompts: [
            'Why do you think God gave these commandments — what were they trying to protect?',
            'Which commandments are about our relationship with God, and which are about people?',
            'Jesus said the whole law can be summed up in two commandments — what does that mean?',
            'Is following a rule because you love someone different from following it because you have to?',
          ],
          hints: [
            'Connect each commandment to the value or relationship it protects.',
          ],
        },
        {
          id: 'david-35',
          title: 'David — Shepherd, King, Poet',
          keywords: ['David', 'Goliath', 'shepherd', 'king', 'Psalms', 'Saul', 'Jonathan', 'Bathsheba', 'repentance', 'a man after God\'s heart'],
          keyPassages: ['1 Samuel 17:45–47', 'Psalm 23', 'Psalm 51:10', '2 Samuel 12:13'],
          concepts: [
            'David trusted God against impossible odds (Goliath)',
            'God chose the unexpected — youngest, smallest, overlooked',
            'David sinned seriously and was held accountable',
            'Psalm 51 shows genuine repentance — David didn\'t minimize his failure',
            '"A man after God\'s own heart" — not perfection, but a heart that returns to God',
          ],
          pipPrompts: [
            'Why do you think God chose David when everyone else thought he was too small?',
            'David was called "a man after God\'s own heart" but he did terrible things. How can both be true?',
            'What is repentance — is saying sorry and being sorry the same thing?',
            'What do you notice about how David talks to God in the Psalms — is it different from how you expected?',
          ],
          hints: [
            'The story of David shows that God uses imperfect people — but also that sin has consequences.',
          ],
        },
        {
          id: 'proverbs-wisdom-35',
          title: 'Proverbs & Wisdom Literature',
          keywords: ['wisdom', 'Proverbs', 'Solomon', 'foolish', 'wise', 'understanding', 'knowledge', 'fear of the Lord'],
          keyPassages: ['Proverbs 1:7', 'Proverbs 3:5–6', 'Proverbs 4:23'],
          concepts: [
            'Wisdom in Proverbs = living in alignment with how God made the world to work',
            '"Fear of the Lord" = reverence, not terror — recognizing who God is',
            'Wisdom must be actively sought, not passively received',
            'Wisdom affects practical daily decisions (words, work, relationships)',
          ],
          pipPrompts: [
            'What do you think "the fear of the Lord is the beginning of wisdom" means?',
            'What\'s the difference between being smart and being wise?',
            'Can you give an example of a wise decision that was hard to make?',
            'What does "trust in the Lord with all your heart and lean not on your own understanding" look like in real life?',
          ],
          hints: [
            'Wisdom = applied knowledge guided by reverence for God and care for others.',
          ],
        },
      ],
    },

    '68': {
      label: '6–8 · Ages 11–13',
      approach: 'Engage with tension, complexity, and the harder questions. Pip doesn\'t resolve theological tension — Pip helps the student sit with it honestly.',
      topics: [
        {
          id: 'prophets-68',
          title: 'The Prophets — Speaking Truth to Power',
          keywords: ['prophet', 'Isaiah', 'Jeremiah', 'Amos', 'Micah', 'Elijah', 'Elisha', 'justice', 'exile', 'Messiah', 'lament'],
          keyPassages: ['Isaiah 1:17', 'Micah 6:8', 'Jeremiah 29:11', 'Isaiah 53'],
          concepts: [
            'Prophets were not primarily fortune-tellers — they spoke God\'s word into current situations',
            'A major prophetic theme: social justice — care for the poor, widow, orphan, foreigner',
            'Prophets often suffered for speaking truth to power',
            'Isaiah 53 is a "servant song" — Christians see a Messianic prophecy',
            'The prophets held both warning and hope in tension',
          ],
          pipPrompts: [
            'What did the prophets say God cared about — beyond just religious practices?',
            'Why do you think speaking the truth was dangerous for the prophets?',
            'What does Micah 6:8 say God requires — what would that look like today?',
            'How does Isaiah 53 describe the servant — and why have Christians connected it to Jesus?',
          ],
          hints: [
            'The prophets preached repentance AND comfort — both at once.',
            'The context of exile is key: people had lost their home, temple, and hope.',
          ],
        },
        {
          id: 'gospels-68',
          title: 'The Gospels — Who Is Jesus?',
          keywords: ['Jesus', 'Gospel', 'Matthew', 'Mark', 'Luke', 'John', 'kingdom of God', 'miracles', 'parables', 'Sermon on the Mount', 'crucifixion', 'resurrection'],
          keyPassages: ['Matthew 5:3–12', 'John 1:1–14', 'Luke 4:18–19', 'John 11:25', 'Mark 8:29'],
          concepts: [
            'Four Gospels offer four perspectives on the same person',
            'Jesus announced the "Kingdom of God" — a present reality and a coming future',
            'The Beatitudes flip conventional wisdom about who is blessed',
            'Jesus\' miracles were signs pointing to identity and kingdom',
            'The resurrection is the central claim of Christianity — not just a moral example',
          ],
          pipPrompts: [
            'Why do you think there are four Gospels instead of one — what does each add?',
            'The Beatitudes say the poor, the mourning, and the persecuted are blessed. What does that mean?',
            'What does Jesus mean by the "Kingdom of God" — is it a place or something else?',
            'Peter said "You are the Christ" — what did that mean to a Jewish person in the first century?',
            'Why does the resurrection matter to Christianity beyond just proving Jesus was good?',
          ],
          hints: [
            'Let the student sit with the question "Who do YOU say that I am?" — that\'s the central question of the Gospels.',
          ],
        },
        {
          id: 'paul-letters-68',
          title: 'Paul\'s Letters — Grace, Faith & Community',
          keywords: ['Paul', 'Romans', 'Corinthians', 'Galatians', 'Ephesians', 'grace', 'faith', 'works', 'justification', 'church', 'unity', 'love'],
          keyPassages: ['Romans 3:23–24', 'Ephesians 2:8–9', 'Galatians 5:22–23', '1 Corinthians 13', 'Romans 8:38–39'],
          concepts: [
            'Paul\'s letters address specific churches with specific problems',
            'Grace: receiving what you don\'t deserve; Mercy: not receiving what you do deserve',
            'Justification by faith: declared righteous not by earning it',
            '1 Corinthians 13: love as the defining characteristic of Christian community',
            'The fruit of the Spirit (Galatians 5) describes transformed character',
          ],
          pipPrompts: [
            'What\'s the difference between grace and mercy?',
            'Paul says we\'re saved by faith, not by works — but James says faith without works is dead. Is that a contradiction?',
            '"Love is patient, love is kind..." — Paul wrote this to a church that was fighting. What does that tell you?',
            'What does it mean to "live by the Spirit" rather than the flesh?',
          ],
          hints: [
            'Context: Paul\'s letters are responses to real crises in specific communities — not abstract theology lectures.',
            'Grace and works: the Lutheran/Catholic tension here is one of the most discussed in theology. Sit with it.',
          ],
        },
      ],
    },

    '912': {
      label: '9–12 · Ages 14–18',
      approach: 'Deep theological engagement, hermeneutics, and honest wrestling with difficult passages.',
      topics: [
        {
          id: 'hermeneutics',
          title: 'How to Read the Bible — Hermeneutics',
          keywords: ['hermeneutics', 'interpretation', 'context', 'genre', 'literal', 'figurative', 'historical', 'cultural', 'allegory', 'typology', 'translation'],
          keyPassages: ['2 Timothy 3:16–17', '2 Peter 1:20–21'],
          concepts: [
            'Hermeneutics: the study of how we interpret texts, especially Scripture',
            'Genre matters: poetry, law, prophecy, history, and letter require different reading strategies',
            'Historical and cultural context shapes meaning',
            'The difference between what a text meant (original audience) and what it means (application)',
            'Canonical reading: understanding one passage in light of the whole Bible',
            'No interpretation is completely without a perspective or tradition',
          ],
          pipPrompts: [
            'What kind of writing is this — and does the genre change how you should read it?',
            'What would this passage have meant to its original audience before it meant anything to you?',
            'What is the difference between "what does this verse say" and "what does this verse mean"?',
            'If someone quotes a Bible verse to support an argument, what questions would you ask about the context?',
            'Can a text mean something its original author never intended — and does that matter?',
          ],
          hints: [
            'Eisegesis: reading your own ideas INTO the text. Exegesis: drawing meaning OUT from the text.',
            'Every interpreter has a tradition. Acknowledging yours is part of honest reading.',
          ],
        },
        {
          id: 'theodicy',
          title: 'Theodicy — God, Suffering & Evil',
          keywords: ['theodicy', 'suffering', 'evil', 'Job', 'problem of evil', 'lament', 'Psalms', 'free will', 'sovereignty', 'why God allows'],
          keyPassages: ['Job 38:1–7', 'Psalm 22:1–2', 'Romans 8:28', 'Lamentations 3:22–23', 'John 11:35'],
          concepts: [
            'Theodicy: the attempt to reconcile God\'s goodness with the existence of suffering and evil',
            'The "problem of evil": omnipotent + omniscient + omnibenevolent God + evil = logical tension',
            'Classic responses: free will defense, soul-making, divine mystery',
            'Job\'s answer is not theological explanation — it\'s encounter with God in the midst of suffering',
            'Lament psalms show grief as a legitimate form of faith',
            '"All things work together for good" (Romans 8:28) is not "everything is fine"',
          ],
          pipPrompts: [
            'What is the tension at the heart of the problem of evil — can you state it precisely?',
            'What did Job\'s friends assume about why he suffered — and what was wrong with their thinking?',
            'God doesn\'t explain to Job WHY he suffered — He just shows up. What do you make of that response?',
            'Is "lament" the same as "doubt" — can grieving God\'s silence be an act of faith?',
            'What\'s the difference between saying "God permitted this" and "God caused this"?',
          ],
          hints: [
            'The Book of Job does not answer the "why" of suffering — it redirects the question.',
            'The incarnation (God in Christ suffering) is a central Christian response to theodicy — worth exploring.',
          ],
        },
        {
          id: 'kingdom-of-god',
          title: 'The Kingdom of God — Already & Not Yet',
          keywords: ['kingdom of God', 'eschatology', 'already not yet', 'shalom', 'redemption', 'new creation', 'justice', 'Revelation', 'resurrection', 'new Jerusalem'],
          keyPassages: ['Matthew 6:10', 'Luke 17:20–21', 'Romans 8:19–22', 'Revelation 21:1–5', 'Colossians 1:15–20'],
          concepts: [
            '"Already/Not Yet": the Kingdom has broken in through Jesus, but is not fully here yet',
            'Shalom: comprehensive peace — wholeness, justice, flourishing, not just absence of conflict',
            'Eschatology: the study of "last things" — how history ends and what God is doing',
            'New Creation: not destruction of the world but renewal (Revelation 21 — God comes to earth)',
            'The resurrection as the pattern for all creation\'s future',
            'Justice and the Kingdom: God\'s redemptive work includes the social and material world',
          ],
          pipPrompts: [
            'Jesus prays "your kingdom come on earth as in heaven" — what would that actually look like?',
            'How can the Kingdom be "already here" and "not yet here" at the same time?',
            'What does "new creation" mean — is it destruction and replacement, or transformation?',
            'How should what we believe about the future shape how we live now?',
            'If God\'s ultimate goal is shalom — wholeness for all things — what does that mean for how Christians engage with injustice?',
          ],
          hints: [
            'The ending of Revelation is not "souls going to heaven" — it\'s the New Jerusalem coming DOWN to earth. Worth unpacking.',
            '"Already/Not Yet" is one of the most useful theological frameworks for understanding the Christian life in tension.',
          ],
        },
        {
          id: 'biblical-ethics',
          title: 'Biblical Ethics & Moral Reasoning',
          keywords: ['ethics', 'moral', 'conscience', 'law', 'grace', 'justice', 'mercy', 'virtue', 'sanctification', 'discernment', 'character'],
          keyPassages: ['Romans 12:2', 'Micah 6:8', 'Matthew 22:37–40', 'Galatians 5:22–23', 'James 1:27'],
          concepts: [
            'Biblical ethics is primarily character formation, not rule compliance',
            'Deontological elements (divine commands) vs. virtue ethics (character, fruit of Spirit)',
            'The role of conscience in moral decision-making',
            'Tension between law and grace: freedom is for love, not license (Galatians 5:13)',
            'The "two great commandments" as the lens for all ethical reasoning',
            '"Do not be conformed" (Romans 12:2) — ethics requires critical engagement with culture',
          ],
          pipPrompts: [
            'Is following rules the same as being a good person — what\'s the difference?',
            'What is your conscience — and is it always reliable?',
            'How do you make a moral decision when the Bible doesn\'t directly address the situation?',
            'What does "love your neighbor" require in this specific situation?',
            'What\'s the difference between a rule that limits behavior and a virtue that shapes character?',
          ],
          hints: [
            'Virtue ethics asks: "What kind of person am I becoming?" Rule ethics asks: "What am I allowed to do?"',
            'The goal of sanctification in Scripture is not behavior compliance — it\'s becoming like Christ.',
          ],
        },
      ],
    },
  },

  // ─── Cross-Band Themes ────────────────────────────────────────────────────
  // These themes appear across multiple grade bands and can supplement any topic
  themes: [
    {
      id: 'covenant',
      title: 'Covenant',
      description: 'The relational framework God uses throughout Scripture — promise, obligation, and faithfulness.',
      keyPassages: ['Genesis 9:8–17', 'Genesis 15', 'Exodus 19–20', 'Jeremiah 31:31–34', 'Luke 22:20', 'Hebrews 8:6'],
      pipPrompts: [
        'What is a covenant — how is it different from a contract?',
        'Who initiates the covenants in Scripture — God or humans?',
        'What does God promise in each covenant, and what (if anything) is expected in return?',
        'How does the "new covenant" (Jeremiah 31, Luke 22) fulfill and transform the earlier ones?',
      ],
    },
    {
      id: 'redemption',
      title: 'Redemption',
      description: 'The arc of the Bible: creation → fall → redemption → restoration.',
      keyPassages: ['Genesis 3', 'Exodus 6:6', 'Isaiah 43:1', 'Romans 3:23–24', 'Revelation 21:5'],
      pipPrompts: [
        'What does "redemption" mean — in everyday life, what does it look like to redeem something?',
        'Where do you see the theme of redemption in the Old Testament?',
        'How does the Exodus story become a pattern for understanding salvation in the New Testament?',
        'If God is "making all things new" (Revelation 21:5), what does that say about creation?',
      ],
    },
    {
      id: 'image-of-god',
      title: 'Imago Dei — Image of God',
      description: 'What it means for humans to be created in God\'s image and how that shapes human dignity and calling.',
      keyPassages: ['Genesis 1:26–27', 'Psalm 8', 'Colossians 3:10', '2 Corinthians 3:18'],
      pipPrompts: [
        'What does it mean to be made "in the image of God"?',
        'If every person bears God\'s image, what does that mean for how they should be treated?',
        'How might sin distort or obscure the image of God in a person?',
        'What does Paul mean when he says we are being "renewed in the image of our Creator"?',
      ],
    },
    {
      id: 'prayer',
      title: 'Prayer & Relationship with God',
      description: 'The nature of prayer across Scripture — lament, praise, petition, intercession, and listening.',
      keyPassages: ['Matthew 6:9–13', 'Psalm 22', 'Philippians 4:6–7', 'Romans 8:26', '1 Thessalonians 5:17'],
      pipPrompts: [
        'What is prayer — is it only asking God for things?',
        'The Psalms include anger, complaint, and doubt. What does that tell you about what God can handle?',
        'Jesus says "your Father knows what you need before you ask." So why pray?',
        'What does "praying without ceasing" actually mean for a real person\'s day?',
      ],
    },
    {
      id: 'justice-and-mercy',
      title: 'Justice & Mercy',
      description: 'How Scripture holds justice (giving what is owed) and mercy (not giving what is owed) in tension.',
      keyPassages: ['Micah 6:8', 'Psalm 89:14', 'Matthew 5:7', 'Luke 18:1–8', 'Romans 3:25–26'],
      pipPrompts: [
        'What\'s the difference between justice and fairness?',
        'How can God be both just AND merciful — don\'t those contradict each other?',
        'What does Micah 6:8 say God requires — and how does that show up in everyday life?',
        'The widow and the unjust judge (Luke 18) — what is Jesus saying about persistence in prayer for justice?',
      ],
    },
  ],

  // ─── Character Studies ────────────────────────────────────────────────────
  characters: [
    {
      id: 'joseph',
      title: 'Joseph',
      passages: ['Genesis 37–50'],
      themes: ['suffering', 'forgiveness', 'providence', 'betrayal', 'redemption'],
      pipPrompts: [
        'How did Joseph respond to each setback — what do you notice about his character?',
        'Joseph tells his brothers "you meant evil, but God meant it for good." What does that say about suffering?',
        'Is forgiving someone the same as saying what they did was okay?',
        'Where do you see God working in the story even when God is barely mentioned?',
      ],
    },
    {
      id: 'ruth',
      title: 'Ruth',
      passages: ['Ruth 1–4'],
      themes: ['loyalty', 'faithfulness', 'redemption', 'outsiders', 'covenant love'],
      pipPrompts: [
        'Ruth is a foreigner — why does that matter to the story?',
        'What motivated Ruth\'s loyalty to Naomi?',
        'The word "hesed" (loving-kindness, loyal love) runs through the story. Where do you see it?',
        'How does Boaz act as a "kinsman-redeemer" — and what does that foreshadow?',
      ],
    },
    {
      id: 'esther',
      title: 'Esther',
      passages: ['Esther 1–10'],
      themes: ['courage', 'identity', 'providence', 'voice', 'power', 'risk'],
      pipPrompts: [
        '"For such a time as this" — what does that phrase mean, and what pressure does it put on Esther?',
        'God is never mentioned in the book of Esther. Why might that be, and what does it say about how God works?',
        'What did Esther risk by speaking — and what might have happened if she stayed silent?',
        'How does Esther use her position and influence — what does that model?',
      ],
    },
    {
      id: 'paul',
      title: 'Paul the Apostle',
      passages: ['Acts 9', 'Galatians 1–2', 'Philippians 3–4', '2 Corinthians 11–12'],
      themes: ['transformation', 'suffering', 'zeal', 'grace', 'weakness', 'mission'],
      pipPrompts: [
        'Paul went from persecuting Christians to being one. What does that transformation say about grace?',
        'Paul describes himself as the "chief of sinners" even as an apostle. Why would he say that?',
        '"My strength is made perfect in weakness" — what does that mean, and is it actually comforting?',
        'Paul plants churches across the Roman world while in chains. What does that say about his understanding of his mission?',
      ],
    },
  ],
}
