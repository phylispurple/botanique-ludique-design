import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueHautsDeSeine = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-hauts-de-seine",
    dept: "Hauts-de-Seine",
    deptCode: "92",
    region: "FR-92",
    title: "Balade botanique dans les Hauts-de-Seine",
    metaTitle: "Balade botanique dans les Hauts-de-Seine, parcs et villes",
    metaDesc: "Balade botanique guidée dans les Hauts-de-Seine. Lecture ethnobotanique des parcs, jardins et villes du 92 pour collectivités et institutions.",
    intro: "Boulogne, Sèvres, Nanterre, Saint-Cloud : un département dense en parcs historiques et en lieux de culture, propice à des balades ethnobotaniques sur mesure.",
    context: "Les Hauts-de-Seine combinent un patrimoine vert exceptionnel et une vie culturelle riche. Les parcs départementaux, jardins partagés et musées en font un territoire idéal pour une médiation autour du végétal urbain.",
    spots: [
      { name: "Parc de Saint-Cloud et serres patrimoniales", desc: "Une lecture historique des grands jardins de l'Ouest parisien, des perspectives Le Nôtre aux collections botaniques contemporaines." },
      { name: "Boulogne-Billancourt et bord de Seine", desc: "Déambulation urbaine commentée à travers la végétation des friches industrielles reconverties et des nouveaux espaces publics." },
      { name: "Nanterre et parcs départementaux", desc: "Lecture sociale et écologique des grands parcs du département, entre nature en ville et histoire ouvrière." },
      { name: "Sèvres et coteaux", desc: "Balade sensible dans les coteaux ouest, entre patrimoine pavillonnaire, jardins privés et biodiversité ordinaire." },
    ],
    audiences: [
      "Mairies et services culturels du 92",
      "Conseils départementaux et services patrimoine",
      "Musées et centres d'art",
      "Médiathèques et bibliothèques",
      "Comités d'entreprise et sièges sociaux",
      "Associations et conseils de quartier",
    ],
    related: [
      { to: "/balade-botanique-urbaine-paris", label: "Balade urbaine" },
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/animation-botanique-hauts-de-seine", label: "Animations 92" },
    ],
  }} />
);

export default BaladeBotaniqueHautsDeSeine;
