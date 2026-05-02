import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const AtelierResidenceSeniors = () => (
  <OccasionTemplate data={{
    slug: "atelier-residence-seniors-paris",
    icon: Heart,
    eyebrow: "Résidences seniors",
    title: "Atelier botanique en résidence seniors",
    metaTitle: "Atelier botanique en résidence seniors et services",
    metaDesc: "Atelier botanique en résidence seniors à Paris et en Île-de-France. Animation douce et stimulante, terrarium, kokedama, herbier.",
    pitch: "Un atelier botanique pensé pour les résidences seniors et résidences services. Un temps stimulant, calme et chargé de sens pour les résidents, qui combine geste manuel, mémoire et conversation.",
    why: [
      { title: "Stimulant", desc: "Le geste manuel et le contact avec les plantes activent la motricité fine, la mémoire sensorielle et l'attention." },
      { title: "Convivial", desc: "L'atelier crée un temps de partage entre résidents, où chacun·e peut participer à son rythme." },
      { title: "Évoque", desc: "Les plantes ramènent souvent à des souvenirs personnels, ce qui ouvre la conversation et la mémoire." },
    ],
    formula: [
      { line: "Accueil", detail: "Mise en lien des résidents, présentation du format choisi." },
      { line: "Évocation", detail: "Un temps d'échange autour des plantes choisies, des souvenirs qu'elles évoquent." },
      { line: "Création", detail: "Atelier guidé pas à pas, avec un accompagnement individualisé selon les besoins." },
      { line: "Clôture", detail: "Conseils d'entretien et possibilité d'exposition collective des créations dans la résidence." },
    ],
    practical: [
      { label: "Durée", value: "1h à 1h30" },
      { label: "Groupe", value: "5 à 15 résidents" },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Tarif", value: "Sur devis" },
    ],
    related: [
      { to: "/animation-seniors-ehpad", label: "Animation EHPAD" },
      { to: "/atelier-therapeutique-jardin", label: "Hortithérapie" },
      { to: "/animation-foyer-jeunes-travailleurs", label: "Foyers FJT" },
    ],
    faqs: [
      { q: "Adapté aux résidents fragiles ?", a: "Oui. Nous adaptons les gestes et le rythme aux capacités des résidents, en lien avec votre équipe d'animation." },
      { q: "Format récurrent dans l'année ?", a: "Oui. Plusieurs résidences nous font venir mensuellement pour un cycle saisonnier suivi." },
      { q: "Tarification ?", a: "Tarif adapté aux budgets des résidences, dégressif sur cycle." },
      { q: "Format en chambre pour résidents alités ?", a: "Sur demande, possible en complément d'un atelier de groupe." },
    ],
  }} />
);
export default AtelierResidenceSeniors;
