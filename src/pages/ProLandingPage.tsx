import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import SocialProofBar from "@/components/SocialProofBar";
import { CheckCircle, Briefcase, Sparkles } from "lucide-react";
import { findProLanding } from "@/data/proLandings";

const ProLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
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
  } = config;

  const h1Parts = h1Highlight ? h1.split(h1Highlight) : null;

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#F7F7EB" }}>
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

      <main className="pt-32 pb-20">
        {/* Hero */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
            <Briefcase className="w-12 h-12 text-sage mx-auto mb-6" />
            <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              {h1Parts ? (
                <>
                  {h1Parts[0]}
                  <span className="text-sage">{h1Highlight}</span>
                  {h1Parts[1]}
                </>
              ) : (
                h1
              )}
            </h1>
            <p className="subtitle-italic text-lg mb-6">{tagline}</p>
            <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">{intro}</p>
          </div>
        </div>

        {/* Social proof bar */}
        <SocialProofBar quote={testimonial} />

        {/* Benefits */}
        <div className="container mx-auto px-4 md:px-6 mt-20">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl mb-10 text-center"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
            >
              Pourquoi nos ateliers fonctionnent
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-lg p-6">
                  <Sparkles className="w-6 h-6 text-sage mb-3" />
                  <h3
                    className="text-lg mb-2"
                    style={{ fontFamily: "Fraunces, serif", fontWeight: 500, color: "#3D3D2E" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>

            {/* Formats */}
            <h2
              className="text-2xl md:text-3xl mb-10 text-center"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
            >
              Formats disponibles
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-20">
              {formats.map((f) => (
                <div key={f.title} className="bg-sand rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="text-lg"
                      style={{ fontFamily: "Fraunces, serif", fontWeight: 500, color: "#3D3D2E" }}
                    >
                      {f.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-sage flex-shrink-0">
                      {f.duration}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/75 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Practical */}
            <div className="bg-white rounded-lg p-8 mb-20">
              <h2
                className="text-2xl mb-6"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
              >
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
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <h2
              className="text-2xl md:text-3xl mb-8 text-center"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
            >
              Questions fréquentes
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto mb-20">
              {faq.map((f) => (
                <div key={f.question} className="bg-white rounded-lg p-6">
                  <h3
                    className="text-lg font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
                  >
                    {f.question}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-sm">{f.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-sage text-off-white rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h2
                className="text-2xl md:text-3xl mb-4"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}
              >
                {ctaTitle}
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">{ctaText}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/pro"
                  className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
                >
                  Toute notre offre Pro
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
