import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const NoelCouronneVegetaleYvelines = () => (
  <OccasionTemplate data={{
    "slug": "noel-couronne-vegetale-yvelines",
    "icon": Sparkles,
    "eyebrow": "Noël botanique",
    "title": "Atelier couronne de Noël végétale Yvelines",
    "metaTitle": "Couronne de Noël végétale Yvelines, atelier botanique",
    "metaDesc": "Atelier couronne de Noël végétale dans le 78 Yvelines. Sapin, eucalyptus, baies, ruban, à composer en deux heures.",
    "pitch": "Une couronne de Noël qui dure plus que la saison. Dans Yvelines, nous composons des couronnes en végétaux frais et durables, à votre image, loin du plastique et du made in China.",
    "why": [
            {
                    "title": "Naturel",
                    "desc": "Sapin, eucalyptus, branches de pin, baies fraîches, fruits secs. À l'opposé du plastique des couronnes de supermarché."
            },
            {
                    "title": "Personnel",
                    "desc": "Chaque couronne est unique, à votre style et à votre porte d'entrée. Nous proposons une palette large mais c'est vous qui composez."
            },
            {
                    "title": "Convivial",
                    "desc": "Un format chaleureux à vivre entre ami·e·s, en famille ou entre collègues, en début de saison de Noël. Souvent suivi d'un vin chaud."
            }
    ],
    "formula": [
            {
                    "line": "Présentation",
                    "detail": "Petite traversée des végétaux d'hiver et des traditions de couronnes en France et en Europe."
            },
            {
                    "line": "Composition",
                    "detail": "Choix des branchages locaux (sapin, eucalyptus, pin), structuration de la base sur cercle métallique."
            },
            {
                    "line": "Finition",
                    "detail": "Ruban de jute, pommes de pin de la forêt de Rambouillet, baies séchées, dernière touche personnelle."
            },
            {
                    "line": "Conseils",
                    "detail": "Brumisation hebdomadaire pour tenir jusqu'à l'Épiphanie, conseils d'exposition adaptés aux maisons des Yvelines."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "2h"
        },
        {
            "label": "Groupe",
            "value": "6 à 15 pers."
        },
        {
            "label": "Lieu",
            "value": "Yvelines (78)"
        },
        {
            "label": "Prix",
            "value": "À partir de 55 €"
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
                    "q": "À quelle période ?",
                    "a": "Fin novembre à mi-décembre, créneaux limités. À Versailles et Saint-Germain, anticiper dès octobre."
            },
            {
                    "q": "Disponible dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Le Vésinet, Maurepas et au-delà. Format en entreprise très demandé dans le triangle Saint-Quentin / Versailles."
            },
            {
                    "q": "Tient combien de temps ?",
                    "a": "Trois à quatre semaines avec brumisation, parfois plus si la porte n'est pas exposée plein sud."
            },
            {
                    "q": "Format entreprise ?",
                    "a": "Oui, formule appréciée des sièges et PME des Yvelines pour fêter la fin d'année."
            }
    ]
  }} />
);
export default NoelCouronneVegetaleYvelines;
