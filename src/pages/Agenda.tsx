import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  ArrowRight,
  Mail,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import duBreuilImage from "@/assets/du-breuil-en-fete-2026.png";

type EventLink =
  | { linkType: "internal"; internalUrl: string; buttonLabel?: string }
  | { linkType: "external"; externalUrl: string; buttonLabel?: string }
  | { linkType: "coming" }
  | { linkType: "soldOut" };

type UpcomingEvent = {
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
} & EventLink;

type PastEvent = {
  id: string;
  name: string;
  date: string;
  parsedDate: Date | null;
  time: string;
  location: string;
  audience: string;
  description: string;
};

const d = (year: number, month: number, day: number) => new Date(year, month - 1, day);

const upcomingEvents: UpcomingEvent[] = [
  {
    id: "balade-ecole-du-breuil",
    name: "Balade ethnobotanique : Plantes voyageuses, histoires oubliées",
    date: "Dimanche 31 mai 2026",
    parsedDate: d(2026, 5, 31),
    time: "12h00",
    location: "École Du Breuil, Route de la Pyramide, Bois de Vincennes, Paris 12e",
    audience: "Tout public",
    spots: "Complet",
    description:
      "Dans le cadre de Du Breuil en fête 2026, une visite ethnobotanique portée par Botanique Ludique. Chaque style de jardin et de plantes révèle des circulations historiques, des rapports à la nature et aux savoirs botaniques. Un regard historique et social porté par une anthropologue. Programme complet de la fête sur ecoledubreuil.fr.",
    image: duBreuilImage,
    linkType: "soldOut",
  },
  {
    id: "terrarium-la-rochefoucauld-6-juin",
    name: "Wardian Case : histoire culturelle et politique du terrarium + fabrication",
    date: "Samedi 6 juin 2026",
    parsedDate: d(2026, 6, 6),
    time: "16h00",
    location: "La Rochefoucauld, Paris 14e (Denfert-Rochereau)",
    audience: "Tout public",
    spots: "12 participant·es max. Atelier maintenu à partir de 6 inscriptions.",
    description:
      "Plongez dans l'histoire fascinante de la Wardian Case, du XIXe siècle à nos jours, puis fabriquez votre propre terrarium. Bocal de 3 litres, boutures, terre et matériel fournis. 12€ par personne.",
    linkType: "external",
    externalUrl: "mailto:contact@botaniqueludique.com?subject=Inscription%20-%20Terrarium%20La%20Rochefoucauld%20-%206%20juin%202026",
    buttonLabel: "S'inscrire par mail",
  },
  {
    id: "au-fil-des-jardins-voisins",
    name: "Au fil des jardins de Voisins",
    date: "Dimanche 7 juin 2026",
    parsedDate: d(2026, 6, 7),
    time: "16h00",
    location: "Domaine de la Croix du Bois, chemin de la Croix du Bois, Voisins-le-Bretonneux (parking sur place)",
    audience: "Tout public à partir de 10 ans, durée 2h",
    spots: "Inscription par mail : museedelaville@sqy.fr",
    description:
      "Des jardins et des hommes. En compagnie de Vanessa Charlery, médiatrice culturelle et ethnobotaniste formée en anthropologie de la nature à l'EHESS, partez à la rencontre des jardins de Voisins-le-Bretonneux comme vous ne les avez jamais vus. Vous saurez tout de ce qu'ils nous disent de notre rapport au vivant à travers les époques, mais aussi de ce qu'ils nous disent de nos sociétés.",
    linkType: "external",
    externalUrl: "mailto:museedelaville@sqy.fr?subject=Inscription%20-%20Au%20fil%20des%20jardins%20de%20Voisins%20-%207%20juin%202026",
    buttonLabel: "S'inscrire par mail",
  },
  {
    id: "kokedama-franconville",
    name: "Atelier Kokedama, Les Jardins Suspendus",
    date: "Samedi 5 juillet 2026",
    parsedDate: d(2026, 7, 5),
    time: "10h30 / 12h30",
    location: "Buttes du Parisis, Franconville",
    audience: "Tout public",
    spots: "",
    description:
      "Atelier en partenariat avec la Région Île-de-France Nature. Créez votre propre kokedama dans un cadre naturel exceptionnel. Inscriptions ouvertes à partir du 5 juin.",
    linkType: "external",
    externalUrl:
      "https://openagenda.com/fr/ile-de-france/events/atelier-creation-dun-kokedama",
    buttonLabel: "En savoir plus",
  },
];

