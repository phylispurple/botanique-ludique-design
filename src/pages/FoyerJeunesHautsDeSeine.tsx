import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const FoyerJeunesHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "foyer-jeunes-hauts-de-seine",
    "icon": Heart,
    "eyebrow": "Foyer jeunes",
    "title": "Animation foyer jeunes travailleurs Hauts-de-Seine",
    "metaTitle": "Animation foyer jeunes Hauts-de-Seine, atelier botanique",
    "metaDesc": "Animation en foyer jeunes travailleurs dans le 92 Hauts-de-Seine. Atelier botanique inclusif, sensible aux publics fragilisés.",
    "pitch": "Un atelier botanique pour foyer de jeunes travailleur·ses des Hauts-de-Seine. Le 92 compte plusieurs foyers Habitat Jeunes à Nanterre, Gennevilliers et Clichy, accueillant des publics en insertion. Format inclusif, sans préjugé, qui pose un moment de calme et de créativité.",
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
                    "desc": "Chaque jeune repart avec une plante à faire vivre dans sa chambre des Hauts-de-Seine, qui devient un compagnon discret et durable."
            }
    ],
    "formula": [
            {
                    "line": "Accueil ouvert",
                    "detail": "Atelier ouvert aux résident·e·s, format apprécié des foyers Habitat Jeunes de Nanterre, Gennevilliers ou Clichy."
            },
            {
                    "line": "Animation guidée",
                    "detail": "Format simple, accessible, qui fonctionne avec un public en insertion sociale et professionnelle."
            },
            {
                    "line": "Échange libre",
                    "detail": "Conversation libre autour des plantes, sans cadre rigide, qui ouvre des sujets parfois inattendus."
            },
            {
                    "line": "Cycle régulier",
                    "detail": "Plusieurs séances pour créer un rendez-vous attendu et faciliter l'appropriation par le groupe."
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
            "value": "Hauts-de-Seine (92)"
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
            "to": "/balade-botanique-hauts-de-seine",
            "label": "Balade Hauts-de-Seine"
        }
    ],
    "faqs": [
            {
                    "q": "Conventionnement possible ?",
                    "a": "Oui, nous travaillons avec des structures associatives et publiques. Statut associatif qui facilite les financements via politiques jeunesse."
            },
            {
                    "q": "Disponible dans le 92 ?",
                    "a": "Oui, en lien avec les foyers Habitat Jeunes de Nanterre, Gennevilliers et Clichy, et plus largement des Hauts-de-Seine."
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
export default FoyerJeunesHautsDeSeine;
