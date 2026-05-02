import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueValDeMarne = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-val-de-marne",
    dept: "Val-de-Marne", deptCode: "94", region: "FR-94",
    title: "Balade botanique dans le Val-de-Marne",
    metaTitle: "Balade botanique dans le Val-de-Marne, parcs et bords de Marne",
    metaDesc: "Balade botanique dans le Val-de-Marne le long de la Marne et dans les parcs : flore urbaine, plantes spontanées et lectures historiques du paysage francilien.",
    intro: "Des bords de Marne aux roseraies de L'Haÿ-les-Roses, le Val-de-Marne offre une diversité botanique propice à des balades sensibles et patrimoniales.",
    context: "Le 94 abrite des jardins remarquables, un patrimoine impressionniste et un tissu municipal dynamique. Un département idéal pour des médiations grand public.",
    spots: [
      { name: "Roseraie du Val-de-Marne à L'Haÿ-les-Roses", desc: "Une lecture historique et culturelle de l'une des plus belles roseraies du monde, créée à la fin du 19e siècle." },
      { name: "Bords de Marne et guinguettes", desc: "Une balade qui croise patrimoine populaire, histoire des loisirs ouvriers et lecture de la ripisylve." },
      { name: "Parc de Sceaux et environs", desc: "Le végétal classique français revisité par une lecture anthropologique et politique." },
      { name: "Vincennes et bois", desc: "Du bois de Vincennes au jardin d'agronomie tropicale, mémoire vivante du jardin colonial." },
    ],
    audiences: ["Mairies et services culturels du 94", "Conseil départemental", "Médiathèques et bibliothèques", "Musées et maisons d'écrivain·e·s", "Associations patrimoniales", "Établissements scolaires"],
    related: [
      { to: "/balades-botaniques", label: "Tous les formats" },
      { to: "/balade-botanique-jardin-patrimonial", label: "Jardin patrimonial" },
    ],
  }} />
);
export default BaladeBotaniqueValDeMarne;
