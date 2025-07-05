// src/data/quizzes.js

export const categories = [
  // --- BIOLOGY CATEGORY ---
  {
    id: 'biology',
    name: 'Biology',
    description: 'Explore the living world, from microscopic cells to vast ecosystems.',
    imageUrl: '/Biology.png',
    quizzes: [
      {
        id: 'bio-cell-basics',
        title: 'Cell Biology Basics',
        description: 'Fundamental concepts of prokaryotic and eukaryotic cells.',
        questions: [
          { text: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'], correctAnswer: 'Mitochondria' },
          { text: 'Which organelle is responsible for protein synthesis?', options: ['Mitochondria', 'Chloroplast', 'Ribosome', 'Lysosome'], correctAnswer: 'Ribosome' },
          { text: 'What is the main component of plant cell walls?', options: ['Chitin', 'Peptidoglycan', 'Cellulose', 'Keratin'], correctAnswer: 'Cellulose' },
          { text: 'Which type of cell lacks a true nucleus?', options: ['Eukaryotic', 'Prokaryotic', 'Animal', 'Plant'], correctAnswer: 'Prokaryotic' },
          { text: 'What controls the movement of substances into and out of the cell?', options: ['Cell wall', 'Cytoplasm', 'Cell membrane', 'Nucleolus'], correctAnswer: 'Cell membrane' },
          { text: 'Which process do plant cells use to convert light energy into chemical energy?', options: ['Respiration', 'Fermentation', 'Photosynthesis', 'Glycolysis'], correctAnswer: 'Photosynthesis' },
          { text: 'Where is DNA primarily located in a eukaryotic cell?', options: ['Mitochondria', 'Cytoplasm', 'Nucleus', 'Vacuole'], correctAnswer: 'Nucleus' },
          { text: 'What are the two main types of cells?', options: ['Animal and Plant', 'Bacterial and Fungal', 'Prokaryotic and Eukaryotic', 'Somatic and Germ'], correctAnswer: 'Prokaryotic and Eukaryotic' },
          { text: 'Which organelle is involved in detoxification and lipid synthesis?', options: ['Golgi apparatus', 'Rough ER', 'Smooth ER', 'Peroxisome'], correctAnswer: 'Smooth ER' },
          { text: 'What is the gel-like substance that fills the cell?', options: ['Nucleoplasm', 'Mitochondrial matrix', 'Cytosol', 'Cell sap'], correctAnswer: 'Cytosol' },
        ],
      },
      {
        id: 'bio-genetics',
        title: 'Introduction to Genetics',
        description: 'Heredity, DNA, and genetic engineering.',
        questions: [
          { text: 'What is the basic unit of heredity?', options: ['Cell', 'Organ', 'Gene', 'Protein'], correctAnswer: 'Gene' },
          { text: 'Which base pairs with Adenine in DNA?', options: ['Guanine', 'Cytosine', 'Thymine', 'Uracil'], correctAnswer: 'Thymine' },
          { text: 'What is the process of copying DNA into RNA called?', options: ['Replication', 'Translation', 'Transcription', 'Mutation'], correctAnswer: 'Transcription' },
          { text: 'Who are credited with discovering the structure of DNA?', options: ['Louis Pasteur', 'Gregor Mendel', 'Watson and Crick', 'Charles Darwin'], correctAnswer: 'Watson and Crick' },
          { text: 'A change in a DNA sequence is called a...', options: ['Replication', 'Transcription', 'Translation', 'Mutation'], correctAnswer: 'Mutation' },
          { text: 'What does homozygous mean in genetics?', options: ['Two different alleles', 'Two identical alleles', 'One dominant allele', 'One recessive allele'], correctAnswer: 'Two identical alleles' },
          { text: 'What is the observable trait of an organism?', options: ['Genotype', 'Phenotype', 'Allele', 'Chromosome'], correctAnswer: 'Phenotype' },
          { text: 'The process by which mRNA is decoded and a protein is produced is...', options: ['Transcription', 'Replication', 'Translation', 'Mutation'], correctAnswer: 'Translation' },
          { text: 'Which type of RNA carries amino acids to the ribosome?', options: ['mRNA', 'rRNA', 'tRNA', 'snRNA'], correctAnswer: 'tRNA' },
          { text: 'What is a Punnett Square used for?', options: ['Measuring cell size', 'Predicting genetic crosses', 'Analyzing protein structures', 'Observing bacterial growth'], correctAnswer: 'Predicting genetic crosses' },
        ],
      },
      {
        id: 'bio-ecology',
        title: 'Ecology and Ecosystems',
        description: 'Interactions between organisms and their environment.',
        questions: [
          { text: 'What is a group of individuals of the same species living in the same area?', options: ['Community', 'Ecosystem', 'Population', 'Biome'], correctAnswer: 'Population' },
          { text: 'Organisms that produce their own food are called?', options: ['Consumers', 'Decomposers', 'Producers', 'Heterotrophs'], correctAnswer: 'Producers' },
          { text: 'What is the role of decomposers in an ecosystem?', options: ['Produce food', 'Consume other organisms', 'Break down dead organic matter', 'Regulate climate'], correctAnswer: 'Break down dead organic matter' },
          { text: 'The specific role an organism plays in its environment is its...', options: ['Habitat', 'Niche', 'Biome', 'Community'], correctAnswer: 'Niche' },
          { text: 'Which term describes a stable, mature ecosystem?', options: ['Pioneer community', 'Succession', 'Climax community', 'Disturbance'], correctAnswer: 'Climax community' },
          { text: 'What are the main components of a food chain?', options: ['Producers, Consumers, Decomposers', 'Plants, Animals, Fungi', 'Sun, Water, Soil', 'Carbon, Oxygen, Nitrogen'], correctAnswer: 'Producers, Consumers, Decomposers' },
          { text: 'Which of the following is an example of a biotic factor?', options: ['Temperature', 'Water', 'Predators', 'Sunlight'], correctAnswer: 'Predators' },
          { text: 'What is biodiversity?', options: ['The variety of life on Earth', 'The number of different ecosystems', 'The total biomass of all organisms', 'The study of biological interactions'], correctAnswer: 'The variety of life on Earth' },
          { text: 'Which cycle involves the processes of evaporation, condensation, and precipitation?', options: ['Carbon cycle', 'Nitrogen cycle', 'Water cycle', 'Phosphorus cycle'], correctAnswer: 'Water cycle' },
          { text: 'An area where an organism lives is its...', options: ['Niche', 'Habitat', 'Biome', 'Ecosystem'], correctAnswer: 'Habitat' },
        ],
      },
      { id: 'bio-human-body', title: 'Human Body Systems', description: 'Explore the anatomy and physiology of the human body.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'bio-evolution', title: 'Evolutionary Theory', description: 'Natural selection, adaptation, and the history of life.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'bio-plants', title: 'Plant Biology', description: 'Photosynthesis, plant structures, and reproduction.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- PHYSICS CATEGORY ---
  {
    id: 'physics',
    name: 'Physics',
    description: 'Investigate the fundamental principles of energy, matter, and motion.',
    imageUrl: '/Physics.png',
    quizzes: [
      {
        id: 'phy-mechanics',
        title: 'Classical Mechanics',
        description: 'Forces, motion, energy, and momentum.',
        questions: [
          { text: 'What is the SI unit of force?', options: ['Joule', 'Watt', 'Newton', 'Volt'], correctAnswer: 'Newton' },
          { text: 'Which law states that for every action, there is an equal and opposite reaction?', options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"], correctAnswer: "Newton's Third Law" },
          { text: 'What is the formula for kinetic energy?', options: ['mgh', '1/2 mv^2', 'Fs', 'P/t'], correctAnswer: '1/2 mv^2' },
          { text: 'What is acceleration?', options: ['Rate of change of position', 'Rate of change of velocity', 'Rate of change of force', 'Rate of change of energy'], correctAnswer: 'Rate of change of velocity' },
          { text: 'Which of the following is a scalar quantity?', options: ['Velocity', 'Force', 'Distance', 'Acceleration'], correctAnswer: 'Distance' },
          { text: 'The force that opposes motion between two surfaces in contact is called?', options: ['Tension', 'Gravity', 'Friction', 'Normal force'], correctAnswer: 'Friction' },
          { text: 'What is the unit of power?', options: ['Joule', 'Watt', 'Newton', 'Volt'], correctAnswer: 'Watt' },
          { text: 'According to Hooke\'s Law, force is proportional to?', options: ['Mass', 'Acceleration', 'Displacement', 'Velocity'], correctAnswer: 'Displacement' },
          { text: 'What is the principle of conservation of energy?', options: ['Energy can be created', 'Energy can be destroyed', 'Energy cannot be created or destroyed', 'Energy is always lost as heat'], correctAnswer: 'Energy cannot be created or destroyed' },
          { text: 'What is the formula for work done?', options: ['Force x time', 'Force x distance', 'Mass x acceleration', 'Power x time'], correctAnswer: 'Force x distance' },
        ],
      },
      { id: 'phy-electricity', title: 'Electricity & Magnetism', description: 'Circuits, currents, and magnetic fields.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'phy-waves', title: 'Waves and Optics', description: 'Sound, light, and wave phenomena.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'phy-thermodynamics', title: 'Thermodynamics', description: 'Heat, temperature, and energy transfer.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'phy-modern', title: 'Modern Physics', description: 'Relativity, quantum mechanics, and nuclear physics.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'phy-astronomy', title: 'Astrophysics Basics', description: 'Stars, galaxies, and the universe.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- CHEMISTRY CATEGORY ---
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Delve into the composition, structure, and properties of matter.',
    imageUrl: '/chemistry.png',
    quizzes: [
      {
        id: 'chem-atoms',
        title: 'Atomic Structure',
        description: 'Protons, neutrons, electrons, and isotopes.',
        questions: [
          { text: 'What is the chemical symbol for water?', options: ['H2O2', 'CO2', 'H2O', 'O2'], correctAnswer: 'H2O' },
          { text: 'Which pH value indicates a neutral solution?', options: ['0', '7', '14', '5'], correctAnswer: '7' },
          { text: 'What is the atomic number of an element defined by?', options: ['Number of neutrons', 'Number of protons', 'Number of electrons', 'Mass number'], correctAnswer: 'Number of protons' },
          { text: 'Which subatomic particle has a negative charge?', options: ['Proton', 'Neutron', 'Electron', 'Photon'], correctAnswer: 'Electron' },
          { text: 'What are isotopes?', options: ['Elements with different atomic numbers', 'Atoms of the same element with different numbers of neutrons', 'Ions with different charges', 'Compounds with different structures'], correctAnswer: 'Atoms of the same element with different numbers of neutrons' },
          { text: 'The outermost electron shell of an atom is called the...', options: ['Inner shell', 'Valence shell', 'Core shell', 'Ground state'], correctAnswer: 'Valence shell' },
          { text: 'What is the process of losing electrons called?', options: ['Reduction', 'Oxidation', 'Neutralization', 'Precipitation'], correctAnswer: 'Oxidation' },
          { text: 'Which type of bond involves the sharing of electrons?', options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'], correctAnswer: 'Covalent' },
          { text: 'What is the law of conservation of mass?', options: ['Mass can be created', 'Mass can be destroyed', 'Mass cannot be created or destroyed', 'Mass is always converted to energy'], correctAnswer: 'Mass cannot be created or destroyed' },
          { text: 'What is a catalyst?', options: ['A substance consumed in a reaction', 'A substance that speeds up a reaction without being consumed', 'A product of a reaction', 'A type of bond'], correctAnswer: 'A substance that speeds up a reaction without being consumed' },
        ],
      },
      { id: 'chem-reactions', title: 'Chemical Reactions & Stoichiometry', description: 'Balancing equations and reaction types.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'chem-organic', title: 'Organic Chemistry Intro', description: 'Carbon compounds and their properties.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'chem-acid-base', title: 'Acids, Bases, & pH', description: 'Properties and reactions of acids and bases.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'chem-thermo', title: 'Chemical Thermodynamics', description: 'Energy changes in chemical reactions.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'chem-gases', title: 'Gases and Their Laws', description: 'Ideal gas law and gas properties.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- HISTORY CATEGORY (Expanded) ---
  {
    id: 'history',
    name: 'History',
    description: 'Explore the annals of time, from ancient civilizations to modern conflicts.',
    imageUrl: '/history.png',
    quizzes: [
      {
        id: 'hist-ancient-civ',
        title: 'Ancient Civilizations',
        description: 'Test your knowledge of Egypt, Rome, and Greece.',
        questions: [
          { text: 'Which ancient civilization built the pyramids?', options: ['Roman', 'Greek', 'Egyptian', 'Mayan'], correctAnswer: 'Egyptian' },
          { text: 'Who was the first emperor of Rome?', options: ['Julius Caesar', 'Augustus', 'Nero', 'Constantine'], correctAnswer: 'Augustus' },
          { text: 'What river was central to ancient Egyptian civilization?', options: ['Tigris', 'Euphrates', 'Nile', 'Indus'], correctAnswer: 'Nile' },
          { text: 'Which city was the capital of the Byzantine Empire?', options: ['Rome', 'Athens', 'Constantinople', 'Alexandria'], correctAnswer: 'Constantinople' },
          { text: 'The ancient city of Babylon was located in modern-day...', options: ['Egypt', 'Greece', 'Iraq', 'India'], correctAnswer: 'Iraq' },
          { text: 'Who was the Greek goddess of wisdom and warfare?', options: ['Hera', 'Aphrodite', 'Athena', 'Artemis'], correctAnswer: 'Athena' },
          { text: 'The Roman Colosseum was primarily used for what purpose?', options: ['Debates', 'Marketplace', 'Gladiatorial contests', 'Religious ceremonies'], correctAnswer: 'Gladiatorial contests' },
          { text: 'Which ancient civilization developed the concept of zero?', options: ['Roman', 'Greek', 'Mayan', 'Chinese'], correctAnswer: 'Mayan' },
          { text: 'The Silk Road connected which two major regions?', options: ['Europe and Africa', 'Asia and Europe', 'Americas and Asia', 'Africa and Asia'], correctAnswer: 'Asia and Europe' },
          { text: 'What was the writing system of ancient Egypt?', options: ['Cuneiform', 'Hieroglyphics', 'Alphabetic', 'Sanskrit'], correctAnswer: 'Hieroglyphics' },
        ],
      },
      {
        id: 'hist-french-rev',
        title: 'French Revolution',
        description: 'Key events, figures, and impacts of the French Revolution.',
        questions: [
          { text: 'What year did the French Revolution begin?', options: ['1776', '1789', '1804', '1815'], correctAnswer: '1789' },
          { text: 'Who was the king of France when the Revolution began?', options: ['Louis XIV', 'Louis XV', 'Louis XVI', 'Napoleon Bonaparte'], correctAnswer: 'Louis XVI' },
          { text: 'What was the Bastille?', options: ['A palace', 'A prison', 'A market', 'A church'], correctAnswer: 'A prison' },
          { text: 'The "Reign of Terror" was led by which figure?', options: ['Napoleon Bonaparte', 'Maximilien Robespierre', 'Georges Danton', 'Jean-Paul Marat'], correctAnswer: 'Maximilien Robespierre' },
          { text: 'What document, inspired by the American Declaration of Independence, was a key product of the early revolution?', options: ['Magna Carta', 'Bill of Rights', 'Declaration of the Rights of Man and of the Citizen', 'The Social Contract'], correctAnswer: 'Declaration of the Rights of Man and of the Citizen' },
          { text: 'What device was used for public executions during the Revolution?', options: ['Gallows', 'Firing squad', 'Guillotine', 'Stoning'], correctAnswer: 'Guillotine' },
          { text: 'The Declaration of the Rights of Man and of the Citizen proclaimed what three main principles?', options: ['Liberty, Equality, Brotherhood', 'Faith, Hope, Charity', 'Order, Security, Prosperity', 'Justice, Freedom, Peace'], correctAnswer: 'Liberty, Equality, Brotherhood' },
          { text: 'Which war preceded and contributed to the French financial crisis?', options: ['Seven Years\' War', 'American Revolutionary War', 'Napoleonic Wars', 'Thirty Years\' War'], correctAnswer: 'American Revolutionary War' },
          { text: 'What was the name of the new calendar introduced by the revolutionaries?', options: ['Gregorian Calendar', 'Julian Calendar', 'Republican Calendar', 'Napoleonic Calendar'], correctAnswer: 'Republican Calendar' },
          { text: 'Who famously stated "Let them eat cake!" (though likely misattributed)?', options: ['Marie Antoinette', 'Madame de Pompadour', 'Catherine the Great', 'Queen Victoria'], correctAnswer: 'Marie Antoinette' },
        ],
      },
      { id: 'hist-india-revolt', title: 'India: Revolt of 1857', description: 'Causes, events, and impact of the First War of Independence.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hist-world-war-i', title: 'World War I', description: 'Causes, key battles, and consequences of the Great War.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hist-cold-war', title: 'Cold War Era', description: 'Geopolitical tensions and events of the Cold War.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hist-modern-india', title: 'Modern Indian History', description: 'From independence to the present day.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- GEOGRAPHY CATEGORY ---
  {
    id: 'geography',
    name: 'Geography',
    description: 'Explore the Earth\'s landscapes, countries, climates, and cultures.',
    imageUrl: '/geography.png',
    quizzes: [
      {
        id: 'geo-world-capitals',
        title: 'World Capitals',
        description: 'Match the country to its capital city.',
        questions: [
          { text: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Rome', 'Paris'], correctAnswer: 'Paris' },
          { text: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], correctAnswer: 'Tokyo' },
          { text: 'Which country is known as the "Land of the Rising Sun"?', options: ['China', 'South Korea', 'Vietnam', 'Japan'], correctAnswer: 'Japan' },
          { text: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], correctAnswer: 'Canberra' },
          { text: 'The capital of Canada is...', options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'], correctAnswer: 'Ottawa' },
          { text: 'Which capital city is known as the "Eternal City"?', options: ['Athens', 'Istanbul', 'Jerusalem', 'Rome'], correctAnswer: 'Rome' },
          { text: 'What is the capital of Brazil?', options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Buenos Aires'], correctAnswer: 'Brasília' },
          { text: 'Which European capital city is split by the River Spree?', options: ['Paris', 'London', 'Berlin', 'Rome'], correctAnswer: 'Berlin' },
          { text: 'What is the capital of Egypt?', options: ['Alexandria', 'Luxor', 'Cairo', 'Giza'], correctAnswer: 'Cairo' },
          { text: 'The capital of New Zealand is...', options: ['Auckland', 'Christchurch', 'Wellington', 'Queenstown'], correctAnswer: 'Wellington' },
        ],
      },
      { id: 'geo-physical', title: 'Physical Geography', description: 'Mountains, rivers, oceans, and landforms.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'geo-human', title: 'Human Geography', description: 'Population, culture, and urban studies.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'geo-climate', title: 'Climate & Weather', description: 'Understanding atmospheric phenomena and climate zones.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'geo-continents', title: 'Continents & Oceans', description: 'Facts about Earth\'s major landmasses and water bodies.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'geo-natural-disasters', title: 'Natural Disasters', description: 'Earthquakes, volcanoes, floods, and their impacts.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- POLITICAL SCIENCE CATEGORY ---
  {
    id: 'political-science',
    name: 'Political Science',
    description: 'Study governments, public policies, political behavior, and political theory.',
    imageUrl: '/Politics.png',
    quizzes: [
      { id: 'poli-gov-types', title: 'Types of Government', description: 'Monarchy, democracy, authoritarianism, and more.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'poli-const-law', title: 'Constitutional Law', description: 'Basics of constitutional frameworks and rights.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'poli-int-relations', title: 'International Relations', description: 'Global politics, organizations, and conflicts.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'poli-public-admin', title: 'Public Administration', description: 'The implementation of government policy.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'poli-political-thought', title: 'Political Thought', description: 'Philosophers and theories of political systems.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'poli-elections', title: 'Elections & Voting Systems', description: 'How elections work and different electoral models.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- ECONOMICS CATEGORY ---
  {
    id: 'economics',
    name: 'Economics',
    description: 'Understand the production, distribution, and consumption of goods and services.',
    imageUrl: '/economics.png',
    quizzes: [
      { id: 'econ-micro', title: 'Microeconomics Basics', description: 'Supply, demand, and consumer behavior.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'econ-macro', title: 'Macroeconomics Intro', description: 'GDP, inflation, and unemployment.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'econ-markets', title: 'Market Structures', description: 'Perfect competition, monopoly, oligopoly.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'econ-money', title: 'Money & Banking', description: 'Financial systems and monetary policy.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'econ-trade', title: 'International Trade', description: 'Trade policies and global economic relations.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'econ-development', title: 'Economic Development', description: 'Theories and challenges of economic growth.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- MATHEMATICS CATEGORY ---
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Sharpen your skills in algebra, geometry, calculus, and more!',
    imageUrl: '/Mathematics.png',
    quizzes: [
      {
        id: 'math-algebra-basic',
        title: 'Basic Algebra',
        description: 'Equations, variables, and fundamental algebraic operations.',
        questions: [
          { text: 'What is 5 + 3?', options: ['7', '8', '9', '10'], correctAnswer: '8' },
          { text: 'Solve for x: 2x - 4 = 6', options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], correctAnswer: 'x = 5' },
          { text: 'What is the value of Pi (π) to two decimal places?', options: ['3.12', '3.14', '3.16', '3.18'], correctAnswer: '3.14' },
          { text: 'Simplify: 3x + 2x - x', options: ['4x', '5x', '2x', '3x'], correctAnswer: '4x' },
          { text: 'If a = 5, what is a^2?', options: ['10', '25', '7', '1'], correctAnswer: '25' },
          { text: 'What is the product of 7 and 9?', options: ['16', '63', '2', '79'], correctAnswer: '63' },
          { text: 'Solve: x/3 = 7', options: ['x = 10', 'x = 4', 'x = 21', 'x = 1'], correctAnswer: 'x = 21' },
          { text: 'Which number is prime?', options: ['4', '6', '9', '7'], correctAnswer: '7' },
          { text: 'What is 15% of 200?', options: ['15', '20', '30', '45'], correctAnswer: '30' },
          { text: 'The sum of angles in a straight line is...', options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'], correctAnswer: '180 degrees' },
        ],
      },
      { id: 'math-geometry-intro', title: 'Geometry Fundamentals', description: 'Shapes, angles, and spatial reasoning.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'math-calculus-diff', title: 'Calculus: Differentiation', description: 'Rates of change and derivatives.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'math-statistics', title: 'Basic Statistics', description: 'Mean, median, mode, and probability.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'math-trigonometry', title: 'Trigonometry', description: 'Angles, triangles, and trigonometric functions.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'math-number-theory', title: 'Number Theory', description: 'Properties of integers, primes, and divisibility.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- HINDI CATEGORY ---
  {
    id: 'hindi',
    name: 'Hindi',
    description: 'Test your knowledge of Hindi grammar, vocabulary, and literature.',
    imageUrl: '/hindi.png',
    quizzes: [
      { id: 'hindi-grammar-basic', title: 'Basic Hindi Grammar', description: 'Nouns, verbs, and sentence structure.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hindi-vocab-daily', title: 'Daily Hindi Vocabulary', description: 'Common words and phrases for everyday use.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hindi-literature-intro', title: 'Hindi Literature Intro', description: 'Famous authors and literary works.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hindi-proverbs', title: 'Hindi Proverbs & Idioms', description: 'Common sayings and their meanings.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hindi-tenses', title: 'Hindi Tenses', description: 'Past, present, and future tense usage.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'hindi-writing', title: 'Devanagari Script', description: 'Recognition and basic writing of Hindi script.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- ENGLISH CATEGORY ---
  {
    id: 'english',
    name: 'English',
    description: 'Improve your English grammar, vocabulary, and comprehension.',
    imageUrl: '/english.png',
    quizzes: [
      { id: 'eng-grammar-basic', title: 'Basic English Grammar', description: 'Parts of speech, sentence structure, and punctuation.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'eng-vocab-advanced', title: 'Advanced English Vocabulary', description: 'Synonyms, antonyms, and complex words.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'eng-literature-classics', title: 'English Literary Classics', description: 'Famous works and authors from different periods.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'eng-idioms-phrasal', title: 'Idioms & Phrasal Verbs', description: 'Common English idioms and phrasal verbs.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'eng-comprehension', title: 'Reading Comprehension', description: 'Analyze texts and answer questions based on passages.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'eng-writing-skills', title: 'Writing Skills', description: 'Sentence construction, paragraphing, and essay writing.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },

  // --- COMPUTER SCIENCE CATEGORY ---
  {
    id: 'computer',
    name: 'Computer',
    description: 'Understand the fundamental theories and applications of computing and programming.',
    imageUrl: '/Computer.png',
    quizzes: [
      {
        id: 'comp-html-basics',
        title: 'HTML Basics',
        description: 'Structure of web pages and common HTML tags.',
        questions: [
          { text: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], correctAnswer: 'Hyper Text Markup Language' },
          { text: 'Which tag is used for the largest heading?', options: ['<head>', '<h1>', '<heading>', '<h6'], correctAnswer: '<h1>' },
          { text: 'Which tag is used to define an unordered list?', options: ['<ol>', '<list>', '<ul>', '<dl>'], correctAnswer: '<ul>' },
          { text: 'What is the correct HTML element for inserting a line break?', options: ['<lb>', '<br>', '<break>', '<newline>'], correctAnswer: '<br>' },
          { text: 'Which attribute specifies an alternate text for an image, if the image cannot be displayed?', options: ['src', 'alt', 'title', 'href'], correctAnswer: 'alt' },
          { text: 'What is the purpose of the <body> tag?', options: ['To define the document\'s head', 'To define the main content of the HTML document', 'To link external stylesheets', 'To define a hyperlink'], correctAnswer: 'To define the main content of the HTML document' },
          { text: 'Which HTML element is used to specify a footer for a document or section?', options: ['<bottom>', '<footer>', '<end>', '<section>'], correctAnswer: '<footer>' },
          { text: 'Which HTML element is used to define important text?', options: ['<b>', '<italic>', '<strong>', '<mark>'], correctAnswer: '<strong>' },
          { text: 'How can you open a link in a new tab/browser window?', options: ['<a href="url" new>', '<a href="url" target="new">', '<a href="url" target="_blank">', '<a href="url" open="new">'], correctAnswer: '<a href="url" target="_blank">' },
          { text: 'Which HTML tag is used to create a hyperlink?', options: ['<link>', '<href>', '<a>', '<url>'], correctAnswer: '<a>' },
        ],
      },
      {
        id: 'comp-css-styling',
        title: 'CSS Styling',
        description: 'Styling web pages with Cascading Style Sheets.',
        questions: [
          { text: 'Which CSS property is used to control the spacing between letters?', options: ['word-spacing', 'line-height', 'letter-spacing', 'text-indent'], correctAnswer: 'letter-spacing' },
          { text: 'Which CSS property controls the text size?', options: ['text-style', 'font-size', 'text-size', 'font-style'], correctAnswer: 'font-size' },
          { text: 'How do you select an element with id "demo"?', options: ['#demo', '.demo', 'demo', '*demo'], correctAnswer: '#demo' },
          { text: 'Which property is used to change the background color?', options: ['color', 'bgcolor', 'background-color', 'background'], correctAnswer: 'background-color' },
          { text: 'How do you add a background color for all <h1> elements?', options: ['h1 {background-color: yellow;}', 'all.h1 {background-color: yellow;}', '<h1>.all {background-color: yellow;}', 'h1.setBgColor {background-color: yellow;}'], correctAnswer: 'h1 {background-color: yellow;}' },
          { text: 'Which is the correct CSS syntax?', options: ['body:color=black;', '{body;color:black;}', 'body {color: black;}', '{body:color=black;}'], correctAnswer: 'body {color: black;}' },
          { text: 'Which CSS property is used for changing the font of an element?', options: ['font-style', 'text-font', 'font-family', 'font-variant'], correctAnswer: 'font-family' },
          { text: 'How do you make the text bold?', options: ['font-weight: bold;', 'text-decoration: bold;', 'font-style: bold;', 'text-transform: uppercase;'], correctAnswer: 'font-weight: bold;' },
          { text: 'Which property is used to control the height of an element?', options: ['line-height', 'height', 'max-height', 'min-height'], correctAnswer: 'height' },
          { text: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], correctAnswer: 'Cascading Style Sheets' },
        ],
      },
      { id: 'comp-javascript-core', title: 'JavaScript Core', description: 'Variables, functions, and DOM manipulation.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'comp-python-intro', title: 'Python Introduction', description: 'Syntax, data types, and control flow.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'comp-data-structures', title: 'Data Structures', description: 'Arrays, linked lists, trees, and graphs.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
      { id: 'comp-algorithms', title: 'Algorithms', description: 'Sorting, searching, and common algorithms.', questions: Array(10).fill({ text: 'Placeholder question', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }) },
    ],
  },
];

// Helper function to get a single category by ID
export function getCategoryById(categoryId) {
  console.log("getCategoryById: Searching for ID:", categoryId);
  const foundCategory = categories.find(cat => {
    console.log(`  Comparing "${cat.id}" with "${categoryId}"`);
    return cat.id === categoryId;
  });
  console.log("getCategoryById: Found category:", foundCategory ? foundCategory.name : "None");
  return foundCategory;
}

// Helper function to get a quiz by its ID and also return its category ID
export function getQuizByIdWithCategory(quizId) {
  for (const category of categories) {
    const foundQuiz = category.quizzes.find(quiz => quiz.id === quizId);
    if (foundQuiz) {
      // Return both the quiz data and its parent category ID
      return { quiz: foundQuiz, categoryId: category.id };
    }
  }
  return null; // Quiz not found
}