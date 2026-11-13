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
import heroAgenda from "@/assets/gallery-atelier-epices-table.webp";
import {
  splitEvents,
  eventAddress,
  type UpcomingEvent,
  type PastEvent,
} from "@/data/agendaEvents";

const MONTHS_FR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const ARCHIVES_PER_PAGE = 4;
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
    <div className="min-h-screen bg-cream">
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

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroAgenda} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Ateliers · Balades · Rencontres
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Prochains<br />
              <span className="text-olive-light">événements</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[650px] mx-auto leading-relaxed">
              Ateliers, stages et balades botaniques partout en Île-de-France. Inscrivez-vous pour partager un moment avec le vivant.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* TOGGLE VUE */}
      <section className="pt-6 px-4 bg-cream">
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
                view === "list" ? "bg-foreground text-primary-foreground" : "bg-cream hover:bg-[hsl(var(--green-pale))]"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              Liste
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`flex items-center gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[1.5px] transition-colors ${
                view === "calendar" ? "bg-foreground text-primary-foreground" : "bg-cream hover:bg-[hsl(var(--green-pale))]"
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
            {upcomingEvents.length === 0 && (
              <div className="border-brutal bg-green-pale shadow-brutal p-8">
                <h3 className="font-display text-xl md:text-2xl uppercase leading-tight tracking-tight mb-3">
                  Pas d'événement public programmé pour le moment
                </h3>
                <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed mb-5">
                  Les prochaines dates seront annoncées ici. Vous souhaitez organiser un atelier, une balade ou une
                  conférence dans votre ville, votre médiathèque ou votre structure ? N'hésitez pas à nous contacter.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-foreground text-primary-foreground border-brutal shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  Nous contacter
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
            <div className="space-y-0">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="border-brutal bg-cream -mt-[3px] hover:-translate-y-1 hover:shadow-brutal transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`md:w-56 shrink-0 bg-secondary border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground p-6 flex flex-col justify-center`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/60 mb-2">Date</span>
                      <span className="font-display text-lg uppercase leading-tight tracking-tight">{event.date}</span>
                      {event.time && (
                        <span className="font-mono text-xs uppercase tracking-[1.5px] text-foreground/70 mt-3 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                      )}
                      <span className="font-mono text-xs uppercase tracking-[1.5px] text-foreground/80 mt-3 flex items-start gap-1.5 leading-snug">
                        <MapPin className="w-3.5 h-3.5 mt-[1px] shrink-0 text-primary" />
                        <span>
                          {event.location}
                          {eventAddress(event) && (
                            <span className="block normal-case tracking-normal font-body text-[13px] text-foreground/65 mt-1">
                              {eventAddress(event)}
                            </span>
                          )}
                        </span>
                      </span>
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
                            className="ml-auto inline-flex items-center gap-2 bg-primary text-primary-foreground border-brutal shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
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
                            {event.buttonLabel || "Inscription à venir"}
                          </span>
                        )}
                        {event.linkType === "soldOut" && (
                          <span className="ml-auto inline-flex items-center gap-2 bg-foreground text-primary-foreground border-brutal shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide cursor-not-allowed">
                            Complet
                          </span>
                        )}
                      </div>

                      {event.id === "fete-science-epices-versailles" && (
                        <a
                          href="https://www.versailles.fr/762-11162/culture/reseau-des-bibliotheques/agenda/fiche/fete-de-la-science-sur-la-route-des-epices.htm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] uppercase tracking-[1.5px] underline underline-offset-4 text-foreground/70 hover:text-foreground inline-flex items-center gap-1.5"
                        >
                          Fiche officielle, réseau des bibliothèques de Versailles
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

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
              <div className="flex items-center justify-between border-b-[3px] border-foreground p-4 bg-secondary">
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
                                <span className="block bg-primary text-primary-foreground border-[2px] border-foreground px-1.5 py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-tight leading-tight truncate">
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


      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      {/* ARCHIVES */}
      <section className="pt-10 pb-20 px-4 bg-secondary">
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
                {event.internalUrl && (
                  <Link
                    to={event.internalUrl}
                    className="inline-flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[1.5px] underline decoration-[2px] underline-offset-2 decoration-primary hover:text-primary transition-colors"
                  >
                    Voir la page de l'événement
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
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
                    archivePage === i ? "bg-foreground text-primary-foreground" : "bg-cream hover:bg-[hsl(var(--green-pale))]"
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

      <WaveDivider from="hsl(36,25%,88%)" to="hsl(0,0%,10%)" flip />
      {/* CTA SUR MESURE */}
      <section className="pt-10 pb-24 px-4 bg-foreground text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="container mx-auto max-w-4xl text-center relative">
          <span className="font-mono text-xs uppercase tracking-[2px] text-olive-light">/ Sur mesure</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2 mb-6">
            Organiser un<br />
            <span className="text-olive-light">atelier&nbsp;?</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Nous organisons des ateliers sur mesure pour les entreprises, collectivités, écoles et EHPAD partout en Île-de-France.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
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

      <Footer />
    </div>
  );
};

export default Agenda;
