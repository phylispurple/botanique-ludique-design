import ProductTemplate from "@/components/ProductTemplate";
import { Heart } from "lucide-react";

const AnniversaireAdulteYvelines = () => (
  <ProductTemplate data={{
    "slug": "atelier-anniversaire-adulte-yvelines",
    "icon": Heart,
    "eyebrow": "Anniversaire adulte",
    "title": "Atelier anniversaire adulte Yvelines",
    "metaTitle": "Atelier anniversaire adulte Yvelines, format botanique",
    "metaDesc": "Anniversaire adulte botanique dans le 78 Yvelines. Un format original, créatif et bienveillant pour fêter autrement.",
    "lead": "Fêter un anniversaire sans bar ni karaoké, en plantant ses mains dans la terre et en repartant avec un objet vivant. Dans Yvelines, ce format séduit celles et ceux qui veulent du sens et de la matière.",
    "story": [
            "Un anniversaire botanique, c'est deux heures de présence vraie. Pas d'écrans, pas de mise en scène artificielle : un cercle, des plantes, un savoir-faire transmis et le plaisir d'une création faite ensemble.",
            "Le format convient particulièrement bien aux trentenaires, quadras et plus, qui ont fait le tour des formats classiques et cherchent quelque chose qui marque. Notre public mêle familles installées dans les villes de l'ouest parisien, comités d'entreprise des sièges sociaux du Mantois et institutions culturelles autour du château de Versailles.",
            "Nous intervenons à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et dans tout le 78, à domicile, dans un appartement, un loft, un jardin ou un lieu privatisé. Vous gérez le goûter et l'apéritif, nous animons l'atelier. C'est ici, au Potager du Roi, que Jean-Baptiste de La Quintinie a fait pousser des asperges en hiver pour Louis XIV, en inventant des techniques de forçage encore enseignées aujourd'hui."
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
            "value": "Yvelines (78)"
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
                    "q": "Vous venez dans tout le 78 ?",
                    "a": "Oui, Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement. Au-delà des grandes communes des Yvelines, des frais modestes peuvent s'appliquer."
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
export default AnniversaireAdulteYvelines;
