import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, Leaf, Users, Target, CheckCircle2 } from "lucide-react";

const AnimationSemaineQVCT = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Semaine QVCT 2025-2026 : Animations Nature & Ateliers Botaniques"
        description="Animations nature pour votre Semaine QVCT/SQVCT. Ateliers botaniques, kokedama, teinture végétale. Bien-être au travail garantis. Réponse 24h. Paris, Île-de-France."
        keywords="semaine QVCT nature, animation QVCT entreprise, semaine bien-être travail, atelier QVCT ateliers, semaine qualité vie travail, animation nature 2025 2026"
        canonical="/animation-semaine-qvct"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Animation Semaine QVCT",
          description: "Animations nature et ateliers botaniques pour la Semaine QVCT",
          event: {
            "@type": "Event",
            name: "Semaine pour la Qualité de Vie et Conditions de Travail 2025",
            startDate: "2025-06-16",
            endDate: "2025-06-20",
          },
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100">
                <Calendar className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              📅 Semaine du 16-20 juin 2025
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Animation Semaine QVCT
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Célébrez la Qualité de Vie au Travail avec des ateliers botaniques créatifs, apaisants et mémorables.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg"
              >
                Demander votre animation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is QVCT */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6" style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}>
                Qu'est-ce que la QVCT ?
              </h2>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                La <strong>Semaine pour la Qualité de Vie et Conditions de Travail (SQVCT)</strong> est un événement annuel en France qui encourage les entreprises à valoriser et améliorer le bien-être de leurs collaborateurs.
              </p>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                C'est l'occasion idéale pour organiser des activités concrètes qui renforcent :
              </p>
              <ul className="space-y-3">
                {[
                  "La santé physique et mentale",
                  "La cohésion d'équipe",
                  "L'engagement collaborateur",
                  "L'équilibre vie pro-perso",
                  "L'engagement RSE",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-8 border-[3px] border-blue-200">
              <h3 className="font-semibold text-charcoal mb-4">📌 Dates à retenir</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">16-20 juin 2025</p>
              <p className="text-charcoal/70 text-sm mb-6">
                Organisée par l'ANACT (Agence Nationale pour l'Amélioration des Conditions de Travail)
              </p>
              <p className="text-sm text-charcoal/60">
                ➜ Plus de 20 ans de tradition en France
              </p>
              <p className="text-sm text-charcoal/60 mt-2">
                ➜ Touchera toutes les entreprises engagées
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Nature */}
      <section className="py-16 px-4 bg-blue-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Pourquoi choisir une animation nature ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "Reconnexion nature",
                desc: "Un antidote aux murs du bureau et au stress urbain",
              },
              {
                icon: Users,
                title: "Cohésion garantie",
                desc: "Créer ensemble renforce les liens authentiques",
              },
              {
                icon: Target,
                title: "Align RSE",
                desc: "Démontre votre engagement pour l'environnement",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white shadow-brutal hover:shadow-brutal-lg transition-all border-brutal shadow-brutal">
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Ateliers */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Nos animations pour votre QVCT
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            {[
              {
                title: "🌱 Atelier Kokedama",
                desc: "L'art japonais de la boule de mousse. Parfait pour la méditation en créant.",
                timing: "1h30",
                participants: "15-50",
              },
              {
                title: "🌿 Atelier Terrarium",
                desc: "Créez un mini-écosystème sous verre. Fascinant et apaisante.",
                timing: "2h",
                participants: "10-60",
              },
              {
                title: "🎨 Teinture Végétale",
                desc: "Explorez les couleurs naturelles des plantes. Très créatif et médtatif.",
                timing: "2h30",
                participants: "12-40",
              },
              {
                title: "🌾 Vannerie Nature",
                desc: "Tressage d'osier et fibres naturelles. Ancestral et relaxant.",
                timing: "2h à 3h",
                participants: "10-30",
              },
              {
                title: "🌼 Journée entière (combinée)",
                desc: "Plusieurs ateliers sur la journée pour un impact maximal.",
                timing: "4h à 6h",
                participants: "30-200+",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-blue-50 border-l-4 border-blue-600 hover:border-blue-800 transition-colors">
                <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/80 mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>⏱️ {item.timing}</span>
                  <span>👥 {item.participants} pers.</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 px-4 bg-blue-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Avantages de faire appel à nous
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-6">
            {[
              "✓ Experts en botanique et animation",
              "✓ 50+ ateliers réalisés avec succès",
              "✓ Déplacement inclus en Île-de-France",
              "✓ Matériel fourni (plantes, outils, etc.)",
              "✓ Animation chaleureuse et engageante",
              "✓ Photos/vidéos pour votre communication",
              "✓ Flexibilité sur horaires et format",
              "✓ Reponse et devis sous 24h",
            ].map((item, i) => (
              <p key={i} className="text-charcoal/80">
                {item}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Tarifs et devis
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="p-8 bg-blue-50 border-[3px] border-blue-200">
            <p className="text-charcoal/80 mb-6">
              Les tarifs varient selon le nombre de participants, la durée et le type d'atelier choisi. 
            </p>
            <p className="text-charcoal/80 mb-6">
              <strong>Exemple :</strong> Atelier kokedama pour 30 personnes = 35€/pers
            </p>
            <div className="bg-white p-6 mb-6 border-brutal shadow-brutal">
              <p className="text-sm text-charcoal/70 mb-4">
                📌 Tarifs dégressifs pour groupes importants
              </p>
              <p className="text-sm text-charcoal/70">
                📌 Offres combinées et tarifs spéciaux sur demande
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block w-full text-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
            >
              Demander un devis QVCT personnalisé
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Créez une Semaine QVCT mémorable
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous dès maintenant pour réserver votre animation. Réponse garantie sous 24h.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-blue-600 font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg border-brutal shadow-brutal"
            >
              Demander votre animation
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LandingPhotoStrip />

      <Footer />
    </div>
  );
};

export default AnimationSemaineQVCT;
