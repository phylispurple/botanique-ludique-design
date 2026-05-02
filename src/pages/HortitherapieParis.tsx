import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const HortitherapieParis = () => (
  <OccasionTemplate data={{
    "slug": "hortitherapie-paris",
    "icon": Heart,
    "eyebrow": "Hortithérapie",
    "title": "Atelier d'hortithérapie Paris",
    "metaTitle": "Atelier hortithérapie Paris, médiation par le végétal",
    "metaDesc": "Atelier d'hortithérapie dans le 75 Paris. Médiation par le végétal en EHPAD, IME, hôpital, foyer, en cycle ou à la séance.",
    "pitch": "Le végétal comme support de soin, pensé pour les structures médico-sociales parisien·nes. Paris dispose d'un dense réseau d'EHPAD municipaux, d'hôpitaux de l'AP-HP et de structures sociales où l'hortithérapie est une demande croissante. Nos cycles s'adaptent aux contraintes des équipes soignantes et aux capacités du public.",
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
                    "desc": "Les équipes soignantes parisien·nes observent un bénéfice immédiat sur l'humeur et l'agitation du groupe, après une séance."
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
                    "q": "Public à mobilité réduite ?",
                    "a": "Oui, nos formats sont adaptés. L'atelier vient à la table ou au lit. Nous travaillons régulièrement avec des EHPAD et des structures de jour."
            },
            {
                    "q": "Intervention dans le 75 ?",
                    "a": "Oui, à tous les arrondissements parisiens et plus largement parisien·nes. Pour les zones plus excentrées, nous étudions la faisabilité au cas par cas."
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
export default HortitherapieParis;
