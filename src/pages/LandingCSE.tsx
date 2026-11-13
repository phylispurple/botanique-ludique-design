import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import PhotoCarousel from "@/components/PhotoCarousel";
import { EVENT_PHOTO, EVENT_PHOTOS } from "@/data/eventPhotos";
import { SEO } from "@/components/SEO";
import { galet, PASTILLE } from "@/lib/organic";
import { Building2, Users, Gift, Leaf, Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const LandingCSE = () => {
  const advantages = [
    { icon: Gift, title: "Activité originale", description: "Animation nature créative que vos salariés n'oublieront pas." },
    { icon: Leaf, title: "Démarche RSE", description: "Activité éco-responsable alignée avec vos engagements." },
    { icon: Users, title: "Cohésion d'équipe", description: "Favorise les échanges dans une ambiance détendue." },
    { icon: CheckCircle, title: "Clé en main", description: "Animation complète avec tout le matériel fourni." }
  ];

  const workshops = [
    { title: "Kokedama d'équipe", price: "Sur devis", duration: "2h", participants: "À partir de 8 participants" },
    { title: "Terrarium collectif", price: "Sur devis", duration: "1h30", participants: "À partir de 8 participants" },
    { title: "Teinture végétale", price: "Sur devis", duration: "2h30", participants: "À partir de 8 participants" },
    { title: "Bombes à graines", price: "Sur devis", duration: "1h30", participants: "À partir de 8 participants" }
  ];

  const tons = ["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(var(--cream))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]"];
  const tilts = ["-rotate-1", "rotate-1", "-rotate-[0.6deg]", "rotate-[0.8deg]"];

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <SEO title="Animation CSE & Comité d'Entreprise - Ateliers Nature" description="Animations botaniques pour CSE partout en Île-de-France, dans vos locaux ou en extérieur. Ateliers nature créatifs. Devis gratuit sous 24h." keywords="animation cse, atelier comité entreprise, activité cse nature, team building cse paris, animation cse val d'oise" canonical="/animation-cse-entreprise" />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-32 pb-28 md:pt-40 md:pb-36">
        <div className="absolute inset-0 bg-foreground">
          <img src={EVENT_PHOTO.terrariumTable} alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 to-foreground/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--cream))] text-foreground border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--olive))]">
              <Building2 className="w-4 h-4" />Activités pour Comités d'Entreprise
            </span>
            <h1 className="font-display text-[clamp(2.4rem,6.5vw,5rem)] uppercase leading-[0.92] tracking-[-2px] text-primary-foreground mb-4">
              Animations Nature pour <span className="text-olive-light">CSE & CE</span>
            </h1>
            <TraitDessine className="mx-auto mb-7" color="hsl(var(--olive-light))" />
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto mb-10 leading-relaxed">
              Plus qu'un atelier créatif : une approche ethnobotanique qui explore les relations humains-plantes à travers la création artistique. Des ateliers originaux et porteurs de sens pour vos salariés.
            </p>
            <Link
              to="/contact"
              className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-accent -rotate-1 hover:rotate-0 px-8 py-3.5"
              style={{ borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" }}
            >
              Devis gratuit sous 24h <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-16 md:h-24" aria-hidden="true">
          <path d="M0,120 C240,40 480,20 720,50 C960,80 1200,30 1440,120 L1440,120 L0,120 Z" fill="hsl(var(--cream))" />
        </svg>
      </section>

      {/* ===== POURQUOI ===== */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">Pourquoi choisir un atelier nature ?</h2>
            <TraitDessine className="mx-auto mt-3" variant={1} />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {advantages.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 100}>
                <div className={`h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 text-center ${tilts[i]} hover:rotate-0 transition-transform duration-300`} style={galet(i)}>
                  <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center border-brutal ${tons[i]}`} style={PASTILLE}>
                    <a.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-lg uppercase leading-tight mb-2">{a.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{a.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />

      {/* ===== PHOTOS ===== */}
      <section className="bg-secondary pt-6 pb-4">
        <PhotoCarousel organic images={EVENT_PHOTOS} />
      </section>

      {/* ===== ATELIERS ===== */}
      <section className="bg-secondary px-6 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">Nos ateliers pour CSE</h2>
            <TraitDessine className="mx-auto mt-3" variant={2} />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-7">
            {workshops.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 100} className={i % 2 === 1 ? "md:mt-8" : ""}>
                <div className="bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7" style={galet(i + 1)}>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-display text-xl uppercase leading-tight">{w.title}</h3>
                    <span className="flex-shrink-0 font-mono-brand text-[10px] uppercase tracking-[1.5px] bg-[hsl(var(--olive-light))] border-brutal-thin rounded-full px-3 py-1.5 rotate-2">{w.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full border-brutal-thin px-3 py-1"><Clock className="w-4 h-4 text-primary" />{w.duration}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border-brutal-thin px-3 py-1"><Users className="w-4 h-4 text-primary" />{w.participants}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== ZONE ===== */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">Zone d'intervention</h2>
          <TraitDessine className="mx-auto mt-3 mb-10" />
          <div className="flex flex-wrap justify-center gap-3">
            {["Paris", "La Défense", "Hauts-de-Seine (92)", "Yvelines (78)", "Val-d'Oise (95)", "Nanterre", "Boulogne-Billancourt", "Cergy"].map((city, i) => (
              <span key={city} className={`inline-flex items-center gap-1.5 bg-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 text-sm shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <MapPin className="w-3.5 h-3.5 text-primary" />{city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">Prêt à proposer une activité originale ?</h2>
          <TraitDessine className="mx-auto mt-3 mb-9" color="hsl(var(--olive-light))" variant={1} />
          <Link
            to="/contact"
            className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-accent rotate-1 hover:rotate-0 px-8 py-3.5"
            style={{ borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" }}
          >
            Demander un devis gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />

      <Footer />
    </div>
  );
};

export default LandingCSE;
