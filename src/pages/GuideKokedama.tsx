import GuideTemplate from "@/components/GuideTemplate";
import { Leaf } from "lucide-react";

const GuideKokedama = () => (
  <GuideTemplate data={{
    slug: "guide/comment-faire-un-kokedama",
    icon: Leaf,
    eyebrow: "Tutoriel pas à pas",
    title: "Comment faire un kokedama ?",
    metaTitle: "Comment faire un kokedama : guide complet et pas à pas",
    metaDesc: "Guide complet pour fabriquer un kokedama chez soi. Origine, matériel, étapes et entretien. Conseils pratiques pour réussir votre boule de mousse.",
    intro: "Le kokedama est une sphère de mousse dans laquelle prend racine une plante. D'origine japonaise, il combine geste minimaliste et présence végétale forte. Voici comment le réaliser à la maison.",
    toc: [
      "Origines du kokedama",
      "Le matériel nécessaire",
      "Préparer le substrat",
      "Façonner la sphère",
      "Habiller de mousse et entretenir",
    ],
    sections: [
      {
        id: "origines",
        title: "Origines du kokedama",
        paragraphs: [
          "Le kokedama puise ses racines dans la tradition japonaise du nearai bonsai, qui consistait à présenter un bonsaï hors de son pot pour en montrer la motte naturelle. Au 20e siècle, cette pratique a évolué vers la sphère de mousse contemporaine.",
          "Plus largement, le kokedama s'inscrit dans l'esthétique du wabi-sabi, qui valorise l'imperfection, la simplicité et le passage du temps.",
        ],
      },
      {
        id: "materiel",
        title: "Le matériel nécessaire",
        paragraphs: [
          "Pour réussir votre kokedama, prévoyez le matériel ci-dessous. La plupart des éléments se trouvent en jardinerie ou dans une bonne boutique spécialisée.",
        ],
        list: [
          "Une plante adaptée, fougère, asplenium, philodendron",
          "Du terreau pour plantes vertes",
          "De l'argile en poudre type bentonite",
          "De la mousse fraîche",
          "De la corde en jute ou en lin",
        ],
      },
      {
        id: "substrat",
        title: "Préparer le substrat",
        paragraphs: [
          "Mélangez environ 70 % de terreau et 30 % d'argile en poudre. Ajoutez de l'eau peu à peu jusqu'à obtenir une pâte malléable, qui se tient sans s'effriter.",
          "Cette consistance est cruciale : trop sèche, la sphère s'effrite ; trop humide, elle ne tient pas sa forme.",
        ],
      },
      {
        id: "sphere",
        title: "Façonner la sphère",
        paragraphs: [
          "Démoulez délicatement votre plante et démêlez les racines à la main. Enveloppez la motte d'une couche de substrat préparé, en formant une boule régulière autour des racines.",
          "Tassez légèrement avec les mains pour que la sphère tienne sans écraser les racines.",
        ],
      },
      {
        id: "mousse",
        title: "Habiller de mousse et entretenir",
        paragraphs: [
          "Plaquez la mousse fraîche tout autour de la sphère, racines de mousse vers l'intérieur. Ligaturez avec la corde en faisant plusieurs tours réguliers, sans trop serrer.",
          "Pour entretenir votre kokedama, plongez-le dans une bassine d'eau pendant cinq à dix minutes une fois par semaine, puis laissez bien égoutter avant de le suspendre ou de le poser.",
        ],
      },
    ],
    conclusion: "Le kokedama est une pratique simple à mettre en œuvre mais qui demande un peu de doigté. Pour le geste accompagné et le matériel fourni, nos ateliers kokedama à Paris vous guident pas à pas.",
    related: [
      { to: "/atelier-kokedama-paris", label: "Atelier kokedama" },
      { to: "/guide/comment-faire-un-terrarium", label: "Guide terrarium" },
      { to: "/atelier-terrarium-paris", label: "Atelier terrarium" },
    ],
  }} />
);
export default GuideKokedama;
