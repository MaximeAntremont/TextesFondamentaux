// ═══════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════

const models = [
  {
    id: "telegraphique",
    name: "Le modèle télégraphique (mathématique)",
    period: "1948 — le « contre-modèle »",
    desc: "Conçu pour résoudre un problème d'ingénierie (améliorer les transmissions télégraphiques), ce modèle linéaire décompose la communication en : source → émetteur → canal → récepteur → destination, avec une source de bruit. Il confond information mathématique (traitement de signal) et information sociale (sens, interprétation). L'École de Palo Alto le considère comme un modèle « indigène » de la culture occidentale, utile à étudier mais trompeur pour la recherche.",
    concepts: "Linéarité, intentionnalité, distinction information₁ (mathématique) / information₂ (sociale), bruit.",
    authors: ["Claude Shannon", "Warren Weaver", "Yves Jeanneret"],
    sepieces: ["1"]
  },
  {
    id: "palo-alto",
    name: "L'École de Palo Alto — Approche systémique et orchestrale",
    period: "À partir de 1952",
    desc: "Collaboration informelle de chercheurs (anthropologie, psychiatrie, biologie) qui rompt avec le modèle linéaire. La communication est un processus permanent, global et circulaire au sein d'un système. « On ne peut pas ne pas communiquer. » La métaphore de l'orchestre remplace celle du télégraphe : chacun joue sa partition selon des règles communes, et c'est l'ensemble qui produit le sens.",
    concepts: "Système, rétroaction (positive/négative), symétrie/complémentarité, axiomatique, double contrainte, communication orchestrale.",
    authors: ["Gregory Bateson", "Paul Watzlawick", "Edward T. Hall", "Ray Birdwhistell"],
    sepieces: ["1"]
  },
  {
    id: "microsociologie",
    name: "La microsociologie — Erving Goffman",
    period: "Années 1950-1980",
    desc: "Analyse interactionniste des microphénomènes sociaux par la métaphore théâtrale. Chaque individu est un « acteur » qui joue des rôles sur différentes « scènes », gère sa façade et protège sa face. Le moi n'est pas une essence mais le produit des rites quotidiens d'interaction. L'observation des stigmates et des « ratés » révèle les normes sociales invisibles.",
    concepts: "Interaction (focalisée / non focalisée), métaphore théâtrale, façade, face, rites d'interaction, distance au rôle, stigmate et stigmatisation, membrane, engagement de face, immersion.",
    authors: ["Erving Goffman", "Anthony Pecqueux"],
    sepieces: ["1", "2"]
  },
  {
    id: "observation",
    name: "Observer — Méthodes et apports",
    period: "Transversal",
    desc: "L'observation est à la fois méthode et objet. La kinésique (Birdwhistell) tente de coder les gestes mais échoue : la gestuelle n'est pas un code autonome. Winkin montre que la simplification maîtrisée (silhouettes) est un outil puissant. Elias retrace l'évolution historique des normes comportementales (processus de civilisation, intériorisation des autocontraintes). Deux approches anthropologiques coexistent : culturelle (la communication crée la structure) et sociale (la communication est structurée).",
    concepts: "Kinésique (kinèmes), redondance, simplification maîtrisée, processus de civilisation, autocontraintes, approche émique/étique.",
    authors: ["Ray Birdwhistell", "Yves Winkin", "Norbert Elias", "Edward Sapir"],
    sepieces: ["1"]
  },
  {
    id: "speaking",
    name: "Le modèle SPEAKING — Dell Hymes",
    period: "1962 / 1972",
    desc: "Approche synthétique qui articule linguistique, folklore et anthropologie. L'acronyme SPEAKING identifie huit composantes de toute situation de communication : Setting, Participants, Ends, Acts, Key, Instrumentalities, Norms, Genre. L'intérêt réside dans le rapport entre ces composantes. Deux concepts clés complètent le modèle : la compétence de communication (linguistique + socioculturelle + logique) et la communauté de communication.",
    concepts: "SPEAKING (8 composantes), compétence de communication, communauté de communication, approche émique → étique.",
    authors: ["Dell Hymes"],
    sepieces: ["1"]
  }
];

