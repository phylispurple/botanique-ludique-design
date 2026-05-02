import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const AtelierOnboarding = () => (
  <OccasionTemplate data={{
    slug: "atelier-onboarding-collaborateurs",
    icon: Sparkles,
    eyebrow: "Onboarding nouvelle recrue",
    title: "Atelier onboarding collaborateurs",
    metaTitle: "Atelier onboarding collaborateurs, intégration par le végétal",
    metaDesc: "Atelier d'onboarding pour collaborateurs autour du végétal. Un temps doux et symbolique pour intégrer les nouvelles recrues dans l'équipe.",
    pitch: "Intégrer une nouvelle recrue, c'est plus que lui faire visiter les bureaux. Un atelier botanique partagé crée un souvenir commun, fait tomber les barrières et donne le ton de la culture d'entreprise.",
    why: [
      { title: "Marquer le moment", desc: "Un onboarding qui sort de l'ordinaire est un onboarding dont on se souvient. La personne accueillie se sent considérée." },
      { title: "Briser la glace", desc: "Le geste manuel et le sujet végétal ouvrent la conversation autrement, en sortant du cadre professionnel strict." },
      { title: "Symbolique", desc: "Planter, faire pousser, prendre soin : autant de métaphores fortes pour parler du parcours dans l'entreprise." },
    ],
    formula: [
      { line: "Format individuel", detail: "Une session courte avec la recrue et son ou sa manager, pour un moment intime." },
      { line: "Format équipe", detail: "Atelier avec l'ensemble de l'équipe accueillante, pour créer un souvenir collectif." },
      { line: "Format vague", detail: "Pour les entreprises qui recrutent plusieurs personnes simultanément, atelier groupé d'intégration." },
      { line: "Cadeau d'arrivée", detail: "Création d'une plante remise à la recrue le jour de son arrivée, en complément de l'atelier." },
    ],
    practical: [
      { label: "Durée", value: "1h30 à 2h" },
      { label: "Groupe", value: "2 à 20 pers." },
      { label: "Lieu", value: "Sur site IDF" },
      { label: "Tarif", value: "Sur devis" },
    ],
    related: [
      { to: "/team-building-nature-entreprise", label: "Team building" },
      { to: "/animation-seminaire-entreprise-paris", label: "Séminaire" },
      { to: "/animation-semaine-qvct", label: "Semaine QVCT" },
    ],
    faqs: [
      { q: "Format réellement court possible ?", a: "Oui, une heure trente est un bon minimum pour avoir un vrai échange et une vraie création." },
      { q: "Récurrence dans le temps ?", a: "Oui. Plusieurs entreprises nous font venir une fois par mois ou par trimestre pour intégrer les nouvelles vagues." },
      { q: "Adaptation à votre culture d'entreprise ?", a: "Oui. Nous adaptons le discours, les plantes choisies et les supports à votre univers." },
      { q: "Format en région parisienne ?", a: "Oui, principalement en Île-de-France. Sur devis ailleurs en France." },
    ],
  }} />
);
export default AtelierOnboarding;
