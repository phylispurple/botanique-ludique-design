import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueYvelines = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-yvelines",
    dept: "Yvelines",
    deptCode: "78",
    region: "FR-78",
    title: "Balade botanique dans les Yvelines",
    metaTitle: "Balade botanique dans les Yvelines pour musées et villes",
    metaDesc: "Balade botanique guidée dans les Yvelines. Médiation ethnobotanique pour musées, jardins patrimoniaux et collectivités du 78.",
    intro: "Des grands parcs royaux aux paysages ruraux, les Yvelines offrent un terrain rare pour relire le végétal à travers l'histoire sociale, scientifique et culturelle.",
    context: "Versailles, Saint-Quentin-en-Yvelines, vallée de Chevreuse : le département concentre des sites patrimoniaux, des écomusées et des villes nouvelles qui se prêtent à des formats de médiation très différents.",
    spots: [
      { name: "Saint-Quentin-en-Yvelines et son musée", desc: "Une balade conçue avec le Musée de la Ville pour relire les paysages de la ville nouvelle, entre héritage agricole, urbanisme et nature reconquise." },
      { name: "Domaines royaux et jardins à la française", desc: "Versailles, Marly, Saint-Cloud : décrypter le végétal politique, les essences exotiques importées et la lecture de pouvoir des jardins royaux." },
      { name: "Vallée de Chevreuse et PNR", desc: "Une lecture rurale et écologique du bocage yvelinois, à destination des publics scolaires et associatifs." },
      { name: "Centres-villes patrimoniaux", desc: "Saint-Germain-en-Laye, Chatou, Le Vésinet : déambulations en cœur de ville pour mairies, médiathèques et conseils de quartier." },
    ],
    references: "Référence : balade botanique conçue pour le Musée de la Ville de Saint-Quentin-en-Yvelines.",
    audiences: [
      "Musées de ville et écomusées",
      "Mairies et services culturels du 78",
      "Parcs naturels régionaux",
      "Médiathèques et bibliothèques",
      "Établissements scolaires et lycées",
      "Associations patrimoniales et environnementales",
    ],
    related: [
      { to: "/balade-botanique-musee", label: "Balade en musée" },
      { to: "/balade-botanique-jardin-patrimonial", label: "Jardin patrimonial" },
      { to: "/animation-botanique-yvelines", label: "Animations botaniques 78" },
    ],
  }} />
);

export default BaladeBotaniqueYvelines;
