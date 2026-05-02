import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const AnimationSoireeEntreprise = () => (
  <OccasionTemplate data={{
    slug: "animation-soiree-entreprise-vegetale",
    icon: Sparkles,
    eyebrow: "Soirée entreprise",
    title: "Animation soirée entreprise végétale",
    metaTitle: "Animation soirée entreprise végétale à Paris et IDF",
    metaDesc: "Animation soirée entreprise autour du végétal à Paris. Une alternative douce aux animations classiques, terrarium, couronne, teinture.",
    pitch: "Une animation de soirée d'entreprise qui ne ressemble pas aux autres. Pas de jeu de quiz hurlé, pas de déguisement forcé : un atelier botanique pour faire descendre la pression et favoriser les vraies conversations.",
    why: [
      { title: "Doux", desc: "Un format calme qui contraste agréablement avec les soirées classiques. Vos équipes vous remercieront." },
      { title: "Inclusif", desc: "Aucune compétence sportive ou artistique requise. Tout le monde peut participer, même les plus timides." },
      { title: "Mémorable", desc: "Repartir avec un terrarium ou une plante après une soirée d'entreprise, c'est un souvenir tangible et durable." },
    ],
    formula: [
      { line: "Apéritif", detail: "Verre d'accueil et présentation du format, dans une ambiance détendue." },
      { line: "Animation", detail: "Atelier botanique en groupe ou en sous-groupes selon le nombre de participant·e·s." },
      { line: "Cocktail", detail: "Suite cocktail, avec les créations posées sur les tables comme décoration vivante." },
      { line: "Souvenir", detail: "Chacun·e repart avec sa création à la fin de la soirée." },
    ],
    practical: [
      { label: "Durée", value: "1h30 à 2h" },
      { label: "Groupe", value: "10 à 60 pers." },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Tarif", value: "Sur devis" },
    ],
    related: [
      { to: "/team-building-nature-entreprise", label: "Team building" },
      { to: "/animation-seminaire-entreprise-paris", label: "Séminaire" },
      { to: "/atelier-noel-couronne-vegetale-paris", label: "Soirée de Noël" },
    ],
    faqs: [
      { q: "Format soirée de fin d'année ?", a: "Oui. La couronne végétale et le terrarium fonctionnent particulièrement bien pour les soirées de décembre." },
      { q: "Format avec restauration ?", a: "Nous nous adaptons au format de votre soirée et nous coordonnons avec votre traiteur." },
      { q: "Délai de réservation ?", a: "Six à huit semaines à l'avance pour les soirées de fin d'année qui se réservent très tôt." },
      { q: "Format en mobile ?", a: "Oui, nous nous déplaçons dans vos bureaux ou dans une salle louée." },
    ],
  }} />
);
export default AnimationSoireeEntreprise;
