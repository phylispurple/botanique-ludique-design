// Contenu éditorial unique par landing B2B. Sert à renforcer l'unicité
// (anti duplicate / thin content) et l'E-E-A-T : chaque page reçoit deux
// paragraphes contextuels rédigés à la main, ancrés sur la requête cible.

import { SEASONAL_LANDING_CONTEXT } from "./seasonalLandings";

export interface LandingContext {
  /** Titre de la section éditoriale. */
  heading: string;
  /** Paragraphes longs (200-300 mots cumulés minimum). */
  paragraphs: string[];
}

const _BASE_PRO_LANDING_CONTEXT: Record<string, LandingContext> = {
  "atelier-qvct-paris": {
    heading: "La QVCT à Paris, au-delà du fauteuil massant",
    paragraphs: [
      "Les sièges sociaux parisiens concentrent une densité de travail rare en Europe. Open spaces, réunions enchaînées, charge mentale numérique : les baromètres QVCT pointent depuis 2022 une hausse continue du sentiment d'usure, particulièrement chez les cadres intermédiaires. Les dispositifs classiques (corbeille de fruits, salle de sieste, conférence inspirante) plafonnent vite. Ce qui change la donne, c'est l'expérience sensorielle partagée : toucher de la mousse, sentir une plante aromatique, manipuler un fil de teinture végétale. Le cerveau bascule alors hors du mode analytique habituel et la parole se libère sans la mise en scène d'un team building forcé.",
      "Nos formats QVCT à Paris se déplacent dans vos locaux (Châtelet, La Défense, République, Bercy) ou dans des tiers-lieux partenaires si vous manquez d'espace. Nous adaptons la durée (de 1h à une demi-journée) au rythme de votre semaine QVCT ou de votre événement annuel. Chaque collaborateur repart avec un objet vivant qui prolonge l'effet de l'atelier sur plusieurs semaines : un kokedama posé sur le bureau, un terrarium d'équipe placé en salle de pause, un tote-bag teint à l'écorce de chêne. Cet ancrage matériel est ce qui fait la différence avec une animation oubliée le lendemain.",
    ],
  },
  "atelier-qvct-ile-de-france": {
    heading: "Couvrir toute l'Île-de-France sans diluer l'expérience",
    paragraphs: [
      "Implanter une démarche QVCT sur plusieurs sites franciliens pose une difficulté concrète : comment garantir la même qualité d'animation à Cergy, Massy, Roissy ou Saint-Quentin-en-Yvelines, sans payer trois prestataires différents ? Nous intervenons sur les huit départements d'Île-de-France avec une animatrice unique, formée à l'ethnobotanique, qui se déplace avec son matériel. Ce point compte : la cohérence du discours et du geste pédagogique fait que vos équipes, même réparties, partagent ensuite un vocabulaire commun autour de l'atelier vécu.",
      "Nous travaillons régulièrement avec des collectivités franciliennes (Bezons, Maurepas, MJC partenaires) et avec des sièges d'entreprise en grande couronne. Cette double expérience nous permet d'ajuster le format selon votre culture interne : plus académique pour un siège tertiaire, plus convivial pour un centre logistique ou un site industriel. Les ateliers peuvent être déclinés en série (un même format reproduit sur quatre sites) ou en parcours (un format différent par site, avec un fil rouge thématique sur l'année).",
    ],
  },
  "semaine-qvct-entreprise": {
    heading: "Construire une semaine QVCT qui laisse une trace",
    paragraphs: [
      "La Semaine de la QVCT, organisée chaque année en juin par l'ANACT, est devenue un rendez-vous incontournable des directions RH. Mais elle souffre d'un effet de catalogue : conférences enchaînées, ateliers découverte de quinze minutes, stands sponsorisés. Les retours collaborateurs sont souvent tièdes parce que rien n'est mémorisable. Notre proposition consiste à choisir un fil conducteur végétal sur les cinq jours, avec un atelier long en pivot (2h, vingt participants maximum) et des micro-formats satellites dans le hall ou la cafétéria.",
      "Ce séquencement crée un effet d'attente puis de prolongement : les collaborateurs qui ont vécu l'atelier long deviennent prescripteurs auprès de leurs collègues, et l'objet rapporté sur leur poste fait office de signal visuel pendant des mois. Nous fournissons en amont les supports de communication interne (visuels, texte d'annonce, courte vidéo de présentation) pour que votre équipe RH n'ait pas à les produire. La facturation se fait en une seule ligne, ce qui simplifie le bouclage budgétaire post-semaine.",
    ],
  },
  "animation-rse-entreprise": {
    heading: "Animer la RSE sans tomber dans le greenwashing",
    paragraphs: [
      "La pression CSRD a multiplié les besoins d'animations RSE concrètes, et avec elle la profusion d'offres opportunistes. Un atelier qui ne raconte rien de la matière utilisée, qui ne nomme pas les espèces végétales, qui ne contextualise pas l'origine des savoirs : c'est de la décoration, pas de la RSE. Notre démarche s'appuie sur l'anthropologie de la nature (EHESS) et sur des matériaux biosourcés sourcés en Île-de-France quand c'est possible (mousses régionales, fleurs séchées de producteurs franciliens, plantes tinctoriales de jardins partenaires).",
      "Concrètement, chaque atelier est accompagné d'un livret pédagogique remis à votre référent RSE : provenance des matériaux, espèces botaniques manipulées, savoirs traditionnels mobilisés, références scientifiques. Ce document peut être versé tel quel dans votre rapport annuel ou votre bilan de mission RSE, ce qui justifie l'investissement bien au-delà du moment vécu. Nous évitons les indicateurs flatteurs hors-sol (CO2 économisé, biodiversité préservée) qui se retournent souvent contre les entreprises qui les affichent.",
    ],
  },
  "team-building-nature-paris": {
    heading: "Pourquoi la nature change la dynamique d'équipe",
    paragraphs: [
      "Les biais cognitifs des team buildings classiques (escape game, cours de cuisine, sport collectif) sont connus : ils renforcent la hiérarchie informelle existante, parce que les profils dominants en réunion restent dominants en jeu. La manipulation végétale neutralise partiellement cet effet : personne n'a, sauf rare exception, l'habitude de coudre une feuille stabilisée ou de modeler une boule de mousse. La compétence se redistribue, et les collaborateurs habituellement silencieux trouvent un terrain où s'exprimer sans risque.",
      "À Paris, nous intervenons aussi bien dans des locaux d'entreprise (avec protection des sols) que dans des lieux extérieurs partenaires : jardins privés, rooftops végétalisés, espaces associatifs. Le choix du lieu fait partie de notre proposition : un team building en bureau coûte moins cher mais marque moins l'expérience, un team building en extérieur a un effet de rupture plus fort. Pour des équipes en transformation (post-fusion, post-réorganisation), nous recommandons clairement l'option extérieure.",
    ],
  },
  "team-building-ecologique-ile-de-france": {
    heading: "Un team building qui s'aligne avec votre stratégie environnementale",
    paragraphs: [
      "L'écart entre les engagements environnementaux affichés par les entreprises et leur quotidien opérationnel est devenu un sujet d'attention pour les jeunes générations en poste. Un team building écologique ne suffit pas à le combler, mais il évite au moins l'incohérence d'un séminaire au bowling pendant la semaine du climat. Nos ateliers en Île-de-France utilisent uniquement des matériaux biodégradables, sont transportés en train ou en véhicule léger, et ne génèrent aucun déchet emballage à l'issue.",
      "Nous proposons aussi des formats hybrides : un atelier végétal d'1h30 suivi d'une balade ethnobotanique commentée dans un parc francilien (Buttes-Chaumont, Bois de Vincennes, Vallée de Chevreuse, forêts de Rambouillet ou de Fontainebleau). Cette articulation atelier + balade donne une expérience plus complète et permet de mobiliser un budget journée plutôt qu'un budget demi-journée, ce qui change l'économie globale.",
    ],
  },
  "seminaire-vert-paris": {
    heading: "Intégrer un atelier végétal à un séminaire annuel",
    paragraphs: [
      "Un séminaire d'entreprise réussi alterne séquences plénières, ateliers de travail et moments de respiration. C'est ce dernier registre qui pèche souvent : pause-café prolongée, mini-conférence inspirante en option, photo de groupe rapide. Un atelier végétal de 1h30 à 2h, placé en fin d'après-midi ou en soirée, joue le rôle de transition utile entre la journée de travail intellectuel et le dîner. Il fait baisser le niveau d'agitation mentale sans casser la dynamique.",
      "À Paris, nous nous adaptons aux contraintes des lieux de séminaire (hôtels, espaces événementiels, sièges sociaux). Le matériel est compact, le temps d'installation court, le nettoyage post-atelier est de notre responsabilité. Pour les séminaires en plusieurs sessions (matin et après-midi), nous pouvons proposer deux formats différents qui se complètent thématiquement, ce qui évite la répétition pour les collaborateurs qui assistent aux deux.",
    ],
  },
  "seminaire-nature-ile-de-france": {
    heading: "Choisir le bon lieu en grande couronne",
    paragraphs: [
      "L'Île-de-France compte plusieurs centaines de lieux de séminaire, dont une part croissante revendique une identité nature. Tous ne se valent pas : un domaine en lisière de forêt n'offre pas la même expérience qu'un hôtel-château avec parc paysager. Nous connaissons une trentaine de lieux franciliens (Yvelines, Essonne, Seine-et-Marne, Val-d'Oise) où nous avons déjà animé, et nous pouvons orienter votre choix selon la nature de votre séminaire : convention commerciale, séminaire de direction, séminaire de cohésion post-fusion, séminaire stratégique.",
      "Le format de l'atelier s'ajuste à la saison : kokedama et terrarium en intérieur quand il fait froid ou humide, balade ethnobotanique et cueillette pédagogique au printemps et à l'été, atelier teinture végétale à l'automne avec les pigments de saison. Cette adaptation saisonnière n'est pas un détail marketing : elle donne au séminaire un ancrage temporel concret qui renforce le souvenir.",
    ],
  },
  "animation-bien-etre-entreprise": {
    heading: "Bien-être au travail : ce qui marche vraiment",
    paragraphs: [
      "La littérature scientifique sur le bien-être au travail a beaucoup affiné ses constats depuis dix ans. Les interventions ponctuelles à fort effet d'annonce (conférence, gadget, application) montrent un impact mesurable très court. Ce qui produit un effet durable, ce sont les pratiques régulières et les expériences sensorielles à forte charge émotionnelle. Nos ateliers se positionnent sur ce deuxième axe : un moment vécu intensément, qui s'inscrit dans la mémoire collective de l'équipe et qui fait référence ensuite.",
      "Nous proposons aux entreprises qui le souhaitent un suivi sur l'année : trois ou quatre ateliers programmés à intervalles réguliers, avec une thématique fil rouge (les plantes des saisons, l'histoire des jardins ouvriers, les usages domestiques des plantes, la teinture végétale de l'Antiquité à aujourd'hui). Cette régularité change la nature de la relation entre l'animatrice et l'équipe, et transforme l'atelier en rituel partagé plutôt qu'en événement isolé.",
    ],
  },
  "atelier-cohesion-equipe-nature": {
    heading: "La cohésion d'équipe par le geste partagé",
    paragraphs: [
      "On parle souvent de cohésion d'équipe comme d'un objectif abstrait, alors qu'elle se construit par des micro-expériences communes accumulées. Un atelier de manipulation végétale est exactement cela : pendant deux heures, l'équipe partage un vocabulaire technique nouveau (substrat, bouturage, fil de fer, mousse sphaigne), traverse de petites difficultés ensemble (la sphère qui ne tient pas, la teinture qui prend mal), et célèbre une réussite collective.",
      "Nos formats privilégient le travail en binôme ou en trinôme plutôt qu'individuel : un kokedama se fait mieux à deux mains complices, un terrarium prend tout son sens quand plusieurs personnes composent l'écosystème ensemble. Pour les équipes nouvellement formées ou en intégration de nouveaux arrivants, c'est un dispositif particulièrement utile parce qu'il crée des souvenirs partagés en quelques heures plutôt qu'en plusieurs mois.",
    ],
  },
  "animation-evenement-entreprise-nature": {
    heading: "Un stand végétal qui fait la différence sur votre événement",
    paragraphs: [
      "Conventions annuelles, journées portes ouvertes, événements clients, salons professionnels : les entreprises animent des moments collectifs où il faut à la fois marquer les esprits et gérer des flux importants de participants. Un stand d'atelier végétal apporte une solution rare : il fonctionne en continu, accueille des passages courts (15 à 30 minutes), produit un objet emporté qui prolonge la mémoire de votre événement, et photographe magnifiquement bien pour vos contenus internes ou réseaux sociaux.",
      "Nous calibrons le format selon le flux estimé : pour 200 participants sur une journée, prévoir deux animatrices et deux postes simultanés ; pour 500 personnes, un dispositif tournant avec ateliers express et démonstrations. Nous fournissons l'ensemble du matériel (tables, mobilier, signalétique discrète, matières premières) ou nous nous adaptons à votre scénographie existante si vous travaillez avec une agence événementielle.",
    ],
  },
  "atelier-developpement-durable-entreprise": {
    heading: "Sensibiliser au vivant sans faire la leçon",
    paragraphs: [
      "Les formations développement durable en entreprise se heurtent à un écueil récurrent : la posture descendante (un expert qui explique, des collaborateurs qui écoutent) génère de la résistance, surtout chez les profils qui se sentent déjà sensibilisés ou au contraire désintéressés. L'atelier végétal contourne ce problème : on apprend en faisant, on découvre l'histoire d'une plante en la manipulant, on questionne ses propres représentations sur la nature par l'expérience plutôt que par le discours.",
      "Notre animatrice est formée à l'anthropologie de la nature (EHESS) et adapte son propos au niveau de connaissance du groupe, sans jamais infantiliser. Les ateliers peuvent être déclinés par thématique : économie circulaire avec la teinture végétale et la valorisation de matières, biodiversité avec le terrarium et l'observation des micro-écosystèmes, savoirs traditionnels avec les usages domestiques et médicinaux des plantes. Chaque déclinaison sert un message stratégique de votre politique RSE.",
    ],
  },
  "animation-soiree-entreprise-vegetale": {
    heading: "Une soirée d'entreprise qui ne ressemble pas aux autres",
    paragraphs: [
      "Les soirées d'entreprise (vœux de janvier, fin d'année, lancement de produit, célébration d'anniversaire) se ressemblent souvent : cocktail debout, discours, animation musicale, photobooth. L'introduction d'un atelier végétal court (45 minutes à 1h) en milieu de soirée crée une rupture de rythme qui réveille l'attention. C'est aussi un excellent prétexte de circulation : les collaborateurs qui ne se croisent jamais se retrouvent côte à côte autour d'une table de matériel.",
      "Nous adaptons le format à l'ambiance soirée : matériel élégant, lumière soignée, gestes simples et rapidement gratifiants (mini-terrarium en pot soufflé, couronne de fleurs séchées, sachet de tisane personnalisée). L'objet repart en cadeau, ce qui remplace utilement le goodie générique souvent oublié. Pour les soirées de fin d'année, ce format produit régulièrement des photos qui circulent ensuite spontanément en interne et nourrissent la communication employeur.",
    ],
  },
};
