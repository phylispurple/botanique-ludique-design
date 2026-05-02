import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Calendar, Quote } from "lucide-react";

const ReferencesCollectivites = () => {
  // Études de cas (placeholders à compléter avec photos et détails réels)
  const caseStudies = [
    {
      structure: "CCAS de Bezons",
      department: "Val-d'Oise (95)",
      event: "Atelier seniors, semaine de la fragilité",
      participants: "24 personnes",
      format: "Atelier kokedama 2h, en résidence autonomie",
      result: "Convention reconduite, intégration au programme annuel d'animation senior."
    },
    {
      structure: "Mairie de Maurepas",
      department: "Yvelines (78)",
      event: "Fête de la Nature 2025",
      participants: "120 personnes sur la journée",
      format: "Stand bombes à graines et balade botanique en boucle continue",
      result: "Animation reconduite pour 2026, intégration au calendrier des évènements municipaux."
    },
    {
      structure: "Médiathèque municipale",
      department: "Île-de-France",
      event: "Cycle de programmation jeunesse",
      participants: "3 séances de 15 enfants",
      format: "Heure du conte botanique et atelier terrarium",
      result: "Programmation pérennisée sur l'année, public fidélisé."
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Références collectivités, mairies et CCAS, animations nature"
        description="Mairies, CCAS, médiathèques et EHPAD publics qui nous font confiance en Île-de-France. Études de cas, témoignages d'élus et chiffres clés des animations botaniques réalisées."
        keywords="référence animation collectivité, mairie partenaire botanique ludique, CCAS animation nature, médiathèque atelier botanique, étude de cas collectivité IDF"
        canonical="/references-collectivites"
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Pro", url: "https://botaniqueludique.com/pro" },
          { name: "Références collectivités", url: "https://botaniqueludique.com/references-collectivites" }
        ]}}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-[120px] border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
              Références
            </span>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Collectivités<br />qui nous font confiance
            </h1>
            <p className="font-body text-lg md:text-xl text-[hsl(var(--black))]/75 max-w-3xl leading-relaxed">
              Depuis plusieurs années, nous accompagnons mairies, CCAS, médiathèques, EHPAD publics et services culturels d'Île-de-France
              pour des animations botaniques sur mesure. Voici quelques exemples de partenariats.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] bg-white border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "4", label: "Départements IDF" },
              { number: "30+", label: "Interventions publiques" },
              { number: "1500+", label: "Participants accueillis" },
              { number: "100%", label: "Conventions reconduites" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border-[3px] border-[hsl(var(--black))] p-6 text-center bg-[hsl(var(--cream))]">
                  <p className="font-display text-5xl md:text-6xl text-[hsl(var(--black))] mb-2">{stat.number}</p>
                  <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Logos partenaires */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-10">
              Ils nous ont fait confiance
            </h2>
          </AnimatedSection>
          {/* Placeholder pour logos. À remplacer par les vrais logos quand disponibles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "CCAS de Bezons",
              "Mairie de Maurepas",
              "Médiathèque",
              "Association Aurore",
              "EHPAD public",
              "Centre social",
              "MJC partenaire",
              "Service culturel",
            ].map((name, i) => (
              <AnimatedSection key={i} delay={i * 40}>
                <div className="border-[3px] border-[hsl(var(--black))] aspect-[3/2] flex items-center justify-center p-4 bg-white text-center">
                  <p className="font-mono-brand text-xs uppercase tracking-[1px] text-[hsl(var(--black))]/70">{name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <p className="mt-8 font-body text-sm text-[hsl(var(--black))]/60 italic">
              Liste non exhaustive. Logos affichés avec autorisation des structures partenaires.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] bg-white border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">
              Études de cas
            </h2>
            <p className="font-body text-lg text-[hsl(var(--black))]/75 mb-12 max-w-3xl">
              Quelques exemples concrets d'interventions, leur format, leur public et leurs résultats.
            </p>
          </AnimatedSection>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <article className="border-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-2">
                        {cs.structure}
                      </h3>
                      <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> {cs.department}
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-1">Évènement</p>
                      <p className="font-body text-base text-[hsl(var(--black))]">{cs.event}</p>
                    </div>
                    <div>
                      <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-1">Participants</p>
                      <p className="font-body text-base text-[hsl(var(--black))]">{cs.participants}</p>
                    </div>
                    <div>
                      <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-1">Format</p>
                      <p className="font-body text-base text-[hsl(var(--black))]">{cs.format}</p>
                    </div>
                    <div>
                      <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-1">Résultat</p>
                      <p className="font-body text-base text-[hsl(var(--black))]">{cs.result}</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-12">
              Paroles d'élus et de partenaires
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Une intervention rigoureuse, parfaitement adaptée à notre public senior. La médiatrice a su tisser des liens entre la pratique manuelle et la mémoire végétale des participants.",
                name: "Responsable d'animation",
                role: "Résidence autonomie, Val-d'Oise",
              },
              {
                quote: "Le stand a été un succès toute la journée. Les familles sont revenues, les enfants repartaient avec leurs créations. Un vrai moment de lien social autour du végétal.",
                name: "Service culturel municipal",
                role: "Mairie d'Île-de-France",
              },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="border-[3px] border-[hsl(var(--black))] p-8 bg-white h-full">
                  <Quote className="w-8 h-8 text-[hsl(var(--olive))] mb-4" strokeWidth={1.5} />
                  <p className="font-body text-base md:text-lg text-[hsl(var(--black))]/85 italic leading-relaxed mb-6">
                    {t.quote}
                  </p>
                  <div className="border-t-[3px] border-[hsl(var(--black))] pt-4">
                    <p className="font-display text-base uppercase tracking-[-0.5px] text-[hsl(var(--black))]">{t.name}</p>
                    <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mt-1">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] bg-white border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-10">
              Notre zone d'intervention
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { dept: "Paris (75)", link: "/animation-botanique-paris" },
              { dept: "Yvelines (78)", link: "/animation-botanique-yvelines" },
              { dept: "Hauts-de-Seine (92)", link: "/animation-botanique-hauts-de-seine" },
              { dept: "Val-d'Oise (95)", link: "/animation-botanique-val-d-oise" },
            ].map((d, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <Link to={d.link} className="block border-[3px] border-[hsl(var(--black))] p-6 bg-[hsl(var(--cream))] hover:bg-[hsl(var(--sage))]/30 transition-colors">
                  <MapPin className="w-6 h-6 text-[hsl(var(--olive))] mb-3" strokeWidth={1.5} />
                  <p className="font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))]">{d.dept}</p>
                  <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mt-2">Voir les animations</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--black))]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-[-1px] text-[hsl(var(--cream))] mb-6">
              Devenez la prochaine collectivité partenaire
            </h2>
            <p className="font-body text-lg text-[hsl(var(--cream))]/80 mb-10 max-w-2xl mx-auto">
              Parlons de votre évènement, de votre public et de vos contraintes. Nous construisons ensemble une animation sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-[hsl(var(--black))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--cream))] hover:bg-transparent hover:text-[hsl(var(--cream))] transition-colors"
              >
                Nous écrire <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/marches-publics"
                className="inline-flex items-center gap-2 bg-transparent text-[hsl(var(--cream))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] transition-colors"
              >
                Marchés publics
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ReferencesCollectivites;
