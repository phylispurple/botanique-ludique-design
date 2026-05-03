import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const TeamBuildingVegetalRambouillet = () => (
  <BaladeGeoTemplate
    data={{
      slug: "team-building-vegetal-rambouillet",
      dept: "Rambouillet et sud-Yvelines",
      deptCode: "78",
      region: "FR-IDF",
      title: "Team building végétal à Rambouillet et sud-Yvelines",
      metaTitle: "Team building végétal Rambouillet, atelier nature 78",
      metaDesc:
        "Team building végétal et atelier nature à Rambouillet et sud-Yvelines (78). Format ethnobotanique pour entreprises, séminaires et CSE locaux.",
      intro:
        "À Rambouillet et dans le sud des Yvelines, vos équipes peuvent enfin sortir des team buildings urbains et standardisés. Cadre forestier, patrimoine vivant, format ethnobotanique sur mesure.",
      context:
        "Pour les entreprises et CSE installé·es à Rambouillet, Coignières, Maurepas, Saint-Quentin-en-Yvelines ou en télétravail dans le 78, nous proposons des formats team building végétaux dans votre site, dans un domaine partenaire ou en pleine forêt domaniale.",
      spots: [
        {
          name: "Atelier dans vos locaux",
          desc: "Intervention sur site, salle de réunion ou patio. Kokedama, terrarium, teinture végétale, couronne. Format 2h pour 8 à 25 personnes.",
        },
        {
          name: "Séminaire en domaine privé",
          desc: "Module 2h dans une journée séminaire, à articuler avec vos autres temps de travail. Excellent fil rouge pour ouvrir ou clore un séminaire au vert.",
        },
        {
          name: "Balade ethnobotanique en forêt",
          desc: "Sortie guidée en forêt de Rambouillet ou autour de l'étang de la Tour. Lecture des essences, des usages, du paysage. Format respiration intelligente.",
        },
        {
          name: "Cycle QVCT sur l'année",
          desc: "Plusieurs interventions étalées sur l'année, une par saison. Idéal pour ancrer une démarche bien-être et RSE locale dans la durée.",
        },
      ],
      audiences: [
        "Entreprises et PME du sud-Yvelines",
        "CSE et comités sociaux locaux",
        "Directions RSE et QVCT",
        "Équipes RH pour journées d'intégration",
        "Coworkings et collectifs professionnels",
        "Associations professionnelles du 78",
      ],
      related: [
        { to: "/atelier-botanique-rambouillet", label: "Atelier botanique Rambouillet" },
        { to: "/atelier-ethnobotanique-entreprise", label: "Atelier ethnobotanique entreprise" },
        { to: "/team-building-nature-entreprise", label: "Team building nature IDF" },
      ],
    }}
  />
);

export default TeamBuildingVegetalRambouillet;
