import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const CadeauOriginalNatureValDOise = () => (
  <OccasionTemplate data={{
    "slug": "cadeau-original-nature-val-d-oise",
    "icon": Heart,
    "eyebrow": "Cadeau original",
    "title": "Idée de cadeau original nature Val-d'Oise",
    "metaTitle": "Cadeau original nature Val-d'Oise, atelier ou carte",
    "metaDesc": "Idée de cadeau original nature dans le 95 Val-d'Oise. Carte cadeau atelier botanique, terrarium, kokedama, balade ethnobotanique.",
    "pitch": "Offrir mieux qu'un objet : une expérience, du Val-d'Oise. Nos cartes cadeaux donnent accès à un atelier ou une balade dans Val-d'Oise, qui repart avec une création vivante.",
    "why": [
            {
                    "title": "Vivant",
                    "desc": "L'expérience marque, la création repart à la maison, la plante grandit. Trois souvenirs en un seul cadeau."
            },
            {
                    "title": "Personnalisable",
                    "desc": "L'atelier au choix du ou de la bénéficiaire, la date au choix, le lieu au choix dans Val-d'Oise. Liberté totale dans l'usage."
            },
            {
                    "title": "Local",
                    "desc": "Soutient une animatrice locale qui anime régulièrement à Cergy, Argenteuil, Sarcelles, Pontoise, plutôt qu'une plateforme nationale qui prélève sa marge."
            }
    ],
    "formula": [
            {
                    "line": "Carte cadeau",
                    "detail": "Format PDF par mail dans la journée, valable sur tous nos formats du Val-d'Oise."
            },
            {
                    "line": "Choix de l'atelier",
                    "detail": "Le ou la bénéficiaire choisit terrarium, kokedama, teinture ou balade dans le parc du château de La Roche-Guyon ou la forêt de Montmorency."
            },
            {
                    "line": "Réservation",
                    "detail": "Réservation par mail, créneaux ouverts en semaine et week-end, à Cergy, Pontoise et plus largement."
            },
            {
                    "line": "Validité",
                    "detail": "Un an à partir de l'achat, prolongation gracieuse en cas d'imprévu."
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
            "value": "Val-d'Oise (95)"
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
            "to": "/balade-botanique-val-d-oise",
            "label": "Balade Val-d'Oise"
        }
    ],
    "faqs": [
            {
                    "q": "Comment offrir la carte ?",
                    "a": "Nous vous envoyons une carte par mail dans la journée, à imprimer ou à transférer directement au ou à la bénéficiaire."
            },
            {
                    "q": "Valable dans le 95 ?",
                    "a": "Oui, valable pour tous nos ateliers à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement en IDF. Le ou la bénéficiaire choisit le créneau et le format."
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
export default CadeauOriginalNatureValDOise;
