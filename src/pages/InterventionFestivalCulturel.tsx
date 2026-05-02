import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const InterventionFestivalCulturel = () => (
  <OccasionTemplate data={{
    slug: "intervention-festival-culturel-botanique",
    icon: Sparkles,
    eyebrow: "Festival et événement",
    title: "Intervention en festival culturel",
    metaTitle: "Intervention festival culturel botanique, ateliers et balades",
    metaDesc: "Intervention en festival culturel autour de la botanique. Atelier participatif, balade ethnobotanique ou animation continue pour votre événement.",
    pitch: "Pour vos festivals, journées portes ouvertes, fêtes de quartier ou rencontres culturelles, une intervention végétale qui rassemble, étonne et marque les esprits.",
    why: [
      { title: "Format flexible", desc: "Animation continue ou créneaux fixes, atelier court ou long, en stand ou en espace dédié." },
      { title: "Tous publics", desc: "Un format qui touche aussi bien les enfants que les adultes, les familles que les passionné·e·s." },
      { title: "Image forte", desc: "Une intervention sensible et culturelle qui ajoute de la profondeur à votre programmation." },
    ],
    formula: [
      { line: "Stand continu", detail: "Animation tournante sur une demi-journée ou une journée, public libre." },
      { line: "Créneaux fixes", detail: "Plusieurs ateliers de 45 minutes à 1h enchaînés sur la journée." },
      { line: "Balade festival", detail: "Balade ethnobotanique guidée dans le parc ou le quartier accueillant le festival." },
      { line: "Mini-conférence", detail: "Conférence courte de 30 minutes intégrée au programme du festival." },
    ],
    practical: [
      { label: "Format", value: "Stand ou créneaux" },
      { label: "Durée", value: "Demi à 2 jours" },
      { label: "Lieu", value: "Île-de-France" },
      { label: "Tarif", value: "Sur devis" },
    ],
    related: [
      { to: "/intervention-mediatheque-botanique", label: "Médiathèque" },
      { to: "/balades-botaniques", label: "Balades" },
      { to: "/agenda", label: "Agenda" },
    ],
    faqs: [
      { q: "Festival en plein air ?", a: "Oui. Nous nous adaptons aux conditions extérieures, avec un protocole en cas de pluie." },
      { q: "Possibilité de petit prix unitaire ?", a: "Oui. Pour les formats stand, nous proposons des mini-créations à prix très accessibles voire offertes." },
      { q: "Festival hors Île-de-France ?", a: "Sur devis selon la distance et le projet." },
      { q: "Délai ?", a: "Trois mois minimum pour les festivals printemps et été qui se réservent en début d'année." },
    ],
  }} />
);
export default InterventionFestivalCulturel;
