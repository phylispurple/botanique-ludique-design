import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const AtelierBabyShowerVegetal = () => (
  <OccasionTemplate data={{
    slug: "atelier-baby-shower-vegetal-paris",
    icon: Heart,
    eyebrow: "Baby shower botanique",
    title: "Atelier baby shower végétal à Paris",
    metaTitle: "Baby shower végétal à Paris, atelier botanique pour future maman",
    metaDesc: "Baby shower végétal à Paris. Atelier botanique apaisé pour célébrer une future maman, terrarium, kokedama ou couronne végétale.",
    pitch: "Un baby shower qui prend soin de la future maman. Pas de jeux gênants, pas de couleurs criardes : un moment posé, manuel et sensible autour des plantes, à partager avec ses proches.",
    why: [
      { title: "Apaisé", desc: "Un format calme, parfait pour une femme enceinte qui souhaite un moment doux plutôt qu'une fête bruyante." },
      { title: "Inclusif", desc: "Toutes les générations s'y retrouvent. Mère, sœurs, amies, belle-mère peuvent partager le moment ensemble." },
      { title: "Symbolique", desc: "La plante comme métaphore du soin, du temps qui passe, du vivant qui pousse. Un beau symbole pour cette étape." },
    ],
    formula: [
      { line: "Accueil", detail: "Verre d'accueil sans alcool, mise en lien, présentation du format." },
      { line: "Histoire", detail: "Petite introduction sur les plantes choisies et leur symbolique éventuelle." },
      { line: "Création", detail: "Atelier guidé en groupe, autour de la future maman." },
      { line: "Cadeau collectif", detail: "Possibilité de créer une plante collective offerte à la future maman, en option." },
    ],
    practical: [
      { label: "Durée", value: "2h" },
      { label: "Groupe", value: "5 à 12 pers." },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Prix", value: "À partir de 45 €" },
    ],
    related: [
      { to: "/atelier-evjf-botanique-paris", label: "Format EVJF" },
      { to: "/atelier-terrarium-paris", label: "Terrarium" },
      { to: "/atelier-kokedama-paris", label: "Kokedama" },
    ],
    faqs: [
      { q: "Est-ce adapté à une femme enceinte ?", a: "Oui, totalement. Tous les matériaux sont sains, l'atelier est doux et la future maman peut s'asseoir et participer à son rythme." },
      { q: "Combien de temps à l'avance réserver ?", a: "Trois semaines minimum, surtout pour les week-ends." },
      { q: "Format à domicile possible ?", a: "Oui. Nous nous déplaçons chez vous ou dans un lieu privatisé." },
      { q: "Y a-t-il une plante offerte à la future maman ?", a: "En option, nous proposons une création collective offerte à la future maman par les invité·e·s." },
    ],
  }} />
);
export default AtelierBabyShowerVegetal;
