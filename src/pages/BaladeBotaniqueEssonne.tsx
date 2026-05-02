import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueEssonne = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-essonne",
    dept: "Essonne", deptCode: "91", region: "FR-91",
    title: "Balade botanique en Essonne",
    metaTitle: "Balade botanique en Essonne, vallée de Chevreuse et plateaux",
    metaDesc: "Balade botanique en Essonne. Médiation ethnobotanique dans la vallée de Chevreuse, à Évry et dans les communes du 91.",
    intro: "Entre plateaux agricoles, vallées préservées et villes nouvelles, l'Essonne offre une mosaïque de paysages pour relire le végétal sous l'angle culturel et historique.",
    context: "Le 91 combine ruralité, patrimoine scientifique et urbanisme contemporain. Un terrain riche pour proposer des balades adaptées à des publics variés.",
    spots: [
      { name: "Vallée de Chevreuse et PNR", desc: "Une lecture rurale et écologique du bocage essonnien, à destination des publics scolaires et associatifs." },
      { name: "Évry-Courcouronnes et villes nouvelles", desc: "Le végétal de la ville nouvelle comme lecture du projet urbain et social des années 1970." },
      { name: "Étampes et patrimoine", desc: "Une déambulation dans le centre historique, en lien avec les services culturels municipaux." },
      { name: "Plateaux agricoles et plantes messicoles", desc: "Une balade rurale à la rencontre des plantes des moissons, témoins menacés de l'agriculture traditionnelle." },
    ],
    audiences: ["Mairies et services culturels du 91", "Parc naturel régional", "Médiathèques et établissements scolaires", "Associations patrimoniales et environnementales", "Universités et grandes écoles"],
    related: [
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/balade-plantes-sauvages-comestibles-paris", label: "Plantes sauvages" },
    ],
  }} />
);
export default BaladeBotaniqueEssonne;
