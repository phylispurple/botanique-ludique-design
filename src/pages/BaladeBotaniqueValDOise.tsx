import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueValDOise = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-val-d-oise",
    dept: "Val-d'Oise",
    deptCode: "95",
    region: "FR-95",
    title: "Balade botanique dans le Val-d'Oise",
    metaTitle: "Balade botanique dans le Val-d'Oise pour villes et écoles",
    metaDesc: "Balade botanique dans le Val-d'Oise. Médiation ethnobotanique pour mairies, musées et écoles du 95, du Vexin à Cergy.",
    intro: "Du Vexin français aux villes nouvelles, le Val-d'Oise offre une mosaïque de paysages et une vie culturelle dynamique pour faire entrer la botanique dans la programmation.",
    context: "Le 95 conjugue ruralité préservée, patrimoine impressionniste et urbanisme contemporain. Une diversité qui permet des formats de balade très différents selon les publics et les territoires.",
    spots: [
      { name: "PNR du Vexin français", desc: "Lecture rurale et anthropologique du paysage, entre agriculture, plantes messicoles et mémoire des savoirs paysans." },
      { name: "Cergy-Pontoise et ses parcs", desc: "Une déambulation urbaine dans la ville nouvelle, entre nature reconquise, art dans l'espace public et lecture du végétal contemporain." },
      { name: "Auvers-sur-Oise et patrimoine impressionniste", desc: "Une balade qui croise histoire de l'art et ethnobotanique, en écho aux paysages peints par les impressionnistes." },
      { name: "Vallée de l'Oise et bords de fleuve", desc: "Lecture écologique et sociale des ripisylves, des plantes pionnières et des paysages industriels reconquis par le vivant." },
    ],
    audiences: [
      "Mairies et services culturels du 95",
      "Parcs naturels et conservatoires",
      "Musées et maisons d'écrivain·e·s",
      "Médiathèques et établissements scolaires",
      "Associations patrimoniales et environnementales",
      "Universités populaires et MJC",
    ],
    related: [
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/balade-botanique-jardin-patrimonial", label: "Jardin patrimonial" },
      { to: "/animation-botanique-val-d-oise", label: "Animations 95" },
    ],
  }} />
);

export default BaladeBotaniqueValDOise;
