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
    "pitch": "Le végétal comme support de soin, pensé pour les structures médico-sociales des Yvelines. Le 78 abrite plusieurs structures médico-sociales installées dans des parcs anciens, où l'hortithérapie a un terrain naturel. Nos cycles s'adaptent aux contraintes des équipes soignantes et aux capacités du public.",
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
                    "desc": "Les équipes soignantes des Yvelines observent un bénéfice immédiat sur l'humeur et l'agitation du groupe, après une séance."
            }
    ],
    "formula": [
            {
                    "line": "Séance unique",
                    "detail": "Un atelier ponctuel pour découvrir, observer, manipuler. Idéal pour tester avant d'engager un cycle long, à Versailles, Saint-Germain-en-Laye et dans le Mantois."
            },
            {
                    "line": "Cycle saisonnier",
                    "detail": "Quatre séances rythmées par les saisons (bouturage de printemps, séchage d'été, écorces d'automne, conifères d'hiver)."
            },
            {
                    "line": "Cycle annuel",
                    "detail": "Programme sur l'année avec un fil narratif documenté, transmissible aux équipes soignantes pour assurer la continuité."
            },
            {
                    "line": "Formation soignants",
                    "detail": "Transmission de gestes simples aux équipes des EHPAD des Yvelines, pour prolonger l'atelier en autonomie."
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
                    "a": "Oui, nos formats sont adaptés. L'atelier vient à la table, au fauteuil ou au lit. Nous travaillons régulièrement à Versailles, Saint-Germain-en-Laye et dans le Mantois."
            },
            {
                    "q": "Intervention dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement. Pour les zones plus excentrées des Yvelines, nous étudions la faisabilité au cas par cas."
            },
            {
                    "q": "Conventionnement ARS ou département ?",
                    "a": "Notre statut associatif et nos références des Yvelines facilitent les démarches administratives et la facturation publique."
            },
            {
                    "q": "Cycle annuel possible ?",
                    "a": "Oui, c'est la formule recommandée pour un impact thérapeutique observable. Une séance par mois sur six à douze mois, format suivi par les équipes."
            }
    ]
  }} />
);
export default HortitherapieYvelines;