const authors = [
  {
    id: "shannon", name: "Claude Shannon", dates: "1916 – 2001", models: ["telegraphique"], sepieces: ["1"],
    concepts: [
      { name: "Modèle mathématique de la communication", def: "Schéma linéaire : source d'information → émetteur → canal (avec bruit) → récepteur → destination. Conçu pour optimiser la transmission du signal télégraphique." },
      { name: "Information mathématique (information₁)", def: "Mesure quantitative du signal transmis, indépendante du sens. La machine ne comprend rien ; l'efficacité repose sur l'exclusion du sens." },
      { name: "Niveaux de la communication", def: "Trois niveaux distincts : technique (fidélité du signal), sémantique (signification), efficacité (effet sur le destinataire)." }
    ]
  },
  {
    id: "weaver", name: "Warren Weaver", dates: "1894 – 1978", models: ["telegraphique"], sepieces: ["1"],
    concepts: [
      { name: "Vulgarisation du modèle mathématique", def: "Co-auteur de la Théorie mathématique de la communication (1949), Weaver a étendu et popularisé le modèle de Shannon en le présentant comme applicable à toute forme de communication humaine, ce qui a contribué à la confusion entre niveaux technique et sémantique." }
    ]
  },
  {
    id: "jeanneret", name: "Yves Jeanneret", dates: "1951 – 2020", models: ["telegraphique"], sepieces: ["1"],
    concepts: [
      { name: "Information₁ vs information₂", def: "Distinction cruciale entre l'information mathématique (traitement formel de signaux) et l'information sociale (qui suppose interprétation et production de sens). Les deux processus sont radicalement différents." },
      { name: "Critique des « technologies de l'information »", def: "L'expression « technologies de l'information » entretient une confusion entre le traitement du signal et la production de sens. L'information sociale a pour condition l'interprétation, que l'information mathématique élimine." }
    ]
  },
  {
    id: "bateson", name: "Gregory Bateson", dates: "1904 – 1980", models: ["palo-alto"], sepieces: ["1"],
    concepts: [
      { name: "Communication systémique", def: "La communication a lieu au sein d'un système (parallèle culture → communication). La communication est la matrice dans laquelle sont enchâssées toutes les activités humaines." },
      { name: "Rétroaction (feedback)", def: "Mécanisme par lequel les effets d'une action reviennent modifier l'action elle-même. Peut être symétrique (le comportement de A stimule B dans le même sens) ou complémentaire (sens contraire)." },
      { name: "Rétroaction positive / négative", def: "Effets sur le système : la rétroaction positive amplifie et déstabilise (escalade) ; la rétroaction négative stabilise et régule le système." }
    ]
  },
  {
    id: "watzlawick", name: "Paul Watzlawick", dates: "1921 – 2007", models: ["palo-alto"], sepieces: ["1"],
    concepts: [
      { name: "Axiomatique de la communication", def: "Cinq axiomes fondamentaux posés dans Une logique de la communication (1967) qui décrivent les propriétés inévitables de toute interaction." },
      { name: "Axiome 1 : On ne peut pas ne pas communiquer", def: "Tout comportement a valeur de message. Activité ou inactivité, parole ou silence, tout est communication." },
      { name: "Axiome 2 : Contenu et relation", def: "Toute communication possède un contenu (ce qui est dit) et définit une relation (comment c'est dit, rapport entre les interactants)." },
      { name: "Axiome 3 : Ponctuation", def: "Toute communication est une suite d'interactions que chacun ponctue à sa manière (chacun découpe le flux différemment)." },
      { name: "Axiome 4 : Codes analogiques et digitaux", def: "La communication utilise simultanément des codes digitaux (langage verbal, discret) et analogiques (gestes, ton, continu)." },
      { name: "Axiome 5 : Symétrie et complémentarité", def: "Les échanges sont soit symétriques (relation d'égalité) soit complémentaires (relation de différence), et la rétroaction renforce ou modifie le système." },
      { name: "Double contrainte (double bind)", def: "Communication paradoxale : un message affirme quelque chose (contenu) et son contraire (relation), dans une situation où le récepteur ne peut pas sortir du cadre. Ex : « Soyez spontané »." },
      { name: "Communication pathologique", def: "Pour chacun des cinq axiomes, il existe une forme pathologique de communication. Résolutions possibles : métacommunication ou repli." }
    ]
  },
  {
    id: "hall", name: "Edward T. Hall", dates: "1914 – 2009", models: ["palo-alto"], sepieces: ["1"],
    concepts: [
      { name: "Proxémique", def: "Ensemble des observations et théories concernant l'usage que l'homme fait de l'espace en tant que produit culturel spécifique." },
      { name: "Quatre distances interpersonnelles", def: "Distance intime (0-45 cm), personnelle (45-125 cm), sociale (125 cm - 3,6 m), publique (> 3,6 m). Chacune avec un mode proche et un mode lointain." },
      { name: "Culture comme écosystème", def: "Chaque culture construit des « mondes perceptifs différents ». Les individus apprennent dès l'enfance à filtrer les données sensorielles selon des modèles culturels qui semblent fixés pour la vie." },
      { name: "Crible perceptif culturel", def: "Processus de sélection sensorielle propre à chaque culture : certains stimuli sont retenus, d'autres éliminés. Les environnements architecturaux et urbains en sont l'expression." }
    ]
  },
  {
    id: "birdwhistell", name: "Ray Birdwhistell", dates: "1918 – 1994", models: ["palo-alto", "observation"], sepieces: ["1"],
    concepts: [
      { name: "Kinésique", def: "Tentative de codifier le langage des gestes en unités minimales (kinèmes), inspirée de la linguistique structurale. L'échec de cette entreprise montre que la gestuelle n'est pas un code autonome." },
      { name: "Redondance communicationnelle", def: "Ce qui prime dans la communication n'est pas un code gestuel isolé mais la redondance entre différents canaux. Être membre d'une culture, c'est être prévisible." }
    ]
  },
  {
    id: "goffman", name: "Erving Goffman", dates: "1922 – 1982", models: ["microsociologie"], sepieces: ["1", "2"],
    concepts: [
      { name: "Interaction focalisée / non focalisée", def: "Focalisée : les personnes collaborent pour maintenir un centre d'intérêt unique (conversation). Non focalisée : gestion de la coprésence (un coup d'œil, entrer dans un champ visuel).", sepieces: ["1"] },
      { name: "Métaphore théâtrale", def: "La vie sociale est analysée comme une représentation : chacun joue des rôles sur une scène, avec une façade, un décor, et des coulisses. La réalité est une construction collective.", sepieces: ["1"] },
      { name: "Façade", def: "Ensemble d'éléments (expression verbale, gestes, postures, vêtements, décor) permettant à l'acteur de contrôler l'image qu'il projette.", sepieces: ["1"] },
      { name: "Face", def: "Valeur sociale positive qu'une personne revendique à travers sa ligne d'action. Chacun doit préserver sa propre face et celle de ses partenaires.", sepieces: ["1"] },
      { name: "Rites d'interaction", def: "Échanges de politesses, tact, savoir-vivre qui maintiennent l'ordre social. La face sociale est un prêt consenti par la société : si on ne s'en montre pas digne, elle est retirée.", sepieces: ["1"] },
      { name: "Distance au rôle", def: "Degré d'implication ou de détachement par rapport au rôle joué dans la situation.", sepieces: ["1"] },
      { name: "Stigmate et stigmatisation", def: "Un attribut qui disqualifie dans les interactions. Le stigmate est variable selon les situations, visible ou invisible. Son observation révèle les normes sociales invisibles.", sepieces: ["1"] },
      { name: "Passing (dissimulation du stigmate)", def: "Stratégie consistant à dissimuler un attribut stigmatisant pour feindre d'appartenir à la « norme » (ex : cacher son accent).", sepieces: ["1"] },
      { name: "Engagement de face", def: "Dans une interaction focalisée, les participants s'engagent mutuellement, mobilisant leur attention. Cet engagement est indissociable de son envers : une « inattention sans effort » vis-à-vis du monde environnant.", sepieces: ["2"] },
      { name: "Membrane", def: "Frontière perméable et sélective autour d'une interaction. Ni barrière étanche ni ouverture totale, elle fonctionne comme un tamis qui autorise certains éléments extérieurs à s'infiltrer tout en en bloquant d'autres. Sa fonction est de sélectionner ce qui du monde environnant peut pénétrer l'interaction.", sepieces: ["2"] },
      { name: "Règles de non-pertinence", def: "Règles tacites se déployant à même la situation pour organiser, en pratique, ce qui du monde environnant n'a pas à pénétrer l'interaction en cours. Elles contribuent à fabriquer la frontière (membrane) autour des participants.", sepieces: ["2"] },
      { name: "Règles de transformation", def: "Règles qui opèrent à même l'interaction (et non édictées en amont) pour constituer un ordre local, un « monde en soi » (sui generis), c'est-à-dire un monde de rôles et d'événements accompli localement.", sepieces: ["2"] },
      { name: "Fonction d'accordance", def: "Ensemble des techniques de mise en rythme et d'organisation spatiale et temporelle qui préparent et maintiennent l'immersion dans l'interaction (ex. : disposition en cercle, passage du micro, rituels de début et de fin).", sepieces: ["2"] },
      { name: "Incidents et intégrations", def: "Les incidents sont des événements qui font soudainement monter le niveau de tension (lapsus, mise en cause…). Les intégrations sont les actes qui cherchent à transformer ces incidents pour les faire entrer dans le cadre et diminuer la discordance.", sepieces: ["2"] },
      { name: "Débordements", def: "Manifestations émotionnelles visibles qui excèdent le cadre de l'interaction. Les engagements de face rendent les émotions à fleur de peau. Les débordements peuvent être intégrés par une « non-perception laborieuse », mais cela augmente la tension globale.", sepieces: ["2"] },
      { name: "Jeux de scène secondaires (byplay)", def: "Actions parallèles qui se déroulent en marge de l'interaction principale (ex. : quitter le cercle pour se soulager, s'entretenir en aparté). Ils ont souvent un effet de « soupape » dans l'économie attentionnelle de la rencontre.", sepieces: ["2"] },
      { name: "Inattention sans effort", def: "Envers nécessaire de l'attention focalisée : plus on s'immerge dans une interaction, plus le monde environnant et ses sources de distraction deviennent transparents, sans qu'il en coûte d'effort conscient. C'est la condition même de l'immersion.", sepieces: ["2"] }
    ]
  },
  {
    id: "winkin", name: "Yves Winkin", dates: "1953 –", models: ["palo-alto", "observation"], sepieces: ["1"],
    concepts: [
      { name: "Anthropologie de la communication", def: "Approche qui considère le modèle télégraphique comme un modèle « indigène » occidental. Observer la communication, c'est s'intéresser aux règles explicites et implicites qui font de nous les membres d'une culture." },
      { name: "Simplification maîtrisée (silhouettage)", def: "Méthode d'observation consistant à éliminer les informations superfétatoires (psychologiques, vestimentaires) pour travailler avec des corps en mouvement, créant une rupture avec les fausses évidences du sens commun." },
      { name: "Communication orchestrale", def: "Métaphore centrale : la communication est comme un orchestre où chacun joue sa partition selon des règles communes. Les notions d'émetteur/récepteur s'effacent au profit de l'activité sociale collective." }
    ]
  },
  {
    id: "elias", name: "Norbert Elias", dates: "1897 – 1990", models: ["observation"], sepieces: ["1"],
    concepts: [
      { name: "Processus de civilisation", def: "Évolution historique (XIe – XXe siècle) par laquelle les comportements liés aux fonctions naturelles (manger, se moucher, etc.) sont progressivement régulés, ritualisés et masqués." },
      { name: "Autocontraintes", def: "Intériorisation des règles extérieures : la norme sociale n'a plus besoin d'être imposée de l'extérieur car l'individu l'a faite sienne." },
      { name: "Civilité", def: "Concept issu du Traité de bonnes manières d'Érasme (1530). Le comportement extérieur relève d'un apprentissage social, pas seulement d'une disposition innée." }
    ]
  },
  {
    id: "hymes", name: "Dell Hymes", dates: "1927 – 2009", models: ["speaking"], sepieces: ["1"],
    concepts: [
      { name: "Modèle SPEAKING", def: "Huit composantes de toute situation de communication : Setting (cadre), Participants, Ends (finalité), Acts (contenu et forme), Key (tonalité), Instrumentalities (moyens), Norms (d'interaction et d'interprétation), Genre (type d'activité de langage)." },
      { name: "Compétence de communication", def: "Capacité à aborder les situations sociales dans leur diversité. Comprend trois dimensions : compétence linguistique, socioculturelle et logique." },
      { name: "Communauté de communication", def: "Groupe d'êtres humains ayant en commun des pratiques et des règles de communication. La compétence de communication n'existe qu'au sein d'une telle communauté." }
    ]
  },
  {
    id: "sapir", name: "Edward Sapir", dates: "1884 – 1939", models: ["observation"], sepieces: ["1"],
    concepts: [
      { name: "Culture comme code secret", def: "La culture est le « code secret et compliqué, écrit nulle part, connu de personne, mais compris par tous ». Cette idée a inspiré les travaux de Birdwhistell sur l'articulation entre culture et communication." }
    ]
  },
  {
    id: "goodenough", name: "Ward Goodenough", dates: "1919 – 2013", models: ["palo-alto"], sepieces: ["1"],
    concepts: [
      { name: "Culture comme compétence", def: "La culture est « tout ce qu'il faut savoir pour être membre » d'un groupe. Définition minimale qui ouvre la voie à l'analyse des règles explicites et implicites, du savoir latent et manifeste." }
    ]
  },
  {
    id: "ollivier", name: "Bruno Ollivier", dates: "", models: ["palo-alto", "microsociologie"], sepieces: ["1"],
    concepts: [
      { name: "Communication orchestrale (formulation)", def: "Il n'existe de communication que dans un groupe (l'orchestre), dans lequel chacun joue sa partition selon des règles communes. Les fonctions d'émetteur et de récepteur s'effacent au profit de la communication comme activité sociale." },
      { name: "Dispositif", def: "Concept mobilisé pour analyser les situations de communication dans leur dimension matérielle et organisationnelle." }
    ]
  },
  {
    id: "scott", name: "James C. Scott", dates: "1936 – 2024", models: ["microsociologie"], sepieces: ["1"],
    concepts: [
      { name: "Arts de la résistance", def: "Analyse des rapports de domination : les normes sociales (étiquette, bienséance) nous forcent à sacrifier de la franchise pour entretenir des relations. Cette prudence peut être stratégique face aux rapports de pouvoir." }
    ]
  },
  {
    id: "olivesi", name: "Stéphane Olivesi", dates: "", models: ["palo-alto"], sepieces: ["1"],
    concepts: [
      { name: "Critique de Hall", def: "Les variations culturelles et spatiales mises en évidence par Hall ne doivent pas occulter les différences sociales au sein d'une même culture. Un individu communique souvent mieux avec quelqu'un de culture différente mais de même niveau social." }
    ]
  },
  {
    id: "pecqueux", name: "Anthony Pecqueux", dates: "1978 –", models: ["microsociologie"], sepieces: ["2"],
    concepts: [
      { name: "Immersion interactionnelle", def: "L'immersion est un problème pratique pour les acteurs : elle est l'accomplissement d'une activité prenante dans laquelle on se plonge entièrement, en y consacrant toute son attention, avec le concours de dispositifs et médiations. Elle engage trois dimensions : problème pratique, observatoire de l'inattention, dépassement de l'opposition passivité/activité.", sepieces: ["2"] },
      { name: "Passibilité", def: "Antonyme d'impassibilité. L'expérience comme traversée dans laquelle celui à qui l'événement arrive s'expose, court des risques, met en jeu son self. Au Parlons-En, on ne fait pas que prendre la parole : le plus souvent on écoute, sans rester impassible.", sepieces: ["2"] },
      { name: "Fonctions de la membrane (spatiale et sociale)", def: "La membrane ne joue pas seulement au niveau spatial (cercle vs. entours, sas) mais aussi social : elle sélectionne quels attributs sociaux externes peuvent pénétrer l'interaction. Les apparences sensibles (odeurs, techniques du corps, ustensiles) ne cessent de rappeler les statuts, même quand la règle est de les « laisser au vestiaire ».", sepieces: ["2"] },
      { name: "Care et invisibilisation", def: "Les activités de care (servir un café, distribuer le micro, agrandir le cercle pour les nouveaux venus) sont visibles et louées avant et après l'interaction, mais invisibilisées pendant — au moment où la plupart des participants sont focalisés sur le débat.", sepieces: ["2"] }
    ]
  }
];

