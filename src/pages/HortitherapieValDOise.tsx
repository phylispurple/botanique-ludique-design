import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const HortitherapieValDOise = () => (
  <OccasionTemplate data={{
    "slug": "hortitherapie-val-d-oise",
    "icon": Heart,
    "eyebrow": "Hortithérapie",
    "title": "Atelier d'hortithérapie Val-d'Oise",
    "metaTitle": "Atelier hortithérapie Val-d'Oise, médiation par le végétal",
    "metaDesc": "Atelier d'hortithérapie dans le 95 Val-d'Oise. Médiation par le végétal en EHPAD, IME, hôpital, foyer, en cycle ou à la séance.",
    "pitch": "Le végétal comme support de soin, dans le Val-d'Oise. Un atelier d'hortithérapie pensé pour les structures médico-sociales, sensorielles et inclusives.",
    "why": [
        {
            "title": "Sensoriel",
            "desc": "Le toucher, l'odorat, la vue mobilisés sans exigence cognitive forte."
        },
        {
            "title": "Adaptable",
            "desc": "Format ajustable selon les capacités physiques et cognitives du groupe."
        },
        {
            "title": "Apaisant",
            "desc": "Le contact aux plantes apaise, recentre, réduit l'agitation."
        }
    ],
    "formula": [
        {
            "line": "Séance unique",
            "detail": "Un atelier ponctuel pour découvrir, observer, manipuler."
        },
        {
            "line": "Cycle court",
            "detail": "Quatre séances pour suivre un fil conducteur saisonnier."
        },
        {
            "line": "Cycle long",
            "detail": "Programme sur l'année avec un fil narratif documenté pour les équipes."
        },
        {
            "line": "Formation équipe",
            "detail": "Transmission de gestes pour que les soignant·e·s prolongent l'atelier."
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
            "value": "Val-d'Oise (95)"
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
            "to": "/balade-botanique-val-d-oise",
            "label": "Balade Val-d'Oise"
        }
    ],
    "faqs": [
        {
            "q": "Public à mobilité réduite ?",
            "a": "Oui, nos formats sont adaptés. L'atelier vient à la table ou au lit."
        },
        {
            "q": "Intervention dans le 95 ?",
            "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement."
        },
        {
            "q": "Conventionnement ARS ou département ?",
            "a": "Nous travaillons avec des structures publiques et privées et adaptons nos devis."
        },
        {
            "q": "Cycle annuel possible ?",
            "a": "Oui, c'est même le format que nous recommandons pour un vrai impact."
        }
    ]
}} />
);
export default HortitherapieValDOise;
