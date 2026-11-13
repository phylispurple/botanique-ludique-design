import AtelierTeamBuildingPage, { type AtelierTeamBuildingConfig } from "@/components/AtelierTeamBuildingPage";
import { Users, Clock, MapPin, Wind, MessagesSquare, BookOpen, Sprout } from "lucide-react";
import imgGroupe from "@/assets/gallery-workshop-group.webp";
import imgCollection from "@/assets/gallery-kokedama-collection.jpg";
import imgTradescantia from "@/assets/gallery-kokedama-tradescantia.jpg";
import imgMains from "@/assets/event-kokedama-mains.webp";
import imgGodets from "@/assets/kokedama-plantes-godets.webp";

const CONFIG: AtelierTeamBuildingConfig = {
  slug: "/atelier-kokedama-team-building",
  seo: {
    title: "Atelier Kokedama Team Building | Art Japonais & Cohésion d'Équipe",
    description:
      "Atelier kokedama pour team building en entreprise à Paris et en Île-de-France : chacun façonne sa boule de mousse et découvre l'histoire de cet art végétal japonais.",
    keywords: "kokedama team building, atelier kokedama entreprise, team building créatif, kokedama Paris, art japonais atelier, team building nature Île-de-France",
  },
  schema: {
    serviceType: "Atelier kokedama team building",
    name: "Atelier Kokedama Team Building",
    description:
      "Atelier kokedama pour les équipes en entreprise : façonnage d'une boule de mousse autour d'une plante et récit sur cet art végétal japonais, dans vos locaux en Île-de-France.",
  },
  breadcrumbName: "Atelier kokedama team building",
  hero: {
    label: "Entreprises · CSE · Séminaires",
    titre: "Atelier kokedama",
    sousTitre: "Chacun façonne sa boule de mousse autour d'une plante, et toute l'équipe découvre un art végétal venu du Japon.",
    grande: { src: imgMains, alt: "Une participante façonne un kokedama au-dessus de la table d'atelier" },
    moyenne: { src: imgGroupe, alt: "Un groupe de participants pendant un atelier botanique" },
    ronde: { src: imgTradescantia, alt: "Kokedama de tradescantia posé sur la table" },
    pastilleA: { haut: "1 boule", bas: <>de mousse<br />par personne</> },
    pastilleB: { haut: "2h", bas: "environ" },
  },
  garanties: ["Devis gratuit, réponse sous 48 h", "Tout le matériel fourni", "Un kokedama par participant", "Partout en Île-de-France"],
  infos: [
    { icon: Users, label: "12 à 40 participants", desc: "Par session · plus en rotation" },
    { icon: Clock, label: "1h30 à 2h", desc: "Selon le format choisi" },
    { icon: MapPin, label: "Dans vos locaux", desc: "Partout en Île-de-France" },
  ],
  galerie: {
    ligne1: "Terre, mousse",
    ligne2: "et fil de coton",
    photos: [
      { src: imgMains, alt: "Façonnage d'un kokedama lors d'un atelier en entreprise", label: "Façonner" },
      { src: imgTradescantia, alt: "Kokedama de tradescantia terminé", label: "Tradescantia" },
      { src: imgCollection, alt: "Collection de kokedamas réalisés en atelier", label: "La collection" },
      { src: imgGodets, alt: "Plantes en godets prêtes à devenir des kokedamas", label: "Les plantes du jour" },
      { src: imgGroupe, alt: "Participants réunis autour de la table d'atelier", label: "En équipe" },
    ],
  },
  histoire: {
    label: "Notre signature",
    titre: ["Plus qu'une boule :", "une culture"],
    paragraphes: [
      <>
        En japonais, <em>koke</em> désigne la mousse et <em>dama</em> la boule. On rattache souvent le kokedama à l'univers du bonsaï : au lieu de cacher les
        racines dans un pot, on les enveloppe de terre et de mousse, et la plante devient une petite sculpture.
      </>,
      "Au Japon, la mousse est cultivée et admirée pour elle-même, jusque dans les jardins de temples comme le Saihō-ji de Kyoto, surnommé le temple des mousses. C'est cette histoire, et ce qu'elle dit de notre rapport au temps et à la lenteur, que nous partageons avec vos équipes pendant l'atelier.",
    ],
    lien: { to: "/guide/comment-faire-un-kokedama", label: "Lire notre guide du kokedama" },
    visuel: { src: imgCollection, alt: "Vidéo : fabrication d'un kokedama en atelier", video: "/videos/workshop-kokedama-atelier.mp4" },
    rond: { src: imgTradescantia, alt: "Kokedama de tradescantia" },
    etiquette: "Koke · dama",
  },
  etapes: [
    { step: "01", title: "Accueil", desc: "Présentation des plantes, de la mousse et des gestes du jour." },
    { step: "02", title: "L'histoire du kokedama", desc: "La place de la mousse dans les jardins japonais, et ce qu'elle nous dit de notre rapport au temps." },
    { step: "03", title: "Création", desc: "Façonner la boule de substrat, l'habiller de mousse et la nouer au fil, accompagné pas à pas." },
    { step: "04", title: "Clôture", desc: "Conseils d'entretien, photo de groupe, et chacun repart avec son kokedama." },
  ],
  inclus: [
    "Tout le matériel : plantes, substrat, mousse, fil de coton et soucoupes",
    "L'animation par Vanessa Charlery, ethnobotaniste formée à l'EHESS",
    "Un temps de récit sur l'histoire et la culture du kokedama",
    "Un accompagnement individuel pendant la création",
    "Un kokedama par participant, à emporter",
    "Une fiche de conseils d'entretien",
  ],
  pourquoi: {
    titre: ["Le kokedama pour", "votre équipe"],
    items: [
      { icon: Wind, title: "Un geste lent, qui apaise", desc: "Façonner la terre, presser la mousse, nouer le fil : un atelier manuel et calme, loin des écrans et de l'agenda." },
      {
        icon: MessagesSquare,
        title: "Des conversations qui viennent seules",
        desc: "Les mains occupées, on se parle autrement. On s'aide pour tenir la boule pendant que l'autre noue le fil.",
      },
      {
        icon: BookOpen,
        title: "Une histoire à raconter",
        desc: "Derrière la boule de mousse, une culture japonaise du jardin et de la patience. Vos équipes repartent avec un objet et une histoire.",
      },
      { icon: Sprout, title: "Un souvenir vivant", desc: "Le kokedama se pose sur une soucoupe ou se suspend, et vit des années avec un simple arrosage par trempage." },
    ],
  },
  faq: [
    {
      q: "Combien de participants pour un atelier kokedama ?",
      a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée, sur devis.",
    },
    {
      q: "Combien de temps dure l'atelier ?",
      a: "Entre 1h30 et 2h selon le format : une version centrée sur la création, ou une version avec un vrai temps de récit sur l'histoire du kokedama.",
    },
    {
      q: "Comment entretenir son kokedama ?",
      a: "Il suffit de le tremper dans l'eau quelques minutes quand la boule devient légère, puis de le laisser s'égoutter. Chaque participant repart avec une fiche d'entretien.",
    },
    {
      q: "Comment est calculé le tarif ?",
      a: "Le tarif dépend du nombre de participants, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
    },
  ],
  autres: {
    texte: "Terrarium, teinture végétale, bombes à graines, sachets de senteurs… Une vingtaine d'ateliers, tous adaptables à votre événement.",
    liens: [
      { to: "/atelier-terrarium-team-building", label: "Terrarium" },
      { to: "/atelier-teinture-vegetale-team-building", label: "Teinture" },
      { to: "/atelier-bombes-a-graines-team-building", label: "Bombes à graines" },
      { to: "/workshops", label: "Tous les ateliers" },
    ],
  },
  devis: {
    titre: ["Prêt·e à créer", "ensemble ?"],
    texte: "Dites-nous votre effectif, votre lieu et le temps dont vous disposez : nous vous envoyons une proposition sur mesure.",
    atelierTitle: "Atelier kokedama team building",
  },
};

const AtelierKokedamaTeamBuilding = () => <AtelierTeamBuildingPage c={CONFIG} />;

export default AtelierKokedamaTeamBuilding;
