// Événements de l'agenda (page /agenda et bloc « Prochains ateliers » de l'accueil).
// On ajoute les événements dans EVENTS sans se soucier de la date : ceux qui sont
// terminés passent tout seuls dans les événements passés (splitEvents).
import afficheFemmesBotanique from "@/assets/affiche-femmes-botanique-breuil.webp";

export type EventLink =
  | { linkType: "internal"; internalUrl: string; buttonLabel?: string }
  | { linkType: "external"; externalUrl: string; buttonLabel?: string }
  | { linkType: "coming"; buttonLabel?: string }
  | { linkType: "soldOut" };

export type UpcomingEvent = {
  id: string;
  name: string;
  date: string;
  parsedDate: Date | null;
  time: string;
  location: string;
  audience: string;
  spots: string;
  description: string;
  image?: string;
  soldOut?: boolean;
  /** Surcharges JSON-LD Event (dates ISO, adresse complète, intervenant...). */
  schema?: Record<string, unknown>;
} & EventLink;

export type PastEvent = {
  id: string;
  name: string;
  date: string;
  parsedDate: Date | null;
  time: string;
  location: string;
  audience: string;
  description: string;
  /** Page de l'événement, conservée en ligne après la date. */
  internalUrl?: string;
};

const d = (year: number, month: number, day: number) => new Date(year, month - 1, day);

