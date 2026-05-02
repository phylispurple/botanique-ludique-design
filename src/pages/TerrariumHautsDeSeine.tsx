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
    "lead": "Composer un terrarium dans le 92, c'est plus qu'un loisir manuel. C'est entrer dans une histoire qui a démarré en 1829 avec le Dr Ward, et la prolonger ici, dans Hauts-de-Seine, où l'arboretum de la Vallée-aux-Loups à Châtenay-Malabry, le parc de Sceaux et le domaine national de Saint-Cloud continuent de raconter notre rapport au vivant.",
    "story": [
            "En 1829, à Londres, le Dr Nathaniel Ward enferme par hasard une fougère dans un bocal de verre destiné à un papillon. La fougère s'épanouit. La caisse de Ward est née, ancêtre directe du terrarium contemporain. Cet objet a permis aux botanistes du 19e siècle de transporter quinine, hévéa et thé d'un continent à l'autre, redessinant les économies coloniales et nos paysages domestiques.",
            "Dans Hauts-de-Seine, cette histoire trouve un écho particulier. l'héritage de Chateaubriand qui a planté son arboretum à la Vallée-aux-Loups, et celui de l'impératrice Joséphine qui a acclimaté à Malmaison plus de 200 espèces inconnues en Europe font partie du même mouvement : celui d'une humanité qui a voulu déplacer, acclimater, conserver le vivant sous verre.",
            "Nous animons l'atelier dans le 92 chez les particuliers, en entreprise et lors d'événements privés, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et au-delà sur demande. Vous repartez avec votre terrarium, vos plantes et un guide d'entretien pensé pour traverser les saisons."
    ],
    "steps": [
            {
                    "title": "Une histoire du verre et du vivant",
                    "desc": "Mise en contexte courte autour de la caisse de Ward, des serres royales et de leur prolongement dans Hauts-de-Seine."
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
                    "q": "Vous déplacez-vous partout dans le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement dans Hauts-de-Seine. Au-delà des principales communes, des frais de déplacement peuvent s'appliquer selon la distance."
            },
            {
                    "q": "D'où viennent les plantes utilisées ?",
                    "a": "Nous travaillons avec des horticulteurs franciliens quand c'est possible, et nous documentons l'origine des espèces tropicales que nous utilisons. Joséphine de Beauharnais a fait venir à Rueil-Malmaison, dès 1799, des plantes du monde entier, dont les premiers eucalyptus cultivés en France et un dahlia qui a déclenché toute une mode horticole."
            },
            {
                    "q": "Atelier adapté aux débutant·e·s ?",
                    "a": "Oui, totalement. Aucune connaissance préalable n'est demandée. Notre approche convient autant aux novices qu'aux jardinier·e·s amateurs déjà aguerri·e·s."
            },
            {
                    "q": "Format privatisé en entreprise ?",
                    "a": "Tout à fait. Notre public est concentré sur la première couronne, avec une forte présence de sièges sociaux à La Défense, de comités d'entreprise du quartier d'affaires et de jeunes familles à Boulogne et Issy. Nous proposons des formats sur mesure à partir de six personnes, devis sous deux jours."
            }
    ]
  }} />
);
export default TerrariumHautsDeSeine;
