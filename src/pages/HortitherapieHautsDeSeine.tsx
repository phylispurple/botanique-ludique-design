import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const HortitherapieHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "hortitherapie-hauts-de-seine",
    "icon": Heart,
    "eyebrow": "Hortithérapie",
    "title": "Atelier d'hortithérapie Hauts-de-Seine",
    "metaTitle": "Atelier hortithérapie Hauts-de-Seine, médiation par le végétal",
    "metaDesc": "Atelier d'hortithérapie dans le 92 Hauts-de-Seine. Médiation par le végétal en EHPAD, IME, hôpital, foyer, en cycle ou à la séance.",
    "pitch": "Le végétal comme support de soin, pensé pour les structures médico-sociales des Hauts-de-Seine. Le 92 dispose d'un maillage dense de structures médico-sociales, avec des services hospitaliers (Foch, Ambroise-Paré) sensibles aux médiations non médicamenteuses. Nos cycles s'adaptent aux contraintes des équipes soignantes et aux capacités du public.",
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
                    "desc": "Les équipes soignantes des Hauts-de-Seine observent un bénéfice immédiat sur l'humeur et l'agitation du groupe, après une séance."
            }
    ],
    "formula": [
            {
                    "line": "Séance unique",
                    "detail": "Un atelier ponctuel dans les services hospitaliers de Foch (Suresnes) et Ambroise-Paré (Boulogne) et les EHPAD altoséquanais, pour découvrir et tester avant un cycle."
            },
            {
                    "line": "Cycle court",
                    "detail": "Quatre séances bimensuelles pour installer un rituel hortithérapeutique dans un service hospitalier ou un EHPAD."
            },
            {
                    "line": "Cycle annuel",
                    "detail": "Programme sur l'année avec une logique cumulative, le groupe se reconnaît et s'approprie l'atelier."
            },
            {
                    "line": "Formation soignants",
                    "detail": "Sessions courtes pour les équipes hospitalières et médico-sociales des Hauts-de-Seine, autour des médiations non médicamenteuses."
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
            "value": "Hauts-de-Seine (92)"
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
            "to": "/balade-botanique-hauts-de-seine",
            "label": "Balade Hauts-de-Seine"
        }
    ],
    "faqs": [
            {
                    "q": "Public à mobilité réduite ?",
                    "a": "Oui, nos formats sont adaptés. L'atelier vient à la table, au fauteuil ou au lit. Nous travaillons régulièrement dans les services hospitaliers de Foch (Suresnes) et Ambroise-Paré (Boulogne) et les EHPAD altoséquanais."
            },
            {
                    "q": "Intervention dans le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement. Pour les zones plus excentrées des Hauts-de-Seine, nous étudions la faisabilité au cas par cas."
            },
            {
                    "q": "Conventionnement ARS ou département ?",
                    "a": "Notre statut associatif et nos références des Hauts-de-Seine facilitent les démarches administratives et la facturation publique."
            },
            {
                    "q": "Cycle annuel possible ?",
                    "a": "Oui, c'est la formule recommandée pour un impact thérapeutique observable. Une séance par mois sur six à douze mois, format suivi par les équipes."
            }
    ]
  }} />
);
export default HortitherapieHautsDeSeine;
