import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Grid, ArrowRight } from "lucide-react";

const AteliersBotaniquesComplets = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Tous nos Ateliers Botaniques | Kokedama, Teinture, Terrarium"
        description="Découvrez tous nos ateliers : kokedama, teinture végétale, terrarium, vannerie, team building, bien-être. Pour tous les publics, tous les âges."
        keywords="ateliers botaniques, cours nature, atelier créatif plantes, ateliers ethnobotanique"
        canonical="/ateliers-botaniques-tous"
      />

      <Navigation />

      {/* Hero */}
      <section className="min-h-[500px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-sage/30 to-background py-20">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Tous nos ateliers botaniques
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Explorez la nature à travers la créativité, la science et l'art. Pour tous les publics.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <LandingPhotoStrip />

      {/* Filter Section */}
      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-light text-center mb-12" style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}>
              Par catégorie
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "👥 Pour les entreprises",
                ateliers: [
                  { name: "Team Building Terrarium", url: "/atelier-terrarium-team-building" },
                  { name: "Kokedama Team Building", url: "/atelier-kokedama-team-building" },
                  { name: "Bien-Être Nature", url: "/atelier-bien-etre-nature-entreprise" },
                  { name: "Animation Semaine QVCT", url: "/animation-semaine-qvct" },
                ],
              },
              {
                category: "🎓 Pour les écoles",
                ateliers: [
                  { name: "Teinture Végétale", url: "/atelier-teinture-vegetale-ecole" },
                  { name: "Kokedama Éducatif", url: "/workshops" },
                  { name: "Terrarium Scientifique", url: "/workshops" },
                ],
              },
              {
                category: "👵 Pour les EHPAD",
                ateliers: [
                  { name: "Animation Nature EHPAD", url: "/animation-nature-ehpad" },
                  { name: "Kokedama Créatif", url: "/animation-nature-ehpad" },
                  { name: "Manipulation Douce", url: "/animation-nature-ehpad" },
                ],
              },
              {
                category: "👨‍👩‍👧 Intergénérationnel",
                ateliers: [
                  { name: "Enfants & Seniors", url: "/activite-intergenerationnelle-nature" },
                  { name: "Familles", url: "/workshops" },
                ],
              },
              {
                category: "🎨 Ateliers créatifs",
                ateliers: [
                  { name: "Teinture Végétale", url: "/workshops" },
                  { name: "Terrarium DIY", url: "/workshops" },
                  { name: "Vannerie Nature", url: "/workshops" },
                ],
              },
              {
                category: "🌿 Tous les ateliers",
                ateliers: [
                  { name: "Voir le calendrier complet", url: "/workshops" },
                  { name: "Calendrier & réservation", url: "/agenda" },
                ],
              },
            ].map((section, i) => (
              <div key={i} className="p-6 bg-sage/5 border border-sage/20">
                <h3 className="font-semibold text-charcoal mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.ateliers.map((atelier, j) => (
                    <li key={j}>
                      <Link
                        to={atelier.url}
                        className="text-sage hover:text-sage-dark font-medium text-sm flex gap-2 items-center transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {atelier.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Popular Workshops */}
      <section className="py-16 px-4 bg-sand/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}>
              Ateliers les plus demandés
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-4 gap-6">
            {[
              {
                emoji: "🌱",
                name: "Kokedama",
                desc: "L'art japonais zen",
                popular: "⭐⭐⭐⭐⭐",
              },
              {
                emoji: "🌿",
                name: "Terrarium",
                desc: "Écosystème en bocal",
                popular: "⭐⭐⭐⭐⭐",
              },
              {
                emoji: "🎨",
                name: "Teinture Végétale",
                desc: "Couleurs naturelles",
                popular: "⭐⭐⭐⭐",
              },
              {
                emoji: "🌾",
                name: "Vannerie",
                desc: "Tissage artisanal",
                popular: "⭐⭐⭐",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[hsl(var(--yellow))]/15 shadow-brutal hover:shadow-brutal-lg transition-all text-center border-brutal shadow-brutal">
                <p className="text-4xl mb-3">{item.emoji}</p>
                <h3 className="font-semibold text-charcoal mb-2">{item.name}</h3>
                <p className="text-xs text-charcoal/70 mb-3">{item.desc}</p>
                <p className="text-sm">{item.popular}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}>
              Prêt à explorer ?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Découvrez nos dates disponibles ou demandez un atelier sur-mesure.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/workshops"
                className="px-8 py-4 bg-sage hover:bg-sage-dark text-white font-semibold transition-all"
              >
                Voir les dates
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-[3px] border-sage text-sage hover:bg-sage/10 font-semibold transition-all"
              >
                Sur-mesure
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AteliersBotaniquesComplets;
