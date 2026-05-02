import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const CadeauOriginalNatureYvelines = () => (
  <OccasionTemplate data={{
    "slug": "cadeau-original-nature-yvelines",
    "icon": Heart,
    "eyebrow": "Cadeau original",
    "title": "Idée de cadeau original nature Yvelines",
    "metaTitle": "Cadeau original nature Yvelines, atelier ou carte",
    "metaDesc": "Idée de cadeau original nature dans le 78 Yvelines. Carte cadeau atelier botanique, terrarium, kokedama, balade ethnobotanique.",
    "pitch": "Offrir mieux qu'un objet : une expérience, des Yvelines. Nos cartes cadeaux donnent accès à un atelier ou une balade dans Yvelines, qui repart avec une création vivante.",
    "why": [
            {
                    "title": "Vivant",
                    "desc": "L'expérience marque, la création repart à la maison, la plante grandit. Trois souvenirs en un seul cadeau."
            },
            {
                    "title": "Personnalisable",
                    "desc": "L'atelier au choix du ou de la bénéficiaire, la date au choix, le lieu au choix dans Yvelines. Liberté totale dans l'usage."
            },
            {
                    "title": "Local",
                    "desc": "Soutient une animatrice locale qui anime régulièrement à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie, plutôt qu'une plateforme nationale qui prélève sa marge."
            }
    ],
    "formula": [
            {
                    "line": "Carte cadeau",
                    "detail": "Format PDF par mail dans la journée, à offrir directement, valable sur tous nos formats des Yvelines."
            },
            {
                    "line": "Choix de l'atelier",
                    "detail": "Le ou la bénéficiaire choisit terrarium, kokedama, teinture ou balade dans le parc du château de Versailles ou la forêt de Saint-Germain."
            },
            {
                    "line": "Réservation",
                    "detail": "Réservation simple par mail, créneaux ouverts toute l'année, week-ends inclus."
            },
            {
                    "line": "Validité",
                    "detail": "Un an à partir de l'achat. Prolongation possible en cas d'imprévu (déménagement, grossesse)."
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
            "value": "Yvelines (78)"
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
            "to": "/balade-botanique-yvelines",
            "label": "Balade Yvelines"
        }
    ],
    "faqs": [
            {
                    "q": "Comment offrir la carte ?",
                    "a": "Nous vous envoyons une carte par mail dans la journée, à imprimer ou à transférer directement au ou à la bénéficiaire."
            },
            {
                    "q": "Valable dans le 78 ?",
                    "a": "Oui, valable pour tous nos ateliers à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement en IDF. Le ou la bénéficiaire choisit le créneau et le format."
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
export default CadeauOriginalNatureYvelines;
