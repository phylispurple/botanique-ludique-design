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
    "pitch": "Le végétal comme support de soin, pensé pour les structures médico-sociales du Val-d'Oise. Le Val-d'Oise dispose de plusieurs EHPAD et MAS dans des cadres ruraux ou semi-ruraux, terrain favorable à l'hortithérapie en cycle long. Nos cycles s'adaptent aux contraintes des équipes soignantes et aux capacités du public.",
    "why": [
            {
                    "title": "Sensoriel",
                    "desc": "Le toucher, l'odorat, la vue mobilisés sans exigence cognitive forte. Adapté aux personnes avec troubles cognitifs, sensoriels ou en perte d'autonomie."
            },
            {
                    "title": "Ancrage local",
                    "desc": "Nous travaillons avec des plantes adaptées au climat francilien et à la biographie des résident·e·s, qui reconnaissent souvent les espèces de leur jardin d'enfance."
            },
            {
                    "title": "Apaisant",
                    "desc": "Les équipes soignantes du Val-d'Oise observent un bénéfice immédiat sur l'humeur et l'agitation du groupe, après une séance."
            }
    ],
    "formula": [
            {
                    "line": "Séance unique",
                    "detail": "Un atelier ponctuel dans les EHPAD et MAS du Vexin et de la plaine de France, souvent en cadre semi-rural, pour tester l'approche dans un cadre semi-rural."
            },
            {
                    "line": "Cycle saisonnier",
                    "detail": "Quatre séances rythmées par les saisons, en lien avec le jardin de la structure quand il existe."
            },
            {
                    "line": "Cycle annuel",
                    "detail": "Programme sur l'année avec mobilisation du jardin extérieur quand le cadre le permet, fréquent dans le Vexin."
            },
            {
                    "line": "Formation soignants",
                    "detail": "Sessions pour les équipes médico-sociales du 95, en lien avec les politiques départementales de qualité de vie en EHPAD."
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
                    "a": "Oui, nos formats sont adaptés. L'atelier vient à la table, au fauteuil ou au lit. Nous travaillons régulièrement dans les EHPAD et MAS du Vexin et de la plaine de France, souvent en cadre semi-rural."
            },
            {
                    "q": "Intervention dans le 95 ?",
                    "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement. Pour les zones plus excentrées du Val-d'Oise, nous étudions la faisabilité au cas par cas."
            },
            {
                    "q": "Conventionnement ARS ou département ?",
                    "a": "Notre statut associatif et nos références du Val-d'Oise facilitent les démarches administratives et la facturation publique."
            },
            {
                    "q": "Cycle annuel possible ?",
                    "a": "Oui, c'est la formule recommandée pour un impact thérapeutique observable. Une séance par mois sur six à douze mois, format suivi par les équipes."
            }
    ]
  }} />
);
export default HortitherapieValDOise;
