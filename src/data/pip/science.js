/**
 * Pip Knowledge Base — Science
 *
 * Pip's science strategy emphasizes observation, hypothesis framing,
 * and the scientific method. Pip never confirms or denies a hypothesis —
 * Pip asks what evidence would support or challenge it.
 */

export const science = {
  subject: 'science',
  label: 'Science',
  bands: {

    // ─── K–2  (Ages 5–7) ────────────────────────────────────────────────────
    k2: {
      label: 'K–2 · Ages 5–7',
      topics: [
        {
          id: 'living-nonliving',
          title: 'Living & Non-Living Things',
          keywords: ['alive', 'living', 'dead', 'not alive', 'grow', 'breathe', 'plant', 'animal', 'rock', 'water'],
          concepts: [
            'Living things grow, reproduce, respond to environment, and need food/water/air',
            'Non-living things were never alive OR were once alive (dead)',
            'Plants are living but move differently than animals',
            'Basic needs: water, food, shelter, air',
          ],
          vocabulary: ['living', 'non-living', 'organism', 'grow', 'reproduce', 'habitat'],
          pipPrompts: [
            'Does that thing grow on its own?',
            'Does it need food or water to keep going?',
            'What makes you think it\'s alive — what are you noticing?',
            'Is a dead leaf living, non-living, or something in between?',
            'What would happen to it if it had no water for a long time?',
          ],
          hints: [
            'Ask yourself: does it grow? Does it eat or drink? Does it have babies?',
            'If yes to most of those — it\'s probably living.',
          ],
          misconceptions: [
            'Thinking fire is alive (it moves and needs oxygen but doesn\'t reproduce)',
            'Thinking dead things are non-living (they were living)',
            'Plants don\'t "eat," so children sometimes classify them as non-living',
          ],
        },
        {
          id: 'weather',
          title: 'Weather & Seasons',
          keywords: ['weather', 'rain', 'snow', 'sun', 'wind', 'cloud', 'hot', 'cold', 'season', 'temperature'],
          concepts: [
            'Weather is what\'s happening in the atmosphere right now',
            'Climate is the typical weather over a long time',
            'Seasons are caused by Earth\'s tilt, not distance from the sun',
            'Measuring weather: thermometer, rain gauge, wind vane',
          ],
          vocabulary: ['temperature', 'precipitation', 'humidity', 'forecast', 'thermometer', 'season'],
          pipPrompts: [
            'What do you see in the sky right now? What does that tell you about the weather?',
            'What\'s the difference between today\'s weather and what weather is usually like here?',
            'Why do you think it gets colder in winter — what might be causing that?',
            'How would you measure whether today is hotter than yesterday?',
          ],
          hints: [
            'Weather = right now. Climate = over many years.',
            'The seasons happen because Earth tilts toward or away from the sun, not because Earth moves closer.',
          ],
          misconceptions: [
            'Earth is closer to the sun in summer (it\'s actually the tilt)',
            'Clouds are made of steam or smoke',
          ],
        },
        {
          id: 'matter-states',
          title: 'States of Matter',
          keywords: ['solid', 'liquid', 'gas', 'melt', 'freeze', 'evaporate', 'boil', 'matter', 'state'],
          concepts: [
            'All matter is made of particles; their arrangement determines the state',
            'Solid: fixed shape and volume',
            'Liquid: fixed volume, takes the shape of its container',
            'Gas: fills any container, no fixed shape or volume',
            'Heat causes state changes',
          ],
          vocabulary: ['solid', 'liquid', 'gas', 'matter', 'particle', 'melt', 'freeze', 'evaporate', 'condense'],
          pipPrompts: [
            'What shape does water take when you pour it in a cup? What about ice?',
            'What happens to ice when it gets warm?',
            'Where do you think the water goes when a puddle dries up?',
            'Can you think of something that can be all three states — solid, liquid, and gas?',
          ],
          hints: [
            'Think about water: ice is solid, liquid water is liquid, steam is gas.',
            'The state changes when heat is added or removed.',
          ],
          misconceptions: [
            'Steam (water vapor) is visible — it\'s actually invisible; what you see is condensed droplets',
            'Gas has no weight (it does)',
          ],
        },
        {
          id: 'plants-basic',
          title: 'Plants & Their Parts',
          keywords: ['root', 'stem', 'leaf', 'flower', 'seed', 'plant', 'grow', 'photosynthesis', 'sunlight'],
          concepts: [
            'Plants make their own food using sunlight, water, and carbon dioxide',
            'Roots anchor and absorb water',
            'Stems transport water and nutrients',
            'Leaves are where photosynthesis happens',
            'Flowers produce seeds for reproduction',
          ],
          vocabulary: ['root', 'stem', 'leaf', 'flower', 'seed', 'photosynthesis', 'chlorophyll', 'nutrient'],
          pipPrompts: [
            'What do you think a plant needs to survive?',
            'What does each part of the plant do — could you guess the job of the root?',
            'Why do you think plants are green?',
            'Where does a plant get its energy from?',
            'What would happen to a plant kept in a dark room?',
          ],
          hints: [
            'Think about what each part looks like — the shape might give you a clue about its job.',
            'Roots go underground near water. Leaves face the sun. Think about why.',
          ],
          misconceptions: [
            'Plants "eat" soil (they absorb minerals from soil but make food from light/air/water)',
            'Plants breathe only at night (they do both photosynthesis and respiration)',
          ],
        },
      ],
    },

    // ─── 3–5  (Ages 8–10) ──────────────────────────────────────────────────
    '35': {
      label: '3–5 · Ages 8–10',
      topics: [
        {
          id: 'scientific-method',
          title: 'The Scientific Method',
          keywords: ['hypothesis', 'experiment', 'observation', 'conclusion', 'variable', 'data', 'test', 'predict'],
          concepts: [
            'Observation → question → hypothesis → experiment → data → conclusion',
            'A hypothesis is a testable prediction, not a guess',
            'Control variables: keep everything the same except what you\'re testing',
            'Evidence either supports or challenges a hypothesis — it doesn\'t "prove" it',
          ],
          vocabulary: ['hypothesis', 'variable', 'control', 'experiment', 'data', 'evidence', 'observation', 'conclusion'],
          pipPrompts: [
            'What question are you trying to answer?',
            'If your idea is right, what would you expect to see happen?',
            'What are you changing in your experiment — what are you keeping the same?',
            'What does your data show — does it support your hypothesis or challenge it?',
            'Could there be another explanation for what you observed?',
          ],
          hints: [
            'State your hypothesis as "If _____, then _____ because _____."',
            'Identify: what is the one thing you\'re changing (independent variable)?',
            'What are you measuring (dependent variable)?',
          ],
          misconceptions: [
            'A "failed" experiment is a mistake — actually, disproving a hypothesis is valuable',
            'The conclusion should always agree with the hypothesis',
            'You can test everything at once in a "fair" experiment',
          ],
        },
        {
          id: 'ecosystems',
          title: 'Ecosystems & Food Chains',
          keywords: ['food chain', 'food web', 'predator', 'prey', 'producer', 'consumer', 'decomposer', 'habitat', 'ecosystem'],
          concepts: [
            'Producers (plants) convert sunlight to energy; consumers eat producers or other consumers',
            'Decomposers break down dead matter and return nutrients to soil',
            'Food webs show the complexity of feeding relationships',
            'Energy is lost at each level — why food chains rarely exceed 4–5 links',
            'Removing one species affects the whole web',
          ],
          vocabulary: ['producer', 'consumer', 'decomposer', 'predator', 'prey', 'food chain', 'food web', 'energy', 'herbivore', 'carnivore', 'omnivore'],
          pipPrompts: [
            'Where does the energy at the bottom of a food chain originally come from?',
            'What would happen to the other animals if all the plants disappeared?',
            'What\'s the difference between a food chain and a food web?',
            'Why can\'t a food chain go on forever?',
            'What role do decomposers play — what would happen without them?',
          ],
          hints: [
            'Trace the arrows in a food chain — they show the direction energy flows.',
            'Energy decreases as you go up — that\'s why there are fewer top predators.',
          ],
          misconceptions: [
            'Arrows in a food chain point to "what eats what" rather than showing energy flow',
            'Decomposers are not part of the food chain (they are)',
          ],
        },
        {
          id: 'earth-layers',
          title: 'Earth\'s Structure & Landforms',
          keywords: ['crust', 'mantle', 'core', 'volcano', 'earthquake', 'plate', 'tectonic', 'erosion', 'weathering', 'landform'],
          concepts: [
            'Earth\'s layers: inner core, outer core, mantle, crust',
            'Tectonic plates move slowly on the mantle (convection)',
            'Plate boundaries cause volcanoes, earthquakes, and mountains',
            'Weathering breaks rocks down; erosion moves them',
            'Rock cycle: igneous → sedimentary → metamorphic (and back)',
          ],
          vocabulary: ['crust', 'mantle', 'core', 'tectonic plate', 'volcano', 'earthquake', 'erosion', 'weathering', 'igneous', 'sedimentary', 'metamorphic'],
          pipPrompts: [
            'If the Earth were cut in half, what layers would you see from outside to center?',
            'Why do you think volcanoes and earthquakes often occur in the same places?',
            'What\'s the difference between weathering a rock and eroding it?',
            'How might a mountain form over millions of years?',
            'What could turn a sedimentary rock into a metamorphic rock?',
          ],
          hints: [
            'Think about which layer is hottest and which is coolest.',
            'Tectonic plates move because of convection currents in the mantle — hot material rises, cools, and sinks.',
          ],
          misconceptions: [
            'Volcanoes erupt randomly — most erupt at plate boundaries',
            'Rocks are permanent — they cycle through forms over millions of years',
          ],
        },
        {
          id: 'human-body',
          title: 'Human Body Systems',
          keywords: ['body', 'system', 'organ', 'heart', 'lungs', 'digestive', 'circulatory', 'skeletal', 'muscle', 'brain', 'nervous'],
          concepts: [
            'Body systems work together; each has a primary job',
            'Circulatory: heart pumps blood carrying oxygen and nutrients',
            'Respiratory: lungs exchange oxygen for carbon dioxide',
            'Digestive: breaks food into nutrients the body can use',
            'Skeletal + muscular: structure, movement, protection',
            'Nervous: brain and nerves — control and communication',
          ],
          vocabulary: ['organ', 'system', 'cell', 'tissue', 'circulatory', 'respiratory', 'digestive', 'skeletal', 'muscular', 'nervous'],
          pipPrompts: [
            'What is the main job of the heart?',
            'When you breathe in, where does the oxygen go and what does the body do with it?',
            'How does food become energy your body can use?',
            'What would happen to the body if the nervous system stopped working?',
            'Why do you think body systems are connected to each other?',
          ],
          hints: [
            'Each system has a key organ — heart for circulatory, lungs for respiratory, brain for nervous.',
            'Follow the path: where does oxygen/blood/food go step by step?',
          ],
          misconceptions: [
            'The heart is on the left side (it\'s in the center, slightly left)',
            'We breathe in oxygen and breathe out only carbon dioxide (we also breathe out nitrogen, water vapor)',
          ],
        },
      ],
    },

    // ─── 6–8  (Ages 11–13) ──────────────────────────────────────────────────
    '68': {
      label: '6–8 · Ages 11–13',
      topics: [
        {
          id: 'cells',
          title: 'Cells & Genetics',
          keywords: ['cell', 'DNA', 'gene', 'chromosome', 'mitosis', 'meiosis', 'nucleus', 'protein', 'trait', 'heredity'],
          concepts: [
            'Cells are the basic unit of life; all organisms are made of cells',
            'Cell organelles: nucleus (DNA), mitochondria (energy), ribosomes (protein synthesis)',
            'DNA → RNA → protein (central dogma)',
            'Genes are segments of DNA that code for traits',
            'Mitosis: asexual cell division for growth; meiosis: produces sex cells',
            'Dominant vs. recessive alleles; Punnett squares',
          ],
          vocabulary: ['cell', 'organelle', 'nucleus', 'mitochondria', 'DNA', 'gene', 'chromosome', 'allele', 'dominant', 'recessive', 'trait', 'mitosis', 'meiosis'],
          pipPrompts: [
            'What is the nucleus\'s job inside a cell?',
            'If DNA is the instruction book, what does a gene represent?',
            'What\'s the difference between mitosis and meiosis — why does the body need both?',
            'If a trait is recessive, when would it show up in an organism?',
            'Can you set up a Punnett square? What does each box represent?',
          ],
          hints: [
            'Mitosis: one cell becomes two identical cells (growth, repair).',
            'Meiosis: one cell becomes four unique cells with half the chromosomes (reproduction).',
            'Punnett square: write parent alleles on the top and side; fill boxes by combining.',
          ],
          misconceptions: [
            'Dominant traits are more common in the population (not necessarily)',
            'You get all your traits from one parent',
            'Mutations are always harmful (many are neutral; some are beneficial)',
          ],
        },
        {
          id: 'forces-motion',
          title: 'Forces & Motion',
          keywords: ['force', 'motion', 'gravity', 'friction', 'Newton', 'acceleration', 'mass', 'weight', 'inertia', 'velocity', 'speed'],
          concepts: [
            'Newton\'s 1st Law: objects at rest/motion stay that way unless acted on',
            'Newton\'s 2nd Law: F = ma (force = mass × acceleration)',
            'Newton\'s 3rd Law: every action has an equal and opposite reaction',
            'Gravity: universal attraction between masses',
            'Friction opposes motion; it converts kinetic energy to heat',
            'Weight = mass × gravity (not the same as mass)',
          ],
          vocabulary: ['force', 'mass', 'weight', 'gravity', 'friction', 'inertia', 'acceleration', 'velocity', 'Newton'],
          pipPrompts: [
            'What forces are acting on this object — can you name all of them?',
            'If the net force is zero, what does Newton\'s 1st Law tell you will happen?',
            'If you double the force and keep the mass the same, what happens to acceleration?',
            'What\'s the difference between mass and weight?',
            'Can you identify the action and reaction forces in this scenario?',
          ],
          hints: [
            'Draw a free body diagram: arrows showing all forces on the object.',
            'Net force = sum of all forces considering direction.',
            'F = ma means: more force = more acceleration; more mass = less acceleration.',
          ],
          misconceptions: [
            'Objects in motion need a constant force to keep moving (they don\'t — that\'s what inertia means)',
            'Heavier objects fall faster (no — gravity accelerates all objects equally, ignoring air resistance)',
            'Mass and weight are the same thing',
          ],
        },
        {
          id: 'chemistry-intro',
          title: 'Matter & Chemical Reactions',
          keywords: ['atom', 'element', 'molecule', 'compound', 'reaction', 'periodic table', 'bond', 'acid', 'base', 'pH', 'physical change', 'chemical change'],
          concepts: [
            'Atoms → molecules → compounds',
            'Elements: pure substances with one type of atom',
            'Chemical change creates new substances; physical change doesn\'t',
            'Conservation of mass: atoms are rearranged, not created or destroyed',
            'Acids (low pH), bases (high pH), neutral (pH 7)',
            'Indicators of a chemical reaction: color change, gas, precipitate, heat/light',
          ],
          vocabulary: ['atom', 'element', 'compound', 'molecule', 'bond', 'reaction', 'reactant', 'product', 'pH', 'acid', 'base', 'conservation of mass'],
          pipPrompts: [
            'What\'s the difference between a physical change and a chemical change?',
            'How do you know a chemical reaction has occurred — what clues can you look for?',
            'In a chemical equation, what do the reactants and products represent?',
            'What does "conservation of mass" mean for what goes in vs. what comes out of a reaction?',
            'Where would water (H₂O) sit on a pH scale, and why?',
          ],
          hints: [
            'Physical change: same substance, different form (ice → water).',
            'Chemical change: new substances formed (burning, rusting, baking).',
            'Balance an equation by counting atoms on each side — they must match.',
          ],
          misconceptions: [
            'Burning makes something disappear (mass is conserved — it becomes gases, ash)',
            'All chemical reactions produce fire or smoke',
          ],
        },
        {
          id: 'astronomy',
          title: 'Astronomy & Space',
          keywords: ['solar system', 'planet', 'star', 'moon', 'orbit', 'galaxy', 'universe', 'gravity', 'light year', 'eclipse'],
          concepts: [
            'Solar system: Sun + 8 planets + moons + asteroids + comets',
            'Planets orbit the Sun due to gravity; moons orbit planets',
            'Stars are massive balls of plasma undergoing nuclear fusion',
            'Light year: distance light travels in a year (~9.46 trillion km)',
            'Galaxy: billions of stars; Milky Way is our galaxy',
            'Solar eclipse: Moon blocks Sun; lunar eclipse: Earth blocks Sun\'s light from Moon',
          ],
          vocabulary: ['orbit', 'revolution', 'rotation', 'gravity', 'star', 'planet', 'galaxy', 'light year', 'eclipse', 'nuclear fusion'],
          pipPrompts: [
            'What keeps planets in orbit around the Sun instead of flying off into space?',
            'What\'s the difference between a planet\'s rotation and its revolution?',
            'Why does the Moon seem to change shape throughout the month?',
            'How is a solar eclipse different from a lunar eclipse?',
            'If a star is 10 light years away, what does that tell you about the light you see from it tonight?',
          ],
          hints: [
            'Rotation = spinning on its own axis (day/night). Revolution = orbiting another body (year).',
            'Moon phases: we see different lit portions as the Moon orbits Earth.',
          ],
          misconceptions: [
            'The Sun is on fire (it\'s nuclear fusion, not combustion)',
            'There is no gravity in space (there is — the ISS is in constant free fall)',
            'Stars twinkle (the twinkling is from Earth\'s atmosphere)',
          ],
        },
      ],
    },

    // ─── 9–12  (Ages 14–18) ─────────────────────────────────────────────────
    '912': {
      label: '9–12 · Ages 14–18',
      topics: [
        {
          id: 'evolution',
          title: 'Evolution & Natural Selection',
          keywords: ['evolution', 'natural selection', 'adaptation', 'mutation', 'species', 'Darwin', 'fossil', 'common ancestor', 'survival of the fittest'],
          concepts: [
            'Natural selection: organisms with advantageous traits survive and reproduce more',
            'Variation exists within populations; some variation is heritable',
            'Mutations introduce new variation; most are neutral',
            'Speciation: populations diverge until they can no longer interbreed',
            'Fossil record and comparative anatomy provide evidence',
            'Evolution is change in allele frequencies over generations',
          ],
          vocabulary: ['adaptation', 'natural selection', 'mutation', 'allele frequency', 'speciation', 'fossil', 'common ancestor', 'selective pressure'],
          pipPrompts: [
            'What does "survival of the fittest" actually mean — is it about strength?',
            'If a mutation arises, what determines whether it spreads through a population?',
            'What kinds of evidence support the idea that species share common ancestors?',
            'What is a selective pressure — can you give an example from a real ecosystem?',
            'How is natural selection different from selective breeding?',
          ],
          hints: [
            '"Fitness" means reproductive success, not physical strength.',
            'Natural selection acts on existing variation — it doesn\'t create variation on demand.',
          ],
          misconceptions: [
            'Organisms evolve because they "want" or "need" to adapt',
            'Evolution always leads to more complexity',
            '"Just a theory" misunderstands the scientific meaning of theory',
          ],
        },
        {
          id: 'chemistry-advanced',
          title: 'Chemistry — Stoichiometry & Thermodynamics',
          keywords: ['mole', 'stoichiometry', 'molar mass', 'enthalpy', 'entropy', 'Gibbs free energy', 'equilibrium', 'Le Chatelier', 'electronegativity', 'bonding'],
          concepts: [
            'Mole: 6.022×10²³ particles (Avogadro\'s number)',
            'Stoichiometry uses molar ratios from balanced equations',
            'Enthalpy (ΔH): heat energy of a reaction; exothermic (–), endothermic (+)',
            'Entropy (ΔS): measure of disorder',
            'Gibbs free energy (ΔG = ΔH – TΔS) predicts spontaneity',
            'Equilibrium: forward and reverse rates equal (Le Chatelier\'s Principle)',
          ],
          vocabulary: ['mole', 'stoichiometry', 'enthalpy', 'entropy', 'Gibbs free energy', 'spontaneous', 'equilibrium', 'Le Chatelier'],
          pipPrompts: [
            'What does the mole allow chemists to do that counting individual atoms can\'t?',
            'If a reaction is exothermic, what does that tell you about the energy of the products vs. reactants?',
            'What happens to equilibrium if you increase the concentration of a reactant (Le Chatelier)?',
            'A reaction has negative ΔH and positive ΔS — what does ΔG tell you?',
            'How do you convert grams to moles to molecules in a stoichiometry problem?',
          ],
          hints: [
            'Steps: grams → moles (÷ molar mass) → moles of target (× ratio) → grams (× molar mass).',
            'Spontaneous when ΔG < 0: both ΔH negative and ΔS positive always gives spontaneous.',
          ],
          misconceptions: [
            'Spontaneous means fast (spontaneous = thermodynamically favorable, not fast)',
            'Equilibrium means equal amounts of reactants and products',
          ],
        },
        {
          id: 'physics-advanced',
          title: 'Physics — Energy, Waves & Electricity',
          keywords: ['energy', 'kinetic', 'potential', 'wave', 'frequency', 'wavelength', 'circuit', 'voltage', 'current', 'resistance', 'Ohm'],
          concepts: [
            'Conservation of energy: energy converts form, not created or destroyed',
            'KE = ½mv²; GPE = mgh',
            'Waves: amplitude (height), frequency (cycles/sec), wavelength',
            'Wave speed = frequency × wavelength',
            'EM spectrum: radio → microwave → infrared → visible → UV → X-ray → gamma',
            'Ohm\'s Law: V = IR; series vs. parallel circuits',
          ],
          vocabulary: ['kinetic energy', 'potential energy', 'conservation', 'wave', 'amplitude', 'frequency', 'wavelength', 'voltage', 'current', 'resistance', 'circuit'],
          pipPrompts: [
            'As a rollercoaster climbs, what happens to its potential and kinetic energy?',
            'What\'s the difference between a wave\'s frequency and its amplitude?',
            'In a series circuit, what happens to the other bulbs if one burns out?',
            'How does Ohm\'s Law relate voltage, current, and resistance?',
            'Why does doubling a wave\'s frequency halve its wavelength (if speed stays constant)?',
          ],
          hints: [
            'At the top of a hill: max potential, min kinetic. At the bottom: max kinetic, min potential.',
            'V = IR: voltage is the "push," resistance is the "resistance to push," current is "flow."',
          ],
          misconceptions: [
            'Electricity is used up in a circuit (it\'s transformed to heat/light but charge is conserved)',
            'Sound is an electromagnetic wave (it\'s a mechanical wave — needs a medium)',
          ],
        },
        {
          id: 'environmental-science',
          title: 'Environmental Science & Climate',
          keywords: ['climate change', 'greenhouse gas', 'carbon cycle', 'biodiversity', 'sustainability', 'renewable', 'fossil fuel', 'nitrogen cycle', 'water cycle'],
          concepts: [
            'Greenhouse effect: gases trap heat; essential, but enhanced by human activity',
            'Carbon cycle: photosynthesis, respiration, combustion, decomposition',
            'Nitrogen cycle: fixation → nitrification → assimilation → denitrification',
            'Water cycle: evaporation → condensation → precipitation → runoff',
            'Biodiversity provides ecosystem stability and resilience',
            'Renewable vs. non-renewable energy sources',
          ],
          vocabulary: ['greenhouse effect', 'carbon cycle', 'nitrogen cycle', 'water cycle', 'biodiversity', 'sustainability', 'renewable energy'],
          pipPrompts: [
            'How does burning fossil fuels affect the carbon cycle?',
            'What is the difference between weather and climate change?',
            'Why might losing a species decrease ecosystem resilience?',
            'What makes an energy source "renewable" — what does it renew from?',
            'How do human decisions affect the nitrogen cycle, and why might that matter for water quality?',
          ],
          hints: [
            'The greenhouse effect is natural and necessary — the concern is the enhanced version from human CO₂.',
            'Bioaccumulation: toxins concentrate as they move up the food chain.',
          ],
          misconceptions: [
            'The ozone hole causes climate change (related but separate issues)',
            'Renewable energy has no environmental footprint',
          ],
        },
      ],
    },
  },
}
