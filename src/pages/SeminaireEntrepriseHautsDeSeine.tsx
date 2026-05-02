import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SeminaireEntrepriseHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "seminaire-entreprise-hauts-de-seine",
    "icon": Sparkles,
    "eyebrow": "Séminaire entreprise",
    "title": "Animation séminaire entreprise Hauts-de-Seine",
    "metaTitle": "Animation séminaire entreprise Hauts-de-Seine, végétal",
    "metaDesc": "Animation séminaire entreprise dans le 92 Hauts-de-Seine autour du végétal. Module ou journée complète, terrarium, kokedama, balade.",
    "pitch": "Une animation de séminaire qui ne ressemble pas aux autres, dans Hauts-de-Seine. Un temps végétal en plein milieu de votre journée, qui crée du lien autrement et marque durablement les esprits.",
    "why": [
            {
                    "title": "Sortir du cadre",
                    "desc": "Un temps manuel et calme qui change radicalement de la dynamique habituelle d'un séminaire. Les corps se posent, les voix baissent."
            },
            {
                    "title": "Créer du lien",
                    "desc": "L'atelier fait tomber les rôles et les hiérarchies. Les équipes se redécouvrent par les mains, sans avoir à se justifier."
            },
            {
                    "title": "Souvenir tangible",
                    "desc": "Chaque participant·e repart avec sa création, qui rappellera le séminaire pendant des mois sur le bureau ou dans le salon."
            }
    ],
    "formula": [
            {
                    "line": "Module 2h",
                    "detail": "Inséré dans une journée plus large, idéal en fin de matinée ou d'après-midi pour casser le rythme cognitif."
            },
            {
                    "line": "Demi-journée",
                    "detail": "Atelier complet plus balade ethnobotanique dans le parc de Sceaux ou le bois de Boulogne, ou un parc proche de votre lieu de séminaire."
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
            "value": "Hauts-de-Seine (92)"
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
            "to": "/balade-botanique-hauts-de-seine",
            "label": "Balade Hauts-de-Seine"
        }
    ],
    "faqs": [
            {
                    "q": "Vous intervenez dans tout le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement des Hauts-de-Seine. Notre équipe se déplace avec tout le matériel végétal et l'outillage."
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
export default SeminaireEntrepriseHautsDeSeine;
