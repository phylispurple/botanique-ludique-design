import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ExternalLink, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: "mauvaises-herbes-6-mai",
    name: "Mauvaises herbes : histoire des jardins punk + fabrication de bombes à graines",
    date: "Mercredi 6 mai 2026",
    time: "17h00",
    location: "La Rochefoucauld, Paris 14e (Denfert-Rochereau)",
    audience: "Tout public",
    spots: "Sur inscription",
    description: "Histoire des jardins punk et de la politique des plantes sauvages en ville, suivie de la fabrication de bombes à graines à lancer dans les friches urbaines. 7€ matériel compris.",
    linkType: "internal" as const,
    internalUrl: "/inscription/mauvaises-herbes",
  },
  {
    id: "teintures-vegetales-27-mai",
    name: "Histoire culturelle et politique des teintures végétales",
    date: "Mercredi 27 mai 2026",
    time: "17h00",
    location: "La Rochefoucauld, Paris 14e (Denfert-Rochereau)",
    audience: "Tout public",
    spots: "Sur inscription",
    description: "De l'indigo des esclaves aux Antilles au curcuma de votre cuisine, Botanique Ludique retrace l'histoire politique des couleurs végétales, suivie d'une initiation pratique à la teinture. 8€ matériel fourni.",
    linkType: "internal" as const,
    internalUrl: "/inscription/teintures-vegetales",
  },
  {
    id: "kokedama-maurepas",
    name: "Atelier Kokedama, Parent-Enfant",
    date: "Mardi 20 mai 2026",
    time: "15h30 / 17h00",
    location: "Relais Marianne, Maurepas (78)",
    audience: "Maurepasien·nes, Parent-Enfant",
    spots: "",
    description: "Atelier parent-enfant pour créer ensemble votre propre kokedama. Réservé aux habitants de Maurepas.",
    linkType: "external" as const,
    externalUrl: "https://www.maurepas.fr/index.php/Actualit%26eacute%3Bs?idpage=15021&idmetacontenu=18619&iddossiercontenu=565&positioncontenu=A1",
  },
  {
    id: "balade-ecole-du-breuil",
    name: "Balade Botanique : histoire politique et culturelle des jardins",
    date: "Samedi 31 mai 2026",
    time: "Horaires à confirmer",
    location: "École Du Breuil, Paris, Fête de l'École",
    audience: "Tout public",
    spots: "",
    description: "Dans le cadre de la Fête de l'École Du Breuil, une balade botanique passionnante sur l'histoire politique et culturelle des jardins.",
    linkType: "coming" as const,
  },
  {
    id: "kokedama-franconville",
    name: "Atelier Kokedama, Les Jardins Suspendus",
    date: "Samedi 5 juillet 2026",
    time: "10h30 / 12h30",
    location: "Buttes du Parisis, Franconville",
    audience: "Tout public",
    spots: "",
    description: "Atelier en partenariat avec la Région Île-de-France Nature. Créez votre propre kokedama dans un cadre naturel exceptionnel. Inscriptions ouvertes à partir du 5 juin.",
    linkType: "external" as const,
    externalUrl: "https://openagenda.com/fr/ile-de-france/events/atelier-creation-dun-kokedama",
    buttonLabel: "En savoir plus",
  },
  {
    id: "balade-st-quentin",
    name: "Balade Botanique, Saint-Quentin-en-Yvelines",
    date: "Courant septembre 2026",
    time: "À confirmer",
    location: "Saint-Quentin-en-Yvelines (78)",
    audience: "Tout public",
    spots: "",
    description: "Une balade botanique à la découverte de la flore locale. Plus d'informations à venir.",
    linkType: "coming" as const,
  },
];

const pastEvents = [
  {
    id: "wardian-case-22-avril",
    name: "Wardian Case : histoire culturelle et politique du terrarium + fabrication",
    date: "Mercredi 22 avril 2026",
    time: "16h00 / 17h30",
    location: "La Rochefoucauld, Paris 14e",
    audience: "Tout public",
    description: "Histoire fascinante de la Wardian Case et fabrication d'un mini terrarium.",
  },
  {
    id: "stage-botanique-chatou",
    name: "Stage Botanique, Vacances de Printemps",
    date: "Du 20 au 24 avril 2026",
    time: "10h30 / 12h00",
    location: "MJC de Chatou",
    audience: "8 / 15 ans",
    description: "Une semaine de découverte botanique pendant les vacances de printemps.",
  },
  {
    id: "stage-botanique-bezons",
    name: "Stage Botanique, Adolescents",
    date: "Du 20 au 24 avril 2026",
    time: "",
    location: "Espace Elsa Triolet-Aragon, Bezons",
    audience: "13 / 17 ans",
    description: "Stage botanique dédié aux adolescents : activités scientifiques et créatives.",
  },
];

// Couleurs alternées pour les bandeaux date
const dateColors = ["bg-yellow", "bg-green-pale", "bg-orange-light", "bg-blue-light", "bg-yellow", "bg-green-pale"];

