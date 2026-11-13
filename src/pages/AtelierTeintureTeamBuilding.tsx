import AtelierTeamBuildingPage, { type AtelierTeamBuildingConfig } from "@/components/AtelierTeamBuildingPage";
import { Users, Clock, MapPin, Sparkles, Palette, BookOpen, Leaf } from "lucide-react";
import imgPetales from "@/assets/event-teinture-petales.webp";
import imgSoies from "@/assets/event-soies-suspendues.webp";
import imgPotFil from "@/assets/gallery-teinture-2.webp";
import imgFanionsGalerie from "@/assets/gallery-teinture-1.webp";
import imgFilBleu from "@/assets/gallery-teinture-3.webp";
import imgBain from "@/assets/gallery-teinture-chou-rouge-bain.webp";
import imgFanionMain from "@/assets/teinture-fanion-main.webp";
import imgChouRouge from "@/assets/teinture-chou-rouge-filtre.webp";
import imgTshirts from "@/assets/gallery-teinture-tshirts-table.webp";

const CONFIG: AtelierTeamBuildingConfig = {
  slug: "/atelier-teinture-vegetale-team-building",
  seo: {
    title: "Atelier Teinture Végétale Team Building Paris & IDF",
    description:
      "Atelier teinture végétale pour team building en entreprise à Paris et en Île-de-France : extraire la couleur des plantes, teindre ensemble et découvrir l'histoire des couleurs.",
    keywords:
      "teinture végétale team building, atelier teinture végétale entreprise, team building créatif Paris, atelier couleurs naturelles, team building RSE Île-de-France, eco print entreprise",
  },
  schema: {
    serviceType: "Atelier teinture végétale team building",
    name: "Atelier Teinture Végétale Team Building",
    description:
      "Atelier teinture végétale pour les équipes en entreprise : extraction de couleurs à partir de plantes, teinture et impression végétale, récit sur l'histoire des couleurs, dans vos locaux en Île-de-France.",
  },
  breadcrumbName: "Atelier teinture végétale team building",
  hero: {
    label: "Entreprises · CSE · Séminaires",
    titre: "Atelier teinture végétale",
    sousTitre: "Extraire la couleur des plantes, teindre ensemble et voir surgir des teintes que personne n'attendait.",
    grande: { src: imgPetales, alt: "Une participante dispose des pétales sur un carré de soie pour une impression végétale" },
    moyenne: { src: imgSoies, alt: "Carrés de soie imprimés aux fleurs, suspendus devant une fenêtre" },
    ronde: { src: imgPotFil, alt: "Pot de teinture bleue et fil coloré sur une assiette" },
    pastilleA: { haut: "1 tissu", bas: <>teint par chacun,<br />à emporter</> },
    pastilleB: { haut: "100%", bas: "végétal" },
  },
  garanties: ["Devis gratuit, réponse sous 48 h", "Tout le matériel fourni", "Une création par participant", "Partout en Île-de-France"],
  infos: [
    { icon: Users, label: "12 à 40 participants", desc: "Par session · plus en rotation" },
    { icon: Clock, label: "2h à 2h30", desc: "Selon le format choisi" },
    { icon: MapPin, label: "Dans vos locaux", desc: "Partout en Île-de-France" },
  ],
  galerie: {
    ligne1: "Des couleurs",
    ligne2: "tirées des plantes",
    photos: [
      { src: imgPetales, alt: "Impression de pétales sur soie pendant l'atelier", label: "Imprimer" },
      { src: imgSoies, alt: "Carrés de soie teints aux plantes, suspendus à la fenêtre", label: "Le séchage" },
      { src: imgChouRouge, alt: "Chou rouge égoutté au-dessus d'un bain de teinture violet", label: "Chou rouge" },
      { src: imgBain, alt: "Bain de teinture violet foncé au chou rouge dans un saladier inox", label: "Le bain" },
      { src: imgFilBleu, alt: "Fil teint en bleu posé sur un carré de tissu", label: "Fil teint au bleu" },
      { src: imgFanionsGalerie, alt: "Fanions de tissu teints en bleu et en rose aux couleurs végétales", label: "Le résultat" },
      { src: imgTshirts, alt: "T-shirts teints aux plantes sur la table d'atelier", label: "Sur textile" },
    ],
  },
  histoire: {
    label: "Notre signature",
    titre: ["Plus qu'une couleur :", "une histoire"],
    paragraphes: [
      "Pendant des millénaires, toutes les couleurs des tissus venaient des plantes, des insectes ou des minéraux : la garance pour le rouge, l'indigo et le pastel pour le bleu, la gaude pour le jaune. Le pastel a fait la fortune du pays toulousain à la Renaissance, avant d'être détrôné par l'indigo importé, puis par les colorants de synthèse au XIXe siècle.",
      "Pendant l'atelier, vos équipes découvrent ces histoires et voient la chimie des plantes à l'œuvre : le jus de chou rouge passe du violet au rose ou au bleu selon l'acidité du bain. Un moment de surprise qui fait toujours réagir.",
    ],
    lien: { to: "/blog/teinture-vegetale-chou-rouge-indigo-naturel", label: "Lire notre article sur le chou rouge" },
    visuel: { src: imgFanionMain, alt: "Une main tient un fanion de coton teint en rose au chou rouge" },
    rond: { src: imgChouRouge, alt: "Chou rouge égoutté au-dessus d'un bain de teinture" },
    etiquette: "Chou rouge · indigo",
  },
  etapes: [
    { step: "01", title: "Accueil", desc: "Découverte des plantes tinctoriales du jour et des bains de couleur préparés." },
    { step: "02", title: "L'histoire des couleurs", desc: "Garance, pastel, indigo : comment les plantes ont coloré le monde avant la chimie de synthèse." },
    { step: "03", title: "Création", desc: "Plier, nouer, imprimer des pétales ou plonger le tissu dans les bains, accompagné pas à pas." },
    { step: "04", title: "Clôture", desc: "Rinçage, séchage, photo de groupe, et chacun repart avec son tissu teint." },
  ],
  inclus: [
    "Tout le matériel : tissus en fibres naturelles, plantes et bains de teinture, ficelles, gants et protections",
    "L'animation par Vanessa Charlery, ethnobotaniste formée à l'EHESS",
    "Un temps de récit sur l'histoire des couleurs végétales",
    "Un accompagnement individuel pendant la création",
    "Une création teinte par participant, à emporter",
    "Une fiche pour refaire une teinture végétale chez soi",
  ],
  pourquoi: {
    titre: ["La teinture pour", "votre équipe"],
    items: [
      {
        icon: Users,
        title: "Créer à plusieurs",
        desc: "Les bains de couleur se partagent : on compare, on mélange, on s'échange des astuces. Un format qui fonctionne très bien avec les grands groupes.",
      },
      {
        icon: Sparkles,
        title: "La surprise du résultat",
        desc: "Au moment de dénouer le tissu, la couleur se révèle. Chacun découvre un motif unique, et c'est souvent le moment le plus joyeux de l'atelier.",
      },
      {
        icon: BookOpen,
        title: "Une histoire à raconter",
        desc: "Derrière chaque couleur, des plantes, des routes commerciales et des savoir-faire anciens. Vos équipes ne regarderont plus un vêtement de la même façon.",
      },
      {
        icon: Leaf,
        title: "Une démarche RSE tangible",
        desc: "Des couleurs tirées de plantes et même d'épluchures de cuisine : une façon concrète de parler de textile, de chimie et de sobriété.",
      },
    ],
  },
  faq: [
    {
      q: "Combien de participants pour un atelier teinture végétale ?",
      a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée, sur devis.",
    },
    {
      q: "Combien de temps dure l'atelier ?",
      a: "Entre 2h et 2h30 selon le format : impression de pétales, teinture par nouage, ou les deux avec un vrai temps de récit sur l'histoire des couleurs.",
    },
    {
      q: "Quel espace faut-il prévoir ?",
      a: "Une salle avec des tables suffit, dans vos locaux ou en extérieur. Nous protégeons les tables et apportons tout le matériel ; un point d'eau à proximité facilite le rinçage.",
    },
    {
      q: "Comment est calculé le tarif ?",
      a: "Le tarif dépend du nombre de participants, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
    },
  ],
  autres: {
    texte: "Terrarium, kokedama, bombes à graines, sachets de senteurs… Une vingtaine d'ateliers, tous adaptables à votre événement.",
    liens: [
      { to: "/atelier-terrarium-team-building", label: "Terrarium" },
      { to: "/atelier-kokedama-team-building", label: "Kokedama" },
      { to: "/atelier-bombes-a-graines-team-building", label: "Bombes à graines" },
      { to: "/workshops", label: "Tous les ateliers" },
    ],
  },
  devis: {
    titre: ["Prêt·e à créer", "ensemble ?"],
    texte: "Dites-nous votre effectif, votre lieu et le temps dont vous disposez : nous vous envoyons une proposition sur mesure.",
    atelierTitle: "Atelier teinture végétale team building",
  },
};


const AtelierTeintureTeamBuilding = () => <AtelierTeamBuildingPage c={CONFIG} />;

export default AtelierTeintureTeamBuilding;
