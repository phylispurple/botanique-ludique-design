import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";
import terrariumHome from "@/assets/gallery-terrarium.webp";
import terrariumAdultesGroupe from "@/assets/gallery-terrarium-adultes-groupe.jpg.asset.json";
import terrariumBocalFittonia from "@/assets/gallery-terrarium-bocal-fittonia.jpg.asset.json";
import terrariumFittoniaPrep from "@/assets/gallery-terrarium-fittonia-prep.jpg.asset.json";

const AtelierTerrariumParis = () => (
  <ProductTemplate data={{
    slug: "atelier-terrarium-paris",
    icon: Sprout,
    eyebrow: "Atelier signature",
    title: "Atelier terrarium à Paris",
    metaTitle: "Atelier terrarium à Paris, créer son écosystème en bocal",
    metaDesc: "Atelier terrarium à Paris pour particuliers, entreprises et événements. Apprenez à créer votre écosystème végétal autonome en bocal.",
    lead: "Construisez votre paysage miniature dans un bocal. Un écosystème vivant, presque autonome, qui prend racine sur votre étagère et raconte 200 ans d'histoire de la botanique sous verre.",
    story: [
      "Le terrarium n'est pas une mode récente. En 1829, le Dr Nathaniel Ward enferme par hasard une fougère dans une caisse de verre et révolutionne le transport des plantes vivantes. Les caisses de Ward, ancêtres directes du terrarium, ont permis aux botanistes du 19e siècle de transporter quinine, hévéa et thé d'un continent à l'autre.",
      "Cette histoire est une porte d'entrée magnifique vers une réflexion plus large sur notre rapport au vivant. Construire un terrarium, c'est apprendre à observer un équilibre, à composer avec l'humidité, la lumière, le rythme du vivant.",
      "Nos ateliers se déroulent à Paris et en Île-de-France, dans nos espaces ou chez vous, pour des particuliers, des groupes d'amis, des entreprises ou des événements privés.",
    ],
    steps: [
      { title: "Histoire du terrarium", desc: "Une courte introduction à l'histoire du terrarium, du Dr Ward aux usages contemporains." },
      { title: "Choix des plantes", desc: "Sélection guidée parmi les plantes adaptées au terrarium fermé, fougères, mousses, fittonia." },
      { title: "Composition du paysage", desc: "Drainage, substrat, plantation, décoration. Chaque terrarium est unique." },
      { title: "Conseils d'entretien", desc: "Comment garder votre écosystème en vie pendant des années avec très peu d'interventions." },
    ],
    formats: [
      { label: "Durée", value: "2h" },
      { label: "Groupe", value: "6 à 25 pers. max" },
      { label: "Lieu", value: "Paris et IDF" },
    ],
    bookingTo: "/contact",
    bookingLabel: "Réserver un atelier",
    related: [
      { to: "/atelier-kokedama-paris", label: "Atelier kokedama" },
      { to: "/atelier-teinture-vegetale-paris", label: "Teinture végétale" },
      { to: "/team-building-nature-entreprise", label: "Format entreprise" },
    ],
    faqs: [
      { q: "Faut-il avoir la main verte ?", a: "Pas du tout. L'atelier est conçu pour les débutant·e·s comme pour les passionné·e·s. Tout est expliqué pas à pas." },
      { q: "Repart-on avec son terrarium ?", a: "Oui, chaque participant·e repart avec son terrarium fini, ses plantes et un guide d'entretien." },
      { q: "Combien de temps vit un terrarium ?", a: "Un terrarium fermé bien équilibré peut vivre plusieurs années sans intervention majeure, parfois plus de cinq ans." },
      { q: "Peut-on organiser un atelier privatisé ?", a: "Oui. Anniversaire, EVJF, séminaire d'entreprise : nous proposons des formats privatisés à partir de six personnes." },
    ],
    photos: [
      { src: terrariumHome, alt: "Terrarium végétal avec succulentes et fougères", caption: "Terrarium végétal" },
      { src: terrariumBocalFittonia.url, alt: "Terrarium en bocal avec fittonia et tradescantia", caption: "Terrarium en bocal" },
      { src: terrariumFittoniaPrep.url, alt: "Composition d'un terrarium fittonia", caption: "Composition en cours" },
      { src: terrariumAdultesGroupe.url, alt: "Atelier terrarium en groupe adultes", caption: "Atelier en groupe" },
    ],
  }} />
);
export default AtelierTerrariumParis;
