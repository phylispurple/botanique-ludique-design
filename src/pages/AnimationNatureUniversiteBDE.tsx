import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const AnimationNatureUniversiteBDE = () => (
  <BaladeGeoTemplate
    data={{
      slug: "animation-nature-universite-bde",
      dept: "Universités et grandes écoles",
      deptCode: "Étudiant",
      region: "FR-IDF",
      title: "Animation nature pour université, grande école et BDE",
      metaTitle: "Animation nature université, BDE, semaine DD étudiante IDF",
      metaDesc: "Interventions ethnobotaniques pour universités, grandes écoles et BDE en Île-de-France. Semaine DD, journées d'intégration, QVT étudiante.",
      keywords: "animation nature université, atelier végétal BDE, semaine développement durable étudiante, QVT étudiante, intégration grande école, ethnobotanique campus",
      intro: "Sur les campus, le besoin d'ancrage, de respiration et de sens est réel. Nos formats croisent botanique vivante et regard anthropologique pour des étudiant·es qui veulent du fond, pas des animations gadgets.",
      context: "Pour services culturels, BDE, BDD, missions DD&RS, services de santé universitaire et écoles d'ingénieur·es, de commerce ou d'art, nous proposons ateliers, balades et conférences mêlant pratique végétale et lecture critique du vivant.",
      spots: [
        { name: "Semaine du développement durable étudiante", desc: "Atelier ouvert, balade ethnobotanique sur le campus, table-ronde courte. Format 1h à 3h, pour 15 à 100 étudiant·es selon le format." },
        { name: "Journée d'intégration et rentrée", desc: "Activité brise-glace ethnobotanique, atelier kokedama collectif, balade urbaine en équipe. Sortir des escape games et bowling." },
        { name: "QVT et santé étudiante", desc: "Cycles courts en partenariat avec les services de santé universitaire, autour du stress, de la concentration et du lien au vivant. Public adultes-jeunes." },
        { name: "Conférence et table-ronde académique", desc: "Intervention ethnobotanique anchorée EHESS dans un séminaire, un cours ou une journée d'étude. Format 1h à 2h, en lien avec vos enseignant·es." },
        { name: "Projet associatif étudiant", desc: "Accompagnement d'un projet associatif (jardin partagé, plante du mois, semaine art-science) avec une médiatrice extérieure pour structurer." },
        { name: "École d'art, de design et d'architecture", desc: "Module ethnobotanique pour public futur·e architecte ou designer, autour des matériaux végétaux, du paysage et des récits coloniaux du végétal." },
      ],
      audiences: [
        "Services culturels et missions DD&RS universitaires",
        "BDE, BDD et associations étudiantes",
        "Services de santé universitaire et CROUS",
        "Écoles d'ingénieur·es, de commerce, d'art et de design",
        "Doctorant·es et enseignant·es en sciences humaines",
        "Vie étudiante des grandes écoles franciliennes",
      ],
      references: "Vanessa Charlery, médiatrice ethnobotanique, est diplômée de l'EHESS. Cette ancrage académique permet de construire des interventions qui dialoguent avec les enseignements universitaires plutôt que de les survoler.",
      related: [
        { to: "/etablissements-scolaires", label: "Établissements scolaires" },
        { to: "/atelier-ethnobotanique-entreprise", label: "Atelier ethnobotanique" },
        { to: "/foyer-jeunes-paris", label: "Foyer jeunes" },
      ],
    }}
  />
);

export default AnimationNatureUniversiteBDE;
