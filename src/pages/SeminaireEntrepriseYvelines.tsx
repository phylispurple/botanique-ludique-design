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
                    "detail": "Inséré dans une journée plus large, idéal en fin de matinée ou d'après-midi pour casser le rythme cognitif."
            },
            {
                    "line": "Demi-journée",
                    "detail": "Atelier complet plus balade ethnobotanique dans le parc du château de Versailles ou la forêt de Saint-Germain-en-Laye, ou un parc proche de votre lieu de séminaire."
            },
            {
                    "line": "Journée complète",
                    "detail": "Programme sur mesure mêlant ateliers, balade, conférence et restitution, articulé avec votre fil rouge thématique."
            },
            {
                    "line": "Format hybride",
                    "detail": "Combinaison d'atelier intérieur et de balade extérieure, particulièrement apprécié au printemps et à l'automne."
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
                    "q": "Combien de personnes maximum ?",
                    "a": "Jusqu'à soixante. Au-delà, nous proposons un format à double animatrice ou plusieurs ateliers en parallèle."
            },
            {
                    "q": "Délai de réservation ?",
                    "a": "Six à huit semaines à l'avance idéalement, davantage pour les périodes denses (juin, septembre, décembre)."
            },
            {
                    "q": "Adaptation à votre charte ?",
                    "a": "Oui, sur devis. Nous adaptons la communication, les supports imprimés et certaines créations aux couleurs et au ton de votre identité."
            }
    ]
  }} />
);
export default SeminaireEntrepriseYvelines;
