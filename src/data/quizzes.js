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
      }, {
        id: 'bio-human-body',
        title: 'Human Body Systems',
        description: 'Explore the anatomy and physiology of the human body.',
        questions: [
          { text: 'Which organ is responsible for pumping blood throughout the body?', options: ['Lungs', 'Brain', 'Heart', 'Liver'], correctAnswer: 'Heart' },
          { text: 'What is the function of the respiratory system?', options: ['Digestion', 'Blood circulation', 'Oxygen exchange', 'Hormone production'], correctAnswer: 'Oxygen exchange' },
          { text: 'The brain is a part of which system?', options: ['Digestive system', 'Respiratory system', 'Nervous system', 'Circulatory system'], correctAnswer: 'Nervous system' },
          { text: 'Which organ removes waste from the blood?', options: ['Heart', 'Liver', 'Kidney', 'Stomach'], correctAnswer: 'Kidney' },
          { text: 'Which system controls body movements through muscles?', options: ['Digestive', 'Skeletal', 'Muscular', 'Endocrine'], correctAnswer: 'Muscular' },
          { text: 'What is the smallest functional unit of the kidney?', options: ['Neuron', 'Nephron', 'Alveoli', 'Capillary'], correctAnswer: 'Nephron' },
          { text: 'Which blood cells help in fighting infections?', options: ['Red blood cells', 'Platelets', 'White blood cells', 'Plasma'], correctAnswer: 'White blood cells' },
          { text: 'The skeletal system primarily provides...', options: ['Hormones', 'Blood', 'Structure and protection', 'Oxygen'], correctAnswer: 'Structure and protection' },
          { text: 'What is the function of the stomach?', options: ['Filtering blood', 'Digesting food', 'Producing insulin', 'Storing bile'], correctAnswer: 'Digesting food' },
          { text: 'Which gland regulates metabolism?', options: ['Thyroid', 'Adrenal', 'Pituitary', 'Pancreas'], correctAnswer: 'Thyroid' }
        ]
      },
      {
        id: 'bio-evolution',
        title: 'Evolutionary Theory',
        description: 'Natural selection, adaptation, and the history of life.',
        questions: [
          { text: 'Who proposed the theory of natural selection?', options: ['Gregor Mendel', 'Isaac Newton', 'Charles Darwin', 'Louis Pasteur'], correctAnswer: 'Charles Darwin' },
          { text: 'What is evolution?', options: ['Growth of organisms', 'Study of fossils', 'Change in species over time', 'Creation of new cells'], correctAnswer: 'Change in species over time' },
          { text: 'What is the process by which organisms better adapted to the environment survive?', options: ['Extinction', 'Natural selection', 'Photosynthesis', 'Mutation'], correctAnswer: 'Natural selection' },
          { text: 'Fossils are...', options: ['Live animals', 'Preserved remains of organisms', 'Future organisms', 'Unidentified chemicals'], correctAnswer: 'Preserved remains of organisms' },
          { text: 'What term refers to differences within a species?', options: ['Adaptation', 'Variation', 'Mutation', 'Evolution'], correctAnswer: 'Variation' },
          { text: 'Which structure is considered vestigial in humans?', options: ['Heart', 'Appendix', 'Liver', 'Lung'], correctAnswer: 'Appendix' },
          { text: 'Which event led to the rapid increase in species diversity?', options: ['Extinction', 'Cambrian explosion', 'Continental drift', 'Photosynthesis'], correctAnswer: 'Cambrian explosion' },
          { text: 'A mutation is...', options: ['A disease', 'A change in DNA', 'A chemical reaction', 'A fossil'], correctAnswer: 'A change in DNA' },
          { text: 'The study of evolutionary relationships is called...', options: ['Genetics', 'Taxonomy', 'Phylogenetics', 'Biochemistry'], correctAnswer: 'Phylogenetics' },
          { text: 'Survival of the fittest means...', options: ['Strongest survive', 'Smartest survive', 'Most adaptable survive', 'Oldest survive'], correctAnswer: 'Most adaptable survive' }
        ]
      },
      {
        id: 'bio-plants',
        title: 'Plant Biology',
        description: 'Photosynthesis, plant structures, and reproduction.',
        questions: [
          { text: 'What process do plants use to make food?', options: ['Respiration', 'Digestion', 'Photosynthesis', 'Transpiration'], correctAnswer: 'Photosynthesis' },
          { text: 'Which part of the plant conducts photosynthesis?', options: ['Roots', 'Stem', 'Leaves', 'Flowers'], correctAnswer: 'Leaves' },
          { text: 'Chlorophyll is found in...', options: ['Roots', 'Stems', 'Chloroplasts', 'Xylem'], correctAnswer: 'Chloroplasts' },
          { text: 'The movement of water through a plant is called...', options: ['Respiration', 'Transpiration', 'Diffusion', 'Osmosis'], correctAnswer: 'Transpiration' },
          { text: 'Which part of the plant anchors it to the ground?', options: ['Leaves', 'Stem', 'Roots', 'Flower'], correctAnswer: 'Roots' },
          { text: 'What do xylem vessels transport?', options: ['Food', 'Water and minerals', 'Carbon dioxide', 'Oxygen'], correctAnswer: 'Water and minerals' },
          { text: 'Pollination is the transfer of pollen from...', options: ['Leaf to root', 'Anther to stigma', 'Stem to leaf', 'Ovary to ovule'], correctAnswer: 'Anther to stigma' },
          { text: 'Which gas is used in photosynthesis?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correctAnswer: 'Carbon dioxide' },
          { text: 'Which plant hormone is responsible for growth?', options: ['Insulin', 'Adrenaline', 'Auxin', 'Estrogen'], correctAnswer: 'Auxin' },
          { text: 'The reproductive organ of a flowering plant is the...', options: ['Leaf', 'Stem', 'Flower', 'Root'], correctAnswer: 'Flower' }
        ]
      }
    ]
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
          { text: 'What is the formula for work done?', options: ['Force x time', 'Force x distance', 'Mass x acceleration', 'Power x time'], correctAnswer: 'Force x distance' }
        ]
      },
      {
        id: 'phy-electricity',
        title: 'Electricity & Magnetism',
        description: 'Circuits, currents, and magnetic fields.',
        questions: [
          { text: 'What is the SI unit of electric current?', options: ['Volt', 'Ohm', 'Ampere', 'Coulomb'], correctAnswer: 'Ampere' },
          { text: 'What type of charge does an electron carry?', options: ['Positive', 'Negative', 'Neutral', 'None'], correctAnswer: 'Negative' },
          { text: 'What is the function of a resistor in a circuit?', options: ['Amplify current', 'Store energy', 'Oppose current', 'Generate voltage'], correctAnswer: 'Oppose current' },
          { text: 'Ohm’s Law is represented by which equation?', options: ['V = IR', 'P = IV', 'E = mc^2', 'F = ma'], correctAnswer: 'V = IR' },
          { text: 'What happens when you break a bar magnet in half?', options: ['Each half becomes a new magnet', 'One becomes a north pole, one a south', 'They lose magnetism', 'They attract strongly'], correctAnswer: 'Each half becomes a new magnet' },
          { text: 'Which device is used to measure electric current?', options: ['Voltmeter', 'Ammeter', 'Galvanometer', 'Thermometer'], correctAnswer: 'Ammeter' },
          { text: 'Which metal is commonly used in electrical wiring?', options: ['Iron', 'Copper', 'Aluminum', 'Gold'], correctAnswer: 'Copper' },
          { text: 'A magnetic field always forms around which of the following?', options: ['Insulator', 'Neutral atom', 'Current-carrying wire', 'Static charge'], correctAnswer: 'Current-carrying wire' },
          { text: 'What is the main source of Earth’s magnetic field?', options: ['Sun', 'Moon', 'Iron core', 'Atmosphere'], correctAnswer: 'Iron core' },
          { text: 'The unit of resistance is?', options: ['Volt', 'Ohm', 'Ampere', 'Watt'], correctAnswer: 'Ohm' }
        ]
      },
      {
        id: 'phy-waves',
        title: 'Waves and Optics',
        description: 'Sound, light, and wave phenomena.',
        questions: [
          { text: 'What is the speed of light in vacuum?', options: ['3x10^6 m/s', '3x10^8 m/s', '1.5x10^8 m/s', '1.5x10^6 m/s'], correctAnswer: '3x10^8 m/s' },
          { text: 'Which wave requires a medium to travel?', options: ['Light wave', 'Radio wave', 'Sound wave', 'X-ray'], correctAnswer: 'Sound wave' },
          { text: 'What type of lens converges light rays?', options: ['Concave', 'Convex', 'Flat', 'Cylindrical'], correctAnswer: 'Convex' },
          { text: 'The bending of light as it passes from one medium to another is called?', options: ['Reflection', 'Diffraction', 'Refraction', 'Interference'], correctAnswer: 'Refraction' },
          { text: 'What kind of wave is sound?', options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Gamma'], correctAnswer: 'Longitudinal' },
          { text: 'Which color of light has the highest frequency?', options: ['Red', 'Blue', 'Green', 'Violet'], correctAnswer: 'Violet' },
          { text: 'What causes echoes?', options: ['Diffraction', 'Refraction', 'Reflection', 'Absorption'], correctAnswer: 'Reflection' },
          { text: 'What is the unit of frequency?', options: ['Hertz', 'Newton', 'Watt', 'Volt'], correctAnswer: 'Hertz' },
          { text: 'Which mirror can form a real image?', options: ['Plane', 'Convex', 'Concave', 'None'], correctAnswer: 'Concave' },
          { text: 'Which property of waves describes the height of the wave?', options: ['Frequency', 'Amplitude', 'Wavelength', 'Speed'], correctAnswer: 'Amplitude' }
        ]
      },
      {
        id: 'phy-thermodynamics',
        title: 'Thermodynamics',
        description: 'Heat, temperature, and energy transfer.',
        questions: [
          { text: 'Which law states energy cannot be created or destroyed?', options: ['First law of thermodynamics', 'Second law', 'Zeroth law', 'Third law'], correctAnswer: 'First law of thermodynamics' },
          { text: 'What is the SI unit of heat?', options: ['Kelvin', 'Joule', 'Celsius', 'Watt'], correctAnswer: 'Joule' },
          { text: 'What is absolute zero?', options: ['0°C', '0°F', '273K', '0K'], correctAnswer: '0K' },
          { text: 'Which mode of heat transfer does not require a medium?', options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'], correctAnswer: 'Radiation' },
          { text: 'What is entropy a measure of?', options: ['Temperature', 'Energy', 'Disorder', 'Volume'], correctAnswer: 'Disorder' },
          { text: 'Which process involves heat transfer through direct contact?', options: ['Convection', 'Radiation', 'Conduction', 'Compression'], correctAnswer: 'Conduction' },
          { text: 'Which device measures temperature?', options: ['Barometer', 'Ammeter', 'Thermometer', 'Voltmeter'], correctAnswer: 'Thermometer' },
          { text: 'Steam engine works on which law?', options: ['First law', 'Second law', 'Zeroth law', 'Third law'], correctAnswer: 'Second law' },
          { text: 'What is the boiling point of water at sea level in Kelvin?', options: ['100K', '273K', '373K', '473K'], correctAnswer: '373K' },
          { text: 'What is the primary gas responsible for the greenhouse effect?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], correctAnswer: 'Carbon Dioxide' }
        ]
      },
      {
        id: 'phy-modern',
        title: 'Modern Physics',
        description: 'Relativity, quantum mechanics, and nuclear physics.',
        questions: [
          { text: 'Who developed the theory of relativity?', options: ['Newton', 'Einstein', 'Bohr', 'Curie'], correctAnswer: 'Einstein' },
          { text: 'E = mc^2 is related to what?', options: ['Kinetic energy', 'Potential energy', 'Mass-energy equivalence', 'Force'], correctAnswer: 'Mass-energy equivalence' },
          { text: 'What is the charge of a neutron?', options: ['Positive', 'Negative', 'Zero', 'Depends'], correctAnswer: 'Zero' },
          { text: 'Which particle is responsible for radioactivity?', options: ['Electron', 'Neutron', 'Proton', 'Alpha particle'], correctAnswer: 'Alpha particle' },
          { text: 'Which scientist is known for the model of the atom with orbits?', options: ['Einstein', 'Bohr', 'Curie', 'Thomson'], correctAnswer: 'Bohr' },
          { text: 'What is the unit of radioactivity?', options: ['Curie', 'Sievert', 'Becquerel', 'Joule'], correctAnswer: 'Becquerel' },
          { text: 'Which phenomenon shows light as a particle?', options: ['Reflection', 'Refraction', 'Photoelectric effect', 'Diffraction'], correctAnswer: 'Photoelectric effect' },
          { text: 'What is antimatter?', options: ['Uncharged particles', 'Opposite to matter', 'Dark matter', 'Photon energy'], correctAnswer: 'Opposite to matter' },
          { text: 'The nucleus of an atom contains...', options: ['Electrons', 'Protons and neutrons', 'Only protons', 'Only neutrons'], correctAnswer: 'Protons and neutrons' },
          { text: 'What is a photon?', options: ['A massless particle of light', 'A charge carrier', 'A neutron', 'A positron'], correctAnswer: 'A massless particle of light' }
        ]
      },
      {
        id: 'phy-astronomy',
        title: 'Astrophysics Basics',
        description: 'Stars, galaxies, and the universe.',
        questions: [
          { text: 'What is the closest star to Earth?', options: ['Alpha Centauri', 'Sirius', 'Sun', 'Betelgeuse'], correctAnswer: 'Sun' },
          { text: 'What is a black hole?', options: ['A star', 'A planet', 'A region of space with strong gravity', 'A gas cloud'], correctAnswer: 'A region of space with strong gravity' },
          { text: 'What galaxy do we live in?', options: ['Andromeda', 'Milky Way', 'Triangulum', 'Whirlpool'], correctAnswer: 'Milky Way' },
          { text: 'The Big Bang theory explains the...', options: ['End of the universe', 'Origin of the universe', 'Movement of planets', 'Structure of atoms'], correctAnswer: 'Origin of the universe' },
          { text: 'What is the hottest type of star?', options: ['Red', 'White dwarf', 'Blue', 'Yellow'], correctAnswer: 'Blue' },
          { text: 'What tool is used to observe distant stars?', options: ['Microscope', 'Periscope', 'Telescope', 'Spectroscope'], correctAnswer: 'Telescope' },
          { text: 'Which planet has the largest ring system?', options: ['Earth', 'Saturn', 'Mars', 'Jupiter'], correctAnswer: 'Saturn' },
          { text: 'A year on Earth is caused by...', options: ['Earth’s rotation', 'Moon’s orbit', 'Earth’s revolution around the sun', 'Tidal waves'], correctAnswer: 'Earth’s revolution around the sun' },
          { text: 'Which element fuels stars in nuclear fusion?', options: ['Oxygen', 'Hydrogen', 'Carbon', 'Iron'], correctAnswer: 'Hydrogen' },
          { text: 'What is a light-year?', options: ['Distance light travels in a year', 'Time taken by light to reach Sun', 'Star age unit', 'Time between solar eclipses'], correctAnswer: 'Distance light travels in a year' }
        ]
      }
    ]
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
      }, {
        id: 'chem-reactions',
        title: 'Chemical Reactions & Stoichiometry',
        description: 'Balancing equations and reaction types.',
        questions: [
          { text: 'What type of reaction is: 2H₂ + O₂ → 2H₂O?', options: ['Decomposition', 'Combustion', 'Synthesis', 'Single replacement'], correctAnswer: 'Synthesis' },
          { text: 'What is the product of Na + Cl₂?', options: ['NaCl₂', 'NaCl', 'Na₂Cl', 'ClNa₂'], correctAnswer: 'NaCl' },
          { text: 'Which is a balanced equation?', options: ['H₂ + O₂ → H₂O', '2H₂ + O₂ → 2H₂O', 'H₂ + 2O₂ → 2H₂O', 'H₂O → H₂ + O₂'], correctAnswer: '2H₂ + O₂ → 2H₂O' },
          { text: 'Stoichiometry helps in calculating...', options: ['Color of chemicals', 'pH of solution', 'Mass of products/reactants', 'Size of molecules'], correctAnswer: 'Mass of products/reactants' },
          { text: 'What is the mole ratio of H₂ to H₂O in: 2H₂ + O₂ → 2H₂O?', options: ['1:2', '2:1', '2:2', '1:1'], correctAnswer: '1:1' },
          { text: 'A double displacement reaction involves...', options: ['One reactant', 'Exchange of ions', 'Transfer of electrons', 'Release of gas'], correctAnswer: 'Exchange of ions' },
          { text: 'Which is an example of combustion?', options: ['C + O₂ → CO₂', 'Na + Cl → NaCl', 'HCl + NaOH → NaCl + H₂O', 'AgNO₃ + NaCl → AgCl + NaNO₃'], correctAnswer: 'C + O₂ → CO₂' },
          { text: 'What is the limiting reactant?', options: ['Reactant with least mass', 'Reactant that is left over', 'Reactant that runs out first', 'Product formed'], correctAnswer: 'Reactant that runs out first' },
          { text: 'Which is NOT a type of chemical reaction?', options: ['Synthesis', 'Decomposition', 'Evaporation', 'Single Replacement'], correctAnswer: 'Evaporation' },
          { text: 'Balancing chemical equations ensures...', options: ['Same color on both sides', 'Conservation of mass', 'Equal moles always', 'Same energy levels'], correctAnswer: 'Conservation of mass' },
        ]
      },
      {
        id: 'chem-organic',
        title: 'Organic Chemistry Intro',
        description: 'Carbon compounds and their properties.',
        questions: [
          { text: 'Organic compounds mainly contain...', options: ['Carbon', 'Oxygen', 'Nitrogen', 'Iron'], correctAnswer: 'Carbon' },
          { text: 'Which is an alkane?', options: ['C₂H₄', 'C₂H₆', 'C₂H₂', 'CH₃OH'], correctAnswer: 'C₂H₆' },
          { text: 'Methane has how many hydrogen atoms?', options: ['2', '3', '4', '5'], correctAnswer: '4' },
          { text: 'Which is a functional group in alcohols?', options: ['-OH', '-COOH', '-NH₂', '-CH₃'], correctAnswer: '-OH' },
          { text: 'What is the IUPAC name for CH₃COOH?', options: ['Methanoic acid', 'Ethanol', 'Acetic acid', 'Ethanoic acid'], correctAnswer: 'Ethanoic acid' },
          { text: 'Which is a hydrocarbon?', options: ['CO₂', 'CH₄', 'H₂O', 'NaCl'], correctAnswer: 'CH₄' },
          { text: 'Alkenes contain...', options: ['Single bonds only', 'One or more double bonds', 'Triple bonds only', 'No bonds'], correctAnswer: 'One or more double bonds' },
          { text: 'Benzene is a...', options: ['Alkane', 'Cycloalkane', 'Aromatic compound', 'Alcohol'], correctAnswer: 'Aromatic compound' },
          { text: 'Which is an ester?', options: ['CH₃COOCH₃', 'CH₄', 'C₂H₅OH', 'CH₃NH₂'], correctAnswer: 'CH₃COOCH₃' },
          { text: 'Which class of organic compounds includes fats and oils?', options: ['Alcohols', 'Alkanes', 'Esters', 'Amines'], correctAnswer: 'Esters' },
        ]
      },
      {
        id: 'chem-acid-base',
        title: 'Acids, Bases, & pH',
        description: 'Properties and reactions of acids and bases.',
        questions: [
          { text: 'Which of the following is an acid?', options: ['NaOH', 'HCl', 'NH₃', 'Ca(OH)₂'], correctAnswer: 'HCl' },
          { text: 'A base tastes...', options: ['Sweet', 'Sour', 'Bitter', 'Salty'], correctAnswer: 'Bitter' },
          { text: 'The pH scale ranges from...', options: ['0–7', '7–14', '0–14', '1–10'], correctAnswer: '0–14' },
          { text: 'A substance with pH = 7 is...', options: ['Acidic', 'Basic', 'Neutral', 'Alkaline'], correctAnswer: 'Neutral' },
          { text: 'What is produced when acid reacts with base?', options: ['Salt and acid', 'Salt and water', 'Acid and base', 'Only water'], correctAnswer: 'Salt and water' },
          { text: 'Litmus turns red in...', options: ['Base', 'Salt', 'Neutral', 'Acid'], correctAnswer: 'Acid' },
          { text: 'Which is a weak acid?', options: ['HCl', 'H₂SO₄', 'CH₃COOH', 'HNO₃'], correctAnswer: 'CH₃COOH' },
          { text: 'Which is a strong base?', options: ['NaOH', 'NH₃', 'CH₃OH', 'H₂O'], correctAnswer: 'NaOH' },
          { text: 'What is neutralization?', options: ['Reaction between salts', 'Formation of acid', 'Acid-base reaction', 'Evaporation'], correctAnswer: 'Acid-base reaction' },
          { text: 'Which of these is a pH indicator?', options: ['Water', 'Salt', 'Litmus', 'Oxygen'], correctAnswer: 'Litmus' },
        ]
      },
      {
        id: 'chem-thermo',
        title: 'Chemical Thermodynamics',
        description: 'Energy changes in chemical reactions.',
        questions: [
          { text: 'Thermodynamics is the study of...', options: ['Motion', 'Heat and energy', 'Acids', 'Atoms'], correctAnswer: 'Heat and energy' },
          { text: 'Which law states energy cannot be created or destroyed?', options: ['Newton\'s law', 'Boyle\'s law', '1st Law of Thermodynamics', 'Dalton\'s law'], correctAnswer: '1st Law of Thermodynamics' },
          { text: 'Exothermic reactions...', options: ['Absorb heat', 'Release heat', 'Do not involve heat', 'Condense gases'], correctAnswer: 'Release heat' },
          { text: 'Endothermic reactions feel...', options: ['Hot', 'Cold', 'Neutral', 'Sticky'], correctAnswer: 'Cold' },
          { text: 'Enthalpy is a measure of...', options: ['Speed', 'Mass', 'Energy', 'Temperature'], correctAnswer: 'Energy' },
          { text: 'Which process is exothermic?', options: ['Melting ice', 'Burning wood', 'Evaporation', 'Boiling'], correctAnswer: 'Burning wood' },
          { text: 'ΔH > 0 implies...', options: ['Exothermic', 'Endothermic', 'Neutral', 'Undefined'], correctAnswer: 'Endothermic' },
          { text: 'In thermodynamics, the system refers to...', options: ['Surroundings', 'Reaction being studied', 'Universe', 'Heat only'], correctAnswer: 'Reaction being studied' },
          { text: 'Spontaneous reactions occur...', options: ['Only with input', 'Automatically', 'Randomly', 'Never'], correctAnswer: 'Automatically' },
          { text: 'The 2nd Law of Thermodynamics involves...', options: ['Energy', 'Entropy', 'Volume', 'Mass'], correctAnswer: 'Entropy' },
        ]
      },
      {
        id: 'chem-gases',
        title: 'Gases and Their Laws',
        description: 'Ideal gas law and gas properties.',
        questions: [
          { text: 'What does PV = nRT represent?', options: ['Boyle\'s Law', 'Ideal Gas Law', 'Charles\' Law', 'Avogadro\'s Law'], correctAnswer: 'Ideal Gas Law' },
          { text: 'Which unit is used for pressure in gas laws?', options: ['Liters', 'Kelvin', 'atm', 'Grams'], correctAnswer: 'atm' },
          { text: 'Boyle’s Law relates...', options: ['P and T', 'P and V', 'V and T', 'n and R'], correctAnswer: 'P and V' },
          { text: 'Charles’s Law shows volume increases with...', options: ['Temperature', 'Pressure', 'Moles', 'Mass'], correctAnswer: 'Temperature' },
          { text: 'What does Avogadro’s Law state?', options: ['P ∝ V', 'V ∝ T', 'V ∝ n', 'T ∝ 1/V'], correctAnswer: 'V ∝ n' },
          { text: 'What is STP in gas laws?', options: ['Standard temperature and pressure', 'Strong total pressure', 'Same time point', 'Sub-zero temperature'], correctAnswer: 'Standard temperature and pressure' },
          { text: 'Which temperature scale is used in gas laws?', options: ['Celsius', 'Kelvin', 'Fahrenheit', 'Rankine'], correctAnswer: 'Kelvin' },
          { text: 'The value of R in the ideal gas equation is...', options: ['8.31', '0.0821', '1.0', '22.4'], correctAnswer: '0.0821' },
          { text: 'What property does Graham’s law compare?', options: ['Volumes', 'Masses', 'Diffusion rates', 'Temperature'], correctAnswer: 'Diffusion rates' },
          { text: 'A gas will occupy more volume when...', options: ['Heated', 'Cooled', 'Compressed', 'Frozen'], correctAnswer: 'Heated' },
        ]
      }
    ]
  },

  // --- HISTORY CATEGORY  ---
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
      }, {
        id: 'hist-india-revolt',
        title: 'India: Revolt of 1857',
        description: 'Causes, events, and impact of the First War of Independence.',
        questions: [
          { text: 'What was the main cause of the Revolt of 1857?', options: ['High taxes', 'Religious discrimination', 'Greased cartridges', 'Lack of education'], correctAnswer: 'Greased cartridges' },
          { text: 'Who was declared the symbolic leader of the revolt?', options: ['Nana Sahib', 'Rani Lakshmibai', 'Bahadur Shah Zafar', 'Mangal Pandey'], correctAnswer: 'Bahadur Shah Zafar' },
          { text: 'Which soldier fired the first shot in the revolt?', options: ['Mangal Pandey', 'Tantia Tope', 'Kunwar Singh', 'Subhash Bose'], correctAnswer: 'Mangal Pandey' },
          { text: 'The revolt of 1857 is also called...', options: ['Civil War', 'Mutiny', 'First War of Independence', 'Sepoy Struggle'], correctAnswer: 'First War of Independence' },
          { text: 'Which city saw the first outbreak of the revolt?', options: ['Delhi', 'Lucknow', 'Meerut', 'Kanpur'], correctAnswer: 'Meerut' },
          { text: 'Who led the revolt in Kanpur?', options: ['Rani Lakshmibai', 'Nana Sahib', 'Lala Lajpat Rai', 'Tantia Tope'], correctAnswer: 'Nana Sahib' },
          { text: 'What role did Rani Lakshmibai play in the revolt?', options: ['None', 'Led the army of Jhansi', 'Negotiated peace', 'Served as a nurse'], correctAnswer: 'Led the army of Jhansi' },
          { text: 'Which policy of the British was resented by Indian rulers?', options: ['Divide and Rule', 'Doctrine of Lapse', 'Pitt’s India Act', 'Rowlatt Act'], correctAnswer: 'Doctrine of Lapse' },
          { text: 'The British finally suppressed the revolt in...', options: ['1858', '1859', '1860', '1861'], correctAnswer: '1858' },
          { text: 'After the revolt, power shifted from East India Company to...', options: ['Parliament', 'The Queen', 'House of Lords', 'Crown'], correctAnswer: 'Crown' },
        ]
      },
      {
        id: 'hist-world-war-i',
        title: 'World War I',
        description: 'Causes, key battles, and consequences of the Great War.',
        questions: [
          { text: 'World War I began in which year?', options: ['1912', '1914', '1916', '1918'], correctAnswer: '1914' },
          { text: 'Which event directly triggered the war?', options: ['Sinking of Lusitania', 'Invasion of Poland', 'Assassination of Archduke Ferdinand', 'Treaty of Versailles'], correctAnswer: 'Assassination of Archduke Ferdinand' },
          { text: 'Who was the German Emperor during WWI?', options: ['Hitler', 'Wilhelm II', 'Bismarck', 'Franz Ferdinand'], correctAnswer: 'Wilhelm II' },
          { text: 'What was the alliance of Germany, Austria-Hungary, and the Ottoman Empire called?', options: ['Allied Powers', 'Axis Powers', 'Triple Entente', 'Central Powers'], correctAnswer: 'Central Powers' },
          { text: 'Which battle was the longest of World War I?', options: ['Battle of Somme', 'Battle of Verdun', 'Battle of Tannenberg', 'Battle of Ypres'], correctAnswer: 'Battle of Verdun' },
          { text: 'Which country joined the war in 1917 and shifted the balance?', options: ['Italy', 'Russia', 'USA', 'Japan'], correctAnswer: 'USA' },
          { text: 'What was the main outcome of the Treaty of Versailles?', options: ['Germany gained land', 'WWII began', 'Germany was blamed and punished', 'League of Nations dissolved'], correctAnswer: 'Germany was blamed and punished' },
          { text: 'Trenches were primarily used in which front?', options: ['Eastern Front', 'Northern Front', 'Western Front', 'Southern Front'], correctAnswer: 'Western Front' },
          { text: 'Which gas was commonly used in WWI?', options: ['Oxygen', 'Chlorine', 'Nitrogen', 'Carbon dioxide'], correctAnswer: 'Chlorine' },
          { text: 'Which new weapon made its debut in WWI?', options: ['Tank', 'Missile', 'Drone', 'Nuclear bomb'], correctAnswer: 'Tank' },
        ]
      },
      {
        id: 'hist-cold-war',
        title: 'Cold War Era',
        description: 'Geopolitical tensions and events of the Cold War.',
        questions: [
          { text: 'The Cold War was mainly between which two countries?', options: ['USA and Germany', 'USA and USSR', 'China and Japan', 'UK and USSR'], correctAnswer: 'USA and USSR' },
          { text: 'Which ideology did the USSR support?', options: ['Capitalism', 'Communism', 'Democracy', 'Monarchy'], correctAnswer: 'Communism' },
          { text: 'What physical barrier became a symbol of the Cold War?', options: ['Iron Curtain', 'Berlin Wall', 'Great Wall of China', 'Wall of Democracy'], correctAnswer: 'Berlin Wall' },
          { text: 'The Cuban Missile Crisis occurred in which year?', options: ['1959', '1962', '1965', '1970'], correctAnswer: '1962' },
          { text: 'What was the aim of NATO?', options: ['Economic growth', 'Cultural exchange', 'Military alliance', 'Trade agreement'], correctAnswer: 'Military alliance' },
          { text: 'The Cold War ended with the collapse of...', options: ['USA', 'Germany', 'USSR', 'Japan'], correctAnswer: 'USSR' },
          { text: 'The “Iron Curtain” was a term used by...', options: ['John F. Kennedy', 'Winston Churchill', 'Stalin', 'Roosevelt'], correctAnswer: 'Winston Churchill' },
          { text: 'Which country was divided into North and South due to Cold War tensions?', options: ['Vietnam', 'Germany', 'Korea', 'Cuba'], correctAnswer: 'Korea' },
          { text: 'Which doctrine aimed to stop the spread of communism?', options: ['Truman Doctrine', 'Marshall Plan', 'Monroe Doctrine', 'Brezhnev Doctrine'], correctAnswer: 'Truman Doctrine' },
          { text: 'What organization was formed in response to NATO?', options: ['League of Nations', 'Warsaw Pact', 'United Nations', 'ASEAN'], correctAnswer: 'Warsaw Pact' },
        ]
      },
      {
        id: 'hist-modern-india',
        title: 'Modern Indian History',
        description: 'From independence to the present day.',
        questions: [
          { text: 'India gained independence in...', options: ['1945', '1946', '1947', '1950'], correctAnswer: '1947' },
          { text: 'Who was the first Prime Minister of India?', options: ['Sardar Patel', 'Subhash Chandra Bose', 'Jawaharlal Nehru', 'Rajendra Prasad'], correctAnswer: 'Jawaharlal Nehru' },
          { text: 'When was the Indian Constitution adopted?', options: ['15th August 1947', '26th January 1950', '2nd October 1949', '1st January 1951'], correctAnswer: '26th January 1950' },
          { text: 'The Green Revolution in India aimed to...', options: ['Improve literacy', 'Boost military', 'Increase food production', 'Industrialize cities'], correctAnswer: 'Increase food production' },
          { text: 'Which Indian PM declared Emergency in 1975?', options: ['Nehru', 'Indira Gandhi', 'Rajiv Gandhi', 'Morarji Desai'], correctAnswer: 'Indira Gandhi' },
          { text: 'Who was India’s first female President?', options: ['Sonia Gandhi', 'Indira Gandhi', 'Pratibha Patil', 'Sarojini Naidu'], correctAnswer: 'Pratibha Patil' },
          { text: 'Which movement was launched by Anna Hazare?', options: ['Make in India', 'Swachh Bharat', 'India Against Corruption', 'Digital India'], correctAnswer: 'India Against Corruption' },
          { text: 'In which year did Pokhran-II nuclear tests take place?', options: ['1995', '1996', '1998', '2001'], correctAnswer: '1998' },
          { text: 'Which city became India’s IT hub?', options: ['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad'], correctAnswer: 'Bengaluru' },
          { text: 'Article 370, which gave special status to Jammu & Kashmir, was revoked in...', options: ['2017', '2018', '2019', '2020'], correctAnswer: '2019' },
        ]
      }
    ],
  },  // --- GEOGRAPHY CATEGORY ---
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
      {
        id: 'geo-physical',
        title: 'Physical Geography',
        description: 'Mountains, rivers, oceans, and landforms.',
        questions: [
          { text: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctAnswer: 'Nile' },
          { text: 'Mount Everest is part of which mountain range?', options: ['Andes', 'Rockies', 'Himalayas', 'Alps'], correctAnswer: 'Himalayas' },
          { text: 'What is the deepest point in Earth’s oceans?', options: ['Mariana Trench', 'Java Trench', 'Puerto Rico Trench', 'Tonga Trench'], correctAnswer: 'Mariana Trench' },
          { text: 'Which is the largest desert in the world?', options: ['Sahara', 'Arctic', 'Gobi', 'Antarctica'], correctAnswer: 'Antarctica' },
          { text: 'The Great Barrier Reef is located off the coast of which country?', options: ['USA', 'India', 'Australia', 'South Africa'], correctAnswer: 'Australia' },
          { text: 'Which river flows through the Amazon rainforest?', options: ['Nile', 'Amazon', 'Congo', 'Zambezi'], correctAnswer: 'Amazon' },
          { text: 'What type of landform is Iceland primarily made of?', options: ['Delta', 'Volcano', 'Mountain', 'Plain'], correctAnswer: 'Volcano' },
          { text: 'Which ocean is the largest?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], correctAnswer: 'Pacific' },
          { text: 'Which continent has the highest average elevation?', options: ['Asia', 'Africa', 'South America', 'Antarctica'], correctAnswer: 'Antarctica' },
          { text: 'Which mountain is considered the tallest from base to peak?', options: ['K2', 'Mount Everest', 'Mauna Kea', 'Makalu'], correctAnswer: 'Mauna Kea' },
        ],
      },
      {
        id: 'geo-human',
        title: 'Human Geography',
        description: 'Population, culture, and urban studies.',
        questions: [
          { text: 'What is the most populous country in the world?', options: ['USA', 'India', 'China', 'Indonesia'], correctAnswer: 'India' },
          { text: 'Which language has the most native speakers worldwide?', options: ['English', 'Hindi', 'Spanish', 'Mandarin'], correctAnswer: 'Mandarin' },
          { text: 'Urbanization refers to...', options: ['Decline in population', 'Increase in farming', 'Growth of cities', 'Destruction of forests'], correctAnswer: 'Growth of cities' },
          { text: 'What is a megalopolis?', options: ['Small town', 'Mountain region', 'Chain of metropolitan areas', 'Desert'], correctAnswer: 'Chain of metropolitan areas' },
          { text: 'Which religion is most widely practiced globally?', options: ['Islam', 'Christianity', 'Hinduism', 'Buddhism'], correctAnswer: 'Christianity' },
          { text: 'The Human Development Index (HDI) measures...', options: ['GDP only', 'Only life expectancy', 'Quality of life', 'Military strength'], correctAnswer: 'Quality of life' },
          { text: 'Which city is known as the "Silicon Valley of India"?', options: ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore'], correctAnswer: 'Bangalore' },
          { text: 'What is cultural diffusion?', options: ['Loss of culture', 'Spread of cultural traits', 'Economic growth', 'Technological advancement'], correctAnswer: 'Spread of cultural traits' },
          { text: 'Which factor contributes most to population growth?', options: ['Emigration', 'Birth rate', 'Death rate', 'War'], correctAnswer: 'Birth rate' },
          { text: 'Which is a push factor in migration?', options: ['Job opportunities', 'Safety', 'War', 'Education'], correctAnswer: 'War' },
        ],
      },
      {
        id: 'geo-climate',
        title: 'Climate & Weather',
        description: 'Understanding atmospheric phenomena and climate zones.',
        questions: [
          { text: 'What instrument measures temperature?', options: ['Barometer', 'Thermometer', 'Hygrometer', 'Anemometer'], correctAnswer: 'Thermometer' },
          { text: 'Which layer of the atmosphere contains weather systems?', options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'], correctAnswer: 'Troposphere' },
          { text: 'What causes the greenhouse effect?', options: ['Clouds', 'Carbon dioxide', 'Ozone layer', 'Sunlight'], correctAnswer: 'Carbon dioxide' },
          { text: 'Which climate zone is the hottest?', options: ['Temperate', 'Polar', 'Tropical', 'Arid'], correctAnswer: 'Tropical' },
          { text: 'Which phenomenon is associated with a drop in air pressure?', options: ['Clear skies', 'Storms', 'Frost', 'Drought'], correctAnswer: 'Storms' },
          { text: 'El Niño affects which ocean?', options: ['Atlantic', 'Arctic', 'Indian', 'Pacific'], correctAnswer: 'Pacific' },
          { text: 'Which scale measures hurricane strength?', options: ['Richter scale', 'Beaufort scale', 'Saffir-Simpson scale', 'Fahrenheit'], correctAnswer: 'Saffir-Simpson scale' },
          { text: 'What is a rain shadow?', options: ['Area with no clouds', 'Desert on the windward side of a mountain', 'Dry area on the leeward side of a mountain', 'Wetland'], correctAnswer: 'Dry area on the leeward side of a mountain' },
          { text: 'Which wind blows from sea to land during the day?', options: ['Land breeze', 'Sea breeze', 'Trade winds', 'Jet stream'], correctAnswer: 'Sea breeze' },
          { text: 'Which gas is most abundant in the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correctAnswer: 'Nitrogen' },
        ],
      },
      {
        id: 'geo-continents',
        title: 'Continents & Oceans',
        description: 'Facts about Earth\'s major landmasses and water bodies.',
        questions: [
          { text: 'How many continents are there?', options: ['5', '6', '7', '8'], correctAnswer: '7' },
          { text: 'Which continent is the smallest by land area?', options: ['Europe', 'Australia', 'South America', 'Antarctica'], correctAnswer: 'Australia' },
          { text: 'Which continent is home to the Sahara Desert?', options: ['Asia', 'Africa', 'Australia', 'North America'], correctAnswer: 'Africa' },
          { text: 'What ocean lies between Africa and Australia?', options: ['Pacific', 'Atlantic', 'Arctic', 'Indian'], correctAnswer: 'Indian' },
          { text: 'Which continent has the most countries?', options: ['Asia', 'Africa', 'Europe', 'South America'], correctAnswer: 'Africa' },
          { text: 'The Arctic Ocean touches which continent?', options: ['Asia', 'Europe', 'North America', 'All of the above'], correctAnswer: 'All of the above' },
          { text: 'Which is the largest continent?', options: ['Asia', 'Africa', 'North America', 'Europe'], correctAnswer: 'Asia' },
          { text: 'The Amazon Rainforest is located in...', options: ['Africa', 'Asia', 'South America', 'Australia'], correctAnswer: 'South America' },
          { text: 'What separates Europe and Asia?', options: ['Ural Mountains', 'Alps', 'Himalayas', 'Carpathians'], correctAnswer: 'Ural Mountains' },
          { text: 'Which continent is entirely in the Southern Hemisphere?', options: ['Asia', 'Australia', 'Europe', 'North America'], correctAnswer: 'Australia' },
        ],
      },
      {
        id: 'geo-natural-disasters',
        title: 'Natural Disasters',
        description: 'Earthquakes, volcanoes, floods, and their impacts.',
        questions: [
          { text: 'What instrument measures earthquakes?', options: ['Barometer', 'Seismograph', 'Thermometer', 'Anemometer'], correctAnswer: 'Seismograph' },
          { text: 'Which natural disaster is caused by underwater earthquakes?', options: ['Hurricane', 'Volcano', 'Tsunami', 'Drought'], correctAnswer: 'Tsunami' },
          { text: 'Which volcano famously erupted in 79 AD?', options: ['Etna', 'Vesuvius', 'Krakatoa', 'Fujiyama'], correctAnswer: 'Vesuvius' },
          { text: 'Which scale measures earthquake magnitude?', options: ['Beaufort', 'Richter', 'Saffir-Simpson', 'Mercalli'], correctAnswer: 'Richter' },
          { text: 'What is a drought?', options: ['Heavy rainfall', 'Lack of rainfall', 'Snowstorm', 'Tidal wave'], correctAnswer: 'Lack of rainfall' },
          { text: 'What is the center of an earthquake called?', options: ['Focus', 'Epicenter', 'Core', 'Fault'], correctAnswer: 'Focus' },
          { text: 'Which natural disaster is measured using the Fujita scale?', options: ['Tornado', 'Hurricane', 'Flood', 'Earthquake'], correctAnswer: 'Tornado' },
          { text: 'Where do most hurricanes form?', options: ['Polar regions', 'Equator', 'Mid-latitudes', 'Tropics'], correctAnswer: 'Tropics' },
          { text: 'What is a flood?', options: ['Landslide', 'Volcano eruption', 'Overflow of water', 'Snowfall'], correctAnswer: 'Overflow of water' },
          { text: 'Which natural disaster often follows a volcanic eruption?', options: ['Cyclone', 'Landslide', 'Blizzard', 'Tornado'], correctAnswer: 'Landslide' },
        ],
      },
    ],
  },


  // --- POLITICAL SCIENCE CATEGORY ---
  {
    id: 'political-science',
    name: 'Political Science',
    description: 'Study governments, public policies, political behavior, and political theory.',
    imageUrl: '/Politics.png',
    quizzes: [
      {
        id: 'poli-gov-types',
        title: 'Types of Government',
        description: 'Monarchy, democracy, authoritarianism, and more.',
        questions: [
          { text: 'What is a government ruled by a king or queen called?', options: ['Democracy', 'Monarchy', 'Republic', 'Oligarchy'], correctAnswer: 'Monarchy' },
          { text: 'Which system allows citizens to vote directly on laws?', options: ['Monarchy', 'Oligarchy', 'Direct Democracy', 'Anarchy'], correctAnswer: 'Direct Democracy' },
          { text: 'A government controlled by a small group of people is known as?', options: ['Autocracy', 'Oligarchy', 'Democracy', 'Monarchy'], correctAnswer: 'Oligarchy' },
          { text: 'In which system is power held by the people?', options: ['Monarchy', 'Democracy', 'Autocracy', 'Theocracy'], correctAnswer: 'Democracy' },
          { text: 'What is a government without a ruler or government structure?', options: ['Anarchy', 'Democracy', 'Federalism', 'Constitutionalism'], correctAnswer: 'Anarchy' },
          { text: 'Which form of government is based on religious laws?', options: ['Democracy', 'Theocracy', 'Autocracy', 'Oligarchy'], correctAnswer: 'Theocracy' },
          { text: 'India is an example of a...', options: ['Monarchy', 'Dictatorship', 'Republic', 'Theocracy'], correctAnswer: 'Republic' },
          { text: 'Which country has a constitutional monarchy?', options: ['India', 'USA', 'UK', 'China'], correctAnswer: 'UK' },
          { text: 'In a federal system, power is...', options: ['Held by one central authority', 'Shared between central and state governments', 'Only local', 'Given to religious leaders'], correctAnswer: 'Shared between central and state governments' },
          { text: 'Which type of government usually has a dictator?', options: ['Democracy', 'Republic', 'Authoritarian', 'Constitutional'], correctAnswer: 'Authoritarian' }
        ]
      },
      {
        id: 'poli-const-law',
        title: 'Constitutional Law',
        description: 'Basics of constitutional frameworks and rights.',
        questions: [
          { text: 'What is the supreme law of a country?', options: ['Civil code', 'Constitution', 'Charter', 'Bill'], correctAnswer: 'Constitution' },
          { text: 'Which document outlines the fundamental rights of citizens?', options: ['Contract', 'Act', 'Constitution', 'Policy'], correctAnswer: 'Constitution' },
          { text: 'The right to freedom of speech is a...', options: ['Legal right', 'Fundamental right', 'Civil right', 'Social right'], correctAnswer: 'Fundamental right' },
          { text: 'What does the judiciary do?', options: ['Make laws', 'Enforce laws', 'Interpret laws', 'Pass budgets'], correctAnswer: 'Interpret laws' },
          { text: 'Which body can amend the Constitution?', options: ['Judiciary', 'Executive', 'Legislature', 'President'], correctAnswer: 'Legislature' },
          { text: 'The Indian Constitution came into force in which year?', options: ['1947', '1950', '1952', '1949'], correctAnswer: '1950' },
          { text: 'Which article of the Indian Constitution deals with the right to equality?', options: ['Article 14', 'Article 21', 'Article 19', 'Article 32'], correctAnswer: 'Article 14' },
          { text: 'Which right is protected under Article 21?', options: ['Right to Education', 'Right to Freedom', 'Right to Life and Liberty', 'Right to Property'], correctAnswer: 'Right to Life and Liberty' },
          { text: 'Who is the custodian of the Constitution?', options: ['Prime Minister', 'President', 'Chief Justice', 'Parliament'], correctAnswer: 'Chief Justice' },
          { text: 'The preamble of the Constitution includes the word...', options: ['Monarchy', 'Dictatorship', 'Secular', 'Anarchist'], correctAnswer: 'Secular' }
        ]
      },
      {
        id: 'poli-int-relations',
        title: 'International Relations',
        description: 'Global politics, organizations, and conflicts.',
        questions: [
          { text: 'What does the UN stand for?', options: ['United Nations', 'United Nations Council', 'Universal Nations', 'Union of Nations'], correctAnswer: 'United Nations' },
          { text: 'Which organization promotes global peace and security?', options: ['IMF', 'WHO', 'UN', 'WTO'], correctAnswer: 'UN' },
          { text: 'NATO is a...', options: ['Trade organization', 'Military alliance', 'Cultural group', 'Economic union'], correctAnswer: 'Military alliance' },
          { text: 'Which of the following countries is not a permanent member of the UN Security Council?', options: ['Russia', 'USA', 'India', 'China'], correctAnswer: 'India' },
          { text: 'Which country exited the European Union in 2020?', options: ['Germany', 'France', 'UK', 'Italy'], correctAnswer: 'UK' },
          { text: 'What is diplomacy?', options: ['Waging war', 'Spying', 'Conducting negotiations between countries', 'Immigration control'], correctAnswer: 'Conducting negotiations between countries' },
          { text: 'Which of the following is a major global conflict organization?', options: ['ASEAN', 'NATO', 'SAARC', 'OPEC'], correctAnswer: 'NATO' },
          { text: 'India shares the longest international border with...', options: ['Pakistan', 'Nepal', 'China', 'Bangladesh'], correctAnswer: 'Bangladesh' },
          { text: 'Which country is not in the G7?', options: ['USA', 'Japan', 'Russia', 'Germany'], correctAnswer: 'Russia' },
          { text: 'Which war was fought between 1914 and 1918?', options: ['World War II', 'Cold War', 'Vietnam War', 'World War I'], correctAnswer: 'World War I' }
        ]
      },
      {
        id: 'poli-public-admin',
        title: 'Public Administration',
        description: 'The implementation of government policy.',
        questions: [
          { text: 'Public administration is primarily concerned with...', options: ['Business policies', 'Government execution', 'Judicial processes', 'Media management'], correctAnswer: 'Government execution' },
          { text: 'Who is the head of the bureaucracy in India?', options: ['Prime Minister', 'Cabinet Secretary', 'President', 'Chief Justice'], correctAnswer: 'Cabinet Secretary' },
          { text: 'The IAS stands for...', options: ['Indian Army Service', 'Indian Administrative Service', 'Indian Allied Staff', 'International Admin Services'], correctAnswer: 'Indian Administrative Service' },
          { text: 'RTI Act stands for...', options: ['Right to Information', 'Right to Internships', 'Regional Trade India', 'Resource Transfer Initiative'], correctAnswer: 'Right to Information' },
          { text: 'Public Policy is...', options: ['Random decisions', 'Private company rules', 'Government course of action', 'Judicial ruling'], correctAnswer: 'Government course of action' },
          { text: 'The district collector reports to...', options: ['Chief Justice', 'Governor', 'State Government', 'Parliament'], correctAnswer: 'State Government' },
          { text: 'Which ministry handles education in India?', options: ['Ministry of Culture', 'Ministry of Education', 'Ministry of Law', 'Ministry of Commerce'], correctAnswer: 'Ministry of Education' },
          { text: 'Civil servants are selected through...', options: ['Election', 'Nominations', 'UPSC Exam', 'Appointments by PM'], correctAnswer: 'UPSC Exam' },
          { text: 'The implementation stage of policy involves...', options: ['Debates', 'Budget approvals', 'Enforcement', 'Elections'], correctAnswer: 'Enforcement' },
          { text: 'Public administration bridges...', options: ['Law and Judiciary', 'Policy and Implementation', 'Media and Politics', 'Economy and Culture'], correctAnswer: 'Policy and Implementation' }
        ]
      },
      {
        id: 'poli-political-thought',
        title: 'Political Thought',
        description: 'Philosophers and theories of political systems.',
        questions: [
          { text: 'Who wrote "The Republic"?', options: ['Plato', 'Aristotle', 'Socrates', 'Rousseau'], correctAnswer: 'Plato' },
          { text: 'Which thinker is associated with the "Social Contract" theory?', options: ['Hobbes', 'Locke', 'Rousseau', 'All of the above'], correctAnswer: 'All of the above' },
          { text: 'Karl Marx is known for his theory of...', options: ['Capitalism', 'Communism', 'Liberalism', 'Socialism'], correctAnswer: 'Communism' },
          { text: 'Aristotle classified governments into how many types?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
          { text: 'Who said "Man is by nature a political animal"?', options: ['Plato', 'Aristotle', 'Rousseau', 'Locke'], correctAnswer: 'Aristotle' },
          { text: 'Who wrote "Leviathan"?', options: ['Locke', 'Hobbes', 'Rousseau', 'Machiavelli'], correctAnswer: 'Hobbes' },
          { text: 'Which philosopher supported the idea of separation of powers?', options: ['Montesquieu', 'Locke', 'Plato', 'Machiavelli'], correctAnswer: 'Montesquieu' },
          { text: 'Machiavelli wrote...', options: ['The Prince', 'Politics', 'The Republic', 'The Social Contract'], correctAnswer: 'The Prince' },
          { text: 'Who is considered the father of political science?', options: ['Aristotle', 'Plato', 'Machiavelli', 'Socrates'], correctAnswer: 'Aristotle' },
          { text: 'The idea of liberty is central to...', options: ['Fascism', 'Democracy', 'Monarchy', 'Authoritarianism'], correctAnswer: 'Democracy' }
        ]
      },
      {
        id: 'poli-elections',
        title: 'Elections & Voting Systems',
        description: 'How elections work and different electoral models.',
        questions: [
          { text: 'What is the process of choosing leaders called?', options: ['Legislation', 'Voting', 'Election', 'Polling'], correctAnswer: 'Election' },
          { text: 'India uses which type of voting system?', options: ['First Past the Post', 'Proportional Representation', 'Mixed System', 'Ranked Voting'], correctAnswer: 'First Past the Post' },
          { text: 'What is an electoral roll?', options: ['List of candidates', 'List of voters', 'Ballot papers', 'Polling booths'], correctAnswer: 'List of voters' },
          { text: 'What body conducts elections in India?', options: ['Supreme Court', 'Lok Sabha', 'Election Commission', 'President'], correctAnswer: 'Election Commission' },
          { text: 'EVM stands for...', options: ['Electronic Voting Machine', 'Election Vote Machine', 'Election Voter Mechanism', 'Electronic Voter Monitor'], correctAnswer: 'Electronic Voting Machine' },
          { text: 'Which article in the Indian Constitution deals with elections?', options: ['324', '356', '370', '14'], correctAnswer: '324' },
          { text: 'Voter ID in India is issued by...', options: ['UIDAI', 'RBI', 'Election Commission', 'Supreme Court'], correctAnswer: 'Election Commission' },
          { text: 'Model Code of Conduct is enforced by...', options: ['President', 'Prime Minister', 'Election Commission', 'Home Minister'], correctAnswer: 'Election Commission' },
          { text: 'Universal adult suffrage means...', options: ['Only men can vote', 'Only educated can vote', 'All adults can vote', 'Only taxpayers can vote'], correctAnswer: 'All adults can vote' },
          { text: 'Which country pioneered the secret ballot system?', options: ['USA', 'France', 'Australia', 'UK'], correctAnswer: 'Australia' }
        ]
      }
    ]
  },

  // --- ECONOMICS CATEGORY ---
  {
    id: 'economics',
    name: 'Economics',
    description: 'Understand the production, distribution, and consumption of goods and services.',
    imageUrl: '/economics.png',
    quizzes: [
      {
        id: 'econ-micro',
        title: 'Microeconomics Basics',
        description: 'Supply, demand, and consumer behavior.',
        questions: [
          { text: 'What does the law of demand state?', options: ['Higher price leads to higher demand', 'Lower price leads to lower demand', 'Higher price leads to lower demand', 'Price has no effect'], correctAnswer: 'Higher price leads to lower demand' },
          { text: 'What is utility in economics?', options: ['Profit', 'Satisfaction from consumption', 'Cost of goods', 'Revenue'], correctAnswer: 'Satisfaction from consumption' },
          { text: 'Which of the following is not a factor of production?', options: ['Land', 'Capital', 'Labour', 'Money'], correctAnswer: 'Money' },
          { text: 'A perfectly competitive market has:', options: ['Few sellers', 'Price makers', 'Identical products', 'Advertising'], correctAnswer: 'Identical products' },
          { text: 'Elasticity of demand measures:', options: ['Change in price', 'Change in cost', 'Responsiveness of demand to price change', 'Consumer preference'], correctAnswer: 'Responsiveness of demand to price change' },
          { text: 'A substitute good for tea could be:', options: ['Milk', 'Coffee', 'Juice', 'Water'], correctAnswer: 'Coffee' },
          { text: 'Inelastic demand means:', options: ['Demand changes a lot with price', 'Price stays constant', 'Demand does not change much with price', 'No demand'], correctAnswer: 'Demand does not change much with price' },
          { text: 'Which market structure has one seller?', options: ['Monopoly', 'Oligopoly', 'Perfect competition', 'Duopoly'], correctAnswer: 'Monopoly' },
          { text: 'Opportunity cost is:', options: ['The cost of all options', 'Cost of production', 'Cost of the next best alternative', 'None'], correctAnswer: 'Cost of the next best alternative' },
          { text: 'Marginal utility diminishes as:', options: ['Price increases', 'Income increases', 'Consumption increases', 'Supply decreases'], correctAnswer: 'Consumption increases' },
        ],
      },
      {
        id: 'econ-macro',
        title: 'Macroeconomics Intro',
        description: 'GDP, inflation, and unemployment.',
        questions: [
          { text: 'What does GDP stand for?', options: ['Gross Domestic Product', 'General Domestic Price', 'Great Demand Productivity', 'Global Domestic Policy'], correctAnswer: 'Gross Domestic Product' },
          { text: 'Inflation is:', options: ['Increase in production', 'Rise in general price level', 'Fall in employment', 'Decrease in taxes'], correctAnswer: 'Rise in general price level' },
          { text: 'Unemployment means:', options: ['People not willing to work', 'People working part-time', 'People without jobs and seeking work', 'Retired individuals'], correctAnswer: 'People without jobs and seeking work' },
          { text: 'Fiscal policy deals with:', options: ['Interest rates', 'Government spending and taxes', 'Money supply', 'Imports'], correctAnswer: 'Government spending and taxes' },
          { text: 'Which institution typically controls monetary policy?', options: ['Finance Ministry', 'Parliament', 'Central Bank', 'Stock Exchange'], correctAnswer: 'Central Bank' },
          { text: 'Which is NOT a component of GDP?', options: ['Consumption', 'Investment', 'Government Spending', 'Foreign Aid'], correctAnswer: 'Foreign Aid' },
          { text: 'Recession is defined as:', options: ['Price rise', 'Two consecutive quarters of negative growth', 'Employment increase', 'High GDP'], correctAnswer: 'Two consecutive quarters of negative growth' },
          { text: 'The Phillips Curve shows the relationship between:', options: ['GDP and interest rates', 'Inflation and unemployment', 'Exports and imports', 'Supply and demand'], correctAnswer: 'Inflation and unemployment' },
          { text: 'Stagflation means:', options: ['High growth and inflation', 'Low inflation and unemployment', 'High inflation and unemployment', 'Balanced economy'], correctAnswer: 'High inflation and unemployment' },
          { text: 'Monetary policy affects:', options: ['Taxation', 'Spending by consumers', 'Money supply and interest rates', 'Imports'], correctAnswer: 'Money supply and interest rates' },
        ],
      },
      {
        id: 'econ-markets',
        title: 'Market Structures',
        description: 'Perfect competition, monopoly, oligopoly.',
        questions: [
          { text: 'In perfect competition, firms are:', options: ['Price makers', 'Price takers', 'Monopolists', 'Cartels'], correctAnswer: 'Price takers' },
          { text: 'Which structure involves a few dominant firms?', options: ['Perfect competition', 'Monopoly', 'Oligopoly', 'Duopoly'], correctAnswer: 'Oligopoly' },
          { text: 'Monopolistic competition features:', options: ['Identical products', 'Few sellers', 'Differentiated products', 'No entry'], correctAnswer: 'Differentiated products' },
          { text: 'A monopoly exists when:', options: ['Many sellers', 'No competition', 'One firm controls market', 'All prices same'], correctAnswer: 'One firm controls market' },
          { text: 'Collusion is most likely in:', options: ['Monopoly', 'Perfect competition', 'Oligopoly', 'Duopoly'], correctAnswer: 'Oligopoly' },
          { text: 'Barriers to entry are highest in:', options: ['Monopoly', 'Perfect competition', 'Free market', 'Monopolistic competition'], correctAnswer: 'Monopoly' },
          { text: 'Game theory is most useful in analyzing:', options: ['Monopolies', 'Perfect competition', 'Oligopolies', 'Public goods'], correctAnswer: 'Oligopolies' },
          { text: 'Cartels are:', options: ['Government agencies', 'Consumer groups', 'Firms that agree on prices', 'Free markets'], correctAnswer: 'Firms that agree on prices' },
          { text: 'Product differentiation is key to:', options: ['Monopoly', 'Oligopoly', 'Monopolistic competition', 'Perfect competition'], correctAnswer: 'Monopolistic competition' },
          { text: 'Price wars are common in:', options: ['Perfect competition', 'Monopoly', 'Oligopoly', 'All markets'], correctAnswer: 'Oligopoly' },
        ],
      },
      {
        id: 'econ-money',
        title: 'Money & Banking',
        description: 'Financial systems and monetary policy.',
        questions: [
          { text: 'Which is not a function of money?', options: ['Medium of exchange', 'Store of value', 'Unit of account', 'Means of production'], correctAnswer: 'Means of production' },
          { text: 'What is a central bank?', options: ['Commercial bank', 'Government tax office', 'Bank that controls monetary policy', 'Credit rating agency'], correctAnswer: 'Bank that controls monetary policy' },
          { text: 'Commercial banks mainly do:', options: ['Tax collection', 'Currency printing', 'Deposits and loans', 'Run the stock market'], correctAnswer: 'Deposits and loans' },
          { text: 'Money supply increases when:', options: ['Banks lend more', 'Interest rates rise', 'Govt reduces spending', 'Taxes increase'], correctAnswer: 'Banks lend more' },
          { text: 'Reserve ratio refers to:', options: ['Bank’s profit margin', 'Govt’s spending', 'Portion of deposits kept with central bank', 'Stock of gold'], correctAnswer: 'Portion of deposits kept with central bank' },
          { text: 'Inflation control is a goal of:', options: ['Bank mergers', 'Monetary policy', 'International trade', 'GDP growth'], correctAnswer: 'Monetary policy' },
          { text: 'Repo rate is:', options: ['Rate banks lend to each other', 'Rate central bank lends to banks', 'Tax rate', 'Loan processing fee'], correctAnswer: 'Rate central bank lends to banks' },
          { text: 'What is fiat money?', options: ['Backed by gold', 'Has intrinsic value', 'Govt-declared legal tender', 'Barter system'], correctAnswer: 'Govt-declared legal tender' },
          { text: 'Which one is a digital payment system?', options: ['NEFT', 'Cheque', 'Cash', 'Passbook'], correctAnswer: 'NEFT' },
          { text: 'A credit rating measures:', options: ['Company profit', 'Individual salary', 'Ability to repay debt', 'Bank balance'], correctAnswer: 'Ability to repay debt' },
        ],
      },
      {
        id: 'econ-trade',
        title: 'International Trade',
        description: 'Trade policies and global economic relations.',
        questions: [
          { text: 'What does WTO stand for?', options: ['World Trade Office', 'World Treaty Organization', 'World Trade Organization', 'World Transport Order'], correctAnswer: 'World Trade Organization' },
          { text: 'Free trade means:', options: ['No imports', 'Government regulated trade', 'Trade without barriers', 'Only domestic products'], correctAnswer: 'Trade without barriers' },
          { text: 'A tariff is:', options: ['Import tax', 'Subsidy', 'Loan', 'Quota'], correctAnswer: 'Import tax' },
          { text: 'Exports are:', options: ['Goods sold abroad', 'Goods bought from abroad', 'Foreign services', 'Govt revenue'], correctAnswer: 'Goods sold abroad' },
          { text: 'Trade deficit means:', options: ['Exports > Imports', 'Imports > Exports', 'No trade', 'Equal trade'], correctAnswer: 'Imports > Exports' },
          { text: 'Currency exchange rate affects:', options: ['Interest rates', 'Local laws', 'Import/export costs', 'Population'], correctAnswer: 'Import/export costs' },
          { text: 'A quota in trade is:', options: ['A tax', 'A limit on imports', 'Loan amount', 'Export subsidy'], correctAnswer: 'A limit on imports' },
          { text: 'NAFTA was between:', options: ['Asia-Pacific nations', 'India and China', 'USA, Canada, Mexico', 'Africa countries'], correctAnswer: 'USA, Canada, Mexico' },
          { text: 'Globalization leads to:', options: ['Less trade', 'More isolation', 'Interconnected economies', 'Lower education'], correctAnswer: 'Interconnected economies' },
          { text: 'Comparative advantage is when:', options: ['A country produces everything', 'More imports', 'A country produces efficiently', 'Govt bans exports'], correctAnswer: 'A country produces efficiently' },
        ],
      },
      {
        id: 'econ-development',
        title: 'Economic Development',
        description: 'Theories and challenges of economic growth.',
        questions: [
          { text: 'What does HDI stand for?', options: ['High Demand Index', 'Human Development Index', 'Human Demand Indicator', 'Health and Development Info'], correctAnswer: 'Human Development Index' },
          { text: 'Which is NOT a measure of development?', options: ['GDP per capita', 'Life expectancy', 'Literacy rate', 'Size of the military'], correctAnswer: 'Size of the military' },
          { text: 'Developing countries often face:', options: ['Low population', 'High growth', 'Poverty and unemployment', 'Industrial revolution'], correctAnswer: 'Poverty and unemployment' },
          { text: 'Foreign Direct Investment (FDI) helps:', options: ['Reduce exports', 'Increase remittances', 'Boost infrastructure and jobs', 'Decrease competition'], correctAnswer: 'Boost infrastructure and jobs' },
          { text: 'Sustainable development means:', options: ['Using all resources fast', 'No economic growth', 'Development without harming future needs', 'Only rural development'], correctAnswer: 'Development without harming future needs' },
          { text: 'UNDP stands for:', options: ['United Nations Development Program', 'Universal New Development Plan', 'United Nations Donation Project', 'United Nations Demographic Policy'], correctAnswer: 'United Nations Development Program' },
          { text: 'Which country has high HDI?', options: ['Norway', 'Somalia', 'Afghanistan', 'Chad'], correctAnswer: 'Norway' },
          { text: 'Brain drain refers to:', options: ['Water pollution', 'Youth migration for jobs', 'Brain diseases', 'Import of technology'], correctAnswer: 'Youth migration for jobs' },
          { text: 'Which sector leads development in early stages?', options: ['Tertiary', 'Quaternary', 'Primary', 'Secondary'], correctAnswer: 'Primary' },
          { text: 'Microfinance targets:', options: ['Large corporations', 'Poor individuals', 'Banks', 'Governments'], correctAnswer: 'Poor individuals' },
        ],
      },
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
      {
        id: 'math-geometry-intro',
        title: 'Geometry Fundamentals',
        description: 'Shapes, angles, and spatial reasoning.',
        questions: [
          { text: 'How many degrees are in a right angle?', options: ['45°', '90°', '180°', '360°'], correctAnswer: '90°' },
          { text: 'A triangle has how many sides?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
          { text: 'What is the sum of all angles in a triangle?', options: ['180°', '360°', '90°', '270°'], correctAnswer: '180°' },
          { text: 'A square has how many equal sides?', options: ['2', '3', '4', '0'], correctAnswer: '4' },
          { text: 'Which shape has no corners?', options: ['Square', 'Rectangle', 'Triangle', 'Circle'], correctAnswer: 'Circle' },
          { text: 'What do you call a six-sided polygon?', options: ['Pentagon', 'Hexagon', 'Heptagon', 'Octagon'], correctAnswer: 'Hexagon' },
          { text: 'What is a line that touches a circle at only one point called?', options: ['Radius', 'Chord', 'Tangent', 'Diameter'], correctAnswer: 'Tangent' },
          { text: 'What do we call the longest side of a right triangle?', options: ['Base', 'Height', 'Hypotenuse', 'Diagonal'], correctAnswer: 'Hypotenuse' },
          { text: 'A rectangle has two pairs of...', options: ['Equal angles', 'Equal sides', 'Equal diagonals', 'Equal curves'], correctAnswer: 'Equal sides' },
          { text: 'What is the name of a 3D shape with 6 equal square faces?', options: ['Cube', 'Cylinder', 'Cone', 'Sphere'], correctAnswer: 'Cube' }
        ]
      },
      {
        id: 'math-calculus-diff',
        title: 'Calculus: Differentiation',
        description: 'Rates of change and derivatives.',
        questions: [
          { text: 'What is the derivative of x^2?', options: ['x', '2x', 'x^2', '2'], correctAnswer: '2x' },
          { text: 'The derivative of a constant is...', options: ['0', '1', 'the constant itself', 'infinite'], correctAnswer: '0' },
          { text: 'd/dx (sin x) = ?', options: ['cos x', '-cos x', '-sin x', 'tan x'], correctAnswer: 'cos x' },
          { text: 'd/dx (e^x) = ?', options: ['e^x', 'x * e^x', '1', '0'], correctAnswer: 'e^x' },
          { text: 'What is d/dx (ln x)?', options: ['1', 'ln x', '1/x', 'x ln x'], correctAnswer: '1/x' },
          { text: 'The slope of the tangent line at a point on a curve is given by the...', options: ['Area', 'Integral', 'Derivative', 'Gradient'], correctAnswer: 'Derivative' },
          { text: 'd/dx (x^3) = ?', options: ['3x^2', 'x^2', '3x', 'x^3'], correctAnswer: '3x^2' },
          { text: 'What is the second derivative of x^3?', options: ['6x', '3x^2', '3x', 'x^3'], correctAnswer: '6x' },
          { text: 'Chain rule is used when differentiating...', options: ['Product', 'Quotient', 'Composite functions', 'Constants'], correctAnswer: 'Composite functions' },
          { text: 'The derivative of tan x is...', options: ['sec^2 x', 'cosec^2 x', 'sec x tan x', 'cot x'], correctAnswer: 'sec^2 x' }
        ]
      },
      {
        id: 'math-statistics',
        title: 'Basic Statistics',
        description: 'Mean, median, mode, and probability.',
        questions: [
          { text: 'What is the mean of 2, 4, 6, 8, 10?', options: ['4', '6', '5', '7'], correctAnswer: '6' },
          { text: 'What is the median of 1, 3, 3, 6, 7, 8, 9?', options: ['6', '5', '3', '7'], correctAnswer: '6' },
          { text: 'What is the mode in this set: 2, 2, 3, 4, 5, 2?', options: ['2', '3', '4', '5'], correctAnswer: '2' },
          { text: 'What is the probability of flipping heads on a fair coin?', options: ['0.25', '0.5', '0.75', '1'], correctAnswer: '0.5' },
          { text: 'What is the range of 3, 7, 10, 12?', options: ['9', '10', '12', '7'], correctAnswer: '9' },
          { text: 'What is the probability of rolling a 3 on a 6-sided die?', options: ['1/6', '1/3', '1/2', '1/4'], correctAnswer: '1/6' },
          { text: 'If the mean of five numbers is 10, what is their total sum?', options: ['10', '50', '5', '100'], correctAnswer: '50' },
          { text: 'Which of the following is not a measure of central tendency?', options: ['Mean', 'Median', 'Mode', 'Range'], correctAnswer: 'Range' },
          { text: 'In a normal distribution, the mean, median, and mode are...', options: ['all equal', 'all different', 'mean > mode', 'mode > mean'], correctAnswer: 'all equal' },
          { text: 'What is the probability of getting an even number when rolling a die?', options: ['1/6', '1/2', '1/3', '2/3'], correctAnswer: '1/2' }
        ]
      },
      {
        id: 'math-trigonometry',
        title: 'Trigonometry',
        description: 'Angles, triangles, and trigonometric functions.',
        questions: [
          { text: 'What is sin(90°)?', options: ['0', '1', '0.5', '√2/2'], correctAnswer: '1' },
          { text: 'cos(0°) equals...', options: ['1', '0', '-1', '0.5'], correctAnswer: '1' },
          { text: 'tan(45°) equals...', options: ['1', '0', '√3', '∞'], correctAnswer: '1' },
          { text: 'What is the reciprocal of sin?', options: ['cos', 'tan', 'cosec', 'cot'], correctAnswer: 'cosec' },
          { text: 'What is cot(x) equal to?', options: ['1/tan(x)', 'tan(x)', 'sin(x)', '1/sin(x)'], correctAnswer: '1/tan(x)' },
          { text: 'sin^2(x) + cos^2(x) = ?', options: ['0', '1', '2', 'x'], correctAnswer: '1' },
          { text: 'What is sec(60°)?', options: ['2', '1', '2/√3', '2√3'], correctAnswer: '2' },
          { text: 'tan(x) = sin(x)/___?', options: ['sec(x)', 'cos(x)', 'cosec(x)', 'cot(x)'], correctAnswer: 'cos(x)' },
          { text: 'In a right triangle, sin(θ) = opposite/hypotenuse. True or False?', options: ['True', 'False'], correctAnswer: 'True' },
          { text: 'cos(60°) = ?', options: ['1/2', '√3/2', '1', '0'], correctAnswer: '1/2' }
        ]
      },
      {
        id: 'math-number-theory',
        title: 'Number Theory',
        description: 'Properties of integers, primes, and divisibility.',
        questions: [
          { text: 'Which of the following is a prime number?', options: ['4', '6', '7', '9'], correctAnswer: '7' },
          { text: 'What is the smallest prime number?', options: ['0', '1', '2', '3'], correctAnswer: '2' },
          { text: 'Is 97 a prime number?', options: ['Yes', 'No'], correctAnswer: 'Yes' },
          { text: 'What is the HCF of 12 and 18?', options: ['2', '3', '6', '12'], correctAnswer: '6' },
          { text: 'What is the LCM of 4 and 5?', options: ['10', '20', '15', '5'], correctAnswer: '20' },
          { text: 'An even number is always divisible by...', options: ['2', '3', '5', '7'], correctAnswer: '2' },
          { text: 'How many factors does 6 have?', options: ['2', '3', '4', '5'], correctAnswer: '4' },
          { text: 'Which number is divisible by 3: 123, 125, 127?', options: ['123', '125', '127', 'None'], correctAnswer: '123' },
          { text: 'A number divisible by both 2 and 3 is also divisible by...', options: ['5', '6', '12', '1'], correctAnswer: '6' },
          { text: 'What is the greatest 2-digit prime number?', options: ['97', '89', '91', '99'], correctAnswer: '97' }
        ]
      }
    ]
  },


  // --- HINDI CATEGORY ---
  {
    id: 'hindi',
    name: 'Hindi',
    description: 'Test your knowledge of Hindi grammar, vocabulary, and literature.',
    imageUrl: '/hindi.png',
    quizzes: [
      {
        id: 'hindi-grammar-basic',
        title: 'Basic Hindi Grammar',
        description: 'Nouns, verbs, and sentence structure.',
        questions: [
          { text: 'निम्न में से संज्ञा कौन सी है?', options: ['खेलना', 'बच्चा', 'सुंदर', 'तेज़'], correctAnswer: 'बच्चा' },
          { text: 'क्रिया (verb) कौन सी है?', options: ['लाल', 'चलना', 'बड़ा', 'आधा'], correctAnswer: 'चलना' },
          { text: 'वाक्य में विशेषण (adjective) खोजें: "लाल घर बड़ा है।"', options: ['लाल', 'घर', 'बड़ा', 'है'], correctAnswer: 'बड़ा' },
          { text: 'निम्न में से सर्वनाम (pronoun) कौन सा है?', options: ['मैं', 'किताब', 'खुला', 'लाल'], correctAnswer: 'मैं' },
          { text: 'वाक्य में "से" शब्द किस प्रकार का है?', options: ['क्रिया', 'विशेषण', 'संबंधबोधक', 'क्रियाविशेषण'], correctAnswer: 'संबंधबोधक' },
          { text: 'लिंग (gender): "लड़कीयाँ" का लिंग क्या है?', options: ['पुल्लिंग', 'स्त्रीलिंग', 'नपुंसकलिंग', 'सर्वनाम'], correctAnswer: 'स्त्रीलिंग' },
          { text: 'वचन (number): "पेड़" किस वचन का उदाहरण है?', options: ['एकवचन', 'बहुवचन', 'त्रिवचन', 'द्विवचन'], correctAnswer: 'एकवचन' },
          { text: 'कारक कितने प्रकार के होते हैं?', options: ['चार', 'छह', 'आठ', 'दस'], correctAnswer: 'आठ' },
          { text: 'समास के कितने भेद होते हैं?', options: ['दो', 'चार', 'पांच', 'छह'], correctAnswer: 'छह' },
          { text: 'वह दौड़ता है - इस वाक्य में "वह" क्या है?', options: ['संज्ञा', 'सर्वनाम', 'क्रिया', 'विशेषण'], correctAnswer: 'सर्वनाम' }
        ]
      },
      {
        id: 'hindi-vocab-daily',
        title: 'Daily Hindi Vocabulary',
        description: 'Common words and phrases for everyday use.',
        questions: [
          { text: '"धन्यवाद" का अंग्रेजी में क्या मतलब है?', options: ['Hello', 'Thank you', 'Please', 'Sorry'], correctAnswer: 'Thank you' },
          { text: '"क्षमा करें" का उपयोग कब होता है?', options: ['अभिवादन में', 'माफी मांगने में', 'धन्यवाद देने में', 'प्रश्न पूछने में'], correctAnswer: 'माफी मांगने में' },
          { text: '"जल्दी करो" का अंग्रेजी में क्या होगा?', options: ['Take care', 'Hurry up', 'Sit down', 'Go ahead'], correctAnswer: 'Hurry up' },
          { text: '"मुझे भूख लगी है" का अर्थ क्या है?', options: ['I am sad', 'I am hungry', 'I am tired', 'I am happy'], correctAnswer: 'I am hungry' },
          { text: '"पानी" किस श्रेणी का शब्द है?', options: ['संज्ञा', 'क्रिया', 'विशेषण', 'सर्वनाम'], correctAnswer: 'संज्ञा' },
          { text: '"ईमानदार" शब्द का विलोम क्या है?', options: ['झूठा', 'बेईमान', 'गुस्सैल', 'अशिष्ट'], correctAnswer: 'बेईमान' },
          { text: '"सुंदर" का पर्यायवाची शब्द क्या है?', options: ['भयानक', 'खूबसूरत', 'लंबा', 'मोटा'], correctAnswer: 'खूबसूरत' },
          { text: '"सड़क" शब्द किसके लिए प्रयोग होता है?', options: ['पेय पदार्थ', 'मार्ग', 'वस्त्र', 'खेल'], correctAnswer: 'मार्ग' },
          { text: '"पढ़ाई" किस प्रकार की संज्ञा है?', options: ['भाववाचक', 'व्यक्तिवाचक', 'जातिवाचक', 'सर्वनाम'], correctAnswer: 'भाववाचक' },
          { text: '"अनार" शब्द का विलोम क्या होगा?', options: ['सेब', 'अंगूर', 'कोई नहीं', 'अखरोट'], correctAnswer: 'कोई नहीं' }
        ]
      },
      {
        id: 'hindi-literature-intro',
        title: 'Hindi Literature Intro',
        description: 'Famous authors and literary works.',
        questions: [
          { text: '"गोदान" उपन्यास के लेखक कौन हैं?', options: ['मुंशी प्रेमचंद', 'जयशंकर प्रसाद', 'महादेवी वर्मा', 'हरिवंश राय बच्चन'], correctAnswer: 'मुंशी प्रेमचंद' },
          { text: '"कामायनी" किस लेखक की रचना है?', options: ['जयशंकर प्रसाद', 'मैथिलीशरण गुप्त', 'रामधारी सिंह दिनकर', 'सूरदास'], correctAnswer: 'जयशंकर प्रसाद' },
          { text: '"साकेत" किसकी रचना है?', options: ['मैथिलीशरण गुप्त', 'निराला', 'प्रेमचंद', 'तुलसीदास'], correctAnswer: 'मैथिलीशरण गुप्त' },
          { text: '"कुरुक्षेत्र" के लेखक कौन हैं?', options: ['दिनकर', 'प्रेमचंद', 'राहुल सांकृत्यायन', 'रामानंद'], correctAnswer: 'दिनकर' },
          { text: '"बंद गली का आखिरी मकान" किसकी रचना है?', options: ['मोहन राकेश', 'कमलेश्वर', 'धर्मवीर भारती', 'राजेन्द्र यादव'], correctAnswer: 'कमलेश्वर' },
          { text: 'कबीर किस काव्य शैली से जुड़े थे?', options: ['रीतिकाल', 'भक्तिकाल', 'छायावाद', 'नवजागरण'], correctAnswer: 'भक्तिकाल' },
          { text: 'महादेवी वर्मा किस युग की कवयित्री थीं?', options: ['भक्तिकाल', 'छायावाद', 'रीतिकाल', 'आधुनिक'], correctAnswer: 'छायावाद' },
          { text: '"सूरसागर" के रचयिता कौन हैं?', options: ['सूरदास', 'तुलसीदास', 'कबीर', 'जयशंकर प्रसाद'], correctAnswer: 'सूरदास' },
          { text: '"रामचरितमानस" किसने लिखा?', options: ['तुलसीदास', 'वाल्मीकि', 'रहीम', 'कबीर'], correctAnswer: 'तुलसीदास' },
          { text: '"अंधायुग" नाटक के लेखक कौन हैं?', options: ['धर्मवीर भारती', 'मोहन राकेश', 'श्याम बेनेगल', 'निराला'], correctAnswer: 'धर्मवीर भारती' }
        ]
      },
      {
        id: 'hindi-proverbs',
        title: 'Hindi Proverbs & Idioms',
        description: 'Common sayings and their meanings.',
        questions: [
          { text: '"नाच न जाने आँगन टेढ़ा" का अर्थ क्या है?', options: ['बहाना बनाना', 'सीधा रास्ता लेना', 'झगड़ा करना', 'अच्छा नाचना'], correctAnswer: 'बहाना बनाना' },
          { text: '"ऊँट के मुँह में जीरा" का अर्थ है?', options: ['बहुत अधिक', 'बहुत कम', 'सही मात्रा', 'तेज़ी से'], correctAnswer: 'बहुत कम' },
          { text: '"अधजल गगरी छलकत जाए" का भावार्थ क्या है?', options: ['ज्ञानी व्यक्ति चुप रहते हैं', 'कम ज्ञानी दिखावा करते हैं', 'बहुत पानी गिरा', 'प्यास बुझी'], correctAnswer: 'कम ज्ञानी दिखावा करते हैं' },
          { text: '"घर की मुर्गी दाल बराबर" का क्या अर्थ है?', options: ['घर की चीज़ की कद्र नहीं', 'मुर्गी दाल खाती है', 'महंगी चीज़ें अच्छी नहीं', 'कठिन भोजन'], correctAnswer: 'घर की चीज़ की कद्र नहीं' },
          { text: '"नाम बड़े दर्शन छोटे" का अर्थ क्या है?', options: ['बड़ा नाम झूठा है', 'बड़ा नाम लेकिन कार्य नहीं', 'नाम छोटा काम बड़ा', 'अदृश्य काम'], correctAnswer: 'बड़ा नाम लेकिन कार्य नहीं' },
          { text: '"डूबते को तिनके का सहारा" कब कहा जाता है?', options: ['संकट में थोड़ी मदद मिलना', 'डूब जाना', 'अकेले रहना', 'तैरना सीखना'], correctAnswer: 'संकट में थोड़ी मदद मिलना' },
          { text: '"एक तीर से दो शिकार" का भावार्थ है?', options: ['दोनों हाथों से कार्य करना', 'दो कार्य एक साथ करना', 'अधूरा कार्य', 'असफल प्रयास'], correctAnswer: 'दो कार्य एक साथ करना' },
          { text: '"जिसकी लाठी उसकी भैंस" का अर्थ?', options: ['बलवान का अधिकार चलता है', 'भैंस भागी', 'लाठी टूटी', 'लड़ाई हुई'], correctAnswer: 'बलवान का अधिकार चलता है' },
          { text: '"कागज़ी शेर" किसे कहते हैं?', options: ['कागज़ पर शेर', 'साहसी व्यक्ति', 'नाम का ही बलवान', 'चित्रकारी'], correctAnswer: 'नाम का ही बलवान' },
          { text: '"आसमान से गिरे, खजूर में अटके" का अर्थ क्या है?', options: ['एक संकट से निकलकर दूसरे में फँसना', 'घूमना', 'भाग्य बदलना', 'ऊँचाई से गिरना'], correctAnswer: 'एक संकट से निकलकर दूसरे में फँसना' }
        ]
      },
      {
        id: 'hindi-tenses',
        title: 'Hindi Tenses',
        description: 'Past, present, and future tense usage.',
        questions: [
          { text: '"मैं स्कूल जाता हूँ।" यह वाक्य किस काल में है?', options: ['भूतकाल', 'वर्तमान काल', 'भविष्यत्काल', 'पूर्ण काल'], correctAnswer: 'वर्तमान काल' },
          { text: '"वह बाजार गया था।" यह किस काल का उदाहरण है?', options: ['भविष्यत्काल', 'पूर्ण भूतकाल', 'वर्तमान काल', 'संदिग्ध'], correctAnswer: 'पूर्ण भूतकाल' },
          { text: '"मैंने खाना खाया।" यह वाक्य किस काल में है?', options: ['भूतकाल', 'वर्तमान काल', 'भविष्यत्काल', 'सतत काल'], correctAnswer: 'भूतकाल' },
          { text: '"वह खेलने जाएगा।" यह किस काल का वाक्य है?', options: ['भविष्यत्काल', 'वर्तमान', 'भूतकाल', 'पूर्ण'], correctAnswer: 'भविष्यत्काल' },
          { text: '"मैं पढ़ रहा हूँ।" यह किस प्रकार का वाक्य है?', options: ['वर्तमान सतत', 'भूतकाल', 'भविष्य', 'पूर्ण'], correctAnswer: 'वर्तमान सतत' },
          { text: '"वह गा रही थी।" यह किस काल में है?', options: ['भविष्यत्काल', 'भूत सतत', 'वर्तमान', 'निश्चित'], correctAnswer: 'भूत सतत' },
          { text: '"मैं दौड़ चुका हूँ।" यह वाक्य किस काल का है?', options: ['वर्तमान पूर्ण', 'भूतकाल', 'भविष्य पूर्ण', 'संदिग्ध'], correctAnswer: 'वर्तमान पूर्ण' },
          { text: '"वह आएगा।" काल बताइए।', options: ['भविष्यत्काल', 'भूतकाल', 'वर्तमान', 'निश्चित'], correctAnswer: 'भविष्यत्काल' },
          { text: '"तुम नाचते हो।" यह किस काल में है?', options: ['वर्तमान', 'भविष्य', 'भूत', 'पूर्ण'], correctAnswer: 'वर्तमान' },
          { text: '"उन्होंने गीत गाया था।" किस काल में है?', options: ['भूत पूर्ण', 'वर्तमान', 'भविष्य', 'सतत'], correctAnswer: 'भूत पूर्ण' }
        ]
      },
      {
        id: 'hindi-writing',
        title: 'Devanagari Script',
        description: 'Recognition and basic writing of Hindi script.',
        questions: [
          { text: 'अक्षर "क" किस ध्वनि का प्रतिनिधित्व करता है?', options: ['ka', 'ga', 'cha', 'ta'], correctAnswer: 'ka' },
          { text: '"श" को अंग्रेजी में कैसे उच्चारित किया जाता है?', options: ['sa', 'sha', 'tha', 'ja'], correctAnswer: 'sha' },
          { text: '"क्ष" कौन से वर्णों का संयुक्त रूप है?', options: ['क + स', 'क + ष', 'क + श', 'ष + श'], correctAnswer: 'क + ष' },
          { text: '"ज्ञ" किसका संयुक्त रूप है?', options: ['ग + य', 'ज + ञ', 'ज + य', 'ञ + य'], correctAnswer: 'ज + ञ' },
          { text: '"आ" किस स्वर का विस्तार है?', options: ['अ', 'इ', 'ई', 'ऊ'], correctAnswer: 'अ' },
          { text: 'देवनागरी लिपि किस भाषा के लिए प्रयुक्त होती है?', options: ['हिंदी', 'अंग्रेज़ी', 'अरबी', 'फारसी'], correctAnswer: 'हिंदी' },
          { text: '"ठ" किस स्थान पर उच्चारित होता है?', options: ['ओष्ठ्य', 'मूर्धन्य', 'तालव्य', 'दंत्य'], correctAnswer: 'मूर्धन्य' },
          { text: 'हिंदी वर्णमाला में कितने स्वर होते हैं?', options: ['11', '12', '13', '10'], correctAnswer: '11' },
          { text: 'हिंदी वर्णमाला में व्यंजन कितने होते हैं?', options: ['33', '35', '36', '34'], correctAnswer: '33' },
          { text: '“ऋ” कौन सा स्वर है?', options: ['संयुक्त स्वर', 'मूल स्वर', 'नवीन स्वर', 'विशेष स्वर'], correctAnswer: 'संयुक्त स्वर' }
        ]
      }
    ]
  },


  // --- ENGLISH CATEGORY ---
  {
    id: 'english',
    name: 'English',
    description: 'Improve your English grammar, vocabulary, and comprehension.',
    imageUrl: '/english.png',
    quizzes: [
      {
        id: 'eng-grammar-basic',
        title: 'Basic English Grammar',
        description: 'Parts of speech, sentence structure, and punctuation.',
        questions: [
          { text: 'Which of the following is a noun?', options: ['Quickly', 'Run', 'Apple', 'Blue'], correctAnswer: 'Apple' },
          { text: 'Which word is a verb?', options: ['Happy', 'Swim', 'Bright', 'Quick'], correctAnswer: 'Swim' },
          { text: 'Identify the adjective: "The sky is blue."', options: ['Sky', 'Is', 'Blue', 'The'], correctAnswer: 'Blue' },
          { text: 'Which sentence is correctly punctuated?', options: ['I like pizza, burgers and pasta.', 'I like pizza, burgers, and pasta.', 'I like pizza burgers and pasta.', 'I like pizza; burgers and pasta.'], correctAnswer: 'I like pizza, burgers, and pasta.' },
          { text: 'Which of the following is a conjunction?', options: ['And', 'Very', 'Runs', 'Fast'], correctAnswer: 'And' },
          { text: 'Identify the preposition: "The cat is under the table."', options: ['Cat', 'Under', 'Table', 'Is'], correctAnswer: 'Under' },
          { text: 'Which word is an interjection?', options: ['Ouch!', 'Run', 'Table', 'Because'], correctAnswer: 'Ouch!' },
          { text: 'What is the subject in the sentence: "Dogs bark at strangers."', options: ['Dogs', 'Bark', 'Strangers', 'At'], correctAnswer: 'Dogs' },
          { text: 'Choose the correct article: "He is ___ honest man."', options: ['A', 'An', 'The', 'No article'], correctAnswer: 'An' },
          { text: 'Which sentence is in the past tense?', options: ['She walks to school.', 'She will walk to school.', 'She walked to school.', 'She is walking to school.'], correctAnswer: 'She walked to school.' }
        ]
      },
      {
        id: 'eng-vocab-advanced',
        title: 'Advanced English Vocabulary',
        description: 'Synonyms, antonyms, and complex words.',
        questions: [
          { text: 'Choose the synonym of "Abandon".', options: ['Leave', 'Hold', 'Stay', 'Keep'], correctAnswer: 'Leave' },
          { text: 'What is the antonym of "Generous"?', options: ['Kind', 'Greedy', 'Loving', 'Wise'], correctAnswer: 'Greedy' },
          { text: 'What does "meticulous" mean?', options: ['Careless', 'Detailed', 'Fast', 'Lazy'], correctAnswer: 'Detailed' },
          { text: 'Choose the synonym of "Candid".', options: ['Fake', 'Honest', 'Secretive', 'Rude'], correctAnswer: 'Honest' },
          { text: 'Which word means "to make something better"?', options: ['Worsen', 'Amend', 'Ignore', 'Damage'], correctAnswer: 'Amend' },
          { text: 'Choose the antonym of "Rapid".', options: ['Swift', 'Slow', 'Quick', 'Prompt'], correctAnswer: 'Slow' },
          { text: 'What does "ephemeral" mean?', options: ['Eternal', 'Temporary', 'Big', 'Noisy'], correctAnswer: 'Temporary' },
          { text: 'What is the meaning of "benevolent"?', options: ['Cruel', 'Kind-hearted', 'Lazy', 'Angry'], correctAnswer: 'Kind-hearted' },
          { text: 'What is the synonym of "Reluctant"?', options: ['Willing', 'Unwilling', 'Eager', 'Happy'], correctAnswer: 'Unwilling' },
          { text: 'Which word is closest in meaning to "elated"?', options: ['Sad', 'Confused', 'Thrilled', 'Bored'], correctAnswer: 'Thrilled' }
        ]
      },
      {
        id: 'eng-literature-classics',
        title: 'English Literary Classics',
        description: 'Famous works and authors from different periods.',
        questions: [
          { text: 'Who wrote "Romeo and Juliet"?', options: ['William Wordsworth', 'William Shakespeare', 'Jane Austen', 'Charles Dickens'], correctAnswer: 'William Shakespeare' },
          { text: 'Who is the author of "Pride and Prejudice"?', options: ['Charlotte Brontë', 'Jane Austen', 'Emily Dickinson', 'Sylvia Plath'], correctAnswer: 'Jane Austen' },
          { text: '"A Tale of Two Cities" was written by:', options: ['Mark Twain', 'George Orwell', 'Charles Dickens', 'Oscar Wilde'], correctAnswer: 'Charles Dickens' },
          { text: '"To Kill a Mockingbird" deals with which theme?', options: ['Fantasy', 'Justice and Racism', 'Science Fiction', 'Romance'], correctAnswer: 'Justice and Racism' },
          { text: 'What genre is "1984" by George Orwell?', options: ['Dystopian', 'Comedy', 'Romance', 'Historical'], correctAnswer: 'Dystopian' },
          { text: 'Who wrote the poem "The Raven"?', options: ['Robert Frost', 'Edgar Allan Poe', 'Walt Whitman', 'John Keats'], correctAnswer: 'Edgar Allan Poe' },
          { text: 'Who created the character Sherlock Holmes?', options: ['Agatha Christie', 'J.K. Rowling', 'Arthur Conan Doyle', 'Stephen King'], correctAnswer: 'Arthur Conan Doyle' },
          { text: 'The line "All the world’s a stage" is from which play?', options: ['Hamlet', 'Macbeth', 'As You Like It', 'Othello'], correctAnswer: 'As You Like It' },
          { text: 'What is the setting of "The Great Gatsby"?', options: ['London', 'Paris', 'New York', 'Chicago'], correctAnswer: 'New York' },
          { text: '"Frankenstein" was written by:', options: ['Mary Shelley', 'Bram Stoker', 'Jules Verne', 'H.G. Wells'], correctAnswer: 'Mary Shelley' }
        ]
      },
      {
        id: 'eng-idioms-phrasal',
        title: 'Idioms & Phrasal Verbs',
        description: 'Common English idioms and phrasal verbs.',
        questions: [
          { text: 'What does "break the ice" mean?', options: ['Cool down', 'Start a conversation', 'Fall through', 'Stay silent'], correctAnswer: 'Start a conversation' },
          { text: '"Kick the bucket" is a phrase that means:', options: ['Clean the floor', 'Buy a pail', 'Die', 'Play football'], correctAnswer: 'Die' },
          { text: 'What does "look after" mean?', options: ['Ignore', 'Take care of', 'Search for', 'Laugh at'], correctAnswer: 'Take care of' },
          { text: '"Let the cat out of the bag" means:', options: ['Play with animals', 'Reveal a secret', 'Escape quickly', 'Start a fight'], correctAnswer: 'Reveal a secret' },
          { text: '"Call off" means:', options: ['Cancel', 'Shout', 'Call again', 'Speak louder'], correctAnswer: 'Cancel' },
          { text: '"Piece of cake" means:', options: ['Delicious', 'Easy', 'Expensive', 'Small'], correctAnswer: 'Easy' },
          { text: '"Put up with" means:', options: ['Construct something', 'Tolerate', 'Lift up', 'Raise a child'], correctAnswer: 'Tolerate' },
          { text: '"Under the weather" means:', options: ['Sick', 'Outside', 'Traveling', 'Happy'], correctAnswer: 'Sick' },
          { text: 'What does "give in" mean?', options: ['Donate', 'Surrender', 'Push forward', 'Fight'], correctAnswer: 'Surrender' },
          { text: '"Hit the books" means:', options: ['Throw books', 'Start studying', 'Sleep on books', 'Drop out'], correctAnswer: 'Start studying' }
        ]
      },
      {
        id: 'eng-comprehension',
        title: 'Reading Comprehension',
        description: 'Analyze texts and answer questions based on passages.',
        questions: [
          { text: 'Comprehension questions are meant to test your ability to:', options: ['Write essays', 'Summarize passages', 'Understand and analyze text', 'Memorize grammar rules'], correctAnswer: 'Understand and analyze text' },
          { text: 'If a passage describes a thunderstorm, what is likely the tone?', options: ['Cheerful', 'Calm', 'Tense', 'Boring'], correctAnswer: 'Tense' },
          { text: 'What is the main idea of a passage?', options: ['The last line', 'An unrelated topic', 'The central message', 'The author’s bio'], correctAnswer: 'The central message' },
          { text: 'Synonyms in comprehension mean:', options: ['Opposite meanings', 'Similar meanings', 'Random words', 'Foreign words'], correctAnswer: 'Similar meanings' },
          { text: 'A factual passage is based on:', options: ['Emotions', 'Imaginary scenes', 'Real information', 'Opinions only'], correctAnswer: 'Real information' },
          { text: 'What is the purpose of skimming?', options: ['Reading deeply', 'Reading word by word', 'Getting the main idea quickly', 'Skipping paragraphs'], correctAnswer: 'Getting the main idea quickly' },
          { text: 'Inference in reading means:', options: ['Guessing wildly', 'Memorizing lines', 'Understanding what is not directly said', 'Looking at pictures'], correctAnswer: 'Understanding what is not directly said' },
          { text: 'The word "vivid" in a passage most likely means:', options: ['Dull', 'Bright and detailed', 'Soft', 'Loud'], correctAnswer: 'Bright and detailed' },
          { text: 'A paragraph with steps is likely describing:', options: ['An opinion', 'A process', 'A debate', 'A question'], correctAnswer: 'A process' },
          { text: 'Reading comprehension improves by:', options: ['Ignoring difficult words', 'Avoiding books', 'Practicing regularly', 'Memorizing answers'], correctAnswer: 'Practicing regularly' }
        ]
      },
      {
        id: 'eng-writing-skills',
        title: 'Writing Skills',
        description: 'Sentence construction, paragraphing, and essay writing.',
        questions: [
          { text: 'A topic sentence is usually found at the:', options: ['End of a paragraph', 'Middle of a paragraph', 'Beginning of a paragraph', 'In the title'], correctAnswer: 'Beginning of a paragraph' },
          { text: 'Which sentence is grammatically correct?', options: ['She go to school.', 'She going to school.', 'She goes to school.', 'She go school.'], correctAnswer: 'She goes to school.' },
          { text: 'What makes a sentence complete?', options: ['Only a subject', 'Subject and verb', 'Verb only', 'Punctuation only'], correctAnswer: 'Subject and verb' },
          { text: 'A paragraph should focus on:', options: ['Multiple topics', 'One main idea', 'Random facts', 'Only quotes'], correctAnswer: 'One main idea' },
          { text: 'Which is a good closing sentence?', options: ['That’s all.', 'Thank you.', 'To sum up, learning grammar helps us write better.', 'Bye-bye.'], correctAnswer: 'To sum up, learning grammar helps us write better.' },
          { text: 'What is a thesis statement?', options: ['An introduction', 'The conclusion', 'The main argument of an essay', 'A question'], correctAnswer: 'The main argument of an essay' },
          { text: 'Which transition shows contrast?', options: ['Therefore', 'However', 'In addition', 'For example'], correctAnswer: 'However' },
          { text: 'Good writing avoids:', options: ['Clarity', 'Variety', 'Repetition of ideas', 'Logical flow'], correctAnswer: 'Repetition of ideas' },
          { text: 'Proofreading means:', options: ['Writing first drafts', 'Designing pages', 'Checking for errors', 'Drawing diagrams'], correctAnswer: 'Checking for errors' },
          { text: 'Which one improves coherence in writing?', options: ['Long words', 'Repeated points', 'Linking words', 'Using emojis'], correctAnswer: 'Linking words' }
        ]
      }
    ]
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
      {
        id: 'comp-javascript-core',
        title: 'JavaScript Core',
        description: 'Variables, functions, and DOM manipulation.',
        questions: [
          { text: 'What is the keyword to declare a variable in JavaScript?', options: ['var', 'let', 'const', 'All of the above'], correctAnswer: 'All of the above' },
          { text: 'What does the "typeof" operator return for an array?', options: ['object', 'array', 'list', 'undefined'], correctAnswer: 'object' },
          { text: 'Which method is used to select an element by ID in the DOM?', options: ['getElementById', 'querySelector', 'getElementsByClassName', 'getElement'], correctAnswer: 'getElementById' },
          { text: 'Which symbol is used for single-line comments?', options: ['<!-- -->', '//', '#', '/* */'], correctAnswer: '//' },
          { text: 'What will `typeof null` return?', options: ['null', 'undefined', 'object', 'boolean'], correctAnswer: 'object' },
          { text: 'Which method converts a JSON string into a JavaScript object?', options: ['JSON.stringify', 'JSON.parse', 'parseJSON', 'stringifyJSON'], correctAnswer: 'JSON.parse' },
          { text: 'What is the output of `Boolean(0)`?', options: ['true', 'false', 'undefined', 'NaN'], correctAnswer: 'false' },
          { text: 'Which keyword is used to define a function in JavaScript?', options: ['function', 'func', 'def', 'method'], correctAnswer: 'function' },
          { text: 'Which of the following is not a primitive type?', options: ['string', 'number', 'object', 'boolean'], correctAnswer: 'object' },
          { text: 'How do you write a conditional statement in JavaScript?', options: ['if (i == 5)', 'if i == 5 then', 'if i = 5', 'if i === 5 then'], correctAnswer: 'if (i == 5)' }
        ]
      },
      {
        id: 'comp-python-intro',
        title: 'Python Introduction',
        description: 'Syntax, data types, and control flow.',
        questions: [
          { text: 'Which keyword is used to define a function in Python?', options: ['def', 'function', 'func', 'define'], correctAnswer: 'def' },
          { text: 'What data type is the result of `5 / 2` in Python 3?', options: ['int', 'float', 'double', 'decimal'], correctAnswer: 'float' },
          { text: 'How do you start a comment in Python?', options: ['//', '#', '--', '/*'], correctAnswer: '#' },
          { text: 'Which of the following is a valid list in Python?', options: ['[1, 2, 3]', '{1, 2, 3}', '(1, 2, 3)', '<1, 2, 3>'], correctAnswer: '[1, 2, 3]' },
          { text: 'What will `len("Hello")` return?', options: ['4', '5', '6', 'Error'], correctAnswer: '5' },
          { text: 'Which keyword is used for loops in Python?', options: ['repeat', 'for', 'loop', 'iterate'], correctAnswer: 'for' },
          { text: 'What is the output of `print(2 ** 3)`?', options: ['6', '8', '9', 'Error'], correctAnswer: '8' },
          { text: 'Which of the following is not a Python data type?', options: ['list', 'tuple', 'dict', 'array'], correctAnswer: 'array' },
          { text: 'How do you create a dictionary in Python?', options: ['[]', '{}', '()', '<>'], correctAnswer: '{}' },
          { text: 'Which statement is used to handle exceptions?', options: ['try-except', 'if-else', 'error-catch', 'throw-catch'], correctAnswer: 'try-except' }
        ]
      },
      {
        id: 'comp-data-structures',
        title: 'Data Structures',
        description: 'Arrays, linked lists, trees, and graphs.',
        questions: [
          { text: 'Which data structure uses FIFO (First In, First Out)?', options: ['Stack', 'Queue', 'Array', 'Tree'], correctAnswer: 'Queue' },
          { text: 'What is the time complexity to access an element in an array by index?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], correctAnswer: 'O(1)' },
          { text: 'Which of the following is a linear data structure?', options: ['Graph', 'Tree', 'Linked List', 'Heap'], correctAnswer: 'Linked List' },
          { text: 'What is the maximum number of children a binary tree node can have?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
          { text: 'Which data structure uses LIFO (Last In, First Out)?', options: ['Queue', 'Stack', 'Heap', 'Graph'], correctAnswer: 'Stack' },
          { text: 'Which structure is used to implement recursion?', options: ['Queue', 'Array', 'Stack', 'Tree'], correctAnswer: 'Stack' },
          { text: 'What is the height of a single-node tree?', options: ['0', '1', '2', '-1'], correctAnswer: '0' },
          { text: 'Which traversal gives nodes in ascending order for BST?', options: ['In-order', 'Pre-order', 'Post-order', 'Level-order'], correctAnswer: 'In-order' },
          { text: 'Which data structure is best for implementing a priority queue?', options: ['Heap', 'Stack', 'Tree', 'Array'], correctAnswer: 'Heap' },
          { text: 'In which data structure does each element point to the next?', options: ['Array', 'Queue', 'Linked List', 'Heap'], correctAnswer: 'Linked List' }
        ]
      },
      {
        id: 'comp-algorithms',
        title: 'Algorithms',
        description: 'Sorting, searching, and common algorithms.',
        questions: [
          { text: 'Which sorting algorithm has the best average-case time complexity?', options: ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Insertion Sort'], correctAnswer: 'Merge Sort' },
          { text: 'What is the time complexity of binary search?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], correctAnswer: 'O(log n)' },
          { text: 'Which algorithm is used to find the shortest path in a weighted graph?', options: ['DFS', 'BFS', 'Dijkstra', 'Prim'], correctAnswer: 'Dijkstra' },
          { text: 'Which algorithm is used for traversing trees in breadth-first order?', options: ['DFS', 'BFS', 'In-order', 'Pre-order'], correctAnswer: 'BFS' },
          { text: 'Which of the following is not a divide-and-conquer algorithm?', options: ['Merge Sort', 'Quick Sort', 'Binary Search', 'Bubble Sort'], correctAnswer: 'Bubble Sort' },
          { text: 'Which search algorithm works only on sorted arrays?', options: ['Linear Search', 'Binary Search', 'Jump Search', 'DFS'], correctAnswer: 'Binary Search' },
          { text: 'Which algorithm is typically used to detect cycles in a graph?', options: ['Dijkstra', 'Floyd-Warshall', 'DFS', 'BFS'], correctAnswer: 'DFS' },
          { text: 'Which algorithm is used in minimum spanning tree problems?', options: ['Dijkstra', 'Kruskal', 'BFS', 'A*'], correctAnswer: 'Kruskal' },
          { text: 'What is the worst-case time complexity of Quick Sort?', options: ['O(n^2)', 'O(n log n)', 'O(log n)', 'O(n)'], correctAnswer: 'O(n^2)' },
          { text: 'Which sorting algorithm is stable?', options: ['Merge Sort', 'Heap Sort', 'Quick Sort', 'Selection Sort'], correctAnswer: 'Merge Sort' }
        ]
      }
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
      return { quiz: foundQuiz, categoryId: category.id };
    }
  }
  return null; // Quiz nhi mila
}