/**
 * Pip Knowledge Base — Language Arts
 *
 * Pip's Language Arts strategy centers on comprehension, interpretation,
 * and writing craft. Pip never summarizes a text for the child — Pip asks
 * what the child understood and probes deeper. Pip treats meaning-making
 * as a collaborative discovery, not a transfer of information.
 */

export const languageArts = {
  subject: 'language-arts',
  label: 'Language Arts',
  bands: {

    // ─── K–2  (Ages 5–7) ────────────────────────────────────────────────────
    k2: {
      label: 'K–2 · Ages 5–7',
      topics: [
        {
          id: 'phonics',
          title: 'Phonics & Decoding',
          keywords: ['sound', 'letter', 'word', 'read', 'spell', 'vowel', 'consonant', 'blend', 'rhyme', 'syllable'],
          concepts: [
            'Each letter represents a sound (phoneme-grapheme correspondence)',
            'Short and long vowel sounds',
            'Blending: combining individual sounds to form words',
            'Digraphs: two letters make one sound (ch, sh, th, wh)',
            'Syllable counting helps decode longer words',
          ],
          vocabulary: ['letter', 'sound', 'vowel', 'consonant', 'syllable', 'blend', 'digraph', 'rhyme'],
          pipPrompts: [
            'Can you say each sound in that word slowly, like you\'re stretching it out?',
            'What sound does that letter make — what other words start with that sound?',
            'Can you find a smaller word hiding inside that big word?',
            'How many syllables do you hear — can you clap them out?',
            'Does that word rhyme with anything you know?',
          ],
          hints: [
            'Touch each letter and say its sound. Then try blending the sounds together.',
            'Cover the end of the word — can you read the beginning part first?',
          ],
          misconceptions: [
            'Every "e" at the end of a word is silent and makes the vowel long (not always)',
            'Reading is memorizing word shapes rather than decoding sounds',
          ],
        },
        {
          id: 'comprehension-basic',
          title: 'Reading Comprehension — Story Elements',
          keywords: ['story', 'character', 'setting', 'problem', 'solution', 'beginning', 'middle', 'end', 'retell', 'author'],
          concepts: [
            'Every story has a beginning, middle, and end',
            'Characters are who the story is about',
            'Setting is where and when the story happens',
            'Problem and solution drive the plot',
            'Main idea vs. details',
          ],
          vocabulary: ['character', 'setting', 'plot', 'problem', 'solution', 'author', 'illustrator', 'retell'],
          pipPrompts: [
            'Who is this story mostly about?',
            'Where does the story happen — and when?',
            'What problem does the character have?',
            'How did they solve it?',
            'What happened at the very beginning? Then what?',
          ],
          hints: [
            'Think: who, where, what problem, how solved.',
            'A retelling goes in order — beginning first, then middle, then end.',
          ],
          misconceptions: [
            'Retelling = copying words from the book (it should be in the child\'s own words)',
            'The character is always a person',
          ],
        },
        {
          id: 'writing-basics',
          title: 'Writing — Sentences & Ideas',
          keywords: ['sentence', 'capital', 'period', 'question mark', 'exclamation', 'write', 'describe', 'tell', 'beginning', 'end'],
          concepts: [
            'A sentence expresses a complete thought',
            'Sentences start with a capital letter and end with punctuation',
            'A sentence needs a subject (who/what) and a predicate (what happened)',
            'Different punctuation conveys different emotion or intent',
          ],
          vocabulary: ['sentence', 'capital letter', 'period', 'question mark', 'exclamation point', 'subject', 'predicate'],
          pipPrompts: [
            'Does that sentence tell us who or what it\'s about?',
            'Does it tell us what happened or what they did?',
            'What punctuation does this sentence need at the end — is it a statement, a question, or something surprising?',
            'Can you add one describing word to make this sentence more interesting?',
          ],
          hints: [
            'Read the sentence aloud. Does it sound complete? Does it make sense on its own?',
            'A sentence fragment is missing the "who" or the "what happened."',
          ],
          misconceptions: [
            'Longer sentences are always better',
            'A capital at the start means any important word (only sentence start and proper nouns)',
          ],
        },
      ],
    },

    // ─── 3–5  (Ages 8–10) ──────────────────────────────────────────────────
    '35': {
      label: '3–5 · Ages 8–10',
      topics: [
        {
          id: 'literary-elements',
          title: 'Literary Elements',
          keywords: ['theme', 'character', 'plot', 'conflict', 'setting', 'point of view', 'narrator', 'protagonist', 'antagonist', 'motivation', 'inference'],
          concepts: [
            'Theme: the underlying message or lesson, not the topic',
            'Conflict types: person vs. person, person vs. self, person vs. nature, person vs. society',
            'Character motivation: why characters do what they do',
            'Point of view: 1st person (I), 3rd person limited, 3rd person omniscient',
            'Inference: reading what\'s implied, not just what\'s stated',
          ],
          vocabulary: ['theme', 'conflict', 'protagonist', 'antagonist', 'motivation', 'inference', 'point of view', 'narrator', 'foreshadowing'],
          pipPrompts: [
            'What lesson do you think the author wants the reader to walk away with?',
            'Why do you think the character made that choice — what were they hoping for?',
            'Who is telling this story — how might it be different if someone else told it?',
            'The text doesn\'t say that directly — what clues led you to that conclusion?',
            'What is the main conflict — what\'s standing in the way?',
          ],
          hints: [
            'Theme ≠ topic. Topic: "friendship." Theme: "True friendship requires honesty."',
            'To find motivation: ask "what does this character want, fear, or believe?"',
          ],
          misconceptions: [
            'Theme is the same as the topic or subject matter',
            'Inference means guessing randomly (it means drawing logical conclusions from evidence)',
          ],
        },
        {
          id: 'figurative-language',
          title: 'Figurative Language',
          keywords: ['metaphor', 'simile', 'personification', 'hyperbole', 'alliteration', 'idiom', 'imagery', 'symbolism', 'figurative'],
          concepts: [
            'Simile: comparison using "like" or "as" ("brave as a lion")',
            'Metaphor: direct comparison without "like" or "as" ("He is a lion in battle")',
            'Personification: giving human qualities to non-human things',
            'Hyperbole: extreme exaggeration for effect',
            'Alliteration: repetition of initial consonant sounds',
            'Imagery: language that creates a sensory picture',
            'Idiom: a phrase whose meaning isn\'t literal ("it\'s raining cats and dogs")',
          ],
          vocabulary: ['simile', 'metaphor', 'personification', 'hyperbole', 'alliteration', 'imagery', 'idiom', 'symbolism', 'literal', 'figurative'],
          pipPrompts: [
            'Is the author saying this literally — or is something being compared to something else?',
            'What two things are being compared here, and what quality do they share?',
            'If you took that phrase literally, what would it actually mean? Is that what the author means?',
            'What feeling or image is the author trying to create with this language?',
            'Why do you think the author chose this specific comparison instead of just saying it plainly?',
          ],
          hints: [
            'Check for "like" or "as" → simile. No comparison word → metaphor.',
            'For idioms: ask "if I took every word literally, would this make sense?"',
          ],
          misconceptions: [
            'Simile and metaphor are interchangeable (they differ in how the comparison is made)',
            'Figurative language is just for poetry (it appears throughout all writing)',
          ],
        },
        {
          id: 'nonfiction-reading',
          title: 'Nonfiction & Informational Text',
          keywords: ['nonfiction', 'main idea', 'detail', 'heading', 'caption', 'diagram', 'text feature', 'fact', 'opinion', 'summarize', 'evidence'],
          concepts: [
            'Text features (headings, captions, bold words) aid comprehension',
            'Main idea + supporting details structure',
            'Distinguishing fact from opinion',
            'Author\'s purpose: inform, persuade, entertain',
            'Summarizing: capturing the most important ideas without copying',
          ],
          vocabulary: ['main idea', 'supporting detail', 'text feature', 'fact', 'opinion', 'author\'s purpose', 'summary', 'evidence'],
          pipPrompts: [
            'What is the most important idea this section is about — what would you tell someone who hadn\'t read it?',
            'Is that a fact the author can prove, or an opinion the author believes?',
            'What is the author\'s purpose in writing this — what do they want the reader to do or think?',
            'What details support the main idea you identified?',
            'What questions does this text leave unanswered?',
          ],
          hints: [
            'The main idea is usually broad. Details are specific examples that explain or prove it.',
            'Fact: can be verified. Opinion: uses words like "should," "best," "most important."',
          ],
          misconceptions: [
            'Nonfiction is always boring or "just facts"',
            'Summary = copying the first and last sentences',
          ],
        },
        {
          id: 'grammar-intermediate',
          title: 'Grammar — Parts of Speech',
          keywords: ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'subject', 'predicate', 'clause', 'phrase'],
          concepts: [
            'Nouns name people, places, things, or ideas; can be proper or common',
            'Verbs show action or state of being',
            'Adjectives modify nouns; adverbs modify verbs, adjectives, or other adverbs',
            'Pronouns replace nouns (he, she, they, it)',
            'Prepositions show relationship between words (in, on, under, beside)',
            'Conjunctions connect words, phrases, or clauses (and, but, so, because)',
          ],
          vocabulary: ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'subject', 'predicate', 'clause', 'phrase'],
          pipPrompts: [
            'What is that word doing in the sentence — is it naming something, showing action, or describing?',
            'If you replaced that word, what kind of word would work in its place?',
            'What is the subject of this sentence — who or what is it about?',
            'What is the verb — what is the subject doing or being?',
            'Can you find the prepositional phrase and tell me what relationship it shows?',
          ],
          hints: [
            'The subject answers "who or what" the sentence is about. The predicate tells "what the subject does or is."',
            'To find an adverb, ask: how, when, where, or to what degree was the action performed?',
          ],
          misconceptions: [
            'Adjectives come before the noun (they can come after a linking verb too)',
            'Adverbs always end in -ly (many do, but not all — fast, hard, well)',
          ],
        },
      ],
    },

    // ─── 6–8  (Ages 11–13) ──────────────────────────────────────────────────
    '68': {
      label: '6–8 · Ages 11–13',
      topics: [
        {
          id: 'literary-analysis',
          title: 'Literary Analysis & Interpretation',
          keywords: ['analyze', 'interpret', 'textual evidence', 'theme', 'tone', 'mood', 'symbol', 'allegory', 'irony', 'argument', 'claim', 'evidence', 'commentary'],
          concepts: [
            'Analysis requires a claim supported by textual evidence with commentary',
            'Tone: author\'s attitude; mood: reader\'s feeling',
            'Symbol: an object/person/place that represents an idea beyond itself',
            'Irony types: verbal (says opposite), situational (unexpected outcome), dramatic (reader knows more than character)',
            'Allegory: extended narrative where characters/events represent abstract ideas',
            'A literary argument: claim → evidence → reasoning/commentary',
          ],
          vocabulary: ['tone', 'mood', 'symbol', 'allegory', 'irony', 'allusion', 'motif', 'textual evidence', 'commentary', 'interpretation'],
          pipPrompts: [
            'What claim are you making about this text — can you state it in one sentence?',
            'Where in the text is the evidence for that — can you point to it?',
            'Why does that evidence support your claim? What\'s the connection?',
            'What is the tone of this passage — how does the word choice tell you that?',
            'If the symbol represents something beyond itself, what larger idea might it point to?',
          ],
          hints: [
            'Literary analysis structure: Claim + Evidence ("In the text, it says...") + Commentary ("This shows that...").',
            'To identify tone: list emotional words; ask what feeling they create collectively.',
          ],
          misconceptions: [
            'Opinion and literary interpretation are the same thing (interpretation requires textual evidence)',
            'There is only one correct interpretation of a literary work',
          ],
        },
        {
          id: 'essay-writing',
          title: 'Essay Writing — Structure & Argument',
          keywords: ['essay', 'thesis', 'introduction', 'body', 'conclusion', 'argument', 'paragraph', 'transition', 'outline', 'claim', 'evidence', 'rebuttal'],
          concepts: [
            'Thesis: a clear, arguable, specific claim that guides the entire essay',
            'Introduction: hook → context → thesis',
            'Body paragraphs: topic sentence → evidence → analysis → transition',
            'Conclusion: synthesize (don\'t just summarize), return to significance',
            'Transitions create flow between ideas',
            'Argument vs. report: an argument takes a position; a report presents information',
          ],
          vocabulary: ['thesis', 'claim', 'evidence', 'analysis', 'transition', 'topic sentence', 'conclusion', 'argument', 'counterargument', 'rebuttal'],
          pipPrompts: [
            'What is your thesis — is it arguable, or could everyone already agree with it?',
            'Does your topic sentence tell the reader what the paragraph is going to prove?',
            'After the evidence, what do you say to connect it back to your thesis?',
            'Does your conclusion do more than repeat your introduction? What does it leave the reader thinking?',
            'What would someone who disagrees with you say — and how would you respond?',
          ],
          hints: [
            'Test your thesis: could someone reasonably argue the opposite? If yes, it\'s arguable.',
            'Commentary answers: "So what? Why does this matter for my argument?"',
          ],
          misconceptions: [
            'The thesis is the first sentence of an essay (it\'s usually the last sentence of the introduction)',
            'A conclusion is just restating the introduction',
            'More quotes = better argument (analysis of evidence matters more than quantity)',
          ],
        },
        {
          id: 'rhetoric',
          title: 'Rhetoric — Persuasion & Argument',
          keywords: ['rhetoric', 'ethos', 'pathos', 'logos', 'persuade', 'appeal', 'audience', 'argument', 'fallacy', 'bias', 'propaganda'],
          concepts: [
            'Ethos: appeal to the speaker\'s credibility or character',
            'Pathos: appeal to emotions',
            'Logos: appeal to logic and evidence',
            'Logical fallacies: flawed reasoning patterns (ad hominem, straw man, false dichotomy)',
            'Audience awareness: effective rhetoric is tailored to who is listening',
            'Diction and syntax choices reinforce rhetorical purpose',
          ],
          vocabulary: ['rhetoric', 'ethos', 'pathos', 'logos', 'fallacy', 'audience', 'diction', 'syntax', 'propaganda', 'bias'],
          pipPrompts: [
            'Which of the three appeals is the speaker using most — and why might they choose that one?',
            'Why does the speaker\'s credibility matter for this argument?',
            'Is this appeal to emotion legitimate, or is it manipulating feelings instead of using evidence?',
            'Can you spot a logical fallacy here — is the reasoning actually sound?',
            'Who is the intended audience, and how does the text adjust for them?',
          ],
          hints: [
            'Ethos = "Trust me because..." Pathos = "Feel this because..." Logos = "This is true because..."',
            'A fallacy means the argument\'s form is broken — the conclusion doesn\'t follow from the premises.',
          ],
          misconceptions: [
            'Pathos is always manipulative (legitimate emotional appeals based on real facts are valid)',
            'A good argument uses only logos and no pathos',
          ],
        },
      ],
    },

    // ─── 9–12  (Ages 14–18) ─────────────────────────────────────────────────
    '912': {
      label: '9–12 · Ages 14–18',
      topics: [
        {
          id: 'advanced-literary-analysis',
          title: 'Advanced Literary Analysis — Theory & Criticism',
          keywords: ['literary theory', 'feminist', 'Marxist', 'post-colonial', 'psychoanalytic', 'deconstruction', 'new criticism', 'close reading', 'subtext', 'canon'],
          concepts: [
            'Literary theory: lenses that reveal different aspects of a text',
            'New Criticism / formalism: meaning exists within the text itself',
            'Marxist criticism: examines class, power, and economic structures',
            'Feminist criticism: examines gender, power, and representation',
            'Post-colonial criticism: examines the legacy of colonization in literature',
            'Psychoanalytic criticism: applies Freudian/Jungian ideas to characters and narrative',
          ],
          vocabulary: ['literary theory', 'lens', 'formalism', 'Marxist criticism', 'feminist criticism', 'post-colonial', 'psychoanalytic', 'subtext', 'hegemony', 'close reading'],
          pipPrompts: [
            'What does this critical lens make visible in the text that you wouldn\'t notice otherwise?',
            'How does the author\'s historical context shape what they could and couldn\'t say?',
            'Whose perspective is centered in this narrative — who is marginalized or silent?',
            'What power structures does this text uphold, challenge, or complicate?',
            'How might the same text be read completely differently through a different critical lens?',
          ],
          hints: [
            'Each lens asks a different set of questions. You\'re not finding the "right" answer — you\'re finding what that lens reveals.',
            'The author\'s intention matters less in some theories (formalism) and more in others (biographical).',
          ],
          misconceptions: [
            'There is one "correct" critical approach to any text',
            'Literary theory is only for scholars (it helps any careful reader)',
          ],
        },
        {
          id: 'research-writing',
          title: 'Research Writing & Citation',
          keywords: ['research', 'thesis', 'source', 'citation', 'MLA', 'APA', 'annotated bibliography', 'plagiarism', 'credibility', 'peer-reviewed', 'synthesis'],
          concepts: [
            'Research begins with a question, not a thesis (the thesis emerges from research)',
            'Evaluating sources: CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose)',
            'Synthesis: weaving multiple sources together to support an argument',
            'Citation formats: MLA for humanities, APA for sciences/social sciences',
            'Plagiarism: presenting others\' ideas as your own, including paraphrase without attribution',
            'Annotated bibliography: source + summary + evaluation + relevance',
          ],
          vocabulary: ['thesis', 'synthesis', 'citation', 'paraphrase', 'plagiarism', 'credibility', 'peer-reviewed', 'annotated bibliography', 'attribution'],
          pipPrompts: [
            'What question is your research trying to answer — have you let the evidence shape your thesis?',
            'How do you know this source is credible — who wrote it, when, and for what purpose?',
            'Are you quoting, paraphrasing, or summarizing — and does each need a citation?',
            'How do your sources talk to each other — where do they agree, disagree, or build on each other?',
            'What would strengthen your argument — more evidence, a counterargument, or deeper analysis?',
          ],
          hints: [
            'Start with a question. Read widely. Let the thesis come from what you find, not before.',
            'Synthesis ≠ patchwork quoting. Explain how sources connect to YOUR argument.',
          ],
          misconceptions: [
            'Paraphrasing doesn\'t need a citation (it does)',
            'More sources = stronger paper (quality of analysis matters more than quantity of sources)',
          ],
        },
      ],
    },
  },
}
