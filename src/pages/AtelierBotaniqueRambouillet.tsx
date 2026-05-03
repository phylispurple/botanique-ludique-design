import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const AtelierBotaniqueRambouillet = () => (
  <BaladeGeoTemplate
    data={{
      slug: "atelier-botanique-rambouillet",
      dept: "Rambouillet et sud-Yvelines",
      deptCode: "78",
      region: "FR-IDF",
      title: "Atelier botanique à Rambouillet et sud-Yvelines",
      metaTitle: "Atelier botanique Rambouillet, sud-Yvelines (78)",
      metaDesc:
        "Atelier botanique à Rambouillet et alentours, terrarium, kokedama, teinture végétale et balade ethnobotanique en sud-Yvelines (78).",
      keywords: "atelier botanique rambouillet, atelier nature sud-yvelines, terrarium rambouillet, kokedama rambouillet, balade ethnobotanique 78 sud, animation végétale rambouillet",
      intro:
        "À Rambouillet et dans le sud des Yvelines, la forêt domaniale, les jardins du château et la bergerie nationale forment un terrain rare pour comprendre nos rapports au végétal. Nos ateliers s'y posent avec naturel.",
      context:
        "Pour particuliers, mairies, médiathèques, écoles, EHPAD ou entreprises du sud-78, nous animons des ateliers botaniques (terrarium, kokedama, teinture végétale, couronne) et des balades ethnobotaniques. Format 1h30 à 2h30, groupes de 6 à 25 personnes, intervention sur site.",
      spots: [
        {
          name: "Centre-ville de Rambouillet",
          desc: "Ateliers en salle dans une médiathèque, une école, une mairie ou chez vous. Le centre historique offre aussi un beau parcours pour une balade ethnobotanique courte.",
        },
        {
          name: "Forêt domaniale de Rambouillet",
          desc: "Balade botanique guidée en lisière, lecture des essences forestières, des usages traditionnels du bois et de la cueillette régulée.",
        },
        {
          name: "Saint-Arnoult-en-Yvelines, Le Perray, Cernay-la-Ville",
          desc: "Communes voisines régulièrement desservies. Ateliers chez l'habitant·e, en salle communale ou en jardin.",
        },
        {
          name: "Gambais, Houdan, Montfort-l'Amaury",
          desc: "Ouest-Yvelines rural. Format particulièrement adapté aux EHPAD, foyers ruraux et petites mairies cherchant une intervention culturelle ancrée.",
        },
      ],
      audiences: [
        "Particuliers et anniversaires adultes du sud-Yvelines",
        "Mairies, CCAS et services culturels",
        "Médiathèques et bibliothèques municipales",
        "Écoles, collèges et accueils de loisirs",
        "EHPAD et résidences seniors",
        "Entreprises et CSE du Mantois et du sud-78",
      ],
      references:
        "Le sud-Yvelines reste une zone moins saturée d'offres culturelles que le nord du département. Notre format ethnobotanique y trouve un public attentif, en demande de propositions denses et pas standardisées.",
      related: [
        { to: "/ateliers-botaniques-yvelines", label: "Ateliers Yvelines (78)" },
        { to: "/team-building-vegetal-rambouillet", label: "Team building Rambouillet" },
        { to: "/balade-botanique-yvelines", label: "Balade botanique 78" },
      ],
    }}
  />
);

export default AtelierBotaniqueRambouillet;
