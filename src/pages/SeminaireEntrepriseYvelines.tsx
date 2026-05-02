import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SeminaireEntrepriseYvelines = () => (
  <OccasionTemplate data={{
    "slug": "seminaire-entreprise-yvelines",
    "icon": Sparkles,
    "eyebrow": "Séminaire entreprise",
    "title": "Animation séminaire entreprise Yvelines",
    "metaTitle": "Animation séminaire entreprise Yvelines, végétal",
    "metaDesc": "Animation séminaire entreprise dans le 78 Yvelines autour du végétal. Module ou journée complète, terrarium, kokedama, balade.",
    "pitch": "Une animation de séminaire pensée pour les sièges du Mantois, les pépinières de PME autour de Saint-Quentin-en-Yvelines et les institutions culturelles autour du château de Versailles. Dans Yvelines, nos modules végétaux s'insèrent dans votre journée, posent un temps de calme manuel et marquent durablement les équipes.",
    "why": [
            {
                    "title": "Sortir du PowerPoint",
                    "desc": "Après plusieurs heures de présentation, l'atelier manuel agit comme une réinitialisation cognitive. Des entreprises souvent ancrées dans des bâtiments historiques, qui apprécient le lien avec un patrimoine vivant."
            },
            {
                    "title": "Créer du lien horizontal",
                    "desc": "Autour de la plante, les hiérarchies s'effacent. Le département compte de nombreux sièges sociaux installés dans le triangle Saint-Quentin / Vélizy / Versailles, et un tissu associatif dense autour des villes royales, et nos retours montrent un effet immédiat sur la cohésion."
            },
            {
                    "title": "Ancrer dans un territoire",
                    "desc": "Le séminaire prend racine dans un lieu réel, pas dans une animation hors-sol. Possibilité de balade dans le parc du château de Versailles ou la forêt de Saint-Germain-en-Laye pour prolonger le moment."
            }
    ],
    "formula": [
            {
                    "line": "Module 2h",
                    "detail": "Inséré dans une journée de séminaire à Versailles ou Saint-Quentin-en-Yvelines, idéal en milieu d'après-midi pour casser le rythme."
            },
            {
                    "line": "Demi-journée",
                    "detail": "Atelier complet plus balade ethnobotanique dans le parc du château de Versailles ou la forêt de Saint-Germain."
            },
            {
                    "line": "Journée complète",
                    "detail": "Programme sur mesure articulé avec une visite guidée du Potager du Roi à Versailles, en option."
            },
            {
                    "line": "Format extérieur",
                    "detail": "Atelier en plein air dans la cour ou le parc de votre lieu de séminaire, particulièrement apprécié de mai à septembre."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "2h à 1 journée"
        },
        {
            "label": "Groupe",
            "value": "10 à 60 pers."
        },
        {
            "label": "Lieu",
            "value": "Yvelines (78)"
        },
        {
            "label": "Tarif",
            "value": "Sur devis"
        }
    ],
    "related": [
        {
            "to": "/balades-botaniques",
            "label": "Balades"
        },
        {
            "to": "/team-building-nature-entreprise",
            "label": "Team building"
        },
        {
            "to": "/balade-botanique-yvelines",
            "label": "Balade Yvelines"
        }
    ],
    "faqs": [
            {
                    "q": "Vous intervenez dans tout le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement des Yvelines. Notre équipe se déplace avec tout le matériel végétal et l'outillage."
            },
            {
                    "q": "Combien de personnes au maximum ?",
                    "a": "Jusqu'à soixante personnes en format atelier classique. Au-delà, nous fonctionnons à double animatrice ou en plusieurs ateliers en parallèle."
            },
            {
                    "q": "Quel délai prévoir ?",
                    "a": "Six à huit semaines à l'avance, davantage en juin, septembre et décembre. Les sièges du triangle Saint-Quentin / Vélizy / Versailles planifient souvent en année N-1."
            },
            {
                    "q": "Adaptable à votre charte ?",
                    "a": "Oui, sur devis. Nous adaptons supports imprimés, étiquettes plantes et certaines créations à votre identité."
            }
    ]
  }} />
);
export default SeminaireEntrepriseYvelines;
