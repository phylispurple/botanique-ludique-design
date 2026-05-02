import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const AtelierAnniversaireAdulteParis = () => (
  <OccasionTemplate data={{
    slug: "atelier-anniversaire-adulte-nature-paris",
    icon: Heart,
    eyebrow: "Anniversaire adulte nature",
    title: "Atelier anniversaire adulte à Paris",
    metaTitle: "Anniversaire adulte nature à Paris, atelier botanique original",
    metaDesc: "Anniversaire adulte à Paris autour des plantes : terrarium, kokedama, teinture végétale ou couronne, un format original et apaisé pour vos invité·es.",
    pitch: "Un anniversaire qui change du restaurant, sans pour autant tomber dans l'animation enfantine. Un moment partagé, manuel et sensible autour des plantes, pour célébrer en intimité.",
    why: [
      { title: "Original", desc: "Une activité rare et raffinée pour célébrer un anniversaire entre adultes, ami·e·s ou famille." },
      { title: "Inclusif", desc: "Tous les profils s'y retrouvent, des passionné·e·s de plantes aux personnes qui n'ont jamais touché un pot de fleur." },
      { title: "Convivial", desc: "L'atelier crée du lien immédiatement, on parle, on s'entraide, on rit. Une vraie alternative au repas classique." },
    ],
    formula: [
      { line: "Accueil", detail: "Verre d'accueil, présentation et choix des plantes ou matières." },
      { line: "Découverte", detail: "Une courte introduction au format choisi, son histoire, ses usages." },
      { line: "Création", detail: "Atelier guidé en groupe, dans une ambiance chaleureuse." },
      { line: "Clôture", detail: "Photos de groupe avec les créations, conseils d'entretien." },
    ],
    practical: [
      { label: "Durée", value: "2h à 2h30" },
      { label: "Groupe", value: "6 à 14 pers." },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Prix", value: "À partir de 45 €" },
    ],
    related: [
      { to: "/atelier-terrarium-paris", label: "Terrarium" },
      { to: "/atelier-evjf-botanique-paris", label: "EVJF" },
      { to: "/atelier-couple-nature-paris", label: "À deux" },
    ],
    faqs: [
      { q: "Format à domicile ?", a: "Oui. Nous nous déplaçons chez vous ou dans le lieu de votre choix, à condition d'avoir de quoi installer une grande table." },
      { q: "Faut-il avoir des connaissances botaniques ?", a: "Aucune. L'atelier est conçu pour des adultes curieux·ses, sans prérequis." },
      { q: "Y a-t-il un cadeau pour la personne célébrée ?", a: "Oui, nous prévoyons une attention particulière pour la personne dont c'est l'anniversaire, sans en faire trop." },
      { q: "Délai de réservation ?", a: "Trois semaines minimum pour les week-ends, plus court possible en semaine." },
    ],
  }} />
);
export default AtelierAnniversaireAdulteParis;
