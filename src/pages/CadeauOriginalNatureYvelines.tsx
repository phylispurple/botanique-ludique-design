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
    "pitch": "Offrir mieux qu'un objet : une expérience, dans le Yvelines. Nos cartes cadeaux donnent accès à un atelier ou une balade qui restera longtemps en mémoire.",
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
            "q": "Comment offrir ?",
            "a": "Nous vous envoyons une carte par mail, à imprimer ou à transférer directement."
        },
        {
            "q": "Valable dans le 78 ?",
            "a": "Oui, valable pour tous nos ateliers à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et au-delà."
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
export default CadeauOriginalNatureYvelines;
