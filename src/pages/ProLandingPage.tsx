import { useLocation, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import SocialProofBar from "@/components/SocialProofBar";
import { CheckCircle, Briefcase, ArrowRight } from "lucide-react";
import { findProLanding } from "@/data/proLandings";
import { PRO_LANDING_CONTEXT } from "@/data/proLandingsContext";

// Ateliers phares mis en avant sur toutes les landings (terrarium en tête,
// formats qui plaisent le plus selon les retours clients).
import terrariumImg from "@/assets/gallery-terrarium.jpg";
import kokedamaImg from "@/assets/gallery-kokedama-garden.jpg";
import teintureImg from "@/assets/gallery-teinture-1.jpg";

const FEATURED_WORKSHOPS = [
  {
    title: "Atelier Terrarium",
    blurb:
      "Le format chouchou : Wardian Case, plantes voyageuses, écosystème miniature à emporter.",
    image: terrariumImg,
    to: "/atelier-terrarium-paris",
    tag: "Plébiscité",
  },
  {
    title: "Atelier Kokedama",
    blurb:
      "Sphère de mousse japonaise, plante vivante. Format court, fort impact visuel.",
    image: kokedamaImg,
    to: "/atelier-kokedama-paris",
    tag: "Best-seller",
  },
  {
    title: "Teinture végétale",
    blurb:
      "Chimie des pigments, histoire politique des couleurs, tote bag teint à emporter.",
    image: teintureImg,
    to: "/atelier-teinture-vegetale",
    tag: "Signature",
  },
];

const ProLandingPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  const config = slug ? findProLanding(slug) : undefined;

  if (!config) {
    return <Navigate to="/pro" replace />;
  }

  const {
    title,
    metaDescription,
    keywords,
    h1,
    h1Highlight,
    tagline,
    intro,
    benefits,
    formats,
    faq,
    testimonial,
    city,
    ctaTitle,
    ctaText,
    heroImage,
    gallery,
    partners,
    relatedWorkshops,
  } = config;

  const h1Parts = h1Highlight ? h1.split(h1Highlight) : null;
  const context = PRO_LANDING_CONTEXT[config.slug];

  return (
    <div className="min-h-screen relative bg-cream">
      <SEO
        title={title}
        description={metaDescription}
        keywords={keywords}
        canonical={`/${config.slug}`}
        city={city}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: h1,
          name: title,
          description: metaDescription,
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: faq }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-28 pb-20">
        {/* Hero */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 border-brutal-thin bg-yellow px-3 py-1 font-mono text-[10px] uppercase tracking-[2px] font-bold mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              Offre Pro · {city}
            </span>
            <h1 className="font-display uppercase leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
              {h1Parts ? (
                <>
                  {h1Parts[0]}
                  <span className="bg-sage text-cream px-2 inline-block">{h1Highlight}</span>
                  {h1Parts[1]}
                </>
              ) : (
                h1
              )}
            </h1>
            <p className="font-mono text-xs uppercase tracking-[3px] text-foreground/70 mb-6">
              {tagline}
            </p>
            <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed max-w-3xl mx-auto">
              {intro}
            </p>
          </div>

          {heroImage && (
            <div className="max-w-5xl mx-auto mb-16 border-brutal shadow-brutal-lg overflow-hidden bg-cream">
              <img
                src={heroImage}
                alt={h1}
                loading="eager"
                className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover"
              />
            </div>
          )}
        </div>

        {/* Social proof bar */}
        <SocialProofBar quote={testimonial} />

        {/* Benefits */}
        <div className="container mx-auto px-4 md:px-6 mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display uppercase text-3xl md:text-4xl mb-10 text-center text-foreground">
              Pourquoi nos ateliers fonctionnent
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="bg-cream border-brutal shadow-brutal p-6 flex flex-col h-full"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[2px] font-bold text-sage mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-display uppercase text-lg mb-2 text-foreground leading-tight">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Unique editorial context (anti thin-content) */}
            {context && (
              <article className="bg-white border-brutal shadow-brutal p-8 md:p-10 mb-20 max-w-4xl mx-auto">
                <h2 className="font-display uppercase text-2xl md:text-3xl mb-6 text-foreground leading-tight">
                  {context.heading}
                </h2>
                <div className="space-y-5">
                  {context.paragraphs.map((p, i) => (
                    <p key={i} className="font-body text-foreground/85 leading-relaxed text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            )}

            {/* Formats */}
            <h2 className="font-display uppercase text-3xl md:text-4xl mb-10 text-center text-foreground">
              Formats disponibles
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-20">
              {formats.map((f) => (
                <div key={f.title} className="bg-sand border-brutal shadow-brutal p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display uppercase text-base text-foreground leading-tight">
                      {f.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[2px] font-bold text-sage flex-shrink-0 border-brutal-thin bg-cream px-2 py-1">
                      {f.duration}
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Ateliers phares — terrarium en tête, présent sur toutes les landings */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[3px] font-bold text-sage block mb-3">
                  Nos ateliers qui marchent le mieux
                </span>
                <h2 className="font-display uppercase text-3xl md:text-4xl text-foreground">
                  Découvrez nos formats phares
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {FEATURED_WORKSHOPS.map((w) => (
                  <Link
                    key={w.to}
                    to={w.to}
                    className="group block bg-cream border-brutal shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground relative">
                      <img
                        src={w.image}
                        alt={w.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[2px] font-bold bg-yellow border-brutal-thin px-2 py-1">
                        {w.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display uppercase text-lg mb-2 text-foreground leading-tight">
                        {w.title}
                      </h3>
                      <p className="font-body text-sm text-foreground/80 leading-relaxed mb-3">
                        {w.blurb}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[2px] font-bold text-sage">
                        Voir l'atelier <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Explorer : liens permanents vers Workshops + Gallery */}
            <div className="grid sm:grid-cols-2 gap-5 mb-20">
              <Link
                to="/workshops"
                className="group block bg-sage text-cream border-brutal shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all p-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[3px] font-bold opacity-80 block mb-3">
                  Catalogue complet
                </span>
                <h3 className="font-display uppercase text-2xl md:text-3xl mb-3 leading-tight">
                  Tous nos ateliers
                </h3>
                <p className="font-body text-sm opacity-90 mb-4 leading-relaxed">
                  Terrarium, kokedama, teinture végétale, balade ethnobotanique, kombucha, fresque
                  végétale, herbier participatif et plus encore.
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[2px] font-bold">
                  Voir le catalogue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/gallery"
                className="group block bg-terracotta text-cream border-brutal shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all p-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[3px] font-bold opacity-80 block mb-3">
                  Photos réelles
                </span>
                <h3 className="font-display uppercase text-2xl md:text-3xl mb-3 leading-tight">
                  La galerie
                </h3>
                <p className="font-body text-sm opacity-90 mb-4 leading-relaxed">
                  Voyez à quoi ressemblent vraiment nos ateliers : photos d'événements entreprises,
                  collectivités, écoles, particuliers en Île-de-France.
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[2px] font-bold">
                  Ouvrir la galerie <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Practical */}
            <div className="bg-white border-brutal shadow-brutal p-8 mb-20">
              <h2 className="font-display uppercase text-2xl mb-6 text-foreground">
                Ce qui est inclus
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Matériel intégral fourni",
                  "Animatrice expérimentée sur place",
                  "Installation et démontage gérés",
                  "Photos de l'événement transmises",
                  "Devis détaillé sous 48h",
                  "Facturation entreprise standard",
                  "Bilan post-événement",
                  "Adapté à vos contraintes site",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/85 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-display uppercase text-3xl md:text-4xl mb-8 text-center text-foreground">
              Questions fréquentes
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto mb-20">
              {faq.map((f) => (
                <div key={f.question} className="bg-cream border-brutal shadow-brutal p-6">
                  <h3 className="font-display uppercase text-base md:text-lg text-foreground mb-2 leading-tight">
                    {f.question}
                  </h3>
                  <p className="font-body text-foreground/80 leading-relaxed text-sm">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Gallery (photos issues d'événements précédents) */}
            {gallery && gallery.length > 0 && (
              <div className="mb-20">
                <h2 className="font-display uppercase text-3xl md:text-4xl mb-8 text-center text-foreground">
                  En images
                </h2>
                <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
                  {gallery.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden border-brutal shadow-brutal"
                    >
                      <img
                        src={src}
                        alt={`${h1} — photo ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[2px] font-bold text-foreground border-b-2 border-foreground hover:text-sage hover:border-sage transition-colors"
                  >
                    Voir toute la galerie <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Partenaires */}
            {partners && partners.length > 0 && (
              <div className="bg-sand border-brutal shadow-brutal p-8 mb-20 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[3px] font-bold text-sage mb-4">
                  Ils nous ont fait confiance
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {partners.map((p) => (
                    <span
                      key={p}
                      className="px-4 py-2 bg-cream border-brutal-thin font-mono text-xs uppercase tracking-[1px] font-bold text-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Ateliers liés (maillage interne SEO) */}
            {relatedWorkshops && relatedWorkshops.length > 0 && (
              <div className="bg-white border-brutal shadow-brutal p-8 mb-20">
                <h2 className="font-display uppercase text-2xl mb-6 text-center text-foreground">
                  Ateliers et formats liés
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {relatedWorkshops.map((w) => (
                    <Link
                      key={w.path}
                      to={w.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream border-brutal-thin font-mono text-xs uppercase tracking-[1px] font-bold text-foreground hover:bg-yellow transition-colors"
                    >
                      {w.label} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-foreground text-cream border-brutal shadow-brutal-lg p-8 md:p-12 text-center">
              <h2 className="font-display uppercase text-3xl md:text-4xl mb-4 leading-tight">
                {ctaTitle}
              </h2>
              <p className="font-body text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
                {ctaText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow text-foreground border-brutal-thin font-mono text-xs uppercase tracking-[2px] font-bold hover:bg-cream transition-colors"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/workshops"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-cream border-[3px] border-cream font-mono text-xs uppercase tracking-[2px] font-bold hover:bg-cream hover:text-foreground transition-colors"
                >
                  Tous les ateliers
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-cream border-[3px] border-cream font-mono text-xs uppercase tracking-[2px] font-bold hover:bg-cream hover:text-foreground transition-colors"
                >
                  Voir la galerie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProLandingPage;
