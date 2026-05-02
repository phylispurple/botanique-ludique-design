import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const FoyerJeunesParis = () => (
  <OccasionTemplate data={{
    "slug": "foyer-jeunes-paris",
    "icon": Heart,
    "eyebrow": "Foyer jeunes",
    "title": "Animation foyer jeunes travailleurs Paris",
    "metaTitle": "Animation foyer jeunes Paris, atelier botanique",
    "metaDesc": "Animation en foyer jeunes travailleurs dans le 75 Paris. Atelier botanique inclusif, sensible aux publics fragilisés.",
    "pitch": "Un atelier botanique pour foyer de jeunes travailleur·ses parisien·nes. Paris compte de nombreux Foyers de Jeunes Travailleur·ses (FJT) gérés par l'ALJT et l'URHAJ, en lien avec les politiques jeunesse de la ville. Format inclusif, sans préjugé, qui pose un moment de calme et de créativité.",
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
                    "desc": "Chaque jeune repart avec une plante à faire vivre dans sa chambre parisien·nes, qui devient un compagnon discret et durable."
            }
    ],
    "formula": [
            {
                    "line": "Accueil ouvert",
                    "detail": "Atelier ouvert aux résident·e·s, format apprécié des FJT parisiens (ALJT, URHAJ)."
            },
            {
                    "line": "Animation guidée",
                    "detail": "Format adapté à des résident·e·s parisien·nes en insertion, souvent en horaires décalés."
            },
            {
                    "line": "Échange libre",
                    "detail": "Conversation libre autour des plantes, qui ouvre sur la nature en ville et le rapport au vivant."
            },
            {
                    "line": "Cycle régulier",
                    "detail": "Séances mensuelles pour installer un rendez-vous attendu, en lien avec l'équipe socio-éducative."
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
            "value": "Paris (75)"
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
            "to": "/balade-botanique-paris",
            "label": "Balade Paris"
        }
    ],
    "faqs": [
            {
                    "q": "Conventionnement possible ?",
                    "a": "Oui, nous travaillons avec des structures associatives et publiques. Statut associatif qui facilite les financements via politiques jeunesse."
            },
            {
                    "q": "Disponible dans le 75 ?",
                    "a": "Oui, en lien avec les Foyers de Jeunes Travailleur·ses gérés par l'ALJT et l'URHAJ à Paris, et plus largement parisien·nes."
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
export default FoyerJeunesParis;
