/**
 * Pip Knowledge Base — History
 *
 * Pip's history strategy emphasizes cause/effect, perspective-taking,
 * primary vs. secondary sources, and connecting past events to the present.
 * Pip never summarizes an event for the child — Pip asks what they already know
 * and then probes the causes, consequences, and who was affected.
 */

export const history = {
  subject: 'history',
  label: 'History',
  bands: {

    // ─── K–2  (Ages 5–7) ────────────────────────────────────────────────────
    k2: {
      label: 'K–2 · Ages 5–7',
      topics: [
        {
          id: 'community-helpers',
          title: 'Community & Helpers',
          keywords: ['community', 'helper', 'police', 'firefighter', 'doctor', 'teacher', 'neighbor', 'government', 'leader', 'mayor', 'president'],
          concepts: [
            'Communities are groups of people living and working together',
            'Different people have different roles that help the community function',
            'Leaders help make decisions for their communities',
            'Rules and laws help communities stay safe and fair',
          ],
          vocabulary: ['community', 'citizen', 'leader', 'law', 'government', 'responsibility', 'role'],
          pipPrompts: [
            'What would your neighborhood be like if there were no rules?',
            'What does a leader do that\'s different from what you do?',
            'Why do different people have different jobs in a community?',
            'How do people in your community help each other?',
          ],
          hints: [
            'Think about a day in your town — who keeps things working?',
            'Rules protect people. Who makes the rules where you live?',
          ],
          misconceptions: [
            'The president controls everything in a community (local leaders have local authority)',
          ],
        },
        {
          id: 'american-symbols',
          title: 'American Symbols & Holidays',
          keywords: ['flag', 'liberty', 'Washington', 'Lincoln', 'Thanksgiving', 'Fourth of July', 'pledge', 'monument', 'symbol'],
          concepts: [
            'Symbols represent ideas, values, or events important to a nation',
            'American holidays commemorate key events or people',
            'The flag represents unity and freedom',
            'National monuments are built to honor people or events',
          ],
          vocabulary: ['symbol', 'monument', 'patriot', 'independence', 'liberty', 'democracy'],
          pipPrompts: [
            'Why do you think America has so many symbols — what do they remind people of?',
            'What do you think the stars and stripes on the flag represent?',
            'What is Independence Day celebrating — independent from what?',
            'Why might a country want to remember certain events with a holiday?',
          ],
          hints: [
            'Each symbol usually points back to a story. What\'s the story behind this one?',
          ],
          misconceptions: [
            'The Pilgrims and Native Americans had a happy, problem-free friendship',
          ],
        },
        {
          id: 'past-present',
          title: 'Then & Now — Past and Present',
          keywords: ['past', 'present', 'future', 'long ago', 'change', 'history', 'timeline', 'old', 'new'],
          concepts: [
            'History is the story of what happened before now',
            'Things change over time: tools, transportation, clothing, communication',
            'A timeline organizes events from oldest to newest',
            'Primary sources are made at the time of the event',
          ],
          vocabulary: ['past', 'present', 'future', 'timeline', 'change', 'primary source', 'artifact'],
          pipPrompts: [
            'How is your life different from how your grandparents lived when they were your age?',
            'What did people use before cars, phones, or electricity?',
            'If you found an old photo, what could it tell you about the past?',
            'Why do you think people keep records of history?',
          ],
          hints: [
            'A timeline is like a number line but for time. What goes on the left?',
          ],
          misconceptions: [
            'Nothing changed before the child was born (everything was the same)',
          ],
        },
      ],
    },

    // ─── 3–5  (Ages 8–10) ──────────────────────────────────────────────────
    '35': {
      label: '3–5 · Ages 8–10',
      topics: [
        {
          id: 'american-revolution',
          title: 'American Revolution',
          keywords: ['revolution', 'colonies', 'independence', 'Britain', 'England', 'tax', 'Boston', 'Washington', 'Declaration', 'Constitution', 'founding fathers', 'patriots', 'loyalists'],
          concepts: [
            'The 13 colonies were under British rule and subject to taxes without representation',
            'Key grievances: taxation without representation, Stamp Act, Tea Act, quartering soldiers',
            'Not all colonists wanted independence — loyalists vs. patriots',
            'Declaration of Independence (1776) stated ideals, not yet reality for all people',
            'The Constitution (1787) established the framework for American government',
          ],
          vocabulary: ['colony', 'revolution', 'independence', 'parliament', 'tax', 'loyalist', 'patriot', 'declaration', 'constitution', 'amendment'],
          pipPrompts: [
            'What were the colonists upset about — what made them want to break away from Britain?',
            'What does "no taxation without representation" actually mean?',
            'Were all colonists on the same side? Who were the loyalists?',
            'The Declaration says "all men are created equal" — do you think that was true for everyone at the time?',
            'What happened after independence was declared — did that end the conflict?',
          ],
          hints: [
            'Think about causes vs. effects: what came first? What resulted from it?',
            'Consider multiple perspectives: what did a loyalist think was happening?',
          ],
          misconceptions: [
            'All colonists supported the Revolution from the start',
            'The Revolution ended at the Declaration of Independence (fighting continued until 1783)',
            'The Constitution and Declaration are the same document',
          ],
        },
        {
          id: 'civil-war',
          title: 'The Civil War',
          keywords: ['Civil War', 'slavery', 'Confederate', 'Union', 'Lincoln', 'Emancipation', 'abolition', 'north', 'south', 'secession', 'Reconstruction'],
          concepts: [
            'Root cause: slavery and the economic/social system built around it in the South',
            'Southern states seceded to form the Confederacy (1861)',
            'Emancipation Proclamation (1863) declared enslaved people in Confederate states free',
            'Over 600,000 soldiers died — the deadliest American war',
            'Reconstruction: attempt to rebuild and reintegrate the South (1865–1877)',
            'The 13th Amendment abolished slavery; 14th and 15th extended citizenship and voting rights',
          ],
          vocabulary: ['secession', 'union', 'confederacy', 'slavery', 'emancipation', 'abolition', 'reconstruction', 'amendment'],
          pipPrompts: [
            'What was the disagreement between the North and South really about?',
            'Why did Southern states decide to leave the United States?',
            'What did the Emancipation Proclamation actually do — and what didn\'t it do?',
            'What challenges do you think came after the war ended?',
            'Whose voices are often left out of how the Civil War is told?',
          ],
          hints: [
            'Work through causes: slavery → economic dependence → political conflict → secession → war.',
            'Think about multiple perspectives: enslaved people, Union soldiers, Confederate soldiers, Northern civilians.',
          ],
          misconceptions: [
            'The Civil War was primarily about "states\' rights" not slavery (slavery was the specific right in question)',
            'The Emancipation Proclamation freed all enslaved people everywhere immediately',
          ],
        },
        {
          id: 'native-american-history',
          title: 'Native American History & Culture',
          keywords: ['Native American', 'indigenous', 'tribe', 'nation', 'reservation', 'Trail of Tears', 'treaty', 'culture', 'land'],
          concepts: [
            'Hundreds of distinct nations with different languages, cultures, and lands',
            'European colonization disrupted existing societies through disease, war, and displacement',
            'Trail of Tears (1838): forced removal of Cherokee and other nations',
            'Treaties were repeatedly made and broken by the U.S. government',
            'Native cultures, languages, and traditions persist today',
          ],
          vocabulary: ['indigenous', 'nation', 'treaty', 'reservation', 'sovereignty', 'displacement', 'oral history'],
          pipPrompts: [
            'Before Europeans arrived, what do you think life looked like across North America?',
            'What is a treaty — and what happened to many of the treaties signed with Native nations?',
            'Why do you think the U.S. government wanted Native people to leave their land?',
            'What perspective is missing from many history books about this period?',
          ],
          hints: [
            'Consider: whose land was this before anyone "claimed" it?',
            'Look for primary sources — what did Native people themselves say about these events?',
          ],
          misconceptions: [
            'Native Americans were all one unified group',
            'Native American cultures are entirely historical — they exist and are active today',
          ],
        },
        {
          id: 'world-explorers',
          title: 'Age of Exploration',
          keywords: ['Columbus', 'Magellan', 'explorer', 'explorer', 'continent', 'New World', 'trade route', 'colonize', 'conquest', 'Aztec', 'Inca', 'Spain', 'Portugal'],
          concepts: [
            'European nations sought new trade routes to Asia in the 1400s–1500s',
            'Christopher Columbus reached the Caribbean in 1492 (not North America)',
            'Exploration led to colonization and the Columbian Exchange',
            'Conquistadors conquered powerful empires (Aztec, Inca) using disease, alliances, and force',
            'Millions of indigenous people died from introduced diseases',
          ],
          vocabulary: ['exploration', 'colonization', 'conquistador', 'Columbian Exchange', 'empire', 'conquest'],
          pipPrompts: [
            'Why were European nations so eager to find new routes to Asia?',
            'Columbus "discovered" America — but what does "discover" mean when people already lived there?',
            'What was the Columbian Exchange — what moved in both directions?',
            'How were the Aztec and Inca empires affected by Spanish arrival?',
            'Whose perspective is usually told in the story of exploration — what other perspectives exist?',
          ],
          hints: [
            'Follow the motivations: why did they go? What did they find? What were the consequences?',
          ],
          misconceptions: [
            'Columbus proved the Earth was round (most educated people already knew this)',
            'The Americas were "empty" or "undiscovered" before Europeans arrived',
          ],
        },
      ],
    },

    // ─── 6–8  (Ages 11–13) ──────────────────────────────────────────────────
    '68': {
      label: '6–8 · Ages 11–13',
      topics: [
        {
          id: 'world-war-1',
          title: 'World War I',
          keywords: ['WWI', 'World War 1', 'trench', 'Archduke', 'Franz Ferdinand', 'alliance', 'Central Powers', 'Allied', 'Lusitania', 'Treaty of Versailles', 'armistice'],
          concepts: [
            'Underlying causes: Militarism, Alliances, Imperialism, Nationalism (MAIN)',
            'Assassination of Archduke Franz Ferdinand triggered the alliance system',
            'Trench warfare: stalemate, disease, attrition on the Western Front',
            'New weapons: machine guns, poison gas, tanks, submarines, airplanes',
            'U.S. entered in 1917; Armistice November 11, 1918',
            'Treaty of Versailles: blamed Germany, imposed reparations — set stage for WWII',
          ],
          vocabulary: ['militarism', 'alliance', 'imperialism', 'nationalism', 'armistice', 'trench warfare', 'reparations', 'Treaty of Versailles', 'Western Front'],
          pipPrompts: [
            'What do the four MAIN causes mean — can you explain each one?',
            'How did one assassination lead to a world war — trace the chain of alliances.',
            'What made trench warfare so deadly and why did it create a stalemate?',
            'How did the Treaty of Versailles try to end the war — and what problems did it create?',
            'Who was NOT represented at the peace negotiations — whose interests were ignored?',
          ],
          hints: [
            'Trace the alliances: Franz Ferdinand killed → Austria-Hungary → Serbia → Russia → Germany → France/Britain.',
            'The Versailles treaty humiliated Germany economically and politically — connect this to the 1930s.',
          ],
          misconceptions: [
            'WWI started because of one assassination (the assassination was a trigger for deeper causes)',
            'The U.S. was involved from the beginning',
          ],
        },
        {
          id: 'world-war-2',
          title: 'World War II',
          keywords: ['WWII', 'World War 2', 'Hitler', 'Nazi', 'Holocaust', 'Pearl Harbor', 'D-Day', 'atomic bomb', 'Axis', 'Allies', 'fascism', 'genocide'],
          concepts: [
            'Rise of fascism in Germany and Italy; militarism in Japan',
            'Holocaust: systematic genocide of 6 million Jews and millions of others',
            'Pacific Theater: Japan\'s expansion; Pearl Harbor (1941) brought U.S. in',
            'European Theater: D-Day (June 6, 1944) as major turning point',
            'Atomic bombs on Hiroshima and Nagasaki (August 1945) ended the Pacific war',
            'Nuremberg Trials established accountability for crimes against humanity',
          ],
          vocabulary: ['fascism', 'genocide', 'Holocaust', 'Axis', 'Allied', 'appeasement', 'D-Day', 'atomic bomb', 'Nuremberg'],
          pipPrompts: [
            'How did the conditions after WWI help Hitler rise to power?',
            'What was the Holocaust — and how was it carried out systematically?',
            'Why did the U.S. enter the war when it had been trying to stay neutral?',
            'What were the arguments for and against using the atomic bombs on Japan?',
            'What responsibilities do nations have to prevent genocide from happening again?',
          ],
          hints: [
            'Connect WWI → Great Depression → WWII: each event helped create the next.',
            'Consider: was dropping the bomb a military decision, a moral decision, or both?',
          ],
          misconceptions: [
            'Germany was the only country that committed atrocities in WWII',
            'The war ended when Germany surrendered (Japan surrendered separately, months later)',
          ],
        },
        {
          id: 'civil-rights',
          title: 'Civil Rights Movement',
          keywords: ['civil rights', 'segregation', 'Jim Crow', 'Rosa Parks', 'MLK', 'nonviolent', 'protest', 'march', 'integration', 'discrimination', 'voting rights', 'NAACP'],
          concepts: [
            'Jim Crow laws enforced racial segregation in the South after Reconstruction',
            'Brown v. Board of Education (1954) declared school segregation unconstitutional',
            'Montgomery Bus Boycott (1955–56): economic pressure as a civil rights tool',
            'Dr. King\'s nonviolent direct action philosophy',
            'Civil Rights Act (1964) and Voting Rights Act (1965) as legislative milestones',
            'The movement was broad: many leaders, organizations, and tactics',
          ],
          vocabulary: ['segregation', 'Jim Crow', 'discrimination', 'nonviolent resistance', 'civil disobedience', 'integration', 'amendment', 'boycott'],
          pipPrompts: [
            'What were Jim Crow laws — and what life did they create for Black Americans?',
            'Why did Dr. King emphasize nonviolent protest — what was the strategy behind it?',
            'What was the significance of the Montgomery Bus Boycott beyond just buses?',
            'What changed legally after the movement — and what didn\'t change in practice?',
            'Who are the lesser-known leaders of the Civil Rights Movement, and what did they contribute?',
          ],
          hints: [
            'Think about economic, social, and legal dimensions — the movement worked on all three.',
            'Nonviolence was strategic: it exposed the violence of the opposition to the watching world.',
          ],
          misconceptions: [
            'The Civil Rights Movement was only led by Dr. King',
            'The Civil Rights Act solved racism in America',
          ],
        },
        {
          id: 'cold-war',
          title: 'The Cold War',
          keywords: ['Cold War', 'USSR', 'Soviet', 'communism', 'democracy', 'nuclear', 'arms race', 'Korean War', 'Vietnam', 'Cuba', 'Berlin Wall', 'space race', 'NATO'],
          concepts: [
            'Ideological conflict: U.S. democracy/capitalism vs. Soviet communism',
            'Mutually Assured Destruction (MAD): nuclear deterrence through fear',
            'Proxy wars: Korea, Vietnam, and others fought the U.S.-Soviet conflict indirectly',
            'Cuban Missile Crisis (1962): closest the Cold War came to nuclear conflict',
            'Space Race: technological competition; Sputnik → Moon landing',
            'Fall of the Berlin Wall (1989) and Soviet collapse (1991)',
          ],
          vocabulary: ['communism', 'capitalism', 'democracy', 'deterrence', 'proxy war', 'nuclear', 'containment', 'NATO', 'arms race', 'détente'],
          pipPrompts: [
            'Why is it called a "cold" war — why didn\'t the U.S. and USSR fight directly?',
            'What made the Cuban Missile Crisis so dangerous?',
            'How did the idea of "containment" shape U.S. foreign policy during this era?',
            'What connection is there between the Cold War and the wars in Korea and Vietnam?',
            'How did the Cold War affect life for ordinary Americans — not just governments?',
          ],
          hints: [
            'Neither side could "win" a nuclear war — that fear kept them from direct conflict.',
            'Containment: stop communism from spreading, not defeat it where it already existed.',
          ],
          misconceptions: [
            'The Cold War was purely about nuclear weapons',
            'The U.S. was entirely in the right and the USSR entirely in the wrong (the reality was more complex)',
          ],
        },
      ],
    },

    // ─── 9–12  (Ages 14–18) ─────────────────────────────────────────────────
    '912': {
      label: '9–12 · Ages 14–18',
      topics: [
        {
          id: 'ancient-civilizations',
          title: 'Ancient Civilizations — Comparative',
          keywords: ['Mesopotamia', 'Egypt', 'Greece', 'Rome', 'civilization', 'empire', 'Hammurabi', 'democracy', 'republic', 'ancient', 'Fertile Crescent', 'pharaoh'],
          concepts: [
            'Early civilizations arose near rivers: Tigris/Euphrates, Nile, Indus, Yellow River',
            'Hammurabi\'s Code: one of the earliest written legal codes',
            'Athenian democracy: direct, limited to male citizens; excluded women, slaves, foreigners',
            'Roman Republic → Empire: structural evolution and the dangers of concentrated power',
            'All great civilizations had writing, agriculture, specialization, government, and religion',
            'Fall of Rome: multiple internal and external factors, not one cause',
          ],
          vocabulary: ['civilization', 'city-state', 'empire', 'republic', 'democracy', 'polytheism', 'monotheism', 'codified law', 'patrician', 'plebeian'],
          pipPrompts: [
            'What common features do all early civilizations share — why those features?',
            'Hammurabi\'s Code was a major advance — what does it assume about human nature and governance?',
            'Athens is called the "birthplace of democracy" — but who was excluded from this democracy?',
            'Rome transitioned from Republic to Empire. What pressures or events drove that change?',
            'What lessons from the fall of Rome might apply to modern nations?',
          ],
          hints: [
            'Compare civilizations by their river systems, governing structures, legal codes, and religions.',
            'Analyzing decline: was Rome\'s fall sudden or gradual? Look for multiple overlapping causes.',
          ],
          misconceptions: [
            'Ancient democracy was similar to modern democracy',
            'Rome "fell" in a single event in 476 AD (it was centuries of gradual decline)',
          ],
        },
        {
          id: 'historiography',
          title: 'Historiography & Primary Sources',
          keywords: ['primary source', 'secondary source', 'bias', 'perspective', 'historiography', 'document', 'evidence', 'interpretation', 'context'],
          concepts: [
            'Primary sources: created at the time (letters, speeches, photos, diaries)',
            'Secondary sources: analysis after the fact (textbooks, biographies)',
            'All historical sources reflect the perspective and bias of the creator',
            'Corroboration: comparing multiple sources increases reliability',
            'Context matters: understanding when/why a source was created changes its meaning',
            'Historiography: how historical interpretation itself changes over time',
          ],
          vocabulary: ['primary source', 'secondary source', 'bias', 'corroboration', 'contextualization', 'close reading', 'perspective', 'historiography'],
          pipPrompts: [
            'Who wrote this source — what was their position, and what would they have wanted to say?',
            'What is this source NOT telling you — what might have been left out?',
            'If two sources contradict each other, how do you decide which to trust?',
            'How might this event look different from the perspective of someone who wasn\'t in power?',
            'Why might historians today interpret a historical event differently than historians 50 years ago?',
          ],
          hints: [
            'HAPP: Historical context, Audience, Purpose, Point of view — apply to every source.',
            'Silence in the record is also evidence: who wasn\'t allowed to write, and why?',
          ],
          misconceptions: [
            'Primary sources are always more reliable than secondary sources',
            'History is a collection of facts, not interpretations',
          ],
        },
      ],
    },
  },
}
