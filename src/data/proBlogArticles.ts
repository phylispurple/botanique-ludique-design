// 7 articles "top of funnel" RH/QVCT pour capter les recherches en amont
// (idées d'animation, conseils RH, listes "10 idées"). Servis par
// <ProBlogArticle> via le slug URL.

export interface ProArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ProBlogConfig {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  sections: ProArticleSection[];
  ctaText: string;
  ctaTarget: string;
  relatedLandings: string[]; // slugs landing
}

export const PRO_ARTICLES: ProBlogConfig[] = [
  {
    slug: "idees-animation-qvct-nature-entreprise",
    title: "10 Idées d'Animation QVCT Nature pour Entreprises",
    metaDescription:
      "10 idées concrètes d'animation QVCT nature pour vos équipes : kokedama, terrarium, balade botanique, herbier. Adaptable à toute taille d'entreprise.",
    keywords:
      "idée animation qvct, animation qvct entreprise, idées qvct, animation qvct nature, semaine qvct idées",
    h1: "10 Idées d'Animation QVCT Nature qui Marchent Vraiment",
    excerpt:
      "Au-delà du yoga et du massage, voici 10 formats nature qui transforment réellement la Qualité de Vie au Travail. Testées sur le terrain, adaptées à toutes les tailles d'équipe.",
    readingTime: "8 min",
    publishedAt: "2026-05-15",
    sections: [
      {
        heading: "Pourquoi miser sur la nature pour la QVCT ?",
        paragraphs: [
          "La Semaine pour la Qualité de Vie et les Conditions de Travail revient chaque année en juin. Au-delà du symbole, c'est l'occasion de tester des formats qui ont un vrai impact sur le bien-être au quotidien.",
          "Les études en psychologie environnementale convergent : la manipulation de matière végétale réduit le cortisol, améliore l'attention et favorise les interactions positives entre collègues. Plus efficace, et bien moins cher, qu'une journée de team building classique.",
        ],
      },
      {
        heading: "1. L'atelier kokedama",
        paragraphs: [
          "Chaque collaborateur compose une sphère de mousse japonaise autour d'une racine de plante. Format court (1h30), résultat spectaculaire, plante vivante à rapporter au bureau ou à la maison.",
          "Idéal pour un premier événement QVCT, fonctionne bien en groupes de 8 à 20 personnes.",
        ],
      },
      {
        heading: "2. Le terrarium d'équipe",
        paragraphs: [
          "Petit écosystème en bocal, à construire seul ou à plusieurs. La métaphore est forte : un écosystème dépend de l'équilibre entre ses composants. Vos équipes le comprennent en le faisant.",
        ],
      },
      {
        heading: "3. La teinture végétale collective",
        paragraphs: [
          "Vos collaborateurs teignent un tote bag ou un foulard avec des plantes tinctoriales locales. Format un peu plus long (2h30) mais résultat textile durable qu'ils porteront.",
        ],
      },
      {
        heading: "4. Les bombes de graines urbaines",
        paragraphs: [
          "Argile, terreau, graines de fleurs mellifères. En 1h, chaque équipe produit 20 à 30 bombes à disperser dans les espaces verts du quartier. Format flash, fort impact RSE.",
        ],
      },
      {
        heading: "5. La balade botanique du quartier",
        paragraphs: [
          "Une animatrice nature emmène vos équipes découvrir les plantes du trottoir, des pieds d'arbre, des friches. Surprenant et pédagogique. Idéal en pause méridienne.",
        ],
      },
      {
        heading: "6. La composition aromatique personnalisée",
        paragraphs: [
          "Chaque collaborateur compose son mélange de tisane ou son bouquet aromatique. Format sensoriel, à boire ou à offrir, et apprentissage des propriétés des plantes.",
        ],
      },
      {
        heading: "7. L'herbier collaboratif",
        paragraphs: [
          "Sortie d'observation puis atelier de mise en page. Le résultat reste dans l'entreprise, signe visible du moment partagé.",
        ],
      },
      {
        heading: "8. La conférence ethnobotanique",
        paragraphs: [
          "45 minutes de récit captivant sur l'histoire d'une plante familière (le café, le coton, le palmier). Format keynote qui peut ouvrir une journée QVCT.",
        ],
      },
      {
        heading: "9. L'atelier zéro déchet végétal",
        paragraphs: [
          "Bocaux de tisanes, infusions, savoirs de conservation. Format utile à la vie quotidienne, très apprécié.",
        ],
      },
      {
        heading: "10. Le rituel saisonnier d'équipe",
        paragraphs: [
          "Un atelier marquant les solstices ou équinoxes, qui crée un rituel d'entreprise et donne du rythme à l'année.",
        ],
      },
      {
        heading: "Comment choisir le bon format ?",
        paragraphs: [
          "Pour une première fois, partez sur kokedama ou terrarium : valeur sûre, effet visuel garanti. Pour une équipe technique habituée aux team buildings, préférez la teinture végétale ou la composition aromatique, qui sortent davantage du lot.",
          "Pour un grand groupe (plus de 30 personnes), privilégiez les bombes de graines ou un format en rotation parallèle sur plusieurs ateliers.",
        ],
      },
    ],
    ctaText: "Discutons de votre programme QVCT",
    ctaTarget: "/atelier-qvct-paris",
    relatedLandings: ["atelier-qvct-paris", "semaine-qvct-entreprise", "animation-bien-etre-entreprise"],
  },

  {
    slug: "team-building-ecologique-10-idees-entreprise",
    title: "Team Building Écologique : 10 Idées Vraiment Vertes",
    metaDescription:
      "10 idées de team building écologique pour entreprises engagées : ateliers nature, faible empreinte, sensibilisation. Adapté Île-de-France.",
    keywords:
      "team building ecologique, team building responsable, team building nature, team building rse, team building vert idees",
    h1: "Team Building Écologique : 10 Idées Cohérentes avec vos Valeurs",
    excerpt:
      "Marre des team buildings carbonés qui finissent en flyers dans la poubelle ? Voici 10 formats vraiment écologiques, testés, et qui restent mémorables.",
    readingTime: "7 min",
    publishedAt: "2026-05-12",
    sections: [
      {
        heading: "Le team building écologique, c'est quoi vraiment ?",
        paragraphs: [
          "Faible empreinte matérielle, matériaux locaux et biodégradables, sensibilisation effective au vivant. Un team building écologique cohérent ne doit pas générer plus de déchets qu'un événement classique, ni se résumer à un flyer recyclé.",
          "Les 10 formats qui suivent respectent ces critères, sont praticables en Île-de-France, et fonctionnent avec des équipes de 8 à 60 personnes.",
        ],
      },
      {
        heading: "1. Atelier kokedama",
        paragraphs: ["Mousse, terre, ficelle. Aucun plastique, plante vivante qui prolonge l'expérience plusieurs mois."],
      },
      {
        heading: "2. Teinture végétale sur vêtements existants",
        paragraphs: [
          "Chaque participant apporte un vêtement à transformer. Économie circulaire textile concrète, pas de production nouvelle.",
        ],
      },
      {
        heading: "3. Cueillette urbaine encadrée",
        paragraphs: ["Sortie botanique en ville pour identifier les plantes comestibles et médicinales du quartier."],
      },
      {
        heading: "4. Bombes de graines mellifères",
        paragraphs: ["Argile + terre + graines locales. Action collective directement utile à la biodiversité."],
      },
      {
        heading: "5. Atelier semis et plantation",
        paragraphs: ["Pour entreprises avec jardin ou terrasse : semis collectif d'un potager partagé."],
      },
      {
        heading: "6. Herbier d'entreprise",
        paragraphs: ["Documentation collective de la flore locale. Le résultat reste dans l'entreprise."],
      },
      {
        heading: "7. Atelier savoirs paysans",
        paragraphs: ["Conférence-atelier sur les plantes alimentaires oubliées, dégustation incluse."],
      },
      {
        heading: "8. Composition de tisanes",
        paragraphs: ["Plantes aromatiques locales, contenants réutilisables, savoir-faire à emporter."],
      },
      {
        heading: "9. Fabrication de papier recyclé",
        paragraphs: ["À partir de chutes de papier de l'entreprise. Métaphore RSE assumée."],
      },
      {
        heading: "10. Balade botanique commentée",
        paragraphs: ["Zéro matériel, juste les yeux et les jambes. Format le plus écologique possible."],
      },
      {
        heading: "Comment évaluer l'impact réel ?",
        paragraphs: [
          "Demandez à votre prestataire un bilan matériel et déplacement chiffré. Comptez en moyenne 4 à 8 kg CO2e par participant pour un team building nature correctement organisé.",
        ],
      },
    ],
    ctaText: "Un team building écologique en IDF",
    ctaTarget: "/team-building-ecologique-ile-de-france",
    relatedLandings: ["team-building-nature-paris", "team-building-ecologique-ile-de-france", "animation-rse-entreprise"],
  },

  {
    slug: "atelier-rse-comment-choisir-format",
    title: "Atelier RSE : Comment Choisir le Bon Format",
    metaDescription:
      "Atelier RSE en entreprise : comment choisir entre conférence, atelier pratique, sensibilisation. Guide complet pour responsables RSE.",
    keywords:
      "atelier rse, choisir atelier rse, format atelier rse, sensibilisation rse entreprise, animation rse choisir",
    h1: "Atelier RSE : Quel Format Pour Quel Objectif ?",
    excerpt:
      "Conférence, atelier pratique, sensibilisation collective. Choisir le bon format d'animation RSE selon votre maturité, votre budget et vos enjeux internes.",
    readingTime: "6 min",
    publishedAt: "2026-05-10",
    sections: [
      {
        heading: "La question vraiment importante",
        paragraphs: [
          "Avant de choisir un format, posez-vous la question de l'objectif réel. Sensibiliser des collaborateurs qui n'ont jamais entendu parler de biodiversité, ce n'est pas le même travail que faire monter en compétence une équipe RSE déjà engagée.",
        ],
      },
      {
        heading: "Format 1 : la conférence ouverture",
        paragraphs: [
          "Quand : pour lancer une démarche RSE, ou marquer une étape symbolique.",
          "Durée idéale : 45 min à 1h. Format keynote, accessible à tous.",
          "Limite : seul, il ne crée pas d'engagement durable. À combiner avec un atelier.",
        ],
      },
      {
        heading: "Format 2 : l'atelier pratique",
        paragraphs: [
          "Quand : pour ancrer un message dans le corps et la mémoire.",
          "Durée idéale : 1h30 à 2h30, en groupes de 8 à 20.",
          "Limite : nécessite plus de logistique et un budget par participant plus élevé.",
        ],
      },
      {
        heading: "Format 3 : la fresque collective",
        paragraphs: [
          "Quand : pour faire émerger une vision commune au sein d'une équipe.",
          "Durée idéale : 3h en équipe complète.",
          "Limite : peu efficace si l'équipe ne se connaît pas encore.",
        ],
      },
      {
        heading: "Format 4 : la balade botanique commentée",
        paragraphs: [
          "Quand : pour incarner la biodiversité urbaine sans faire de salle.",
          "Durée idéale : 1h à 1h30 en groupe de 12 à 25.",
          "Limite : météo dépendante.",
        ],
      },
      {
        heading: "Construire un parcours plutôt qu'un événement isolé",
        paragraphs: [
          "Le format le plus efficace est souvent un enchaînement : conférence d'ouverture, atelier pratique 3 mois plus tard, fresque collective en clôture d'année. Cette progression donne une cohérence narrative à votre démarche RSE.",
        ],
      },
    ],
    ctaText: "Concevons votre programme RSE",
    ctaTarget: "/animation-rse-entreprise",
    relatedLandings: ["animation-rse-entreprise", "atelier-developpement-durable-entreprise"],
  },

  {
    slug: "idees-seminaire-vert-paris-entreprise",
    title: "Séminaire Vert à Paris : 8 Idées d'Animation",
    metaDescription:
      "8 idées d'animations pour votre séminaire vert à Paris : conférence ethnobotanique, ateliers nature, balades urbaines. Programme cohérent.",
    keywords:
      "seminaire vert paris idees, idees seminaire ecologique, animation seminaire nature, organiser seminaire vert",
    h1: "Séminaire Vert à Paris : 8 Idées pour un Programme Cohérent",
    excerpt:
      "Un séminaire vert n'est pas qu'un buffet bio. Voici 8 idées d'animations parisiennes pour structurer un séminaire vraiment écologique du début à la fin.",
    readingTime: "6 min",
    publishedAt: "2026-05-08",
    sections: [
      {
        heading: "Le piège du séminaire 'vert' superficiel",
        paragraphs: [
          "Buffet bio plus papier kraft sur les supports n'égale pas séminaire vert. Vos collaborateurs sentent immédiatement le décalage entre le discours et l'organisation. Un séminaire vert cohérent intègre le végétal à chaque temps : ouverture, ateliers, pauses, clôture.",
        ],
      },
      {
        heading: "1. Conférence d'ouverture ethnobotanique",
        paragraphs: ["45 min pour ancrer le séminaire dans une histoire végétale qui résonne avec votre métier."],
      },
      {
        heading: "2. Atelier kokedama en pause",
        paragraphs: ["Format 30 min entre deux plénières, par groupes tournants."],
      },
      {
        heading: "3. Balade botanique du quartier",
        paragraphs: ["Marie le besoin de se dégourdir les jambes avec un contenu pédagogique."],
      },
      {
        heading: "4. Atelier teinture en after-work",
        paragraphs: ["Format 2h post-séminaire, en option pour ceux qui veulent prolonger."],
      },
      {
        heading: "5. Buffet ethnobotanique commenté",
        paragraphs: ["Chaque plat est introduit par l'histoire de ses ingrédients. Pédagogie discrète et délicieuse."],
      },
      {
        heading: "6. Atelier bombes de graines en clôture",
        paragraphs: ["Action collective concrète qui marque la fin du séminaire."],
      },
      {
        heading: "7. Quiz végétal de cohésion",
        paragraphs: ["Format ludique inter-équipes sur les plantes du quotidien."],
      },
      {
        heading: "8. Atelier composition aromatique à emporter",
        paragraphs: ["Cadeau de fin de séminaire personnalisé par chaque participant."],
      },
      {
        heading: "Lieux séminaires verts à Paris",
        paragraphs: [
          "Privilégiez les lieux qui ont déjà une démarche écologique documentée : certifications, sourcing local des ingrédients, gestion des déchets. La cohérence se joue à tous les niveaux.",
        ],
      },
    ],
    ctaText: "Construisons votre séminaire vert",
    ctaTarget: "/seminaire-vert-paris",
    relatedLandings: ["seminaire-vert-paris", "seminaire-nature-ile-de-france"],
  },

  {
    slug: "cadeau-client-ecologique-entreprise",
    title: "Cadeau Client Écologique : Idées Originales 2026",
    metaDescription:
      "Cadeau client écologique 2026 : ateliers expérientiels, créations végétales personnalisées. Alternatives originales aux objets promotionnels.",
    keywords:
      "cadeau client ecologique, cadeau entreprise ecologique, cadeau client original, cadeau experience entreprise",
    h1: "Cadeau Client Écologique : 7 Idées qui Marquent",
    excerpt:
      "Vos clients reçoivent dix coffrets de chocolats et trois bougies par an. Voici 7 idées de cadeaux écologiques expérientiels qu'ils n'oublieront pas.",
    readingTime: "5 min",
    publishedAt: "2026-05-05",
    sections: [
      {
        heading: "Pourquoi privilégier l'expérience à l'objet ?",
        paragraphs: [
          "Un cadeau matériel finit dans un placard. Une expérience reste en mémoire. C'est aussi cohérent avec une stratégie écologique : moins de production, plus de sens.",
        ],
      },
      {
        heading: "1. Atelier botanique privatisé",
        paragraphs: ["Invitez vos clients clés à un atelier kokedama ou terrarium dans un lieu d'exception parisien."],
      },
      {
        heading: "2. Bon cadeau atelier individuel",
        paragraphs: ["Carte cadeau personnalisée, valable un an, pour un atelier au choix dans notre catalogue."],
      },
      {
        heading: "3. Kit de plantation personnalisé",
        paragraphs: ["Boîte avec graines, instructions et histoire botanique. Co-brandable."],
      },
      {
        heading: "4. Bocal de tisane composé sur-mesure",
        paragraphs: ["Mélange unique créé pour votre client à partir d'un brief sensoriel."],
      },
      {
        heading: "5. Kokedama personnalisé",
        paragraphs: ["Plante vivante avec étiquette manuscrite. Plus durable qu'un bouquet."],
      },
      {
        heading: "6. Adoption d'arbre symbolique",
        paragraphs: ["Plantation d'un arbre au nom du client, certificat et photos annuelles."],
      },
      {
        heading: "7. Conférence privée à domicile",
        paragraphs: ["Soirée ethnobotanique pour un client VIP et ses proches. Format intimiste, fort impact."],
      },
    ],
    ctaText: "Personnalisons votre cadeau client",
    ctaTarget: "/animation-evenement-entreprise-nature",
    relatedLandings: ["animation-evenement-entreprise-nature", "animation-soiree-entreprise-vegetale"],
  },

  {
    slug: "animation-semaine-qvct-juin-idees-programme",
    title: "Semaine QVCT en Juin : Programme Complet d'Animations",
    metaDescription:
      "Programme complet d'animations pour la Semaine QVCT de juin : ateliers nature, conférences, formats courts. Calendrier indicatif sur 5 jours.",
    keywords:
      "semaine qvct juin, programme semaine qvct, animation semaine qvct entreprise, semaine qvct organiser",
    h1: "Semaine QVCT en Juin : Programme Complet d'Animations Nature",
    excerpt:
      "Comment construire un programme cohérent sur les 5 jours de la Semaine QVCT ? Voici un calendrier indicatif d'animations nature, modulable selon vos contraintes.",
    readingTime: "7 min",
    publishedAt: "2026-05-03",
    sections: [
      {
        heading: "Avant de commencer : 3 questions à se poser",
        paragraphs: [
          "Combien de sites ? Combien de collaborateurs au total ? Quel budget ? Ces trois réponses déterminent le type de programme possible. Inutile de viser 10 ateliers si vous avez 80 personnes sur un seul site.",
        ],
      },
      {
        heading: "Lundi : ouverture en douceur",
        paragraphs: ["Une conférence ethnobotanique de 45 min en plénière d'ouverture pose le cadre de la semaine."],
      },
      {
        heading: "Mardi : atelier déjeuner",
        paragraphs: ["Format 1h en pause méridienne, en open space. Kokedama ou terrarium, idéal pour démocratiser."],
      },
      {
        heading: "Mercredi : balade ou sortie",
        paragraphs: ["Format extérieur pour ceux qui ont besoin de bouger : balade botanique du quartier."],
      },
      {
        heading: "Jeudi : ateliers thématiques tournants",
        paragraphs: ["Plusieurs ateliers en parallèle sur 2h. Chacun choisit selon ses envies."],
      },
      {
        heading: "Vendredi : action collective de clôture",
        paragraphs: ["Bombes de graines en équipe, à disperser dans les espaces verts proches. Symbole fort."],
      },
      {
        heading: "Multi-sites : la rotation",
        paragraphs: [
          "Pour les entreprises multi-sites, prévoir une animation par site et par jour, avec un fil narratif commun communiqué par mail à toute l'entreprise.",
        ],
      },
      {
        heading: "Budget indicatif",
        paragraphs: [
          "Comptez 3 000 à 8 000 EUR HT pour une Semaine QVCT cohérente touchant 50 à 150 collaborateurs, selon le mix de formats choisis.",
        ],
      },
    ],
    ctaText: "Préparez votre Semaine QVCT 2026",
    ctaTarget: "/semaine-qvct-entreprise",
    relatedLandings: ["semaine-qvct-entreprise", "atelier-qvct-paris", "animation-bien-etre-entreprise"],
  },

  {
    slug: "plantes-bureau-bien-etre-collaborateurs",
    title: "Plantes au Bureau : Vraiment Utiles au Bien-être ?",
    metaDescription:
      "Plantes au bureau et bien-être collaborateurs : ce que dit la recherche, quelles plantes choisir, comment réussir l'intégration en open space.",
    keywords:
      "plantes bureau bien-etre, plantes open space, plantes entreprise bien-etre, vegetalisation bureau",
    h1: "Plantes au Bureau : Ce Que Dit Vraiment la Recherche",
    excerpt:
      "Productivité, stress, qualité de l'air. Les plantes au bureau sont-elles un gadget marketing ou un vrai levier de bien-être ? Tour d'horizon honnête de la littérature scientifique.",
    readingTime: "6 min",
    publishedAt: "2026-04-30",
    sections: [
      {
        heading: "Le mythe des plantes dépolluantes",
        paragraphs: [
          "L'étude NASA de 1989 sur la dépollution de l'air par les plantes est régulièrement citée hors contexte. Les chiffres réels sur un bureau classique sont marginaux : il faudrait des centaines de plantes par mètre carré pour mesurer un effet.",
          "En revanche, d'autres bénéfices sont solidement documentés.",
        ],
      },
      {
        heading: "Réduction du stress : bien documentée",
        paragraphs: [
          "Plusieurs études en environnements de bureau montrent une baisse mesurable du cortisol salivaire chez les personnes exposées quotidiennement à des plantes vertes, comparées à un groupe contrôle.",
        ],
      },
      {
        heading: "Concentration et productivité : effets modestes mais réels",
        paragraphs: [
          "Les méta-analyses récentes pointent un gain d'attention soutenue de l'ordre de 5 à 15 % en présence de végétaux, particulièrement marqué sur les tâches monotones.",
        ],
      },
      {
        heading: "Sentiment d'appartenance et marque employeur",
        paragraphs: [
          "Effet moins étudié mais souvent rapporté : un bureau végétalisé est perçu comme plus humain, et augmente la satisfaction déclarée à l'égard de l'environnement de travail.",
        ],
      },
      {
        heading: "Quelles plantes choisir ?",
        paragraphs: ["Robustes, peu exigeantes en lumière, peu d'arrosage. Pour un bureau classique :"],
        list: [
          "Sansevieria (langue de belle-mère) : indestructible.",
          "Pothos : tolère l'oubli, croissance rapide.",
          "ZZ plant : très résistante à la lumière faible.",
          "Cactées et succulentes : pour les bureaux ensoleillés.",
        ],
      },
      {
        heading: "Le piège : la plante orpheline",
        paragraphs: [
          "Une plante achetée et oubliée meurt en trois mois. L'effet bien-être devient alors négatif. Mieux vaut peu de plantes bien entretenues qu'une jungle abandonnée. Un atelier kokedama collectif peut servir de point de départ : chaque collaborateur s'occupe ensuite de sa création.",
        ],
      },
    ],
    ctaText: "Organisez un atelier de végétalisation au bureau",
    ctaTarget: "/animation-bien-etre-entreprise",
    relatedLandings: ["animation-bien-etre-entreprise", "atelier-qvct-paris"],
  },
];

export function findProArticle(slug: string): ProBlogConfig | undefined {
  return PRO_ARTICLES.find((a) => a.slug === slug);
}
