import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { PenLine, CalendarDays, Lock, Sprout } from "lucide-react";

const cards = [
{
  icon: PenLine,
  title: "Adhésion en ligne",
  desc: "L'adhésion est incluse dans le tarif de votre première activité, ou gratuite sur simple inscription. Elle vous donne accès aux tarifs préférentiels, à la programmation en avant-première et aux événements réservés aux membres.",
  linkText: "À venir",
  disabled: true
},
{
  icon: CalendarDays,
  title: "Agenda & Événements",
  desc: "Balades botaniques, sorties nature, ateliers ouverts, conférences, projections, concerts autour des musiques et pratiques culturelles liés au monde végétal.",
  linkText: "À venir",
  disabled: true
},
{
  icon: Lock,
  title: "Espace Membres",
  desc: "Ressources réservées : comptes-rendus, photos des sorties, fiches botaniques, documents de l'association. Un espace d'échange pour proposer des projets.",
  linkText: "À venir",
  disabled: true
},
{
  icon: Sprout,
  title: "Notre Mission",
  desc: "Financer l'intervention de chercheurs et artistes méconnus, organiser des événements culturels et scientifiques, produire des contenus de sensibilisation accessibles à tous.",
  linkText: "",
  disabled: true
}];


const bureau = [
{ name: "Vanessa Charlery", role: "Présidente" },
{ name: "Benjamin Riou", role: "Secrétaire" }];


const Association = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="L'Association — Botanique Ludique"
        description="Botanique Ludique est une association loi 1901 de médiation culturelle et scientifique autour du vivant. Ateliers, conférences, balades botaniques. Le Pecq (78), Paris, Île-de-France."
        canonical="/association"
        keywords="association botanique, médiation scientifique, ethnobotanique, ateliers nature, Le Pecq, Paris, Île-de-France" />
      
      <SchemaOrg
        type="Organization"
        data={{
          "@type": "Organization",
          "name": "Botanique Ludique",
          "description": "Association loi 1901 de médiation culturelle et scientifique autour du vivant"
        }} />
      

      <Navigation />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-[120px]" style={{ background: 'hsl(0 0% 10%)' }}>
        <div className="max-w-4xl">
          <AnimatedSection>
            <span className="section-label block mb-5 text-white/50">
              Association loi 1901 · Le Pecq (78230)
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8" style={{ color: 'hsl(36 33% 93%)' }}>
              Soutenir la recherche<br />
              <span style={{ color: 'hsl(73 44% 67%)' }}>& les savoirs</span><br />
              méconnus
            </h1>
            <p className="text-lg md:text-xl font-body leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
              L'association Botanique Ludique a une vocation distincte des ateliers : financer et rémunérer des chercheurs, artistes et praticiens dont les disciplines restent trop souvent inaccessibles ou invisibilisées.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Notre raison d'être */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] border-t border-foreground/10">
        <div className="max-w-5xl">
          <AnimatedSection>
            <span className="section-label block mb-4">Notre raison d'être</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[0.95] mb-10">
              Mettre en lumière<br />des savoirs méconnus
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-base font-body leading-relaxed" style={{ color: 'hsl(0 0% 35%)' }}>
                <p className="text-justify">L'objectif principal de l'association Botanique Ludique est de financer et organiser l'intervention de chercheurs, artistes et praticiens, parfois méconnus du grand public, afin de mettre en avant leurs savoirs et leurs disciplines. Ethnobotanistes, anthropologues, teinturiers, musiciens, artisans du végétal : autant de voix que nous souhaitons faire entendre.

                </p>
                <p className="text-justify">
                  Pour cela, l'association organise des ateliers, des conférences, des événements culturels et artistiques ouverts à tous. Chaque rendez-vous est une occasion de croiser les regards entre sciences du vivant, sciences humaines et pratiques créatives, et de rendre ces savoirs accessibles au plus grand nombre.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-6 text-base font-body leading-relaxed" style={{ color: 'hsl(0 0% 35%)' }}>
                <p className="text-justify">
                  En soutenant ces intervenants, nous contribuons à la reconnaissance de disciplines souvent invisibilisées et à la transmission de connaissances précieuses sur les relations entre les humains et le monde végétal, d'ici et d'ailleurs.
                </p>
                {/* Bureau */}
                <div className="pt-6 border-t border-foreground/10">
                  <span className="font-mono-brand text-[10px] uppercase tracking-[3px] block mb-4" style={{ color: 'hsl(0 0% 55%)' }}>
                    Bureau de l'association
                  </span>
                  <div className="flex flex-wrap gap-8">
                    {bureau.map((member, idx) =>
                    <div key={idx} className="flex flex-col">
                        <strong className="font-display text-sm uppercase">
                          {member.name}
                        </strong>
                        <span className="font-mono-brand text-[10px] uppercase tracking-[1px]" style={{ color: 'hsl(0 0% 55%)' }}>
                          {member.role}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 md:px-16 lg:px-[120px] py-20" style={{ background: 'hsl(0 0% 10%)' }}>
        <AnimatedSection>
          <span className="section-label block mb-4 text-white/50">Vie associative</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-12">
            Rejoindre l'association
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-0">
          {cards.map((card, idx) =>
          <AnimatedSection key={idx} delay={idx * 100} className="h-full">
              <div className="h-full p-10 md:p-12 border border-white/[0.12] -mt-px -ml-px transition-colors duration-300 hover:bg-white/[0.06] group flex flex-col">
                <card.icon className="w-7 h-7 text-[hsl(73_44%_67%)] mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-xl uppercase mb-3 text-white leading-[1.1]">
                  {card.title}
                </h3>
                <p className="text-sm leading-[1.7] text-white/65 text-justify flex-1">
                  {card.desc}
                </p>
                {card.disabled ?
              card.linkText &&
              <span className="inline-flex items-center mt-5 font-mono-brand text-[10px] uppercase tracking-[2px] text-white/30">
                      {card.linkText}
                    </span> :

              null}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA bar */}
      <div className="bg-[hsl(73_37%_44%)] py-8 px-6 md:px-16 lg:px-[120px] flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <h3 className="font-display text-xl md:text-2xl uppercase text-white">
            Envie de nous rejoindre ?
          </h3>
          <p className="text-sm text-white/70 mt-1">
            Bénévoles, partenaires, curieux : discutons de votre projet.
          </p>
        </div>
        <Link
          to="/contact"
          className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--black))] text-sm px-9 py-4 flex-shrink-0">
          
          Nous contacter →
        </Link>
      </div>

      <Footer />
    </div>);

};

export default Association;