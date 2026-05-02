import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueEntreprise = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-entreprise-cse",
    dept: "Île-de-France",
    deptCode: "IDF",
    title: "Balade botanique pour entreprises et CSE",
    metaTitle: "Balade botanique entreprise et CSE en Île-de-France",
    metaDesc: "Balade botanique sur mesure pour entreprises, CSE et comités sociaux. Format team building nature, QVCT et RSE en Île-de-France.",
    intro: "Une parenthèse vivante pour vos équipes : sortir du bureau, réapprendre à voir la ville et reconnecter au vivant à travers une balade ethnobotanique guidée.",
    context: "Adaptée aux formats QVCT, semaines RSE, séminaires et journées d'équipe, la balade botanique offre un temps de respiration intelligent qui sort des activités team building classiques.",
    spots: [
      { name: "Format autour de votre siège", desc: "Une balade pensée à partir des rues, parcs et jardins qui entourent vos locaux. Les équipes redécouvrent leur quartier sous un angle inattendu." },
      { name: "Format dans un parc francilien", desc: "Sortie complète dans un grand parc d'Île-de-France pour une demi-journée d'équipe au vert, avec lecture ethnobotanique guidée." },
      { name: "Format intégré à un séminaire", desc: "Module de 2h dans une journée plus large : excellent fil rouge pour ouvrir ou clore un séminaire, en complément d'autres ateliers." },
      { name: "Format cycle annuel", desc: "Plusieurs balades étalées sur l'année, chaque saison apportant sa propre lecture du végétal urbain. Idéal pour un programme QVCT au long cours." },
    ],
    audiences: [
      "Comités sociaux et économiques (CSE)",
      "Directions RSE et développement durable",
      "Responsables QVCT et bien-être au travail",
      "Équipes RH pour séminaires d'intégration",
      "Équipes de direction en journée stratégique",
      "Associations professionnelles et clubs métier",
    ],
    related: [
      { to: "/team-building-nature-entreprise", label: "Team building nature" },
      { to: "/atelier-bien-etre-nature-entreprise", label: "Bien-être nature" },
      { to: "/balades-botaniques", label: "Tous les formats" },
    ],
  }} />
);

export default BaladeBotaniqueEntreprise;
