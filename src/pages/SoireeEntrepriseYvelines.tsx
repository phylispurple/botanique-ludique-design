import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SoireeEntrepriseYvelines = () => (
  <OccasionTemplate data={{
    "slug": "soiree-entreprise-yvelines",
    "icon": Sparkles,
    "eyebrow": "Soirée entreprise",
    "title": "Animation soirée entreprise végétale Yvelines",
    "metaTitle": "Animation soirée entreprise Yvelines, format végétal",
    "metaDesc": "Animation soirée entreprise dans le 78 Yvelines autour du végétal. Format atelier debout, fluide, en parallèle d'un cocktail.",
    "pitch": "Une animation de soirée qui ne perturbe pas le cocktail, pensée pour les sièges du Mantois, les pépinières de PME autour de Saint-Quentin-en-Yvelines et les institutions culturelles autour du château de Versailles. Format debout, fluide, où chacun·e passe à son rythme et repart avec une création.",
    "why": [
            {
                    "title": "Format adapté à votre lieu",
                    "desc": "Rooftop, loft, salon de réception, espace atypique : nous nous adaptons aux contraintes des lieux d'événement des Yvelines."
            },
            {
                    "title": "Parle à tout le monde",
                    "desc": "Pas besoin d'expertise. Le format est conçu pour que chacun·e réussisse sa création en quinze minutes maximum."
            },
            {
                    "title": "Mémorable et photogénique",
                    "desc": "Une animation qui se raconte le lendemain et qui marque la soirée bien plus qu'un photobooth. Des entreprises souvent ancrées dans des bâtiments historiques, qui apprécient le lien avec un patrimoine vivant."
            }
    ],
    "formula": [
            {
                    "line": "Stand atelier",
                    "detail": "Un îlot installé pendant le cocktail, par exemple dans les salons d'un domaine des Yvelines, avec une animatrice et tout le matériel."
            },
            {
                    "line": "Mini créations",
                    "detail": "Bouture, mini terrarium en flacon, sachet aromatique, formats rapides adaptés au flux d'une soirée."
            },
            {
                    "line": "À emporter",
                    "detail": "Chaque personne repart avec sa création dans un emballage soigné, parfait pour le retour en train ou en voiture."
            },
            {
                    "line": "Module long",
                    "detail": "Atelier assis pour un nombre limité, en parallèle du stand debout, pour les soirées qui mêlent cocktail et dîner assis."
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
                    "q": "Disponible dans tout le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et au-delà. Nous nous adaptons aux contraintes des lieux d'événement (rooftops, lofts, salons de réception)."
            },
            {
                    "q": "Soirée fin d'année ?",
                    "a": "Très demandé : les sièges du triangle Saint-Quentin / Vélizy / Versailles concentrent leurs soirées en décembre. À anticiper deux à trois mois à l'avance."
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
export default SoireeEntrepriseYvelines;