// Saisie des événements : on les ajoute ici sans se soucier de la date ;
// ceux qui sont terminés passent tout seuls dans « Événements passés » (voir splitEvents).
export const EVENTS: UpcomingEvent[] = [
  {
    id: "bombes-graines-la-celle-28-oct",
    name: "Atelier botanique « Bombes à graines »",
    date: "Mercredi 28 octobre 2026",
    parsedDate: d(2026, 10, 28),
    time: "14h30 / 16h30",
    location: "Médiathèque, La Celle-Saint-Cloud (78)",
    audience: "À partir de 6 ans",
    spots: "Réservation obligatoire",
    description:
      "Dans le cadre du festival « Sur la Route des Saisons, au cœur du climat et du vivant » de la Ville de La Celle-Saint-Cloud. Un temps d'échange sur les graines voyageuses et les jardins spontanés, puis chacun fabrique ses bombes à graines à semer chez soi. Réservation obligatoire au 01 30 78 10 75.",
    linkType: "external", externalUrl: "https://lacellesaintcloud.fr/actualites/sur-la-route-des-saisons-au-coeur-du-climat-et-du-vivant/", buttonLabel: "Infos & réservation",
    schema: {
      startDate: "2026-10-28T14:30:00+01:00",
      endDate: "2026-10-28T16:30:00+01:00",
      location: {
        "@type": "Place",
        name: "Médiathèque de La Celle-Saint-Cloud",
        address: { "@type": "PostalAddress", streetAddress: "8E avenue Charles de Gaulle", addressLocality: "La Celle-Saint-Cloud", postalCode: "78170", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "epices-maisons-alfort-7-nov",
    name: "Sachet senteur et pots-pourris",
    date: "Samedi 7 novembre 2026",
    parsedDate: d(2026, 11, 7),
    time: "14h30 / 16h00",
    location: "Maison de l'Environnement, Maisons-Alfort (94)",
    audience: "À partir de 6 ans",
    spots: "Sur inscription",
    description:
      "Après un temps d'échange sur les routes des épices et notre mémoire olfactive, chacun compose son sachet senteur ou son pot-pourri à partir d'épices et de plantes séchées, à emporter chez soi.",
    linkType: "external", externalUrl: "mailto:maisondelenvironnement@maisons-alfort.fr?subject=Inscription%20atelier%20Sachet%20senteur%207%20novembre", buttonLabel: "S'inscrire par mail",
    schema: {
      startDate: "2026-11-07T14:30:00+01:00",
      endDate: "2026-11-07T16:00:00+01:00",
      location: {
        "@type": "Place",
        name: "Maison de l'Environnement de Maisons-Alfort",
        address: { "@type": "PostalAddress", streetAddress: "2 avenue Foch", addressLocality: "Maisons-Alfort", postalCode: "94700", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "bombes-graines-la-celle-14-nov",
    name: "Atelier botanique « Bombes à graines »",
    date: "Samedi 14 novembre 2026",
    parsedDate: d(2026, 11, 14),
    time: "10h00 / 12h00",
    location: "Médiathèque, La Celle-Saint-Cloud (78)",
    audience: "À partir de 6 ans",
    spots: "Réservation obligatoire",
    description:
      "Dans le cadre du festival « Sur la Route des Saisons, au cœur du climat et du vivant » de la Ville de La Celle-Saint-Cloud. Un temps d'échange sur les graines voyageuses et les jardins spontanés, puis chacun fabrique ses bombes à graines à semer chez soi. Réservation obligatoire au 01 30 78 10 75.",
    linkType: "external", externalUrl: "https://lacellesaintcloud.fr/actualites/sur-la-route-des-saisons-au-coeur-du-climat-et-du-vivant/", buttonLabel: "Infos & réservation",
    schema: {
      startDate: "2026-11-14T10:00:00+01:00",
      endDate: "2026-11-14T12:00:00+01:00",
      location: {
        "@type": "Place",
        name: "Médiathèque de La Celle-Saint-Cloud",
        address: { "@type": "PostalAddress", streetAddress: "8E avenue Charles de Gaulle", addressLocality: "La Celle-Saint-Cloud", postalCode: "78170", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "papier-carnets-chateau-ephemere-21-nov",
    name: "Atelier famille : crée ton papier recyclé et ton carnet (partie 1)",
    date: "Samedi 21 novembre 2026",
    parsedDate: d(2026, 11, 21),
    time: "14h30 / 16h30",
    location: "Château Éphémère, Carrières-sous-Poissy (78)",
    audience: "En duo, dès 6 ans",
    spots: "8 € adulte · 6 € enfant",
    description:
      "L'histoire du papier et le parcours de la matière, de sa fabrication à son recyclage, puis place à la pratique : déchiquetage, préparation de la pâte, tirage des feuilles au tamis et mise au séchage. Les feuilles sèchent au château jusqu'à la seconde séance du 5 décembre. Dans le cadre de la Semaine européenne de la réduction des déchets.",
    linkType: "external", externalUrl: "https://www.helloasso.com/associations/vanderlab/evenements/atelier-famille-cree-ton-papier-recycle-et-ton-carnet-partie-1", buttonLabel: "Réserver sur HelloAsso",
    schema: {
      startDate: "2026-11-21T14:30:00+01:00",
      endDate: "2026-11-21T16:30:00+01:00",
      location: {
        "@type": "Place",
        name: "Château Éphémère",
        address: { "@type": "PostalAddress", streetAddress: "2 chemin des Grandes Terres", addressLocality: "Carrières-sous-Poissy", postalCode: "78955", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "papier-carnets-chateau-ephemere-5-dec",
    name: "Atelier famille : crée ton papier recyclé et ton carnet (partie 2)",
    date: "Samedi 5 décembre 2026",
    parsedDate: d(2026, 12, 5),
    time: "14h30 / 16h30",
    location: "Château Éphémère, Carrières-sous-Poissy (78)",
    audience: "En duo, dès 6 ans",
    spots: "8 € adulte · 6 € enfant",
    description:
      "L'histoire du livre et du carnet, puis chacun assemble et relie son propre carnet selon la technique traditionnelle de la reliure japonaise, à partir des feuilles fabriquées lors de la première séance. Les deux ateliers se complètent, mais peuvent aussi se vivre séparément.",
    linkType: "external", externalUrl: "https://www.helloasso.com/associations/vanderlab/evenements/atelier-famille-cree-ton-papier-recycle-et-ton-carnet-partie-2", buttonLabel: "Réserver sur HelloAsso",
    schema: {
      startDate: "2026-12-05T14:30:00+01:00",
      endDate: "2026-12-05T16:30:00+01:00",
      location: {
        "@type": "Place",
        name: "Château Éphémère",
        address: { "@type": "PostalAddress", streetAddress: "2 chemin des Grandes Terres", addressLocality: "Carrières-sous-Poissy", postalCode: "78955", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "sachets-senteur-croissy-12-dec",
    name: "Stand sachets senteur de Noël",
    date: "Samedi 12 décembre 2026",
    parsedDate: d(2026, 12, 12),
    time: "10h00 / 13h00",
    location: "Parc Leclerc, Croissy-sur-Seine (78)",
    audience: "Tout public, tous âges",
    spots: "Sans inscription",
    description:
      "Dans le cadre des festivités de Noël de la Ville de Croissy-sur-Seine, sur le stand de la Clé Verte. Passez quand vous voulez et repartez avec votre sachet senteur : sachet de Noël, bien-être ou fraîcheur, composé avec des épices et des plantes aromatiques, autour d'une petite médiation sur leurs usages et leur histoire.",
    linkType: "coming", buttonLabel: "Sans inscription, sur le stand",
    schema: {
      startDate: "2026-12-12T10:00:00+01:00",
      endDate: "2026-12-12T13:00:00+01:00",
      location: {
        "@type": "Place",
        name: "Parc Leclerc",
        address: { "@type": "PostalAddress", addressLocality: "Croissy-sur-Seine", postalCode: "78290", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "papier-carnets-maisons-alfort-decembre",
    name: "Papier recyclé & carnets de Noël, en deux séances",
    date: "Samedis 12 et 19 décembre 2026",
    parsedDate: d(2026, 12, 12),
    time: "14h30 / 16h30",
    location: "Maison de l'Environnement, Maisons-Alfort (94)",
    audience: "Tout public, les deux séances",
    spots: "Sur inscription",
    description:
      "Un atelier de Noël en deux temps : le 12 décembre, on fabrique son papier à partir de papier recyclé, de pétales et de feuilles ; le 19 décembre, on relie et décore son carnet. Inscription pour les deux séances.",
    linkType: "external", externalUrl: "mailto:maisondelenvironnement@maisons-alfort.fr?subject=Inscription%20atelier%20Papier%20recyclé%20et%20carnets%2012%20et%2019%20décembre", buttonLabel: "S'inscrire par mail",
    schema: {
      startDate: "2026-12-12T14:30:00+01:00",
      endDate: "2026-12-19T16:30:00+01:00",
      location: {
        "@type": "Place",
        name: "Maison de l'Environnement de Maisons-Alfort",
        address: { "@type": "PostalAddress", streetAddress: "2 avenue Foch", addressLocality: "Maisons-Alfort", postalCode: "94700", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "conference-femmes-botanique-breuil-16-jan",
    name: "Conférence « Les femmes et la botanique »",
    date: "Samedi 16 janvier 2027",
    parsedDate: d(2027, 1, 16),
    time: "13h00 / 16h00",
    location: "École Du Breuil, Paris 12e",
    audience: "Tout public",
    spots: "36 € ou 25 €",
    description:
      "Découvreuses, illustratrices, jardinières et herboristes : ces femmes qui ont fait la botanique. Une conférence pour retrouver celles que l'histoire des sciences a souvent laissées dans l'ombre.",
    image: afficheFemmesBotanique,
    linkType: "coming", buttonLabel: "Infos & réservation à venir",
    schema: {
      startDate: "2027-01-16T13:00:00+01:00",
      endDate: "2027-01-16T16:00:00+01:00",
      location: {
        "@type": "Place",
        name: "École Du Breuil",
        address: { "@type": "PostalAddress", streetAddress: "Route de la Pyramide, Bois de Vincennes", addressLocality: "Paris", postalCode: "75012", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "bombes-graines-houilles-20-mars",
    name: "Atelier « Bombes à graines »",
    date: "Samedi 20 mars 2027",
    parsedDate: d(2027, 3, 20),
    time: "10h00 / 11h30",
    location: "Médiathèque Jules-Verne, Houilles (78)",
    audience: "Enfants à partir de 6 ans",
    spots: "10 places",
    description:
      "Pendant la journée jardinage de la médiathèque. Avec l'ethnobotaniste Vanessa Charlery, les enfants découvrent comment les graines voyagent et pourquoi elles sont précieuses pour la biodiversité. Puis ils mettent les mains dans la terre pour fabriquer leurs propres bombes à graines, à semer au jardin, sur un balcon ou dans un coin de nature pour faire fleurir la ville.",
    linkType: "coming", buttonLabel: "Inscription à venir",
    schema: {
      startDate: "2027-03-20T10:00:00+01:00",
      endDate: "2027-03-20T11:30:00+01:00",
      location: {
        "@type": "Place",
        name: "Médiathèque Jules-Verne",
        address: { "@type": "PostalAddress", streetAddress: "7 rue du Capitaine-Guise", addressLocality: "Houilles", postalCode: "78800", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
  {
    id: "terrarium-houilles-20-mars",
    name: "Atelier terrarium",
    date: "Samedi 20 mars 2027",
    parsedDate: d(2027, 3, 20),
    time: "14h30 / 16h00",
    location: "Médiathèque Jules-Verne, Houilles (78)",
    audience: "Adultes",
    spots: "10 places",
    description:
      "Pendant la journée jardinage de la médiathèque. Avec l'ethnobotaniste Vanessa Charlery, chaque participant compose son propre jardin miniature sous verre de 3 litres, en superposant les couches de drainage, de terre et de mousse autour de plantes choisies, tout en découvrant l'histoire de ces plantes voyageuses et le petit écosystème qui se recrée dans le bocal. Chacun repart avec son terrarium et ses conseils d'entretien.",
    linkType: "coming", buttonLabel: "Inscription à venir",
    schema: {
      startDate: "2027-03-20T14:30:00+01:00",
      endDate: "2027-03-20T16:00:00+01:00",
      location: {
        "@type": "Place",
        name: "Médiathèque Jules-Verne",
        address: { "@type": "PostalAddress", streetAddress: "7 rue du Capitaine-Guise", addressLocality: "Houilles", postalCode: "78800", addressRegion: "Île-de-France", addressCountry: "FR" },
      },
    },
  },
];

export const ARCHIVED_EVENTS: PastEvent[] = [
  {
    id: "fete-science-epices-versailles",
    name: "Fête de la Science : Sur la route des épices, odeurs et saveurs",
    date: "Samedi 3 octobre 2026",
    parsedDate: d(2026, 10, 3),
    time: "15h30",
    location: "Bibliothèque Choiseul, Versailles",
    audience: "Tout public dès 11 ans",
    description:
      "Atelier ethnobotanique de la Fête de la Science : histoire des épices, anthropologie des sens et fabrication d'un sachet senteur. Événement passé, reprogrammable dans votre ville.",
    internalUrl: "/evenement/fete-de-la-science-versailles-route-des-epices",
  },
  {
    id: "stage-botanique-chatou-juillet",
    name: "Stage Botanique, Vacances d'Été",
    date: "Du 7 au 10 juillet 2026",
    parsedDate: d(2026, 7, 7),
    time: "10h30 / 12h00",
    location: "MJC de Chatou",
    audience: "8 / 15 ans",
    description:
      "Une semaine de découverte botanique pendant les vacances d'été. Inscriptions et informations sur le site de la MJC de Chatou.",
  },
  {
    id: "kokedama-franconville",
    name: "Atelier Kokedama, Les Jardins Suspendus",
    date: "Samedi 5 juillet 2026",
    parsedDate: d(2026, 7, 5),
    time: "10h30 / 12h30",
    location: "Buttes du Parisis, Franconville",
    audience: "Tout public",
    description:
      "Atelier en partenariat avec la Région Île-de-France Nature. Créez votre propre kokedama dans un cadre naturel exceptionnel. Inscriptions ouvertes à partir du 5 juin.",
  },
  {
    id: "au-fil-des-jardins-voisins",
    name: "Au fil des jardins de Voisins",
    date: "Dimanche 7 juin 2026",
    parsedDate: d(2026, 6, 7),
    time: "16h00",
    location: "Domaine de la Croix du Bois, chemin de la Croix du Bois, Voisins-le-Bretonneux (parking sur place)",
    audience: "Tout public à partir de 10 ans, durée 2h",
    description:
      "Des jardins et des hommes. En compagnie de Vanessa Charlery, médiatrice culturelle et ethnobotaniste formée en anthropologie de la nature à l'EHESS, partez à la rencontre des jardins de Voisins-le-Bretonneux comme vous ne les avez jamais vus. Vous saurez tout de ce qu'ils nous disent de notre rapport au vivant à travers les époques, mais aussi de ce qu'ils nous disent de nos sociétés.",
  },
  {
    id: "wardian-case-6-juin",
    name: "Wardian Case : histoire culturelle et politique du terrarium + fabrication",
    date: "Samedi 6 juin 2026",
    parsedDate: d(2026, 6, 6),
    time: "16h00",
    location: "La Rochefoucauld, Paris 14e (Denfert-Rochereau)",
    audience: "Tout public",
    description:
      "Histoire culturelle et politique de la Wardian Case suivie de la fabrication d'un terrarium en bocal de 3 litres.",
  },
  {
    id: "balade-ecole-du-breuil",
    name: "Balade ethnobotanique : Plantes voyageuses, histoires oubliées",
    date: "Dimanche 31 mai 2026",
    parsedDate: d(2026, 5, 31),
    time: "12h00",
    location: "École Du Breuil, Route de la Pyramide, Bois de Vincennes, Paris 12e",
    audience: "Tout public",
    description:
      "Dans le cadre de Du Breuil en fête 2026, une visite ethnobotanique portée par Botanique Ludique. Chaque style de jardin et de plantes révèle des circulations historiques, des rapports à la nature et aux savoirs botaniques. Un regard historique et social porté par une anthropologue.",
  },
  {
    id: "teintures-vegetales-27-mai",
    name: "Histoire culturelle et politique des teintures végétales",
    date: "Mercredi 27 mai 2026",
    parsedDate: d(2026, 5, 27),
    time: "17h00",
    location: "La Rochefoucauld, Paris 14e (Denfert-Rochereau)",
    audience: "Tout public",
    description:
      "De l'indigo des esclaves aux Antilles au curcuma de votre cuisine, histoire politique des couleurs végétales suivie d'une initiation pratique à la teinture.",
  },
  {
    id: "terrarium-maurepas",
    name: "Atelier Terrarium, Parent-Enfant",
    date: "Mardi 20 mai 2026",
    parsedDate: d(2026, 5, 20),
    time: "15h30 / 17h00",
    location: "Relais Marianne, Maurepas (78)",
    audience: "Maurepasien·nes, Parent-Enfant",
    description:
      "Atelier parent-enfant pour créer ensemble votre propre terrarium. Réservé aux habitants de Maurepas.",
  },
  {
    id: "mauvaises-herbes-6-mai",
    name: "Mauvaises herbes : histoire des jardins punk + fabrication de bombes à graines",
    date: "Mercredi 6 mai 2026",
    parsedDate: d(2026, 5, 6),
    time: "17h00",
    location: "La Rochefoucauld, Paris 14e (Denfert-Rochereau)",
    audience: "Tout public",
    description: "Histoire des jardins punk et de la politique des plantes sauvages en ville, suivie de la fabrication de bombes à graines à lancer dans les friches urbaines. 7€ matériel compris.",
  },
  {
    id: "wardian-case-22-avril",
    name: "Wardian Case : histoire culturelle et politique du terrarium + fabrication",
    date: "Mercredi 22 avril 2026",
    parsedDate: d(2026, 4, 22),
    time: "16h00 / 17h30",
    location: "La Rochefoucauld, Paris 14e",
    audience: "Tout public",
    description: "Histoire fascinante de la Wardian Case et fabrication d'un mini terrarium.",
  },
  {
    id: "stage-botanique-chatou",
    name: "Stage Botanique, Vacances de Printemps",
    date: "Du 20 au 24 avril 2026",
    parsedDate: d(2026, 4, 20),
    time: "10h30 / 12h00",
    location: "MJC de Chatou",
    audience: "8 / 15 ans",
    description: "Une semaine de découverte botanique pendant les vacances de printemps.",
  },
  {
    id: "stage-botanique-bezons",
    name: "Stage Botanique, Adolescents",
    date: "Du 20 au 24 avril 2026",
    parsedDate: d(2026, 4, 20),
    time: "",
    location: "Espace Elsa Triolet-Aragon, Bezons",
    audience: "13 / 17 ans",
    description: "Stage botanique dédié aux adolescents : activités scientifiques et créatives.",
  },
];


/** Adresse postale précise tirée du balisage (rue, code postal, ville), si elle est renseignée. */
export const eventAddress = (ev: UpcomingEvent): string | null => {
  const loc = ev.schema?.location as { address?: Record<string, string> } | undefined;
  const a = loc?.address;
  if (!a?.streetAddress) return null;
  return [a.streetAddress, [a.postalCode, a.addressLocality].filter(Boolean).join(" ")].filter(Boolean).join(", ");
};

/** Fin d'un événement : endDate du balisage si elle existe, sinon fin de la journée. */
export const eventEnd = (ev: UpcomingEvent): Date | null => {
  const end = ev.schema?.endDate;
  if (typeof end === "string") return new Date(end);
  if (!ev.parsedDate) return null;
  const e = new Date(ev.parsedDate);
  e.setHours(23, 59, 59, 999);
  return e;
};

/**
 * Range automatiquement les événements : tout ce qui est terminé passe dans
 * « Événements passés », comme le bandeau de Noël qui disparaît seul après la date.
 */
export const splitEvents = (now: Date) => {
  const upcoming: UpcomingEvent[] = [];
  const finished: PastEvent[] = [];
  for (const ev of EVENTS) {
    const end = eventEnd(ev);
    if (end && end < now) {
      finished.push({
        id: ev.id,
        name: ev.name,
        date: ev.date,
        parsedDate: ev.parsedDate,
        time: ev.time,
        location: ev.location,
        audience: ev.audience,
        description: ev.description,
        internalUrl: ev.linkType === "internal" ? ev.internalUrl : undefined,
      });
    } else {
      upcoming.push(ev);
    }
  }
  const t = (x: { parsedDate: Date | null }) => x.parsedDate?.getTime() ?? 0;
  upcoming.sort((a, b) => t(a) - t(b));
  const past = [...finished, ...ARCHIVED_EVENTS].sort((a, b) => t(b) - t(a));
  return { upcomingEvents: upcoming, pastEvents: past };
};
