import OccasionTemplate from "@/components/OccasionTemplate";
import { Heart } from "lucide-react";

const BabyShowerVegetalYvelines = () => (
  <OccasionTemplate data={{
    "slug": "baby-shower-vegetal-yvelines",
    "icon": Heart,
    "eyebrow": "Baby shower botanique",
    "title": "Baby shower végétal Yvelines",
    "metaTitle": "Baby shower végétal Yvelines, atelier doux",
    "metaDesc": "Baby shower végétal dans le 78 Yvelines. Atelier botanique apaisé pour célébrer une future maman, terrarium, kokedama, couronne.",
    "pitch": "Un baby shower qui prend soin de la future maman dans Yvelines. Pas de jeux gênants, pas de couleurs criardes : un moment posé, manuel et sensible autour des plantes, à partager avec ses proches.",
    "why": [
            {
                    "title": "Apaisé",
                    "desc": "Un format calme, parfait pour une femme enceinte qui souhaite un moment doux plutôt qu'une fête bruyante. Tout est pensé pour qu'elle puisse s'asseoir et participer à son rythme."
            },
            {
                    "title": "Inclusif",
                    "desc": "Toutes les générations s'y retrouvent. Mère, sœurs, amies, belle-mère, parfois la grand-mère. La plante crée un terrain commun où les âges se rejoignent."
            },
            {
                    "title": "Symbolique",
                    "desc": "La plante comme métaphore du soin, du temps qui passe, du vivant qui pousse. Un beau symbole pour cette étape de vie, sans tomber dans le cliché."
            }
    ],
    "formula": [
            {
                    "line": "Accueil",
                    "detail": "Verre d'accueil sans alcool, mise en lien des invitées, présentation du format de la séance."
            },
            {
                    "line": "Histoire",
                    "detail": "Petite introduction sur les plantes choisies pour la séance, leurs origines et leur symbolique éventuelle."
            },
            {
                    "line": "Création",
                    "detail": "Atelier guidé en groupe, autour de la future maman. Notre médiatrice circule pour aider chacune."
            },
            {
                    "line": "Cadeau collectif",
                    "detail": "Création collective offerte à la future maman, en option. Souvent un grand kokedama ou un terrarium plus ambitieux."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "2h"
        },
        {
            "label": "Groupe",
            "value": "5 à 12 pers."
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
                    "q": "Adapté à une femme enceinte ?",
                    "a": "Oui totalement. Tous les matériaux que nous utilisons sont sains, l'atelier est doux, la future maman participe debout ou assise selon son envie."
            },
            {
                    "q": "Vous venez où dans le 78 ?",
                    "a": "À Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement des Yvelines. Le format à domicile fonctionne particulièrement bien pour ce type de moment intime."
            },
            {
                    "q": "À domicile ou en salle ?",
                    "a": "Les deux. La majorité des baby showers que nous animons ont lieu chez la future maman ou chez l'organisatrice, dans un cadre familier et chaleureux."
            },
            {
                    "q": "Combien de temps avant ?",
                    "a": "Trois à quatre semaines de réservation, davantage pour les week-ends. La période idéale est entre le 6e et le 8e mois de grossesse."
            }
    ]
  }} />
);
export default BabyShowerVegetalYvelines;
