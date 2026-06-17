const constellationData = {
  nodes: [
    // COMPÉTENCES PRINCIPALES (level 0)
    {
      id: 'pedagogie',
      name: 'Ingénierie\nPédagogique',
      level: 0,
      color: '#0D7FFF',
      description: 'Conception et pilotage de dispositifs d\'apprentissage',
      details:
        'Expert en design pédagogique, création de ressources éducatives, conception de curricula et gestion de projets e-learning. Spécialiste en approches hybrides et formations innovantes.',
      skills: ['Design pédagogique', 'Curricula', 'E-learning', 'Formation hybride'],
    },
    {
      id: 'numerique',
      name: 'Technologie\nNumérique',
      level: 0,
      color: '#7C3AED',
      description: 'Environnements immersifs et outils numériques',
      details:
        'Maîtrise des mondes virtuels (WorkAdventure), des LMS (Moodle), des outils de création numérique (H5P, Genially) et des technologies immersives.',
      skills: ['Mondes virtuels', 'LMS', 'Outils auteurs', 'Immersion numérique'],
    },
    {
      id: 'gamification',
      name: 'Gamification\n& Innovation',
      level: 0,
      color: '#06B6D4',
      description: 'Sérious games et dispositifs ludopédagogiques',
      details:
        'Conçoit des escape games pédagogiques, des serious games et des environnements ludiques. Intègre la gamification pour augmenter l\'engagement.',
      skills: ['Escape games', 'Serious games', 'Ludification', 'Engagement'],
    },
    {
      id: 'recherche',
      name: 'Recherche\n& Corpus',
      level: 0,
      color: '#0A1428',
      description: 'Analyse linguistique et recherche scientifique',
      details:
        'Doctorante en linguistique, expertise en analyse de corpus, méthodologie de recherche, recherche-action et publications scientifiques.',
      skills: ['Corpus linguistiques', 'Méthodologie', 'Recherche-action', 'Publications'],
    },
    {
      id: 'gestion',
      name: 'Gestion\n& Formation',
      level: 0,
      color: '#8B5CF6',
      description: 'Pilotage de projets et formation de formateurs',
      details:
        'Gestion de projets complexes (PIA4, Erasmus+), coordination d\'équipes, formation de formateurs à l\'international et accompagnement pédagogique.',
      skills: ['Gestion de projet', 'Leadership', 'Formation internationale', 'Accompagnement'],
    },

    // SOUS-COMPÉTENCES (level 1) - Ingénierie Pédagogique
    {
      id: 'design-ped',
      parent: 'pedagogie',
      name: 'Design\nPédagogique',
      level: 1,
      color: '#0D7FFF',
      description: 'Conception de parcours d\'apprentissage',
      example: 'Conception du MOOC DECLAME'FLE et structure du projet Espace des Langues',
    },
    {
      id: 'mooc-rel',
      parent: 'pedagogie',
      name: 'MOOC &\nREL',
      level: 1,
      color: '#0D7FFF',
      description: 'Création de cours en ligne ouverts et ressources éducatives libres',
      example: 'Conception et pilotage du MOOC "Enseigner la littérature en FLE"',
    },
    {
      id: 'eval-form',
      parent: 'pedagogie',
      name: 'Évaluation\nFormative',
      level: 1,
      color: '#0D7FFF',
      description: 'Conception d\'outils d\'évaluation adaptés',
      example: 'Module d\'évaluation ludique dans ESCAPARA',
    },

    // SOUS-COMPÉTENCES (level 1) - Technologie Numérique
    {
      id: 'mondes-virtu',
      parent: 'numerique',
      name: 'Mondes\nVirtualels',
      level: 1,
      color: '#7C3AED',
      description: 'Design et développement de mondes virtuels 2D/3D',
      example: 'Création et gestion de RENNES2D sur WorkAdventure',
    },
    {
      id: 'lms-tools',
      parent: 'numerique',
      name: 'LMS & Outils\nAuteurs',
      level: 1,
      color: '#7C3AED',
      description: 'Maîtrise des plateformes d\'apprentissage et outils de création',
      example: 'Moodle, H5P, Genially, Articulate Storyline',
    },
    {
      id: 'immersive',
      parent: 'numerique',
      name: 'Technologie\nImmersive',
      level: 1,
      color: '#7C3AED',
      description: 'Environnements immersifs et 360°',
      example: 'Intégration de vidéos 360° et environnements immersifs',
    },

    // SOUS-COMPÉTENCES (level 1) - Gamification
    {
      id: 'escape-game',
      parent: 'gamification',
      name: 'Escape Game\nPédagogique',
      level: 1,
      color: '#06B6D4',
      description: 'Conception d\'escape games pour l\'apprentissage',
      example: 'FLEscape, ESCAPARA, Féminisme EG',
    },
    {
      id: 'serious-game',
      parent: 'gamification',
      name: 'Serious Games',
      level: 1,
      color: '#06B6D4',
      description: 'Jeux numériques à objectifs pédagogiques',
      example: 'Blockly FLE - jeu sur déplacements et lexique',
    },
    {
      id: 'storytelling',
      parent: 'gamification',
      name: 'Storytelling\nPédagogique',
      level: 1,
      color: '#06B6D4',
      description: 'Narration interactive et scénarios pédagogiques',
      example: 'Scénarios immersifs dans les escapes games',
    },

    // SOUS-COMPÉTENCES (level 1) - Recherche
    {
      id: 'corpus-ling',
      parent: 'recherche',
      name: 'Analyse\nde Corpus',
      level: 1,
      color: '#0A1428',
      description: 'Analyse linguistique et extraction de données',
      example: 'Étude des interactions linguistiques dans RENNES2D',
    },
    {
      id: 'methodo',
      parent: 'recherche',
      name: 'Méthodologie\nRecherche',
      level: 1,
      color: '#0A1428',
      description: 'Design de recherche et collecte de données',
      example: '30+ communications scientifiques et publications',
    },
    {
      id: 'research-action',
      parent: 'recherche',
      name: 'Recherche\nAction',
      level: 1,
      color: '#0A1428',
      description: 'Recherche-action et innovation participative',
      example: 'Thèse intégrant corpus et serious games',
    },

    // SOUS-COMPÉTENCES (level 1) - Gestion
    {
      id: 'proj-mgmt',
      parent: 'gestion',
      name: 'Gestion de\nProjet',
      level: 1,
      color: '#8B5CF6',
      description: 'Pilotage de projets complexes et multidisciplinaires',
      example: 'Coordination du projet Espace des Langues (PIA4)',
    },
    {
      id: 'leadership',
      parent: 'gestion',
      name: 'Leadership &\nCoordination',
      level: 1,
      color: '#8B5CF6',
      description: 'Animation d\'équipes et coordination scientifique',
      example: 'Coordinatrice générale RANACLES 2025 (Nantes)',
    },
    {
      id: 'formation-form',
      parent: 'gestion',
      name: 'Formation\nde Formateurs',
      level: 1,
      color: '#8B5CF6',
      description: 'Formation et accompagnement international',
      example: 'Formation en Nouvelle-Zélande, Argentine, Bahreïn',
    },
  ],

  links: [
    // Connexions principales (enfants vers parents)
    // Ingénierie Pédagogique
    { source: 'design-ped', target: 'pedagogie', type: 'hierarchy' },
    { source: 'mooc-rel', target: 'pedagogie', type: 'hierarchy' },
    { source: 'eval-form', target: 'pedagogie', type: 'hierarchy' },

    // Technologie Numérique
    { source: 'mondes-virtu', target: 'numerique', type: 'hierarchy' },
    { source: 'lms-tools', target: 'numerique', type: 'hierarchy' },
    { source: 'immersive', target: 'numerique', type: 'hierarchy' },

    // Gamification
    { source: 'escape-game', target: 'gamification', type: 'hierarchy' },
    { source: 'serious-game', target: 'gamification', type: 'hierarchy' },
    { source: 'storytelling', target: 'gamification', type: 'hierarchy' },

    // Recherche
    { source: 'corpus-ling', target: 'recherche', type: 'hierarchy' },
    { source: 'methodo', target: 'recherche', type: 'hierarchy' },
    { source: 'research-action', target: 'recherche', type: 'hierarchy' },

    // Gestion
    { source: 'proj-mgmt', target: 'gestion', type: 'hierarchy' },
    { source: 'leadership', target: 'gestion', type: 'hierarchy' },
    { source: 'formation-form', target: 'gestion', type: 'hierarchy' },

    // Connexions transversales (entre domaines)
    { source: 'design-ped', target: 'mooc-rel', type: 'related' },
    { source: 'design-ped', target: 'eval-form', type: 'related' },
    { source: 'mondes-virtu', target: 'immersive', type: 'related' },
    { source: 'escape-game', target: 'storytelling', type: 'related' },
    { source: 'corpus-ling', target: 'escape-game', type: 'cross-domain' },
    { source: 'corpus-ling', target: 'serious-game', type: 'cross-domain' },
    { source: 'pedagogie', target: 'gamification', type: 'cross-domain' },
    { source: 'numerique', target: 'gamification', type: 'cross-domain' },
    { source: 'pedagogie', target: 'recherche', type: 'cross-domain' },
    { source: 'gestion', target: 'pedagogie', type: 'cross-domain' },
    { source: 'formation-form', target: 'design-ped', type: 'related' },
    { source: 'proj-mgmt', target: 'mooc-rel', type: 'related' },
  ],

  // Projets liés aux compétences
  projects: [
    {
      id: 'rennes2d',
      name: 'RENNES2D',
      skills: ['mondes-virtu', 'corpus-ling', 'design-ped', 'immersive'],
      year: '2022–2025',
    },
    {
      id: 'flescape',
      name: 'FLEscape',
      skills: ['escape-game', 'storytelling', 'design-ped', 'eval-form'],
      year: '2019–2025',
    },
    {
      id: 'declame',
      name: 'DECLAME\'FLE',
      skills: ['mooc-rel', 'design-ped', 'formation-form', 'proj-mgmt'],
      year: '2019–2023',
    },
    {
      id: 'escapara',
      name: 'ESCAPARA',
      skills: ['escape-game', 'eval-form', 'serious-game'],
      year: '2019–2021',
    },
    {
      id: 'blockly',
      name: 'Blockly FLE',
      skills: ['serious-game', 'storytelling', 'corpus-ling'],
      year: '2016–2018',
    },
  ],
};
