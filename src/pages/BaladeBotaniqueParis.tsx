import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const BaladeBotaniqueParis = () => (
  <BaladeGeoTemplate data={{
    slug: "balade-botanique-paris",
    dept: "Paris",
    deptCode: "75",
    region: "FR-75",
    title: "Balade botanique à Paris",
    metaTitle: "Balade botanique à Paris pour institutions et collectivités",
    metaDesc: "Balade botanique guidée à Paris. Lecture ethnobotanique des jardins, parcs et rues parisiennes pour mairies, musées et médiathèques.",
    intro: "Une lecture vivante du végétal parisien, des serres patrimoniales aux herbes des trottoirs. Une balade qui fait du Paris végétal une archive en plein air.",
    context: "Paris compte plus de 500 parcs, squares et jardins, dont des collections vivantes héritées des grandes expéditions naturalistes. Cette diversité offre un terrain idéal pour une médiation ethnobotanique exigeante et accessible.",
    spots: [
      { name: "Jardin des Plantes et Muséum", desc: "Le cœur historique de la botanique française, entre serres tropicales, école de botanique et galeries du Muséum. Une lecture des collections comme témoignage de l'histoire des sciences." },
      { name: "Parc Montsouris et 14e arrondissement", desc: "Promenade urbaine commentée dans le sud parisien, en lien avec la programmation culturelle de quartier menée pour la Mairie du 14e." },
      { name: "Squares haussmanniens", desc: "Décrypter les choix d'aménagement du Second Empire, les essences importées et la pensée hygiéniste qui a façonné la ville." },
      { name: "Jardin d'agronomie tropicale de Vincennes", desc: "Un site discret du bois de Vincennes, mémoire vivante du jardin colonial et de ses ambivalences. Une lecture politique du paysage." },
    ],
    references: "Référence : balade botanique urbaine conçue et menée pour la Mairie du 14e arrondissement de Paris.",
    audiences: [
      "Mairies d'arrondissement et services culturels",
      "Musées et institutions patrimoniales",
      "Médiathèques et bibliothèques de quartier",
      "Universités populaires et associations",
      "Comités d'entreprise et CSE parisiens",
      "Associations d'habitant·e·s et conseils de quartier",
    ],
    related: [
      { to: "/balade-botanique-urbaine-paris", label: "Balade urbaine" },
      { to: "/balade-botanique-musee", label: "Balade en musée" },
      { to: "/balades-botaniques", label: "Tous les formats" },
    ],
  }} />
);

export default BaladeBotaniqueParis;
