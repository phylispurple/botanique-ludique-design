import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const AnimationVegetaleHotelEvenementiel = () => (
  <BaladeGeoTemplate
    data={{
      slug: "animation-vegetale-hotel-evenementiel",
      dept: "Hôtels et lieux événementiels",
      deptCode: "Premium",
      region: "FR-IDF",
      title: "Animation végétale pour hôtels et lieux événementiels",
      metaTitle: "Animation végétale hôtel, lieu événementiel premium IDF",
      metaDesc: "Animations ethnobotaniques pour hôtels, lieux événementiels et séminaires premium en Île-de-France. Atelier client, soirée, cadeau corporate.",
      keywords: "animation hôtel végétal, atelier lieu événementiel, séminaire hôtel premium, animation client luxe, cadeau corporate végétal, lobby experience nature",
      intro: "Dans un hôtel ou un lieu événementiel, l'animation végétale fait passer une expérience client de l'attendu au mémorable. Nos formats sont pensés pour la qualité, la discrétion et l'élégance attendues.",
      context: "Pour hôtels indépendants, groupes hôteliers, lieux événementiels, châteaux et domaines en Île-de-France, nous proposons des animations végétales pour vos clients en séminaire, vos résident·es premium ou vos lancements de produit.",
      spots: [
        { name: "Séminaire client en hôtel", desc: "Atelier ethnobotanique intégré à un séminaire d'entreprise hébergé chez vous. Format premium 2h, kokedama, terrarium ou teinture végétale, livré clé en main." },
        { name: "Animation lobby ou rooftop", desc: "Atelier ouvert pour vos clients en séjour, programmé une fois par semaine ou en saison. Différenciation forte par rapport aux animations standards." },
        { name: "Lancement produit et soirée privée", desc: "Animation ethnobotanique adaptée à votre univers de marque, pour un lancement, un dîner privé ou une soirée presse." },
        { name: "Mariage et événement personnel premium", desc: "Atelier kokedama ou teinture végétale pour les invité·es d'un mariage, séminaire familial ou anniversaire. Cadre château, domaine ou orangerie." },
        { name: "Cadeau corporate végétal", desc: "Création d'une série de cadeaux végétaux personnalisés à vos couleurs, livraison ou remise lors d'un événement professionnel." },
        { name: "Cycle saisonnier dans un domaine", desc: "Programmation annuelle pour un domaine ou un château, une animation par saison, ancrant le lieu dans une identité végétale forte." },
      ],
      audiences: [
        "Directions d'hôtels indépendants et groupes hôteliers",
        "Concierges Clefs d'Or et services expérience client",
        "Châteaux, domaines et orangeries événementielles",
        "Agences événementielles et wedding planners premium",
        "Marques de luxe et maisons en lancement",
        "Lieux culturels privatisables (musées, fondations)",
      ],
      references: "L'expérience végétale est devenue un signe de positionnement premium pour les lieux qui veulent se distinguer du standard hôtelier. Notre angle ethnobotanique apporte un récit qui dépasse l'esthétique seule.",
      related: [
        { to: "/atelier-botanique-evenement", label: "Atelier événementiel" },
        { to: "/seminaire-entreprise-paris", label: "Séminaire entreprise" },
        { to: "/atelier-ethnobotanique-entreprise", label: "Ethnobotanique entreprise" },
      ],
    }}
  />
);

export default AnimationVegetaleHotelEvenementiel;
