// 15 landings saisonnières et événementielles. Servent de pages d'atterrissage
// SEO sur des requêtes type "atelier fête des mères entreprise", "atelier
// Noël entreprise Paris", "atelier Saint-Valentin couple", "événement
// printemps", etc. Chaque page a un contenu éditorial unique, une mini
// galerie photos issue de la galerie existante, la mention des partenaires
// déjà accompagnés et des liens internes vers les ateliers correspondants.

import type { ProLandingConfig } from "./proLandings";
import type { LandingContext } from "./proLandingsContext";

import heroFleurCrown from "@/assets/gallery-flower-crown.jpg";
import heroBougieFleurs from "@/assets/gallery-bougie-fleurs-sechees.jpg";
import heroAutumn from "@/assets/gallery-autumn-leaves.jpg";
import heroKokedamaGarden from "@/assets/gallery-kokedama-garden.jpg";
import heroTerrarium from "@/assets/gallery-terrarium.jpg";
import heroAtelierAdulte from "@/assets/gallery-atelier-adulte.jpg";
import heroWorkshopTable from "@/assets/gallery-workshop-table.jpg";
import heroTeinture1 from "@/assets/gallery-teinture-1.jpg";
import heroForestWalk from "@/assets/gallery-forest-walk.jpg";
import heroSeedBombs from "@/assets/gallery-seed-bombs.jpg";
import heroSachet from "@/assets/gallery-sachet-senteur.jpg";
import heroFresque from "@/assets/gallery-fresque-vegetale.jpg";
import heroSucculents from "@/assets/gallery-succulents.jpg";
import heroBasketry from "@/assets/gallery-basketry.jpg";
import heroKokedamaTrad from "@/assets/gallery-kokedama-tradescantia.jpg";
import heroFittonia from "@/assets/gallery-fittonia-pots.jpg";

// Partenaires régulièrement cités (collectivités + lieux ressource).
const PARTNERS = [
  "Ville de Bezons",
  "Ville de Maurepas",
  "École Du Breuil",
  "MJC partenaires IDF",
  "Aurore (insertion sociale)",
];