const modelNames = {
  telegraphique: "Modèle télégraphique",
  "palo-alto": "École de Palo Alto",
  microsociologie: "Microsociologie (Goffman)",
  observation: "Observation",
  speaking: "Modèle SPEAKING (Hymes)"
};

// All séances (auto-built from data)
const allSeances = [...new Set([
  ...models.flatMap(m => m.sepieces || []),
  ...authors.flatMap(a => a.sepieces || []),
])].sort();

// ═══════════════════════════════════════════
//  TIMELINE DATA
// ═══════════════════════════════════════════
const timelineEvents = [
  { year: 1921, type: "work", title: "Language", author: "Edward Sapir", authorId: "sapir", model: "observation", desc: "Ouvrage fondateur sur le langage comme fait culturel. La culture y est décrite comme un code implicite partagé.", sepieces: ["1"] },
  { year: 1939, type: "work", title: "Über den Prozess der Zivilisation", author: "Norbert Elias", authorId: "elias", model: "observation", desc: "Le processus de civilisation : étude de l'évolution des normes comportementales du XIe au XXe siècle. Concepts d'autocontrainte et de civilité.", sepieces: ["1"] },
  { year: 1948, type: "model", title: "Modèle télégraphique", author: "Claude Shannon", authorId: "shannon", model: "telegraphique", desc: "A Mathematical Theory of Communication — naissance du modèle linéaire source → émetteur → canal → récepteur → destination.", sepieces: ["1"] },
  { year: 1949, type: "work", title: "The Mathematical Theory of Communication", author: "Shannon & Weaver", authorId: "shannon", model: "telegraphique", desc: "Ouvrage co-écrit avec Warren Weaver qui vulgarise et étend le modèle à toute communication humaine.", sepieces: ["1"] },
  { year: 1951, type: "work", title: "Communication: The Social Matrix of Psychiatry", author: "Bateson & Ruesch", authorId: "bateson", model: "palo-alto", desc: "La communication comme matrice de toutes les activités humaines. Prémices de l'approche systémique.", sepieces: ["1"] },
  { year: 1952, type: "model", title: "Fondation de l'École de Palo Alto", author: "Bateson, Birdwhistell, Hall, Watzlawick…", authorId: "bateson", model: "palo-alto", desc: "Collaboration informelle de chercheurs en anthropologie, psychiatrie et biologie. Rupture avec le modèle linéaire.", sepieces: ["1"] },
  { year: 1959, type: "work", title: "The Presentation of Self in Everyday Life", author: "Erving Goffman", authorId: "goffman", model: "microsociologie", desc: "La mise en scène de la vie quotidienne : fondement de la métaphore théâtrale. Concepts de façade, coulisses, rôle.", sepieces: ["1"] },
  { year: 1959, type: "work", title: "The Silent Language", author: "Edward T. Hall", authorId: "hall", model: "palo-alto", desc: "Premier ouvrage de Hall sur la communication non verbale et les dimensions culturelles du temps et de l'espace.", sepieces: ["1"] },
  { year: 1961, type: "work", title: "Fun in Games (Encounters)", author: "Erving Goffman", authorId: "goffman", model: "microsociologie", desc: "Texte majeur où Goffman théorise l'interaction focalisée comme immersion dans un monde. Concepts de membrane, engagement de face, inattention sans effort, règles de non-pertinence, incidents, intégrations, débordements et jeux de scène secondaires (byplay).", sepieces: ["2"] },
  { year: 1963, type: "work", title: "Stigma", author: "Erving Goffman", authorId: "goffman", model: "microsociologie", desc: "Stigmate : les usages sociaux des handicaps. Analyse de la façon dont un attribut disqualifie dans les interactions.", sepieces: ["1"] },
  { year: 1966, type: "work", title: "The Hidden Dimension", author: "Edward T. Hall", authorId: "hall", model: "palo-alto", desc: "La dimension cachée : fondement de la proxémique. Théorie des quatre distances interpersonnelles et du crible perceptif culturel.", sepieces: ["1"] },
  { year: 1967, type: "work", title: "Pragmatics of Human Communication", author: "Watzlawick, Beavin, Jackson", authorId: "watzlawick", model: "palo-alto", desc: "Une logique de la communication : les cinq axiomes, la double contrainte, la communication pathologique.", sepieces: ["1"] },
  { year: 1967, type: "work", title: "Interaction Ritual", author: "Erving Goffman", authorId: "goffman", model: "microsociologie", desc: "Les rites d'interaction : face, tact, savoir-vivre. La face sociale comme prêt consenti par la société.", sepieces: ["1"] },
  { year: 1970, type: "work", title: "Kinesics and Context", author: "Ray Birdwhistell", authorId: "birdwhistell", model: "observation", desc: "Tentative de codifier la gestuelle en kinèmes. L'échec montre que la gestuelle n'est pas un code autonome : importance de la redondance.", sepieces: ["1"] },
  { year: 1974, type: "model", title: "Modèle SPEAKING", author: "Dell Hymes", authorId: "hymes", model: "speaking", desc: "Foundations in Sociolinguistics — huit composantes de la situation de communication. Concepts de compétence et communauté de communication.", sepieces: ["1"] },
  { year: 1990, type: "work", title: "Domination and the Arts of Resistance", author: "James C. Scott", authorId: "scott", model: "microsociologie", desc: "Analyse des rapports de domination et des stratégies de résistance à travers les normes sociales et l'étiquette.", sepieces: ["1"] },
  { year: 1996, type: "work", title: "Anthropologie de la communication", author: "Yves Winkin", authorId: "winkin", model: "palo-alto", desc: "Synthèse de l'approche anthropologique. Communication orchestrale, simplification maîtrisée, critique du modèle télégraphique comme modèle « indigène ».", sepieces: ["1"] },
  { year: 1997, type: "work", title: "De l'anthropologie à l'épistémologie de la communication", author: "Stéphane Olivesi", authorId: "olivesi", model: "palo-alto", desc: "Critique des travaux de Hall : les différences sociales transcendent souvent les différences culturelles.", sepieces: ["1"] },
  { year: 2000, type: "work", title: "Observer la communication", author: "Bruno Ollivier", authorId: "ollivier", model: "palo-alto", desc: "Naissance d'une interdiscipline. Formulation de la métaphore orchestrale et du concept de dispositif.", sepieces: ["1"] },
  { year: 2000, type: "work", title: "Y a-t-il (vraiment) des technologies de l'information ?", author: "Yves Jeanneret", authorId: "jeanneret", model: "telegraphique", desc: "Distinction fondamentale entre information mathématique et information sociale. Critique de la confusion entretenue par l'expression « technologies de l'information ».", sepieces: ["1"] },
  { year: 2020, type: "work", title: "L'attention et ses envers", author: "Anthony Pecqueux", authorId: "pecqueux", model: "microsociologie", desc: "Étude ethnographique de l'immersion dans un cercle de parole (le Parlons-En). Pecqueux mobilise Goffman (Fun in Games) pour analyser les mécanismes d'attention, d'inattention, de membrane et de care dans l'interaction.", sepieces: ["2"] }
];

