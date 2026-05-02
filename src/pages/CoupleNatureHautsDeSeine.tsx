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
    "pitch": "Une idée de date qui sort du cinéma-resto. Dans le Hauts-de-Seine, vous composez à deux un objet végétal qui restera chez vous bien après la soirée.",
    "why": [
        {
            "title": "Original",
            "desc": "Loin des formats touristiques classiques. Un vrai moment, une vraie création."
        },
        {
            "title": "À votre rythme",
            "desc": "Animation guidée mais pas dirigiste. Vous prenez le temps qu'il vous faut."
        },
        {
            "title": "Souvenir vivant",
            "desc": "Vous repartez avec une plante qui grandira sous vos yeux pendant des années."
        }
    ],
    "formula": [
        {
            "line": "Accueil",
            "detail": "Présentation du matériel et de l'atelier, choix de la formule."
        },
        {
            "line": "Création à deux",
            "detail": "Vous composez un terrarium ou deux kokedamas en miroir."
        },
        {
            "line": "Conseils",
            "detail": "Tout ce qu'il faut savoir pour faire vivre votre création."
        },
        {
            "line": "Repartir avec",
            "detail": "Votre objet végétal à installer chez vous le soir même."
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
            "q": "Format pour une demande ?",
            "a": "Oui, c'est possible. Discutons-en par mail pour orchestrer le moment discrètement."
        },
        {
            "q": "Disponible dans le 92 ?",
            "a": "Oui, Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement."
        },
        {
            "q": "À domicile possible ?",
            "a": "Oui, c'est même un format souvent demandé pour ce type d'atelier intimiste."
        },
        {
            "q": "Carte cadeau possible ?",
            "a": "Oui, nous proposons des cartes cadeaux pour offrir l'atelier."
        }
    ]
}} />
);
export default CoupleNatureHautsDeSeine;