export const SEASONAL_LANDINGS: ProLandingConfig[] = [
  // ───────── 1. Fête des mères entreprise
  {
    slug: "atelier-fete-des-meres-entreprise",
    title: "Atelier Fête des Mères pour Entreprise (Paris & IDF)",
    metaDescription:
      "Atelier fête des mères en entreprise : couronne de fleurs séchées, bougie florale, kokedama. Cadeau collaboratrices, événement RH, Paris IDF.",
    keywords:
      "atelier fete des meres entreprise, animation fete des meres bureau, cadeau fete des meres collaboratrices, atelier floral entreprise mai",
    h1: "Atelier Fête des Mères en Entreprise",
    h1Highlight: "Fête des Mères",
    tagline: "Un geste sincère pour vos collaboratrices, à fabriquer ensemble.",
    intro:
      "Chaque année fin mai, les services RH cherchent un geste qui sorte du chèque cadeau impersonnel. Notre atelier fête des mères en entreprise propose un moment vécu : 1h30 pour fabriquer une couronne de fleurs séchées, une bougie florale ou un kokedama à offrir, en équipe, sur le temps du midi. Le cadeau prend une autre dimension parce qu'il a été fait, pas acheté.",
    benefits: [
      {
        title: "Un cadeau qui se fabrique, pas qui se reçoit",
        description:
          "Vos collaboratrices repartent avec un objet qu'elles ont créé. La valeur perçue n'a rien à voir avec un bon d'achat de 30 EUR.",
      },
      {
        title: "Format midi compatible",
        description:
          "1h à 1h30 sur la pause déjeuner. Aucun impact sur la journée, fort impact sur le moral d'équipe.",
      },
      {
        title: "Mixte volontairement",
        description:
          "Pères, collègues, équipes mixtes : tout le monde participe pour fabriquer un cadeau qu'il offrira ensuite. On évite la mise à part.",
      },
    ],
    formats: [
      { title: "Couronne de fleurs séchées", description: "Composition durable à accrocher, fleurs françaises.", duration: "1h30" },
      { title: "Bougie florale", description: "Cire végétale, fleurs séchées coulées dedans.", duration: "1h" },
      { title: "Mini kokedama", description: "Sphère de mousse, plante d'intérieur à offrir.", duration: "1h30" },
      { title: "Sachet de senteur brodé", description: "Lavande, rose, mélange aromatique.", duration: "1h" },
    ],
    faq: [
      {
        question: "Quand réserver pour la fête des mères ?",
        answer: "Idéalement avant fin mars. Mai est notre mois le plus chargé : nous limitons à 4 ateliers entreprise par semaine pour garder la qualité.",
      },
      {
        question: "Combien coûte un atelier fête des mères pour 20 personnes ?",
        answer: "À partir de 800 EUR HT pour 20 participants, matériel inclus, animatrice et installation comprises. Devis détaillé sous 48h.",
      },
      {
        question: "Les hommes participent aussi ?",
        answer: "Oui, c'est même recommandé. Beaucoup d'entreprises commandent l'atelier pour que les pères fabriquent un cadeau à offrir à la maison.",
      },
    ],
    testimonial: {
      text: "Format trouvé au dernier moment, équipe ravie. Les couronnes ont fait le tour des bureaux pendant deux semaines.",
      author: "Office Manager, agence de communication Paris 10e",
    },
    city: "Paris",
    ctaTitle: "Préparez votre fête des mères 2026",
    ctaText: "Devis gratuit sous 48h, format adapté à vos locaux et à votre budget.",
    heroImage: heroFleurCrown,
    gallery: [heroBougieFleurs, heroSachet, heroAtelierAdulte],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier floral à Paris", path: "/atelier-floral-paris" },
      { label: "Notre offre Pro complète", path: "/pro" },
    ],
  },

  // ───────── 2. Fête des pères entreprise
  {
    slug: "atelier-fete-des-peres-entreprise",
    title: "Atelier Fête des Pères en Entreprise (Juin, Paris IDF)",
    metaDescription:
      "Atelier fête des pères en entreprise : kokedama, sachet aromatique, bougie. Animation juin pour services RH. Devis Paris Île-de-France.",
    keywords:
      "atelier fete des peres entreprise, animation fete des peres bureau, cadeau fete des peres collaborateurs, atelier juin entreprise",
    h1: "Atelier Fête des Pères en Entreprise",
    h1Highlight: "Fête des Pères",
    tagline: "Sortir du portefeuille en cuir et de la cravate.",
    intro:
      "La fête des pères est traditionnellement le parent pauvre de la communication interne. Nous proposons un format court (1h) pour fabriquer un cadeau aromatique ou végétal sur le temps du midi, parfait pour les services RH qui veulent un geste cohérent avec leur opération fête des mères, sans répétition.",
    benefits: [
      {
        title: "Équilibre interne avec mai",
        description:
          "Si vous avez fait quelque chose pour la fête des mères, ne sautez pas juin. C'est un signal de cohérence RH qui se voit.",
      },
      {
        title: "Cadeau utile",
        description:
          "Kokedama pour le bureau, sachet aromatique pour l'armoire, bougie naturelle. Des objets qui servent vraiment.",
      },
      {
        title: "Format light",
        description:
          "1h sur la pause déjeuner. Pas besoin de bloquer une demi-journée pour un événement de juin.",
      },
    ],
    formats: [
      { title: "Mini kokedama pour bureau", description: "Plante robuste, peu d'entretien.", duration: "1h" },
      { title: "Sachet aromatique", description: "Lavande, cèdre, tabac doux, romarin.", duration: "45 min" },
      { title: "Bougie de cire végétale", description: "Parfum boisé, contenant en verre recyclé.", duration: "1h" },
    ],
    faq: [
      {
        question: "Vous proposez aussi un format mère + père groupé en juin ?",
        answer: "Oui, c'est même le format le plus demandé : une opération unique fin mai qui couvre les deux célébrations, avec deux objets différents à choisir.",
      },
      {
        question: "Quel est le tarif pour 15 participants ?",
        answer: "À partir de 550 EUR HT pour 15 participants, format 1h, matériel inclus.",
      },
    ],
    testimonial: {
      text: "Petit budget, gros impact. Les pères de l'équipe ont vraiment apprécié qu'on pense à eux.",
      author: "DRH adjointe, ESN Issy-les-Moulineaux",
    },
    city: "Paris",
    ctaTitle: "Un cadeau d'équipe pour la fête des pères",
    ctaText: "Format midi, installation rapide, devis sous 48h.",
    heroImage: heroSachet,
    gallery: [heroKokedamaTrad, heroFittonia, heroWorkshopTable],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier kokedama à Paris", path: "/atelier-kokedama-paris" },
      { label: "Tous nos ateliers", path: "/workshops" },
    ],
  },

  // ───────── 3. Fête de la nature
  {
    slug: "atelier-fete-de-la-nature-idf",
    title: "Fête de la Nature : Ateliers en Île-de-France",
    metaDescription:
      "Animation Fête de la Nature en Île-de-France : ateliers botaniques, balades ethnobotaniques, bombes de graines. Mairies, écoles, entreprises.",
    keywords:
      "fete de la nature, animation fete de la nature, atelier fete de la nature mairie, fete de la nature entreprise, ateliers nature mai",
    h1: "Animations pour la Fête de la Nature",
    h1Highlight: "Nature",
    tagline: "Du 21 au 25 mai, faites vivre la fête de la nature avec du concret.",
    intro:
      "La Fête de la Nature, chaque année en mai, mobilise mairies, MJC, écoles et entreprises. Notre programme propose des formats déclinables sur 1h à une demi-journée : balade ethnobotanique urbaine, atelier bombes de graines, fabrication de kokedama, herbier participatif. Tous nos ateliers sont éligibles au label officiel Fête de la Nature.",
    benefits: [
      {
        title: "Éligible au label officiel",
        description:
          "Nos formats sont compatibles avec la charte Fête de la Nature et peuvent être inscrits au programme national pour bénéficier de la visibilité associée.",
      },
      {
        title: "Tous publics",
        description:
          "Familles, scolaires, seniors, collaborateurs : un même atelier peut être adapté à plusieurs publics dans la même journée.",
      },
      {
        title: "Outdoor possible",
        description:
          "Balades commentées en parc urbain ou en forêt francilienne, avec cueillette pédagogique et lecture de paysage.",
      },
    ],
    formats: [
      { title: "Balade ethnobotanique urbaine", description: "1h30 dans votre quartier, lecture des plantes sauvages.", duration: "1h30" },
      { title: "Bombes de graines", description: "Action collective de végétalisation, format flash.", duration: "1h" },
      { title: "Herbier participatif", description: "Cueillette + mise en page, objet collectif à exposer.", duration: "2h" },
      { title: "Atelier kokedama familial", description: "Adultes + enfants, à partir de 8 ans.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Quand a lieu la Fête de la Nature 2026 ?",
        answer: "Du 20 au 24 mai 2026. Nous bouclons les programmes des mairies et écoles dès mars : prenez contact tôt.",
      },
      {
        question: "Travaillez-vous avec les mairies d'IDF ?",
        answer: "Oui régulièrement : Bezons, Maurepas et plusieurs MJC partenaires en Yvelines, Val-d'Oise et Hauts-de-Seine.",
      },
      {
        question: "Quels publics touchez-vous le mieux ?",
        answer: "Familles avec enfants 6-12 ans, seniors actifs, classes de cycle 3. Format animé par une animatrice formée à l'EHESS.",
      },
    ],
    testimonial: {
      text: "Programme calé en deux échanges, balade animée par une professionnelle qui sait parler à tous les âges. À refaire.",
      author: "Chargée culture, mairie Yvelines",
    },
    city: "Île-de-France",
    ctaTitle: "Inscrivez votre événement à la Fête de la Nature",
    ctaText: "Brief gratuit, format adapté à votre public et à votre budget mairie.",
    heroImage: heroForestWalk,
    gallery: [heroSeedBombs, heroAtelierAdulte, heroKokedamaGarden],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Balade botanique en Yvelines", path: "/balade-botanique-entreprise" },
      { label: "Ateliers IDF", path: "/ateliers-idf" },
    ],
  },

  // ───────── 4. Fête de la science
  {
    slug: "atelier-fete-de-la-science-idf",
    title: "Fête de la Science : Ateliers Ethnobotanique IDF",
    metaDescription:
      "Animation Fête de la Science en Île-de-France : ateliers ethnobotanique, teinture végétale, terrarium. Médiation scientifique pour collectivités et écoles.",
    keywords:
      "fete de la science, animation fete de la science, atelier ethnobotanique science, mediation scientifique ethnobotanique idf",
    h1: "Animations pour la Fête de la Science",
    h1Highlight: "Science",
    tagline: "L'ethnobotanique comme porte d'entrée vers la démarche scientifique.",
    intro:
      "Chaque automne, la Fête de la Science offre l'occasion rare de faire entrer la recherche dans des lieux non académiques. Nos ateliers, animés par une médiatrice formée à l'EHESS en anthropologie de la nature, articulent une démarche d'observation, une mise en contexte historique et une manipulation guidée. Idéal pour collectivités, médiathèques, écoles et entreprises souhaitant ancrer leur RSE dans la science.",
    benefits: [
      {
        title: "Adossé à la recherche",
        description:
          "Contenu validé scientifiquement, bibliographie disponible. Aucun raccourci ni anecdote douteuse.",
      },
      {
        title: "Démarche d'enquête",
        description:
          "On part d'une plante, on remonte ses usages, ses circulations, son histoire. Les participants reconstituent le savoir au lieu de le recevoir.",
      },
      {
        title: "Restitution publique possible",
        description:
          "L'atelier peut donner lieu à une mini-exposition (herbier, panneaux) installée dans votre lieu pendant la durée de la Fête.",
      },
    ],
    formats: [
      { title: "Atelier teinture végétale", description: "Chimie des pigments, histoire des colorants.", duration: "2h30" },
      { title: "Wardian Case historique", description: "Terrarium victorien, histoire des plantes voyageuses.", duration: "2h" },
      { title: "Herbier scientifique", description: "Méthode botanique, classification, étiquetage.", duration: "2h" },
      { title: "Conférence-démo", description: "Format keynote 45 min + démo 30 min.", duration: "1h15" },
    ],
    faq: [
      {
        question: "Quand a lieu la Fête de la Science 2026 ?",
        answer: "Du 2 au 12 octobre 2026 en métropole. Notre planning automne se boucle fin juin.",
      },
      {
        question: "Vos ateliers comptent-ils pour le label Fête de la Science ?",
        answer: "Oui, ils s'inscrivent dans le programme régional Île-de-France. Nous vous aidons à monter le dossier d'inscription.",
      },
      {
        question: "Quel niveau scientifique pour les participants ?",
        answer: "Aucun prérequis. L'animatrice ajuste la profondeur du propos selon le groupe (famille, adultes, classes lycée).",
      },
    ],
    testimonial: {
      text: "Une médiation rigoureuse et accessible à la fois. La bibliographie remise aux profs a beaucoup plu.",
      author: "Coordinatrice Fête de la Science, médiathèque IDF",
    },
    city: "Île-de-France",
    ctaTitle: "Programmez votre Fête de la Science 2026",
    ctaText: "Devis gratuit, aide au montage du dossier d'inscription au programme officiel.",
    heroImage: heroTeinture1,
    gallery: [heroTerrarium, heroFresque, heroAtelierAdulte],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier teinture végétale", path: "/atelier-teinture-vegetale" },
      { label: "Atelier Wardian Case", path: "/agenda" },
    ],
  },

  // ───────── 5. Noël entreprise Paris
  {
    slug: "atelier-noel-entreprise-paris",
    title: "Atelier Noël en Entreprise à Paris (Couronnes, Terrarium)",
    metaDescription:
      "Atelier Noël pour entreprise à Paris : couronne végétale, terrarium hivernal, décoration naturelle. Soirée de fin d'année, CE, services RH.",
    keywords:
      "atelier noel entreprise paris, animation noel ce, couronne noel entreprise, soiree fin annee entreprise paris, atelier decembre",
    h1: "Atelier Noël en Entreprise à Paris",
    h1Highlight: "Noël",
    tagline: "Une animation de Noël qui ne ressemble pas à un goodie oublié.",
    intro:
      "Décembre est une bataille de calendriers pour les services RH. Nos ateliers Noël en entreprise à Paris se calent en cocktail, soirée ou pause déjeuner : couronne végétale à accrocher chez soi, terrarium hivernal pour le bureau, sachets aromatiques de fêtes. Vos collaborateurs repartent avec quelque chose de durable, pas un gadget jeté en janvier.",
    benefits: [
      {
        title: "Sortir du goodie générique",
        description:
          "Tasse Noël, calendrier de l'avent, peluche : tout finit à la cave. Une couronne fabriquée à la main reste accrochée à la porte un mois.",
      },
      {
        title: "Format soirée ou midi",
        description:
          "1h en after-work, stand cocktail en parallèle d'un buffet, ou pause déjeuner. On s'adapte au format de votre soirée.",
      },
      {
        title: "Photos pour communication interne",
        description:
          "Animation visuelle qui photographie bien. Matière pour vos newsletters internes de janvier ou votre Linkedin entreprise.",
      },
    ],
    formats: [
      { title: "Couronne végétale de Noël", description: "Pin, eucalyptus, baies. À accrocher à la porte.", duration: "1h30" },
      { title: "Terrarium hivernal", description: "Mousse, mini conifère, scène d'hiver.", duration: "2h" },
      { title: "Sachet d'épices de Noël", description: "Cannelle, orange, clou de girofle, badiane.", duration: "45 min" },
      { title: "Centre de table végétal", description: "Composition à emporter ou laisser au bureau.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Jusqu'à quand peut-on réserver pour décembre ?",
        answer: "Notre planning décembre se ferme mi-octobre. Au-delà, nous acceptons les demandes selon créneaux résiduels.",
      },
      {
        question: "Quel budget pour un atelier Noël à Paris pour 25 personnes ?",
        answer: "À partir de 1100 EUR HT pour 25 participants, couronne ou terrarium, matériel premium inclus.",
      },
      {
        question: "Pouvez-vous animer une soirée à 100 personnes ?",
        answer: "Oui, en format stand tournant avec deux animatrices, créations courtes 30 min par groupe de 12.",
      },
    ],
    testimonial: {
      text: "Soirée de fin d'année réussie. Les couronnes ont décoré les bureaux pendant tout janvier.",
      author: "Office Manager, fintech Paris 9e",
    },
    city: "Paris",
    ctaTitle: "Réservez votre atelier Noël entreprise",
    ctaText: "Planning décembre limité. Devis détaillé sous 48h.",
    heroImage: heroAutumn,
    gallery: [heroTerrarium, heroWorkshopTable, heroFleurCrown],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier couronne de Noël végétale", path: "/atelier-noel-couronne-vegetale" },
      { label: "Soirée d'entreprise végétale", path: "/animation-soiree-entreprise-vegetale" },
    ],
  },

  // ───────── 6. Noël entreprise Yvelines
  {
    slug: "atelier-noel-entreprise-yvelines",
    title: "Atelier Noël Entreprise Yvelines (78) — Couronne & Terrarium",
    metaDescription:
      "Atelier Noël entreprise dans les Yvelines (78) : Saint-Quentin, Versailles, Vélizy. Couronne végétale, terrarium, décoration. Devis 48h.",
    keywords:
      "atelier noel entreprise yvelines, animation noel 78, couronne noel saint-quentin, atelier decembre versailles",
    h1: "Atelier Noël en Entreprise dans les Yvelines",
    h1Highlight: "Noël",
    tagline: "Animation de fêtes pour les sièges et campus 78.",
    intro:
      "De Saint-Quentin-en-Yvelines à Vélizy en passant par Versailles, les campus tertiaires du 78 cherchent chaque décembre une animation de Noël qui change de la traditionnelle galette. Nos formats se déplacent dans vos locaux, dans vos espaces de coworking ou dans les salles de séminaire à proximité.",
    benefits: [
      {
        title: "Déplacement inclus en 78",
        description:
          "Pas de surcoût kilométrique pour les Yvelines. Une animatrice unique, qui connaît bien le territoire.",
      },
      {
        title: "Format adapté aux campus",
        description:
          "Plateau-repas + atelier 1h, format cocktail dans un atrium, animation tournante en hall d'accueil : nous nous adaptons.",
      },
      {
        title: "Photo et vidéo possibles",
        description:
          "Nous travaillons avec un photographe partenaire pour la captation de votre événement si vous souhaitez des contenus internes.",
      },
    ],
    formats: [
      { title: "Couronne végétale", description: "Pin et eucalyptus, format pause déjeuner.", duration: "1h30" },
      { title: "Terrarium hivernal", description: "Pour les bureaux, format soirée.", duration: "2h" },
      { title: "Centre de table", description: "À emporter ou décorer les espaces communs.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Intervenez-vous à Saint-Quentin-en-Yvelines ?",
        answer: "Oui, régulièrement. Nous connaissons les principaux sites tertiaires de la zone.",
      },
      {
        question: "Quel délai de réservation pour décembre 2026 ?",
        answer: "Réservez avant le 1er novembre 2026 pour garantir le créneau souhaité.",
      },
    ],
    testimonial: {
      text: "Logistique nickel sur notre campus de Versailles. Animatrice ponctuelle, atelier rythmé.",
      author: "Responsable événementiel, ETI Yvelines",
    },
    city: "Versailles",
    ctaTitle: "Votre atelier Noël en Yvelines",
    ctaText: "Devis sous 48h, déplacement inclus en 78.",
    heroImage: heroFleurCrown,
    gallery: [heroAutumn, heroTerrarium, heroWorkshopTable],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Couronne de Noël Yvelines", path: "/noel-couronne-vegetale-yvelines" },
      { label: "Ateliers Yvelines", path: "/ateliers-botaniques-yvelines" },
    ],
  },

  // ───────── 7. Saint-Valentin entreprise
  {
    slug: "atelier-saint-valentin-entreprise",
    title: "Atelier Saint-Valentin en Entreprise (Février, Paris IDF)",
    metaDescription:
      "Atelier Saint-Valentin pour entreprise : bougie florale, mini terrarium, cadeau végétal à offrir. Animation février Paris Île-de-France.",
    keywords:
      "atelier saint valentin entreprise, animation saint valentin bureau, cadeau saint valentin collaborateurs, atelier fevrier entreprise",
    h1: "Atelier Saint-Valentin en Entreprise",
    h1Highlight: "Saint-Valentin",
    tagline: "Un cadeau d'équipe à offrir à la maison.",
    intro:
      "La Saint-Valentin en entreprise est un terrain glissant : ne rien faire passe pour ringard, en faire trop est gênant. Notre format propose une troisième voie : un atelier mixte d'1h pour fabriquer un petit cadeau (bougie florale, mini terrarium, sachet de senteur) à offrir à qui on veut. Pas de couple imposé, pas de mise à part.",
    benefits: [
      {
        title: "Mixte par défaut",
        description:
          "Tout le monde participe, qu'on soit en couple ou non. L'atelier est un cadeau d'équipe, pas une opération coeur.",
      },
      {
        title: "Cadeau de qualité",
        description:
          "Bougie en cire végétale, mini terrarium en verre soufflé, sachet brodé : matériel premium, rendu pro.",
      },
      {
        title: "Format flash",
        description:
          "45 min à 1h. Compatible avec une pause déjeuner ou un after-work léger.",
      },
    ],
    formats: [
      { title: "Bougie florale", description: "Cire végétale, fleurs séchées coulées dedans.", duration: "1h" },
      { title: "Mini terrarium", description: "Verre soufflé, mousse, plante grasse.", duration: "1h" },
      { title: "Sachet de senteur brodé", description: "Rose, lavande, mélange aromatique.", duration: "45 min" },
    ],
    faq: [
      {
        question: "C'est gênant de proposer ça en entreprise ?",
        answer: "Pas si le format est mixte et présenté comme un cadeau d'équipe. C'est l'angle que nous travaillons depuis 4 ans avec succès.",
      },
      {
        question: "Quel budget pour 20 participants ?",
        answer: "À partir de 700 EUR HT pour 20 personnes, format 1h, matériel premium inclus.",
      },
    ],
    testimonial: {
      text: "On hésitait, ça a très bien marché. Les hommes comme les femmes ont participé, sans gêne.",
      author: "Responsable RH, cabinet conseil Paris",
    },
    city: "Paris",
    ctaTitle: "Une Saint-Valentin d'entreprise qui marche",
    ctaText: "Format mixte, devis sous 48h, planning février qui se remplit vite.",
    heroImage: heroBougieFleurs,
    gallery: [heroSachet, heroSucculents, heroAtelierAdulte],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier couple à Paris", path: "/atelier-couple-nature-paris" },
      { label: "Animation soirée entreprise", path: "/animation-soiree-entreprise-vegetale" },
    ],
  },

  // ───────── 8. Saint-Valentin couple Paris
  {
    slug: "atelier-saint-valentin-couple-paris",
    title: "Atelier Saint-Valentin en Couple à Paris (Idée Cadeau)",
    metaDescription:
      "Atelier Saint-Valentin en couple à Paris : terrarium à deux mains, bougie florale, kokedama. Idée cadeau originale, 1h30 à 2h.",
    keywords:
      "atelier saint valentin couple paris, idee cadeau saint valentin couple, atelier en couple paris, activite couple saint valentin",
    h1: "Atelier Saint-Valentin en Couple à Paris",
    h1Highlight: "Couple",
    tagline: "Fabriquer quelque chose ensemble, pour changer du resto.",
    intro:
      "Beaucoup de couples cherchent une activité pour la Saint-Valentin qui ne soit ni un dîner gastronomique, ni une expérience hors de prix. Nos ateliers en duo se font le samedi après-midi ou le 14 février au soir : 1h30 à 2h pour fabriquer un terrarium à deux mains, une bougie florale parfumée, ou un kokedama à poser chez soi.",
    benefits: [
      {
        title: "Souvenir durable",
        description:
          "L'objet fabriqué reste chez vous. Vous le voyez tous les jours, il a une histoire.",
      },
      {
        title: "Petit groupe intimiste",
        description:
          "Maximum 5 couples par session. Pas de mise en scène collective, juste une animatrice présente.",
      },
      {
        title: "Cadeau original",
        description:
          "Offrir l'atelier en duo, c'est offrir un moment à deux plutôt qu'un objet. Bon cadeau disponible.",
      },
    ],
    formats: [
      { title: "Terrarium à deux mains", description: "Composition collaborative en verre.", duration: "2h" },
      { title: "Bougie florale duo", description: "Une bougie chacun, parfum partagé.", duration: "1h30" },
      { title: "Kokedama tandem", description: "Une sphère à deux, plante d'intérieur.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Où ont lieu les ateliers couple à Paris ?",
        answer: "Dans notre atelier partenaire ou en pop-up le 14 février. Adresse précise communiquée à la réservation.",
      },
      {
        question: "Combien coûte un atelier en couple ?",
        answer: "À partir de 65 EUR par personne, soit 130 EUR le duo, matériel et création à emporter inclus.",
      },
      {
        question: "On peut offrir l'atelier ?",
        answer: "Oui, nous éditons un bon cadeau personnalisé valable un an, à offrir avant ou après le 14 février.",
      },
    ],
    testimonial: {
      text: "On a fait un terrarium ensemble, on l'a posé dans le salon. Mieux qu'un restaurant qu'on aurait oublié.",
      author: "Couple participant, février 2025",
    },
    city: "Paris",
    ctaTitle: "Réservez votre atelier Saint-Valentin en duo",
    ctaText: "Petites sessions, à réserver tôt. Bon cadeau disponible.",
    heroImage: heroBougieFleurs,
    gallery: [heroSucculents, heroAtelierAdulte, heroTerrarium],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier couple à Paris", path: "/atelier-couple-nature-paris" },
      { label: "Tous les ateliers", path: "/workshops" },
    ],
  },

  // ───────── 9. Printemps entreprise
  {
    slug: "atelier-printemps-entreprise-paris",
    title: "Atelier de Printemps en Entreprise (Paris IDF)",
    metaDescription:
      "Atelier de printemps en entreprise à Paris : bombes de graines, kokedama, balade botanique. Animation mars-avril-mai pour services RH.",
    keywords:
      "atelier printemps entreprise paris, animation printemps bureau, atelier mars avril mai entreprise, animation jardin entreprise",
    h1: "Atelier de Printemps en Entreprise",
    h1Highlight: "Printemps",
    tagline: "Le printemps comme prétexte pour relancer la dynamique d'équipe.",
    intro:
      "Sortie d'hiver, retour de l'énergie, envie d'ouvrir les fenêtres : le printemps est le bon moment pour proposer une animation qui réveille les équipes. Nos formats de printemps (bombes de graines, kokedama, balade botanique urbaine) se calent en mars, avril ou mai, en complément ou en alternative aux séminaires de rentrée commerciale.",
    benefits: [
      {
        title: "Effet de saison",
        description:
          "Les ateliers de printemps mobilisent naturellement : tout le monde a envie d'être dehors, de manipuler du vivant.",
      },
      {
        title: "Préparation Semaine QVCT",
        description:
          "Idéal pour mettre en bouche une démarche QVCT plus large qui culminera en juin lors de la Semaine officielle.",
      },
      {
        title: "Outdoor possible",
        description:
          "Parc d'entreprise, terrasse, jardin partagé voisin : le format se prête bien à la sortie hors locaux.",
      },
    ],
    formats: [
      { title: "Bombes de graines", description: "Action collective, fleurs sauvages mellifères.", duration: "1h" },
      { title: "Kokedama de printemps", description: "Plantes fleuries de saison.", duration: "1h30" },
      { title: "Balade botanique urbaine", description: "Lecture des plantes du quartier, 1h30.", duration: "1h30" },
      { title: "Atelier herbier collectif", description: "Cueillette et mise en page, format demi-journée.", duration: "3h" },
    ],
    faq: [
      {
        question: "Quels mois sont concernés ?",
        answer: "Mars, avril, mai. Avril est notre mois préféré : météo douce, plantes en pleine activité.",
      },
      {
        question: "Quel tarif pour 30 personnes en outdoor ?",
        answer: "À partir de 1300 EUR HT pour 30 participants en balade ou bombes de graines, matériel inclus.",
      },
    ],
    testimonial: {
      text: "Sortie de bureau en avril, équipe au top après. Vraiment changé l'ambiance pour le mois.",
      author: "Responsable communication interne, agence Paris 11e",
    },
    city: "Paris",
    ctaTitle: "Animez votre printemps d'équipe",
    ctaText: "Format outdoor ou indoor, devis sous 48h.",
    heroImage: heroSeedBombs,
    gallery: [heroKokedamaGarden, heroForestWalk, heroAtelierAdulte],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Balade botanique printemps-été", path: "/balade-botanique-printemps-ete" },
      { label: "Ateliers IDF", path: "/ateliers-idf" },
    ],
  },

  // ───────── 10. Fête des fleurs
  {
    slug: "atelier-fete-des-fleurs-paris",
    title: "Atelier Fête des Fleurs à Paris (Mai-Juin)",
    metaDescription:
      "Atelier fête des fleurs à Paris : couronne florale, composition de fleurs séchées, art floral végétal. Mai-juin, événements et entreprises.",
    keywords:
      "atelier fete des fleurs paris, atelier floral mai juin, couronne fleurs paris, art floral entreprise paris",
    h1: "Atelier Fête des Fleurs à Paris",
    h1Highlight: "Fleurs",
    tagline: "Mai et juin, la haute saison florale parisienne.",
    intro:
      "La fête des fleurs n'a pas de date officielle unique : c'est la séquence mai-juin où les festivals (Bagatelle, Saint-Cloud, fêtes des plantes) se succèdent. Nos ateliers fête des fleurs à Paris s'inscrivent dans cette dynamique, pour entreprises, particuliers, ou pop-ups événementiels.",
    benefits: [
      {
        title: "Saison naturelle",
        description:
          "Mai-juin offre la plus grande variété de fleurs locales et de saison. Nos compositions reflètent vraiment la saison.",
      },
      {
        title: "Pour public mixte",
        description:
          "Format adaptable famille, entreprise, EVJF, club retraités. La fleur traverse les âges et les contextes.",
      },
      {
        title: "Photographique",
        description:
          "Atelier visuel par excellence. Photos exploitables pour vos réseaux ou votre communication interne.",
      },
    ],
    formats: [
      { title: "Couronne de fleurs fraîches", description: "À porter ou décorer.", duration: "1h30" },
      { title: "Bouquet champêtre", description: "Fleurs des champs, art floral simple.", duration: "1h" },
      { title: "Composition fleurs séchées", description: "Format durable, cadeau ou déco.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Vous travaillez avec quels fleuristes ?",
        answer: "Producteurs franciliens (Slow Flowers IDF) et fleurs françaises de saison. Pas de roses import hors saison.",
      },
      {
        question: "Tarif pour 15 personnes ?",
        answer: "À partir de 650 EUR HT pour 15 participants, fleurs locales de saison incluses.",
      },
    ],
    testimonial: {
      text: "Atelier en plein air pour notre fête de quartier. Très beau moment, fleurs magnifiques.",
      author: "Responsable événementiel, association Paris 20e",
    },
    city: "Paris",
    ctaTitle: "Programmez votre atelier fleurs mai-juin",
    ctaText: "Saison limitée, planifiez tôt. Devis sous 48h.",
    heroImage: heroFleurCrown,
    gallery: [heroFresque, heroBougieFleurs, heroSucculents],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier floral à Paris", path: "/atelier-floral-paris" },
      { label: "Atelier EVJF botanique", path: "/atelier-evjf-botanique-paris" },
    ],
  },

  // ───────── 11. Événement fleurs entreprise IDF
  {
    slug: "evenement-fleurs-entreprise-idf",
    title: "Événement Fleurs en Entreprise (Île-de-France)",
    metaDescription:
      "Animation événement fleurs en entreprise IDF : stand floral, atelier composition, marché de printemps. Pour journées portes ouvertes et soirées.",
    keywords:
      "evenement fleurs entreprise, animation florale evenement, stand floral entreprise, atelier composition evenement",
    h1: "Événement Fleurs en Entreprise IDF",
    h1Highlight: "Fleurs",
    tagline: "Un stand fleuri qui fait événement, pas qui décore le buffet.",
    intro:
      "Lors d'un événement entreprise (convention, journée porte ouverte, anniversaire de société, lancement produit), une animation florale active vaut mille bouquets décoratifs. Nos formats stand permettent à vos invités de venir composer un mini-bouquet, créer un sachet de senteur, repartir avec une création faite sur place.",
    benefits: [
      {
        title: "Animation continue",
        description:
          "Stand ouvert 2h à 4h, passage de 30 à 200 personnes selon le flux. Format flexible.",
      },
      {
        title: "Cadeau d'invité",
        description:
          "Chaque participant repart avec sa création. Bien plus mémorable qu'un goodie sponsorisé.",
      },
      {
        title: "Visuel premium",
        description:
          "Scénographie soignée du stand, fleurs locales en abondance. Photos exploitables.",
      },
    ],
    formats: [
      { title: "Stand composition florale", description: "Mini bouquet ou couronne, 10 min par invité.", duration: "2h-4h" },
      { title: "Stand sachet senteur", description: "Composition aromatique, format flash.", duration: "2h-3h" },
      { title: "Marché de printemps", description: "Stand multi-créations, animation toute la journée.", duration: "4h-6h" },
    ],
    faq: [
      {
        question: "Combien d'invités pouvez-vous accueillir ?",
        answer: "Jusqu'à 200 personnes sur un stand de 4h avec deux animatrices, créations courtes 10 min.",
      },
      {
        question: "Vous installez le stand ?",
        answer: "Oui, mobilier, signalétique discrète et fleurs livrés et installés. Démontage inclus.",
      },
    ],
    testimonial: {
      text: "Notre stand fleurs a été le plus photographié de la journée. Animatrice qui savait parler à tous.",
      author: "Directrice événementiel, ETI Hauts-de-Seine",
    },
    city: "Île-de-France",
    ctaTitle: "Un stand fleurs sur votre événement",
    ctaText: "Devis sous 48h, scénographie adaptée à votre marque.",
    heroImage: heroFresque,
    gallery: [heroFleurCrown, heroAtelierAdulte, heroSachet],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Animation événement entreprise", path: "/animation-evenement-entreprise-nature" },
      { label: "Stand floral hôtel événementiel", path: "/animation-vegetale-hotel-evenementiel" },
    ],
  },

  // ───────── 12. Événement printemps entreprise
  {
    slug: "evenement-printemps-entreprise-idf",
    title: "Événement Printemps Entreprise (Île-de-France)",
    metaDescription:
      "Organisation événement printemps pour entreprise en IDF : animation jardin, marché créateurs, atelier vegetal extérieur. Devis sous 48h.",
    keywords:
      "evenement printemps entreprise, animation printemps idf, jardin entreprise printemps, marche createurs entreprise",
    h1: "Événement Printemps Entreprise IDF",
    h1Highlight: "Printemps",
    tagline: "Profiter du printemps pour faire un vrai événement extérieur.",
    intro:
      "Le printemps reste sous-exploité par les services événementiels d'entreprise, alors que c'est le seul moment de l'année où l'on peut organiser un événement extérieur sans prendre de risque météo majeur. Notre offre événement printemps : animation jardin d'entreprise, marché de créateurs végétaux, atelier collectif sous tente.",
    benefits: [
      {
        title: "Outdoor sécurisé",
        description:
          "Mai-juin offrent la meilleure fenêtre météo. Plan B intérieur prévu en cas de pluie.",
      },
      {
        title: "Plusieurs formats simultanés",
        description:
          "Stand atelier + balade botanique + démonstration : un événement riche sur une demi-journée.",
      },
      {
        title: "Storytelling RSE",
        description:
          "Événement parfait pour valoriser votre engagement biodiversité auprès de vos équipes et clients.",
      },
    ],
    formats: [
      { title: "Animation jardin", description: "Demi-journée multi-ateliers en extérieur.", duration: "3h-4h" },
      { title: "Marché créateurs végétaux", description: "Stands artisans + ateliers participatifs.", duration: "4h-6h" },
      { title: "Balade + atelier", description: "Lecture du jardin + composition.", duration: "2h30" },
    ],
    faq: [
      {
        question: "Vous gérez la logistique tentes et mobilier ?",
        answer: "Nous coordonnons avec votre prestataire événementiel ou orientons vers nos partenaires habituels.",
      },
      {
        question: "Quel budget pour 80 participants en demi-journée ?",
        answer: "À partir de 2400 EUR HT animation, hors logistique. Devis détaillé sur brief.",
      },
    ],
    testimonial: {
      text: "Belle journée printanière dans notre parc d'entreprise. Tout le monde a passé un bon moment.",
      author: "Responsable RSE, groupe industriel IDF",
    },
    city: "Île-de-France",
    ctaTitle: "Programmez votre événement printemps",
    ctaText: "Format demi-journée ou journée complète. Devis sous 48h.",
    heroImage: heroKokedamaGarden,
    gallery: [heroSeedBombs, heroForestWalk, heroFresque],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Animation événement entreprise", path: "/animation-evenement-entreprise-nature" },
      { label: "Team building écologique IDF", path: "/team-building-ecologique-ile-de-france" },
    ],
  },

  // ───────── 13. Événement automne entreprise
  {
    slug: "evenement-automne-entreprise-idf",
    title: "Événement Automne Entreprise (Île-de-France)",
    metaDescription:
      "Animation événement d'automne pour entreprise IDF : atelier feuilles d'automne, teinture végétale, terrarium. Septembre-octobre-novembre.",
    keywords:
      "evenement automne entreprise, animation automne bureau, atelier septembre entreprise, animation feuilles automne",
    h1: "Événement Automne Entreprise IDF",
    h1Highlight: "Automne",
    tagline: "Septembre-novembre : la saison la plus riche pour les ateliers nature.",
    intro:
      "L'automne est la saison reine des palettes végétales : couleurs spectaculaires, fruits, feuillages, baies. Pour les services RH et événementiels, c'est aussi le moment de la rentrée et de la préparation Q4. Nos ateliers automne combinent le visuel saisonnier et les enjeux de cohésion post-rentrée.",
    benefits: [
      {
        title: "Visuel exceptionnel",
        description:
          "Palettes ocre, rouge, doré, brun. Les créations d'automne sont particulièrement photogéniques.",
      },
      {
        title: "Format rentrée",
        description:
          "Septembre est le mois de reprise. Un atelier collectif lance bien le trimestre.",
      },
      {
        title: "Fenêtre Fête de la Science",
        description:
          "Octobre coïncide avec la Fête de la Science. On peut articuler atelier + médiation scientifique.",
      },
    ],
    formats: [
      { title: "Composition feuilles d'automne", description: "Stabilisation à la glycérine, encadrement.", duration: "2h" },
      { title: "Teinture aux pigments d'automne", description: "Brou de noix, baies, écorces.", duration: "2h30" },
      { title: "Terrarium d'automne", description: "Mousses, champignons stabilisés, scène saisonnière.", duration: "2h" },
    ],
    faq: [
      {
        question: "Quels mois exactement ?",
        answer: "Septembre, octobre, novembre. Octobre est le pic de demande (Fête de la Science + rentrée stabilisée).",
      },
      {
        question: "Tarif pour 20 participants en atelier feuilles ?",
        answer: "À partir de 900 EUR HT, matériel premium et encadrement inclus.",
      },
    ],
    testimonial: {
      text: "Atelier feuilles d'automne pour notre journée RSE d'octobre. Les cadres ont été surpris en bien.",
      author: "Directrice RSE, banque mutualiste IDF",
    },
    city: "Île-de-France",
    ctaTitle: "Réservez votre atelier d'automne",
    ctaText: "Octobre se remplit vite. Devis sous 48h.",
    heroImage: heroAutumn,
    gallery: [heroTeinture1, heroBasketry, heroAtelierAdulte],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier teinture végétale", path: "/atelier-teinture-vegetale" },
      { label: "Animation événement entreprise", path: "/animation-evenement-entreprise-nature" },
    ],
  },

  // ───────── 14. Événement hiver entreprise
  {
    slug: "evenement-hiver-entreprise-idf",
    title: "Événement Hiver Entreprise (Île-de-France)",
    metaDescription:
      "Animation événement d'hiver pour entreprise IDF : terrarium hivernal, couronne, atelier indoor janvier-février. Devis sous 48h.",
    keywords:
      "evenement hiver entreprise, animation hiver bureau, atelier janvier fevrier entreprise, animation indoor entreprise",
    h1: "Événement Hiver Entreprise IDF",
    h1Highlight: "Hiver",
    tagline: "Janvier-février : sortir de l'apathie post-fêtes.",
    intro:
      "Après les fêtes, beaucoup d'équipes ressentent un creux de motivation. Janvier-février sont des mois sous-investis par les services RH alors qu'ils représentent une fenêtre idéale pour relancer la dynamique d'équipe sans la pression des fêtes. Nos formats indoor d'hiver utilisent les plantes vertes, les terrariums et les rituels chaleureux.",
    benefits: [
      {
        title: "Combat la déprime hivernale",
        description:
          "Manipuler du vert vivant en plein hiver a un effet psychologique mesurable sur le moral.",
      },
      {
        title: "Format indoor",
        description:
          "Tout est prévu pour l'intérieur. Aucune dépendance météo.",
      },
      {
        title: "Budget début d'année",
        description:
          "Tarifs janvier-février souvent plus accessibles que la haute saison printemps-automne.",
      },
    ],
    formats: [
      { title: "Terrarium d'intérieur", description: "Plantes tropicales, écosystème humide.", duration: "2h" },
      { title: "Atelier infusions et bocaux", description: "Tisanes hivernales, conservation, savoir-faire.", duration: "1h30" },
      { title: "Couronne d'épices", description: "Cannelle, badiane, agrumes séchés.", duration: "1h30" },
    ],
    faq: [
      {
        question: "Pourquoi animer un événement en janvier ?",
        answer: "C'est le moment où les équipes ont le plus besoin de reconnexion, et le plus de disponibilité calendrier.",
      },
      {
        question: "Tarif pour 15 participants ?",
        answer: "À partir de 650 EUR HT en janvier-février, matériel inclus.",
      },
    ],
    testimonial: {
      text: "Atelier en janvier, équipe revigorée. On a recommencé en mars tellement c'était positif.",
      author: "DRH, scale-up Paris 9e",
    },
    city: "Île-de-France",
    ctaTitle: "Relancez l'énergie d'équipe en hiver",
    ctaText: "Tarifs préférentiels janvier-février. Devis sous 48h.",
    heroImage: heroTerrarium,
    gallery: [heroFittonia, heroSucculents, heroAtelierAdulte],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier terrarium à Paris", path: "/atelier-terrarium-paris" },
      { label: "Atelier bien-être entreprise", path: "/atelier-bien-etre-nature-entreprise" },
    ],
  },

  // ───────── 15. Rentrée entreprise Paris
  {
    slug: "atelier-rentree-entreprise-paris",
    title: "Atelier de Rentrée en Entreprise à Paris (Septembre)",
    metaDescription:
      "Atelier de rentrée en entreprise à Paris : cohésion d'équipe septembre, kokedama, terrarium, balade botanique. Lancement Q4, intégration.",
    keywords:
      "atelier rentree entreprise paris, animation septembre entreprise, cohesion equipe rentree, atelier integration paris",
    h1: "Atelier de Rentrée en Entreprise à Paris",
    h1Highlight: "Rentrée",
    tagline: "Septembre : poser une base d'année plutôt que courir.",
    intro:
      "La rentrée de septembre concentre les enjeux RH : intégration des nouveaux arrivants, relance des projets Q4, cohésion post-vacances. Un atelier collectif d'1h30 à 2h, calé sur la première ou deuxième semaine de septembre, sert de marqueur de saison et facilite la reprise.",
    benefits: [
      {
        title: "Intégration des nouveaux",
        description:
          "Idéal pour souder une équipe qui vient d'accueillir des arrivées d'été. Atelier où tout le monde part au même niveau.",
      },
      {
        title: "Lancement d'année",
        description:
          "Marqueur symbolique. Annoncer un atelier rentrée dès août pose une dynamique positive pour la saison.",
      },
      {
        title: "Format compact",
        description:
          "1h30 à 2h, compatible avec un planning post-vacances déjà chargé.",
      },
    ],
    formats: [
      { title: "Kokedama de rentrée", description: "Plante d'intérieur, format collectif.", duration: "1h30" },
      { title: "Terrarium intégration", description: "Métaphore visuelle de l'équipe.", duration: "2h" },
      { title: "Balade botanique de rentrée", description: "Sortie de bureau en parc parisien.", duration: "2h" },
    ],
    faq: [
      {
        question: "Quel est le meilleur moment en septembre ?",
        answer: "Deuxième semaine de septembre : les vacances sont closes, l'année n'est pas encore engagée à fond. Réservez avant fin juin.",
      },
      {
        question: "Tarif pour 25 participants ?",
        answer: "À partir de 950 EUR HT pour 25 personnes, format kokedama 1h30, matériel inclus.",
      },
    ],
    testimonial: {
      text: "Atelier kokedama première semaine de septembre, parfait pour intégrer nos 4 nouveaux.",
      author: "Responsable People, scale-up Paris 2e",
    },
    city: "Paris",
    ctaTitle: "Lancez votre rentrée d'équipe",
    ctaText: "Format septembre, réservation conseillée avant fin juin.",
    heroImage: heroKokedamaGarden,
    gallery: [heroForestWalk, heroAtelierAdulte, heroWorkshopTable],
    partners: PARTNERS,
    relatedWorkshops: [
      { label: "Atelier onboarding", path: "/atelier-onboarding" },
      { label: "Atelier cohésion d'équipe", path: "/atelier-cohesion-equipe-nature" },
    ],
  },
];

