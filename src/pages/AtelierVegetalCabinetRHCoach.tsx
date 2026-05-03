import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const AtelierVegetalCabinetRHCoach = () => (
  <BaladeGeoTemplate
    data={{
      slug: "atelier-vegetal-cabinet-rh-coach",
      dept: "Cabinets RH, coachs et consultant·es",
      deptCode: "Partenariat",
      region: "FR-IDF",
      title: "Atelier végétal en partenariat avec cabinets RH et coachs",
      metaTitle: "Atelier végétal partenariat cabinet RH, coach, consultant",
      metaDesc: "Partenariat avec cabinets RH, coachs et consultant·es pour intégrer un atelier ethnobotanique à vos prestations entreprise. Co-animation, marque blanche.",
      keywords: "partenariat cabinet RH atelier, coach team building végétal, consultant QVT nature, marque blanche atelier végétal, co-animation séminaire, sous-traitance bien-être",
      intro: "Vos client·es entreprise cherchent du concret, du distinctif et du sens. Plutôt que de monter votre propre atelier végétal, intégrez le nôtre à votre catalogue, en co-animation ou en marque blanche.",
      context: "Pour cabinets RH, coachs en organisation, consultant·es QVT, agences événementielles B2B et formateur·ices indépendant·es, nous proposons un partenariat structuré. Vous restez face à votre client, nous portons l'expertise végétale.",
      spots: [
        { name: "Module dans un séminaire RH", desc: "Atelier de 2h intégré à votre séminaire client, en complément de vos sessions de coaching ou de formation. Vous orchestrez, nous animons." },
        { name: "Co-animation coach et médiatrice", desc: "Format hybride où votre intention de coach (cohésion, ancrage, transition) se croise avec la médiation ethnobotanique. Construction sur mesure." },
        { name: "Marque blanche pour cabinet", desc: "Atelier proposé sous votre marque, avec brief commun et restitution coordonnée. Adapté aux cabinets souhaitant enrichir un catalogue sans recruter." },
        { name: "Apport d'affaires structuré", desc: "Vous nous présentez un client, nous vous reversons une commission sur prestation conclue. Convention simple, transparence sur les leads." },
        { name: "Module de formation continue", desc: "Pour organismes de formation, intégration d'un module ethnobotanique dans un parcours QVT, leadership ou transition écologique." },
        { name: "Outil pour bilan de compétences", desc: "Atelier ponctuel utilisé en outil dans un bilan de compétences ou un coaching de transition professionnelle. Format individuel ou très petit groupe." },
      ],
      audiences: [
        "Cabinets RH et conseil en organisation",
        "Coachs professionnel·les et coachs d'équipe",
        "Consultant·es QVT, RSE et transition écologique",
        "Agences événementielles B2B et incentive",
        "Organismes de formation et OF certifiés Qualiopi",
        "Formateur·ices indépendant·es en bien-être au travail",
      ],
      references: "Le partenariat permet de mutualiser les coûts d'acquisition. Plutôt que de prospecter chacun·e dans notre coin, nous structurons une offre commune cohérente, en gardant chacun·e son cœur de métier.",
      related: [
        { to: "/atelier-ethnobotanique-entreprise", label: "Atelier ethnobotanique" },
        { to: "/atelier-bien-etre-nature-entreprise", label: "Bien-être entreprise" },
        { to: "/team-building-nature-entreprise", label: "Team building" },
      ],
    }}
  />
);

export default AtelierVegetalCabinetRHCoach;
