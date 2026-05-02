import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const CadeauOriginalNatureParis = () => (
  <OccasionTemplate data={{
    "slug": "cadeau-original-nature-paris",
    "icon": Heart,
    "eyebrow": "Cadeau original",
    "title": "Idée de cadeau original nature Paris",
    "metaTitle": "Cadeau original nature Paris, atelier ou carte",
    "metaDesc": "Idée de cadeau original nature dans le 75 Paris. Carte cadeau atelier botanique, terrarium, kokedama, balade ethnobotanique.",
    "pitch": "Offrir mieux qu'un objet : une expérience, parisien·nes. Nos cartes cadeaux donnent accès à un atelier ou une balade dans Paris, qui repart avec une création vivante.",
    "why": [
            {
                    "title": "Vivant",
                    "desc": "L'expérience marque, la création repart à la maison, la plante grandit. Trois souvenirs en un seul cadeau."
            },
            {
                    "title": "Personnalisable",
                    "desc": "L'atelier au choix du ou de la bénéficiaire, la date au choix, le lieu au choix dans Paris. Liberté totale dans l'usage."
            },
            {
                    "title": "Local",
                    "desc": "Soutient une animatrice locale qui anime régulièrement à tous les arrondissements parisiens, plutôt qu'une plateforme nationale qui prélève sa marge."
            }
    ],
    "formula": [
            {
                    "line": "Carte cadeau",
                    "detail": "Format PDF par mail ou carte papier sur demande, à offrir directement au ou à la bénéficiaire."
            },
            {
                    "line": "Choix de l'atelier",
                    "detail": "Le ou la bénéficiaire choisit terrarium, kokedama, teinture, balade ethnobotanique selon ses envies."
            },
            {
                    "line": "Réservation",
                    "detail": "Réservation simple par mail, créneaux ouverts toute l'année avec une concentration sur le printemps et l'automne."
            },
            {
                    "line": "Validité",
                    "detail": "Un an de validité à partir de la date d'achat. Prolongation possible en cas d'imprévu, sur simple demande."
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
            "value": "Paris (75)"
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
            "to": "/balade-botanique-paris",
            "label": "Balade Paris"
        }
    ],
    "faqs": [
            {
                    "q": "Comment offrir la carte ?",
                    "a": "Nous vous envoyons une carte par mail dans la journée, à imprimer ou à transférer directement au ou à la bénéficiaire."
            },
            {
                    "q": "Valable dans le 75 ?",
                    "a": "Oui, valable pour tous nos ateliers à tous les arrondissements parisiens et plus largement en IDF. Le ou la bénéficiaire choisit le créneau et le format."
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
export default CadeauOriginalNatureParis;
