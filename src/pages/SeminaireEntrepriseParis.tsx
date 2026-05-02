import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SeminaireEntrepriseParis = () => (
  <OccasionTemplate data={{
    "slug": "seminaire-entreprise-paris",
    "icon": Sparkles,
    "eyebrow": "Séminaire entreprise",
    "title": "Animation séminaire entreprise Paris",
    "metaTitle": "Animation séminaire entreprise Paris, végétal",
    "metaDesc": "Animation séminaire entreprise dans le 75 Paris autour du végétal. Module ou journée complète, terrarium, kokedama, balade.",
    "pitch": "Une animation de séminaire pensée pour les sièges des grandes maisons du 8e, les agences créatives du 11e et du 18e, les institutions culturelles et associations du 13e. Dans Paris, nos modules végétaux s'insèrent dans votre journée, posent un temps de calme manuel et marquent durablement les équipes.",
    "why": [
            {
                    "title": "Sortir du PowerPoint",
                    "desc": "Après plusieurs heures de présentation, l'atelier manuel agit comme une réinitialisation cognitive. Des équipes parisiennes saturées de propositions, qui cherchent du contenu vraiment original et une vraie médiation."
            },
            {
                    "title": "Créer du lien horizontal",
                    "desc": "Autour de la plante, les hiérarchies s'effacent. Paris concentre une demande très forte en animations originales, avec un tissu B2B varié allant des petites équipes créatives aux grandes directions communication, et nos retours montrent un effet immédiat sur la cohésion."
            },
            {
                    "title": "Ancrer dans un territoire",
                    "desc": "Le séminaire prend racine dans un lieu réel, pas dans une animation hors-sol. Possibilité de balade dans le Jardin des Plantes ou le parc des Buttes-Chaumont pour prolonger le moment."
            }
    ],
    "formula": [
            {
                    "line": "Module 2h",
                    "detail": "Inséré dans une journée plus large, idéal en fin de matinée ou d'après-midi pour casser le rythme cognitif."
            },
            {
                    "line": "Demi-journée",
                    "detail": "Atelier complet plus balade ethnobotanique dans le Jardin des Plantes ou le parc des Buttes-Chaumont, ou un parc proche de votre lieu de séminaire."
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
            "value": "Paris (75)"
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
            "to": "/balade-botanique-paris",
            "label": "Balade Paris"
        }
    ],
    "faqs": [
            {
                    "q": "Vous intervenez dans tout le 75 ?",
                    "a": "Oui, à tous les arrondissements parisiens et plus largement parisien·nes. Notre équipe se déplace avec tout le matériel végétal et l'outillage."
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
export default SeminaireEntrepriseParis;
