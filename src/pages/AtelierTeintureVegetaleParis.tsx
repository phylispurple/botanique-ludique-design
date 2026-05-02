import ProductTemplate from "@/components/ProductTemplate";
import { Sparkles } from "lucide-react";

const AtelierTeintureVegetaleParis = () => (
  <ProductTemplate data={{
    slug: "atelier-teinture-vegetale-paris",
    icon: Sparkles,
    eyebrow: "Plantes tinctoriales",
    title: "Atelier teinture végétale à Paris",
    metaTitle: "Atelier teinture végétale à Paris, plantes tinctoriales",
    metaDesc: "Atelier teinture végétale à Paris. Découverte des plantes tinctoriales, garance, indigo, gaude, et création textile naturelle.",
    lead: "Garance pour les rouges, gaude pour les jaunes, indigo pour les bleus profonds. Avant la chimie, ces plantes ont habillé le monde. Un atelier sensible pour redécouvrir leurs couleurs.",
    story: [
      "L'histoire de la teinture végétale est une histoire mondiale de circulations, de pouvoir et de savoirs. La garance, cultivée massivement en France au 19e siècle pour les pantalons rouges de l'armée, a disparu en quelques décennies face à la chimie de synthèse. L'indigo des Indes a façonné des routes commerciales et des conflits coloniaux.",
      "Aujourd'hui, la teinture végétale revient comme une réponse aux excès de l'industrie textile. Mais elle reste avant tout une rencontre fascinante entre une plante, un mordant et une fibre, où chaque variation produit une nuance unique.",
      "Nos ateliers se déroulent à Paris et en Île-de-France, dans des formats individuels, en groupe ou collaboratifs pour les entreprises et les institutions culturelles.",
    ],
    steps: [
      { title: "Histoire et géopolitique du végétal", desc: "Une introduction aux grandes plantes tinctoriales et à leur histoire mondiale." },
      { title: "Préparation du bain", desc: "Mordançage, extraction des pigments, dosages, expérimentation." },
      { title: "Teinture et nuancier", desc: "Création de votre échantillon ou de votre pièce textile, observation des nuances." },
      { title: "Fixation et entretien", desc: "Comment fixer une teinture végétale et entretenir vos pièces dans la durée." },
    ],
    formats: [
      { label: "Durée", value: "2h30" },
      { label: "Groupe", value: "6 à 20 pers." },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Prix", value: "À partir de 55 €" },
    ],
    bookingTo: "/contact",
    bookingLabel: "Réserver un atelier",
    related: [
      { to: "/atelier-terrarium-paris", label: "Atelier terrarium" },
      { to: "/atelier-kombucha-cuir-vegetal", label: "Cuir de kombucha" },
      { to: "/balades-botaniques", label: "Balades botaniques" },
    ],
    faqs: [
      { q: "Quel textile peut-on teindre ?", a: "Préférez les fibres naturelles : coton, lin, soie, laine. Les synthétiques ne fixent pas la teinture végétale." },
      { q: "Repart-on avec sa pièce ?", a: "Oui. Chaque participant·e repart avec son textile teinté, séché et fixé." },
      { q: "Faut-il apporter quelque chose ?", a: "Tout le matériel est fourni. Vous pouvez apporter une pièce à teindre si vous le souhaitez." },
      { q: "Format collaboratif possible ?", a: "Oui, format spécial entreprises et événements pour créer une œuvre textile collective." },
    ],
  }} />
);
export default AtelierTeintureVegetaleParis;