// ═══════════════════════════════════════════
//  UTILITY: diacritics-insensitive search
// ═══════════════════════════════════════════
function norm(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// ═══════════════════════════════════════════
//  SÉANCE LABELS & TAG HELPER
// ═══════════════════════════════════════════
const seanceLabels = { "1": "CM", "2": "Séance 2" };
function seanceLabel(s) { return seanceLabels[s] || `Séance ${s}`; }
function seanceShort(s) { return s === "1" ? "CM" : `S${s}`; }

function seanceTag(sepieces) {
  if (!sepieces || !sepieces.length) return "";
  return sepieces.map(s => `<span class="seance-tag">${seanceShort(s)}</span>`).join(" ");
}

function seanceTagData(sepieces) {
  if (!sepieces || !sepieces.length) return "";
  return sepieces.map(s => `<span class="seance-tag" data-seance="${s}">${seanceShort(s)}</span>`).join(" ");
}

// ═══════════════════════════════════════════
//  GENERIC DETAIL PANELS (author, model, concept, ouvrage)
// ═══════════════════════════════════════════
function openPanel(html) {
  const panel = document.getElementById("detailPanel");
  panel.innerHTML = html;
  const overlay = document.getElementById("detailOverlay");
  overlay.classList.add("open");
  panel.querySelector(".close-btn").addEventListener("click", closeDetail);
  overlay.onclick = e => { if (e.target === overlay) closeDetail(); };
  // wire inner clickable tags
  panel.querySelectorAll("[data-action]").forEach(el => {
    el.addEventListener("click", () => {
      const action = el.dataset.action;
      const id = el.dataset.id;
      if (action === "author") { const a = authors.find(x => x.id === id); if (a) openAuthorDetail(a); }
      else if (action === "model") openModelDetail(id);
      else if (action === "concept") openConceptDetail(id, el.dataset.authorId);
      else if (action === "ouvrage") openOuvrageDetail(parseInt(id));
    });
  });
}

function openAuthorDetail(author) {
  const authorOuvrages = ouvrages.filter(o => o.authorId === author.id);
  openPanel(`
    <button class="close-btn">&times;</button>
    <h2>${author.name}</h2>
    ${author.dates ? `<div class="dates">${author.dates}</div>` : ""}
    <div style="margin-bottom:.6rem">${seanceTag(author.sepieces)}</div>
    <div class="section-label">Modèle(s) communicationnel(s)</div>
    <div>${author.models.map(m => `<span class="model-badge" style="cursor:pointer" data-action="model" data-id="${m}">${modelNames[m]}</span>`).join(" ")}</div>
    <div class="section-label">Concepts marquants</div>
    ${author.concepts.map(c => `
      <div class="concept-item" style="cursor:pointer" data-action="concept" data-id="${c.name}" data-author-id="${author.id}">
        <div class="name">${c.name} ${seanceTag(c.sepieces)}</div>
        <div class="def">${c.def}</div>
      </div>
    `).join("")}
    ${authorOuvrages.length ? `
      <div class="section-label">Ouvrages cités</div>
      ${authorOuvrages.map((o, i) => `<div class="concept-item" style="cursor:pointer" data-action="ouvrage" data-id="${ouvrages.indexOf(o)}"><div class="name" style="font-style:italic">${o.title} ${seanceTag(o.sepieces)}</div><div class="def">${o.year} — ${o.ref}</div></div>`).join("")}
    ` : ""}
  `);
}

function openModelDetail(modelId) {
  const m = models.find(x => x.id === modelId);
  if (!m) return;
  const modelAuthors = authors.filter(a => a.models.includes(modelId));
  const modelOuvrages = ouvrages.filter(o => o.model === modelId);
  openPanel(`
    <button class="close-btn">&times;</button>
    <h2>${m.name}</h2>
    <div class="dates">${m.period}</div>
    <div style="margin-bottom:.6rem">${seanceTag(m.sepieces)}</div>
    <div class="section-label">Description</div>
    <div style="font-size:.92rem;margin-bottom:.5rem;">${m.desc}</div>
    <div class="section-label">Concepts clés</div>
    <div style="font-size:.9rem;color:var(--text-light);margin-bottom:.5rem;">${m.concepts}</div>
    <div class="section-label">Auteurs</div>
    <div class="tags">${modelAuthors.map(a => `<span class="tag" data-action="author" data-id="${a.id}">${a.name}</span>`).join("")}</div>
    ${modelOuvrages.length ? `
      <div class="section-label">Ouvrages associés</div>
      ${modelOuvrages.map(o => `<div class="concept-item" style="cursor:pointer" data-action="ouvrage" data-id="${ouvrages.indexOf(o)}"><div class="name" style="font-style:italic">${o.title}</div><div class="def">${o.year} — ${o.author}</div></div>`).join("")}
    ` : ""}
  `);
}

function openConceptDetail(conceptName, authorId) {
  const author = authors.find(a => a.id === authorId);
  const concept = author ? author.concepts.find(c => c.name === conceptName) : null;
  if (!concept || !author) return;
  const relatedOuvrages = ouvrages.filter(o => o.authorId === authorId && o.concepts.includes(conceptName));
  openPanel(`
    <button class="close-btn">&times;</button>
    <h2>${concept.name}</h2>
    <div style="margin-bottom:.6rem">${seanceTag(concept.sepieces || author.sepieces)}</div>
    <div class="section-label">Définition</div>
    <div style="font-size:.92rem;margin-bottom:.5rem;">${concept.def}</div>
    <div class="section-label">Auteur</div>
    <div><span class="tag" data-action="author" data-id="${author.id}">${author.name}</span></div>
    <div class="section-label">Modèle(s)</div>
    <div>${author.models.map(m => `<span class="model-badge" style="cursor:pointer" data-action="model" data-id="${m}">${modelNames[m]}</span>`).join(" ")}</div>
    ${relatedOuvrages.length ? `
      <div class="section-label">Ouvrage(s) source</div>
      ${relatedOuvrages.map(o => `<div class="concept-item" style="cursor:pointer" data-action="ouvrage" data-id="${ouvrages.indexOf(o)}"><div class="name" style="font-style:italic">${o.title}</div><div class="def">${o.year} — ${o.author}</div></div>`).join("")}
    ` : ""}
  `);
}

function openOuvrageDetail(index) {
  const o = ouvrages[index];
  if (!o) return;
  const author = authors.find(a => a.id === o.authorId);
  openPanel(`
    <button class="close-btn">&times;</button>
    <h2 style="font-style:italic">${o.title}</h2>
    ${o.titleFr ? `<div class="dates">${o.titleFr}</div>` : ""}
    <div class="dates">${o.year}</div>
    <div style="margin-bottom:.6rem">${seanceTag(o.sepieces)}</div>
    <div class="section-label">Auteur</div>
    <div><span class="tag" data-action="author" data-id="${o.authorId}">${o.author}</span></div>
    <div class="section-label">Référence</div>
    <div style="font-size:.85rem;color:var(--text-light);margin-bottom:.5rem;">${o.ref}</div>
    <div class="section-label">Description</div>
    <div style="font-size:.92rem;margin-bottom:.5rem;">${o.desc}</div>
    <div class="section-label">Modèle</div>
    <div><span class="model-badge" style="cursor:pointer" data-action="model" data-id="${o.model}">${modelNames[o.model]}</span></div>
    <div class="section-label">Concepts associés</div>
    ${o.concepts.map(c => {
      const cObj = author ? author.concepts.find(x => x.name === c) : null;
      return `<div class="concept-item"${cObj ? ` style="cursor:pointer" data-action="concept" data-id="${c}" data-author-id="${o.authorId}"` : ""}><div class="name">${c}</div>${cObj ? `<div class="def">${cObj.def}</div>` : ""}</div>`;
    }).join("")}
  `);
}

// ═══════════════════════════════════════════
//  SÉANCE FILTER STATE
// ═══════════════════════════════════════════
let activeSeanceFilter = null;

function matchesSeance(item) {
  if (!activeSeanceFilter) return true;
  const s = item.sepieces || [];
  return s.includes(activeSeanceFilter);
}

function renderGlobalSeanceFilter() {
  const container = document.getElementById("globalSeanceFilter");
  container.innerHTML = `
    <button class="filter-btn seance-filter active" data-seance="all">Toutes</button>
    ${allSeances.map(s => `<button class="filter-btn seance-filter" data-seance="${s}">${seanceLabel(s)}</button>`).join("")}
  `;
  container.querySelectorAll(".seance-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".seance-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSeanceFilter = btn.dataset.seance === "all" ? null : btn.dataset.seance;
      renderAll();
      pushState();
    });
  });
}

