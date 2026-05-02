import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const AtelierNoelCouronneVegetale = () => (
  <OccasionTemplate data={{
    slug: "atelier-noel-couronne-vegetale-paris",
    icon: Sparkles,
    eyebrow: "Saison de Noël",
    title: "Atelier couronne de Noël végétale à Paris",
    metaTitle: "Atelier couronne de Noël végétale à Paris, décoration naturelle",
    metaDesc: "Atelier couronne de Noël végétale à Paris. Composez votre couronne en plantes fraîches et matières naturelles pour les fêtes.",
    pitch: "Composer sa propre couronne de Noël, à partir de plantes fraîches, de mousses, de baies et de matières trouvées. Un geste ancien, qui prépare doucement à l'hiver.",
    why: [
      { title: "Saisonnier", desc: "Une activité parfaitement ancrée dans le rythme de l'année, qui marque l'entrée dans les fêtes." },
      { title: "Vivant", desc: "Pas de plastique, pas de paillettes : que des matières naturelles qui dégagent une vraie présence." },
      { title: "Souvenir", desc: "Une couronne qui sera affichée pendant toutes les fêtes, et même séchée pour les années suivantes." },
    ],
    formula: [
      { line: "Accueil", detail: "Présentation des matières disponibles, sapin, eucalyptus, baies, mousses, branches sèches." },
      { line: "Histoire", detail: "Une courte mise en contexte sur les couronnes végétales, du paganisme au christianisme." },
      { line: "Composition", detail: "Atelier guidé, structure, mise en place des végétaux, finitions." },
      { line: "Repartir", detail: "Vous repartez avec votre couronne prête à être suspendue chez vous." },
    ],
    practical: [
      { label: "Durée", value: "2h" },
      { label: "Période", value: "Novembre à décembre" },
      { label: "Groupe", value: "6 à 14 pers." },
      { label: "Prix", value: "À partir de 55 €" },
    ],
    related: [
      { to: "/cadeau-original-nature-paris", label: "Idée cadeau" },
      { to: "/atelier-terrarium-paris", label: "Terrarium" },
      { to: "/agenda", label: "Agenda" },
    ],
    faqs: [
      { q: "Quelle est la durée de vie d'une couronne ?", a: "Une couronne fraîche tient bien deux à trois semaines à l'intérieur, plus longtemps à l'extérieur ou si elle sèche bien." },
      { q: "Quelle taille de couronne ?", a: "Diamètre standard de 25 à 30 cm. Possibilité de personnaliser sur demande." },
      { q: "Format en entreprise possible ?", a: "Oui. Excellent format pour les pots de fin d'année, séminaires de décembre, animations CSE." },
      { q: "Quand réserver ?", a: "Les sessions de novembre et décembre se remplissent vite, idéalement en octobre." },
    ],
  }} />
);
export default AtelierNoelCouronneVegetale;
