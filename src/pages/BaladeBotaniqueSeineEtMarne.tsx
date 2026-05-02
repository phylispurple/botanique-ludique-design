import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueSeineEtMarne = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-seine-et-marne",
    dept: "Seine-et-Marne", deptCode: "77", region: "FR-77",
    title: "Balade botanique en Seine-et-Marne",
    metaTitle: "Balade botanique en Seine-et-Marne, Fontainebleau et Brie",
    metaDesc: "Balade botanique en Seine-et-Marne. Lecture ethnobotanique de Fontainebleau, du Gâtinais et des villes du 77.",
    intro: "De la forêt de Fontainebleau aux paysages de la Brie, la Seine-et-Marne offre un terrain exceptionnel pour relire le végétal sous l'angle anthropologique et historique.",
    context: "Le 77 conjugue grandes forêts, patrimoine royal et ruralité préservée. Un terrain rêvé pour des balades de plus longue durée et des cycles approfondis.",
    spots: [
      { name: "Forêt de Fontainebleau", desc: "Une lecture historique et anthropologique de l'une des plus prestigieuses forêts françaises, terrain des premiers naturalistes du 19e siècle." },
      { name: "Vaux-le-Vicomte et grands jardins", desc: "Le jardin classique français comme texte politique, à relire à l'aune de l'ethnobotanique." },
      { name: "Pays du Gâtinais et plantes médicinales", desc: "Une balade rurale autour des savoirs paysans et des plantes médicinales encore présentes." },
      { name: "Villes nouvelles et Marne-la-Vallée", desc: "Le végétal contemporain de la ville nouvelle, entre projet urbain et nature reconquise." },
    ],
    audiences: ["Mairies et services culturels du 77", "Parcs naturels régionaux", "Musées et châteaux", "Médiathèques et écoles", "Associations patrimoniales", "Office national des forêts"],
    related: [
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/balade-botanique-jardin-patrimonial", label: "Jardin patrimonial" },
    ],
  }} />
);
export default BaladeBotaniqueSeineEtMarne;