function renderAll() {
  renderModels();
  renderAuthors(document.getElementById("search").value);
  renderConceptFilters();
  renderConcepts(document.getElementById("searchConcepts").value);
  renderOuvrages(document.getElementById("searchOuvrages").value);
  renderTimeline();
}

// ═══════════════════════════════════════════
//  RENDER MODELS
// ═══════════════════════════════════════════
function renderModels() {
  const container = document.getElementById("models");
  const filtered = models.filter(matchesSeance);
  container.innerHTML = filtered.map(m => `
    <div class="model-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:.3rem">
        <h2>${m.name}</h2>
        <div>${seanceTag(m.sepieces)}</div>
      </div>
      <div class="period">${m.period}</div>
      <div class="desc">${m.desc}</div>
      <div class="concepts"><strong>Concepts clés :</strong> ${m.concepts}</div>
      <div class="tags">
        ${m.authors.map(a => `<span class="tag" data-author="${a}">${a}</span>`).join("")}
      </div>
    </div>
  `).join("");
  container.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const author = authors.find(a => a.name === tag.dataset.author);
      if (author) openDetail(author);
    });
  });
}

// ═══════════════════════════════════════════
//  RENDER AUTHORS GRID
// ═══════════════════════════════════════════
function renderAuthors(filter = "") {
  const grid = document.getElementById("authorsGrid");
  const nf = norm(filter);
  const filtered = authors.filter(a => {
    if (!matchesSeance(a)) return false;
    return !nf || norm(a.name).includes(nf);
  });
  grid.innerHTML = filtered.map(a => `
    <div class="author-card" data-id="${a.id}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:.3rem">
        <h3>${a.name}</h3>
        <div>${seanceTag(a.sepieces)}</div>
      </div>
      ${a.dates ? `<div class="dates">${a.dates}</div>` : ""}
      <div>${a.models.map(m => `<span class="model-tag" data-action="model" data-id="${m}" style="cursor:pointer">${modelNames[m]}</span>`).join(" ")}</div>
      <div class="preview">${a.concepts.length} concept${a.concepts.length > 1 ? "s" : ""} — ${a.concepts[0].name}${a.concepts.length > 1 ? ", …" : ""}</div>
    </div>
  `).join("");
  grid.querySelectorAll(".author-card").forEach(card => {
    card.addEventListener("click", () => {
      const author = authors.find(a => a.id === card.dataset.id);
      if (author) openAuthorDetail(author);
    });
  });
  grid.querySelectorAll("[data-action='model']").forEach(tag => {
    tag.addEventListener("click", e => {
      e.stopPropagation();
      openModelDetail(tag.dataset.id);
    });
  });
}

// ═══════════════════════════════════════════
//  DETAIL OVERLAY (legacy wrapper)
// ═══════════════════════════════════════════
function openDetail(author) { openAuthorDetail(author); }
function closeDetail() { document.getElementById("detailOverlay").classList.remove("open"); }

// ═══════════════════════════════════════════
//  CONCEPTS — FLAT LIST + DUAL FILTERS
// ═══════════════════════════════════════════
function buildAllConcepts() {
  const all = [];
  authors.forEach(a => {
    a.concepts.forEach(c => {
      all.push({ name: c.name, def: c.def, authorName: a.name, authorId: a.id, models: a.models, sepieces: c.sepieces || a.sepieces || [] });
    });
  });
  all.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  return all;
}

let activeModelFilter = null;
let activeAuthorFilter = null;

