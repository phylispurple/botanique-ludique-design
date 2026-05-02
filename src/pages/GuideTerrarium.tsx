import GuideTemplate from "@/components/GuideTemplate";
import { Sprout } from "lucide-react";

const GuideTerrarium = () => (
  <GuideTemplate data={{
    slug: "guide/comment-faire-un-terrarium",
    icon: Sprout,
    eyebrow: "Tutoriel pas à pas",
    title: "Comment faire un terrarium ?",
    metaTitle: "Comment faire un terrarium : guide complet pour débutant·e·s",
    metaDesc: "Guide complet pour faire un terrarium chez soi. Matériel, plantes, étapes et entretien. Conseils d'une médiatrice botanique.",
    intro: "Faire un terrarium n'a rien de compliqué quand on connaît les bons réflexes. Voici un guide complet, étape par étape, pour réussir votre premier écosystème en bocal.",
    toc: [
      "Choisir le bon contenant",
      "Sélectionner les plantes adaptées",
      "Composer les couches successives",
      "Planter et finaliser le décor",
      "Entretenir un terrarium dans la durée",
    ],
    sections: [
      {
        id: "contenant",
        title: "Choisir le bon contenant",
        paragraphs: [
          "Un terrarium se construit dans un récipient en verre transparent. Pour un terrarium fermé, choisissez un bocal avec couvercle ou bouchon, qui permettra de recréer un microclimat humide et autonome.",
          "Préférez un volume d'au moins deux litres pour avoir la place de composer un paysage. Les bocaux trop étroits limitent les possibilités et compliquent la plantation.",
        ],
        list: [
          "Bocal type confiture, deux litres minimum",
          "Vase à bouchon ou cloche en verre",
          "Aquarium recyclé, fermé par une plaque de verre",
        ],
      },
      {
        id: "plantes",
        title: "Sélectionner les plantes adaptées",
        paragraphs: [
          "Dans un terrarium fermé, choisissez des plantes qui aiment l'humidité et l'ombre lumineuse. Évitez absolument les cactus et succulentes, qui pourriront en quelques semaines.",
          "Les fougères naines, mousses, fittonia, pilea et selaginelles sont des valeurs sûres. Combinez deux à quatre espèces pour créer un paysage harmonieux.",
        ],
        list: [
          "Fougères naines",
          "Mousses fraîches",
          "Fittonia",
          "Pilea",
          "Selaginelles",
        ],
      },
      {
        id: "couches",
        title: "Composer les couches successives",
        paragraphs: [
          "Le secret d'un terrarium qui dure réside dans le drainage. Sur le fond, déposez deux à trois centimètres de billes d'argile. Recouvrez d'une fine couche de charbon actif, qui purifie l'eau et limite les moisissures.",
          "Ajoutez ensuite cinq à sept centimètres de terreau spécial plantes vertes, légèrement humide mais jamais détrempé. Tassez doucement.",
        ],
      },
      {
        id: "plantation",
        title: "Planter et finaliser le décor",
        paragraphs: [
          "Creusez de petits trous dans le terreau et installez vos plantes en commençant par les plus grandes. Tassez la terre autour des racines avec un outil long.",
          "Ajoutez ensuite les éléments décoratifs : mousses, petites pierres, écorces. Pulvérisez légèrement, fermez le bocal.",
        ],
      },
      {
        id: "entretien",
        title: "Entretenir un terrarium dans la durée",
        paragraphs: [
          "Un terrarium fermé bien équilibré n'a presque pas besoin d'arrosage. La condensation crée son propre cycle d'eau. Si la condensation est trop importante, entrouvrez le bocal quelques heures.",
          "Placez votre terrarium dans une pièce lumineuse mais sans soleil direct, qui transformerait le bocal en four. Taillez les plantes au fur et à mesure pour maintenir l'équilibre.",
        ],
      },
    ],
    conclusion: "Un terrarium bien construit peut vivre plusieurs années sans intervention majeure. Si vous préférez apprendre en groupe, nos ateliers terrarium à Paris vous accompagnent pas à pas avec tout le matériel fourni.",
    related: [
      { to: "/atelier-terrarium-paris", label: "Atelier terrarium" },
      { to: "/guide/comment-faire-un-kokedama", label: "Guide kokedama" },
      { to: "/atelier-kokedama-paris", label: "Atelier kokedama" },
    ],
  }} />
);
export default GuideTerrarium;
