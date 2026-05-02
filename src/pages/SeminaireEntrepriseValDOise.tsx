import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SeminaireEntrepriseValDOise = () => (
  <OccasionTemplate data={{
    "slug": "seminaire-entreprise-val-d-oise",
    "icon": Sparkles,
    "eyebrow": "Séminaire entreprise",
    "title": "Animation séminaire entreprise Val-d'Oise",
    "metaTitle": "Animation séminaire entreprise Val-d'Oise, végétal",
    "metaDesc": "Animation séminaire entreprise dans le 95 Val-d'Oise autour du végétal. Module ou journée complète, terrarium, kokedama, balade.",
    "pitch": "Une animation de séminaire pensée pour les sièges installés à Cergy-Pontoise, les centres logistiques de la plaine de France et les structures associatives du Vexin. Dans Val-d'Oise, nos modules végétaux s'insèrent dans votre journée, posent un temps de calme manuel et marquent durablement les équipes.",
    "why": [
            {
                    "title": "Sortir du PowerPoint",
                    "desc": "Après plusieurs heures de présentation, l'atelier manuel agit comme une réinitialisation cognitive. Des équipes qui apprécient les formats authentiques, ancrés dans un vrai territoire plutôt qu'une animation hors-sol."
            },
            {
                    "title": "Créer du lien horizontal",
                    "desc": "Autour de la plante, les hiérarchies s'effacent. Le Val-d'Oise mêle un pôle d'affaires à Cergy, des zones d'activité étendues et un tissu associatif et culturel dynamique en milieu semi-rural, et nos retours montrent un effet immédiat sur la cohésion."
            },
            {
                    "title": "Ancrer dans un territoire",
                    "desc": "Le séminaire prend racine dans un lieu réel, pas dans une animation hors-sol. Possibilité de balade dans le parc du château de La Roche-Guyon ou la forêt de Montmorency pour prolonger le moment."
            }
    ],
    "formula": [
            {
                    "line": "Module 2h",
                    "detail": "Inséré dans une journée de séminaire à Cergy ou dans le Vexin, format adapté à votre temporalité."
            },
            {
                    "line": "Demi-journée",
                    "detail": "Atelier complet plus balade ethnobotanique dans le parc du château de La Roche-Guyon ou la forêt de Montmorency."
            },
            {
                    "line": "Journée complète",
                    "detail": "Programme sur mesure articulé avec une visite de l'abbaye de Royaumont et son jardin des neuf carrés."
            },
            {
                    "line": "Format extérieur",
                    "detail": "Atelier en plein air dans la cour ou le parc d'un lieu de séminaire, particulièrement adapté aux domaines du Vexin."
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
            "value": "Val-d'Oise (95)"
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
            "to": "/balade-botanique-val-d-oise",
            "label": "Balade Val-d'Oise"
        }
    ],
    "faqs": [
            {
                    "q": "Vous intervenez dans tout le 95 ?",
                    "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement du Val-d'Oise. Notre équipe se déplace avec tout le matériel végétal et l'outillage."
            },
            {
                    "q": "Combien de personnes au maximum ?",
                    "a": "Jusqu'à soixante personnes en format atelier classique. Au-delà, nous fonctionnons à double animatrice ou en plusieurs ateliers en parallèle."
            },
            {
                    "q": "Quel délai prévoir ?",
                    "a": "Six à huit semaines à l'avance, davantage en juin, septembre et décembre. Les sièges installés à Cergy-Pontoise et les structures du Vexin planifient souvent en année N-1."
            },
            {
                    "q": "Adaptable à votre charte ?",
                    "a": "Oui, sur devis. Nous adaptons supports imprimés, étiquettes plantes et certaines créations à votre identité."
            }
    ]
  }} />
);
export default SeminaireEntrepriseValDOise;