const Agenda = () => {
  const eventsSchema = upcomingEvents.map((event) => ({
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.date,
    location: { "@type": "Place", name: event.location },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      url: "https://botaniqueludique.com/agenda",
    },
    organizer: {
      "@type": "Person",
      name: "Vanessa Charlery",
      url: "https://botaniqueludique.com/about",
    },
  }));

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Agenda des Ateliers Botaniques | Paris & Île-de-France"
        description="Retrouvez tous les prochains ateliers et balades botaniques de Botanique Ludique à Paris et en Île-de-France. Kokedama, terrarium, teinture végétale."
        keywords="agenda atelier botanique, réservation atelier Paris, dates ateliers Yvelines, planning ateliers botaniques"
        canonical="/agenda"
      />
      <SchemaOrg type="Course" data={eventsSchema} />
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-16 px-4 bg-green relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="container mx-auto max-w-5xl relative">
          <div className="inline-flex items-center gap-2 border-brutal bg-yellow px-4 py-2 mb-8 shadow-brutal">
            <CalendarIcon className="w-4 h-4" />
            <span className="font-mono text-[11px] uppercase tracking-[2px] font-bold">Agenda 2026</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
            Prochains<br />
            <span className="bg-yellow text-foreground px-3 inline-block -rotate-1 border-brutal shadow-brutal">
              événements
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
            Ateliers, stages et balades botaniques à Paris et en Île-de-France. Inscrivez-vous pour partager un moment avec le vivant.
          </p>
        </div>
      </section>

      {/* ÉVÉNEMENTS À VENIR */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">/ 01</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              À <span className="text-primary">venir</span>
            </h2>
          </div>

          <div className="space-y-0">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.id}
                className="border-brutal bg-cream -mt-[3px] hover:-translate-y-1 hover:shadow-brutal transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Bandeau date */}
                  <div
                    className={`md:w-56 shrink-0 ${dateColors[index % dateColors.length]} border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground p-6 flex flex-col justify-center`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/60 mb-2">
                      Date
                    </span>
                    <span className="font-display text-lg uppercase leading-tight tracking-tight">
                      {event.date}
                    </span>
                    {event.time && (
                      <span className="font-mono text-xs uppercase tracking-[1.5px] text-foreground/70 mt-3 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </span>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
                    <h3 className="font-display text-xl md:text-2xl uppercase leading-tight tracking-tight">
                      {event.name}
                    </h3>
                    <p className="font-body text-sm text-foreground/80 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[1.5px] text-foreground/70">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {event.location}
                      </span>
                      {event.spots && (
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-primary" />
                          {event.spots}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-3 mt-auto border-t-[3px] border-foreground">
                      <span className="font-mono text-[10px] uppercase tracking-[1.5px] px-3 py-1.5 border-brutal-thin bg-foreground text-primary-foreground">
                        {event.audience}
                      </span>

                      {event.linkType === "external" && event.externalUrl && (
                        <a
                          href={event.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-2 bg-yellow text-foreground border-brutal shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
                        >
                          {(event as any).buttonLabel || "S'inscrire"}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {event.linkType === "internal" && (event as any).internalUrl && (
                        <Link
                          to={(event as any).internalUrl}
                          className="ml-auto inline-flex items-center gap-2 bg-foreground text-primary-foreground border-brutal shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
                        >
                          S'inscrire
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      {event.linkType === "coming" && (
                        <span className="ml-auto inline-flex items-center gap-2 px-5 py-3 border-[3px] border-dashed border-foreground/40 font-display uppercase text-xs tracking-wide text-foreground/50 cursor-default">
                          Inscription à venir
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SUR MESURE */}
      <section className="py-20 px-4 bg-foreground text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="container mx-auto max-w-4xl text-center relative">
          <span className="font-mono text-xs uppercase tracking-[2px] text-yellow">/ Sur mesure</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2 mb-6">
            Organiser un<br />
            <span className="bg-yellow text-foreground px-3 inline-block -rotate-1 border-brutal">atelier ?</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Nous organisons des ateliers sur mesure pour les entreprises, collectivités, écoles et EHPAD partout en Île-de-France.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
            >
              <Mail className="w-4 h-4" />
              Nous écrire
            </Link>
            <Link
              to="/pro"
              className="inline-flex items-center gap-2 bg-cream text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
            >
              Offres professionnelles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ÉVÉNEMENTS PASSÉS */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[2px] text-foreground/50">/ Archives</span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Événements passés
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="border-brutal bg-cream -ml-[3px] -mt-[3px] p-6 opacity-75 hover:opacity-100 hover:bg-green-pale transition-all"
              >
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/60 block mb-2">
                  {event.date}
                  {event.time ? ` · ${event.time}` : ""}
                </span>
                <h3 className="font-display text-base md:text-lg uppercase leading-tight tracking-tight mb-3">
                  {event.name}
                </h3>
                <p className="font-body text-sm text-foreground/70 mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[1.5px] text-foreground/60 pt-3 border-t-[3px] border-foreground/20">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {event.audience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agenda;
