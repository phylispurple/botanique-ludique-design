import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const HortitherapieYvelines = () => (
  <OccasionTemplate data={{
    "slug": "hortitherapie-yvelines",
    "icon": Heart,
    "eyebrow": "Hortithérapie",
    "title": "Atelier d'hortithérapie Yvelines",
    "metaTitle": "Atelier hortithérapie Yvelines, médiation par le végétal",
    "metaDesc": "Atelier d'hortithérapie dans le 78 Yvelines. Médiation par le végétal en EHPAD, IME, hôpital, foyer, en cycle ou à la séance.",
    "pitch": "Le végétal comme support de soin, dans Yvelines. Un atelier d'hortithérapie pensé pour les structures médico-sociales, sensorielles et inclusives, en séance unique ou en cycle.",
    "why": [
            {
                    "title": "Sensoriel",
                    "desc": "Le toucher, l'odorat, la vue mobilisés sans exigence cognitive forte. Adapté aux publics avec troubles cognitifs ou sensoriels."
            },
            {
                    "title": "Adaptable",
                    "desc": "Format ajustable selon les capacités physiques et cognitives du groupe. L'atelier peut venir au lit, à la table, dans la chambre."
            },
            {
                    "title": "Apaisant",
                    "desc": "Le contact aux plantes apaise, recentre, réduit l'agitation. Les équipes soignantes observent souvent un bénéfice immédiat sur l'humeur du groupe."
            }
    ],
    "formula": [
            {
                    "line": "Séance unique",
                    "detail": "Un atelier ponctuel pour découvrir, observer, manipuler. Idéal pour tester avant un éventuel cycle plus long."
            },
            {
                    "line": "Cycle court",
                    "detail": "Quatre séances pour suivre un fil conducteur saisonnier. Permet d'installer une habitude et un rapport personnel à la plante."
            },
            {
                    "line": "Cycle long",
                    "detail": "Programme sur l'année avec un fil narratif documenté pour les équipes, qui peuvent se l'approprier."
            },
            {
                    "line": "Formation équipe",
                    "detail": "Transmission de gestes simples pour que les soignant·e·s puissent prolonger l'atelier en autonomie entre nos passages."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "45 min à 1h30"
        },
        {
            "label": "Public",
            "value": "EHPAD, IME, hôpital"
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
                    "q": "Public à mobilité réduite ?",
                    "a": "Oui, nos formats sont adaptés. L'atelier vient à la table ou au lit. Nous travaillons régulièrement avec des EHPAD et des structures de jour."
            },
            {
                    "q": "Intervention dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement des Yvelines. Pour les zones plus excentrées, nous étudions la faisabilité au cas par cas."
            },
            {
                    "q": "Conventionnement ARS ou département ?",
                    "a": "Nous travaillons avec des structures publiques et privées. Notre statut associatif et nos références facilitent les démarches administratives."
            },
            {
                    "q": "Cycle annuel possible ?",
                    "a": "Oui, c'est la formule que nous recommandons pour un vrai impact thérapeutique observable. Une séance par mois pendant six à douze mois."
            }
    ]
  }} />
);
export default HortitherapieYvelines;