function renderConceptFilters() {
  const container = document.getElementById("conceptsFilters");
  const modelEntries = Object.entries(modelNames);
  const visibleAuthors = authors.filter(matchesSeance);

  container.innerHTML = `
    <div class="filter-group">
      <span class="filter-group-label model-label-title">Par modèle</span>
      <div class="filter-row" id="modelFilters">
        <button class="filter-btn model-filter${!activeModelFilter ? ' active' : ''}" data-model="all">Tous</button>
        ${modelEntries.map(([id, label]) => `<button class="filter-btn model-filter${activeModelFilter === id ? ' active' : ''}" data-model="${id}">${label}</button>`).join("")}
      </div>
    </div>
    <div class="filter-group">
      <span class="filter-group-label author-label-title">Par auteur</span>
      <div class="filter-row" id="authorFilters">
        <button class="filter-btn author-filter${!activeAuthorFilter ? ' active' : ''}" data-author="all">Tous</button>
        ${visibleAuthors.map(a => `<button class="filter-btn author-filter${activeAuthorFilter === a.id ? ' active' : ''}" data-author="${a.id}">${a.name}</button>`).join("")}
      </div>
    </div>
  `;

  container.querySelectorAll("#modelFilters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll("#modelFilters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeModelFilter = btn.dataset.model === "all" ? null : btn.dataset.model;
      renderConcepts(document.getElementById("searchConcepts").value);
      pushState();
    });
  });

  container.querySelectorAll("#authorFilters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll("#authorFilters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeAuthorFilter = btn.dataset.author === "all" ? null : btn.dataset.author;
      renderConcepts(document.getElementById("searchConcepts").value);
      pushState();
    });
  });
}

