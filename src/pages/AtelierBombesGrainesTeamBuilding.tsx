import AtelierTeamBuildingPage, { type AtelierTeamBuildingConfig } from "@/components/AtelierTeamBuildingPage";
import { Users, Clock, MapPin, Flower2, Smile, BookOpen, Sprout } from "lucide-react";
import imgSechage from "@/assets/gallery-bombes-graines-sechage.webp";
import imgGroupe from "@/assets/gallery-workshop-group.webp";
import imgMains from "@/assets/gallery-bombes-graines-mains.webp";
import imgSeau from "@/assets/gallery-bombes-graines-seau.webp";
import imgGermee from "@/assets/blog-bombes-graines-germee.webp";
import imgGraines from "@/assets/graines-melange-melliferes.webp";

const CONFIG: AtelierTeamBuildingConfig = {
  slug: "/atelier-bombes-a-graines-team-building",
  prairie: true,
  seo: {
    title: "Atelier Bombes à Graines Team Building Paris & IDF",
    description:
      "Atelier bombes à graines pour team building en entreprise à Paris et en Île-de-France : fabriquer des bombes de fleurs mellifères et parler de biodiversité en ville.",
    keywords:
      "bombes à graines team building, atelier bombes de graines entreprise, team building biodiversité, team building RSE Paris, animation développement durable entreprise, nendo dango atelier",
  },
  schema: {
    serviceType: "Atelier bombes à graines team building",
    name: "Atelier Bombes à Graines Team Building",
    description:
      "Atelier bombes à graines pour les équipes en entreprise : fabrication de bombes de fleurs sauvages et mellifères, récit sur leur histoire et sur la nature en ville, dans vos locaux en Île-de-France.",
  },
  breadcrumbName: "Atelier bombes à graines team building",
  hero: {
    label: "Entreprises · CSE · Journées RSE",
    titre: "Atelier bombes à graines",
    sousTitre: "Rouler l'argile, la terre et les graines entre ses mains, puis semer des fleurs pour les abeilles. Simple, joyeux et utile.",
    grande: { src: imgSechage, alt: "Bombes à graines alignées sur des cartons en train de sécher" },
    moyenne: { src: imgGroupe, alt: "Un groupe de participants les mains dans la terre pendant un atelier" },
    ronde: { src: imgSechage, alt: "Vidéo : des mains roulent une bombe à graines pendant l'atelier", video: "/videos/workshop-seed-bombs.mp4" },
    pastilleA: { haut: "1 sachet", bas: <>de bombes<br />à semer</> },
    pastilleB: { haut: "1h30", bas: "environ" },
  },
  garanties: ["Devis gratuit, réponse sous 48 h", "Tout le matériel fourni", "Des bombes à graines pour chacun", "Partout en Île-de-France"],
  infos: [
    { icon: Users, label: "12 à 40 participants", desc: "Par session. Au-delà, nous organisons plusieurs sessions en rotation dans la journée." },
    { icon: Clock, label: "1h à 1h30", desc: "Un format court, facile à caler dans un séminaire ou une journée RSE." },
    { icon: MapPin, label: "Partout en Île-de-France", desc: "Dans vos locaux, ou en extérieur dans un parc ou un jardin selon la saison." },
  ],
  galerie: {
    ligne1: "Argile, terre",
    ligne2: "et graines",
    photos: [
      { src: imgMains, alt: "Mains couvertes de terre qui roulent une bombe à graines au-dessus d'un seau", label: "On roule la boule" },
      { src: imgGraines, alt: "Mélange de graines de fleurs mellifères utilisé pour les bombes à graines", label: "Les graines mellifères" },
      { src: imgSechage, alt: "Bombes à graines en train de sécher sur la table", label: "Le séchage" },
      { src: imgSeau, alt: "Mains pleines de terre au-dessus d'un seau de mélange argile et compost", label: "Les mains dans la terre" },
      { src: imgGroupe, alt: "Un groupe réuni autour d'un atelier botanique", label: "En équipe" },
    ],
  },
  histoire: {
    label: "Notre signature",
    titre: ["Plus qu'une boule de terre :", "une histoire"],
    paragraphes: [
      <>
        Au Japon, l'agriculteur Masanobu Fukuoka enrobait ses semences d'argile pour les protéger des oiseaux et du soleil : ce sont les <em>nendo dango</em>, les
        « boulettes d'argile ». Il en a fait l'un des gestes de son agriculture naturelle, racontée dans <em>La Révolution d'un seul brin de paille</em>.
      </>,
      "Dans les années 1970 à New York, des jardiniers militants lançaient des bombes de graines par-dessus les grillages des terrains vagues pour y faire pousser des fleurs. Pendant l'atelier, nous partageons ces histoires avec vos équipes, et ce qu'elles disent de la nature en ville.",
    ],
    lien: { to: "/blog/histoire-bombes-de-graines-atelier-la-celle-saint-cloud", label: "Lire l'histoire des bombes de graines" },
    visuel: { src: imgSechage, alt: "Bombes à graines alignées sur des cartons en train de sécher" },
    rond: {
      src: imgGermee,
      alt: "Une bombe à graines posée sur le sol, d'où sortent de jeunes pousses vertes",
      credit: "Photo Bagusnyamuk, CC BY 3.0, Wikimedia Commons",
    },
    etiquette: "Nendo dango",
  },
  etapes: [
    { step: "01", title: "Accueil", desc: "Présentation des graines du jour, des fleurs qu'elles donneront et des insectes qu'elles nourrissent." },
    { step: "02", title: "L'histoire des bombes", desc: "Des rizières de Masanobu Fukuoka aux jardiniers militants de New York." },
    { step: "03", title: "Création", desc: "Mélanger argile, terre et graines, rouler les boules à la main, puis les mettre à sécher." },
    { step: "04", title: "Clôture", desc: "Conseils pour bien semer, photo de groupe, et chacun repart avec ses bombes à graines." },
  ],
  inclus: [
    "Tout le matériel : argile, terreau, graines de fleurs sauvages et mellifères, sachets kraft",
    "L'animation par Vanessa Charlery, ethnobotaniste formée à l'EHESS",
    "Un temps de récit sur l'histoire des bombes à graines",
    "Un accompagnement pendant toute la fabrication",
    "Un sachet de bombes à graines par participant",
    "Une fiche avec les bons gestes pour semer",
  ],
  pourquoi: {
    titre: ["Les bombes à graines pour", "votre équipe"],
    items: [
      {
        icon: Users,
        title: "Idéal pour les grands groupes",
        desc: "Un geste simple que tout le monde maîtrise en quelques minutes : parfait pour une journée RSE, un séminaire ou un grand rassemblement.",
      },
      {
        icon: Smile,
        title: "Ludique et un peu salissant",
        desc: "On met les mains dans l'argile, on rit, on compare la taille de ses boules : une parenthèse joyeuse qui casse la routine.",
      },
      {
        icon: BookOpen,
        title: "Une histoire à raconter",
        desc: "Derrière la petite boule de terre, une philosophie agricole japonaise et un mouvement de jardiniers urbains. De quoi nourrir les conversations.",
      },
      {
        icon: Flower2,
        title: "Un geste concret pour la biodiversité",
        desc: "Chacun repart avec de quoi semer des fleurs pour les pollinisateurs : une action RSE visible, qui continue de pousser après l'atelier.",
      },
    ],
  },
  faq: [
    {
      q: "Combien de participants pour un atelier bombes à graines ?",
      a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée, sur devis.",
    },
    {
      q: "Combien de temps dure l'atelier ?",
      a: "Entre 1h et 1h30 : un format court, facile à placer dans un séminaire ou une journée RSE.",
    },
    {
      q: "Où et quand semer les bombes à graines ?",
      a: "Dans un jardin, une jardinière ou un coin de terre nue, de préférence à l'automne ou au printemps, juste avant une pluie. Chaque participant repart avec une fiche de conseils.",
    },
    {
      q: "Comment est calculé le tarif ?",
      a: "Le tarif dépend du nombre de participants, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
    },
  ],
  autres: {
    texte: "Terrarium, kokedama, teinture végétale, sachets de senteurs… Une vingtaine d'ateliers, tous adaptables à votre événement.",
    liens: [
      { to: "/atelier-terrarium-team-building", label: "Terrarium" },
      { to: "/atelier-kokedama-team-building", label: "Kokedama" },
      { to: "/atelier-teinture-vegetale-team-building", label: "Teinture" },
      { to: "/workshops", label: "Tous les ateliers" },
    ],
  },
  devis: {
    titre: ["Prêt·e à semer", "ensemble ?"],
    texte: "Dites-nous votre effectif, votre lieu et le temps dont vous disposez : nous vous envoyons une proposition sur mesure.",
    atelierTitle: "Atelier bombes à graines team building",
  },
};

const AtelierBombesGrainesTeamBuilding = () => <AtelierTeamBuildingPage c={CONFIG} />;

export default AtelierBombesGrainesTeamBuilding;
