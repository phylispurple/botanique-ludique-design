import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";

const KokedamaYvelines = () => (
  <ProductTemplate data={{
    "slug": "atelier-kokedama-yvelines",
    "icon": Sprout,
    "eyebrow": "Atelier japonais",
    "title": "Atelier kokedama Yvelines",
    "metaTitle": "Atelier kokedama Yvelines, sphère végétale japonaise",
    "metaDesc": "Atelier kokedama dans le 78 Yvelines. Apprenez l'art japonais de la sphère végétale moussue, transmise pas à pas.",
    "lead": "Le kokedama, sphère de mousse et de plante issue d'une tradition japonaise, se pratique dans Yvelines avec la même attention qu'à Kyoto. Une boule de terre, une plante, un fil de jute, et beaucoup de présence dans le geste."boule de mousse\", se pratique dans le Yvelines avec la même attention qu'au Japon.",
    "story": [
            "Le mot kokedama signifie littéralement \"boule de mousse\". Il dérive du nearai bonsaï, où la motte était présentée nue, sans pot. Au 20e siècle, cette pratique s'est ouverte aux plantes d'intérieur courantes pour gagner les appartements japonais, puis européens dans les années 2000.",
            "À l'inverse du bonsaï qui demande des décennies de patience, le kokedama est accessible en deux heures. Mais la philosophie reste la même : un dialogue lent avec la plante, une attention au modelé, une acceptation de l'imperfection.",
            "Dans Yvelines, nous animons cet atelier dans les ateliers des particuliers, dans les espaces d'entreprise et lors d'événements privés à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie. Le format se prête particulièrement bien aux EVJF, anniversaires et team buildings car il combine apprentissage technique et moment méditatif."
    ],
    "steps": [
            {
                    "title": "Origines et philosophie",
                    "desc": "Une mise en contexte sur le nearai bonsaï, le wabi-sabi et la diffusion contemporaine du kokedama hors du Japon."
            },
            {
                    "title": "Choix de la plante",
                    "desc": "Fougère, lierre, asparagus, plantes vertes : sélection guidée selon la luminosité de votre intérieur et vos habitudes d'arrosage."
            },
            {
                    "title": "Modelage de la sphère",
                    "desc": "Mélange de substrat akadama et terre noire, modelage à la main, habillage de mousse, ligature au fil de jute. Le geste compte autant que le résultat."
            },
            {
                    "title": "Vivre avec son kokedama",
                    "desc": "Technique du bain pour l'arrosage, exposition idéale, signes de manque d'eau ou d'excès. Les bons réflexes pour plusieurs années."
            }
    ],
    "formats": [
        {
            "label": "Durée",
            "value": "2h"
        },
        {
            "label": "Groupe",
            "value": "6 à 12 pers."
        },
        {
            "label": "Lieu",
            "value": "Yvelines (78)"
        },
        {
            "label": "Prix",
            "value": "À partir de 45 €"
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
                    "q": "Disponible dans toutes les villes des Yvelines ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement dans le 78. Pour les zones plus excentrées, nous étudions chaque demande au cas par cas."
            },
            {
                    "q": "La mousse est-elle prélevée localement ?",
                    "a": "Non, par souci de protection des sous-bois. Nous utilisons de la mousse issue de filières professionnelles ou de la mousse de sphaigne réhydratée."
            },
            {
                    "q": "Combien de temps vit un kokedama ?",
                    "a": "Plusieurs années avec un arrosage régulier par bain et une lumière indirecte. Certains de nos participant·e·s reviennent avec leur kokedama trois ans plus tard, encore vivace."
            },
            {
                    "q": "Pour quelle occasion ce format est-il pensé ?",
                    "a": "EVJF, anniversaires adultes, team building, baby shower. Notre public mêle familles installées dans les villes de l'ouest parisien, comités d'entreprise des sièges sociaux du Mantois et institutions culturelles autour du château de Versailles apprécient particulièrement ce format pour son côté méditatif."
            }
    ]
  }} />
);
export default KokedamaYvelines;
