// Scripture bank for the Scripture Mirror feature.
// Each scripture has: id, reference, text, tags[]
// Tags map to feelings/thoughts a user might express about themselves.

export const SCRIPTURES = [
  // ── BELOVED / LOVED ──────────────────────────────────────────────
  {
    id: 'loved-01',
    reference: 'Romans 8:38–39',
    text: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    tags: ['unloved', 'abandoned', 'rejected', 'alone', 'forgotten'],
  },
  {
    id: 'loved-02',
    reference: '1 John 3:1',
    text: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!',
    tags: ['unloved', 'unwanted', 'orphan', 'alone', 'rejected'],
  },
  {
    id: 'loved-03',
    reference: 'Zephaniah 3:17',
    text: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.',
    tags: ['unloved', 'forgotten', 'ashamed', 'alone', 'afraid'],
  },
  {
    id: 'loved-04',
    reference: 'John 15:9',
    text: 'As the Father has loved me, so have I loved you. Now remain in my love.',
    tags: ['unloved', 'rejected', 'abandoned', 'unwanted'],
  },
  {
    id: 'loved-05',
    reference: 'Jeremiah 31:3',
    text: 'The Lord appeared to us in the past, saying: "I have loved you with an everlasting love; I have drawn you with unfailing kindness."',
    tags: ['unloved', 'alone', 'forgotten', 'abandoned'],
  },
  {
    id: 'loved-06',
    reference: 'Ephesians 2:4–5',
    text: 'But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions — it is by grace you have been saved.',
    tags: ['unloved', 'ashamed', 'broken', 'guilty', 'failing'],
  },
  {
    id: 'loved-07',
    reference: '1 John 4:16',
    text: 'And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.',
    tags: ['unloved', 'doubt', 'uncertain'],
  },

  // ── ENOUGH / WORTHY ──────────────────────────────────────────────
  {
    id: 'enough-01',
    reference: 'Psalm 139:14',
    text: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.',
    tags: ['not enough', 'worthless', 'ugly', 'inadequate', 'insecure', 'broken'],
  },
  {
    id: 'enough-02',
    reference: 'Ephesians 2:10',
    text: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
    tags: ['not enough', 'purposeless', 'inadequate', 'worthless', 'useless'],
  },
  {
    id: 'enough-03',
    reference: '2 Corinthians 12:9',
    text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ\'s power may rest on me.',
    tags: ['not enough', 'weak', 'inadequate', 'failing', 'overwhelmed'],
  },
  {
    id: 'enough-04',
    reference: 'Philippians 4:13',
    text: 'I can do all this through him who gives me strength.',
    tags: ['not enough', 'weak', 'overwhelmed', 'can\'t do it', 'failing'],
  },
  {
    id: 'enough-05',
    reference: 'Isaiah 43:4',
    text: 'Since you are precious and honored in my sight, and because I love you, I will give people in exchange for you, nations in exchange for your life.',
    tags: ['not enough', 'worthless', 'unloved', 'unwanted', 'rejected'],
  },
  {
    id: 'enough-06',
    reference: 'Genesis 1:27',
    text: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.',
    tags: ['not enough', 'worthless', 'ugly', 'broken', 'inadequate'],
  },
  {
    id: 'enough-07',
    reference: '1 Peter 2:9',
    text: 'But you are a chosen people, a royal priesthood, a holy nation, God\'s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.',
    tags: ['not enough', 'worthless', 'rejected', 'ordinary', 'purposeless'],
  },
  {
    id: 'enough-08',
    reference: 'Song of Solomon 4:7',
    text: 'You are altogether beautiful, my darling; there is no flaw in you.',
    tags: ['ugly', 'not enough', 'insecure', 'broken', 'ashamed'],
  },

  // ── FEAR / ANXIETY ────────────────────────────────────────────────
  {
    id: 'fear-01',
    reference: 'Isaiah 41:10',
    text: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
    tags: ['afraid', 'anxious', 'scared', 'fear', 'worried', 'uncertain'],
  },
  {
    id: 'fear-02',
    reference: 'Philippians 4:6–7',
    text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
    tags: ['anxious', 'worried', 'afraid', 'overwhelmed', 'fear', 'stressed'],
  },
  {
    id: 'fear-03',
    reference: '2 Timothy 1:7',
    text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.',
    tags: ['afraid', 'timid', 'fear', 'weak', 'anxious', 'insecure'],
  },
  {
    id: 'fear-04',
    reference: 'Psalm 34:4',
    text: 'I sought the Lord, and he answered me; he delivered me from all my fears.',
    tags: ['afraid', 'fear', 'anxious', 'worried', 'trapped'],
  },
  {
    id: 'fear-05',
    reference: 'John 14:27',
    text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.',
    tags: ['afraid', 'anxious', 'troubled', 'worried', 'fear', 'uncertain'],
  },
  {
    id: 'fear-06',
    reference: 'Psalm 56:3',
    text: 'When I am afraid, I put my trust in you.',
    tags: ['afraid', 'fear', 'anxious', 'uncertain'],
  },
  {
    id: 'fear-07',
    reference: '1 Peter 5:7',
    text: 'Cast all your anxiety on him because he cares for you.',
    tags: ['anxious', 'worried', 'afraid', 'overwhelmed', 'stressed'],
  },
  {
    id: 'fear-08',
    reference: 'Isaiah 43:2',
    text: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.',
    tags: ['afraid', 'overwhelmed', 'suffering', 'trials', 'trapped', 'stressed'],
  },

  // ── FORGOTTEN / ABANDONED ────────────────────────────────────────
  {
    id: 'forgotten-01',
    reference: 'Isaiah 49:16',
    text: 'See, I have engraved you on the palms of my hands; your walls are ever before me.',
    tags: ['forgotten', 'abandoned', 'alone', 'invisible', 'unloved'],
  },
  {
    id: 'forgotten-02',
    reference: 'Hebrews 13:5',
    text: 'Never will I leave you; never will I forsake you.',
    tags: ['forgotten', 'abandoned', 'alone', 'rejected', 'invisible'],
  },
  {
    id: 'forgotten-03',
    reference: 'Psalm 27:10',
    text: 'Though my father and mother forsake me, the Lord will receive me.',
    tags: ['abandoned', 'rejected', 'forgotten', 'alone', 'orphan', 'unloved'],
  },
  {
    id: 'forgotten-04',
    reference: 'Matthew 10:29–31',
    text: 'Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father\'s care. And even the very hairs of your head are all numbered. So don\'t be afraid; you are worth more than many sparrows.',
    tags: ['forgotten', 'invisible', 'worthless', 'alone', 'afraid'],
  },
  {
    id: 'forgotten-05',
    reference: 'Psalm 139:7–8',
    text: 'Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there.',
    tags: ['forgotten', 'alone', 'abandoned', 'lost'],
  },

  // ── SHAME / GUILT ─────────────────────────────────────────────────
  {
    id: 'shame-01',
    reference: 'Romans 8:1',
    text: 'Therefore, there is now no condemnation for those who are in Christ Jesus.',
    tags: ['ashamed', 'guilty', 'condemned', 'failing', 'broken', 'sinful'],
  },
  {
    id: 'shame-02',
    reference: 'Isaiah 61:7',
    text: 'Instead of your shame you will receive a double portion, and instead of disgrace you will rejoice in your inheritance. And so you will inherit a double portion in your land, and everlasting joy will be yours.',
    tags: ['ashamed', 'disgraced', 'humiliated', 'embarrassed', 'broken'],
  },
  {
    id: 'shame-03',
    reference: 'Psalm 34:5',
    text: 'Those who look to him are radiant; their faces are never covered with shame.',
    tags: ['ashamed', 'embarrassed', 'broken', 'guilty', 'humiliated'],
  },
  {
    id: 'shame-04',
    reference: '1 John 1:9',
    text: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
    tags: ['guilty', 'ashamed', 'sinful', 'failing', 'broken'],
  },
  {
    id: 'shame-05',
    reference: 'Micah 7:19',
    text: 'You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.',
    tags: ['guilty', 'ashamed', 'sinful', 'broken', 'condemned'],
  },
  {
    id: 'shame-06',
    reference: 'Isaiah 43:25',
    text: '"I, even I, am he who blots out your transgressions, for my own sake, and remembers your sins no more."',
    tags: ['guilty', 'ashamed', 'sinful', 'broken', 'condemned', 'failing'],
  },
  {
    id: 'shame-07',
    reference: 'Romans 5:8',
    text: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
    tags: ['ashamed', 'guilty', 'unworthy', 'sinful', 'broken'],
  },

  // ── PURPOSE / IDENTITY ───────────────────────────────────────────
  {
    id: 'purpose-01',
    reference: 'Jeremiah 29:11',
    text: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."',
    tags: ['purposeless', 'lost', 'confused', 'uncertain', 'hopeless', 'direction'],
  },
  {
    id: 'purpose-02',
    reference: 'Psalm 138:8',
    text: 'The Lord will vindicate me; your love, Lord, endures forever — do not abandon the works of your hands.',
    tags: ['purposeless', 'forgotten', 'lost', 'direction', 'uncertain'],
  },
  {
    id: 'purpose-03',
    reference: 'Romans 8:28',
    text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    tags: ['purposeless', 'confused', 'lost', 'trials', 'uncertain', 'suffering'],
  },
  {
    id: 'purpose-04',
    reference: 'Isaiah 46:4',
    text: 'Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you.',
    tags: ['purposeless', 'lost', 'tired', 'exhausted', 'forgotten', 'uncertain'],
  },
  {
    id: 'purpose-05',
    reference: 'Proverbs 3:5–6',
    text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    tags: ['confused', 'lost', 'direction', 'uncertain', 'purposeless'],
  },
  {
    id: 'purpose-06',
    reference: 'Ephesians 1:11',
    text: 'In him we were also chosen, having been predestined according to the plan of him who works out everything in conformity with the purpose of his will.',
    tags: ['purposeless', 'ordinary', 'lost', 'direction', 'not enough'],
  },
  {
    id: 'purpose-07',
    reference: 'Psalm 57:2',
    text: 'I cry out to God Most High, to God, who vindicates me. He sends from heaven and saves me — God sends forth his love and his faithfulness.',
    tags: ['purposeless', 'lost', 'confused', 'trials', 'suffering'],
  },

  // ── HOPE / DESPAIR ───────────────────────────────────────────────
  {
    id: 'hope-01',
    reference: 'Lamentations 3:22–23',
    text: 'Because of the Lord\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.',
    tags: ['hopeless', 'despair', 'broken', 'tired', 'exhausted', 'sad'],
  },
  {
    id: 'hope-02',
    reference: 'Romans 15:13',
    text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
    tags: ['hopeless', 'despair', 'sad', 'joyless', 'empty'],
  },
  {
    id: 'hope-03',
    reference: 'Psalm 30:5',
    text: 'For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.',
    tags: ['hopeless', 'sad', 'grief', 'despair', 'crying', 'broken'],
  },
  {
    id: 'hope-04',
    reference: 'Isaiah 40:31',
    text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    tags: ['hopeless', 'tired', 'exhausted', 'weak', 'overwhelmed', 'despair'],
  },
  {
    id: 'hope-05',
    reference: 'Psalm 42:11',
    text: 'Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.',
    tags: ['hopeless', 'sad', 'despair', 'depressed', 'discouraged'],
  },
  {
    id: 'hope-06',
    reference: 'Revelation 21:4',
    text: '"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away."',
    tags: ['hopeless', 'grief', 'sad', 'suffering', 'despair', 'broken'],
  },
  {
    id: 'hope-07',
    reference: 'Jeremiah 17:7',
    text: '"Blessed is the one who trusts in the Lord, whose confidence is in him."',
    tags: ['hopeless', 'uncertain', 'despair', 'afraid', 'doubt'],
  },

  // ── STRENGTH / WEAKNESS ──────────────────────────────────────────
  {
    id: 'strength-01',
    reference: 'Isaiah 40:29',
    text: 'He gives strength to the weary and increases the power of the weak.',
    tags: ['weak', 'tired', 'exhausted', 'overwhelmed', 'not enough'],
  },
  {
    id: 'strength-02',
    reference: 'Nehemiah 8:10',
    text: '"Do not grieve, for the joy of the Lord is your strength."',
    tags: ['weak', 'tired', 'sad', 'grieving', 'exhausted', 'broken'],
  },
  {
    id: 'strength-03',
    reference: 'Psalm 46:1',
    text: 'God is our refuge and strength, an ever-present help in trouble.',
    tags: ['weak', 'afraid', 'overwhelmed', 'trials', 'suffering', 'troubled'],
  },
  {
    id: 'strength-04',
    reference: 'Deuteronomy 31:6',
    text: 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.',
    tags: ['weak', 'afraid', 'timid', 'abandoned', 'overwhelmed'],
  },
  {
    id: 'strength-05',
    reference: 'Psalm 73:26',
    text: 'My flesh and my heart may fail, but God is the strength of my heart and my portion forever.',
    tags: ['weak', 'failing', 'broken', 'exhausted', 'hopeless'],
  },

  // ── FORGIVEN / CLEAN ─────────────────────────────────────────────
  {
    id: 'forgiven-01',
    reference: 'Psalm 103:12',
    text: 'As far as the east is from the west, so far has he removed our transgressions from us.',
    tags: ['guilty', 'ashamed', 'sinful', 'broken', 'condemned', 'failing'],
  },
  {
    id: 'forgiven-02',
    reference: 'Isaiah 1:18',
    text: '"Come now, let us settle the matter," says the Lord. "Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool."',
    tags: ['guilty', 'ashamed', 'sinful', 'broken', 'condemned'],
  },
  {
    id: 'forgiven-03',
    reference: '2 Corinthians 5:17',
    text: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!',
    tags: ['ashamed', 'broken', 'guilty', 'sinful', 'trapped', 'past'],
  },
  {
    id: 'forgiven-04',
    reference: 'Hebrews 10:22',
    text: 'Let us draw near to God with a sincere heart and with the full assurance that faith brings, having our hearts sprinkled to cleanse us from a guilty conscience.',
    tags: ['guilty', 'ashamed', 'broken', 'unworthy'],
  },
  {
    id: 'forgiven-05',
    reference: 'Psalm 51:7',
    text: 'Cleanse me with hyssop, and I will be clean; wash me, and I will be whiter than snow.',
    tags: ['guilty', 'ashamed', 'sinful', 'broken', 'unworthy'],
  },

  // ── SEEN / KNOWN ─────────────────────────────────────────────────
  {
    id: 'seen-01',
    reference: 'Psalm 139:1–3',
    text: 'You have searched me, Lord, and you know me. You know when I sit and when I rise; you perceive my thoughts from afar. You discern my going out and my lying down; you are familiar with all my ways.',
    tags: ['invisible', 'forgotten', 'alone', 'misunderstood', 'lonely'],
  },
  {
    id: 'seen-02',
    reference: 'Psalm 139:13',
    text: 'For you created my inmost being; you knit me together in my mother\'s womb.',
    tags: ['invisible', 'not enough', 'purposeless', 'worthless', 'ordinary'],
  },
  {
    id: 'seen-03',
    reference: 'Luke 12:7',
    text: 'Indeed, the very hairs of your head are all numbered. Don\'t be afraid; you are worth more than many sparrows.',
    tags: ['invisible', 'worthless', 'forgotten', 'afraid', 'alone'],
  },
  {
    id: 'seen-04',
    reference: 'Nahum 1:7',
    text: 'The Lord is good, a refuge in times of trouble. He cares for those who trust in him.',
    tags: ['invisible', 'forgotten', 'alone', 'afraid', 'troubled'],
  },
  {
    id: 'seen-05',
    reference: 'John 10:14',
    text: '"I am the good shepherd; I know my sheep and my sheep know me."',
    tags: ['invisible', 'forgotten', 'alone', 'lost', 'misunderstood'],
  },

  // ── PEACE / TROUBLED ─────────────────────────────────────────────
  {
    id: 'peace-01',
    reference: 'Isaiah 26:3',
    text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
    tags: ['troubled', 'anxious', 'stressed', 'worried', 'overwhelmed', 'restless'],
  },
  {
    id: 'peace-02',
    reference: 'John 16:33',
    text: '"I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world."',
    tags: ['troubled', 'overwhelmed', 'suffering', 'trials', 'afraid', 'anxious'],
  },
  {
    id: 'peace-03',
    reference: 'Colossians 3:15',
    text: 'Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.',
    tags: ['troubled', 'anxious', 'restless', 'stressed', 'overwhelmed'],
  },
  {
    id: 'peace-04',
    reference: 'Numbers 6:24–26',
    text: '"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace."',
    tags: ['troubled', 'anxious', 'unloved', 'restless', 'sad'],
  },

  // ── TRIALS / SUFFERING ───────────────────────────────────────────
  {
    id: 'trials-01',
    reference: 'James 1:2–4',
    text: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.',
    tags: ['suffering', 'trials', 'pain', 'broken', 'struggling', 'hard'],
  },
  {
    id: 'trials-02',
    reference: 'Romans 5:3–4',
    text: 'Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.',
    tags: ['suffering', 'trials', 'pain', 'struggling', 'hopeless'],
  },
  {
    id: 'trials-03',
    reference: '2 Corinthians 4:17',
    text: 'For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.',
    tags: ['suffering', 'trials', 'pain', 'broken', 'hard', 'hopeless'],
  },
  {
    id: 'trials-04',
    reference: 'Psalm 34:18',
    text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
    tags: ['broken', 'sad', 'grief', 'suffering', 'hopeless', 'crushed'],
  },
  {
    id: 'trials-05',
    reference: '1 Peter 5:10',
    text: 'And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.',
    tags: ['suffering', 'trials', 'broken', 'weak', 'tired', 'pain'],
  },

  // ── CHOSEN / CALLED ──────────────────────────────────────────────
  {
    id: 'chosen-01',
    reference: 'John 15:16',
    text: '"You did not choose me, but I chose you and appointed you so that you might go and bear fruit — fruit that will last — and so that whatever you ask in my name the Father will give you."',
    tags: ['rejected', 'purposeless', 'ordinary', 'unloved', 'not enough'],
  },
  {
    id: 'chosen-02',
    reference: 'Ephesians 1:4–5',
    text: 'For he chose us in him before the creation of the world to be holy and blameless in his sight. In love he predestined us for adoption to sonship through Jesus Christ.',
    tags: ['rejected', 'unwanted', 'ordinary', 'purposeless', 'unloved'],
  },
  {
    id: 'chosen-03',
    reference: 'Isaiah 43:1',
    text: 'But now, this is what the Lord says — he who created you, Jacob, he who formed you, Israel: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine."',
    tags: ['rejected', 'alone', 'afraid', 'abandoned', 'lost', 'forgotten'],
  },
  {
    id: 'chosen-04',
    reference: '1 Thessalonians 1:4',
    text: 'For we know, brothers and sisters loved by God, that he has chosen you.',
    tags: ['rejected', 'unloved', 'ordinary', 'worthless', 'unwanted'],
  },

  // ── GRATITUDE / ABUNDANCE ────────────────────────────────────────
  {
    id: 'grateful-01',
    reference: 'Psalm 16:11',
    text: 'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.',
    tags: ['grateful', 'joyful', 'blessed', 'thankful'],
  },
  {
    id: 'grateful-02',
    reference: 'John 10:10',
    text: '"The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full."',
    tags: ['grateful', 'joyful', 'empty', 'joyless', 'purposeless'],
  },
  {
    id: 'grateful-03',
    reference: 'Psalm 23:1',
    text: 'The Lord is my shepherd, I lack nothing.',
    tags: ['grateful', 'empty', 'joyless', 'lacking', 'blessed'],
  },
  {
    id: 'grateful-04',
    reference: 'Ephesians 3:20',
    text: 'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.',
    tags: ['grateful', 'joyful', 'blessed', 'hopeful', 'thankful'],
  },

  // ── IDENTITY IN CHRIST ───────────────────────────────────────────
  {
    id: 'identity-01',
    reference: 'Galatians 2:20',
    text: 'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.',
    tags: ['lost', 'uncertain', 'purposeless', 'not enough', 'confused'],
  },
  {
    id: 'identity-02',
    reference: 'Romans 8:17',
    text: 'Now if we are children, then we are heirs — heirs of God and co-heirs with Christ, if indeed we share in his sufferings in order that we may also share in his glory.',
    tags: ['worthless', 'ordinary', 'rejected', 'not enough', 'purposeless'],
  },
  {
    id: 'identity-03',
    reference: 'Colossians 2:10',
    text: 'And in Christ you have been brought to fullness. He is the head over every power and authority.',
    tags: ['not enough', 'incomplete', 'lacking', 'broken', 'empty'],
  },
  {
    id: 'identity-04',
    reference: 'John 1:12',
    text: 'Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.',
    tags: ['orphan', 'rejected', 'unwanted', 'abandoned', 'worthless'],
  },
  {
    id: 'identity-05',
    reference: 'Romans 8:16',
    text: 'The Spirit himself testifies with our spirit that we are God\'s children.',
    tags: ['orphan', 'abandoned', 'alone', 'uncertain', 'lost'],
  },
  {
    id: 'identity-06',
    reference: 'Colossians 1:13–14',
    text: 'For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves, in whom we have redemption, the forgiveness of sins.',
    tags: ['trapped', 'broken', 'guilty', 'ashamed', 'lost', 'sinful'],
  },
  {
    id: 'identity-07',
    reference: 'Philippians 3:20',
    text: 'But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ.',
    tags: ['lost', 'uncertain', 'hopeless', 'purposeless', 'confused'],
  },

  // ── PROVISION / NEEDS ────────────────────────────────────────────
  {
    id: 'provision-01',
    reference: 'Matthew 6:26',
    text: 'Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?',
    tags: ['worried', 'afraid', 'lacking', 'anxious', 'stressed', 'uncertain'],
  },
  {
    id: 'provision-02',
    reference: 'Philippians 4:19',
    text: 'And my God will meet all your needs according to the riches of his glory in Christ Jesus.',
    tags: ['worried', 'lacking', 'stressed', 'afraid', 'uncertain'],
  },
  {
    id: 'provision-03',
    reference: 'Psalm 37:25',
    text: 'I was young and now I am old, yet I have never seen the righteous forsaken or their children begging bread.',
    tags: ['worried', 'lacking', 'afraid', 'uncertain', 'hopeless'],
  },
  {
    id: 'provision-04',
    reference: 'Luke 12:32',
    text: '"Do not be afraid, little flock, for your Father has been pleased to give you the kingdom."',
    tags: ['afraid', 'lacking', 'worried', 'uncertain', 'hopeless'],
  },

  // ── HEALING ──────────────────────────────────────────────────────
  {
    id: 'healing-01',
    reference: 'Psalm 147:3',
    text: 'He heals the brokenhearted and binds up their wounds.',
    tags: ['broken', 'grief', 'sad', 'pain', 'hurt', 'crushed'],
  },
  {
    id: 'healing-02',
    reference: 'Isaiah 53:5',
    text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
    tags: ['broken', 'pain', 'suffering', 'hurt', 'guilt', 'ashamed'],
  },
  {
    id: 'healing-03',
    reference: 'Jeremiah 30:17',
    text: '"But I will restore you to health and heal your wounds," declares the Lord.',
    tags: ['broken', 'pain', 'hurt', 'tired', 'suffering', 'hopeless'],
  },
  {
    id: 'healing-04',
    reference: 'Psalm 30:2',
    text: 'Lord my God, I called to you for help, and you healed me.',
    tags: ['broken', 'pain', 'suffering', 'hurt', 'hopeless'],
  },
]

