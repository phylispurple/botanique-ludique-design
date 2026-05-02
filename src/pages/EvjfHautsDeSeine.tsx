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
    "lead": "Un EVJF qui ne mise pas sur les paillettes. Dans le Hauts-de-Seine, nous proposons un format manuel et tendre, où la future mariée et ses proches vivent un moment vrai autour des plantes.",
    "story": [
        "L'EVJF botanique attire celles qui souhaitent un moment posé, élégant, sans gêne ni surenchère. Pas d'accessoires criards, pas de jeux gênants : juste un atelier guidé, du temps partagé et une création à rapporter.",
        "Nous intervenons à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et dans tout le 92. À domicile, dans une salle privée ou un lieu choisi par vous.",
        "Au choix : terrarium, kokedama, couronne végétale ou teinture. La future mariée peut être célébrée par une création collective offerte par le groupe."
    ],
    "steps": [
        {
            "title": "Accueil et présentation",
            "desc": "Verre d'accueil, présentation du format choisi, mise en lien du groupe."
        },
        {
            "title": "Atelier guidé",
            "desc": "Animation pas à pas, autour de la future mariée, sans pression de performance."
        },
        {
            "title": "Moment dédié",
            "desc": "Pause photo, mots des invitées, possibilité d'offrir une création collective."
        },
        {
            "title": "Repart avec sa création",
            "desc": "Chaque participante repart avec son objet végétal et l'envie de recommencer."
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
            "a": "Oui, partout dans le Hauts-de-Seine : Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly. Nous arrivons avec tout le matériel."
        },
        {
            "q": "Quel atelier choisir ?",
            "a": "Terrarium pour le côté spectaculaire, kokedama pour la douceur, couronne pour l'esthétique, teinture pour les groupes très créatifs."
        },
        {
            "q": "Peut-on offrir une création à la mariée ?",
            "a": "Oui. Nous proposons une création collective offerte par les invitées en option."
        },
        {
            "q": "Combien de temps à l'avance réserver ?",
            "a": "Quatre à six semaines minimum, surtout pour les samedis."
        }
    ]
}} />
);
export default EvjfHautsDeSeine;
