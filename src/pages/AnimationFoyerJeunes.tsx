import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const AnimationFoyerJeunes = () => (
  <OccasionTemplate data={{
    slug: "animation-foyer-jeunes-travailleurs",
    icon: Heart,
    eyebrow: "FJT et résidences sociales",
    title: "Animation foyer jeunes travailleurs",
    metaTitle: "Animation FJT botanique, atelier en foyer jeunes travailleurs IDF",
    metaDesc: "Animation botanique pour foyers jeunes travailleurs et résidences sociales en Île-de-France. Ateliers conviviaux et accessibles.",
    pitch: "Une animation conçue pour les foyers jeunes travailleurs et les résidences sociales : un temps convivial autour des plantes, accessible, qui crée du lien entre résident·e·s et avec l'équipe socio-éducative.",
    why: [
      { title: "Accessible", desc: "Un atelier ouvert à tous les profils, sans prérequis culturel ou linguistique." },
      { title: "Lien social", desc: "Le format favorise les échanges entre résident·e·s qui ne se croisent pas forcément autrement." },
      { title: "Pratique", desc: "Apprendre à entretenir une plante, à végétaliser sa chambre, à observer le vivant en ville." },
    ],
    formula: [
      { line: "Accueil", detail: "Présentation simple, mise en lien des résident·e·s, choix du format." },
      { line: "Atelier", detail: "Création accompagnée, terrarium, plante en bocal recyclé, bombes à graines." },
      { line: "Discussion", detail: "Temps d'échange autour des plantes, des espaces verts du quartier, de la vie au foyer." },
      { line: "Création collective", detail: "Possibilité d'animer un projet de végétalisation des espaces communs sur plusieurs séances." },
    ],
    practical: [
      { label: "Durée", value: "1h30 à 2h" },
      { label: "Groupe", value: "6 à 15 pers." },
      { label: "Lieu", value: "Île-de-France" },
      { label: "Tarif", value: "Préférentiel" },
    ],
    related: [
      { to: "/animation-centre-social", label: "Centre social" },
      { to: "/atelier-residence-seniors-paris", label: "Résidence seniors" },
      { to: "/atelier-therapeutique-jardin", label: "Hortithérapie" },
    ],
    faqs: [
      { q: "Tarif solidaire possible ?", a: "Oui. Nous appliquons des tarifs préférentiels pour les structures sociales et associatives." },
      { q: "Adaptable à des publics très divers ?", a: "Oui. Nous adaptons le langage et les supports à la diversité des résident·e·s du foyer." },
      { q: "Projet de végétalisation collective ?", a: "Possible sur cycle. Nous accompagnons le projet de A à Z avec votre équipe." },
      { q: "Délai ?", a: "Quelques semaines, en lien avec le calendrier d'animation de votre structure." },
    ],
  }} />
);
export default AnimationFoyerJeunes;