// ── Tag synonym map ───────────────────────────────────────────────────────────
// Maps user-facing feeling words → tag keywords used above
export const TAG_SYNONYMS = {
  // Common phrases people use
  'not enough':     ['not enough', 'inadequate', 'worthless'],
  'worthless':      ['worthless', 'not enough', 'ordinary'],
  'unloved':        ['unloved', 'rejected', 'abandoned'],
  'forgotten':      ['forgotten', 'invisible', 'alone'],
  'abandoned':      ['abandoned', 'rejected', 'alone'],
  'rejected':       ['rejected', 'unloved', 'abandoned'],
  'alone':          ['alone', 'invisible', 'lonely'],
  'lonely':         ['alone', 'invisible', 'forgotten'],
  'afraid':         ['afraid', 'anxious', 'worried'],
  'anxious':        ['anxious', 'worried', 'afraid'],
  'worried':        ['worried', 'anxious', 'afraid'],
  'stressed':       ['stressed', 'overwhelmed', 'anxious'],
  'overwhelmed':    ['overwhelmed', 'weak', 'tired'],
  'tired':          ['tired', 'exhausted', 'weak'],
  'exhausted':      ['exhausted', 'tired', 'weak'],
  'ashamed':        ['ashamed', 'guilty', 'broken'],
  'guilty':         ['guilty', 'ashamed', 'sinful'],
  'broken':         ['broken', 'crushed', 'sad'],
  'sad':            ['sad', 'grief', 'broken'],
  'depressed':      ['depressed', 'hopeless', 'sad'],
  'hopeless':       ['hopeless', 'despair', 'sad'],
  'lost':           ['lost', 'confused', 'purposeless'],
  'confused':       ['confused', 'lost', 'uncertain'],
  'purposeless':    ['purposeless', 'ordinary', 'lost'],
  'weak':           ['weak', 'tired', 'not enough'],
  'failing':        ['failing', 'ashamed', 'broken'],
  'invisible':      ['invisible', 'forgotten', 'alone'],
  'misunderstood':  ['misunderstood', 'alone', 'invisible'],
  'unworthy':       ['unworthy', 'ashamed', 'not enough'],
  'ugly':           ['ugly', 'insecure', 'not enough'],
  'insecure':       ['insecure', 'afraid', 'not enough'],
  'trapped':        ['trapped', 'lost', 'afraid'],
  'pain':           ['pain', 'broken', 'suffering'],
  'suffering':      ['suffering', 'trials', 'broken'],
  'grief':          ['grief', 'sad', 'broken'],
  'doubt':          ['doubt', 'uncertain', 'afraid'],
  'uncertain':      ['uncertain', 'confused', 'afraid'],
  'grateful':       ['grateful', 'thankful', 'joyful'],
  'joyful':         ['joyful', 'grateful', 'blessed'],
  'blessed':        ['blessed', 'grateful', 'joyful'],
}

