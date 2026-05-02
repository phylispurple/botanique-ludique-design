import BaladeThemeTemplate from "@/components/BaladeThemeTemplate";
import { Leaf } from "lucide-react";

const BaladeBotaniquePrintempsEte = () => (
  <BaladeThemeTemplate data={{
    slug: "balade-botanique-printemps-ete",
    icon: Leaf,
    eyebrow: "Saison printemps · été",
    title: "Balade botanique de printemps et d'été",
    metaTitle: "Balade botanique de printemps et d'été en Île-de-France",
    metaDesc: "Balade botanique guidée au printemps et en été en Île-de-France. Floraisons, plantes messicoles et lecture saisonnière du végétal urbain et patrimonial.",
    lead: "Du premier pissenlit aux floraisons d'été, une balade pour suivre le rythme du vivant. Un format saisonnier pensé pour les programmations culturelles, les festivals et les semaines de la nature.",
    paragraphs: [
      "Le printemps et l'été sont deux saisons radicalement différentes dans la lecture d'un jardin ou d'une ville. Les floraisons précoces racontent une histoire, les explosions estivales en racontent une autre. La balade épouse ce rythme et le rend lisible.",
      "Conçue comme un module saisonnier, cette balade s'inscrit naturellement dans les Journées du patrimoine, la Fête de la Nature, les Rendez-vous aux jardins ou toute programmation culturelle de printemps et d'été.",
      "Le contenu varie d'une période à l'autre : floraisons précoces et plantes messicoles en avril, pleine saison des graminées et tinctoriales en juin, fructifications et préparation à l'automne en août. Chaque date est unique.",
      "Possibilité de programmer un cycle de trois à quatre balades étalées sur la saison, pour fidéliser un public et construire un véritable parcours culturel autour du végétal.",
    ],
    pillars: [
      { title: "Lire les floraisons", desc: "Apprendre à identifier les grandes familles de plantes à fleurs, leurs stratégies de reproduction et leurs alliances avec les pollinisateurs." },
      { title: "Suivre les pollinisateurs", desc: "Une lecture conjointe des plantes et des insectes qui les visitent. Une porte d'entrée vers la biodiversité ordinaire." },
      { title: "Anticiper l'automne", desc: "Repérer les indices de fin de saison, les fructifications et préparer la lecture qui se prolongera à l'automne suivant." },
    ],
    pullQuote: "Une plante porte en elle son origine, ses voyages, les mains qui l'ont cultivée et les noms qu'on lui a donnés.",
    practical: [
      { label: "Durée", value: "1h30 à 2h" },
      { label: "Période", value: "Avril à septembre" },
      { label: "Groupe", value: "10 à 25 pers." },
      { label: "Format", value: "Balade ou cycle" },
    ],
    related: [
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/balade-botanique-jardin-patrimonial", label: "Jardin patrimonial" },
      { to: "/agenda", label: "Agenda" },
    ],
  }} />
);

export default BaladeBotaniquePrintempsEte;
