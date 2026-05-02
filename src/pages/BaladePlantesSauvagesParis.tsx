import BaladeThemeTemplate from "@/components/BaladeThemeTemplate";
import { Sprout } from "lucide-react";

const BaladePlantesSauvagesParis = () => (
  <BaladeThemeTemplate data={{
    slug: "balade-plantes-sauvages-comestibles-paris",
    icon: Sprout,
    eyebrow: "Plantes sauvages comestibles",
    title: "Balade plantes sauvages à Paris",
    metaTitle: "Balade plantes sauvages comestibles à Paris et Île-de-France",
    metaDesc: "Balade botanique à la rencontre des plantes sauvages comestibles de Paris. Identification, histoire et usages, en ville et en parc.",
    lead: "Pissenlit, plantain, mauve, ortie, pariétaire : la ville regorge de plantes sauvages comestibles. Une balade pour apprendre à les voir, à les nommer et à comprendre leur place dans nos cultures alimentaires.",
    paragraphs: [
      "Les plantes que nous appelons mauvaises herbes sont, pour beaucoup, des compagnes anciennes de l'humanité. Cueillies pendant des millénaires, elles ont nourri, soigné et accompagné les peuples bien avant l'agriculture moderne. La balade redonne sa place à cette mémoire botanique souvent invisibilisée.",
      "À Paris et en proche banlieue, les bordures de parcs, les pieds d'arbres et les friches abritent une flore sauvage étonnamment riche. Apprendre à identifier ces plantes, c'est aussi apprendre à lire la ville autrement, en repérant les sols, l'humidité, l'exposition.",
      "La balade croise botanique d'identification, histoire des usages et anthropologie de l'alimentation. Elle puise dans les travaux d'ethnobotanistes contemporains pour relier ces plantes ordinaires à des savoirs souvent menacés.",
      "Sans cueillette en ville pour des raisons sanitaires, mais avec des conseils précis pour aller cueillir ailleurs en confiance. Une transmission d'outils plus que de recettes.",
    ],
    pillars: [
      { title: "Identifier sans se tromper", desc: "Apprendre les critères clés de reconnaissance des grandes familles de comestibles, et les confusions à éviter absolument." },
      { title: "Comprendre les usages anciens", desc: "Replacer chaque plante dans son histoire alimentaire, médicinale et symbolique, en France et ailleurs." },
      { title: "Cueillir en conscience", desc: "Quand, où, comment cueillir sans nuire au milieu et sans risque sanitaire. Les bons réflexes du cueilleur ou de la cueilleuse responsable." },
    ],
    pullQuote: "Une mauvaise herbe est une plante dont on n'a pas encore découvert les vertus.",
    pullSource: "Ralph Waldo Emerson, repris en ouverture de balade",
    practical: [
      { label: "Durée", value: "1h30 à 2h" },
      { label: "Groupe", value: "10 à 20 pers." },
      { label: "Saison", value: "Mars à octobre" },
      { label: "Lieu", value: "Paris et IDF" },
    ],
    related: [
      { to: "/balade-botanique-paris", label: "Balade Paris" },
      { to: "/balade-botanique-coloniale-paris", label: "Botanique coloniale" },
      { to: "/balades-botaniques", label: "Tous les formats" },
    ],
  }} />
);

export default BaladePlantesSauvagesParis;
