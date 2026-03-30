/**
 * Pip Knowledge Base — Geography
 *
 * Pip's geography strategy emphasizes spatial reasoning, comparison,
 * and connecting physical features to human decisions. Pip asks "why here?"
 * and "what does that location tell us?" rather than drilling map facts.
 */

export const geography = {
  subject: 'geography',
  label: 'Geography',
  bands: {

    // ─── K–2  (Ages 5–7) ────────────────────────────────────────────────────
    k2: {
      label: 'K–2 · Ages 5–7',
      topics: [
        {
          id: 'maps-globes',
          title: 'Maps & Globes',
          keywords: ['map', 'globe', 'compass', 'north', 'south', 'east', 'west', 'direction', 'legend', 'symbol', 'scale'],
          concepts: [
            'A globe is a 3D model of Earth; a map is a flat representation',
            'Maps use symbols and a legend/key to represent real things',
            'Cardinal directions: North, South, East, West',
            'Scale shows how map distances relate to real distances',
            'Different maps show different information (physical, political, weather)',
          ],
          vocabulary: ['map', 'globe', 'compass rose', 'legend', 'scale', 'cardinal directions', 'symbol', 'key'],
          pipPrompts: [
            'What is the difference between a globe and a flat map — when would you use each?',
            'What does the legend tell you — why do we need it?',
            'If north is at the top of this map, which direction is to the right?',
            'If the scale says 1 inch = 10 miles, what does 2 inches equal?',
            'What do the different colors on this map represent?',
          ],
          hints: [
            'The compass rose shows direction. The legend explains symbols.',
            'Never Eat Soggy Waffles — North, East, South, West going clockwise.',
          ],
          misconceptions: [
            'North is always "up" in the real world (north is a direction, not a physical position)',
            'All maps show the same thing (maps are made with a purpose — different types show different information)',
          ],
        },
        {
          id: 'continents-oceans',
          title: 'Continents & Oceans',
          keywords: ['continent', 'ocean', 'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica', 'Atlantic', 'Pacific', 'Indian', 'Arctic'],
          concepts: [
            '7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, South America',
            '5 oceans: Pacific, Atlantic, Indian, Arctic, Southern',
            'Oceans cover about 71% of Earth\'s surface',
            'The equator divides Northern and Southern Hemispheres',
            'Prime Meridian divides Eastern and Western Hemispheres',
          ],
          vocabulary: ['continent', 'ocean', 'hemisphere', 'equator', 'prime meridian'],
          pipPrompts: [
            'Can you point to where we live on the map — which continent is that?',
            'What ocean is between North America and Europe?',
            'The equator is an imaginary line — what does it divide?',
            'Which continent is at the South Pole?',
          ],
          hints: [
            'Continents are large landmasses. Oceans are large bodies of saltwater between them.',
          ],
          misconceptions: [
            'Australia is sometimes called a country and sometimes a continent (it is both)',
            'There are only 4 oceans (there are 5, including the Southern Ocean)',
          ],
        },
        {
          id: 'landforms-basic',
          title: 'Basic Landforms & Bodies of Water',
          keywords: ['mountain', 'valley', 'river', 'lake', 'ocean', 'island', 'peninsula', 'plain', 'desert', 'coast'],
          concepts: [
            'Landforms: mountains, valleys, plains, deserts, plateaus, islands',
            'Bodies of water: ocean, sea, lake, river, bay, gulf, strait',
            'Physical features affect where people settle and how they live',
            'Rivers flow downhill to larger bodies of water',
          ],
          vocabulary: ['mountain', 'valley', 'plain', 'plateau', 'island', 'peninsula', 'river', 'lake', 'bay', 'strait', 'coast'],
          pipPrompts: [
            'What\'s the difference between a lake and an ocean?',
            'Why do you think many cities are built near rivers?',
            'If water always flows downhill, where does a river end up?',
            'What\'s the difference between an island and a peninsula?',
          ],
          hints: [
            'An island is surrounded by water on all sides. A peninsula is connected to land on one side.',
          ],
          misconceptions: [
            'Deserts are always hot (Antarctica is technically a cold desert)',
          ],
        },
      ],
    },

    // ─── 3–5  (Ages 8–10) ──────────────────────────────────────────────────
    '35': {
      label: '3–5 · Ages 8–10',
      topics: [
        {
          id: 'regions-usa',
          title: 'U.S. Regions',
          keywords: ['region', 'Northeast', 'Southeast', 'Midwest', 'Southwest', 'West', 'state', 'capital', 'climate', 'economy'],
          concepts: [
            'The U.S. is divided into 5 major regions based on geography, climate, and culture',
            'Northeast: dense population, historical significance, manufacturing',
            'Southeast: warm climate, agriculture, Gulf Coast',
            'Midwest: Great Plains, agriculture, "breadbasket"',
            'Southwest: desert terrain, arid climate, Spanish cultural influence',
            'West: mountains, Pacific Coast, diverse climates',
            'Each region\'s physical geography shapes its economy and culture',
          ],
          vocabulary: ['region', 'climate', 'economy', 'physical geography', 'cultural geography', 'population density'],
          pipPrompts: [
            'Why do you think farming is more common in some regions than others?',
            'How does the physical geography of a region affect what people do for work?',
            'What makes the Midwest the "breadbasket" of the country?',
            'If you lived in the Southwest, how might your daily life be different from living in the Northeast?',
            'Why do you think the Northeast has such high population density?',
          ],
          hints: [
            'Think about climate + terrain → what it can grow or produce → what people do there.',
          ],
          misconceptions: [
            'The South is always warm (higher elevation areas like the Appalachians can be cold)',
          ],
        },
        {
          id: 'world-climates',
          title: 'World Climate Zones',
          keywords: ['climate', 'tropical', 'desert', 'temperate', 'polar', 'equator', 'latitude', 'biome', 'rainfall', 'temperature'],
          concepts: [
            'Climate = long-term weather patterns for a region',
            'Latitude is the primary driver of climate zones',
            'Near the equator: tropical (hot, wet year-round)',
            'Mid-latitudes: temperate (four seasons)',
            'Near poles: polar (cold year-round)',
            'Altitude also affects climate (mountains are cooler)',
            'Biomes: tropical rainforest, desert, grassland, temperate forest, taiga, tundra',
          ],
          vocabulary: ['climate', 'latitude', 'longitude', 'equator', 'tropical', 'temperate', 'polar', 'biome', 'altitude'],
          pipPrompts: [
            'Why is it hot near the equator and cold near the poles?',
            'How does altitude change climate — what happens as you climb a mountain?',
            'What is the difference between a climate zone and a biome?',
            'If a place has very little rainfall and high temperatures, what kind of biome is it?',
          ],
          hints: [
            'The sun\'s rays hit the equator most directly → most heat. Poles get indirect, slanted rays → less heat.',
            'Higher altitude = thinner air = less warmth = cooler climate, even near the equator.',
          ],
          misconceptions: [
            'Africa is all desert and savanna (it has rainforests, mountains, and Mediterranean zones too)',
          ],
        },
        {
          id: 'human-geography',
          title: 'Human Geography — Population & Culture',
          keywords: ['population', 'density', 'culture', 'religion', 'language', 'urban', 'rural', 'migration', 'push-pull', 'trade'],
          concepts: [
            'Population density = people per unit area',
            'People settle where resources are available: water, fertile soil, trade routes',
            'Push factors (why people leave) vs. pull factors (why people move somewhere)',
            'Culture: shared beliefs, practices, language, religion, food, and art',
            'Urbanization: movement from rural to urban areas',
          ],
          vocabulary: ['population density', 'urban', 'rural', 'migration', 'push factor', 'pull factor', 'culture', 'trade route'],
          pipPrompts: [
            'Why do you think some parts of the world have many more people than others?',
            'What would make someone leave their home country — and what would attract them to a new one?',
            'What does "population density" tell you that a raw population number doesn\'t?',
            'How does geography affect where cities develop?',
          ],
          hints: [
            'Push = problems at home. Pull = opportunities elsewhere.',
            'Dense populations: near rivers, coastlines, fertile plains. Why? Think resources.',
          ],
          misconceptions: [
            'Bigger countries always have more people (Russia vs. Bangladesh — size ≠ density)',
          ],
        },
      ],
    },

    // ─── 6–8  (Ages 11–13) ──────────────────────────────────────────────────
    '68': {
      label: '6–8 · Ages 11–13',
      topics: [
        {
          id: 'five-themes',
          title: 'Five Themes of Geography',
          keywords: ['location', 'place', 'region', 'movement', 'human-environment interaction', 'five themes', 'absolute location', 'relative location', 'latitude', 'longitude', 'coordinates'],
          concepts: [
            'Location: absolute (coordinates) vs. relative ("near the river")',
            'Place: physical and human characteristics that make a place unique',
            'Region: areas grouped by common characteristics (formal, functional, perceptual)',
            'Movement: how people, goods, and ideas flow between places',
            'Human-Environment Interaction: how humans modify and adapt to environments',
          ],
          vocabulary: ['absolute location', 'relative location', 'latitude', 'longitude', 'place', 'region', 'movement', 'human-environment interaction', 'coordinates'],
          pipPrompts: [
            'What is the absolute location of this place — can you give coordinates?',
            'What makes this place unique — both physically and culturally?',
            'What region does this place belong to — and is that a formal, functional, or perceptual region?',
            'How have the people in this place changed their environment — and how has the environment shaped them?',
            'What flows in and out of this place — people, goods, ideas?',
          ],
          hints: [
            'Absolute location is precise (40°N, 74°W). Relative location is descriptive ("north of the river").',
            'Human-environment interaction is a two-way street: humans change environment AND environment shapes human behavior.',
          ],
          misconceptions: [
            'Location and place mean the same thing in geography (location = where; place = what it\'s like)',
          ],
        },
        {
          id: 'geopolitics',
          title: 'Geopolitics & World Regions',
          keywords: ['geopolitics', 'country', 'nation', 'border', 'conflict', 'resource', 'economy', 'developed', 'developing', 'global', 'trade', 'Middle East', 'South Asia', 'Africa', 'Latin America'],
          concepts: [
            'A country is a political unit; a nation is a group with shared identity',
            'Borders are often contested and have historical roots in colonialism',
            'Natural resources shape a region\'s economy and international relationships',
            'Developed vs. developing: not a simple binary; refers to infrastructure, income, services',
            'Globalization: increased interconnection of economies, cultures, and politics',
          ],
          vocabulary: ['sovereignty', 'border', 'nation', 'state', 'geopolitics', 'natural resources', 'globalization', 'GDP', 'trade', 'colonialism'],
          pipPrompts: [
            'Why do you think borders are often the source of conflict?',
            'If a country has abundant oil, how does that shape its economy and politics?',
            'What\'s the difference between a "developed" and "developing" country — is that a useful distinction?',
            'How does colonialism\'s legacy still shape borders and economies today?',
            'What does "globalization" mean, and what are its advantages and disadvantages?',
          ],
          hints: [
            'Follow the resources: oil, water, arable land → why countries trade, ally, or conflict.',
            'Many borders were drawn by colonial powers without regard to ethnic or linguistic communities — trace the effects.',
          ],
          misconceptions: [
            'Africa is a country (it is a continent of 54 countries with enormous diversity)',
            'All conflict is religious — most is about resources, borders, and political power',
          ],
        },
        {
          id: 'physical-systems',
          title: 'Physical Geography — Plate Tectonics & Climate Systems',
          keywords: ['plate tectonics', 'Ring of Fire', 'ocean current', 'weather system', 'El Niño', 'monsoon', 'hurricane', 'topography', 'rain shadow'],
          concepts: [
            'Plate tectonics drive earthquakes, volcanoes, and mountain building',
            'Ring of Fire: Pacific plate boundaries with high seismic/volcanic activity',
            'Ocean currents redistribute heat globally (Gulf Stream warms Europe)',
            'Rain shadow effect: mountains force air to rise and drop rain, leaving dry leeward side',
            'Monsoon: seasonal reversal of wind patterns bringing heavy rainfall',
            'El Niño/La Niña: Pacific ocean temperature changes that affect global weather',
          ],
          vocabulary: ['tectonic plate', 'Ring of Fire', 'ocean current', 'rain shadow', 'monsoon', 'El Niño', 'topography', 'leeward', 'windward'],
          pipPrompts: [
            'Why are earthquakes and volcanoes concentrated in certain regions?',
            'How does the ocean affect the climate of nearby land areas?',
            'What happens to a cloud of air when it hits a mountain — why does one side get rain and the other stays dry?',
            'How might a change in Pacific ocean temperatures (El Niño) affect rainfall in South America?',
          ],
          hints: [
            'Rain shadow: windward side gets rain as air rises and cools. Leeward side is dry as air descends and warms.',
            'Ocean currents act like conveyor belts of heat — warmer currents warm coastal climates.',
          ],
          misconceptions: [
            'The weather in a place is caused only by nearby conditions (global systems like El Niño affect distant places)',
          ],
        },
      ],
    },

    // ─── 9–12  (Ages 14–18) ─────────────────────────────────────────────────
    '912': {
      label: '9–12 · Ages 14–18',
      topics: [
        {
          id: 'political-geography',
          title: 'Political Geography & Global Issues',
          keywords: ['sovereignty', 'globalization', 'international relations', 'United Nations', 'NATO', 'refugee', 'asylum', 'climate policy', 'trade agreement', 'development'],
          concepts: [
            'State sovereignty: the authority of a state over its territory and people',
            'International organizations: UN, NATO, WTO, WHO — roles and limits',
            'Refugee vs. migrant: legal distinctions and humanitarian implications',
            'Climate change as a geopolitical issue: resource competition, displacement',
            'Trade agreements and economic interdependence',
            'Human Development Index (HDI): a broader measure than GDP',
          ],
          vocabulary: ['sovereignty', 'international law', 'refugee', 'migrant', 'NGO', 'UN', 'HDI', 'globalization', 'trade deficit', 'sanction'],
          pipPrompts: [
            'What limits a nation\'s sovereignty — are there things even a sovereign state cannot do?',
            'What\'s the difference between a refugee and an economic migrant — why does the distinction matter legally?',
            'How might rising sea levels become a geopolitical issue, not just an environmental one?',
            'Why do countries join trade agreements if it means giving up some economic control?',
            'Is GDP the best measure of a country\'s wellbeing — what does it miss?',
          ],
          hints: [
            'Sovereignty is absolute in theory; in practice it is constrained by treaties, international law, and power.',
            'Climate change → droughts and floods → migration → border pressure → political conflict: trace the chain.',
          ],
          misconceptions: [
            'The United Nations can enforce its resolutions with military power (it relies on member states)',
            'Developed countries are always democratic and stable',
          ],
        },
        {
          id: 'economic-geography',
          title: 'Economic Geography',
          keywords: ['supply chain', 'globalization', 'outsourcing', 'economic development', 'comparative advantage', 'resource curse', 'urbanization', 'informal economy'],
          concepts: [
            'Comparative advantage: countries should specialize in what they produce most efficiently',
            'Global supply chains: goods involve inputs from many countries',
            'Resource curse: abundant natural resources can paradoxically slow development',
            'Urbanization and megacities: challenges and opportunities of rapid urban growth',
            'Informal economy: unregulated economic activity outside formal systems',
            'Core-periphery model: economic power concentrated in certain regions',
          ],
          vocabulary: ['comparative advantage', 'supply chain', 'outsourcing', 'resource curse', 'urbanization', 'megacity', 'informal economy', 'FDI', 'core-periphery'],
          pipPrompts: [
            'Why does it make sense for countries to trade even if one can produce everything more efficiently?',
            'Why might having abundant oil or diamonds actually harm a country\'s long-term development?',
            'What challenges come with rapid urbanization — what infrastructure is strained?',
            'Where in the supply chain of something you own every day do you think the most value is captured?',
          ],
          hints: [
            'Comparative advantage: even if Country A is better at BOTH things, trade still benefits both if each specializes.',
            'Resource curse: reliance on one export → volatile revenue → weak institutions → corruption.',
          ],
          misconceptions: [
            'Free trade always benefits all countries equally',
            'Economic development automatically leads to political stability',
          ],
        },
      ],
    },
  },
}
