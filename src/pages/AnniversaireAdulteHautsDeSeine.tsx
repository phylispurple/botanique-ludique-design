import ProductTemplate from "@/components/ProductTemplate";
import { Heart } from "lucide-react";

const AnniversaireAdulteHautsDeSeine = () => (
  <ProductTemplate data={{
    "slug": "atelier-anniversaire-adulte-hauts-de-seine",
    "icon": Heart,
    "eyebrow": "Anniversaire adulte",
    "title": "Atelier anniversaire adulte Hauts-de-Seine",
    "metaTitle": "Atelier anniversaire adulte Hauts-de-Seine, format botanique",
    "metaDesc": "Anniversaire adulte botanique dans le 92 Hauts-de-Seine. Un format original, créatif et bienveillant pour fêter autrement.",
    "lead": "Fêter un anniversaire sans bar ni karaoké, en plantant ses mains dans la terre et en repartant avec un objet vivant. Dans Hauts-de-Seine, ce format séduit celles et ceux qui veulent du sens et de la matière.",
    "story": [
            "Un anniversaire botanique, c'est deux heures de présence vraie. Pas d'écrans, pas de mise en scène artificielle : un cercle, des plantes, un savoir-faire transmis et le plaisir d'une création faite ensemble.",
            "Le format convient particulièrement bien aux trentenaires, quadras et plus, qui ont fait le tour des formats classiques et cherchent quelque chose qui marque. Notre public est concentré sur la première couronne, avec une forte présence de sièges sociaux à La Défense, de comités d'entreprise du quartier d'affaires et de jeunes familles à Boulogne et Issy.",
            "Nous intervenons à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et dans tout le 92, à domicile, dans un appartement, un loft, un jardin ou un lieu privatisé. Vous gérez le goûter et l'apéritif, nous animons l'atelier. Joséphine de Beauharnais a fait venir à Rueil-Malmaison, dès 1799, des plantes du monde entier, dont les premiers eucalyptus cultivés en France et un dahlia qui a déclenché toute une mode horticole."
    ],
    "steps": [
            {
                    "title": "Mise en place",
                    "desc": "Installation du matériel sur tables, accueil des invité·e·s, présentation rapide du format choisi."
            },
            {
                    "title": "Atelier choisi",
                    "desc": "Terrarium, kokedama, couronne ou teinture, selon vos envies et la saison. Tout le matériel est fourni."
            },
            {
                    "title": "Pause conviviale",
                    "desc": "Vous pouvez prévoir un goûter, un apéritif, un gâteau, en parallèle ou en clôture. L'atelier s'adapte à votre déroulé."
            },
            {
                    "title": "Souvenir matériel",
                    "desc": "Chaque invité·e repart avec son objet végétal, dont le ou la jubilaire. Un souvenir qui se prolongera des mois sur une étagère."
            }
    ],
    "formats": [
        {
            "label": "Durée",
            "value": "2h"
        },
        {
            "label": "Groupe",
            "value": "6 à 15 pers."
        },
        {
            "label": "Lieu",
            "value": "Hauts-de-Seine (92)"
        },
        {
            "label": "Prix",
            "value": "À partir de 40 €/pers."
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
                    "q": "Vous venez dans tout le 92 ?",
                    "a": "Oui, Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement. Au-delà des grandes communes des Hauts-de-Seine, des frais modestes peuvent s'appliquer."
            },
            {
                    "q": "Format à domicile ou en salle privatisée ?",
                    "a": "Les deux. La majorité de nos anniversaires se font à domicile. Nous arrivons avec tout le matériel et repartons avec ce qui n'est pas utilisé."
            },
            {
                    "q": "Combinable avec un gâteau et un apéritif ?",
                    "a": "Oui, vous gérez complètement le moment goûter ou apéritif. L'atelier s'insère dans votre programme, en début, milieu ou fin d'après-midi."
            },
            {
                    "q": "À partir de quel âge ?",
                    "a": "Format adulte, mais adaptable pour des anniversaires d'ados à partir de quatorze ans, avec un encadrement légèrement différent."
            }
    ]
  }} />
);
export default AnniversaireAdulteHautsDeSeine;
