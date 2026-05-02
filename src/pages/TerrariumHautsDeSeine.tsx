import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";

const TerrariumHautsDeSeine = () => (
  <ProductTemplate data={{
    "slug": "atelier-terrarium-hauts-de-seine",
    "icon": Sprout,
    "eyebrow": "Atelier signature",
    "title": "Atelier terrarium Hauts-de-Seine",
    "metaTitle": "Atelier terrarium Hauts-de-Seine, écosystème en bocal",
    "metaDesc": "Atelier terrarium dans le 92 Hauts-de-Seine pour particuliers, entreprises et événements. Créez votre écosystème végétal autonome en bocal.",
    "lead": "Construisez votre paysage miniature dans un bocal, à deux pas de chez vous dans le 92. Un écosystème vivant, presque autonome, qui prend racine sur votre étagère et raconte deux siècles d'histoire de la botanique sous verre.",
    "story": [
        "Le terrarium n'est pas une mode récente. En 1829, le Dr Nathaniel Ward enferme par hasard une fougère dans une caisse de verre et révolutionne le transport des plantes vivantes. Ces caisses ont permis aux botanistes de transporter quinine, hévéa et thé d'un continent à l'autre.",
        "Dans le Hauts-de-Seine, nous animons régulièrement des ateliers chez les particuliers, dans les entreprises et lors d'événements privés. Nous nous déplaçons à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly, et au-delà sur demande.",
        "L'atelier dure environ deux heures. Vous repartez avec votre terrarium, vos plantes et un guide d'entretien pensé pour traverser les saisons."
    ],
    "steps": [
        {
            "title": "Histoire du terrarium",
            "desc": "Une courte introduction à l'histoire du terrarium, du Dr Ward aux usages contemporains."
        },
        {
            "title": "Choix des plantes",
            "desc": "Sélection guidée parmi les plantes adaptées au terrarium fermé, fougères, mousses, fittonia."
        },
        {
            "title": "Composition du paysage",
            "desc": "Drainage, substrat, plantation, décoration. Chaque terrarium est unique."
        },
        {
            "title": "Conseils d'entretien",
            "desc": "Comment garder votre écosystème en vie pendant des années avec très peu d'interventions."
        }
    ],
    "formats": [
        {
            "label": "Durée",
            "value": "2h"
        },
        {
            "label": "Groupe",
            "value": "6 à 12 pers."
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
            "q": "Vous déplacez-vous dans tout le département ?",
            "a": "Oui. Nous intervenons à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement dans le 92. Pour les zones plus excentrées, des frais de déplacement peuvent s'appliquer."
        },
        {
            "q": "Faut-il avoir la main verte ?",
            "a": "Pas du tout. L'atelier est conçu pour les débutant·e·s comme pour les passionné·e·s."
        },
        {
            "q": "Repart-on avec son terrarium ?",
            "a": "Oui, chaque participant·e repart avec son terrarium fini, ses plantes et un guide d'entretien."
        },
        {
            "q": "Peut-on organiser un atelier privatisé ?",
            "a": "Oui. Anniversaire, EVJF, séminaire d'entreprise, à partir de six personnes."
        }
    ]
}} />
);
export default TerrariumHautsDeSeine;
