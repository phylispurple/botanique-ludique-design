import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueSeineSaintDenis = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-seine-saint-denis",
    dept: "Seine-Saint-Denis", deptCode: "93", region: "FR-93",
    title: "Balade botanique en Seine-Saint-Denis",
    metaTitle: "Balade botanique en Seine-Saint-Denis pour villes et écoles",
    metaDesc: "Balade botanique en Seine-Saint-Denis. Médiation ethnobotanique pour mairies, médiathèques et écoles du 93.",
    intro: "Du parc de la Courneuve aux friches reconquises, la Seine-Saint-Denis offre un terrain singulier pour relire le végétal urbain à hauteur d'habitant·e·s.",
    context: "Le 93 conjugue grands parcs départementaux, friches industrielles végétalisées et tissu associatif riche. Un département idéal pour des balades qui parlent à tous les publics.",
    spots: [
      { name: "Parc de la Courneuve et Île-Saint-Denis", desc: "Une lecture sociale et écologique des grands parcs du département, entre nature reconquise et histoire ouvrière." },
      { name: "Saint-Denis et basilique", desc: "Déambulation urbaine commentée du centre historique aux espaces publics récents, en lien avec les services culturels." },
      { name: "Friches industrielles reconquises", desc: "Le végétal pionnier des friches comme témoin du temps long et de la résilience écologique." },
      { name: "Pantin et canal de l'Ourcq", desc: "Le linéaire du canal et ses berges végétalisées comme corridor biologique et culturel." },
    ],
    audiences: ["Mairies et services culturels du 93", "Médiathèques et bibliothèques", "Écoles et collèges", "Centres sociaux et MJC", "Associations d'habitant·e·s", "Conseil départemental et services nature"],
    related: [
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/balade-botanique-urbaine-paris", label: "Balade urbaine" },
    ],
  }} />
);
export default BaladeBotaniqueSeineSaintDenis;