function renderConcepts(filter = "") {
  const container = document.getElementById("conceptsList");
  const nf = norm(filter);
  const allConcepts = buildAllConcepts();
  const filtered = allConcepts.filter(c => {
    const matchesText = !nf || norm(c.name).includes(nf) || norm(c.def).includes(nf);
    const matchesModel = !activeModelFilter || c.models.includes(activeModelFilter);
    const matchesAuthor = !activeAuthorFilter || c.authorId === activeAuthorFilter;
    const matchesSe = !activeSeanceFilter || (c.sepieces && c.sepieces.includes(activeSeanceFilter));
    return matchesText && matchesModel && matchesAuthor && matchesSe;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-light);text-align:center;padding:2rem 0;">Aucun concept trouvé.</p>`;
    return;
  }

  container.innerHTML = filtered.map(c => `
    <div class="concept-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:.3rem">
        <h3 class="clickable-concept" data-concept="${c.name}" data-author-id="${c.authorId}" style="cursor:pointer">${c.name}</h3>
        <div>${seanceTag(c.sepieces)}</div>
      </div>
      <div class="concept-def">${c.def}</div>
      <div class="concept-meta">
        <span class="author-link" data-author-id="${c.authorId}">${c.authorName}</span>
        ${c.models.map(m => `<span class="model-label-tag clickable-model" data-model="${m}" style="cursor:pointer">${modelNames[m]}</span>`).join("")}
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".author-link").forEach(link => {
    link.addEventListener("click", () => {
      const author = authors.find(a => a.id === link.dataset.authorId);
      if (author) openDetail(author);
    });
  });
  container.querySelectorAll(".clickable-model").forEach(el => {
    el.addEventListener("click", () => openModelDetail(el.dataset.model));
  });
  container.querySelectorAll(".clickable-concept").forEach(el => {
    el.addEventListener("click", () => openConceptDetail(el.dataset.concept, el.dataset.authorId));
  });
}

// ═══════════════════════════════════════════
//  OUVRAGES DATA + RENDER
// ═══════════════════════════════════════════
const ouvrages = [
  {
    title: "Language",
    titleFr: "",
    year: 1921,
    author: "Edward Sapir",
    authorId: "sapir",
    ref: "Sapir Edward, Language: An Introduction to the Study of Speech, Harcourt Brace, New York, 1921.",
    model: "observation",
    desc: "Ouvrage fondateur sur le langage comme fait culturel. Sapir y développe l'idée que la culture est un code implicite partagé, « écrit nulle part, connu de personne, mais compris par tous ». Cette vision a profondément influencé l'anthropologie de la communication.",
    concepts: ["Culture comme code secret"],
    sepieces: ["1"]
  },
  {
    title: "Über den Prozess der Zivilisation",
    titleFr: "La civilisation des mœurs",
    year: 1939,
    author: "Norbert Elias",
    authorId: "elias",
    ref: "Elias Norbert, La civilisation des mœurs, Calmann-Lévy, Paris, 1973 (éd. orig. allemande 1939).",
    model: "observation",
    desc: "Étude monumentale de l'évolution des normes comportementales du XIe au XXe siècle, à travers les manuels de savoir-vivre. Elias montre comment les fonctions naturelles sont progressivement régulées et masquées, et comment les règles extérieures s'intériorisent en autocontraintes.",
    concepts: ["Processus de civilisation", "Autocontraintes", "Civilité"],
    sepieces: ["1"]
  },
  {
    title: "A Mathematical Theory of Communication",
    titleFr: "Théorie mathématique de la communication",
    year: 1948,
    author: "Claude Shannon",
    authorId: "shannon",
    ref: "Shannon Claude, « A Mathematical Theory of Communication », Bell System Technical Journal, vol. 27, 1948.",
    model: "telegraphique",
    desc: "Article fondateur de la théorie de l'information. Shannon y propose le schéma linéaire source → émetteur → canal → récepteur → destination, conçu pour optimiser la transmission du signal télégraphique. Ce modèle deviendra omniprésent malgré ses limitations.",
    concepts: ["Modèle mathématique de la communication", "Information mathématique (information₁)", "Niveaux de la communication"],
    sepieces: ["1"]
  },
  {
    title: "The Mathematical Theory of Communication",
    titleFr: "Théorie mathématique de la communication",
    year: 1949,
    author: "Claude Shannon & Warren Weaver",
    authorId: "shannon",
    ref: "Shannon Claude, Weaver Warren, Théorie mathématique de la communication, Retz, Paris, 1975 (éd. orig. 1949).",
    model: "telegraphique",
    desc: "Ouvrage co-écrit qui vulgarise et étend le modèle de Shannon. Weaver le présente comme applicable à toute communication humaine, contribuant à la confusion durable entre niveaux technique et sémantique.",
    concepts: ["Vulgarisation du modèle mathématique"],
    sepieces: ["1"]
  },
  {
    title: "Communication: The Social Matrix of Psychiatry",
    titleFr: "Communication et société",
    year: 1951,
    author: "Gregory Bateson & Jürgen Ruesch",
    authorId: "bateson",
    ref: "Ruesch Jürgen, Bateson Gregory, Communication et Société, Paris, Seuil, 1988 (éd. orig. 1951).",
    model: "palo-alto",
    desc: "Ouvrage fondateur affirmant que la communication est « la matrice dans laquelle sont enchâssées toutes les activités humaines ». Prémices de l'approche systémique de la communication.",
    concepts: ["Communication systémique"],
    sepieces: ["1"]
  },
  {
    title: "The Presentation of Self in Everyday Life",
    titleFr: "La mise en scène de la vie quotidienne",
    year: 1959,
    author: "Erving Goffman",
    authorId: "goffman",
    ref: "Goffman Erving, La mise en scène de la vie quotidienne, t. 1 et 2, Minuit, Paris, 1973 (éd. orig. 1959).",
    model: "microsociologie",
    desc: "Fondement de la métaphore théâtrale. Goffman analyse la vie sociale comme une représentation où chaque individu joue des rôles, gère sa façade et se replie en coulisses. La réalité est une construction collective.",
    concepts: ["Métaphore théâtrale", "Façade", "Interaction focalisée / non focalisée"],
    sepieces: ["1"]
  },
  {
    title: "The Silent Language",
    titleFr: "Le langage silencieux",
    year: 1959,
    author: "Edward T. Hall",
    authorId: "hall",
    ref: "Hall Edward T., Le langage silencieux, Seuil, Paris, 1984 (éd. orig. 1959).",
    model: "palo-alto",
    desc: "Premier ouvrage de Hall sur la communication non verbale. Il y explore les dimensions culturelles du temps et de l'espace, posant les bases de la proxémique.",
    concepts: ["Culture comme écosystème"],
    sepieces: ["1"]
  },
  {
    title: "Encounters: Two Studies in the Sociology of Interaction",
    titleFr: "Les moments et leurs hommes (extrait)",
    year: 1961,
    author: "Erving Goffman",
    authorId: "goffman",
    ref: "Goffman Erving, « Fun in Games », in Encounters: Two Studies in the Sociology of Interaction, Indianapolis, Bobbs-Merrill, 1961.",
    model: "microsociologie",
    desc: "Texte majeur où Goffman théorise l'interaction focalisée comme immersion. Il forge les concepts de membrane (frontière perméable), d'engagement de face, d'inattention sans effort, de règles de non-pertinence et de transformation, de fonction d'accordance, d'incidents, d'intégrations, de débordements et de jeux de scène secondaires (byplay).",
    concepts: ["Engagement de face", "Membrane", "Règles de non-pertinence", "Règles de transformation", "Fonction d'accordance", "Incidents et intégrations", "Débordements", "Jeux de scène secondaires (byplay)", "Inattention sans effort"],
    sepieces: ["2"]
  },
  {
    title: "Stigma: Notes on the Management of Spoiled Identity",
    titleFr: "Stigmate. Les usages sociaux des handicaps",
    year: 1963,
    author: "Erving Goffman",
    authorId: "goffman",
    ref: "Goffman Erving, Stigmate. Les usages sociaux des handicaps, Éditions de Minuit, Paris, 1975 (éd. orig. 1963).",
    model: "microsociologie",
    desc: "Analyse de la façon dont certains attributs disqualifient dans les interactions. Le stigmate est variable selon les situations, visible ou invisible. Son observation révèle les normes sociales et la façon dont nous construisons nos rôles.",
    concepts: ["Stigmate et stigmatisation", "Passing (dissimulation du stigmate)"],
    sepieces: ["1"]
  },
  {
    title: "The Hidden Dimension",
    titleFr: "La dimension cachée",
    year: 1966,
    author: "Edward T. Hall",
    authorId: "hall",
    ref: "Hall Edward T., La dimension cachée, Seuil, Paris, 1971 (éd. orig. 1966).",
    model: "palo-alto",
    desc: "Ouvrage fondateur de la proxémique. Hall y théorise les quatre distances interpersonnelles (intime, personnelle, sociale, publique) et montre que chaque culture construit des « mondes perceptifs différents » à travers un crible perceptif culturel.",
    concepts: ["Proxémique", "Quatre distances interpersonnelles", "Crible perceptif culturel"],
    sepieces: ["1"]
  },
  {
    title: "Pragmatics of Human Communication",
    titleFr: "Une logique de la communication",
    year: 1967,
    author: "Paul Watzlawick, Janet Beavin & Don Jackson",
    authorId: "watzlawick",
    ref: "Watzlawick Paul, Beavin Janet H., Jackson Don D., Une logique de la communication, Seuil, Paris, 1972 (éd. orig. 1967).",
    model: "palo-alto",
    desc: "Ouvrage majeur posant les cinq axiomes de la communication. Développe la théorie de la double contrainte et de la communication pathologique. « On ne peut pas ne pas communiquer. »",
    concepts: ["Axiomatique de la communication", "Axiome 1 : On ne peut pas ne pas communiquer", "Axiome 2 : Contenu et relation", "Double contrainte (double bind)", "Communication pathologique"],
    sepieces: ["1"]
  },
  {
    title: "Interaction Ritual: Essays on Face-to-Face Behavior",
    titleFr: "Les rites d'interaction",
    year: 1967,
    author: "Erving Goffman",
    authorId: "goffman",
    ref: "Goffman Erving, Les rites d'interaction, Minuit, Paris, 1974 (éd. orig. 1967).",
    model: "microsociologie",
    desc: "Analyse des rites quotidiens qui maintiennent l'ordre social : face, tact, savoir-vivre. La face sociale est « un prêt que lui consent la société » ; si on ne s'en montre pas digne, elle est retirée.",
    concepts: ["Face", "Rites d'interaction", "Distance au rôle"],
    sepieces: ["1"]
  },
  {
    title: "Kinesics and Context: Essays on Body Motion Communication",
    titleFr: "",
    year: 1970,
    author: "Ray Birdwhistell",
    authorId: "birdwhistell",
    ref: "Birdwhistell Ray L., Kinesics and Context, University of Pennsylvania Press, Philadelphia, 1970.",
    model: "observation",
    desc: "Tentative ambitieuse de codifier le langage des gestes en unités minimales (kinèmes). L'échec de l'entreprise montre que la gestuelle n'est pas un code autonome et met en lumière l'importance de la redondance entre canaux de communication.",
    concepts: ["Kinésique", "Redondance communicationnelle"],
    sepieces: ["1"]
  },
  {
    title: "Foundations in Sociolinguistics: An Ethnographic Approach",
    titleFr: "Vers la compétence de communication",
    year: 1974,
    author: "Dell Hymes",
    authorId: "hymes",
    ref: "Hymes Dell H., Foundations in Sociolinguistics, University of Pennsylvania Press, Philadelphia, 1974.",
    model: "speaking",
    desc: "Approche synthétique articulant linguistique, folklore et anthropologie. Présente le modèle SPEAKING (8 composantes) et les concepts de compétence de communication et de communauté de communication.",
    concepts: ["Modèle SPEAKING", "Compétence de communication", "Communauté de communication"],
    sepieces: ["1"]
  },
  {
    title: "Domination and the Arts of Resistance",
    titleFr: "La domination et les arts de la résistance",
    year: 1990,
    author: "James C. Scott",
    authorId: "scott",
    ref: "Scott James C., La domination et les arts de la résistance. Fragments du discours subalterne, Éditions Amsterdam, Paris, 2009 (éd. orig. 1990).",
    model: "microsociologie",
    desc: "Analyse des rapports de domination : les normes sociales nous forcent à sacrifier de la franchise pour entretenir des relations. Cette prudence peut être stratégique face aux rapports de pouvoir.",
    concepts: ["Arts de la résistance"],
    sepieces: ["1"]
  },
  {
    title: "Anthropologie de la communication",
    titleFr: "",
    year: 1996,
    author: "Yves Winkin",
    authorId: "winkin",
    ref: "Winkin Yves, Anthropologie de la communication, Seuil, Paris, 2001 (1re éd. 1996).",
    model: "palo-alto",
    desc: "Synthèse de l'approche anthropologique de la communication. Winkin y développe la métaphore orchestrale, la méthode de simplification maîtrisée (silhouettage) et critique le modèle télégraphique comme modèle « indigène » occidental.",
    concepts: ["Anthropologie de la communication", "Simplification maîtrisée (silhouettage)", "Communication orchestrale"],
    sepieces: ["1"]
  },
  {
    title: "De l'anthropologie à l'épistémologie de la communication",
    titleFr: "",
    year: 1997,
    author: "Stéphane Olivesi",
    authorId: "olivesi",
    ref: "Olivesi Stéphane, « De l'anthropologie à l'épistémologie de la communication. Variations critiques autour de Palo Alto », Réseaux n° 85, 1997, pp. 215-238.",
    model: "palo-alto",
    desc: "Article critique montrant que les variations culturelles et spatiales mises en évidence par Hall ne doivent pas occulter les différences sociales au sein d'une même culture.",
    concepts: ["Critique de Hall"],
    sepieces: ["1"]
  },
  {
    title: "Observer la communication : Naissance d'une interdiscipline",
    titleFr: "",
    year: 2000,
    author: "Bruno Ollivier",
    authorId: "ollivier",
    ref: "Ollivier Bruno, Observer la communication : Naissance d'une interdiscipline, CNRS Éditions, Paris, 2000.",
    model: "palo-alto",
    desc: "Ouvrage de synthèse sur la communication comme interdiscipline. Formule la métaphore orchestrale et développe le concept de dispositif pour analyser les situations de communication.",
    concepts: ["Communication orchestrale (formulation)", "Dispositif"],
    sepieces: ["1"]
  },
  {
    title: "Y a-t-il (vraiment) des technologies de l'information ?",
    titleFr: "",
    year: 2000,
    author: "Yves Jeanneret",
    authorId: "jeanneret",
    ref: "Jeanneret Yves, Y a-t-il (vraiment) des technologies de l'information ?, Presses universitaires du Septentrion, Villeneuve d'Ascq, 2000.",
    model: "telegraphique",
    desc: "Distinction fondamentale entre information mathématique (traitement formel de signaux) et information sociale (interprétation, production de sens). Critique de la confusion entretenue par l'expression « technologies de l'information ».",
    concepts: ["Information₁ vs information₂", "Critique des « technologies de l'information »"],
    sepieces: ["1"]
  },
  {
    title: "L'attention et ses envers",
    titleFr: "",
    year: 2020,
    author: "Anthony Pecqueux",
    authorId: "pecqueux",
    ref: "Pecqueux Anthony, « L'attention et ses envers — L'immersion dans un cercle de parole, le Parlons-En », Revue Corps-Objet-Image, n° 4, TJP Éditions, 2020.",
    model: "microsociologie",
    desc: "Étude ethnographique de l'immersion dans le Parlons-En, un cercle de parole à Grenoble. Pecqueux mobilise le cadre théorique de Goffman (Fun in Games, 1961) pour analyser la membrane, l'attention/inattention, les activités de care invisibilisées et la passibilité des participants.",
    concepts: ["Immersion interactionnelle", "Passibilité", "Fonctions de la membrane (spatiale et sociale)", "Care et invisibilisation"],
    sepieces: ["2"]
  }
];

function renderOuvrages(filter = "") {
  const container = document.getElementById("ouvragesList");
  const nf = norm(filter);
  const filtered = ouvrages.filter(o => {
    if (!matchesSeance(o)) return false;
    if (!nf) return true;
    return norm(o.title).includes(nf) || (o.titleFr && norm(o.titleFr).includes(nf))
      || norm(o.author).includes(nf) || norm(o.desc).includes(nf)
      || o.concepts.some(c => norm(c).includes(nf));
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-light);text-align:center;padding:2rem 0;">Aucun ouvrage trouvé.</p>`;
    return;
  }

  const sorted = [...filtered].sort((a, b) => a.year - b.year);

  container.innerHTML = sorted.map(o => `
    <div class="ouvrage-card">
      <div class="ouvrage-header">
        <h3>${o.title}${o.titleFr ? ` <span style="font-style:normal;color:var(--text-light);font-size:.9rem;">(${o.titleFr})</span>` : ""}</h3>
        <div style="display:flex;align-items:center;gap:.4rem;flex-shrink:0">
          ${seanceTag(o.sepieces)}
          <span class="ouvrage-year">${o.year}</span>
        </div>
      </div>
      <div class="ouvrage-author" data-author-id="${o.authorId}">${o.author}</div>
      <div class="ouvrage-ref">${o.ref}</div>
      <div class="ouvrage-desc">${o.desc}</div>
      <div class="ouvrage-concepts-label">Concepts associés</div>
      <div class="ouvrage-concepts-list">
        ${o.concepts.map(c => `<span class="ouvrage-concept-tag" data-action="concept" data-id="${c}" data-author-id="${o.authorId}" style="cursor:pointer">${c}</span>`).join("")}
      </div>
      <div class="ouvrage-meta">
        <span class="ouvrage-model-tag" data-action="model" data-id="${o.model}" style="cursor:pointer">${modelNames[o.model]}</span>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".ouvrage-author").forEach(el => {
    el.addEventListener("click", () => {
      const author = authors.find(a => a.id === el.dataset.authorId);
      if (author) openAuthorDetail(author);
    });
  });
  container.querySelectorAll("[data-action]").forEach(el => {
    el.addEventListener("click", e => {
      e.stopPropagation();
      const action = el.dataset.action;
      const id = el.dataset.id;
      if (action === "model") openModelDetail(id);
      else if (action === "concept") openConceptDetail(id, el.dataset.authorId);
    });
  });
}

// ═══════════════════════════════════════════
//  TIMELINE
// ═══════════════════════════════════════════
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  const filtered = timelineEvents.filter(matchesSeance);
  const sorted = [...filtered].sort((a, b) => b.year - a.year);

  container.innerHTML = sorted.map(ev => `
    <div class="tl-item">
      <div class="tl-dot ${ev.type === 'model' ? 'model-dot' : 'work-dot'}"></div>
      <div class="tl-year">${ev.year} ${seanceTag(ev.sepieces)}</div>
      <div class="tl-card ${ev.type === 'model' ? 'model-event' : 'work-event'}">
        <h3>${ev.title}</h3>
        <div class="tl-author">${ev.author}</div>
        <div class="tl-desc">${ev.desc}</div>
        <div class="tl-tags">
          <span class="tl-tag tl-model-tag" data-action="model" data-id="${ev.model}" style="cursor:pointer">${modelNames[ev.model]}</span>
          <span class="tl-tag tl-author-tag" data-author-id="${ev.authorId}">${ev.authorId === "shannon" && ev.author.includes("Weaver") ? "Claude Shannon" : ev.author.split(",")[0].split("&")[0].trim()}</span>
        </div>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".tl-author-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const author = authors.find(a => a.id === tag.dataset.authorId);
      if (author) openAuthorDetail(author);
    });
  });
  container.querySelectorAll("[data-action='model']").forEach(tag => {
    tag.addEventListener("click", () => openModelDetail(tag.dataset.id));
  });
}

