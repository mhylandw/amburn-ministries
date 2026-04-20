/**
 * Roger Knowledge Base — Identity in Christ
 *
 * Covers the foundational truths of who a person is in Christ —
 * adopted, beloved, called, equipped. Life-stage banded.
 */

export const identity = {
  label: 'Identity in Christ',
  description: 'Foundational truths of who you are in Christ — adopted, beloved, called, equipped.',

  bands: {
    new: {
      label: 'Discovering Who You Are',
      approach: 'Ground the person in simple, concrete identity truths. Meet shame, performance, and unworthiness with specific scripture and warmth.',

      topics: [
        {
          id: 'beloved',
          title: 'You Are Beloved',
          keywords: ['loved', 'worthy', 'enough', 'good enough', 'shame', 'failure', 'rejected', 'worthless'],
          concepts: [
            'God\'s love is not conditional on performance — it precedes anything you do',
            '"This is my beloved Son, in whom I am well pleased" — spoken before Jesus\' ministry began',
            'Belovedness is your starting place, not your goal to achieve',
            'Shame says "I am bad." The Gospel says "I am loved."',
          ],
          vocabulary: ['beloved', 'unconditional', 'grace', 'acceptance', 'adoption', 'shame', 'worth'],
          pipPrompts: [
            'When you imagine God looking at you right now, what do you see in his face?',
            'Is there anything you\'ve been telling yourself disqualifies you from being loved?',
            'What would change in your day if you started from "I am loved" instead of trying to earn it?',
          ],
          hints: [
            'God said "beloved" over Jesus before any miracle, before any ministry. That\'s the order.',
            'Romans 8:38-39 lists everything that cannot separate you from God\'s love. Read the list.',
            'Shame thrives in hiddenness. Can you bring what you\'re ashamed of into the light — even just to God?',
          ],
        },
        {
          id: 'adoption',
          title: 'You Are Adopted — You Belong',
          keywords: ['belong', 'family', 'son', 'daughter', 'adopted', 'outsider', 'orphan', 'alone'],
          concepts: [
            'Adoption in the Roman world was permanent and full — the adopted child gained every right of a natural child',
            '"You received the Spirit of adoption, by whom we cry Abba, Father"',
            'Abba is not a formal title — it is intimate, like "Papa" or "Dad"',
            'You are not a servant trying to earn a place; you are a child who already has one',
          ],
          vocabulary: ['adoption', 'Abba', 'sonship', 'inheritance', 'belonging', 'orphan spirit'],
          pipPrompts: [
            'Does "Abba" — the intimate name for father — feel natural or strange to you? What does that reveal?',
            'Where do you most struggle to believe that you belong in God\'s family?',
            'How would you treat yourself differently if you truly believed you were a beloved child, not a servant?',
          ],
          hints: [
            'The prodigal son came home rehearsing a servant\'s speech. The father interrupted it with a robe and a ring.',
            'Galatians 4:7 — "So you are no longer a slave, but a son — and since you are a son, God has made you also an heir."',
            'The orphan spirit hustles for belonging. The adopted child already has it. Which spirit drives you?',
          ],
        },
      ],
    },

    growing: {
      label: 'Rooting Identity in Truth',
      approach: 'Help the person locate specific lies they\'ve believed and replace them with specific truth. Connect identity to spiritual practice.',

      topics: [
        {
          id: 'identity-vs-performance',
          title: 'Identity vs. Performance',
          keywords: ['performance', 'achieve', 'earn', 'prove', 'worth', 'striving', 'rest'],
          concepts: [
            'Performance orientation: believing your value comes from what you do or produce',
            'Identity in Christ is ontological — it is about being, not doing',
            'The Sabbath is a weekly declaration that the world will keep spinning without you working',
            'Resting in identity is not passivity — it is confidence in who you already are',
          ],
          vocabulary: ['performance', 'striving', 'rest', 'Sabbath', 'ontology', 'being', 'justification'],
          pipPrompts: [
            'Where in your life do you most feel like you have to earn your place — even with God?',
            'What would happen to your sense of worth if you suddenly couldn\'t produce anything?',
            'Is there a difference between resting and being lazy? What is the distinction for you?',
          ],
          hints: [
            'Sabbath is not permission to rest after you\'ve done enough. It is a command to rest regardless.',
            'If your sense of worth tracks with your productivity, that\'s not faith — that\'s the world\'s system in spiritual clothing.',
            'Ask: "I do _____ because I am _____" rather than "I am _____ because I do _____."',
          ],
        },
        {
          id: 'calling-and-gifts',
          title: 'You Are Called and Equipped',
          keywords: ['call', 'calling', 'purpose', 'gifts', 'mission', 'why', 'meant for'],
          concepts: [
            'Every believer has a calling — not just clergy or missionaries',
            'Spiritual gifts are given by the Spirit for the common good, not for personal distinction',
            'Calling is often found at the intersection of deep gladness and the world\'s deep need (Buechner)',
            'Calling is discovered through practice and community, not by waiting for dramatic clarity',
          ],
          vocabulary: ['calling', 'vocation', 'spiritual gifts', 'charismata', 'stewardship', 'purpose'],
          pipPrompts: [
            'When do you feel most fully yourself — most alive and most needed?',
            'What do other people in your community consistently say you\'re gifted at?',
            'Is there something you\'ve always felt pulled toward that you\'ve never fully pursued? What has held you back?',
          ],
          hints: [
            'Frederick Buechner: calling is "the place where your deep gladness and the world\'s deep hunger meet."',
            'Your gifts are not primarily for you. They make most sense in a community where they\'re needed.',
            'You don\'t have to have clarity before you start. Obedience clarifies more than waiting does.',
          ],
        },
      ],
    },

    rooted: {
      label: 'Living from Identity',
      approach: 'Engage with the ongoing work of living from a secure identity in the face of suffering, failure, and complexity.',

      topics: [
        {
          id: 'identity-in-suffering',
          title: 'Identity Under Pressure — Suffering and Loss',
          keywords: ['suffering', 'loss', 'grief', 'pain', 'shaken', 'hard season', 'who am i now'],
          concepts: [
            'Suffering is often where identity gets tested and deepened, not destroyed',
            'Lament is the language of faith in darkness — not abandonment of faith',
            '"Though he slay me, yet will I trust him" — Job\'s identity held even when everything else fell',
            'The Resurrection is the Christian\'s answer to the claim that death and loss have the final word',
          ],
          vocabulary: ['lament', 'resurrection hope', 'theodicy', 'suffering servant', 'groaning', 'Romans 8'],
          pipPrompts: [
            'In this suffering — has it changed your sense of who you are, or only your circumstances?',
            'What does it mean for your identity that God himself entered suffering in Jesus?',
            'What is this season demanding of you that only a rooted identity can sustain?',
          ],
          hints: [
            'Paul wrote "I have learned to be content" from prison. Contentment in suffering is a skill, not a feeling.',
            'Your identity is not what you have, produce, or feel. Those can all be taken. Identity in Christ cannot.',
            'Lament is not the opposite of faith. The Psalms put both on the same page.',
          ],
        },
      ],
    },

    leading: {
      label: 'Holding Identity for Others',
      approach: 'Address the unique temptations of leaders to lose themselves in role, performance, and others\' expectations.',

      topics: [
        {
          id: 'leader-identity',
          title: 'The Leader\'s Own Identity',
          keywords: ['leader', 'pastor', 'minister', 'role', 'performance', 'ego', 'people pleasing', 'approval'],
          concepts: [
            'Leaders face unique pressure to locate identity in role, approval, and outcomes',
            'The leader\'s "true self" must be sustained by spiritual practice, not institutional success',
            'People-pleasing in leadership is an identity problem masquerading as a relational one',
            'The temptation to perform belovedness rather than rest in it is heightened in public ministry',
          ],
          vocabulary: ['true self', 'false self', 'ego', 'persona', 'people pleasing', 'differentiation'],
          pipPrompts: [
            'When ministry is going well, how do you feel about yourself? When it\'s going badly?',
            'Who knows the version of you that exists apart from your role?',
            'Where do you most feel pressure to perform rather than simply be?',
          ],
          hints: [
            'If your sense of calling rises and falls with people\'s responses, it\'s not anchored in God.',
            'The "true self" (Merton) is the self known and loved by God beneath all the roles. Do you know that self?',
            'A leader who hasn\'t learned to receive care can\'t sustainably give it.',
          ],
        },
      ],
    },
  },
}
