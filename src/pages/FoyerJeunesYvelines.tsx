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
    "pitch": "Un atelier botanique pour foyer de jeunes travailleur·ses des Yvelines. Le 78 compte plusieurs foyers de jeunes travailleur·ses dans le Mantois, à Trappes et autour de Saint-Quentin-en-Yvelines. Format inclusif, sans préjugé, qui pose un moment de calme et de créativité.",
    "why": [
            {
                    "title": "Apaisant",
                    "desc": "Les plantes recentrent, ralentissent, apaisent. Un effet observé dès la première séance, sur des publics parfois en tension liée à leur parcours."
            },
            {
                    "title": "Sans prérequis",
                    "desc": "Aucune connaissance botanique demandée. Aucun jugement sur le résultat de la création, l'important est le geste et la présence."
            },
            {
                    "title": "Repartir avec",
                    "desc": "Chaque jeune repart avec une plante à faire vivre dans sa chambre des Yvelines, qui devient un compagnon discret et durable."
            }
    ],
    "formula": [
            {
                    "line": "Accueil ouvert",
                    "detail": "L'atelier est annoncé en interne, les jeunes viennent à leur rythme. Pas d'inscription forcée, juste une invitation."
            },
            {
                    "line": "Animation guidée",
                    "detail": "Format simple et accessible, terrarium, bouture, kokedama. La médiatrice circule et accompagne sans presser."
            },
            {
                    "line": "Échange libre",
                    "detail": "L'animation est l'occasion de parler du vivant, des saisons, des origines, sans poser de question intrusive."
            },
            {
                    "line": "Cycle possible",
                    "detail": "Plusieurs séances espacées pour installer une habitude et créer un rendez-vous attendu."
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
                    "a": "Oui, nous travaillons avec des structures associatives et publiques. Notre statut associatif facilite les financements."
            },
            {
                    "q": "Disponible dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement en IDF. Notre public mêle familles installées dans les villes de l'ouest parisien, comités d'entreprise des sièges sociaux du Mantois et institutions culturelles autour du château de Versailles."
            },
            {
                    "q": "Cycle régulier possible ?",
                    "a": "Oui, c'est même la formule la plus efficace pour ce type de public. Une présence régulière permet d'installer la confiance."
            },
            {
                    "q": "Public mixte ?",
                    "a": "Oui, l'atelier accueille jeunes hommes et jeunes femmes ensemble. La plante est un terrain neutre qui facilite la mixité."
            }
    ]
  }} />
);
export default FoyerJeunesYvelines;
