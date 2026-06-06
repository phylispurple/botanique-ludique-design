// Configuration de 13 landing pages B2B (QVCT, RSE, team building, séminaire,
// animation entreprise) + 15 landings saisonnières (fêtes, événements
// saisonniers). Toutes consommées par <ProLandingPage> via le slug URL.

import { SEASONAL_LANDINGS } from "./seasonalLandings";

export interface ProLandingConfig {
  slug: string;
  title: string; // SEO <title>
  metaDescription: string;
  keywords: string;
  h1: string;
  h1Highlight?: string; // mot mis en sage dans le H1
  tagline: string;
  intro: string;
  /** Sections de bénéfices (3 ou 4 max). */
  benefits: Array<{ title: string; description: string }>;
  /** Formats d'ateliers proposés sur cette page. */
  formats: Array<{ title: string; description: string; duration: string }>;
  /** Réponses FAQ (3 à 5). */
  faq: Array<{ question: string; answer: string }>;
  /** Citation client mise en avant. */
  testimonial: { text: string; author: string };
  /** Ville ou région ciblée. */
  city: string;
  ctaTitle: string;
  ctaText: string;
  /** Photo hero principale (import ES). Optionnel. */
  heroImage?: string;
  /** Mini galerie photos (imports ES). Optionnel. */
  gallery?: string[];
  /** Partenaires cités sous forme de pills textuelles. Optionnel. */
  partners?: string[];
  /** Liens internes vers ateliers liés. Optionnel. */
  relatedWorkshops?: Array<{ label: string; path: string }>;
}