// Contenu éditorial unique long format (anti thin-content) pour chaque
// landing saisonnière. Chacun reçoit deux paragraphes ancrés sur la requête.
export const SEASONAL_LANDING_CONTEXT: Record<string, LandingContext> = {
  "atelier-fete-des-meres-entreprise": {
    heading: "La fête des mères en entreprise, un terrain à manipuler avec soin",
    paragraphs: [
      "La fête des mères dans le contexte professionnel pose un vrai sujet de cohérence interne. La célébrer sans réfléchir, c'est risquer de mettre à l'écart les collaboratrices sans enfant, les pères qui s'occupent autant des leurs, et plus largement toutes les configurations familiales contemporaines. La passer sous silence, c'est laisser tomber une marque d'attention que vos équipes attendent. Notre approche tranche cette tension par le format : un atelier collectif où tout le monde fabrique un objet, qu'il offrira ou gardera selon ce qui lui convient. La dimension cadeau personnel n'est pas imposée, elle est offerte comme une possibilité.",
      "Sur le plan opérationnel, un atelier fête des mères en entreprise se prépare comme un événement court. Nous arrivons 30 à 45 minutes avant pour installer le matériel sur des tables protégées. L'animation dure 1h à 1h30 selon le format (couronne, bougie, kokedama, sachet aromatique). Le démontage est de notre responsabilité, vos locaux sont rendus impeccables. Sur le plan budgétaire, comptez 35 à 50 EUR HT par participant tout compris (matériel premium, animatrice formée, déplacement Paris IDF). Les commandes sont à passer idéalement avant fin mars pour garantir le créneau de mai.",
    ],
  },
  "atelier-fete-des-peres-entreprise": {
    heading: "Pourquoi la fête des pères mérite la même attention que celle des mères",
    paragraphs: [
      "L'écart d'investissement entre fête des mères et fête des pères en entreprise est documenté : la première mobilise sept à huit fois plus d'opérations de communication interne que la seconde. Cet écart est devenu un sujet d'attention pour les services RH qui travaillent sur l'égalité réelle, parce qu'il reproduit symboliquement la division genrée des tâches familiales. Animer la fête des pères avec le même niveau d'attention que celle des mères, c'est un signal de cohérence que les équipes captent immédiatement.",
      "Nos formats fête des pères privilégient des objets simples, masculins sans être stéréotypés : sachets aromatiques aux notes boisées, kokedamas faciles à entretenir, bougies à la cire d'abeille. L'idée n'est pas de fabriquer un cadeau différent parce qu'on est un homme, mais de proposer un même geste d'attention que celui qui a été fait en mai. Pour les entreprises qui souhaitent éviter la double opération en deux mois, nous proposons un format mère + père groupé fin mai, avec deux objets différents à choisir au moment de la création.",
    ],
  },
  "atelier-fete-de-la-nature-idf": {
    heading: "Inscrire votre événement au programme officiel de la Fête de la Nature",
    paragraphs: [
      "La Fête de la Nature, créée en 2007 par la Ligue ROC et le Comité français de l'UICN, est devenue un rendez-vous national majeur du dernier week-end de mai. Elle bénéficie d'une visibilité presse et institutionnelle importante, à condition que votre événement soit inscrit au programme officiel via la plateforme fetedelanature.com. L'inscription est gratuite mais demande un dossier minimal : nom de l'événement, animateur, plage horaire, lieu, public visé, lien avec la nature. Nous vous aidons à monter ce dossier en moins de 30 minutes.",
      "Sur le plan du contenu, notre programme Fête de la Nature en Île-de-France propose quatre formats déclinables sur la semaine : une balade ethnobotanique urbaine animée par une médiatrice formée à l'EHESS, un atelier bombes de graines pour vegetaliser un coin de quartier, un herbier participatif qui devient ensuite une exposition durable dans votre lieu, et un kokedama familial accessible aux enfants à partir de 8 ans. Les mairies de Bezons et de Maurepas font partie de nos partenaires réguliers sur ce type d'événement.",
    ],
  },
  "atelier-fete-de-la-science-idf": {
    heading: "L'ethnobotanique, un objet scientifique légitime pour la Fête de la Science",
    paragraphs: [
      "L'anthropologie de la nature, courant scientifique structuré depuis Philippe Descola, considère que les façons dont les humains classent et utilisent les plantes sont des objets d'étude à part entière. C'est cette tradition que nous mobilisons dans nos ateliers de Fête de la Science : la teinture végétale n'est pas un loisir créatif, c'est une porte d'entrée vers l'histoire de la chimie des pigments, vers les circulations coloniales des plantes tinctoriales, vers la valorisation contemporaine des savoirs paysans.",
      "Pour les médiathèques, collectivités, lycées et entreprises qui programment la Fête de la Science 2026, notre offre comprend une bibliographie remise aux enseignants, des fiches de manipulation utilisables en classe, et la possibilité d'une mini-exposition qui reste installée dans votre lieu après l'atelier (herbier scientifique, panneaux explicatifs, échantillons de teintures). Cette dimension matérielle prolongée fait que l'événement laisse une trace, plutôt que de se réduire à un atelier consommé puis oublié.",
    ],
  },
  "atelier-noel-entreprise-paris": {
    heading: "Penser Noël entreprise comme un moment, pas comme une opération",
    paragraphs: [
      "Décembre dans une grande entreprise parisienne, c'est un empilement d'événements concurrents : pot de fin d'année du service, soirée du siège, vœux du président, repas équipe, distribution des cadeaux CSE. Dans ce contexte, ajouter une animation supplémentaire ne fait pas événement, ça fait bruit. Notre proposition consiste à remplacer l'un de ces temps faibles (typiquement le pot du service en open space) par un atelier court de 1h, qui crée un vrai souvenir partagé.",
      "Sur le plan logistique, un atelier Noël à Paris se programme idéalement entre le 1er et le 18 décembre, avant la dispersion des équipes pour les vacances. Nous arrivons avec tout le matériel emballé (pin local, eucalyptus, baies de saison, structures en métal recyclé), nous installons en 30 minutes, l'atelier se déroule, nous démontons. Vos collaborateurs repartent avec une couronne, un terrarium hivernal ou un sachet d'épices à offrir ou à garder. La photo qui circule ensuite en interne nourrit la communication employeur pour janvier.",
    ],
  },
  "atelier-noel-entreprise-yvelines": {
    heading: "Les sièges du 78, terrain particulier pour les animations de fêtes",
    paragraphs: [
      "Les campus tertiaires des Yvelines (Saint-Quentin-en-Yvelines, Vélizy, Versailles, Buc, Guyancourt) ont une particularité : ils sont souvent éloignés des centres-villes, leurs cafétérias sont vastes, leurs équipes mélangent cadres locaux et collaborateurs venus de Paris en RER ou en navette. Cette géographie change l'économie d'un atelier de Noël : l'événement doit se tenir sur site, sur les horaires de présence, parce qu'on ne peut pas demander aux équipes de prolonger leur journée d'1h30 après le travail comme on le ferait à République ou à Bastille.",
      "Nos animatrices connaissent les principaux sites tertiaires du 78 et leurs configurations classiques : atrium central, salles modulables, cafétéria d'étage. Le format pause déjeuner étendu (1h15 plutôt qu'1h, sur un créneau 12h-13h15) fonctionne particulièrement bien dans ces contextes. Pour les soirées de fin d'année (typiquement à Versailles ou dans les lieux de réception du Plateau de Saclay), nous coordonnons avec votre traiteur et votre prestataire son et lumière pour intégrer l'atelier comme un temps fort du programme.",
    ],
  },
  "atelier-saint-valentin-entreprise": {
    heading: "La Saint-Valentin en entreprise, comment éviter le malaise",
    paragraphs: [
      "Proposer une animation Saint-Valentin en entreprise demande d'éviter deux pièges symétriques : la version romantique frontale (atelier en duo, mise en scène cœurs et roses) qui exclut tous les célibataires et les couples non hétérosexuels en open space ; et la version pseudo-neutre (atelier fleur générique sans mention de la date) qui passe à côté du sujet et désincarne complètement le moment. Notre format propose une troisième voie : un atelier mixte d'1h, présenté comme un cadeau d'équipe à offrir à qui chacun veut, le 14 février ou plus tard.",
      "Le matériel est volontairement premium pour que l'objet créé ait une vraie valeur d'usage : cire végétale de qualité pour les bougies, mini terrariums en verre soufflé, sachets brodés à la main pour les compositions aromatiques. Ce niveau matériel évite que le résultat ressemble à un travail d'enfant, ce qui serait dévalorisant. Beaucoup d'entreprises commandent ce format en alternative au cadeau Saint-Valentin distribué par certains CSE, qui coûte plus cher et laisse moins de souvenir.",
    ],
  },
  "atelier-saint-valentin-couple-paris": {
    heading: "Pourquoi fabriquer ensemble change la valeur du cadeau Saint-Valentin",
    paragraphs: [
      "La sociologie du cadeau, depuis les travaux de Marcel Mauss sur le don, montre que la valeur d'un cadeau ne tient pas à son prix mais à l'investissement personnel qu'il manifeste. Un atelier en couple le 14 février ne produit pas un objet plus beau qu'un bouquet acheté chez un fleuriste premium : il produit un souvenir partagé qui charge l'objet d'une histoire commune. Cette dimension explique pourquoi nos couples participants reviennent souvent un an plus tard, avec d'autres amis cette fois.",
      "Pratiquement, nos sessions Saint-Valentin couple à Paris se tiennent en petit groupe (maximum cinq couples) le samedi 13 et le mardi 14 février au soir. Le format est conçu pour que la conversation entre vous reste possible : tables séparées, ambiance feutrée, animatrice présente sans monopoliser la parole. Les bons cadeaux sont disponibles à l'avance pour offrir l'expérience plutôt que l'objet, et la séance peut être décalée si la date imposée ne vous convient pas. C'est un format pensé comme un dîner, pas comme un cours collectif.",
    ],
  },
  "atelier-printemps-entreprise-paris": {
    heading: "Le printemps en entreprise, fenêtre de relance sous-exploitée",
    paragraphs: [
      "Entre la fin de la séquence vœux-galettes (qui se termine vers mi-février) et le démarrage des séminaires d'été en juin, les entreprises traversent un trou événementiel de presque quatre mois. Mars, avril et début mai sont des mois où les équipes sont disponibles, la météo francilienne devient praticable pour l'extérieur, et les budgets RH ne sont pas encore engagés sur la Semaine QVCT de juin. C'est, statistiquement, le meilleur moment de l'année pour proposer une animation collective sans empiéter sur d'autres temps forts.",
      "Nos formats printemps exploitent cette saisonnalité : les bombes de graines (action collective de végétalisation), les balades botaniques urbaines (lecture des plantes sauvages du quartier autour du siège), les ateliers kokedama avec plantes fleuries de saison. Nous travaillons régulièrement avec des entreprises parisiennes qui mettent en place un format printemps comme première étape d'une démarche QVCT annuelle, avant la culmination de juin et un éventuel rappel à l'automne. Cette régularité change la nature de la relation entre l'animatrice et l'équipe.",
    ],
  },
  "atelier-fete-des-fleurs-paris": {
    heading: "Mai-juin à Paris, le moment où la floraison locale culmine",
    paragraphs: [
      "Le calendrier floral parisien et francilien est plus court qu'on ne le pense : la haute saison des fleurs locales se concentre sur six semaines, de mi-mai à fin juin. Au-delà, la production bascule sur des fleurs importées ou des serres, ce qui change la nature de ce que vous offrez ou ce que vous fabriquez. Travailler avec des producteurs Slow Flowers IDF pendant cette fenêtre garantit des compositions vraiment de saison et un bilan carbone décent.",
      "Notre offre fête des fleurs à Paris se cale sur cette saisonnalité : nous bouclons nos commandes auprès des producteurs trois semaines à l'avance, ce qui détermine notre planning. Les formats vont du bouquet champêtre à la couronne florale portée, en passant par les compositions de fleurs séchées qui prolongent la beauté de la saison pendant six à neuf mois. C'est aussi le moment des EVJF (enterrement de vie de jeune fille), pour lequel nous proposons un format dédié animé en petit groupe.",
    ],
  },
  "evenement-fleurs-entreprise-idf": {
    heading: "Le stand floral animé, format événementiel à part entière",
    paragraphs: [
      "Sur un événement entreprise d'envergure (convention, journée portes ouvertes, lancement produit, anniversaire de société), les budgets décoration florale peuvent monter très haut sans laisser de souvenir individualisé. Un stand floral animé inverse l'économie : pour le même budget, vos invités composent eux-mêmes un mini-bouquet ou un sachet aromatique, qu'ils emportent en repartant. La dépense devient une expérience mémorisée par chaque participant.",
      "Sur le plan opérationnel, un stand floral d'événement se calibre selon le flux estimé : pour 100 invités sur 3 heures, deux animatrices et deux postes simultanés suffisent ; au-delà, nous ajoutons un troisième poste. La scénographie du stand est soignée (bouquets de présentation abondants, signalétique discrète, mobilier en bois clair) pour que les photos prises par votre équipe communication soient exploitables tels quels. Nous coordonnons en amont avec votre agence événementielle si vous travaillez avec une.",
    ],
  },
  "evenement-printemps-entreprise-idf": {
    heading: "Pourquoi le printemps est la meilleure saison pour un événement extérieur",
    paragraphs: [
      "Les organisateurs d'événements entreprise francilien partagent un constat : la fenêtre météo fiable pour un événement extérieur en région parisienne se limite à mai-juin et septembre. En dehors de ces périodes, le risque pluie est trop élevé pour engager un budget logistique conséquent sans un plan B coûteux. Cette contrainte fait que les événements printemps sont parmi les plus stratégiques de l'année pour les directions communication et RH.",
      "Nos formats événement printemps en Île-de-France couvrent trois échelles : l'animation jardin demi-journée pour 50 à 100 participants, le marché de créateurs végétaux journée complète avec une dizaine de stands artisans, et la combinaison balade botanique + atelier composition pour les groupes plus restreints qui privilégient la profondeur du contenu. Nous coordonnons systématiquement avec votre prestataire logistique (tentes, mobilier, traiteur) et orientons vers nos partenaires habituels si vous n'en avez pas.",
    ],
  },
  "evenement-automne-entreprise-idf": {
    heading: "L'automne, palette végétale spectaculaire et fenêtre RSE majeure",
    paragraphs: [
      "Septembre à novembre constituent la deuxième fenêtre événementielle majeure de l'année après le printemps. La palette automnale francilienne (ocre, rouge, doré) offre un terrain visuel exceptionnel pour des compositions et des ateliers qui photographient particulièrement bien. C'est aussi la période où plusieurs labels structurants s'enchaînent : Fête de la Science en octobre, mois de la RSE en novembre, séquence de communication interne de Q4.",
      "Nos formats automne s'appuient sur les ressources de saison : feuilles stabilisées à la glycérine pour des compositions durables (technique précise qui transforme la feuille pendant des années), pigments d'automne (brou de noix, baies de sureau, écorces) pour des ateliers teinture aux couleurs profondes, terrariums saisonniers intégrant mousses humides et champignons stabilisés. C'est aussi la saison où nous proposons des formats demi-journée plus longs, parce que les équipes sont moins distraites qu'en juin.",
    ],
  },
  "evenement-hiver-entreprise-idf": {
    heading: "Janvier-février, créneau négligé à valoriser",
    paragraphs: [
      "Les services RH concentrent leurs investissements événementiels sur quelques pics annuels (printemps, été, fêtes de fin d'année) en sous-investissant systématiquement janvier-février. C'est dommage : ce sont précisément les mois où les équipes ont le plus besoin d'un coup de pouce moral, où les agendas sont les plus dégagés, et où les budgets nouveaux exercices arrivent frais. Programmer un atelier mi-janvier à mi-février, c'est obtenir une participation et une reconnaissance bien supérieures à ce que vous obtiendriez sur un atelier de juin perdu dans la Semaine QVCT.",
      "Sur le plan du contenu, nos formats hiver indoor exploitent les ressources de saison qui restent vivantes : plantes tropicales d'intérieur pour les terrariums humides, mousses fraîches, agrumes et épices pour les couronnes parfumées, infusions hivernales pour les ateliers tisanes. Côté tarif, les mois de janvier et février bénéficient d'un planning moins tendu, ce qui nous permet de proposer des conditions plus souples que sur la haute saison de printemps ou d'automne.",
    ],
  },
  "atelier-rentree-entreprise-paris": {
    heading: "Septembre à Paris, le marqueur de saison qui change l'année",
    paragraphs: [
      "Les psychologues du travail observent que la qualité de la première semaine de septembre détermine en grande partie le climat d'équipe du dernier trimestre. Une rentrée silencieuse, où chacun reprend son poste sans temps fort collectif, produit des trimestres ternes. Une rentrée marquée par un événement collectif (déjeuner d'équipe enrichi, atelier de cohésion, séminaire court) lance une dynamique qui se prolonge sur trois mois. C'est un investissement à fort effet de levier.",
      "Notre atelier de rentrée à Paris, calé sur la deuxième semaine de septembre, sert exactement ce rôle de marqueur. Le kokedama collectif fonctionne particulièrement bien parce qu'il est facile (personne ne se sent en difficulté technique), photographique, et produit un objet vivant qui reste sur les bureaux pendant tout le trimestre, faisant office de rappel discret de l'atelier vécu. Pour les équipes qui viennent d'accueillir de nouveaux arrivants pendant l'été, c'est aussi un excellent dispositif d'intégration informelle.",
    ],
  },
};
