import ProductTemplate from "@/components/ProductTemplate";
import { Heart } from "lucide-react";

const EvjfYvelines = () => (
  <ProductTemplate data={{
    "slug": "atelier-evjf-botanique-yvelines",
    "icon": Heart,
    "eyebrow": "EVJF botanique",
    "title": "Atelier EVJF botanique Yvelines",
    "metaTitle": "Atelier EVJF botanique Yvelines, alternative douce",
    "metaDesc": "EVJF botanique dans le 78 Yvelines. Une alternative douce et créative aux EVJF classiques, terrarium, kokedama ou couronne.",
    "lead": "Un EVJF botanique dans Yvelines, c'est l'inverse des paillettes. Un format manuel et tendre où la future mariée et ses proches vivent un moment vrai, autour des plantes, sans gêne ni surenchère.",
    "story": [
            "L'EVJF botanique attire celles qui cherchent un moment posé, élégant, sans cadeau gênant ni accessoire criard. Pas de jeux qui mettent mal à l'aise, pas de challenge à relever. Juste un atelier guidé, du temps partagé, et une création à rapporter chez soi.",
            "Dans Yvelines, nous animons ce format à domicile, dans une salle privée, dans un jardin ou un lieu choisi par vous, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie. Le moment dure environ deux heures et peut s'enchaîner avec un brunch, une balade ou une autre activité.",
            "Au choix : terrarium, kokedama, couronne végétale ou teinture textile. La future mariée peut être célébrée par une création collective offerte par le groupe, des mots tendres ou simplement la qualité du moment partagé. C'est ici, au Potager du Roi, que Jean-Baptiste de La Quintinie a fait pousser des asperges en hiver pour Louis XIV, en inventant des techniques de forçage encore enseignées aujourd'hui."
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
            "value": "Yvelines (78)"
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
            "to": "/balade-botanique-yvelines",
            "label": "Balade Yvelines"
        },
        {
            "to": "/team-building-nature-entreprise",
            "label": "Format entreprise"
        }
    ],
    "faqs": [
            {
                    "q": "Vous venez à domicile dans le 78 ?",
                    "a": "Oui, partout dans Yvelines : Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et au-delà. Nous arrivons avec tout le matériel végétal et l'outillage. Vous prévoyez juste les tables et les chaises."
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
                    "a": "Quatre à six semaines minimum, surtout pour les samedis. Près de parc du château de Versailles ou la forêt de Saint-Germain, les week-ends de printemps partent très vite."
            }
    ]
  }} />
);
export default EvjfYvelines;