// ── localStorage key and helpers ─────────────────────────────────────────────
const STORAGE_KEY = 'scripture_mirror_shown'
const DAYS_30 = 30 * 24 * 60 * 60 * 1000

function getShownLog() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function markShown(ids) {
  const log = getShownLog()
  const now = Date.now()
  ids.forEach(id => { log[id] = now })
  // Prune entries older than 30 days
  Object.keys(log).forEach(id => {
    if (now - log[id] > DAYS_30) delete log[id]
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(log))
}

function wasShownRecently(id) {
  const log = getShownLog()
  return log[id] && Date.now() - log[id] < DAYS_30
}

// ── Main selector ─────────────────────────────────────────────────────────────
// Given a feeling/phrase string, return 3 relevant scriptures not shown in 30 days.
export function getScripturesForFeeling(feeling) {
  const input = feeling.toLowerCase()

  // Score each scripture by how many of its tags appear in the input text
  const scored = SCRIPTURES.map(s => {
    let score = 0
    s.tags.forEach(tag => {
      if (input.includes(tag)) score += 2
    })
    // Also check synonym expansions
    Object.entries(TAG_SYNONYMS).forEach(([phrase, related]) => {
      if (input.includes(phrase)) {
        s.tags.forEach(tag => {
          if (related.includes(tag)) score += 1
        })
      }
    })
    return { ...s, score }
  })

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score)

  // Separate into fresh (not shown recently) and fallback (shown recently)
  const fresh = scored.filter(s => s.score > 0 && !wasShownRecently(s.id))
  const fallbackFresh = scored.filter(s => s.score === 0 && !wasShownRecently(s.id))
  const stale = scored.filter(s => wasShownRecently(s.id))

  // Pick 3: prioritize fresh high-score, fill with fresh low-score, last resort stale
  const pool = [...fresh, ...fallbackFresh, ...stale]
  const chosen = pool.slice(0, 3)

  if (chosen.length === 0) return []

  markShown(chosen.map(s => s.id))
  return chosen
}

