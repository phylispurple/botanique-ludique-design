import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const AtelierCoupleNatureParis = () => (
  <OccasionTemplate data={{
    slug: "atelier-couple-nature-paris",
    icon: Heart,
    eyebrow: "Date originale à Paris",
    title: "Atelier botanique en couple à Paris",
    metaTitle: "Atelier botanique en couple à Paris, date originale nature",
    metaDesc: "Atelier botanique en couple à Paris : terrarium, kokedama ou teinture végétale, une idée de date originale et apaisée loin du restaurant classique.",
    pitch: "Une date différente : pas un cinéma, pas un restaurant, mais deux heures à fabriquer ensemble une plante qui restera chez vous longtemps. Un beau souvenir partagé.",
    why: [
      { title: "Différent", desc: "Sortir des dates classiques pour vivre un moment manuel, calme, qui pousse à parler autrement." },
      { title: "Tangible", desc: "On repart avec une création vivante qui prendra place chez vous et rappellera cette journée." },
      { title: "Adaptable", desc: "Format intime à deux, ou groupé avec d'autres couples pour les Saint-Valentin et autres dates spéciales." },
    ],
    formula: [
      { line: "Accueil", detail: "Mise en lien et choix du format, terrarium, kokedama ou couronne." },
      { line: "Histoire", detail: "Une courte mise en contexte botanique pour donner du sens au geste." },
      { line: "Création à deux", detail: "Atelier guidé, où chaque personne fabrique sa propre création ou une création partagée." },
      { line: "Souvenir", detail: "Photo souvenir et conseils d'entretien pour garder votre création longtemps." },
    ],
    practical: [
      { label: "Durée", value: "2h" },
      { label: "Format", value: "À deux ou groupé" },
      { label: "Lieu", value: "Paris" },
      { label: "Prix", value: "À partir de 45 € / pers." },
    ],
    related: [
      { to: "/atelier-terrarium-paris", label: "Terrarium" },
      { to: "/atelier-kokedama-paris", label: "Kokedama" },
      { to: "/atelier-evjf-botanique-paris", label: "EVJF" },
    ],
    faqs: [
      { q: "Format Saint-Valentin disponible ?", a: "Oui, nous proposons des sessions spéciales en février. Pensez à réserver au moins un mois à l'avance." },
      { q: "Peut-on offrir l'atelier ?", a: "Oui. Une carte cadeau personnalisée peut être envoyée à la personne concernée." },
      { q: "Faut-il prévoir quelque chose ?", a: "Non, tout est fourni. Venez avec l'envie de faire ensemble." },
      { q: "Format en privatisé ?", a: "Oui, possible à domicile ou dans un lieu privatisé pour une date plus intime." },
    ],
  }} />
);
export default AtelierCoupleNatureParis;
