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
    "pitch": "Offrir mieux qu'un objet : une expérience, dans le Hauts-de-Seine. Nos cartes cadeaux donnent accès à un atelier ou une balade qui restera longtemps en mémoire.",
    "why": [
        {
            "title": "Vivant",
            "desc": "L'expérience marque, la création repart à la maison, la plante grandit."
        },
        {
            "title": "Personnalisable",
            "desc": "L'atelier au choix, la date au choix, le lieu au choix."
        },
        {
            "title": "Local",
            "desc": "Soutient une animatrice locale plutôt qu'une plateforme nationale."
        }
    ],
    "formula": [
        {
            "line": "Carte cadeau",
            "detail": "Format PDF ou papier, à offrir directement."
        },
        {
            "line": "Choix de l'atelier",
            "detail": "Le ou la bénéficiaire choisit terrarium, kokedama, teinture, balade."
        },
        {
            "line": "Réservation",
            "detail": "Réservation simple par mail, créneaux ouverts toute l'année."
        },
        {
            "line": "Validité",
            "detail": "Un an de validité à partir de la date d'achat."
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
            "q": "Comment offrir ?",
            "a": "Nous vous envoyons une carte par mail, à imprimer ou à transférer directement."
        },
        {
            "q": "Valable dans le 92 ?",
            "a": "Oui, valable pour tous nos ateliers à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et au-delà."
        },
        {
            "q": "Échangeable ?",
            "a": "Oui, l'atelier choisi peut être modifié au moment de la réservation."
        },
        {
            "q": "Prolongation possible ?",
            "a": "Oui, en cas d'imprévu nous prolongeons volontiers la validité."
        }
    ]
}} />
);
export default CadeauOriginalNatureHautsDeSeine;