const _BASE_PRO_LANDINGS: ProLandingConfig[] = [
  {
    slug: "atelier-qvct-paris",
    title: "Atelier QVCT à Paris pour Entreprises",
    metaDescription:
      "Atelier QVCT à Paris : ateliers nature et botanique pour vos collaborateurs. Bien-être au travail, cohésion, RSE. Devis gratuit Île-de-France.",
    keywords:
      "atelier qvct paris, animation qvct, semaine qvct entreprise, bien-être collaborateurs, atelier nature entreprise paris",
    h1: "Atelier QVCT à Paris",
    h1Highlight: "QVCT",
    tagline: "Qualité de vie au travail par la nature. Pour vos équipes parisiennes.",
    intro:
      "Vos collaborateurs ont besoin d'une vraie pause. Nos ateliers QVCT à Paris allient créativité manuelle, reconnexion au vivant et savoirs ethnobotaniques. Un format court, sensoriel, qui agit concrètement sur le stress et la cohésion d'équipe.",
    benefits: [
      {
        title: "Réduction du stress mesurable",
        description:
          "Le contact avec la matière végétale baisse le cortisol. Vos équipes repartent apaisées, créatives, avec un objet vivant à conserver sur leur bureau.",
      },
      {
        title: "Cohésion d'équipe naturelle",
        description:
          "Composer ensemble crée du lien sans les codes habituels du team building. Idéal pour des équipes mixtes ou en télétravail partiel.",
      },
      {
        title: "Démarche RSE concrète",
        description:
          "Matériaux locaux, biodégradables, savoirs traditionnels mis en valeur. Vos collaborateurs vivent votre engagement plutôt que de l'écouter.",
      },
    ],
    formats: [
      {
        title: "Atelier Kokedama",
        description: "Sphère de mousse japonaise, plante vivante à rapporter au bureau.",
        duration: "1h30",
      },
      {
        title: "Terrarium d'équipe",
        description: "Écosystème miniature collaboratif, métaphore concrète du travail collectif.",
        duration: "2h",
      },
      {
        title: "Teinture végétale",
        description: "Tote bag ou foulard teint avec des plantes tinctoriales locales.",
        duration: "2h30",
      },
      {
        title: "Bombes de graines urbaines",
        description: "Action de végétalisation collective, format court pour grands groupes.",
        duration: "1h",
      },
    ],
    faq: [
      {
        question: "Combien coûte un atelier QVCT pour une entreprise à Paris ?",
        answer:
          "Le tarif dépend du format, du nombre de participants et du lieu. Un atelier kokedama pour 15 personnes commence à 600 EUR HT, matériel inclus. Devis gratuit sous 48h.",
      },
      {
        question: "Pouvez-vous intervenir dans nos locaux à Paris ?",
        answer:
          "Oui, nous intervenons dans tous les arrondissements de Paris, dans vos espaces ou en extérieur. Nous apportons tout le matériel et installons en 30 minutes.",
      },
      {
        question: "Quelle taille de groupe est possible ?",
        answer:
          "De 6 à 50 personnes selon le format. Au-delà, nous proposons des dispositifs en rotation (plusieurs ateliers en parallèle).",
      },
      {
        question: "L'atelier compte-t-il pour la Semaine QVCT ?",
        answer:
          "Oui, nos formats sont conçus pour s'intégrer à la Semaine pour la Qualité de Vie et les Conditions de Travail. Programme sur-mesure possible.",
      },
    ],
    testimonial: {
      text: "L'atelier kokedama a été le moment le plus marquant de notre semaine QVCT. L'équipe en parle encore deux mois après.",
      author: "Responsable RSE, entreprise de services Paris 9e",
    },
    city: "Paris",
    ctaTitle: "Préparez votre prochain événement QVCT",
    ctaText: "Devis gratuit sous 48h, programme sur-mesure pour vos équipes parisiennes.",
  },

  {
    slug: "atelier-qvct-ile-de-france",
    title: "Atelier QVCT en Île-de-France",
    metaDescription:
      "Atelier QVCT pour entreprises en Île-de-France : Paris, 78, 92, 95. Nature, bien-être, cohésion. Programme sur-mesure, devis gratuit.",
    keywords:
      "atelier qvct ile-de-france, qvct entreprise idf, animation qvct paris idf, bien-être collaborateurs idf",
    h1: "Atelier QVCT en Île-de-France",
    h1Highlight: "QVCT",
    tagline: "Vos équipes méritent une pause vivante, partout en IDF.",
    intro:
      "Nous intervenons dans toute l'Île-de-France, de Cergy à Rambouillet en passant par Boulogne. Nos ateliers QVCT mêlent gestes manuels, savoirs botaniques et reconnexion au vivant pour un impact réel sur le bien-être au travail.",
    benefits: [
      {
        title: "Couverture régionale complète",
        description: "Paris, Yvelines, Hauts-de-Seine, Val-d'Oise, Essonne, Seine-et-Marne. Un seul interlocuteur.",
      },
      {
        title: "Format adapté à votre site",
        description: "Atelier en intérieur, jardin d'entreprise, terrasse ou parc voisin. Nous nous adaptons.",
      },
      {
        title: "Impact RSE documenté",
        description: "Bilan participants, photos, indicateurs bien-être. De quoi nourrir votre rapport extra-financier.",
      },
    ],
    formats: [
      { title: "Kokedama", description: "Format court, fort impact visuel.", duration: "1h30" },
      { title: "Terrarium", description: "Création individuelle, plante vivante à rapporter.", duration: "2h" },
      { title: "Teinture végétale", description: "Création textile durable.", duration: "2h30" },
      { title: "Herbier collaboratif", description: "Pour grandes équipes en extérieur.", duration: "2h" },
    ],
    faq: [
      {
        question: "Intervenez-vous dans toute l'IDF ?",
        answer: "Oui, tous les départements franciliens. Frais de déplacement inclus en Petite Couronne, forfait léger au-delà.",
      },
      {
        question: "Combien de temps à l'avance faut-il réserver ?",
        answer: "Idéalement 3 à 6 semaines. Nous gérons aussi les demandes urgentes selon disponibilités.",
      },
      {
        question: "Acceptez-vous les demandes ponctuelles ou seulement les contrats annuels ?",
        answer: "Les deux. Beaucoup d'entreprises nous sollicitent une à deux fois par an, d'autres ont un partenariat continu.",
      },
    ],
    testimonial: {
      text: "Très professionnels, équipe à l'écoute. La préparation logistique pour notre site de Cergy a été impeccable.",
      author: "DRH, entreprise tech Val-d'Oise",
    },
    city: "Île-de-France",
    ctaTitle: "Un atelier QVCT en Île-de-France ?",
    ctaText: "Parlez-nous de votre projet. Réponse rapide, devis détaillé.",
  },

  {
    slug: "semaine-qvct-entreprise",
    title: "Semaine QVCT en Entreprise : Programme Nature",
    metaDescription:
      "Semaine QVCT en entreprise : programme d'ateliers nature, bien-être, cohésion. Formats courts, grands groupes, devis gratuit IDF.",
    keywords:
      "semaine qvct, semaine qvct entreprise, programme qvct, animation semaine qvct, qvct juin",
    h1: "Programme pour la Semaine QVCT",
    h1Highlight: "QVCT",
    tagline: "Une semaine vivante pour vos collaborateurs, clé en main.",
    intro:
      "Chaque année en juin, la Semaine QVCT mobilise les entreprises autour du bien-être au travail. Nous construisons avec vous un programme cohérent sur 3 à 5 jours, mixant ateliers manuels, balades urbaines et conférences ethnobotaniques.",
    benefits: [
      {
        title: "Programme clé en main",
        description: "Nous orchestrons toute la semaine : créneaux, salles, matériel, animateurs. Vous n'avez qu'à communiquer en interne.",
      },
      {
        title: "Adapté à tous les sites",
        description: "Formats parallèles pour multi-sites ou siège unique. Visioconférences possibles pour télétravailleurs.",
      },
      {
        title: "Indicateurs et bilan",
        description: "Questionnaire post-événement et restitution chiffrée pour votre direction et votre CSE.",
      },
    ],
    formats: [
      { title: "Pause kokedama", description: "30 min, en open space, tournante.", duration: "30 min" },
      { title: "Atelier déjeuner botanique", description: "1h, format pause méridienne.", duration: "1h" },
      { title: "Conférence ethnobotanique", description: "45 min, format keynote.", duration: "45 min" },
      { title: "Balade urbaine botanique", description: "Découverte des plantes du quartier.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Quand a lieu la Semaine QVCT 2026 ?",
        answer: "La Semaine pour la Qualité de Vie et les Conditions de Travail se tient chaque année en juin. Réservez votre programme dès le premier trimestre.",
      },
      {
        question: "Pouvez-vous prendre en charge plusieurs sites en parallèle ?",
        answer: "Oui, nous coordonnons plusieurs animateurs sur des sites différents pour assurer la cohérence du programme.",
      },
      {
        question: "Quels formats marchent le mieux pour la Semaine QVCT ?",
        answer: "Les pauses courtes (30 min à 1h) tournantes en open space ont un excellent taux de participation. Les ateliers longs fonctionnent mieux en after-work.",
      },
    ],
    testimonial: {
      text: "Programme parfaitement orchestré sur 4 jours, 3 sites. 280 collaborateurs touchés, 92% de satisfaction.",
      author: "Référente QVCT, groupe de communication",
    },
    city: "Île-de-France",
    ctaTitle: "Construisons votre Semaine QVCT",
    ctaText: "Brief gratuit, proposition sur-mesure sous 5 jours.",
  },

  {
    slug: "animation-rse-entreprise",
    title: "Animation RSE Entreprise : Ateliers Nature",
    metaDescription:
      "Animation RSE pour entreprises : ateliers éco-responsables, sensibilisation biodiversité, ethnobotanique. Programme sur-mesure IDF.",
    keywords:
      "animation rse, atelier rse entreprise, sensibilisation rse, animation développement durable, atelier eco-responsable entreprise",
    h1: "Animation RSE pour Entreprises",
    h1Highlight: "RSE",
    tagline: "Faites vivre votre engagement plutôt que de le présenter en slides.",
    intro:
      "Vos engagements RSE méritent mieux qu'un rapport annuel. Nos animations transforment vos enjeux développement durable en expériences sensibles : biodiversité urbaine, plantes oubliées, économie de la matière végétale, savoirs traditionnels.",
    benefits: [
      {
        title: "Sensibilisation incarnée",
        description: "Toucher, voir, créer. Vos collaborateurs comprennent les enjeux RSE en les vivant, pas en les écoutant.",
      },
      {
        title: "Aligné avec vos engagements",
        description: "Nous adaptons le propos à votre stratégie RSE : biodiversité, économie circulaire, savoirs locaux.",
      },
      {
        title: "Communication post-événement",
        description: "Photos pro, citations, bilan chiffré. Matière prête à intégrer dans votre rapport extra-financier.",
      },
    ],
    formats: [
      { title: "Conférence-atelier biodiversité", description: "1h théorie + 1h pratique.", duration: "2h" },
      { title: "Bombes de graines", description: "Action collective de végétalisation.", duration: "1h" },
      { title: "Teinture végétale", description: "Économie circulaire textile.", duration: "2h30" },
      { title: "Herbier d'entreprise", description: "Documentation participative du vivant local.", duration: "2h" },
    ],
    faq: [
      {
        question: "Comment vos ateliers s'intègrent à notre stratégie RSE ?",
        answer: "Nous lisons votre rapport extra-financier en amont et adaptons le propos à vos axes prioritaires (biodiversité, économie circulaire, inclusion).",
      },
      {
        question: "Avez-vous des références clients RSE ?",
        answer: "Oui, nous travaillons avec des collectivités (Bezons, Maurepas), des MJC, et plusieurs entreprises de l'IDF.",
      },
      {
        question: "Pouvez-vous fournir un kit communication post-événement ?",
        answer: "Inclus systématiquement : photos haute définition, retours participants anonymisés, chiffres clés.",
      },
    ],
    testimonial: {
      text: "Une approche scientifique et sensible à la fois. Nos collaborateurs ont vraiment compris ce que biodiversité voulait dire.",
      author: "Directrice RSE, ETI industrielle",
    },
    city: "Île-de-France",
    ctaTitle: "Donnez du sens à votre RSE",
    ctaText: "Parlez-nous de votre stratégie. Nous concevons un format adapté.",
  },

  {
    slug: "team-building-nature-paris",
    title: "Team Building Nature à Paris",
    metaDescription:
      "Team building nature à Paris : ateliers botaniques, créatifs, ecological. Cohésion d'équipe par la nature. Devis gratuit.",
    keywords:
      "team building nature paris, team building ecologique, team building botanique, team building original paris",
    h1: "Team Building Nature à Paris",
    h1Highlight: "Nature",
    tagline: "Sortez du escape game. Plantez du vivant.",
    intro:
      "Le team building le plus mémorable n'est pas celui où vos équipes courent dans un parc. C'est celui où elles repartent avec un objet vivant, une histoire, et le souvenir d'avoir fabriqué quelque chose ensemble. Nos formats sont créatifs, sensoriels, et vraiment originaux.",
    benefits: [
      {
        title: "Original et mémorable",
        description: "Vos équipes en parlent encore des mois après. Le contraire d'un team building générique.",
      },
      {
        title: "Inclusif",
        description: "Pas de compétition, pas de performance. Tout le monde participe au même niveau, quel que soit l'âge ou la condition physique.",
      },
      {
        title: "Objet à rapporter",
        description: "Plante, terrarium, foulard teint. Le team building continue de vivre au bureau ou à la maison.",
      },
    ],
    formats: [
      { title: "Kokedama d'équipe", description: "Composition collective puis individuelle.", duration: "2h" },
      { title: "Terrarium collaboratif", description: "Construction à plusieurs mains.", duration: "2h30" },
      { title: "Teinture végétale en équipe", description: "Création textile partagée.", duration: "3h" },
      { title: "Bombes de graines", description: "Format flash pour grands groupes.", duration: "1h" },
    ],
    faq: [
      {
        question: "Pour combien de personnes ?",
        answer: "De 6 à 60 selon le format. Au-delà, nous proposons des rotations parallèles.",
      },
      {
        question: "Faut-il être manuel pour participer ?",
        answer: "Non, tous nos formats sont accessibles aux débutants. Nous accompagnons geste par geste.",
      },
      {
        question: "Quel budget prévoir ?",
        answer: "Comptez 40 à 80 EUR HT par participant selon le format et le nombre. Matériel inclus.",
      },
    ],
    testimonial: {
      text: "Bien plus qu'un team building. Une vraie respiration collective. Toute l'équipe a adoré.",
      author: "COO, startup tech Paris 11e",
    },
    city: "Paris",
    ctaTitle: "Un team building dont on se souvient",
    ctaText: "Devis gratuit, programme adapté à votre culture d'équipe.",
  },

  {
    slug: "team-building-ecologique-ile-de-france",
    title: "Team Building Écologique en Île-de-France",
    metaDescription:
      "Team building écologique en Île-de-France : ateliers nature, RSE, faible empreinte. Pour entreprises engagées. Devis gratuit.",
    keywords:
      "team building ecologique, team building rse, team building nature idf, team building durable, team building responsable",
    h1: "Team Building Écologique en IDF",
    h1Highlight: "Écologique",
    tagline: "Un team building cohérent avec vos valeurs.",
    intro:
      "Pas de plastique, pas de gadgets, pas de bilan carbone embarrassant. Nos team buildings écologiques utilisent des matériaux locaux et biodégradables, et sensibilisent vos équipes au vivant qui les entoure, partout en Île-de-France.",
    benefits: [
      {
        title: "Faible empreinte",
        description: "Matériaux locaux, déplacements optimisés, zéro déchet plastique. Bilan carbone fourni sur demande.",
      },
      {
        title: "Pédagogique",
        description: "Au-delà de l'activité, vos équipes repartent avec des savoirs concrets sur le vivant urbain.",
      },
      {
        title: "Adapté multi-sites",
        description: "Nous orchestrons votre événement sur plusieurs sites IDF en simultané si besoin.",
      },
    ],
    formats: [
      { title: "Atelier zéro déchet végétal", description: "Cuisine de bocaux, infusions, savoirs paysans.", duration: "2h" },
      { title: "Herbier urbain d'équipe", description: "Sortie + atelier de mise en page.", duration: "3h" },
      { title: "Kokedama low-tech", description: "Mousse, terre, ficelle. Rien d'autre.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Quel est votre bilan carbone par atelier ?",
        answer: "Estimation moyenne : 4 à 8 kg CO2e par participant, déplacements inclus. Nous fournissons une note méthodologique sur demande.",
      },
      {
        question: "Utilisez-vous des fleurs ou plantes importées ?",
        answer: "Non. Nous travaillons exclusivement avec des espèces locales ou françaises, et privilégions les producteurs IDF.",
      },
    ],
    testimonial: {
      text: "Cohérent du début à la fin. Pas de greenwashing, du concret. Nos équipes l'ont senti.",
      author: "Responsable RSE, agence de design éthique",
    },
    city: "Île-de-France",
    ctaTitle: "Un team building vraiment vert",
    ctaText: "Parlez-nous de vos engagements, nous construisons sur-mesure.",
  },

  {
    slug: "seminaire-vert-paris",
    title: "Séminaire Vert à Paris : Animations Nature",
    metaDescription:
      "Séminaire vert à Paris : animations nature, ateliers RSE, conférences ethnobotaniques. Pour entreprises engagées. Devis gratuit.",
    keywords:
      "seminaire vert paris, seminaire ecologique, seminaire nature paris, seminaire rse paris",
    h1: "Séminaire Vert à Paris",
    h1Highlight: "Vert",
    tagline: "Faites de votre séminaire une expérience cohérente.",
    intro:
      "Un séminaire vert n'est pas qu'un buffet bio. C'est un programme structuré qui aligne contenu, expériences et messages. Nous construisons les temps d'animation, les pauses créatives et les keynotes ethnobotaniques de votre séminaire parisien.",
    benefits: [
      {
        title: "Programmes mixtes",
        description: "Conférences, ateliers, balades. Nous orchestrons les transitions et le rythme.",
      },
      {
        title: "Cohérence narrative",
        description: "Tout votre séminaire peut s'articuler autour d'un fil rouge ethnobotanique pertinent pour votre métier.",
      },
      {
        title: "Adapté à Paris",
        description: "Nous connaissons les lieux séminaires verts parisiens et leurs contraintes logistiques.",
      },
    ],
    formats: [
      { title: "Conférence ouverture", description: "Keynote ethnobotanique 45 min.", duration: "45 min" },
      { title: "Pause atelier", description: "Format court entre deux plénières.", duration: "30 min" },
      { title: "Animation soirée", description: "Atelier collectif post-dîner.", duration: "2h" },
      { title: "Balade urbaine", description: "Découverte botanique du quartier.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Pouvez-vous intervenir sur un séminaire entier ?",
        answer: "Oui, nous concevons des programmes sur 1 à 3 jours, en lien avec votre prestataire séminaire ou en autonomie.",
      },
      {
        question: "Travaillez-vous avec des lieux séminaires partenaires ?",
        answer: "Oui, nous avons des liens avec plusieurs lieux verts à Paris (rooftops, jardins partagés, espaces atypiques).",
      },
    ],
    testimonial: {
      text: "Le fil rouge ethnobotanique a donné une identité unique à notre séminaire annuel. Très apprécié des équipes.",
      author: "Directrice communication interne, groupe immobilier",
    },
    city: "Paris",
    ctaTitle: "Donnez du sens à votre séminaire",
    ctaText: "Brief gratuit, programme structuré sous 7 jours.",
  },

  {
    slug: "seminaire-nature-ile-de-france",
    title: "Séminaire Nature en Île-de-France",
    metaDescription:
      "Séminaire nature en Île-de-France : animations botaniques, ateliers RSE, lieux verts. Programme sur-mesure pour entreprises.",
    keywords:
      "seminaire nature idf, seminaire nature ile-de-france, seminaire vert idf, seminaire entreprise nature",
    h1: "Séminaire Nature en IDF",
    h1Highlight: "Nature",
    tagline: "Toute l'Île-de-France a des lieux séminaires d'exception, nous y intervenons.",
    intro:
      "Châteaux des Yvelines, gîtes du Vexin, fermes pédagogiques de Seine-et-Marne. Nous nous déplaçons pour animer vos séminaires nature partout en IDF, avec un programme adapté au lieu et à vos objectifs.",
    benefits: [
      {
        title: "Connaissance des lieux",
        description: "Nous connaissons les lieux séminaires verts d'IDF et leurs spécificités logistiques.",
      },
      {
        title: "Programme adaptable",
        description: "Une demi-journée, une journée, un week-end. Nous calibrons selon vos contraintes.",
      },
      {
        title: "Matériel mobile",
        description: "Tout notre matériel voyage. Aucune contrainte sur le lieu choisi.",
      },
    ],
    formats: [
      { title: "Journée nature complète", description: "Conférences + 2 ateliers + balade.", duration: "1 journée" },
      { title: "Demi-journée intensive", description: "1 conférence + 1 atelier.", duration: "4h" },
      { title: "Soirée de clôture", description: "Animation post-dîner.", duration: "2h" },
    ],
    faq: [
      {
        question: "Vous déplacez-vous au-delà de la petite couronne ?",
        answer: "Oui, jusqu'aux confins de l'IDF. Forfait déplacement transparent dans le devis.",
      },
      {
        question: "Pouvez-vous suggérer des lieux séminaires verts ?",
        answer: "Oui, nous orientons volontiers vers des lieux que nous connaissons en IDF, sans commission.",
      },
    ],
    testimonial: {
      text: "Notre séminaire annuel en Vallée de Chevreuse a pris une autre dimension grâce à leur intervention.",
      author: "Co-fondateur, scale-up SaaS Yvelines",
    },
    city: "Île-de-France",
    ctaTitle: "Préparons votre séminaire nature",
    ctaText: "Lieu identifié ou à choisir, nous nous adaptons.",
  },

  {
    slug: "animation-bien-etre-entreprise",
    title: "Animation Bien-être en Entreprise",
    metaDescription:
      "Animation bien-être en entreprise : ateliers nature, pauses créatives, sensoriel. Pour QVCT et CSE. Devis gratuit IDF.",
    keywords:
      "animation bien-etre entreprise, animation bien-etre travail, atelier bien-etre cse, pause bien-etre entreprise",
    h1: "Animation Bien-être en Entreprise",
    h1Highlight: "Bien-être",
    tagline: "Des pauses qui font vraiment du bien.",
    intro:
      "Massage, yoga, méditation. Et puis ? Nos animations bien-être nature offrent une alternative sensorielle et créative aux formats classiques. Vos équipes manipulent du vivant, créent un objet, repartent apaisées.",
    benefits: [
      {
        title: "Alternative au classique",
        description: "Vous avez déjà fait le yoga et le massage. Proposez une expérience qui marque.",
      },
      {
        title: "Effet durable",
        description: "L'objet créé reste sur le bureau et entretient le souvenir, contrairement à une séance ponctuelle.",
      },
      {
        title: "Format flexible",
        description: "De 30 min à 2h, selon vos créneaux et l'envie des équipes.",
      },
    ],
    formats: [
      { title: "Pause kokedama", description: "30 min, format flash.", duration: "30 min" },
      { title: "Atelier sensoriel plantes", description: "Toucher, sentir, créer.", duration: "1h" },
      { title: "Composition aromatique", description: "Mélange de tisanes personnalisé.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Peut-on faire venir l'atelier dans nos locaux ?",
        answer: "Oui, c'est notre format principal. Salle classique, open space, terrasse, peu importe.",
      },
      {
        question: "Le matériel est-il fourni ?",
        answer: "Intégralement. Vos équipes n'ont rien à apporter.",
      },
    ],
    testimonial: {
      text: "Un vrai succès auprès de nos équipes. Format simple à mettre en place, impact immédiat.",
      author: "Office manager, agence digitale",
    },
    city: "Île-de-France",
    ctaTitle: "Offrez une pause vraiment ressourçante",
    ctaText: "Devis gratuit, créneaux flexibles selon votre planning.",
  },

  {
    slug: "atelier-cohesion-equipe-nature",
    title: "Atelier Cohésion d'Équipe par la Nature",
    metaDescription:
      "Atelier cohésion d'équipe par la nature : créations collectives, kokedama, terrarium. Pour entreprises IDF. Devis gratuit.",
    keywords:
      "atelier cohesion equipe, cohesion equipe nature, atelier cohesion entreprise, renforcer cohesion equipe",
    h1: "Atelier Cohésion d'Équipe par la Nature",
    h1Highlight: "Cohésion",
    tagline: "Le végétal réunit là où les mots fatiguent.",
    intro:
      "Quand vos équipes ne se parlent plus ou se parlent mal, il faut changer le contexte. Nos ateliers de cohésion par la nature créent un cadre neutre, sensoriel et collaboratif où les vrais échanges réapparaissent.",
    benefits: [
      {
        title: "Cadre neutre",
        description: "Sortir des bureaux, des hiérarchies. Tout le monde au même niveau face à la matière.",
      },
      {
        title: "Collaboration concrète",
        description: "Créer ensemble un objet vivant produit du lien plus profond qu'un brainstorming.",
      },
      {
        title: "Trace durable",
        description: "L'objet créé reste, signe visible de ce que l'équipe a fait ensemble.",
      },
    ],
    formats: [
      { title: "Création collective", description: "Une grande œuvre végétale partagée.", duration: "2h30" },
      { title: "Binômes tournants", description: "Composition à deux, puis rotation.", duration: "2h" },
      { title: "Atelier après-conflit", description: "Format adapté à la médiation d'équipe.", duration: "3h" },
    ],
    faq: [
      {
        question: "Adapté aux équipes en tension ?",
        answer: "Oui, nous avons un format spécifique post-conflit, conçu avec un médiateur. Discutons-en en amont.",
      },
      {
        question: "Pour quelle taille d'équipe ?",
        answer: "Idéal entre 8 et 25. Au-delà, nous découpons en sous-groupes.",
      },
    ],
    testimonial: {
      text: "Nous étions sceptiques. La séance a vraiment débloqué des choses dans l'équipe.",
      author: "Manager, équipe projet en restructuration",
    },
    city: "Île-de-France",
    ctaTitle: "Reconnectez votre équipe",
    ctaText: "Brief confidentiel, format adapté à votre situation.",
  },

  {
    slug: "animation-evenement-entreprise-nature",
    title: "Animation Événement Entreprise Nature",
    metaDescription:
      "Animation événement entreprise sur thème nature : lancement produit, soirée client, anniversaire d'entreprise. IDF, devis gratuit.",
    keywords:
      "animation evenement entreprise, animation evenement nature, animation soiree entreprise, animation lancement produit nature",
    h1: "Animation Événement Entreprise sur Thème Nature",
    h1Highlight: "Événement",
    tagline: "Marquez vos invités avec une expérience qu'ils n'attendent pas.",
    intro:
      "Lancement produit, soirée client, anniversaire d'entreprise. Une animation botanique transforme un événement classique en moment marquant. Vos invités créent, repartent avec un objet, et associent votre marque à une expérience sensible.",
    benefits: [
      {
        title: "Différenciant",
        description: "Vos invités n'ont jamais vu ça à un événement client. Effet mémoire garanti.",
      },
      {
        title: "Format flexible",
        description: "Stand atelier en continu, démonstration, animation centrale. Nous nous adaptons à votre format.",
      },
      {
        title: "Brandable",
        description: "Création co-brandée possible : votre logo gravé, vos couleurs intégrées, votre histoire racontée.",
      },
    ],
    formats: [
      { title: "Stand atelier continu", description: "Vos invités passent, créent, repartent.", duration: "3 à 6h" },
      { title: "Atelier central groupe", description: "Tout le monde participe en même temps.", duration: "1h30" },
      { title: "Démonstration spectaculaire", description: "Format show, par notre animatrice.", duration: "30 min" },
    ],
    faq: [
      {
        question: "Peut-on personnaliser l'atelier aux couleurs de notre marque ?",
        answer: "Oui, choix des plantes, des contenants, des étiquettes. Co-branding possible.",
      },
      {
        question: "Combien d'invités pouvez-vous absorber sur un stand atelier ?",
        answer: "Environ 30 personnes par heure et par animatrice. Nous calibrons en fonction.",
      },
    ],
    testimonial: {
      text: "Notre stand a été le plus visité du salon. Les invités sont repartis avec leur création et notre carte.",
      author: "Directrice marketing, marque cosmétique",
    },
    city: "Île-de-France",
    ctaTitle: "Animons votre prochain événement",
    ctaText: "Parlez-nous de votre événement. Format sur-mesure proposé.",
  },

  {
    slug: "atelier-developpement-durable-entreprise",
    title: "Atelier Développement Durable en Entreprise",
    metaDescription:
      "Atelier développement durable en entreprise : sensibilisation biodiversité, économie circulaire, savoirs végétaux. IDF.",
    keywords:
      "atelier developpement durable entreprise, sensibilisation developpement durable, atelier biodiversite entreprise, atelier ecologie entreprise",
    h1: "Atelier Développement Durable en Entreprise",
    h1Highlight: "Développement Durable",
    tagline: "Sensibiliser sans culpabiliser. Inspirer sans donner de leçons.",
    intro:
      "Vos collaborateurs ont entendu mille fois les chiffres du GIEC. Nos ateliers développement durable changent d'angle : ils partent de la matière, des plantes, des savoirs, et reconstruisent une compréhension sensible des enjeux environnementaux.",
    benefits: [
      {
        title: "Pédagogie incarnée",
        description: "On touche, on sent, on crée. La compréhension passe par le corps, pas par les slides.",
      },
      {
        title: "Sans culpabilisation",
        description: "Notre posture est anthropologique et joyeuse. Pas de récit catastrophiste qui démobilise.",
      },
      {
        title: "Action concrète",
        description: "Chaque atelier débouche sur un geste ou un objet utile, pas seulement une prise de conscience.",
      },
    ],
    formats: [
      { title: "Atelier biodiversité urbaine", description: "Cartographie + bombes de graines.", duration: "2h" },
      { title: "Économie circulaire textile", description: "Teinture sur vêtements existants.", duration: "2h30" },
      { title: "Savoirs paysans", description: "Conférence-atelier sur les plantes alimentaires oubliées.", duration: "2h" },
    ],
    faq: [
      {
        question: "Sur quelles thématiques exactement ?",
        answer: "Biodiversité, économie circulaire, savoirs traditionnels, plantes alimentaires, plantes médicinales. Nous adaptons à votre secteur.",
      },
      {
        question: "Avez-vous des sources scientifiques pour vos contenus ?",
        answer: "Oui, notre fondatrice est anthropologue (EHESS). Bibliographies fournies sur demande.",
      },
    ],
    testimonial: {
      text: "Une approche enfin sortie du registre culpabilisant. Très bien accueillie en interne.",
      author: "Chargée de mission RSE, mutuelle",
    },
    city: "Île-de-France",
    ctaTitle: "Sensibilisez autrement",
    ctaText: "Brief gratuit, format adapté à vos enjeux sectoriels.",
  },

  {
    slug: "animation-soiree-entreprise-vegetale",
    title: "Animation Soirée Entreprise Végétale",
    metaDescription:
      "Animation soirée entreprise végétale : atelier botanique post-dîner, expérience sensorielle. Pour after-work, soirée annuelle.",
    keywords:
      "animation soiree entreprise, animation after work, animation soiree annuelle entreprise, atelier soiree entreprise nature",
    h1: "Animation Soirée Entreprise Végétale",
    h1Highlight: "Soirée",
    tagline: "Une vraie alternative au DJ et au photobooth.",
    intro:
      "Soirée annuelle, after-work d'équipe, fête de fin d'année. Nos animations végétales transforment ces moments en expériences créatives qui sortent vraiment du lot. Tout le monde participe, personne ne reste sur le côté.",
    benefits: [
      {
        title: "Inclusif",
        description: "Pas besoin de boire ou de danser. Tout le monde peut participer dans son style.",
      },
      {
        title: "Atmosphère unique",
        description: "Lumière douce, plantes partout, geste manuel. Une parenthèse sensorielle dans l'événement.",
      },
      {
        title: "Souvenir tangible",
        description: "Chaque invité repart avec sa création, pas juste un mal de tête.",
      },
    ],
    formats: [
      { title: "Atelier post-dîner", description: "Après le repas, avant la suite.", duration: "1h30" },
      { title: "Stand cocktail", description: "En parallèle du networking.", duration: "2 à 3h" },
      { title: "Animation flash", description: "Format 30 min entre deux temps forts.", duration: "30 min" },
    ],
    faq: [
      {
        question: "Pouvez-vous intervenir en soirée tard ?",
        answer: "Oui, jusqu'à 23h sans surcoût. Au-delà, devis spécifique.",
      },
      {
        question: "Le matériel se met en place rapidement ?",
        answer: "Installation en 30 à 45 min, démontage en 30 min. Nous gérons tout.",
      },
    ],
    testimonial: {
      text: "Nos invités ont adoré pouvoir faire autre chose que boire un verre. Très original.",
      author: "Directrice événementiel, cabinet de conseil",
    },
    city: "Île-de-France",
    ctaTitle: "Une soirée vraiment différente",
    ctaText: "Brief gratuit, format adapté à votre événement.",
  },
];

export const PRO_LANDINGS: ProLandingConfig[] = [
  ..._BASE_PRO_LANDINGS,
  ...SEASONAL_LANDINGS,
];

export function findProLanding(slug: string): ProLandingConfig | undefined {
  return PRO_LANDINGS.find((p) => p.slug === slug);
}
