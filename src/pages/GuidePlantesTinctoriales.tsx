import GuideTemplate from "@/components/GuideTemplate";
import { Sparkles } from "lucide-react";

const GuidePlantesTinctoriales = () => (
  <GuideTemplate data={{
    slug: "guide/plantes-tinctoriales-ile-de-france",
    icon: Sparkles,
    eyebrow: "Liste et usages",
    title: "Plantes tinctoriales d'Île-de-France",
    metaTitle: "Plantes tinctoriales d'Île-de-France : liste, couleurs, usages",
    metaDesc: "Liste des plantes tinctoriales que l'on trouve en Île-de-France. Garance, gaude, indigo, sureau : couleurs, usages et conseils de teinture.",
    intro: "L'Île-de-France abrite de nombreuses plantes capables de donner des couleurs étonnantes au textile. Voici un panorama des principales espèces, avec leurs nuances et leurs usages historiques.",
    toc: [
      "Qu'est-ce qu'une plante tinctoriale ?",
      "Les rouges : garance et bois de campêche",
      "Les jaunes : gaude, genêt, sureau",
      "Les bleus : indigo et guède",
      "Récolter et utiliser en respectant la nature",
    ],
    sections: [
      {
        id: "definition",
        title: "Qu'est-ce qu'une plante tinctoriale ?",
        paragraphs: [
          "Une plante tinctoriale contient des pigments capables de teindre durablement une fibre textile. Cette teinture nécessite généralement un mordant, qui aide la couleur à se fixer sur le tissu.",
          "Avant l'industrialisation chimique du 19e siècle, l'humanité s'est habillée pendant des millénaires grâce à ces plantes. Leur redécouverte aujourd'hui relève autant d'une démarche écologique que culturelle.",
        ],
      },
      {
        id: "rouges",
        title: "Les rouges : garance et bois de campêche",
        paragraphs: [
          "La garance des teinturiers, Rubia tinctorum, est la plante reine pour les rouges. Cultivée massivement en France au 19e siècle, notamment en Avignon, elle a habillé les pantalons rouges de l'armée française jusqu'en 1914.",
          "Le bois de campêche, importé d'Amérique centrale, donne quant à lui des violets et des noirs profonds. Une plante exotique qui raconte l'histoire coloniale de la teinture.",
        ],
      },
      {
        id: "jaunes",
        title: "Les jaunes : gaude, genêt, sureau",
        paragraphs: [
          "La gaude, Reseda luteola, est la plante européenne par excellence pour les jaunes lumineux. Elle pousse spontanément en Île-de-France sur les terrains pauvres et caillouteux.",
          "Le genêt des teinturiers et les baies de sureau noir donnent également des jaunes et des verts intéressants, accessibles en cueillette dans la région.",
        ],
        list: [
          "Gaude (jaune vif, très solide)",
          "Genêt des teinturiers (jaune doré)",
          "Sureau noir, baies (gris à violet)",
          "Tanaisie (jaune verdâtre)",
        ],
      },
      {
        id: "bleus",
        title: "Les bleus : indigo et guède",
        paragraphs: [
          "L'indigo véritable, Indigofera tinctoria, vient des Indes et a donné lieu à des routes commerciales et coloniales majeures. Son équivalent européen est la guède, ou pastel, qui faisait la richesse du Lauragais au Moyen Âge.",
          "La teinture à l'indigo est techniquement plus complexe que les autres car elle nécessite une cuve fermentée, mais elle donne des bleus profonds incomparables.",
        ],
      },
      {
        id: "respect",
        title: "Récolter et utiliser en respectant la nature",
        paragraphs: [
          "La cueillette de plantes sauvages doit toujours respecter quelques règles : ne jamais prélever d'espèce protégée, ne pas couper plus du tiers d'une station, et préférer les zones éloignées des bords de route et des cultures traitées.",
          "Pour expérimenter, mieux vaut commencer par des plantes cultivées chez soi ou achetées chez des artisans spécialisés en teinture végétale.",
        ],
      },
    ],
    conclusion: "Les plantes tinctoriales sont une porte d'entrée fascinante dans l'histoire culturelle, scientifique et sociale du textile. Nos ateliers de teinture végétale à Paris permettent d'expérimenter concrètement avec ces plantes.",
    related: [
      { to: "/atelier-teinture-vegetale-paris", label: "Atelier teinture" },
      { to: "/balade-plantes-sauvages-comestibles-paris", label: "Plantes sauvages" },
      { to: "/balades-botaniques", label: "Balades" },
    ],
  }} />
);
export default GuidePlantesTinctoriales;
