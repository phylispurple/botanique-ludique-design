import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const CadeauOriginalNatureHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "cadeau-original-nature-hauts-de-seine",
    "icon": Heart,
    "eyebrow": "Cadeau original",
    "title": "Idée de cadeau original nature Hauts-de-Seine",
    "metaTitle": "Cadeau original nature Hauts-de-Seine, atelier ou carte",
    "metaDesc": "Idée de cadeau original nature dans le 92 Hauts-de-Seine. Carte cadeau atelier botanique, terrarium, kokedama, balade ethnobotanique.",
    "pitch": "Offrir mieux qu'un objet : une expérience, des Hauts-de-Seine. Nos cartes cadeaux donnent accès à un atelier ou une balade dans Hauts-de-Seine, qui repart avec une création vivante.",
    "why": [
            {
                    "title": "Vivant",
                    "desc": "L'expérience marque, la création repart à la maison, la plante grandit. Trois souvenirs en un seul cadeau."
            },
            {
                    "title": "Personnalisable",
                    "desc": "L'atelier au choix du ou de la bénéficiaire, la date au choix, le lieu au choix dans Hauts-de-Seine. Liberté totale dans l'usage."
            },
            {
                    "title": "Local",
                    "desc": "Soutient une animatrice locale qui anime régulièrement à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly, plutôt qu'une plateforme nationale qui prélève sa marge."
            }
    ],
    "formula": [
            {
                    "line": "Carte cadeau",
                    "detail": "Format PDF par mail dans la journée, valable sur tous nos formats des Hauts-de-Seine."
            },
            {
                    "line": "Choix de l'atelier",
                    "detail": "Le ou la bénéficiaire choisit terrarium, kokedama, teinture ou balade dans le parc de Sceaux ou le bois de Boulogne."
            },
            {
                    "line": "Réservation",
                    "detail": "Réservation par mail, créneaux nombreux en semaine et week-end, particulièrement à Boulogne et Issy."
            },
            {
                    "line": "Validité",
                    "detail": "Un an à partir de l'achat, prolongation gracieuse en cas d'imprévu de la vie."
            }
    ],
    "practical": [
        {
            "label": "Format",
            "value": "Carte cadeau"
        },
        {
            "label": "Validité",
            "value": "1 an"
        },
        {
            "label": "Lieu",
            "value": "Hauts-de-Seine (92)"
        },
        {
            "label": "Prix",
            "value": "À partir de 45 €"
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
                    "q": "Comment offrir la carte ?",
                    "a": "Nous vous envoyons une carte par mail dans la journée, à imprimer ou à transférer directement au ou à la bénéficiaire."
            },
            {
                    "q": "Valable dans le 92 ?",
                    "a": "Oui, valable pour tous nos ateliers à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement en IDF. Le ou la bénéficiaire choisit le créneau et le format."
            },
            {
                    "q": "Échangeable ?",
                    "a": "Oui, l'atelier choisi peut être modifié au moment de la réservation, sans frais et sans justification."
            },
            {
                    "q": "Prolongation possible ?",
                    "a": "Oui, en cas d'imprévu (grossesse, déménagement, problème de santé) nous prolongeons volontiers la validité de plusieurs mois."
            }
    ]
  }} />
);
export default CadeauOriginalNatureHautsDeSeine;
