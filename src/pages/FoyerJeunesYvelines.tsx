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
                    "detail": "Atelier annoncé en interne, les résident·e·s viennent à leur rythme. Format apprécié dans les foyers du Mantois et de Saint-Quentin."
            },
            {
                    "line": "Animation guidée",
                    "detail": "Format simple (bouture, terrarium, kokedama), animation pas à pas par notre médiatrice."
            },
            {
                    "line": "Échange libre",
                    "detail": "L'atelier est l'occasion d'aborder le vivant, les saisons, parfois les origines, sans question intrusive."
            },
            {
                    "line": "Cycle régulier",
                    "detail": "Plusieurs séances espacées pour installer une habitude, en lien avec l'équipe socio-éducative du foyer."
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
                    "a": "Oui, nous travaillons avec des structures associatives et publiques. Statut associatif qui facilite les financements via politiques jeunesse."
            },
            {
                    "q": "Disponible dans le 78 ?",
                    "a": "Oui, en lien avec les foyers de jeunes travailleur·ses du Mantois et de Saint-Quentin-en-Yvelines, et plus largement des Yvelines."
            },
            {
                    "q": "Cycle régulier conseillé ?",
                    "a": "Oui, c'est la formule la plus efficace pour ce type de public. Une présence régulière permet d'installer la confiance et le rituel."
            },
            {
                    "q": "Public mixte ?",
                    "a": "Oui, l'atelier accueille jeunes hommes et jeunes femmes ensemble. La plante est un terrain neutre qui facilite la mixité dans des contextes parfois sensibles."
            }
    ]
  }} />
);
export default FoyerJeunesYvelines;
