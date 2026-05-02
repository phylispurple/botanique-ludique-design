import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const AtelierEvjfBotaniqueParis = () => (
  <OccasionTemplate data={{
    slug: "atelier-evjf-botanique-paris",
    icon: Heart,
    eyebrow: "EVJF original à Paris",
    title: "Atelier EVJF botanique à Paris",
    metaTitle: "Atelier EVJF botanique à Paris, EVJF original et nature",
    metaDesc: "EVJF botanique à Paris : terrarium, kokedama, couronne ou teinture végétale. Une activité originale et apaisée pour célébrer entre amies.",
    pitch: "Un EVJF qui sort des sentiers battus, sans alcool surdosé ni accessoires roses. Un moment sensible et créatif autour des plantes, pour offrir à la future mariée une parenthèse vivante avec ses amies.",
    why: [
      { title: "Original", desc: "Une activité encore peu proposée, qui change des brunchs et des cours de cocktails. Vos invitées s'en souviendront." },
      { title: "Apaisé", desc: "Un format calme et créatif, idéal en début ou fin de week-end pour reprendre son souffle entre les autres animations." },
      { title: "Souvenir vivant", desc: "Chaque participante repart avec sa création, plante ou textile, qu'elle emporte chez elle après la fête." },
    ],
    formula: [
      { line: "Accueil", detail: "Mise en lien des participantes, présentation du thème, petit rituel pour la future mariée." },
      { line: "Histoire", detail: "Une courte introduction botanique liée au format choisi, terrarium, kokedama ou teinture." },
      { line: "Création", detail: "Atelier guidé pas à pas dans une ambiance détendue, avec photos souvenirs en option." },
      { line: "Clôture", detail: "Un dernier mot pour la future mariée, conseils d'entretien et collecte des créations." },
    ],
    practical: [
      { label: "Durée", value: "2h à 2h30" },
      { label: "Groupe", value: "6 à 14 amies" },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Prix", value: "À partir de 45 €" },
    ],
    testimonialMood: "Le moment le plus apaisé et le plus joli du week-end.",
    related: [
      { to: "/atelier-terrarium-paris", label: "Terrarium" },
      { to: "/atelier-kokedama-paris", label: "Kokedama" },
      { to: "/atelier-anniversaire-adulte-nature-paris", label: "Anniversaire adulte" },
    ],
    faqs: [
      { q: "Quel format choisir pour un EVJF ?", a: "Le terrarium et la couronne végétale sont les plus appréciés en EVJF. Le kokedama fonctionne très bien pour de petits groupes." },
      { q: "Peut-on l'organiser à domicile ?", a: "Oui. Nous nous déplaçons chez vous, dans un Airbnb ou un lieu privatisé en Île-de-France." },
      { q: "Faut-il prévoir du matériel ?", a: "Non, tout est fourni. Vous prévoyez juste un espace de travail et éventuellement une boisson conviviale." },
      { q: "Quel délai pour réserver ?", a: "Idéalement trois à quatre semaines à l'avance, surtout au printemps et à l'été qui sont les saisons les plus demandées." },
    ],
  }} />
);
export default AtelierEvjfBotaniqueParis;
