import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SoireeEntrepriseParis = () => (
  <OccasionTemplate data={{
    "slug": "soiree-entreprise-paris",
    "icon": Sparkles,
    "eyebrow": "Soirée entreprise",
    "title": "Animation soirée entreprise végétale Paris",
    "metaTitle": "Animation soirée entreprise Paris, format végétal",
    "metaDesc": "Animation soirée entreprise dans le 75 Paris autour du végétal. Format atelier debout, fluide, en parallèle d'un cocktail.",
    "pitch": "Une animation de soirée qui ne perturbe pas le cocktail, pensée pour les sièges des grandes maisons du 8e, les agences créatives du 11e et du 18e, les institutions culturelles et associations du 13e. Format debout, fluide, où chacun·e passe à son rythme et repart avec une création.",
    "why": [
            {
                    "title": "Format adapté à votre lieu",
                    "desc": "Rooftop, loft, salon de réception, espace atypique : nous nous adaptons aux contraintes des lieux d'événement parisien·nes."
            },
            {
                    "title": "Parle à tout le monde",
                    "desc": "Pas besoin d'expertise. Le format est conçu pour que chacun·e réussisse sa création en quinze minutes maximum."
            },
            {
                    "title": "Mémorable et photogénique",
                    "desc": "Une animation qui se raconte le lendemain et qui marque la soirée bien plus qu'un photobooth. Des équipes parisiennes saturées de propositions, qui cherchent du contenu vraiment original et une vraie médiation."
            }
    ],
    "formula": [
            {
                    "line": "Stand atelier",
                    "detail": "Îlot pendant le cocktail dans un loft, un rooftop ou une salle de réception parisienne, avec animatrice et matériel."
            },
            {
                    "line": "Mini créations",
                    "detail": "Formats rapides (bouture, mini terrarium, sachet aromatique) qui rentrent dans un sac à main."
            },
            {
                    "line": "À emporter",
                    "detail": "Emballage soigné aux couleurs de votre entreprise, possible avec un délai d'anticipation."
            },
            {
                    "line": "Module long",
                    "detail": "Atelier assis en parallèle du stand debout, pour un sous-groupe d'invité·e·s qui veut une expérience plus longue."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "2h à 4h"
        },
        {
            "label": "Groupe",
            "value": "20 à 100 pers."
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
                    "q": "Disponible dans tout le 75 ?",
                    "a": "Oui, à tous les arrondissements parisiens et au-delà. Nous nous adaptons aux contraintes des lieux d'événement (rooftops, lofts, salons de réception)."
            },
            {
                    "q": "Soirée fin d'année ?",
                    "a": "Très demandé : les sièges des grandes maisons du 8e, les agences créatives du 11e et du 18e concentrent leurs soirées en décembre. À anticiper deux à trois mois à l'avance."
            },
            {
                    "q": "Personnalisation possible ?",
                    "a": "Oui, étiquettes personnalisées, choix de plantes, packaging à votre image, en lien avec votre équipe communication."
            },
            {
                    "q": "Format extérieur ?",
                    "a": "Possible en saison douce, à condition d'avoir un abri en cas de pluie. Évité entre novembre et mars sauf lieux couverts."
            }
    ]
  }} />
);
export default SoireeEntrepriseParis;
