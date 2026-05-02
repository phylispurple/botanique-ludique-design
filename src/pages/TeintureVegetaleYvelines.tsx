import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";

const TeintureVegetaleYvelines = () => (
  <ProductTemplate data={{
    "slug": "atelier-teinture-vegetale-yvelines",
    "icon": Sprout,
    "eyebrow": "Atelier teinture",
    "title": "Atelier teinture végétale Yvelines",
    "metaTitle": "Atelier teinture végétale Yvelines, couleurs des plantes",
    "metaDesc": "Atelier teinture végétale dans le 78 Yvelines. Découvrez les couleurs de plantes locales, garance, chou rouge, oignon, indigo.",
    "lead": "Un atelier où les plantes deviennent palette. Dans le Yvelines, nous explorons les couleurs cachées des végétaux : roses de la garance, bleus de l'indigo, ocres des pelures d'oignon.",
    "story": [
        "La teinture végétale est l'un des plus anciens savoir-faire humains. Avant l'arrivée des colorants de synthèse au 19e siècle, toutes les fibres étaient colorées par les plantes. Cet atelier remet en main ces gestes.",
        "Animé dans le Yvelines, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et au-delà, l'atelier convient aux particuliers, aux scolaires et aux groupes d'entreprise sensibles aux questions de matière et de durabilité.",
        "Vous repartez avec un échantillon textile teinté de vos mains et la documentation pour reproduire chez vous."
    ],
    "steps": [
        {
            "title": "Histoire des couleurs",
            "desc": "Petite traversée des grandes plantes tinctoriales et de leurs usages historiques."
        },
        {
            "title": "Préparation du bain",
            "desc": "Pesée, mordançage, infusion. Comprendre la chimie douce de la teinture."
        },
        {
            "title": "Plongée du textile",
            "desc": "Trempage du tissu, observation de la prise de couleur, modulation des nuances."
        },
        {
            "title": "Fixation et séchage",
            "desc": "Comment stabiliser la couleur pour qu'elle tienne au lavage."
        }
    ],
    "formats": [
        {
            "label": "Durée",
            "value": "2h30"
        },
        {
            "label": "Groupe",
            "value": "6 à 12 pers."
        },
        {
            "label": "Lieu",
            "value": "Yvelines (78)"
        },
        {
            "label": "Prix",
            "value": "À partir de 50 €"
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
            "q": "Disponible partout dans le 78 ?",
            "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie. Les déplacements plus excentrés sont étudiés au cas par cas."
        },
        {
            "q": "Quel textile peut-on teindre ?",
            "a": "Coton, lin, laine, soie. Les fibres naturelles prennent le mieux la couleur."
        },
        {
            "q": "Les plantes utilisées sont-elles locales ?",
            "a": "Majoritairement oui : garance, gaude, oignon, chou rouge. L'indigo reste tropical mais documenté."
        },
        {
            "q": "Atelier adapté aux enfants ?",
            "a": "Oui dès huit ans, avec une version simplifiée et un encadrement renforcé."
        }
    ]
}} />
);
export default TeintureVegetaleYvelines;
