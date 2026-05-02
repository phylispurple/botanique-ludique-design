import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";

const TeintureVegetaleHautsDeSeine = () => (
  <ProductTemplate data={{
    "slug": "atelier-teinture-vegetale-hauts-de-seine",
    "icon": Sprout,
    "eyebrow": "Atelier teinture",
    "title": "Atelier teinture végétale Hauts-de-Seine",
    "metaTitle": "Atelier teinture végétale Hauts-de-Seine, couleurs des plantes",
    "metaDesc": "Atelier teinture végétale dans le 92 Hauts-de-Seine. Découvrez les couleurs de plantes locales, garance, chou rouge, oignon, indigo.",
    "lead": "Avant l'arrivée des colorants de synthèse au 19e siècle, toutes les fibres textiles étaient teintes par des plantes. Cet atelier, dans Hauts-de-Seine, remet en main ces gestes oubliés : roses de la garance, bleus de l'indigo, ocres des pelures d'oignon.",
    "story": [
            "La teinture végétale est un savoir-faire vieux de plusieurs millénaires. La garance, plante tinctoriale qui donne le rouge, était cultivée en Provence et dans le Nord de la France jusqu'au milieu du 19e siècle. Les paysages agricoles français ont été en partie sculptés par ces cultures de teinture, désormais marginales.",
            "L'arrivée du premier colorant de synthèse, la mauvéine de William Perkin en 1856, a effondré l'industrie en quelques décennies. Aujourd'hui, on assiste à un retour vers ces techniques pour des raisons environnementales, esthétiques et philosophiques.",
            "Notre public est concentré sur la première couronne, avec une forte présence de sièges sociaux à La Défense, de comités d'entreprise du quartier d'affaires et de jeunes familles à Boulogne et Issy. L'atelier a lieu à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement dans Hauts-de-Seine. Chaque participant·e repart avec un échantillon textile teint de ses mains et la documentation pour reproduire chez soi."
    ],
    "steps": [
            {
                    "title": "Histoire des couleurs végétales",
                    "desc": "Petite traversée des grandes plantes tinctoriales européennes : garance, gaude, pastel, indigo, et leur place dans l'histoire des paysages agricoles."
            },
            {
                    "title": "Préparation du bain",
                    "desc": "Pesée des plantes, mordançage à l'alun, infusion. Comprendre la chimie douce qui fixe la couleur sur la fibre."
            },
            {
                    "title": "Plongée du textile",
                    "desc": "Trempage du tissu, observation de la prise de couleur en temps réel, modulation des nuances par le temps de bain."
            },
            {
                    "title": "Fixation et séchage",
                    "desc": "Comment stabiliser la couleur pour qu'elle tienne au lavage. Conseils d'entretien pour faire durer la teinture."
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
            "value": "Hauts-de-Seine (92)"
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
                    "q": "Disponible dans tout le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et au-delà. Pour les communes plus éloignées, nous étudions chaque demande, parfois avec des frais de déplacement modestes."
            },
            {
                    "q": "Quels textiles peut-on teindre ?",
                    "a": "Coton, lin, laine, soie. Les fibres naturelles prennent le mieux la couleur. Le polyester et l'acrylique ne fonctionnent pas avec ces techniques."
            },
            {
                    "q": "Les plantes utilisées sont-elles locales ?",
                    "a": "Majoritairement oui : garance, gaude, oignon, chou rouge cultivés en France. L'indigo reste tropical mais nous documentons toujours son origine et son histoire."
            },
            {
                    "q": "Atelier adapté aux scolaires ?",
                    "a": "Oui, dès huit ans avec une version simplifiée. Les enseignant·e·s apprécient le croisement chimie, histoire et arts plastiques que ce format permet."
            }
    ]
  }} />
);
export default TeintureVegetaleHautsDeSeine;
