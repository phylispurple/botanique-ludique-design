import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface InscriptionLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  description?: string;
  date: string;
  time: string;
  location: string;
  audience: string;
  pricing: ReactNode;
  children: ReactNode;
}

const InscriptionLayout = ({
  eyebrow,
  title,
  intro,
  description,
  date,
  time,
  location,
  audience,
  pricing,
  children,
}: InscriptionLayoutProps) => {
  const infos = [
    { icon: CalendarIcon, label: "Date", value: date },
    { icon: Clock, label: "Horaires", value: time },
    { icon: MapPin, label: "Lieu", value: location },
    { icon: Users, label: "Public", value: audience },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* HERO sobre */}
      <section className="pt-32 pb-12 px-4 bg-cream border-b-[3px] border-foreground">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/agenda"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[2px] text-foreground/60 hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour à l'agenda
          </Link>

          <span className="font-mono text-[11px] uppercase tracking-[2px] text-primary inline-block bg-yellow border-brutal-thin px-3 py-1 mb-5">
            {eyebrow}
          </span>

          <h1 className="font-display text-[clamp(2rem,6vw,4rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-5">
            {title}
          </h1>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            {intro}
          </p>
          {description && (
            <p className="font-body text-sm text-foreground/60 mt-3 leading-relaxed">{description}</p>
          )}
        </div>
      </section>

      {/* INFOS PRATIQUES */}
      <section className="py-10 px-4 bg-cream">
        <div className="container mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-0">
            {infos.map((info, i) => (
              <div
                key={i}
                className="border-brutal -ml-[3px] -mt-[3px] bg-cream p-5 flex items-start gap-3"
              >
                <info.icon className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/50 block mb-1">
                    {info.label}
                  </span>
                  <span className="font-display text-sm uppercase tracking-tight leading-tight">
                    {info.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-6 px-4 bg-cream">
        <div className="container mx-auto max-w-3xl">
          <div className="border-brutal bg-green-pale p-6">
            <span className="font-mono text-[11px] uppercase tracking-[2px] text-foreground/70 block mb-3">
              Tarif & Matériel
            </span>
            {pricing}
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="py-10 px-4 pb-20 bg-cream">
        <div className="container mx-auto max-w-3xl">
          <div className="border-brutal bg-cream p-6 md:p-10 shadow-brutal">
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-tight mb-8 pb-4 border-b-[3px] border-foreground">
              Formulaire d'inscription
            </h2>
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InscriptionLayout;
