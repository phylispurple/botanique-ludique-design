import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TraitDessine from "@/components/TraitDessine";
import { splitEvents, type UpcomingEvent } from "@/data/agendaEvents";

/**
 * Les 3 prochains ateliers de l'agenda, sur l'accueil.
 * Lus dans src/data/agendaEvents.ts : un atelier passé disparaît tout seul.
 */
const MOIS = ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

const LOOKS = [
  { radius: "34px 58px 30px 54px / 54px 30px 58px 34px", tilt: "-rotate-1", date: "bg-accent" },
  { radius: "58px 30px 56px 34px / 30px 56px 34px 58px", tilt: "rotate-1", date: "bg-[hsl(var(--olive-light))]" },
  { radius: "40px 54px 34px 60px / 60px 36px 54px 40px", tilt: "-rotate-[0.6deg]", date: "bg-[hsl(var(--green))] text-[hsl(var(--cream))]" },
];

const Action = ({ ev }: { ev: UpcomingEvent }) => {
  const cls =
    "inline-block font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary";
  if (ev.linkType === "internal") return <Link to={ev.internalUrl} className={cls}>{ev.buttonLabel ?? "En savoir plus"} →</Link>;
  if (ev.linkType === "external")
    return (
      <a href={ev.externalUrl} target={ev.externalUrl.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
        {ev.buttonLabel ?? "Infos & réservation"} →
      </a>
    );
  if (ev.linkType === "soldOut") return <span className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/50">Complet</span>;
  return <span className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/60">{ev.buttonLabel ?? "Inscription à venir"}</span>;
};

const ProchainsAteliers = () => {
  const events = useMemo(() => splitEvents(new Date()).upcomingEvents.slice(0, 3), []);
  if (events.length === 0) return null;

  return (
    <section className="px-6 py-16 md:py-24" aria-labelledby="prochains-ateliers">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="section-label block mb-3">Agenda</span>
            <h2 id="prochains-ateliers" className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              Prochains<br /><span className="md:ml-16">ateliers</span>
            </h2>
            <TraitDessine className="mt-3 md:ml-16" variant={1} />
          </div>
          <Link
            to="/agenda"
            className="self-start md:self-end btn-brutal rounded-full bg-transparent text-foreground border-foreground text-xs px-6 py-3 whitespace-nowrap"
          >
            Tout l'agenda →
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {events.map((ev, i) => {
            const look = LOOKS[i % LOOKS.length];
            const day = ev.parsedDate?.getDate();
            const month = ev.parsedDate ? MOIS[ev.parsedDate.getMonth()] : "";
            return (
              <AnimatedSection key={ev.id} delay={i * 120} className={i === 1 ? "md:mt-10" : ""}>
                <article
                  className={`relative bg-[hsl(var(--cream))] border-brutal shadow-brutal p-6 md:p-7 pt-10 ${look.tilt} hover:rotate-0 transition-transform duration-300`}
                  style={{ borderRadius: look.radius }}
                >
                  {day && (
                    <div
                      className={`absolute -top-8 right-6 w-[72px] h-[72px] flex flex-col items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${look.date}`}
                      style={{ borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%" }}
                    >
                      <span className="font-display text-2xl leading-none">{day}</span>
                      <span className="font-mono-brand text-[10px] uppercase tracking-[1px]">{month}</span>
                    </div>
                  )}
                  <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/55 mb-2 pr-20">{ev.date}</p>
                  <h3 className="font-display text-lg uppercase leading-tight mb-4 pr-16">{ev.name}</h3>
                  <ul className="space-y-1.5 text-sm text-foreground/75 mb-5">
                    <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />{ev.time}</li>
                    <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />{ev.location}</li>
                    <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />{ev.audience}</li>
                  </ul>
                  <Action ev={ev} />
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProchainsAteliers;
