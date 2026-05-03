import BaladeGeoTemplate from "@/components/BaladeGeoTemplate";

const HortitherapieHopitalClinique = () => (
  <BaladeGeoTemplate
    data={{
      slug: "hortitherapie-hopital-clinique",
      dept: "Hôpitaux et cliniques",
      deptCode: "Santé",
      region: "FR-IDF",
      title: "Hortithérapie en hôpital, clinique et établissement de santé",
      metaTitle: "Hortithérapie hôpital, jardin thérapeutique clinique IDF",
      metaDesc: "Interventions hortithérapie en hôpital, clinique et EHPAD en Île-de-France. Ateliers végétaux pour patient·es, soignant·es, jardin thérapeutique.",
      keywords: "hortithérapie hôpital, jardin thérapeutique clinique, atelier végétal patient, médiation nature soignants, hortithérapie EHPAD, animation hôpital de jour",
      intro: "À l'hôpital, en clinique ou en HAD, la rencontre avec le végétal apaise, restaure la concentration et ouvre un espace de récit. Nos interventions sont pensées pour le rythme du soin et la diversité des publics hospitaliers.",
      context: "Pour services oncologie, gériatrie, psychiatrie, pédiatrie ou rééducation, nous intervenons en chambre, en salle commune ou autour d'un jardin thérapeutique existant. Format adaptable de 30 minutes à 2h, en séance unique ou en cycle, avec une médiatrice formée à l'anthropologie du vivant.",
      spots: [
        { name: "Hôpital de jour et services ambulatoires", desc: "Ateliers courts (30-45 min) entre deux soins. Manipulation simple (boutures, mini-terrarium, herbier sensoriel) pour rompre l'attente et créer du lien." },
        { name: "Service gériatrie et SSR", desc: "Stimulation sensorielle, mémoire végétale, plantes des jardins d'enfance. Format chaise et table adapté à la mobilité réduite." },
        { name: "Pédiatrie et adolescence", desc: "Approche narrative et sensorielle des plantes, kokedama, semis. Format ludique pour patient·es jeunes et fratries." },
        { name: "Espaces soignant·es et bien-être au travail", desc: "Atelier QVT pour les équipes hospitalières, dans le cadre de Semaines de la QVCT, formations ou journées soignant·es. Décompression et reconnexion." },
        { name: "Jardin thérapeutique existant", desc: "Médiation autour d'un jardin déjà en place, programmation saisonnière, formation des équipes à l'animation autonome." },
        { name: "Création d'un volet médiation pour un nouveau jardin", desc: "Accompagnement amont des projets de jardin thérapeutique, contribution au cahier des charges médiation, formation des bénévoles et soignant·es." },
      ],
      audiences: [
        "Directions d'hôpitaux publics et cliniques privées",
        "Services QVT et missions handicap hospitalières",
        "Équipes soignantes en oncologie, gériatrie, psychiatrie",
        "Cadres de santé et coordinateur·ices de soins de support",
        "Associations de patient·es et fondations hospitalières",
        "Architectes et paysagistes de projets de jardin thérapeutique",
      ],
      references: "L'hortithérapie est désormais inscrite dans les recommandations HAS sur les soins de support en oncologie et dans plusieurs plans régionaux santé environnement. Notre angle ethnobotanique apporte un supplément narratif que les ateliers purement horticoles ne couvrent pas.",
      related: [
        { to: "/animation-nature-ehpad", label: "EHPAD et résidences seniors" },
        { to: "/atelier-bien-etre-nature-entreprise", label: "Bien-être au travail" },
        { to: "/pro", label: "Tous les formats pro" },
      ],
    }}
  />
);

export default HortitherapieHopitalClinique;
