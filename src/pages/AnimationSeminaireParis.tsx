import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const AnimationSeminaireParis = () => (
  <OccasionTemplate data={{
    slug: "animation-seminaire-entreprise-paris",
    icon: Sparkles,
    eyebrow: "Séminaire entreprise",
    title: "Animation séminaire entreprise à Paris",
    metaTitle: "Animation séminaire entreprise à Paris, atelier botanique original",
    metaDesc: "Animation séminaire entreprise à Paris autour du végétal. Module ou journée complète, terrarium, kokedama, balade ou teinture pour vos équipes.",
    pitch: "Une animation qui ne ressemble pas aux autres. Un temps végétal en plein milieu de votre séminaire, qui crée du lien autrement et marque durablement les esprits.",
    why: [
      { title: "Sortir du cadre", desc: "Un temps manuel et calme qui change radicalement de la dynamique d'un séminaire classique." },
      { title: "Créer du lien", desc: "Les ateliers font tomber les rôles et les hiérarchies. Les équipes se redécouvrent." },
      { title: "Souvenir tangible", desc: "Chaque participant·e repart avec sa création, qui rappellera le séminaire pendant des mois." },
    ],
    formula: [
      { line: "Module 2h", detail: "Inséré dans une journée plus large, idéal en fin de matinée ou d'après-midi." },
      { line: "Demi-journée", detail: "Atelier complet plus balade ethnobotanique dans un parc proche de votre lieu." },
      { line: "Journée complète", detail: "Programme sur mesure mêlant ateliers, balade, conférence et restitution." },
      { line: "Format hybride", detail: "Combinaison d'atelier sur site et de balade extérieure, particulièrement apprécié au printemps." },
    ],
    practical: [
      { label: "Durée", value: "2h à 1 journée" },
      { label: "Groupe", value: "10 à 60 pers." },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Tarif", value: "Sur devis" },
    ],
    related: [
      { to: "/team-building-nature-entreprise", label: "Team building" },
      { to: "/balade-botanique-entreprise-cse", label: "Balade entreprise" },
      { to: "/animation-soiree-entreprise-vegetale", label: "Soirée entreprise" },
    ],
    faqs: [
      { q: "Pour combien de personnes ?", a: "À partir de dix personnes et jusqu'à soixante. Au-delà, nous proposons un format double animatrice." },
      { q: "Format en région parisienne uniquement ?", a: "Nous intervenons principalement en Île-de-France. Sur demande, nous étudions des déplacements ailleurs en France." },
      { q: "Délai de réservation ?", a: "Idéalement six à huit semaines à l'avance pour caler les agendas." },
      { q: "Adaptation à votre charte ?", a: "Oui, sur devis. Nous adaptons la communication, les supports et certaines créations à votre identité." },
    ],
  }} />
);
export default AnimationSeminaireParis;
