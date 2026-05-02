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
    "lead": "Une sphère de mousse, une plante qui en jaillit, un fil de jute pour tenir l'ensemble. Le kokedama, littéralement \"boule de mousse\", se pratique dans le Yvelines avec la même attention qu'au Japon.",
    "story": [
        "Le kokedama trouve ses racines dans la tradition japonaise du nearai bonsaï, où la motte de terre nue se suffit à elle-même. Au fil du 20e siècle, l'art se simplifie pour gagner les intérieurs contemporains.",
        "Nous animons cet atelier dans le Yvelines pour des particuliers, des EVJF, des comités d'entreprise. Les déplacements sont possibles à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie.",
        "Vous repartez avec votre kokedama, suspendu ou posé, et les gestes simples pour le faire vivre plusieurs années."
    ],
    "steps": [
        {
            "title": "Origines du kokedama",
            "desc": "Une mise en contexte rapide, du bonsaï à la version contemporaine."
        },
        {
            "title": "Choix de la plante",
            "desc": "Fougère, lierre, asparagus : sélection guidée selon votre intérieur."
        },
        {
            "title": "Façonnage de la sphère",
            "desc": "Mélange de substrat, modelage à la main, habillage de mousse, ligature au fil de jute."
        },
        {
            "title": "Entretien et arrosage",
            "desc": "La technique du bain pour maintenir la plante en vie sereinement."
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
            "q": "Vous déplacez-vous dans le 78 ?",
            "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement dans le département."
        },
        {
            "q": "Quelle plante repart-on ?",
            "a": "Vous choisissez parmi plusieurs options proposées le jour J : fougères, lierre, asparagus, plantes vertes adaptées."
        },
        {
            "q": "Combien de temps vit un kokedama ?",
            "a": "Plusieurs années avec un arrosage régulier par bain et une lumière indirecte."
        },
        {
            "q": "Format privatisé possible ?",
            "a": "Oui, dès six personnes, à domicile ou en entreprise."
        }
    ]
}} />
);
export default KokedamaYvelines;
