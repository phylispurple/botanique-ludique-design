import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const MediationVegetaleArchitectesPaysagistes = () => (
  <BaladeGeoTemplate
    data={{
      slug: "mediation-vegetale-architectes-paysagistes",
      dept: "Architectes et paysagistes",
      deptCode: "Maîtrise d'œuvre",
      region: "FR-IDF",
      title: "Médiation végétale pour architectes, paysagistes et MOE",
      metaTitle: "Médiation végétale architectes, paysagistes, concertation",
      metaDesc: "Médiation ethnobotanique pour cabinets d'architectes, paysagistes et MOE. Concertation habitant·es, inauguration, formation équipes projet.",
      keywords: "médiation végétale architectes, concertation paysagiste, médiation projet urbain, inauguration jardin public, ethnobotanique aménagement, formation maîtrise œuvre",
      intro: "Vos projets parlent du vivant, mais la médiation avec les habitant·es et les commanditaires reste souvent un angle mort. Nous intervenons en sous-traitance pour porter cette parole végétale.",
      context: "Pour cabinets d'architectes, paysagistes concepteur·ices, AMO et bureaux d'études, nous proposons des prestations de médiation aux moments clés du projet : phase concertation, livraison, inauguration, ou en accompagnement durable post-livraison.",
      spots: [
        { name: "Phase concertation habitant·es", desc: "Ateliers participatifs ethnobotaniques pour faire émerger la parole habitante autour d'un projet d'espace public, square, jardin partagé ou cœur d'îlot." },
        { name: "Inauguration et livraison", desc: "Balade ethnobotanique guidée le jour de l'inauguration, lecture des essences choisies, médiation entre la maîtrise d'œuvre et les usager·es." },
        { name: "Formation des équipes gestionnaires", desc: "Module de formation pour les agent·es municipaux ou bailleurs qui prendront en gestion l'espace livré. Comprendre les choix, savoir les raconter." },
        { name: "Programmation culturelle d'un nouveau lieu", desc: "Construction d'un cycle d'animations végétales sur la première année d'ouverture, pour ancrer le lieu dans les usages." },
        { name: "Sous-traitance médiation pour AAP", desc: "Apport d'un volet médiation chiffré et rédigé dans vos réponses à appels d'offres publics ou marchés ANRU." },
        { name: "Module ethnobotanique pour cabinets", desc: "Demi-journée de formation interne pour vos équipes, autour des récits ethnobotaniques associés aux essences que vous prescrivez." },
      ],
      audiences: [
        "Cabinets d'architectes et agences d'urbanisme",
        "Paysagistes concepteur·ices et bureaux d'études",
        "AMO en aménagement et programmation urbaine",
        "Promoteurs et bailleurs sociaux en projet ANRU",
        "Maîtrises d'ouvrage publiques (mairies, communautés d'agglo)",
        "Collectifs d'architectes en démarche participative",
      ],
      references: "La médiation végétale devient un attendu des appels d'offres publics, notamment dans les programmes ANRU et les budgets participatifs. Intégrer un volet médiation chiffré renforce la qualité de vos réponses.",
      related: [
        { to: "/marches-publics", label: "Marchés publics" },
        { to: "/references-collectivites", label: "Références collectivités" },
        { to: "/balades-botaniques", label: "Balades botaniques" },
      ],
    }}
  />
);

export default MediationVegetaleArchitectesPaysagistes;
