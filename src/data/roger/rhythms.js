/**
 * Roger Knowledge Base — Spiritual Rhythms & Practices
 *
 * Covers the ancient and modern practices that structure a life of
 * intentional faith — morning activation, evening reflection,
 * fasting, Sabbath, retreat, and a rule of life.
 */

export const rhythms = {
  label: 'Spiritual Rhythms',
  description: 'Practices that structure a life of intentional faith — morning, evening, Sabbath, retreat, and rule of life.',

  bands: {
    new: {
      label: 'Starting Simple',
      approach: 'Lower the bar. One practice done consistently is worth more than ten done sporadically. Meet the person where they are and build from there.',

      topics: [
        {
          id: 'morning-activation',
          title: 'Morning Activation — Starting the Day with God',
          keywords: ['morning', 'start', 'day', 'routine', 'wake up', 'first thing', 'devotions'],
          concepts: [
            'Morning activation: a brief, intentional pause before the day takes over',
            'Three elements: stillness, scripture or prayer, an intention for the day',
            'It doesn\'t have to be long — five minutes of intention shapes the whole day',
            'The goal is orientation, not information',
          ],
          vocabulary: ['morning prayer', 'intention', 'stillness', 'orientation', 'activation'],
          pipPrompts: [
            'What currently happens in the first 15 minutes of your day — honestly?',
            'If you could begin one thing in the morning that would set the tone for the whole day, what would it be?',
            'What time of morning feels realistic for a five-minute pause? What would have to move?',
          ],
          hints: [
            'Before you reach for your phone, reach for one sentence: "Lord, this day is yours. I\'m listening."',
            'Five minutes of stillness and intention beats thirty minutes of guilty devotion.',
            'The phone is not your enemy, but the morning is not its best home. Consider the order.',
          ],
        },
        {
          id: 'evening-reflection',
          title: 'Evening Reflection — Ending the Day With Honesty',
          keywords: ['evening', 'night', 'end of day', 'reflect', 'review', 'before sleep', 'release'],
          concepts: [
            'Evening reflection: reviewing the day for God\'s presence and your own responses',
            'Three questions: Where was I grateful? Where did I miss God? What do I want to hand over?',
            'The Examen is the formal name — but a simple review is the starting point',
            'Releasing the day before sleep is a practice of trust',
          ],
          vocabulary: ['examen', 'gratitude', 'review', 'release', 'surrender', 'reflection'],
          pipPrompts: [
            'If you reviewed today right now — where are the moments you\'d want to hold, and what would you want to let go?',
            'What are you carrying into sleep that you could leave with God instead?',
            'Is there a repeating pattern you\'re noticing at the end of days — something that keeps showing up?',
          ],
          hints: [
            'Three questions: Grateful for? Sensed God in? Want to hand over? That\'s the evening.',
            'Sleep is a daily act of trust — you are not in control while you\'re unconscious. Practice releasing before you go.',
            'Don\'t review the day to judge yourself. Review it to notice where God was.',
          ],
        },
      ],
    },

    growing: {
      label: 'Building Rhythms',
      approach: 'Help them develop a sustainable weekly and monthly rhythm. Introduce Sabbath, fasting, and the concept of a rule of life.',

      topics: [
        {
          id: 'sabbath',
          title: 'Sabbath — One Full Day of Rest',
          keywords: ['sabbath', 'rest', 'day off', 'pause', 'weekly', 'cease', 'stop'],
          concepts: [
            'Sabbath is the only practice in the Ten Commandments that is about doing nothing',
            'Sabbath is a declaration: the world keeps spinning without you working — God provides',
            'It is not laziness — it is an act of trust and worship',
            'Sabbath has three movements: stop, rest, delight',
          ],
          vocabulary: ['Sabbath', 'shabbat', 'rest', 'delight', 'cease', 'provision', 'trust'],
          pipPrompts: [
            'Do you have a Sabbath — one day that genuinely stops the work? What does it look like?',
            'What makes Sabbath feel hard or impossible in your current life?',
            'What brings you delight — what would you fill a Sabbath with if productivity wasn\'t the measure?',
          ],
          hints: [
            'Abraham Joshua Heschel: "The Sabbath is a palace in time." Not a vacation — an architecture.',
            'Sabbath begins with stopping. Not slowing. Stopping.',
            'What brings you delight without accomplishing anything? That belongs in your Sabbath.',
          ],
        },
        {
          id: 'fasting',
          title: 'Fasting — Creating Space by Giving Something Up',
          keywords: ['fast', 'fasting', 'give up', 'hunger', 'discipline', 'abstain'],
          concepts: [
            'Fasting is not primarily about food — it is about creating space by releasing something you normally rely on',
            '"When you fast" — Jesus assumed his followers would fast, not that they might',
            'Fasting reveals what actually has hold of you, and prayer fills what it vacates',
            'Digital fasting, social media fasting, and media fasting are valid modern expressions',
          ],
          vocabulary: ['fasting', 'abstinence', 'hunger', 'discipline', 'prayer', 'longing'],
          pipPrompts: [
            'Have you ever fasted from anything — food or otherwise? What happened?',
            'When you\'ve had to go without something you rely on, what did you discover about your dependence on it?',
            'What would you fast from that would create genuine space for more of God?',
          ],
          hints: [
            'If fasting food is new to you, start with one meal. Give that time to prayer.',
            'Notice what your body or mind reaches for when you fast. That\'s the thing that had hold of you.',
            'Fasting without prayer is just hunger. The point is what you fill the space with.',
          ],
        },
      ],
    },

    rooted: {
      label: 'A Rule of Life',
      approach: 'Help them craft and sustain a personal rule of life — a thoughtful framework for long-term spiritual health.',

      topics: [
        {
          id: 'rule-of-life',
          title: 'Crafting a Personal Rule of Life',
          keywords: ['rule of life', 'framework', 'structure', 'rhythms', 'sustainable', 'whole life'],
          concepts: [
            'A Rule of Life is a framework for intentional living — not rigid rules, but a chosen rhythm',
            'It covers the whole person: spiritual, relational, physical, vocational',
            'Based on Benedict\'s Rule — but personalized to your life, not a monastery\'s',
            'It is reviewed and revised regularly — it grows as you do',
          ],
          vocabulary: ['rule of life', 'Benedict', 'intentional living', 'rhythm', 'framework', 'review'],
          pipPrompts: [
            'If you were to describe your current de facto rule of life — the rhythm you actually live — what would it look like?',
            'Which area of your life most lacks intentional structure right now?',
            'What practices have produced the most fruit in your life over the years? Are they protected?',
          ],
          hints: [
            'A rule of life is descriptive before it is prescriptive — start by naming what you already do, then ask what should change.',
            'Cover four areas: prayer, work, rest, and community. What does each need?',
            'A rule not written down is not a rule yet. Try writing yours — even a rough draft.',
          ],
        },
        {
          id: 'retreat',
          title: 'Retreat — Going Away to Come Back Different',
          keywords: ['retreat', 'away', 'silence', 'extended', 'solitude', 'renewal'],
          concepts: [
            'A retreat is an extended withdrawal from normal life for the purpose of encounter with God',
            'Even one or two days can be transformative when approached with intention',
            'The rhythm of retreat and return is visible in Jesus\' own ministry pattern',
            'Retreat is not running away — it is running toward',
          ],
          vocabulary: ['retreat', 'solitude', 'silence', 'directed retreat', 'preached retreat', 'renewal'],
          pipPrompts: [
            'When is the last time you had significant unstructured time alone with God — longer than an hour?',
            'What comes up for you when you imagine 24 hours of silence and solitude with God?',
            'What rhythmic withdrawal would your life need to sustain what you\'re doing?',
          ],
          hints: [
            'Jesus retreated before major decisions (Gethsemane) and after major ministry (feeding of the 5,000). Both.',
            'A directed retreat gives you someone who holds you in prayer and meets daily. Consider it.',
            'Retreat is not a luxury for the spiritually advanced. It is protective maintenance.',
          ],
        },
      ],
    },

    leading: {
      label: 'Sustaining a Ministry Life',
      approach: 'Engage with the sustainability challenges specific to people in leadership or ministry roles.',

      topics: [
        {
          id: 'sabbatical',
          title: 'Sabbatical — Extended Renewal for Leaders',
          keywords: ['sabbatical', 'extended leave', 'renewal', 'long term', 'ministry rest'],
          concepts: [
            'Sabbatical (from Sabbath): an extended period of rest and renewal, typically for leaders after sustained service',
            'The land itself was commanded to rest every seven years — the principle is ancient and ecological',
            'Sabbatical is not vacation — it is intentional renewal toward a specific return',
            'A sabbatical without structure tends to produce rest but not renewal',
          ],
          vocabulary: ['sabbatical', 'renewal', 'restoration', 'sustained service', 'Jubilee'],
          pipPrompts: [
            'If you had a full month of sabbatical starting tomorrow, what would you most need from it?',
            'What do you fear would happen to your work or community if you took an extended absence?',
            'Is there a form of sabbatical — even shorter than a month — that your life currently allows for?',
          ],
          hints: [
            'Sabbatical produces the best work. Not in the sabbatical — in the return.',
            'What you fear will fall apart in your absence is often the thing most in need of structural change.',
            'Name one thing sabbatical would give you that ministry currently consumes. That\'s what it\'s for.',
          ],
        },
      ],
    },
  },
}
