import GuideTemplate from "@/components/GuideTemplate";
import { BookOpen } from "lucide-react";

const GuideEthnobotanique = () => (
  <GuideTemplate data={{
    slug: "guide/ethnobotanique-definition",
    icon: BookOpen,
    eyebrow: "Comprendre une discipline",
    title: "Qu'est-ce que l'ethnobotanique ?",
    metaTitle: "Ethnobotanique : définition, histoire et exemples concrets",
    metaDesc: "Définition de l'ethnobotanique, histoire de la discipline, exemples concrets et bibliographie. Une introduction accessible aux savoirs sur les plantes.",
    intro: "L'ethnobotanique étudie les relations entre les sociétés humaines et le monde végétal. Une discipline carrefour, à la croisée de la botanique, de l'anthropologie, de l'histoire et des études postcoloniales.",
    toc: [
      "Définition simple de l'ethnobotanique",
      "Une brève histoire de la discipline",
      "Exemples concrets de travaux ethnobotaniques",
      "Pourquoi l'ethnobotanique est utile aujourd'hui",
      "Pour aller plus loin",
    ],
    sections: [
      {
        id: "definition",
        title: "Définition simple",
        paragraphs: [
          "L'ethnobotanique est la science qui étudie comment les peuples nomment, utilisent, classent et imaginent les plantes. Elle interroge donc à la fois ce que les plantes font à nous, et ce que nous faisons aux plantes.",
          "Plus large que la botanique économique, qui se contente de répertorier les usages, l'ethnobotanique prend au sérieux les savoirs autochtones, les cosmologies non occidentales et les manières plurielles d'habiter le vivant.",
        ],
      },
      {
        id: "histoire",
        title: "Une brève histoire de la discipline",
        paragraphs: [
          "Le mot ethnobotanique apparaît à la fin du 19e siècle. Mais la pratique est bien plus ancienne : depuis l'Antiquité, les voyageurs, missionnaires et naturalistes décrivent les usages des plantes par les peuples qu'ils rencontrent, souvent en pillant ou en effaçant les savoirs locaux.",
          "Au 20e siècle, l'ethnobotanique se professionnalise. Des figures comme Richard Evans Schultes en Amazonie, ou plus récemment Philippe Descola en France, ont profondément renouvelé la discipline en y intégrant les apports de l'anthropologie de la nature.",
        ],
      },
      {
        id: "exemples",
        title: "Exemples concrets",
        paragraphs: [
          "Étudier comment les Kanaks de Nouvelle-Calédonie classent les ignames, ou comment les peuples amazoniens utilisent l'ayahuasca dans leurs rituels, ou encore comment les paysans français nommaient les plantes messicoles avant l'agriculture intensive : tout cela est de l'ethnobotanique.",
          "Plus près de nous, redonner sa place à la cueillette urbaine, ou retracer l'histoire coloniale du café et du cacao, relèvent aussi de cette approche.",
        ],
        list: [
          "Cueillette urbaine et plantes sauvages comestibles",
          "Histoire coloniale du café, du cacao, du caoutchouc",
          "Savoirs paysans sur les plantes messicoles",
          "Plantes médicinales et savoirs locaux",
        ],
      },
      {
        id: "utilite",
        title: "Pourquoi c'est utile aujourd'hui",
        paragraphs: [
          "À l'heure de l'effondrement de la biodiversité et de la crise écologique, l'ethnobotanique nous rappelle que d'autres rapports au vivant existent et ont existé. Elle ouvre des pistes concrètes pour repenser l'agriculture, la médecine, l'urbanisme.",
          "Elle est aussi un outil critique précieux pour décoloniser nos savoirs et reconnaître les contributions effacées de tant de peuples et de figures à la connaissance des plantes.",
        ],
      },
      {
        id: "ressources",
        title: "Pour aller plus loin",
        paragraphs: [
          "Quelques lectures essentielles pour explorer la discipline en français : Philippe Descola, Par-delà nature et culture ; Anna Tsing, Le Champignon de la fin du monde ; Samir Boumediene, La Colonisation du savoir ; Hélène Blais, Empire et après ?.",
          "Ces ouvrages sont accessibles à un public non spécialiste motivé, et donnent une bonne entrée dans les questionnements contemporains de la discipline.",
        ],
      },
    ],
    conclusion: "L'ethnobotanique n'est pas qu'une discipline universitaire. C'est une manière de regarder les plantes qui change profondément notre rapport au monde. Nos balades et conférences en proposent une approche accessible et exigeante.",
    related: [
      { to: "/balades-botaniques", label: "Balades ethnobotaniques" },
      { to: "/balade-botanique-coloniale-paris", label: "Balade coloniale" },
      { to: "/about", label: "Notre démarche" },
    ],
  }} />
);
export default GuideEthnobotanique;
