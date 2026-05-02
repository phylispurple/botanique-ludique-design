import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const CoupleNatureYvelines = () => (
  <OccasionTemplate data={{
    "slug": "couple-nature-yvelines",
    "icon": Heart,
    "eyebrow": "Atelier en couple",
    "title": "Atelier en couple autour des plantes Yvelines",
    "metaTitle": "Atelier couple botanique Yvelines, à deux",
    "metaDesc": "Atelier botanique en couple dans le 78 Yvelines. Idée de date originale autour des plantes, terrarium ou kokedama à deux.",
    "pitch": "Une idée de date qui sort du cinéma-restaurant, dans Yvelines. Vous composez à deux un objet végétal qui restera chez vous bien après la soirée, et vous repartez avec quelque chose de vivant.",
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
                    "detail": "Présentation du matériel et de l'atelier, choix de la formule entre terrarium, kokedama ou bouture."
            },
            {
                    "line": "Création à deux",
                    "detail": "Vous composez ensemble un terrarium ou deux kokedamas en miroir, selon ce que vous préférez."
            },
            {
                    "line": "Conseils",
                    "detail": "Tout ce qu'il faut savoir pour faire vivre votre création à la maison sur le long terme."
            },
            {
                    "line": "Repartir avec",
                    "detail": "Votre objet végétal à installer chez vous le soir même, sans étape technique supplémentaire."
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
            "value": "Yvelines (78)"
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
            "to": "/balade-botanique-yvelines",
            "label": "Balade Yvelines"
        }
    ],
    "faqs": [
            {
                    "q": "Format pour une demande en mariage ?",
                    "a": "Oui, c'est possible et nous l'avons déjà animé plusieurs fois. Discutons-en par mail pour orchestrer le moment discrètement."
            },
            {
                    "q": "Disponible dans le 78 ?",
                    "a": "Oui, Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement des Yvelines. À domicile ou dans un lieu choisi par vous."
            },
            {
                    "q": "À domicile possible ?",
                    "a": "Oui, c'est même un format souvent demandé pour ce type d'atelier intimiste, dans un appartement ou une maison."
            },
            {
                    "q": "Carte cadeau possible ?",
                    "a": "Oui, nous proposons des cartes cadeaux pour offrir l'atelier en couple. Validité un an, atelier au choix au moment de la réservation."
            }
    ]
  }} />
);
export default CoupleNatureYvelines;
