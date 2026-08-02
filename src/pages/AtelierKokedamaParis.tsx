import ProductTemplate from "@/components/ProductTemplate";
import { Leaf } from "lucide-react";
import kokedamaCollection from "@/assets/gallery-kokedama-collection.jpg";
import kokedamaTradescantia from "@/assets/gallery-kokedama-tradescantia.jpg";
import workshopGroup from "@/assets/gallery-workshop-group.webp";

const AtelierKokedamaParis = () => (
  <ProductTemplate data={{
    slug: "atelier-kokedama-paris",
    icon: Leaf,
    eyebrow: "Art végétal japonais",
    title: "Atelier kokedama à Paris",
    metaTitle: "Atelier kokedama à Paris, art végétal japonais",
    metaDesc: "Atelier kokedama à Paris pour particuliers et entreprises. Créez votre boule de mousse plantée, art végétal japonais ancestral.",
    lead: "Une boule de mousse, une plante, une corde. Le kokedama est l'un des arts végétaux les plus minimalistes et les plus poétiques du Japon. Un atelier accessible et profond.",
    story: [
      "Le kokedama prend racine dans la tradition du nearai bonsai du 17e siècle, et s'inspire plus largement de l'esthétique japonaise du wabi-sabi qui célèbre l'imparfait, l'éphémère et le naturel.",
      "Au-delà du geste manuel, le kokedama propose une autre manière d'habiter la plante. Sans pot, sans cache-pot, sans plastique. Juste la racine, la terre, la mousse et la corde.",
      "Nos ateliers se déroulent à Paris et en Île-de-France, dans une approche qui mêle pratique manuelle et culture du geste. Vous repartez avec votre kokedama et avec une compréhension de ce que vous venez de faire.",
    ],
    steps: [
      { title: "Origines et philosophie", desc: "Une courte introduction à la culture du kokedama, du nearai bonsai à la pratique contemporaine." },
      { title: "Choix de la plante", desc: "Sélection parmi des plantes adaptées au format kokedama, fougères, philodendrons, asplenium." },
      { title: "Façonnage de la sphère", desc: "Préparation du substrat, mise en forme, habillage de mousse, ligature." },
      { title: "Suspendre ou poser", desc: "Conseils pour intégrer votre kokedama chez vous, à suspendre ou à poser sur un plateau." },
    ],
    formats: [
      { label: "Durée", value: "2h" },
      { label: "Groupe", value: "6 à 12 pers." },
      { label: "Lieu", value: "Paris et IDF" },
      { label: "Prix", value: "À partir de 40 €" },
    ],
    bookingTo: "/contact",
    bookingLabel: "Réserver un atelier",
    related: [
      { to: "/atelier-terrarium-paris", label: "Atelier terrarium" },
      { to: "/atelier-evjf-botanique-paris", label: "Format EVJF" },
      { to: "/team-building-nature-entreprise", label: "Format entreprise" },
    ],
    faqs: [
      { q: "Comment arroser un kokedama ?", a: "Le kokedama se trempe dans une bassine d'eau pendant quelques minutes, environ une fois par semaine selon la plante et la saison." },
      { q: "Combien de temps vit un kokedama ?", a: "Bien entretenu, un kokedama peut vivre plusieurs années. La plante peut être replantée si la racine devient trop volumineuse." },
      { q: "L'atelier est-il accessible aux débutant·e·s ?", a: "Oui, totalement. Aucune expérience préalable n'est nécessaire, le geste est expliqué et accompagné." },
      { q: "Peut-on suspendre n'importe où ?", a: "Préférez un endroit lumineux sans soleil direct, et accessible pour le trempage hebdomadaire." },
    ],
    videoSrc: "/videos/workshop-kokedama-atelier.mp4",
    videoCaption: "Atelier kokedama, gestes et matières",
    photos: [
      { src: kokedamaCollection, alt: "Collection de kokedamas réalisés en atelier", caption: "Collection d'ateliers" },
      { src: kokedamaTradescantia, alt: "Kokedama tradescantia zebrina", caption: "Tradescantia zebrina" },
      { src: workshopGroup, alt: "Atelier kokedama en groupe", caption: "Atelier en groupe" },
    ],

  }} />
);
export default AtelierKokedamaParis;