// ── Mirror truth generator ────────────────────────────────────────────────────
// Returns a conversational mirror statement in the same structure as the input.
// e.g. "I feel not enough" → "You are more than enough."

const MIRROR_MAP = [
  { patterns: ['not enough', 'inadequate', 'insufficient'],  truth: 'You are more than enough.' },
  { patterns: ['worthless', 'no value', 'don\'t matter'],    truth: 'You are priceless to God.' },
  { patterns: ['unloved', 'not loved', 'unlovable'],         truth: 'You are deeply and unconditionally loved.' },
  { patterns: ['forgotten', 'invisible', 'overlooked'],      truth: 'You are seen, known, and never forgotten.' },
  { patterns: ['abandoned', 'left', 'forsaken'],             truth: 'You are never alone — God will never leave you.' },
  { patterns: ['rejected', 'unwanted', 'not chosen'],        truth: 'You are chosen and wanted.' },
  { patterns: ['alone', 'lonely', 'isolated'],               truth: 'You are never alone — God is with you.' },
  { patterns: ['afraid', 'scared', 'terrified', 'fear'],     truth: 'You are held by the One who overcomes all fear.' },
  { patterns: ['anxious', 'anxiety', 'worry', 'worried'],    truth: 'You can have peace that surpasses all understanding.' },
  { patterns: ['ashamed', 'shame', 'embarrassed'],           truth: 'You are covered in grace — there is no condemnation.' },
  { patterns: ['guilty', 'guilt', 'condemned'],              truth: 'You are forgiven and made completely clean.' },
  { patterns: ['broken', 'shattered', 'falling apart'],      truth: 'You are being healed and restored.' },
  { patterns: ['hopeless', 'no hope', 'giving up'],          truth: 'You have a hope and a future.' },
  { patterns: ['lost', 'no direction', 'wandering'],         truth: 'You are being guided — your path is known.' },
  { patterns: ['purposeless', 'no purpose', 'pointless'],    truth: 'You were created with intention and purpose.' },
  { patterns: ['weak', 'no strength', 'powerless'],          truth: 'You are made strong through His power in you.' },
  { patterns: ['tired', 'exhausted', 'worn out'],            truth: 'You will be renewed — He gives strength to the weary.' },
  { patterns: ['failing', 'failure', 'messing up'],          truth: 'You are not defined by your failures — grace covers all.' },
  { patterns: ['sad', 'depressed', 'grief', 'grieving'],     truth: 'You will not weep forever — joy is coming.' },
  { patterns: ['confused', 'uncertain', 'don\'t know'],      truth: 'Your path will be made straight as you trust Him.' },
  { patterns: ['ugly', 'unattractive', 'not beautiful'],     truth: 'You are fearfully and wonderfully made.' },
  { patterns: ['insecure', 'unsure of myself'],              truth: 'You are secure in the One who holds you.' },
  { patterns: ['trapped', 'stuck', 'no way out'],            truth: 'You are being led into freedom.' },
  { patterns: ['suffering', 'pain', 'hurting'],              truth: 'Your suffering is not the end of your story.' },
  { patterns: ['doubt', 'doubting', 'don\'t believe'],       truth: 'Your faith, even small, moves mountains.' },
  { patterns: ['ordinary', 'average', 'nothing special'],    truth: 'You are God\'s masterpiece — one of a kind.' },
  { patterns: ['unworthy', 'don\'t deserve'],                truth: 'You are made worthy through Christ.' },
  { patterns: ['misunderstood', 'no one gets me'],           truth: 'You are fully known and completely understood by God.' },
  { patterns: ['grateful', 'thankful', 'blessed'],           truth: 'You are living in God\'s abundance.' },
]

export function getMirrorTruth(feeling, scripture) {
  const input = feeling.toLowerCase()

  // Find the best matching mirror truth
  for (const entry of MIRROR_MAP) {
    if (entry.patterns.some(p => input.includes(p))) {
      return entry.truth
    }
  }

  // Fallback: derive from the scripture's first tag
  const fallbacks = {
    'unloved':     'You are deeply loved.',
    'afraid':      'You are held — do not be afraid.',
    'broken':      'You are being restored.',
    'guilty':      'You are forgiven.',
    'forgotten':   'You are seen.',
    'weak':        'You are made strong in Him.',
    'hopeless':    'You have a living hope.',
    'lost':        'You are being found.',
    'purposeless': 'You were made on purpose, for a purpose.',
  }
  const firstTag = scripture?.tags?.[0]
  return fallbacks[firstTag] || 'You are who God says you are.'
}
