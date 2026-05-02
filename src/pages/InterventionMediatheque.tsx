import OccasionTemplate from "@/components/OccasionTemplate";
import { BookOpen } from "lucide-react";

const InterventionMediatheque = () => (
  <OccasionTemplate data={{
    slug: "intervention-mediatheque-botanique",
    icon: BookOpen,
    eyebrow: "Lecture publique",
    title: "Intervention en médiathèque",
    metaTitle: "Intervention médiathèque botanique en Île-de-France, balade et atelier",
    metaDesc: "Intervention en médiathèque autour de la botanique. Balade ethnobotanique, atelier ou conférence pour vos publics adultes et familles.",
    pitch: "Une médiation ethnobotanique pensée pour les médiathèques, leurs collections et leurs publics. Atelier, balade ou conférence, en lien avec votre programmation culturelle et scientifique.",
    why: [
      { title: "Public élargi", desc: "Un format qui parle aux adultes, aux familles et aux publics professionnels du livre. Une vraie ouverture programmatique." },
      { title: "Lien aux collections", desc: "L'intervention peut se construire à partir de votre fonds, en valorisant des ouvrages de botanique, de sciences ou d'écologie." },
      { title: "Tarif institutionnel", desc: "Tarification adaptée aux budgets des collectivités et des médiathèques publiques." },
    ],
    formula: [
      { line: "Conférence", detail: "1h à 1h30 sur un thème ethnobotanique, accessible à un public adulte sans prérequis." },
      { line: "Atelier", detail: "1h30 à 2h, terrarium, kokedama ou herbier, pour adultes ou familles." },
      { line: "Balade", detail: "Balade ethnobotanique de 1h30 dans un parc proche, en partenariat avec la médiathèque." },
      { line: "Cycle", detail: "Plusieurs interventions étalées sur l'année autour d'un fil rouge thématique." },
    ],
    practical: [
      { label: "Durée", value: "1h à 2h" },
      { label: "Public", value: "Adulte ou famille" },
      { label: "Lieu", value: "Île-de-France" },
      { label: "Tarif", value: "Sur devis" },
    ],
    related: [
      { to: "/balade-botanique-musee", label: "Balade musée" },
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/#mediation", label: "Conférences" },
    ],
    faqs: [
      { q: "Quel public dans une médiathèque ?", a: "Tous publics, du jeune adulte au senior. Possibilité de cibler un public familial ou un public d'expert·e·s amateur·ice·s." },
      { q: "Lien avec les Nuits de la lecture ou Sciences pour tous ?", a: "Oui, nos interventions s'inscrivent parfaitement dans ces temps forts du calendrier des médiathèques." },
      { q: "Tarification ?", a: "Tarif adapté aux budgets institutionnels, sur devis selon le format et la durée." },
      { q: "Délai de réservation ?", a: "Trois mois minimum recommandé pour s'inscrire dans une programmation annuelle." },
    ],
  }} />
);
export default InterventionMediatheque;
