import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const CadeauOriginalNatureParis = () => (
  <OccasionTemplate data={{
    slug: "cadeau-original-nature-paris",
    icon: Sparkles,
    eyebrow: "Idée cadeau",
    title: "Cadeau original nature à Paris",
    metaTitle: "Cadeau original nature à Paris, expérience botanique à offrir",
    metaDesc: "Cadeau original nature à Paris. Offrez une expérience botanique, atelier terrarium, kokedama ou balade ethnobotanique en Île-de-France.",
    pitch: "Plutôt qu'un objet de plus, offrez une expérience qui dure. Un atelier botanique, une balade ethnobotanique ou une carte cadeau à utiliser quand le ou la destinataire le souhaite.",
    why: [
      { title: "Expérience", desc: "Un cadeau qui se vit et qui se raconte, pas un objet qui finit dans un tiroir." },
      { title: "Sur mesure", desc: "Carte cadeau valable sur tous nos formats, atelier, balade ou cycle. La personne choisit ce qui lui correspond." },
      { title: "Engagé", desc: "Un cadeau qui soutient une association de médiation scientifique et anthropologique, pas une grande chaîne." },
    ],
    formula: [
      { line: "Choisir", detail: "Carte cadeau libre ou expérience précise, atelier individuel ou en duo." },
      { line: "Personnaliser", detail: "Message personnalisé, présentation soignée, possibilité d'envoi par email ou par voie postale." },
      { line: "Offrir", detail: "La personne reçoit son cadeau et choisit la date qui lui convient parmi nos sessions." },
      { line: "Vivre", detail: "Le ou la destinataire profite de son expérience, à Paris ou en Île-de-France." },
    ],
    practical: [
      { label: "Format", value: "Carte ou expérience" },
      { label: "Validité", value: "12 mois" },
      { label: "Réception", value: "Email ou postal" },
      { label: "Prix", value: "À partir de 45 €" },
    ],
    related: [
      { to: "/atelier-terrarium-paris", label: "Terrarium" },
      { to: "/atelier-kokedama-paris", label: "Kokedama" },
      { to: "/idee-cadeau-amoureux-des-plantes", label: "Pour amoureux·ses des plantes" },
    ],
    faqs: [
      { q: "Comment offrir un atelier ?", a: "Contactez-nous pour recevoir une carte cadeau personnalisable, par email ou par courrier, avec le format de votre choix." },
      { q: "Quelle est la durée de validité ?", a: "Douze mois à compter de la date d'achat." },
      { q: "La personne peut-elle changer de format ?", a: "Oui. La carte cadeau est valable sur l'ensemble de nos formats, atelier, balade ou cycle." },
      { q: "Délai pour recevoir le cadeau ?", a: "Quelques heures par email, deux à trois jours par voie postale." },
    ],
  }} />
);
export default CadeauOriginalNatureParis;
