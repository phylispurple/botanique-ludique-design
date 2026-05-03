import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const AtelierVegetalParentaliteNaissance = () => (
  <BaladeGeoTemplate
    data={{
      slug: "atelier-vegetal-parentalite-naissance",
      dept: "Maternités, PMI et parentalité",
      deptCode: "Naissance",
      region: "FR-IDF",
      title: "Atelier végétal autour de la parentalité et de la naissance",
      metaTitle: "Atelier végétal naissance, parentalité, PMI et maternité",
      metaDesc: "Ateliers ethnobotaniques autour de la parentalité, la naissance et la petite enfance en IDF. Maternités, PMI, lieux d'accueil parents enfants.",
      keywords: "atelier végétal naissance, kokedama parentalité, animation PMI, médiation maternité, plante symbole bébé, atelier parents enfants nature",
      intro: "Devenir parent réveille un rapport au temps, au vivant et à la transmission. Nos ateliers offrent un espace doux et symbolique pour accompagner ce passage, sans surinvestir, sans gadget.",
      context: "Pour maternités, PMI, lieux d'accueil enfants-parents, sages-femmes libérales en réseau et associations de soutien à la parentalité, nous proposons des ateliers courts mêlant manipulation végétale et récit ethnobotanique adapté.",
      spots: [
        { name: "Maternité, atelier post-natal", desc: "Atelier doux en suite de couche ou en HAD post-natale, manipulation simple (mini-bouture, herbier sensoriel) en 45 minutes. Pause hors médicalisation." },
        { name: "PMI et lieu d'accueil parents-enfants", desc: "Atelier pour duos parent-bébé ou parent-tout-petit. Plantes des comptines, herbier des saisons, kokedama symbolique." },
        { name: "Cycle préparation à la naissance", desc: "Module ethnobotanique dans un cycle plus large : plantes des cultures du monde autour de la naissance, plante-symbole de l'enfant à venir." },
        { name: "Cadeau de naissance institutionnel", desc: "Pour collectivités et entreprises proposant un geste à l'arrivée d'un enfant chez un·e collaborateur·ice. Atelier collectif et kokedama personnalisé." },
        { name: "Soutien à la parentalité", desc: "Partenariat avec des associations de soutien parentalité, monoparentalité ou périnatalité pour un atelier régulier en groupe restreint." },
        { name: "Formation professionnel·les petite enfance", desc: "Module pour auxiliaires de puériculture, EJE et sages-femmes souhaitant intégrer un volet végétal symbolique à leur pratique." },
      ],
      audiences: [
        "Maternités publiques et cliniques",
        "PMI et services départementaux protection maternelle",
        "Lieux d'accueil enfants-parents (LAEP)",
        "Sages-femmes libérales et réseaux de périnatalité",
        "Associations de soutien à la parentalité",
        "Comités d'entreprise pour cadeaux de naissance",
      ],
      references: "Très peu d'offres ethnobotaniques sont aujourd'hui pensées pour le moment de la naissance. C'est un territoire neuf, sensible, qui demande une médiatrice formée aux sciences sociales autant qu'au vivant.",
      related: [
        { to: "/baby-shower-vegetal-yvelines", label: "Baby shower végétal" },
        { to: "/atelier-anniversaire-enfant-paris", label: "Anniversaire enfant" },
        { to: "/idee-cadeau-amoureux-plantes", label: "Cadeau végétal" },
      ],
    }}
  />
);

export default AtelierVegetalParentaliteNaissance;
