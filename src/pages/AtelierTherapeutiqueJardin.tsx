import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const AtelierTherapeutiqueJardin = () => (
  <OccasionTemplate data={{
    slug: "atelier-therapeutique-jardin",
    icon: Heart,
    eyebrow: "Hortithérapie",
    title: "Atelier thérapeutique jardin et hortithérapie",
    metaTitle: "Atelier thérapeutique jardin et hortithérapie en Île-de-France",
    metaDesc: "Atelier thérapeutique jardin et hortithérapie pour structures médico-sociales, hôpitaux, IME et résidences spécialisées en Île-de-France.",
    pitch: "L'hortithérapie utilise le jardin et les plantes comme support de soin et d'accompagnement. Un format pensé pour les structures médico-sociales, hôpitaux, IME et services de soins de suite.",
    why: [
      { title: "Apaisant", desc: "Le contact avec les plantes a des effets démontrés sur l'anxiété, la concentration et l'humeur." },
      { title: "Stimulant", desc: "La motricité fine, les sens et la mémoire sont sollicités sans pression performative." },
      { title: "Inclusif", desc: "Adaptable à des publics très variés : seniors, personnes en situation de handicap, jeunes en difficulté." },
    ],
    formula: [
      { line: "Évaluation", detail: "Premier échange pour comprendre votre structure, vos publics et vos objectifs thérapeutiques." },
      { line: "Programme", detail: "Construction d'un programme adapté, ponctuel ou en cycle, en lien avec vos équipes soignantes." },
      { line: "Séances", detail: "Ateliers de 45 minutes à 1h30 selon les capacités des participant·e·s." },
      { line: "Bilan", detail: "Temps de bilan avec votre équipe pour évaluer les effets et adapter la suite." },
    ],
    practical: [
      { label: "Durée séance", value: "45 min à 1h30" },
      { label: "Groupe", value: "4 à 12 pers." },
      { label: "Lieu", value: "Île-de-France" },
      { label: "Tarif", value: "Sur devis" },
    ],
    related: [
      { to: "/animation-seniors-ehpad", label: "EHPAD" },
      { to: "/atelier-residence-seniors-paris", label: "Résidence seniors" },
      { to: "/animation-centre-social", label: "Centre social" },
    ],
    faqs: [
      { q: "Êtes-vous formée à l'hortithérapie ?", a: "Notre approche s'inspire des principes de l'hortithérapie sans en être une pratique médicalisée. Nous travaillons en lien étroit avec vos équipes soignantes." },
      { q: "Pour quels publics ?", a: "Seniors, personnes en situation de handicap, jeunes en IME, patient·e·s en soins de suite, personnes en difficulté psychique." },
      { q: "Avec ou sans jardin sur place ?", a: "Les deux. Nous adaptons l'atelier à vos espaces, intérieurs ou extérieurs." },
      { q: "Format en cycle ?", a: "Oui. L'effet thérapeutique se construit dans la durée, idéalement sur un cycle de plusieurs séances." },
    ],
  }} />
);
export default AtelierTherapeutiqueJardin;
