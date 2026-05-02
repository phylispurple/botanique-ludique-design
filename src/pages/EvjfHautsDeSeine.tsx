import ProductTemplate from "@/components/ProductTemplate";
import { Heart } from "lucide-react";

const EvjfHautsDeSeine = () => (
  <ProductTemplate data={{
    "slug": "atelier-evjf-botanique-hauts-de-seine",
    "icon": Heart,
    "eyebrow": "EVJF botanique",
    "title": "Atelier EVJF botanique Hauts-de-Seine",
    "metaTitle": "Atelier EVJF botanique Hauts-de-Seine, alternative douce",
    "metaDesc": "EVJF botanique dans le 92 Hauts-de-Seine. Une alternative douce et créative aux EVJF classiques, terrarium, kokedama ou couronne.",
    "lead": "Un EVJF botanique dans Hauts-de-Seine, c'est l'inverse des paillettes. Un format manuel et tendre où la future mariée et ses proches vivent un moment vrai, autour des plantes, sans gêne ni surenchère.",
    "story": [
            "L'EVJF botanique attire celles qui cherchent un moment posé, élégant, sans cadeau gênant ni accessoire criard. Pas de jeux qui mettent mal à l'aise, pas de challenge à relever. Juste un atelier guidé, du temps partagé, et une création à rapporter chez soi.",
            "Dans Hauts-de-Seine, nous animons ce format à domicile, dans une salle privée, dans un jardin ou un lieu choisi par vous, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly. Le moment dure environ deux heures et peut s'enchaîner avec un brunch, une balade ou une autre activité.",
            "Au choix : terrarium, kokedama, couronne végétale ou teinture textile. La future mariée peut être célébrée par une création collective offerte par le groupe, des mots tendres ou simplement la qualité du moment partagé. Joséphine de Beauharnais a fait venir à Rueil-Malmaison, dès 1799, des plantes du monde entier, dont les premiers eucalyptus cultivés en France et un dahlia qui a déclenché toute une mode horticole."
    ],
    "steps": [
            {
                    "title": "Accueil et présentation",
                    "desc": "Verre d'accueil, présentation du format choisi, mise en lien du groupe. Un démarrage doux qui pose le ton."
            },
            {
                    "title": "Atelier guidé",
                    "desc": "Animation pas à pas par notre médiatrice, autour de la future mariée, sans pression de performance. Le geste prime sur le résultat."
            },
            {
                    "title": "Moment dédié",
                    "desc": "Pause pour les photos, mots des invitées, possibilité d'offrir une création collective à la future mariée si vous le souhaitez."
            },
            {
                    "title": "Repartir avec sa création",
                    "desc": "Chaque participante repart avec son objet végétal et une documentation d'entretien. Un souvenir qui dure."
            }
    ],
    "formats": [
        {
            "label": "Durée",
            "value": "2h"
        },
        {
            "label": "Groupe",
            "value": "5 à 12 pers."
        },
        {
            "label": "Lieu",
            "value": "Hauts-de-Seine (92)"
        },
        {
            "label": "Prix",
            "value": "À partir de 45 €/pers."
        }
    ],
    "bookingTo": "/contact",
    "bookingLabel": "Réserver un atelier",
    "related": [
        {
            "to": "/balades-botaniques",
            "label": "Balades botaniques"
        },
        {
            "to": "/balade-botanique-hauts-de-seine",
            "label": "Balade Hauts-de-Seine"
        },
        {
            "to": "/team-building-nature-entreprise",
            "label": "Format entreprise"
        }
    ],
    "faqs": [
            {
                    "q": "Vous venez à domicile dans le 92 ?",
                    "a": "Oui, partout dans Hauts-de-Seine : Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et au-delà. Nous arrivons avec tout le matériel végétal et l'outillage. Vous prévoyez juste les tables et les chaises."
            },
            {
                    "q": "Quel atelier choisir pour quel groupe ?",
                    "a": "Terrarium pour le côté spectaculaire, kokedama pour la douceur méditative, couronne pour l'esthétique très photogénique, teinture pour les groupes très créatifs."
            },
            {
                    "q": "Peut-on offrir une création à la mariée ?",
                    "a": "Oui, en option. Les invitées composent ensemble une création plus grande, qui devient le cadeau principal de l'EVJF."
            },
            {
                    "q": "Quel délai de réservation ?",
                    "a": "Quatre à six semaines minimum, surtout pour les samedis. Près de parc de Sceaux ou le bois de Boulogne, les week-ends de printemps partent très vite."
            }
    ]
  }} />
);
export default EvjfHautsDeSeine;
