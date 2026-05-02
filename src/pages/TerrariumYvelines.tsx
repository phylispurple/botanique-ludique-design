import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";

const TerrariumYvelines = () => (
  <ProductTemplate data={{
    "slug": "atelier-terrarium-yvelines",
    "icon": Sprout,
    "eyebrow": "Atelier signature",
    "title": "Atelier terrarium Yvelines",
    "metaTitle": "Atelier terrarium Yvelines, écosystème en bocal",
    "metaDesc": "Atelier terrarium dans le 78 Yvelines pour particuliers, entreprises et événements. Créez votre écosystème végétal autonome en bocal.",
    "lead": "Composer un terrarium dans le 78, c'est plus qu'un loisir manuel. C'est entrer dans une histoire qui a démarré en 1829 avec le Dr Ward, et la prolonger ici, dans Yvelines, où le Potager du Roi à Versailles, l'arboretum de Chèvreloup et la forêt domaniale de Rambouillet continuent de raconter notre rapport au vivant.",
    "story": [
            "En 1829, à Londres, le Dr Nathaniel Ward enferme par hasard une fougère dans un bocal de verre destiné à un papillon. La fougère s'épanouit. La caisse de Ward est née, ancêtre directe du terrarium contemporain. Cet objet a permis aux botanistes du 19e siècle de transporter quinine, hévéa et thé d'un continent à l'autre, redessinant les économies coloniales et nos paysages domestiques.",
            "Dans Yvelines, cette histoire trouve un écho particulier. l'histoire de Le Nôtre, des plantes acclimatées par La Quintinie au Potager du Roi, et des grandes serres royales du 17e siècle font partie du même mouvement : celui d'une humanité qui a voulu déplacer, acclimater, conserver le vivant sous verre.",
            "Nous animons l'atelier dans le 78 chez les particuliers, en entreprise et lors d'événements privés, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et au-delà sur demande. Vous repartez avec votre terrarium, vos plantes et un guide d'entretien pensé pour traverser les saisons."
    ],
    "steps": [
            {
                    "title": "Une histoire du verre et du vivant",
                    "desc": "Mise en contexte courte autour de la caisse de Ward, des serres royales et de leur prolongement dans Yvelines."
            },
            {
                    "title": "Sélection des plantes",
                    "desc": "Choix guidé parmi les fougères, mousses et fittonias adaptés au terrarium fermé. Discussion autour de leurs origines géographiques."
            },
            {
                    "title": "Composition du paysage",
                    "desc": "Drainage, substrat, plantation, décoration minérale. Chaque terrarium est unique, avec votre propre rythme de composition."
            },
            {
                    "title": "Faire vivre la suite",
                    "desc": "Conseils d'arrosage, d'exposition, de taille. Comment garder votre écosystème en vie plusieurs années avec très peu d'interventions."
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
            "value": "Yvelines (78)"
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
                    "q": "Vous déplacez-vous partout dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement dans Yvelines. Au-delà des principales communes, des frais de déplacement peuvent s'appliquer selon la distance."
            },
            {
                    "q": "D'où viennent les plantes utilisées ?",
                    "a": "Nous travaillons avec des horticulteurs franciliens quand c'est possible, et nous documentons l'origine des espèces tropicales que nous utilisons. C'est ici, au Potager du Roi, que Jean-Baptiste de La Quintinie a fait pousser des asperges en hiver pour Louis XIV, en inventant des techniques de forçage encore enseignées aujourd'hui."
            },
            {
                    "q": "Atelier adapté aux débutant·e·s ?",
                    "a": "Oui, totalement. Aucune connaissance préalable n'est demandée. Notre approche convient autant aux novices qu'aux jardinier·e·s amateurs déjà aguerri·e·s."
            },
            {
                    "q": "Format privatisé en entreprise ?",
                    "a": "Tout à fait. Notre public mêle familles installées dans les villes de l'ouest parisien, comités d'entreprise des sièges sociaux du Mantois et institutions culturelles autour du château de Versailles. Nous proposons des formats sur mesure à partir de six personnes, devis sous deux jours."
            }
    ]
  }} />
);
export default TerrariumYvelines;
