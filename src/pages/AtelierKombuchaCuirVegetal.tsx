import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";

const AtelierKombuchaCuirVegetal = () => (
  <ProductTemplate data={{
    slug: "atelier-kombucha-cuir-vegetal",
    icon: Sprout,
    eyebrow: "Matières vivantes",
    title: "Atelier cuir de kombucha",
    metaTitle: "Atelier cuir de kombucha, matière végétale vivante",
    metaDesc: "Atelier cuir de kombucha à Paris. Fabriquer une matière souple à partir d'une culture symbiotique. Approche mêlant biologie et design.",
    lead: "Une matière souple, brune, étonnamment proche du cuir, fabriquée par une colonie de bactéries et de levures. Le cuir de kombucha est l'un des matériaux les plus fascinants des biomatériaux contemporains.",
    story: [
      "Le SCOBY, cette galette gélatineuse qui pousse à la surface du kombucha, est une colonie symbiotique de bactéries et de levures. En la cultivant, séchant et travaillant, on obtient une matière qui évoque le cuir, la peau ou le parchemin.",
      "Cet atelier prolonge notre cycle Matières végétales et fait dialoguer biologie, design et histoire des matériaux. Une approche très contemporaine de ce que peut être une matière vivante au 21e siècle.",
      "Format conçu pour les curieux·ses, les designers, les enseignant·e·s en arts appliqués, les écoles et les institutions culturelles intéressées par les biomatériaux.",
    ],
    steps: [
      { title: "Comprendre le SCOBY", desc: "Biologie du kombucha, fonctionnement de la culture symbiotique, conditions de croissance." },
      { title: "Récolte et préparation", desc: "Comment récolter une galette, la rincer, la préparer pour le séchage." },
      { title: "Travail de la matière", desc: "Séchage, assouplissement, finition. Première manipulation de votre cuir végétal." },
      { title: "Pistes d'usage", desc: "Bijoux, petits objets, expérimentations. Ressources pour aller plus loin chez vous." },
    ],
    formats: [
      { label: "Durée", value: "2h30" },
      { label: "Groupe", value: "6 à 12 pers." },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Cycle", value: "200 € les 4 séances" },
    ],
    bookingTo: "/contact",
    bookingLabel: "Découvrir le cycle",
    related: [
      { to: "/atelier-teinture-vegetale-paris", label: "Teinture végétale" },
      { to: "/balade-botanique-coloniale-paris", label: "Botanique coloniale" },
      { to: "/workshops", label: "Tous les ateliers" },
    ],
    faqs: [
      { q: "Le cuir de kombucha est-il durable ?", a: "Bien entretenu, il peut durer plusieurs années. Il craint l'eau prolongée mais peut être assoupli avec des huiles végétales." },
      { q: "L'atelier est-il technique ?", a: "Il demande de la curiosité plus que des compétences. Les notions sont expliquées simplement et le geste accompagné." },
      { q: "Existe-t-il un cycle complet ?", a: "Oui. Le cycle Matières végétales propose quatre séances autour du kombucha, des feuilles stabilisées et d'autres biomatériaux." },
      { q: "Format pour écoles d'art ?", a: "Oui. Nous intervenons dans les écoles d'art et de design pour des modules adaptés à votre programme." },
    ],
  }} />
);
export default AtelierKombuchaCuirVegetal;
