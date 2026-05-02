import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const OnboardingValDOise = () => (
  <OccasionTemplate data={{
    "slug": "onboarding-val-d-oise",
    "icon": Sparkles,
    "eyebrow": "Onboarding",
    "title": "Atelier onboarding collaborateurs Val-d'Oise",
    "metaTitle": "Atelier onboarding Val-d'Oise, intégration végétale",
    "metaDesc": "Atelier onboarding collaborateurs dans le 95 Val-d'Oise. Animation végétale pour intégrer vos nouvelles recrues autrement.",
    "pitch": "Intégrer ses nouvelles recrues autrement, pensé pour les sièges installés à Cergy-Pontoise, les centres logistiques de la plaine de France et les structures associatives du Vexin. Un atelier botanique en début de journée d'arrivée, qui crée des liens et marque le premier jour avec un objet vivant.",
    "why": [
            {
                    "title": "Brise-glace efficace",
                    "desc": "Plus rapide qu'un tour de table classique. Les mains travaillent, les langues se délient sans pression."
            },
            {
                    "title": "Cadeau d'accueil",
                    "desc": "Chaque nouveau·elle repart avec une plante qui grandira sur son bureau du Val-d'Oise. Un point de repère vivant dans l'espace de travail."
            },
            {
                    "title": "Marque employeur",
                    "desc": "Le Val-d'Oise mêle un pôle d'affaires à Cergy, des zones d'activité étendues et un tissu associatif et culturel dynamique en milieu semi-rural. Un onboarding mémorable participe à votre attractivité auprès des futur·e·s candidat·e·s."
            }
    ],
    "formula": [
            {
                    "line": "Accueil",
                    "detail": "Présentation du format dans vos locaux à Cergy ou dans la vallée de Montmorency, en arrivée des recrues."
            },
            {
                    "line": "Atelier",
                    "detail": "Création guidée, format adapté aux équipes mixtes terrain et bureau souvent rencontrées dans le 95."
            },
            {
                    "line": "Mot RH",
                    "detail": "Vous reprenez la main pour le mot d'accueil, dans un cadre plus chaleureux qu'une salle de formation."
            },
            {
                    "line": "Goûter",
                    "detail": "En option, moment convivial avec produits franciliens, pour clôturer la journée."
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
                    "q": "Format mensuel possible ?",
                    "a": "Oui, nous venons tous les mois pour vos vagues d'onboarding récurrentes. Format apprécié des entreprises de Cergy, Pontoise, Argenteuil et le Vexin qui recrutent en continu."
            },
            {
                    "q": "Vous venez dans le 95 ?",
                    "a": "Oui, partout du Val-d'Oise. Notre équipe se déplace avec tout le matériel."
            },
            {
                    "q": "Personnalisation marque employeur ?",
                    "a": "Oui, étiquettes personnalisées, choix de plantes alignées avec vos valeurs, palette de couleurs aux teintes de votre charte."
            },
            {
                    "q": "Délai d'organisation ?",
                    "a": "Trois semaines minimum pour caler les agendas. Les sièges installés à Cergy-Pontoise et les structures du Vexin privilégient les onboarding planifiés en début d'année."
            }
    ]
  }} />
);
export default OnboardingValDOise;
