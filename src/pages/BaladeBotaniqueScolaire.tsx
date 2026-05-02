import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueScolaire = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-scolaire",
    dept: "Île-de-France",
    deptCode: "IDF",
    title: "Balade botanique pour écoles et collèges",
    metaTitle: "Balade botanique scolaire en Île-de-France, primaire au lycée",
    metaDesc: "Balade botanique pour écoles, collèges et lycées d'Île-de-France. Sortie pédagogique en SVT, sciences humaines et éducation au développement durable.",
    intro: "Une sortie qui donne envie d'apprendre. Une balade botanique pensée pour les classes, du CM1 au lycée, qui croise sciences du vivant et regard culturel sur les plantes.",
    context: "Conçue en lien avec les programmes de SVT, d'EMC et de géographie, la balade peut s'inscrire dans un projet d'EAC, un parcours scientifique ou une semaine pédagogique. Pass Culture éligible.",
    spots: [
      { name: "Sortie de proximité autour de l'établissement", desc: "Repérage en amont avec l'équipe pédagogique pour exploiter le quartier de l'école comme terrain d'observation et de questionnement." },
      { name: "Sortie en parc ou jardin botanique", desc: "Demi-journée structurée dans un grand parc d'Île-de-France : observation, identification et discussion autour de l'histoire des plantes." },
      { name: "Cycle de plusieurs séances", desc: "Trois à quatre balades sur l'année pour suivre le rythme des saisons et construire un véritable projet de classe ancré dans le vivant." },
      { name: "Balade et atelier en classe", desc: "Combinaison sortie + retour en classe avec atelier pratique (herbier, kokedama, teinture) pour ancrer les apprentissages." },
    ],
    audiences: [
      "Écoles élémentaires (CM1, CM2)",
      "Collèges, classes de SVT et de français",
      "Lycées généraux, professionnels et agricoles",
      "Établissements éligibles Pass Culture",
      "Centres de loisirs et accueils périscolaires",
      "Établissements spécialisés et IME",
    ],
    related: [
      { to: "/etablissements-scolaires", label: "Pôle scolaire" },
      { to: "/animation-scolaire-nature", label: "Animations scolaires" },
      { to: "/balades-botaniques", label: "Tous les formats" },
    ],
  }} />
);

export default BaladeBotaniqueScolaire;
