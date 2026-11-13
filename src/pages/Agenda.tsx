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
import WaveDivider from "@/components/WaveDivider";
import AnimatedSection from "@/components/AnimatedSection";
import TraitDessine from "@/components/TraitDessine";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import {
  splitEvents,
  eventAddress,
  type UpcomingEvent,
  type PastEvent,
} from "@/data/agendaEvents";

const MONTHS_FR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const ARCHIVES_PER_PAGE = 4;
const MOIS_COURTS = ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const JOURS_LONGS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
/** Couleurs des pastilles de date, en alternance. */
const TONS_DATE = [
  "bg-accent text-foreground",
  "bg-[hsl(var(--olive-light))] text-foreground",
  "bg-[hsl(var(--green))] text-[hsl(var(--cream))]",
  "bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]",
];
const BTN_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };

/** Bouton d'inscription selon le type de lien de l'événement. */
const ActionEvenement = ({ event, i }: { event: UpcomingEvent; i: number }) => {
  const style = i % 2 ? BTN_B : BTN_A;
  const tilt = i % 2 ? "rotate-1" : "-rotate-1";
  if (event.linkType === "external")
    return (
      <a
        href={event.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground text-xs px-6 py-3 hover:rotate-0 ${tilt}`}
        style={style}
      >
        {event.buttonLabel || "S'inscrire"} <ExternalLink className="w-3.5 h-3.5" />
      </a>
    );
  if (event.linkType === "internal")
    return (
      <Link to={event.internalUrl} className={`btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground text-xs px-6 py-3 hover:rotate-0 ${tilt}`} style={style}>
        S'inscrire <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    );
  if (event.linkType === "soldOut")
    return (
      <span className="inline-flex items-center font-mono-brand text-[10px] uppercase tracking-[2px] bg-foreground text-primary-foreground rounded-full px-5 py-2.5 cursor-not-allowed">
        Complet
      </span>
    );
  return (
    <span className="inline-flex items-center font-mono-brand text-[10px] uppercase tracking-[2px] border-[2px] border-dashed border-foreground/40 rounded-full px-5 py-2.5 text-foreground/55">
      {event.buttonLabel || "Inscription à venir"}
    </span>
  );
};

/** Grande pastille de date (jour, mois, jour de la semaine). */
const PastilleDate = ({ date, ton, grande = false }: { date?: Date; ton: string; grande?: boolean }) =>
  date ? (
    <div
      className={`flex-shrink-0 flex flex-col items-center justify-center text-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${ton} ${grande ? "w-28 h-28" : "w-[88px] h-[88px]"}`}
      style={PASTILLE}
    >
      <span className="font-mono-brand text-[9px] uppercase tracking-[1px] opacity-80">{JOURS_LONGS[date.getDay()]}</span>
      <span className={`font-display leading-none ${grande ? "text-4xl" : "text-3xl"}`}>{date.getDate()}</span>
      <span className="font-mono-brand text-[10px] uppercase tracking-[1px]">{MOIS_COURTS[date.getMonth()]}</span>
    </div>
  ) : null;
const Agenda = () => {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [archivePage, setArchivePage] = useState(0);
  const { upcomingEvents, pastEvents } = useMemo(() => splitEvents(new Date()), []);
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
  }, [upcomingEvents]);

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

  // Un bloc JSON-LD Event par événement à venir. Auparavant la page passait le
  // tableau entier à <SchemaOrg type="Course">, ce qui produisait un objet aux
  // clés numériques ("0", "1"...) et donc un balisage invalide.
  const eventsSchema = upcomingEvents.map((event) => ({
    name: event.name,
    description: event.description,
    startDate: event.parsedDate ? event.parsedDate.toISOString().split("T")[0] : event.date,
    location: { "@type": "Place", name: event.location },
    performer: { "@type": "Person", name: "Vanessa Charlery", url: "https://botaniqueludique.com/about" },
    ...(event.schema ?? {}),
  }));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
      <SEO
        title="Agenda des ateliers et balades botaniques"
        description="Consultez l'agenda Botanique Ludique, prochains ateliers, balades botaniques et événements autour des plantes à Paris et en Île-de-France."
        keywords="agenda atelier botanique, réservation atelier Paris, dates ateliers Yvelines, planning ateliers botaniques"
        canonical="/agenda"
      />
      {eventsSchema.map((schema, i) => (
        <SchemaOrg key={upcomingEvents[i].id} type="Event" data={schema} />
      ))}
      <Navigation />

      {/* ===== HERO : titre + prochain rendez-vous ===== */}
      <section className="relative px-6 pt-28 pb-14 md:pt-36 md:pb-16">
        <div
          className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
          style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 w-[380px] h-[380px] bg-accent/20 pointer-events-none"
          style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-10 items-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
              Ateliers · Balades · Rencontres
            </span>
            <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
              Prochains<br />
              <span className="text-primary">événements</span>
            </h1>
            <TraitDessine className="mb-7" />
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[540px] leading-snug">
              Ateliers, stages et balades botaniques partout en Île-de-France. Inscrivez-vous pour partager un moment avec le vivant.
            </p>
          </AnimatedSection>

          {firstUpcoming && (
            <AnimatedSection delay={150} className="max-w-[480px] w-full mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative bg-[hsl(var(--cream))] border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-7 pt-14 rotate-1" style={galet(1)}>
                <span className="absolute -top-4 left-7 font-mono-brand text-[10px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-4 py-2 -rotate-2 shadow-[2px_2px_0_hsl(var(--black))]">
                  <span className="sm:hidden">Bientôt</span>
                  <span className="hidden sm:inline">Prochain rendez-vous</span>
                </span>
                <div className="absolute -top-10 right-6">
                  <PastilleDate date={firstUpcoming.parsedDate} ton={TONS_DATE[2]} grande />
                </div>
                <h2 className="font-display text-xl md:text-2xl uppercase leading-tight mb-4 pr-24">{firstUpcoming.name}</h2>
                <ul className="space-y-1.5 text-sm text-foreground/75 mb-6">
                  {firstUpcoming.time && (
                    <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />{firstUpcoming.time}</li>
                  )}
                  <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />{firstUpcoming.location}</li>
                  <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />{firstUpcoming.audience}</li>
                </ul>
                <ActionEvenement event={firstUpcoming} i={0} />
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ===== À VENIR + BASCULE ===== */}
      <section className="px-6 pt-4">
        <div className="max-w-5xl mx-auto flex justify-between items-end gap-6 flex-wrap">
          <div>
            <span className="section-label block mb-3">{upcomingEvents.length} date{upcomingEvents.length > 1 ? "s" : ""} au programme</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              À <span className="text-primary">venir</span>
            </h2>
            <TraitDessine className="mt-3" variant={2} />
          </div>
          <div className="flex gap-2">
            {(["list", "calendar"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                aria-pressed={view === v}
                className={`flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] px-4 py-2.5 border-brutal-thin rounded-full transition-all ${
                  view === v
                    ? "bg-foreground text-primary-foreground -rotate-2 shadow-[3px_3px_0_hsl(var(--olive))]"
                    : "bg-[hsl(var(--cream))] hover:bg-[hsl(var(--olive-light))] shadow-[2px_2px_0_hsl(var(--black))]"
                }`}
              >
                {v === "list" ? <List className="w-3.5 h-3.5" /> : <CalendarIcon className="w-3.5 h-3.5" />}
                {v === "list" ? "Liste" : "Calendrier"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LISTE ===== */}
      {view === "list" && (
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            {upcomingEvents.length === 0 && (
              <div className="border-brutal bg-[hsl(var(--cream))] shadow-brutal p-8" style={galet(0)}>
                <h3 className="font-display text-xl md:text-2xl uppercase leading-tight mb-3">Pas d'événement public programmé pour le moment</h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-5">
                  Les prochaines dates seront annoncées ici. Vous souhaitez organiser un atelier, une balade ou une conférence dans votre ville, votre
                  médiathèque ou votre structure ? N'hésitez pas à nous contacter.
                </p>
                <Link to="/contact" className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground text-xs px-6 py-3" style={BTN_A}>
                  Nous contacter <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
            <div className="space-y-12">
              {upcomingEvents.map((event, i) => (
                <AnimatedSection key={event.id} delay={(i % 3) * 80}>
                  <article
                    className={`relative bg-[hsl(var(--cream))] border-brutal shadow-brutal p-6 md:p-8 ${i % 2 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]"} hover:rotate-0 transition-transform duration-300`}
                    style={galet(i)}
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      <div className="flex md:flex-col items-center md:items-start gap-4 md:w-40 flex-shrink-0">
                        <PastilleDate date={event.parsedDate} ton={TONS_DATE[i % TONS_DATE.length]} />
                        <div className="space-y-1.5 font-mono-brand text-[10px] uppercase tracking-[1.5px] text-foreground/70">
                          {!event.parsedDate && <p className="font-display text-base normal-case tracking-normal">{event.date}</p>}
                          {event.time && (
                            <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" />{event.time}</p>
                          )}
                          {event.spots && (
                            <p className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-primary" />{event.spots}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-5">
                          <div className="flex-1 min-w-0">
                            <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/55 mb-1.5">{event.date}</p>
                            <h3 className="font-display text-xl md:text-2xl uppercase leading-tight tracking-tight mb-3">{event.name}</h3>
                            <p className="flex items-start gap-2 text-sm text-foreground/75">
                              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                              <span>
                                {event.location}
                                {eventAddress(event) && <span className="block text-[13px] text-foreground/60 mt-0.5">{eventAddress(event)}</span>}
                              </span>
                            </p>
                          </div>
                          {event.image && (
                            <a href={event.image} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 self-start" aria-label={`Affiche : ${event.name}`}>
                              <img
                                src={event.image}
                                alt={event.name}
                                loading="lazy"
                                className={`w-32 sm:w-36 aspect-[3/4] object-cover border-brutal shadow-[3px_3px_0_hsl(var(--black))] bg-white ${i % 2 ? "-rotate-3" : "rotate-3"} hover:rotate-0 transition-transform`}
                                style={galetPhoto(i)}
                              />
                            </a>
                          )}
                        </div>
                        <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{event.description}</p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <span className={`font-mono-brand text-[10px] uppercase tracking-[1.5px] border-brutal-thin rounded-full px-3 py-1.5 bg-[hsl(var(--cream))] ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                            {event.audience}
                          </span>
                          <div className="ml-auto">
                            <ActionEvenement event={event} i={i} />
                          </div>
                        </div>
                        {event.id === "fete-science-epices-versailles" && (
                          <a
                            href="https://www.versailles.fr/762-11162/culture/reseau-des-bibliotheques/agenda/fiche/fete-de-la-science-sur-la-route-des-epices.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono-brand text-[10px] uppercase tracking-[1.5px] underline underline-offset-4 text-foreground/70 hover:text-foreground inline-flex items-center gap-1.5"
                          >
                            Fiche officielle, réseau des bibliothèques de Versailles <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {event.id === "balade-ecole-du-breuil" && (
                          <a
                            href="https://www.ecoledubreuil.fr/evenement/fete-de-lecole-du-breuil-2026/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono-brand text-[10px] uppercase tracking-[1.5px] underline underline-offset-4 text-foreground/70 hover:text-foreground inline-flex items-center gap-1.5"
                          >
                            Programme officiel Du Breuil en fête 2026 <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CALENDRIER ===== */}
      {view === "calendar" && (
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="border-brutal bg-[hsl(var(--cream))] shadow-brutal overflow-hidden" style={{ borderRadius: "36px 48px 32px 52px / 48px 32px 52px 36px" }}>
              <div className="flex items-center justify-between p-4 md:p-5 bg-secondary border-b-[3px] border-foreground">
                <button
                  onClick={() => setCalMonth(new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1))}
                  className="border-brutal-thin rounded-full bg-[hsl(var(--cream))] w-10 h-10 flex items-center justify-center hover:bg-[hsl(var(--olive-light))] transition-colors"
                  aria-label="Mois précédent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight">
                  {MONTHS_FR[calMonth.getMonth()]} {calMonth.getFullYear()}
                </h3>
                <button
                  onClick={() => setCalMonth(new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1))}
                  className="border-brutal-thin rounded-full bg-[hsl(var(--cream))] w-10 h-10 flex items-center justify-center hover:bg-[hsl(var(--olive-light))] transition-colors"
                  aria-label="Mois suivant"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 border-b-[3px] border-foreground">
                {DAYS_FR.map((day) => (
                  <div key={day} className="font-mono-brand text-[10px] md:text-xs uppercase tracking-[1.5px] text-foreground/60 text-center py-3">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 p-2 gap-1.5">
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
                      className={`min-h-[72px] md:min-h-[104px] p-1.5 md:p-2 rounded-2xl ${
                        !cell.day ? "" : hasEvents ? "bg-[hsl(var(--olive-light))]/45 border-brutal-thin" : "bg-secondary/40"
                      }`}
                    >
                      {cell.day && (
                        <>
                          <div
                            className={`font-display text-sm md:text-base mb-1 inline-flex items-center justify-center w-7 h-7 ${isToday ? "bg-foreground text-primary-foreground" : ""}`}
                            style={isToday ? PASTILLE : undefined}
                          >
                            {cell.day}
                          </div>
                          <div className="space-y-1">
                            {cell.events.map((ev) => {
                              const href = ev.linkType === "internal" ? ev.internalUrl : ev.linkType === "external" ? ev.externalUrl : undefined;
                              const inner = (
                                <span className="block bg-accent text-foreground border-[2px] border-foreground rounded-full px-2 py-0.5 font-mono-brand text-[9px] md:text-[10px] uppercase tracking-tight leading-tight truncate">
                                  {ev.name.split(":")[0].split(",")[0]}
                                </span>
                              );
                              if (!href) return <span key={ev.id} className="block opacity-80" title={ev.name}>{inner}</span>;
                              if (ev.linkType === "internal")
                                return <Link key={ev.id} to={href} title={ev.name} className="block hover:-translate-y-px transition-transform">{inner}</Link>;
                              return (
                                <a key={ev.id} href={href} target="_blank" rel="noopener noreferrer" title={ev.name} className="block hover:-translate-y-px transition-transform">
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
            <p className="font-mono-brand text-[10px] uppercase tracking-[1.5px] text-foreground/50 mt-4 text-center">Cliquez sur un événement pour vous inscrire</p>
          </div>
        </section>
      )}

      {/* ===== ARCHIVES ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-8 pb-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 flex justify-between items-end gap-4 flex-wrap">
            <div>
              <span className="section-label block mb-3">Ils ont eu lieu</span>
              <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
                Événements <span className="text-primary">passés</span>
              </h2>
              <TraitDessine className="mt-3" variant={1} />
            </div>
            <span className="font-mono-brand text-[10px] uppercase tracking-[1.5px] text-foreground/60 border-brutal-thin rounded-full px-3 py-1.5 bg-[hsl(var(--cream))]">
              {archivePage * ARCHIVES_PER_PAGE + 1}–{Math.min((archivePage + 1) * ARCHIVES_PER_PAGE, pastEvents.length)} sur {pastEvents.length}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visibleArchives.map((event, i) => (
              <div
                key={event.id}
                className={`relative bg-[hsl(var(--cream))] border-brutal shadow-[4px_4px_0_hsl(var(--black))] p-6 pt-7 ${i % 2 ? "md:mt-8 rotate-[0.5deg]" : "-rotate-[0.5deg]"}`}
                style={galet(i + 1)}
              >
                <span className="inline-block font-mono-brand text-[9px] uppercase tracking-[2px] bg-secondary border-brutal-thin rounded-full px-3 py-1 mb-3">
                  {event.date}{event.time ? ` · ${event.time}` : ""}
                </span>
                <h3 className="font-display text-base md:text-lg uppercase leading-tight mb-3">{event.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{event.description}</p>
                {event.internalUrl && (
                  <Link
                    to={event.internalUrl}
                    className="inline-flex items-center gap-2 mb-4 font-mono-brand text-[10px] uppercase tracking-[1.5px] underline decoration-2 underline-offset-4 hover:text-primary transition-colors"
                  >
                    Voir la page de l'événement <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono-brand text-[10px] uppercase tracking-[1.5px] text-foreground/60">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{event.audience}</span>
                </div>
              </div>
            ))}
          </div>

          {totalArchivePages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setArchivePage((p) => Math.max(0, p - 1))}
                disabled={archivePage === 0}
                className="border-brutal-thin rounded-full bg-[hsl(var(--cream))] w-11 h-11 flex items-center justify-center hover:bg-[hsl(var(--olive-light))] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Page précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalArchivePages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setArchivePage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`border-brutal-thin w-11 h-11 font-display text-sm transition-all ${
                    archivePage === i ? "bg-foreground text-primary-foreground -rotate-6" : "bg-[hsl(var(--cream))] hover:bg-[hsl(var(--olive-light))]"
                  }`}
                  style={PASTILLE}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setArchivePage((p) => Math.min(totalArchivePages - 1, p + 1))}
                disabled={archivePage === totalArchivePages - 1}
                className="border-brutal-thin rounded-full bg-[hsl(var(--cream))] w-11 h-11 flex items-center justify-center hover:bg-[hsl(var(--olive-light))] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Page suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA SUR MESURE ===== */}
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(153,40%,30%)" flip />
      <section className="pt-8 pb-20 px-6 bg-[hsl(var(--green))] text-[hsl(var(--cream))]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>Sur mesure</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[0.95] tracking-[-1px]">
            Organiser un <span className="text-[hsl(var(--olive-light))]">atelier&nbsp;?</span>
          </h2>
          <TraitDessine className="mx-auto mt-3 mb-6" color="hsl(var(--olive-light))" variant={2} />
          <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 mb-9 max-w-xl mx-auto">
            Nous organisons des ateliers sur mesure pour les entreprises, collectivités, écoles et EHPAD partout en Île-de-France.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-7 py-3.5" style={BTN_A}>
              <Mail className="w-4 h-4" /> Nous écrire
            </Link>
            <Link to="/pro" className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5" style={BTN_B}>
              Offres professionnelles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />

      <Footer />
    </div>
  );
};

export default Agenda;
