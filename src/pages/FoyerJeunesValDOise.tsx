import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const FoyerJeunesValDOise = () => (
  <OccasionTemplate data={{
    "slug": "foyer-jeunes-val-d-oise",
    "icon": Heart,
    "eyebrow": "Foyer jeunes",
    "title": "Animation foyer jeunes travailleurs Val-d'Oise",
    "metaTitle": "Animation foyer jeunes Val-d'Oise, atelier botanique",
    "metaDesc": "Animation en foyer jeunes travailleurs dans le 95 Val-d'Oise. Atelier botanique inclusif, sensible aux publics fragilisés.",
    "pitch": "Un atelier botanique pour foyer de jeunes travailleur·ses dans le Val-d'Oise. Format inclusif, sans préjugé, qui pose un moment de calme et de créativité.",
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
            "value": "Val-d'Oise (95)"
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
            "to": "/balade-botanique-val-d-oise",
            "label": "Balade Val-d'Oise"
        }
    ],
    "faqs": [
        {
            "q": "Conventionnement possible ?",
            "a": "Oui, nous travaillons avec des structures associatives et publiques."
        },
        {
            "q": "Disponible dans le 95 ?",
            "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement en IDF."
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
export default FoyerJeunesValDOise;
