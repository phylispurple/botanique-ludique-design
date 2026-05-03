import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const AnimationNatureBailleursSociaux = () => (
  <BaladeGeoTemplate
    data={{
      slug: "animation-nature-bailleurs-sociaux",
      dept: "Bailleurs sociaux et ESH",
      deptCode: "Habitat",
      region: "FR-IDF",
      title: "Animation nature pour bailleurs sociaux et ESH",
      metaTitle: "Animation nature bailleurs sociaux, ESH, pied d'immeuble",
      metaDesc: "Animations végétales pour bailleurs sociaux et ESH en IDF. Pied d'immeuble, jardin partagé, cohésion résidents, programmes ANRU et politique de la ville.",
      keywords: "animation bailleur social, atelier pied d'immeuble, jardin partagé résidents, ANRU médiation, politique de la ville végétal, ESH cohésion habitant",
      intro: "Au pied des immeubles, la nature est un puissant vecteur de lien. Nos interventions s'inscrivent dans vos programmes de cohésion résidentielle, ANRU ou politique de la ville, avec un format adapté à la diversité des publics.",
      context: "Pour bailleurs sociaux, ESH, OPH, foncières solidaires et acteurs de la politique de la ville, nous proposons des animations végétales en pied d'immeuble, sur des jardins partagés naissants ou existants, et en accompagnement de relogement ou de réhabilitation.",
      spots: [
        { name: "Animation pied d'immeuble ouverte", desc: "Atelier gratuit pour les résident·es, format 2h, sans inscription. Bouturage, mini-terrarium, identification des plantes du quartier. Crée du lien et désamorce les tensions." },
        { name: "Jardin partagé en démarrage", desc: "Accompagnement à la création d'un jardin partagé, animation des premières saisons, formation d'un noyau d'habitant·es autonomes." },
        { name: "Programme ANRU et concertation", desc: "Volet médiation végétale d'un projet ANRU, ateliers de concertation sur les choix d'aménagement, traduction de la parole habitante." },
        { name: "Évènement résidentiel saisonnier", desc: "Fête des voisins végétale, atelier d'automne, semaine du DD locale. Format léger, public mixte intergénérationnel." },
        { name: "Cycle ado et jeunesse de quartier", desc: "Partenariat avec services jeunesse municipaux ou MJC pour un cycle ethnobotanique destiné aux ados, dans une logique de raccrochage et d'ouverture culturelle." },
        { name: "Formation gardien·nes et agent·es", desc: "Demi-journée pour vos équipes terrain afin qu'iels puissent porter et entretenir une animation végétale légère au quotidien." },
      ],
      audiences: [
        "Bailleurs sociaux, ESH, OPH et SEM",
        "Foncières solidaires et bailleurs associatifs",
        "Services politique de la ville municipaux",
        "Centres sociaux et MJC en quartier prioritaire",
        "Maîtrises d'ouvrage de programmes ANRU",
        "Associations d'habitant·es et amicales de locataires",
      ],
      references: "Les budgets dédiés à l'animation résidentielle sont en hausse depuis les Assises du logement social et la stratégie nationale ANRU 2030. Un format ethnobotanique se distingue des prestations standardisées et marque mieux les commissions de pilotage.",
      related: [
        { to: "/animation-centre-social", label: "Centres sociaux" },
        { to: "/marches-publics", label: "Marchés publics" },
        { to: "/foyer-jeunes-paris", label: "Jeunesse" },
      ],
    }}
  />
);

export default AnimationNatureBailleursSociaux;