// ═══════════════════════════════════════════
//  URL STATE MANAGEMENT
// ═══════════════════════════════════════════
function getActiveView() {
  const btn = document.querySelector("nav button.active");
  return btn ? btn.dataset.view : "models";
}

function stateToHash() {
  const p = new URLSearchParams();
  p.set("v", getActiveView());
  if (activeSeanceFilter) p.set("seance", activeSeanceFilter);
  if (activeModelFilter) p.set("model", activeModelFilter);
  if (activeAuthorFilter) p.set("author", activeAuthorFilter);
  const view = getActiveView();
  let q = "";
  if (view === "authors") q = document.getElementById("search").value;
  else if (view === "concepts") q = document.getElementById("searchConcepts").value;
  else if (view === "ouvrages") q = document.getElementById("searchOuvrages").value;
  if (q) p.set("q", q);
  return "#" + p.toString();
}

function pushState() {
  const hash = stateToHash();
  if (window.location.hash !== hash) {
    history.replaceState(null, "", hash);
  }
}

function applyHash(doRender) {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) { if (doRender) initRender(); return; }
  const p = new URLSearchParams(raw);

  // View/tab
  const view = p.get("v") || "models";
  document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
  const targetBtn = document.querySelector(`nav button[data-view="${view}"]`);
  if (targetBtn) targetBtn.classList.add("active");
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const targetView = document.getElementById(view);
  if (targetView) targetView.classList.add("active");

  // Séance filter
  activeSeanceFilter = p.get("seance") || null;
  document.querySelectorAll("#globalSeanceFilter .seance-filter").forEach(b => {
    b.classList.toggle("active", (activeSeanceFilter ? b.dataset.seance === activeSeanceFilter : b.dataset.seance === "all"));
  });

  // Concept filters
  activeModelFilter = p.get("model") || null;
  activeAuthorFilter = p.get("author") || null;

  // Search queries
  const q = p.get("q") || "";
  if (view === "authors") document.getElementById("search").value = q;
  else if (view === "concepts") document.getElementById("searchConcepts").value = q;
  else if (view === "ouvrages") document.getElementById("searchOuvrages").value = q;

  if (doRender) initRender();
}

function initRender() {
  renderModels();
  renderAuthors(document.getElementById("search").value);
  renderConceptFilters();
  renderConcepts(document.getElementById("searchConcepts").value);
  renderOuvrages(document.getElementById("searchOuvrages").value);
  renderTimeline();
}

// ═══════════════════════════════════════════
//  NAV
// ═══════════════════════════════════════════
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById(btn.dataset.view).classList.add("active");
    pushState();
  });
});

document.getElementById("search").addEventListener("input", e => { renderAuthors(e.target.value); pushState(); });
document.getElementById("searchConcepts").addEventListener("input", e => { renderConcepts(e.target.value); pushState(); });
document.getElementById("searchOuvrages").addEventListener("input", e => { renderOuvrages(e.target.value); pushState(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetail(); });

window.addEventListener("hashchange", () => applyHash(true));

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
renderGlobalSeanceFilter();
applyHash(true);
