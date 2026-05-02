import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const CoupleNatureHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "couple-nature-hauts-de-seine",
    "icon": Heart,
    "eyebrow": "Atelier en couple",
    "title": "Atelier en couple autour des plantes Hauts-de-Seine",
    "metaTitle": "Atelier couple botanique Hauts-de-Seine, à deux",
    "metaDesc": "Atelier botanique en couple dans le 92 Hauts-de-Seine. Idée de date originale autour des plantes, terrarium ou kokedama à deux.",
    "pitch": "Une idée de date qui sort du cinéma-restaurant, dans Hauts-de-Seine. Vous composez à deux un objet végétal qui restera chez vous bien après la soirée, et vous repartez avec quelque chose de vivant.",
    "why": [
            {
                    "title": "Original",
                    "desc": "Loin des formats touristiques classiques. Un vrai moment manuel, une vraie création, une expérience qui se raconte ensuite."
            },
            {
                    "title": "À votre rythme",
                    "desc": "Animation guidée mais jamais dirigiste. Vous prenez le temps qu'il vous faut, parlez ou pas, suivez votre propre tempo."
            },
            {
                    "title": "Souvenir vivant",
                    "desc": "Vous repartez avec une plante qui grandira sous vos yeux pendant des années. Un compagnon de la relation, sans surcharger l'instant."
            }
    ],
    "formula": [
            {
                    "line": "Accueil",
                    "detail": "Présentation du matériel et choix de la formule dans un appartement à Boulogne, un loft à Issy ou une maison à Neuilly, ou dans un lieu choisi par vous."
            },
            {
                    "line": "Création à deux",
                    "detail": "Vous composez ensemble un terrarium ou deux kokedamas en miroir, à votre tempo."
            },
            {
                    "line": "Conseils",
                    "detail": "Conseils adaptés aux appartements des Hauts-de-Seine, souvent lumineux mais avec chauffage soutenu."
            },
            {
                    "line": "Repartir avec",
                    "detail": "Votre création installée chez vous le soir même, sans manipulation supplémentaire."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "1h30"
        },
        {
            "label": "Groupe",
            "value": "2 pers."
        },
        {
            "label": "Lieu",
            "value": "Hauts-de-Seine (92)"
        },
        {
            "label": "Prix",
            "value": "À partir de 90 € le couple"
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
                    "q": "Format pour une demande en mariage ?",
                    "a": "Oui, possible et déjà orchestré des Hauts-de-Seine. Mail pour les détails."
            },
            {
                    "q": "Disponible dans le 92 ?",
                    "a": "Oui, Boulogne, Issy-les-Moulineaux, Neuilly, Sceaux et plus largement. Très demandé à Boulogne et Issy."
            },
            {
                    "q": "À domicile ?",
                    "a": "Oui, format majoritaire. Adapté aux appartements urbains comme aux maisons de Sceaux ou Meudon."
            },
            {
                    "q": "Carte cadeau ?",
                    "a": "Oui, valable un an, atelier au choix au moment de la réservation."
            }
    ]
  }} />
);
export default CoupleNatureHautsDeSeine;
