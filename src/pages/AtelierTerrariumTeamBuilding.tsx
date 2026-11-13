import AtelierTeamBuildingPage, { type AtelierTeamBuildingConfig } from "@/components/AtelierTeamBuildingPage";
import { Users, Clock, MapPin, Coffee, BookOpen, Leaf } from "lucide-react";
import heroTerrarium from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import terrariumBocal from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import terrariumPrep from "@/assets/gallery-terrarium-fittonia-prep.jpg";
import fittoniaPots from "@/assets/gallery-fittonia-pots.jpg";
import miniTerrarium from "@/assets/gallery-mini-terrarium.jpeg";
import terrariumTable from "@/assets/event-terrarium-table.webp";
import terrariumMains from "@/assets/event-terrarium-mains.webp";
import terrariumSourire from "@/assets/event-terrarium-sourire.webp";
import terrariumSucculentes from "@/assets/gallery-terrarium.webp";
import wardPortrait from "@/assets/blog-terrarium-nathaniel-ward.png";
import wardianCase from "@/assets/blog-terrarium-wardian-case.jpg";

const CONFIG: AtelierTeamBuildingConfig = {
  slug: "/atelier-terrarium-team-building",
  seo: {
    title: "Atelier Terrarium Team Building Paris | Créatif & Naturel",
    description:
      "Atelier terrarium pour team building en entreprise à Paris et en Île-de-France : chacun crée son mini-écosystème et découvre l'histoire du terrarium. Dans vos locaux.",
    keywords:
      "terrarium team building Paris, atelier terrarium entreprise, team building nature Paris, animation cohésion équipe, atelier créatif entreprise, terrarium atelier, team building RSE Île-de-France",
  },
  schema: {
    serviceType: "Atelier terrarium team building",
    name: "Atelier Terrarium Team Building",
    description:
      "Atelier terrarium pour les équipes en entreprise : création d'un mini-écosystème en bocal et récit sur l'histoire culturelle du terrarium, dans vos locaux en Île-de-France.",
  },
  breadcrumbName: "Atelier terrarium team building",
  hero: {
    label: "Entreprises · CSE · Séminaires",
    titre: "Atelier terrarium",
    sousTitre: "Chacun crée son mini-écosystème en bocal, et toute l'équipe découvre l'étonnante histoire du terrarium.",
    grande: { src: terrariumSourire, alt: "Une participante compose son terrarium en souriant pendant un atelier en entreprise" },
    moyenne: { src: terrariumTable, alt: "Terrariums en bocal alignés et sacs kraft prêts à être emportés" },
    ronde: { src: terrariumSucculentes, alt: "Terrarium de succulentes et de mousse" },
    pastilleA: { haut: "1 bocal", bas: <>par personne,<br />à emporter</> },
    pastilleB: { haut: "2h", bas: "environ" },
  },
  garanties: ["Devis gratuit, réponse sous 48 h", "Tout le matériel fourni", "Un terrarium par participant", "Partout en Île-de-France"],
  infos: [
    { icon: Users, label: "12 à 40 participants", desc: "Par session · plus en rotation" },
    { icon: Clock, label: "1h30 à 2h30", desc: "Selon le format choisi" },
    { icon: MapPin, label: "Dans vos locaux", desc: "Partout en Île-de-France" },
  ],
  galerie: {
    ligne1: "Les mains",
    ligne2: "dans la mousse",
    photos: [
      { src: terrariumMains, alt: "Une participante dépose le substrat dans son bocal pendant l'atelier", label: "Composer" },
      { src: heroTerrarium, alt: "Un groupe d'adultes réalise des terrariums autour d'une table", label: "En équipe" },
      { src: terrariumSucculentes, alt: "Grand terrarium de succulentes, fougères et mousse", label: "Le résultat" },
      { src: terrariumBocal, alt: "Terrarium en bocal de verre avec fittonia et tradescantia, réalisé en atelier", label: "Fittonia" },
      { src: terrariumPrep, alt: "Préparation d'un terrarium : mousse, fittonia et graviers posés sur la table d'atelier", label: "Mousse & fittonia" },
      { src: fittoniaPots, alt: "Plantules de fittonia en godets, prêtes à être installées dans les terrariums", label: "Les plantes du jour" },
      { src: miniTerrarium, alt: "Mini terrarium en bocal réalisé lors d'un atelier", label: "Petit format" },
    ],
  },
  histoire: {
    label: "Notre signature",
    titre: ["Plus qu'un bocal :", "une histoire"],
    paragraphes: [
      "Au XIXe siècle, le médecin londonien Nathaniel Ward remarque qu'une fougère pousse toute seule dans un bocal fermé. Sa « Wardian case », l'ancêtre du terrarium, va permettre de transporter des plantes vivantes par bateau sur des milliers de kilomètres. Elle servira aussi à déplacer des plantes stratégiques d'un continent à l'autre, au service des empires coloniaux.",
      "C'est ce récit que nous partageons avec vos équipes pendant l'atelier. Il transforme une activité créative en vrai moment de découverte, et c'est ce qui distingue nos ateliers d'un simple kit de terrarium.",
    ],
    lien: { to: "/blog/terrarium-biopiraterie-histoire-coloniale", label: "Lire l'histoire complète sur le blog" },
    visuel: { src: wardPortrait, alt: "Portrait gravé de Nathaniel Ward, inventeur de la Wardian case", grayscale: true },
    rond: { src: wardianCase, alt: "Gravure d'une Wardian case, l'ancêtre du terrarium", contain: true },
    etiquette: "Nathaniel Ward · 1829",
  },
  etapes: [
    { step: "01", title: "Accueil", desc: "Présentation des plantes, des matériaux et du principe d'un écosystème clos." },
    { step: "02", title: "L'histoire du terrarium", desc: "Comment un simple bocal a fait voyager des plantes à travers le monde au XIXe siècle." },
    { step: "03", title: "Création", desc: "Drainage, substrat, plantes, mousse et décor : chacun compose son terrarium, accompagné pas à pas." },
    { step: "04", title: "Clôture", desc: "Conseils d'entretien, photo de groupe, et chacun repart avec sa création." },
  ],
  inclus: [
    "Tout le matériel : bocaux en verre, substrat, graviers, mousse, plantes et décor",
    "L'animation par Vanessa Charlery, ethnobotaniste formée à l'EHESS",
    "Un temps de récit sur l'histoire culturelle du terrarium",
    "Un accompagnement individuel pendant la création",
    "Un terrarium par participant, à emporter",
    "Une fiche de conseils d'entretien",
  ],
  pourquoi: {
    titre: ["Le terrarium pour", "votre équipe"],
    items: [
      {
        icon: Users,
        title: "Faire ensemble, repartir avec le sien",
        desc: "Chacun compose son propre terrarium, mais les matériaux, les idées et les coups de main circulent autour de la table.",
      },
      {
        icon: Coffee,
        title: "Une pause concrète",
        desc: "Les mains dans la terre et la mousse, loin des écrans : un moment calme et manuel qui change du quotidien de bureau.",
      },
      {
        icon: BookOpen,
        title: "Une histoire à raconter",
        desc: "Le terrarium a une histoire étonnante, liée aux voyages des plantes et à l'histoire coloniale. Vos équipes ne regarderont plus un bocal de la même façon.",
      },
      {
        icon: Leaf,
        title: "Une démarche RSE tangible",
        desc: "Une activité sobre en matériel, qui parle de biodiversité et laisse un objet vivant sur chaque bureau plutôt qu'un goodie jetable.",
      },
    ],
  },
  faq: [
    {
      q: "Combien de participants pour un atelier terrarium ?",
      a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée, sur devis.",
    },
    {
      q: "Combien de temps dure l'atelier ?",
      a: "Entre 1h30 et 2h30 selon le format : une version courte centrée sur la création, ou une version longue avec un vrai temps de récit sur l'histoire du terrarium.",
    },
    {
      q: "Où se déroule l'atelier ?",
      a: "Dans vos locaux, une salle de séminaire ou tout lieu équipé de tables, partout en Île-de-France. Nous apportons tout le matériel.",
    },
    {
      q: "Comment est calculé le tarif ?",
      a: "Le tarif dépend du nombre de participants, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
    },
  ],
  autres: {
    texte: "Kokedama, teinture végétale, bombes à graines, sachets de senteurs… Une vingtaine d'ateliers, tous adaptables à votre événement.",
    liens: [
      { to: "/atelier-kokedama-team-building", label: "Kokedama" },
      { to: "/atelier-teinture-vegetale-team-building", label: "Teinture" },
      { to: "/atelier-bombes-a-graines-team-building", label: "Bombes à graines" },
      { to: "/workshops", label: "Tous les ateliers" },
    ],
  },
  devis: {
    titre: ["Prêt·e à créer", "ensemble ?"],
    texte: "Dites-nous votre effectif, votre lieu et le temps dont vous disposez : nous vous envoyons une proposition sur mesure.",
    atelierTitle: "Atelier terrarium team building",
  },
};

const AtelierTerrariumTeamBuilding = () => <AtelierTeamBuildingPage c={CONFIG} />;

export default AtelierTerrariumTeamBuilding;
