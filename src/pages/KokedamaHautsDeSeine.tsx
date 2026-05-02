import ProductTemplate from "@/components/ProductTemplate";
import { Sprout } from "lucide-react";

const KokedamaHautsDeSeine = () => (
  <ProductTemplate data={{
    "slug": "atelier-kokedama-hauts-de-seine",
    "icon": Sprout,
    "eyebrow": "Atelier japonais",
    "title": "Atelier kokedama Hauts-de-Seine",
    "metaTitle": "Atelier kokedama Hauts-de-Seine, sphère végétale japonaise",
    "metaDesc": "Atelier kokedama dans le 92 Hauts-de-Seine. Apprenez l'art japonais de la sphère végétale moussue, transmise pas à pas.",
    "lead": "Le kokedama, sphère de mousse et de plante issue d'une tradition japonaise, se pratique dans les Hauts-de-Seine avec la même attention qu'à Kyoto. Une boule de terre, une plante, un fil de jute, et beaucoup de présence dans le geste.",
    "story": [
            "Le mot kokedama signifie littéralement \"boule de mousse\". Il dérive du nearai bonsaï, où la motte était présentée nue, sans pot. Au 20e siècle, cette pratique s'est ouverte aux plantes d'intérieur courantes pour gagner les appartements japonais, puis européens dans les années 2000.",
            "À l'inverse du bonsaï qui demande des décennies de patience, le kokedama est accessible en deux heures. Mais la philosophie reste la même : un dialogue lent avec la plante, une attention au modelé, une acceptation de l'imperfection.",
            "Dans Hauts-de-Seine, nous animons cet atelier dans les ateliers des particuliers, dans les espaces d'entreprise et lors d'événements privés à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly. Le format se prête particulièrement bien aux EVJF, anniversaires et team buildings car il combine apprentissage technique et moment méditatif."
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
            "value": "Hauts-de-Seine (92)"
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
                    "q": "Disponible dans toutes les villes des Hauts-de-Seine ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement dans le 92. Pour les zones plus excentrées, nous étudions chaque demande au cas par cas."
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
                    "a": "EVJF, anniversaires adultes, team building, baby shower. Notre public est concentré sur la première couronne, avec une forte présence de sièges sociaux à La Défense, de comités d'entreprise du quartier d'affaires et de jeunes familles à Boulogne et Issy apprécient particulièrement ce format pour son côté méditatif."
            }
    ]
  }} />
);
export default KokedamaHautsDeSeine;