const pastEvents: PastEvent[] = [
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

const dateColors = ["bg-yellow", "bg-green-pale", "bg-orange-light", "bg-blue-light", "bg-yellow", "bg-green-pale"];
const MONTHS_FR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const ARCHIVES_PER_PAGE = 4;

const Agenda = () => {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [archivePage, setArchivePage] = useState(0);
  const firstUpcoming = upcomingEvents.find((e) => e.parsedDate);
  const [calMonth, setCalMonth] = useState<Date>(() => {
    const base = firstUpcoming?.parsedDate ?? new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const totalArchivePages = Math.ceil(pastEvents.length / ARCHIVES_PER_PAGE);
  const visibleArchives = pastEvents.slice(
    archivePage * ARCHIVES_PER_PAGE,
    (archivePage + 1) * ARCHIVES_PER_PAGE,
  );

  const eventsByDay = useMemo(() => {
    const map = new Map<string, UpcomingEvent[]>();
    upcomingEvents.forEach((ev) => {
      if (!ev.parsedDate) return;
      const k = `${ev.parsedDate.getFullYear()}-${ev.parsedDate.getMonth()}-${ev.parsedDate.getDate()}`;
      const arr = map.get(k) ?? [];
      arr.push(ev);
      map.set(k, arr);
    });
    return map;
  }, []);

  const calendarCells = useMemo(() => {
    const year = calMonth.getFullYear();
    const month = calMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    // Lundi = 0
    const startOffset = (firstDay.getDay() + 6) % 7;
    const totalDays = lastDay.getDate();
    const cells: Array<{ day: number | null; date: Date | null; events: UpcomingEvent[] }> = [];
    for (let i = 0; i < startOffset; i++) cells.push({ day: null, date: null, events: [] });
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const k = `${year}-${month}-${day}`;
      cells.push({ day, date, events: eventsByDay.get(k) ?? [] });
    }
    while (cells.length % 7 !== 0) cells.push({ day: null, date: null, events: [] });
    return cells;
  }, [calMonth, eventsByDay]);

  const eventsSchema = upcomingEvents.map((event) => ({
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.parsedDate ? event.parsedDate.toISOString().split("T")[0] : event.date,
    location: { "@type": "Place", name: event.location },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", url: "https://botaniqueludique.com/agenda" },
    organizer: { "@type": "Person", name: "Vanessa Charlery", url: "https://botaniqueludique.com/about" },
  }));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
            <span className="bg-yellow text-foreground px-3 inline-block -rotate-1 border-brutal shadow-brutal">événements</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
            Ateliers, stages et balades botaniques à Paris et en Île-de-France. Inscrivez-vous pour partager un moment avec le vivant.
          </p>
        </div>
      </section>

      {/* TOGGLE VUE */}
      <section className="pt-12 px-4 bg-cream">
        <div className="container mx-auto max-w-5xl flex justify-between items-end gap-4 flex-wrap">
          <div>
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">/ 01</span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              À <span className="text-primary">venir</span>
            </h2>
          </div>
          <div className="flex border-brutal bg-cream shadow-brutal">
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[1.5px] transition-colors border-r-[3px] border-foreground ${
                view === "list" ? "bg-foreground text-primary-foreground" : "bg-cream hover:bg-yellow"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              Liste
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`flex items-center gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[1.5px] transition-colors ${
                view === "calendar" ? "bg-foreground text-primary-foreground" : "bg-cream hover:bg-yellow"
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              Calendrier
            </button>
          </div>
        </div>
      </section>

      {/* LISTE */}
      {view === "list" && (
        <section className="py-10 px-4 bg-cream">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-0">
              {upcomingEvents.map((event, index) => (
                <article
                  key={event.id}
                  className="border-brutal bg-cream -mt-[3px] hover:-translate-y-1 hover:shadow-brutal transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`md:w-56 shrink-0 ${dateColors[index % dateColors.length]} border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground p-6 flex flex-col justify-center`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/60 mb-2">Date</span>
                      <span className="font-display text-lg uppercase leading-tight tracking-tight">{event.date}</span>
                      {event.time && (
                        <span className="font-mono text-xs uppercase tracking-[1.5px] text-foreground/70 mt-3 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
                      <h3 className="font-display text-xl md:text-2xl uppercase leading-tight tracking-tight">{event.name}</h3>
                      {event.image && (
                        <a
                          href={event.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block border-brutal-thin overflow-hidden bg-cream"
                        >
                          <img
                            src={event.image}
                            alt={event.name}
                            loading="lazy"
                            className="w-full max-h-72 object-contain bg-cream"
                          />
                        </a>
                      )}
                      <p className="font-body text-sm text-foreground/80 leading-relaxed">{event.description}</p>

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

                        {event.linkType === "external" && (
                          <a
                            href={event.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center gap-2 bg-yellow text-foreground border-brutal shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
                          >
                            {event.buttonLabel || "S'inscrire"}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {event.linkType === "internal" && (
                          <Link
                            to={event.internalUrl}
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
                        {event.linkType === "soldOut" && (
                          <span className="ml-auto inline-flex items-center gap-2 bg-foreground text-primary-foreground border-brutal shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide cursor-not-allowed">
                            Complet
                          </span>
                        )}
                      </div>

                      {event.id === "balade-ecole-du-breuil" && (
                        <a
                          href="https://www.ecoledubreuil.fr/evenement/fete-de-lecole-du-breuil-2026/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] uppercase tracking-[1.5px] underline underline-offset-4 text-foreground/70 hover:text-foreground inline-flex items-center gap-1.5"
                        >
                          Programme officiel Du Breuil en fête 2026
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CALENDRIER */}
      {view === "calendar" && (
        <section className="py-10 px-4 bg-cream">
          <div className="container mx-auto max-w-5xl">
            <div className="border-brutal bg-cream shadow-brutal">
              {/* Header mois */}
              <div className="flex items-center justify-between border-b-[3px] border-foreground p-4 bg-yellow">
                <button
                  onClick={() => setCalMonth(new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1))}
                  className="border-[3px] border-foreground bg-cream w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors"
                  aria-label="Mois précédent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight">
                  {MONTHS_FR[calMonth.getMonth()]} {calMonth.getFullYear()}
                </h3>
                <button
                  onClick={() => setCalMonth(new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1))}
                  className="border-[3px] border-foreground bg-cream w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors"
                  aria-label="Mois suivant"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Jours */}
              <div className="grid grid-cols-7 border-b-[3px] border-foreground bg-foreground">
                {DAYS_FR.map((day) => (
                  <div
                    key={day}
                    className="font-mono text-[10px] md:text-xs uppercase tracking-[1.5px] text-primary-foreground text-center py-3"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Cellules */}
              <div className="grid grid-cols-7">
                {calendarCells.map((cell, i) => {
                  const isToday =
                    cell.date &&
                    cell.date.getDate() === today.getDate() &&
                    cell.date.getMonth() === today.getMonth() &&
                    cell.date.getFullYear() === today.getFullYear();
                  const hasEvents = cell.events.length > 0;
                  return (
                    <div
                      key={i}
                      className={`min-h-[80px] md:min-h-[110px] border-r-[3px] border-b-[3px] border-foreground p-2 last:border-r-0 ${
                        !cell.day ? "bg-foreground/5" : hasEvents ? "bg-green-pale" : "bg-cream"
                      } ${(i + 1) % 7 === 0 ? "border-r-0" : ""}`}
                    >
                      {cell.day && (
                        <>
                          <div
                            className={`font-display text-sm md:text-base uppercase mb-1 inline-block px-1.5 ${
                              isToday ? "bg-foreground text-primary-foreground" : ""
                            }`}
                          >
                            {String(cell.day).padStart(2, "0")}
                          </div>
                          <div className="space-y-1">
                            {cell.events.map((ev) => {
                              const href =
                                ev.linkType === "internal"
                                  ? ev.internalUrl
                                  : ev.linkType === "external"
                                  ? ev.externalUrl
                                  : undefined;
                              const inner = (
                                <span className="block bg-yellow border-[2px] border-foreground px-1.5 py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-tight leading-tight truncate">
                                  {ev.name.split(":")[0].split(",")[0]}
                                </span>
                              );
                              if (!href) {
                                return (
                                  <span key={ev.id} className="block opacity-70" title={ev.name}>
                                    {inner}
                                  </span>
                                );
                              }
                              if (ev.linkType === "internal") {
                                return (
                                  <Link key={ev.id} to={href} title={ev.name} className="hover:translate-y-[-1px] block transition-transform">
                                    {inner}
                                  </Link>
                                );
                              }
                              return (
                                <a key={ev.id} href={href} target="_blank" rel="noopener noreferrer" title={ev.name} className="hover:translate-y-[-1px] block transition-transform">
                                  {inner}
                                </a>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-foreground/50 mt-4 text-center">
              Cliquez sur un événement pour vous inscrire
            </p>
          </div>
        </section>
      )}

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

      {/* ARCHIVES */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 flex justify-between items-end gap-4 flex-wrap">
            <div>
              <span className="font-mono text-xs uppercase tracking-[2px] text-foreground/50">/ Archives</span>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
                Événements passés
              </h2>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-foreground/60">
              {archivePage * ARCHIVES_PER_PAGE + 1}–
              {Math.min((archivePage + 1) * ARCHIVES_PER_PAGE, pastEvents.length)} sur {pastEvents.length}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {visibleArchives.map((event) => (
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

          {/* Pagination */}
          {totalArchivePages > 1 && (
            <div className="flex justify-center items-center gap-0 mt-10">
              <button
                onClick={() => setArchivePage((p) => Math.max(0, p - 1))}
                disabled={archivePage === 0}
                className="border-[3px] border-foreground bg-cream w-12 h-12 flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Page précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalArchivePages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setArchivePage(i)}
                  className={`border-[3px] border-foreground -ml-[3px] w-12 h-12 font-display text-sm uppercase transition-colors ${
                    archivePage === i ? "bg-foreground text-primary-foreground" : "bg-cream hover:bg-yellow"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
              <button
                onClick={() => setArchivePage((p) => Math.min(totalArchivePages - 1, p + 1))}
                disabled={archivePage === totalArchivePages - 1}
                className="border-[3px] border-foreground -ml-[3px] bg-cream w-12 h-12 flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Page suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agenda;
