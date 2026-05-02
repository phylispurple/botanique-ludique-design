import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const AtelierAnniversaireEnfantParis = () => (
  <OccasionTemplate data={{
    slug: "atelier-anniversaire-enfant-nature-paris",
    icon: Sparkles,
    eyebrow: "Anniversaire enfant nature",
    title: "Atelier anniversaire enfant nature à Paris",
    metaTitle: "Anniversaire enfant nature à Paris, atelier botanique ludique",
    metaDesc: "Atelier anniversaire enfant nature à Paris. Animation botanique ludique pour enfants, mini terrariums, herbier ou bombes à graines.",
    pitch: "Une animation d'anniversaire qui sort de l'ordinaire, sans écran ni paillettes. Les enfants plongent les mains dans la terre, observent, fabriquent et repartent avec leur création vivante.",
    why: [
      { title: "Ludique", desc: "Une animation pensée pour le rythme et la curiosité des enfants, avec un vrai contenu pédagogique caché derrière le jeu." },
      { title: "Manuel", desc: "Les enfants manipulent, semblent, plantent. Un moment hors écran qui leur fait du bien." },
      { title: "Souvenir", desc: "Chaque enfant repart avec sa création, mini terrarium, herbier ou bombes à graines mellifères." },
    ],
    formula: [
      { line: "Accueil", detail: "Petit jeu d'introduction pour rentrer ensemble dans l'univers des plantes." },
      { line: "Découverte", detail: "Une histoire courte adaptée à l'âge des enfants, autour des graines, des fleurs ou des arbres." },
      { line: "Création", detail: "Atelier manuel adapté aux 5 à 11 ans, encadré par notre médiatrice." },
      { line: "Goûter", detail: "Possibilité d'ajouter un goûter végétal, en option, pour clôturer en beauté." },
    ],
    practical: [
      { label: "Durée", value: "1h30 à 2h" },
      { label: "Âge", value: "5 à 11 ans" },
      { label: "Groupe", value: "6 à 12 enfants" },
      { label: "Lieu", value: "Paris et IDF" },
    ],
    testimonialMood: "Les enfants en ont parlé pendant des semaines.",
    related: [
      { to: "/atelier-botanique-enfant-paris", label: "Ateliers enfants" },
      { to: "/animation-scolaire-nature", label: "Animations scolaires" },
      { to: "/atelier-anniversaire-adulte-nature-paris", label: "Anniversaire adulte" },
    ],
    faqs: [
      { q: "À partir de quel âge ?", a: "Nous recommandons à partir de 5 ans. Les ateliers sont adaptés à la tranche d'âge précise des enfants invités." },
      { q: "Vous déplacez-vous à domicile ?", a: "Oui, à domicile, en salle louée ou en parc selon la météo et votre choix." },
      { q: "Pour combien d'enfants ?", a: "De 6 à 12 enfants pour un encadrement de qualité. Au-delà, nous prévoyons une seconde animatrice." },
      { q: "Goûter inclus ?", a: "Pas par défaut. Nous proposons en option un goûter végétal simple et adapté aux enfants." },
    ],
  }} />
);
export default AtelierAnniversaireEnfantParis;
