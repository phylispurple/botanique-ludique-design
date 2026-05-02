import BaladeThemeTemplate from "@/components/BaladeThemeTemplate";
import { BookOpen } from "lucide-react";

const BaladeBotaniqueColoniale = () => (
  <BaladeThemeTemplate data={{
    slug: "balade-botanique-coloniale-paris",
    icon: BookOpen,
    eyebrow: "Histoire et politique du végétal",
    title: "Balade botanique coloniale à Paris",
    metaTitle: "Balade botanique coloniale à Paris, lecture décoloniale du végétal",
    metaDesc: "Balade ethnobotanique à Paris pour décrypter l'histoire coloniale du végétal urbain. Une lecture politique des palmiers, ginkgos et collections.",
    lead: "Le café que vous buvez, le palmier de votre quartier, la fougère de votre salon : chaque plante porte une histoire de circulation, de pouvoir et de savoirs effacés. Une balade pour relire Paris à hauteur de plante.",
    paragraphs: [
      "Paris est, en partie, le résultat d'un grand jardin colonial. Sous Haussmann, les essences importées des empires coloniaux ont été massivement plantées, transformant la ville en vitrine vivante de la puissance impériale française. Cette histoire est rarement racontée comme telle.",
      "La balade s'appuie sur les travaux d'historien·ne·s comme Hélène Blais, Samir Boumediene ou Anna Tsing pour proposer une lecture décoloniale du végétal urbain. Pas un discours militant, mais une mise en lumière de récits scientifiques solides souvent absents du grand public.",
      "On y croise les serres d'acclimatation, le Jardin d'agronomie tropicale de Vincennes, les noms d'arbres effacés ou francisés, les collections du Muséum et leur histoire ambivalente. Chaque arrêt devient une porte d'entrée dans une histoire mondiale.",
      "Cette balade s'adresse à des institutions culturelles, des universités populaires, des médiathèques et des collectivités prêtes à proposer un récit complémentaire et exigeant à leurs publics, en complément du regard botanique classique.",
    ],
    pillars: [
      { title: "Lire les essences importées", desc: "Platanes, ginkgos, palmiers, magnolias : reconstituer les routes botaniques qui ont conduit ces plantes jusqu'aux trottoirs parisiens." },
      { title: "Comprendre les jardins d'acclimatation", desc: "Le rôle de Paris comme centre de tri du végétal mondial au 19e siècle, et ce que cela dit de notre rapport actuel à la nature." },
      { title: "Restituer les savoirs effacés", desc: "Redonner voix aux botanistes autochtones, esclavisés ou subalternes dont les connaissances ont été pillées sans reconnaissance." },
    ],
    pullQuote: "Il n'existe pas de meilleur témoin historique qu'une plante.",
    pullSource: "Vanessa Charlery, anthropologue de la nature, EHESS",
    practical: [
      { label: "Durée", value: "1h30 à 2h30" },
      { label: "Groupe", value: "10 à 25 pers." },
      { label: "Saison", value: "Toute l'année" },
      { label: "Public", value: "Adulte" },
    ],
    related: [
      { to: "/balade-botanique-musee", label: "Balade en musée" },
      { to: "/balade-botanique-paris", label: "Balade Paris" },
      { to: "/#mediation", label: "Conférences" },
    ],
  }} />
);

export default BaladeBotaniqueColoniale;
