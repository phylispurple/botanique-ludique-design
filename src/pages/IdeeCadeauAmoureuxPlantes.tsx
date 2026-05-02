import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const IdeeCadeauAmoureuxPlantes = () => (
  <OccasionTemplate data={{
    slug: "idee-cadeau-amoureux-des-plantes",
    icon: Sparkles,
    eyebrow: "Pour les passionné·e·s",
    title: "Idée cadeau pour amoureux·ses des plantes",
    metaTitle: "Idée cadeau amoureux·ses des plantes, expérience à offrir",
    metaDesc: "Idée cadeau pour amoureux·ses des plantes : ateliers botaniques, balades ethnobotaniques et cycles de matières végétales en Île-de-France.",
    pitch: "Pour la personne qui collectionne les pots, qui parle à ses fougères ou qui passe ses dimanches au Jardin des Plantes, voici cinq idées d'expériences à offrir et à vivre.",
    why: [
      { title: "Au-delà de la plante", desc: "Les amoureux·ses des plantes ont déjà beaucoup de pots. Offrir une expérience renouvelle leur plaisir." },
      { title: "Apprendre autrement", desc: "Nos ateliers ouvrent sur des aspects culturels, historiques et anthropologiques rarement abordés ailleurs." },
      { title: "Souvenir durable", desc: "L'expérience reste, et la création repart avec la personne pour prolonger le moment." },
    ],
    formula: [
      { line: "Atelier terrarium", detail: "Pour celles et ceux qui aiment composer un paysage miniature et observer le vivant sous verre." },
      { line: "Atelier kokedama", detail: "Une approche plus japonaise, minimaliste, idéale pour les amateur·ice·s d'art végétal." },
      { line: "Balade botanique", detail: "Pour les marcheur·se·s curieux·ses qui veulent apprendre à lire les plantes en ville." },
      { line: "Cycle matières", detail: "Quatre séances pour explorer le kombucha, les feuilles stabilisées et les biomatériaux contemporains." },
    ],
    practical: [
      { label: "Format", value: "Cartes cadeaux" },
      { label: "Validité", value: "12 mois" },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Prix", value: "45 € à 200 €" },
    ],
    related: [
      { to: "/cadeau-original-nature-paris", label: "Cadeau original" },
      { to: "/atelier-kombucha-cuir-vegetal", label: "Cycle matières" },
      { to: "/balades-botaniques", label: "Balades" },
    ],
    faqs: [
      { q: "Comment savoir ce qui plaira ?", a: "La carte cadeau libre permet à la personne de choisir elle-même son format. Idéal en cas d'hésitation." },
      { q: "Pour offrir à un·e expert·e ?", a: "Le cycle Matières végétales est conçu pour les passionné·e·s qui veulent aller plus loin que les ateliers classiques." },
      { q: "Que contient la carte cadeau ?", a: "Un message personnalisable, le format choisi ou un montant libre, et la marche à suivre pour réserver." },
      { q: "Délai de réception ?", a: "Quelques heures par email, deux à trois jours par voie postale." },
    ],
  }} />
);
export default IdeeCadeauAmoureuxPlantes;
