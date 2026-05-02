import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const OnboardingYvelines = () => (
  <OccasionTemplate data={{
    "slug": "onboarding-yvelines",
    "icon": Sparkles,
    "eyebrow": "Onboarding",
    "title": "Atelier onboarding collaborateurs Yvelines",
    "metaTitle": "Atelier onboarding Yvelines, intégration végétale",
    "metaDesc": "Atelier onboarding collaborateurs dans le 78 Yvelines. Animation végétale pour intégrer vos nouvelles recrues autrement.",
    "pitch": "Intégrer ses nouvelles recrues autrement, pensé pour les sièges du Mantois, les pépinières de PME autour de Saint-Quentin-en-Yvelines et les institutions culturelles autour du château de Versailles. Un atelier botanique en début de journée d'arrivée, qui crée des liens et marque le premier jour avec un objet vivant.",
    "why": [
            {
                    "title": "Brise-glace efficace",
                    "desc": "Plus rapide qu'un tour de table classique. Les mains travaillent, les langues se délient sans pression."
            },
            {
                    "title": "Cadeau d'accueil",
                    "desc": "Chaque nouveau·elle repart avec une plante qui grandira sur son bureau des Yvelines. Un point de repère vivant dans l'espace de travail."
            },
            {
                    "title": "Marque employeur",
                    "desc": "Le département compte de nombreux sièges sociaux installés dans le triangle Saint-Quentin / Vélizy / Versailles, et un tissu associatif dense autour des villes royales. Un onboarding mémorable participe à votre attractivité auprès des futur·e·s candidat·e·s."
            }
    ],
    "formula": [
            {
                    "line": "Accueil",
                    "detail": "Présentation du format dans vos locaux à Versailles, Saint-Quentin ou Mantes, autour d'un café d'accueil."
            },
            {
                    "line": "Atelier",
                    "detail": "Création guidée terrarium ou kokedama, dimensionnée pour le nombre de recrues du jour."
            },
            {
                    "line": "Mot RH",
                    "detail": "Vous reprenez la main pour le mot d'accueil officiel et la présentation de l'organisation, dans une ambiance détendue."
            },
            {
                    "line": "Goûter",
                    "detail": "En option, nous gérons un moment convivial avec boissons et collations à la fin de l'atelier."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "1h30 à 2h"
        },
        {
            "label": "Groupe",
            "value": "5 à 30 pers."
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
                    "q": "Format mensuel possible ?",
                    "a": "Oui, nous venons tous les mois pour vos vagues d'onboarding récurrentes. Format apprécié des entreprises de Versailles, Saint-Germain-en-Laye et le Mantois qui recrutent en continu."
            },
            {
                    "q": "Vous venez dans le 78 ?",
                    "a": "Oui, partout des Yvelines. Notre équipe se déplace avec tout le matériel."
            },
            {
                    "q": "Personnalisation marque employeur ?",
                    "a": "Oui, étiquettes personnalisées, choix de plantes alignées avec vos valeurs, palette de couleurs aux teintes de votre charte."
            },
            {
                    "q": "Délai d'organisation ?",
                    "a": "Trois semaines minimum pour caler les agendas. Les sièges du triangle Saint-Quentin / Vélizy / Versailles privilégient les onboarding planifiés en début d'année."
            }
    ]
  }} />
);
export default OnboardingYvelines;
