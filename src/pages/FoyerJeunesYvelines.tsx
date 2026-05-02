import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const FoyerJeunesYvelines = () => (
  <OccasionTemplate data={{
    "slug": "foyer-jeunes-yvelines",
    "icon": Heart,
    "eyebrow": "Foyer jeunes",
    "title": "Animation foyer jeunes travailleurs Yvelines",
    "metaTitle": "Animation foyer jeunes Yvelines, atelier botanique",
    "metaDesc": "Animation en foyer jeunes travailleurs dans le 78 Yvelines. Atelier botanique inclusif, sensible aux publics fragilisés.",
    "pitch": "Un atelier botanique pour foyer de jeunes travailleur·ses dans le Yvelines. Format inclusif, sans préjugé, qui pose un moment de calme et de créativité.",
    "why": [
        {
            "title": "Apaisant",
            "desc": "Les plantes recentrent, ralentissent, apaisent."
        },
        {
            "title": "Sans prérequis",
            "desc": "Aucune connaissance botanique demandée, juste l'envie d'essayer."
        },
        {
            "title": "Repartir avec",
            "desc": "Chaque jeune repart avec une plante à faire vivre dans sa chambre."
        }
    ],
    "formula": [
        {
            "line": "Accueil ouvert",
            "detail": "L'atelier est annoncé, les jeunes viennent à leur rythme."
        },
        {
            "line": "Animation guidée",
            "detail": "Format simple et accessible, terrarium, bouture, kokedama."
        },
        {
            "line": "Échange libre",
            "detail": "L'animation est l'occasion de parler du vivant, des saisons, des origines."
        },
        {
            "line": "Cycle possible",
            "detail": "Plusieurs séances espacées pour installer une habitude."
        }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "1h30"
        },
        {
            "label": "Public",
            "value": "Jeunes 18-30 ans"
        },
        {
            "label": "Lieu",
            "value": "Yvelines (78)"
        },
        {
            "label": "Tarif",
            "value": "Sur devis"
        }
    ],
    "related": [
        {
            "to": "/balades-botaniques",
            "label": "Balades"
        },
        {
            "to": "/team-building-nature-entreprise",
            "label": "Team building"
        },
        {
            "to": "/balade-botanique-yvelines",
            "label": "Balade Yvelines"
        }
    ],
    "faqs": [
        {
            "q": "Conventionnement possible ?",
            "a": "Oui, nous travaillons avec des structures associatives et publiques."
        },
        {
            "q": "Disponible dans le 78 ?",
            "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement en IDF."
        },
        {
            "q": "Cycle régulier possible ?",
            "a": "Oui, c'est même la formule la plus efficace pour ce type de public."
        },
        {
            "q": "Public mixte ?",
            "a": "Oui, l'atelier accueille jeunes hommes et jeunes femmes ensemble."
        }
    ]
}} />
);
export default FoyerJeunesYvelines;
