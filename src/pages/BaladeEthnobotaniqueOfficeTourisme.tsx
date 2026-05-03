import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeEthnobotaniqueOfficeTourisme = () => (
  <BaladeGeoTemplate
    data={{
      slug: "balade-ethnobotanique-office-tourisme",
      dept: "Offices de tourisme et patrimoine",
      deptCode: "Tourisme",
      region: "FR-IDF",
      title: "Balade ethnobotanique pour office de tourisme et patrimoine",
      metaTitle: "Balade ethnobotanique office tourisme, patrimoine IDF",
      metaDesc: "Balades ethnobotaniques programmées pour offices de tourisme, sites patrimoniaux et CDT en Île-de-France. Format public, sur réservation, saisonnier.",
      keywords: "balade ethnobotanique office tourisme, visite guidée végétale, patrimoine vivant tourisme, CDT IDF nature, programmation tourisme botanique, médiation site patrimonial",
      intro: "Vos visiteur·ses cherchent du sens, de l'expert·e et du ralentissement. La balade ethnobotanique offre une lecture inédite du patrimoine, là où les visites classiques s'épuisent.",
      context: "Pour offices de tourisme, comités départementaux du tourisme, sites patrimoniaux, châteaux ouverts au public et grands jardins, nous concevons des balades ethnobotaniques programmées, intégrées à votre offre saisonnière ou événementielle.",
      spots: [
        { name: "Programmation saisonnière office de tourisme", desc: "Une balade par saison intégrée à votre programme public, sur réservation, format 2h, 12 à 25 personnes. Vous gérez la billetterie, nous animons." },
        { name: "Site patrimonial et château", desc: "Médiation ethnobotanique autour des essences historiques d'un parc, d'un potager ou d'un jardin de simples. Lecture croisée patrimoine bâti et végétal." },
        { name: "Journées européennes du patrimoine", desc: "Format public dédié pour les JEP, susceptible de remplir plusieurs créneaux dans la journée. Ancrage thématique sur l'histoire végétale du lieu." },
        { name: "Rendez-vous aux jardins", desc: "Module ethnobotanique pour le week-end Rendez-vous aux jardins, cohérent avec la thématique annuelle du ministère de la Culture." },
        { name: "Itinérance touristique végétale", desc: "Conception d'un parcours végétal autonome (livret, signalétique, audio) pour votre territoire, en complément de balades animées ponctuelles." },
        { name: "Formation guides-conférencier·es", desc: "Demi-journée pour vos guides afin qu'iels puissent porter un volet ethnobotanique léger dans leurs visites classiques." },
      ],
      audiences: [
        "Offices de tourisme communaux et intercommunaux",
        "Comités départementaux et régionaux du tourisme",
        "Sites patrimoniaux et monuments historiques",
        "Châteaux, domaines et parcs ouverts au public",
        "Conservateur·ices de jardins remarquables",
        "Organisateur·ices des JEP et Rendez-vous aux jardins",
      ],
      references: "Les balades ethnobotaniques se distinguent des visites guidées classiques par un public plus exigeant et un panier moyen plus élevé. Elles renforcent l'image culturelle et durable d'un territoire.",
      related: [
        { to: "/balade-botanique-jardin-patrimonial", label: "Jardin patrimonial" },
        { to: "/balade-botanique-musee", label: "Balade musée" },
        { to: "/balades-botaniques", label: "Tous les formats balade" },
      ],
    }}
  />
);

export default BaladeEthnobotaniqueOfficeTourisme;
