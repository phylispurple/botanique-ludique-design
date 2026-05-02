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
    "lead": "Fêter un anniversaire sans bar ni karaoké, en plantant ses mains dans la terre et en repartant avec un objet vivant. Dans le Hauts-de-Seine, ce format séduit celles et ceux qui veulent du sens.",
    "story": [
        "Un anniversaire botanique, c'est deux heures de vraie présence. Pas d'écrans, pas de mise en scène : un cercle, des plantes, un savoir-faire transmis et le plaisir d'une création faite ensemble.",
        "Nous intervenons à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et dans tout le 92, à domicile ou dans un lieu privatisé.",
        "Le ou la jubilaire peut être célébré·e par un mot collectif, une création offerte ou simplement la qualité du moment partagé."
    ],
    "steps": [
        {
            "title": "Mise en place",
            "desc": "Installation du matériel sur tables, accueil, présentation rapide."
        },
        {
            "title": "Atelier choisi",
            "desc": "Terrarium, kokedama, couronne ou teinture, selon vos envies."
        },
        {
            "title": "Pause conviviale",
            "desc": "Vous pouvez prévoir un goûter, un apéritif, un gâteau, en parallèle."
        },
        {
            "title": "Souvenir matériel",
            "desc": "Chaque invité·e repart avec son objet, dont le ou la jubilaire."
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
            "q": "Déplacement dans le 92 ?",
            "a": "Oui. Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et zones limitrophes incluses."
        },
        {
            "q": "Format à domicile ou en salle ?",
            "a": "Les deux. Nous nous adaptons à votre lieu et arrivons avec tout le matériel."
        },
        {
            "q": "Peut-on combiner avec un gâteau ?",
            "a": "Oui, vous gérez le moment goûter ou apéritif, nous animons l'atelier."
        },
        {
            "q": "À partir de quel âge ?",
            "a": "Format adulte, mais adaptable pour des ados à partir de quatorze ans."
        }
    ]
}} />
);
export default AnniversaireAdulteHautsDeSeine;
