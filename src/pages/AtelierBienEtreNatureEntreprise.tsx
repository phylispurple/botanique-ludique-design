import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, Heart, Zap, Users, CheckCircle2 } from "lucide-react";

const AtelierBienEtreNatureEntreprise = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Ateliers Bien-Être Nature en Entreprise | QVCT & Santé au Travail"
        description="Ateliers bien-être nature pour améliorer la QVCT et la santé mentale de vos équipes. Kokedama, teinture, terrarium. Réduction du stress et cohésion garanties."
        keywords="bien-être entreprise nature, atelier QVCT nature, animation bien-être travail, réduction stress entreprise, activité santé mentale équipe, wellness nature"
        canonical="/atelier-bien-etre-nature-entreprise"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Atelier Bien-Être Nature en Entreprise",
          description: "Ateliers bien-être et nature pour la QVCT en entreprise",
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-green-50 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100">
                <Heart className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Bien-Être Nature en Entreprise
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Réduisez le stress, améliorez la QVCT et renforcez la cohésion grâce à des ateliers créatifs en contact avec la nature.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg"
              >
                Demander un devis
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal mb-6" style={{ fontFamily: "Fraunces, serif" }}>
                Les défis actuels
              </h2>
              <ul className="space-y-4">
                {[
                  "Augmentation du stress et de l'épuisement professionnel",
                  "Éloignement de la nature en milieu urbain",
                  "Manque d'équilibre vie professionelle-personnelle",
                  "Besoin de renforcer la cohésion d'équipe",
                  "Engagement des collaborateurs en baisse",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs text-red-600">!</span>
                    </div>
                    <p className="text-charcoal/80">{item}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-charcoal mb-6" style={{ fontFamily: "Fraunces, serif" }}>
                Notre solution
              </h2>
              <ul className="space-y-4">
                {[
                  "Connexion authentique avec la nature",
                  "Ateliers créatifs apaisants et gratifiants",
                  "Amélioration mesurée du bien-être mental",
                  "Renforcement des liens entre collaborateurs",
                  "Activité mémorable et impactante",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-charcoal/80">{item}</p>
                  </div>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-green-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Les bénéfices prouvés
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Réduction du stress",
                desc: "La nature réduit le cortisol et apaise le système nerveux",
              },
              {
                icon: Users,
                title: "Cohésion d'équipe",
                desc: "Créer ensemble renforce les liens et la confiance",
              },
              {
                icon: Heart,
                title: "Bien-être durable",
                desc: "Un objet créé à ramener améliore la satisfaction à long terme",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white shadow-brutal hover:shadow-brutal-lg transition-all border-brutal shadow-brutal">
                <item.icon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Workshop Options */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Nos ateliers bien-être
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Kokedama Zen",
                subtitle: "L'art japonais du calme",
                desc: "Créez une boule de mousse avec plante. Parfait pour la méditation en mouvement.",
                duration: "1h30",
              },
              {
                title: "Terrarium Minimaliste",
                subtitle: "Un micro-écosystème",
                desc: "Assemblez un mini-jardin sous verre. Idéal pour apaiser et fasciner.",
                duration: "2h",
              },
              {
                title: "Teinture Végétale Relaxante",
                subtitle: "Les couleurs de la nature",
                desc: "Créez des nuances naturelles en explorant les plantes tinctoriales. Très méditatif.",
                duration: "2h30",
              },
              {
                title: "Cercle de Plantes",
                subtitle: "Connexion collective",
                desc: "Créez ensemble un jardin partagé à ramener au bureau.",
                duration: "2h",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-green-50 to-green-100/30 border border-green-200">
                <h3 className="text-xl font-semibold text-charcoal mb-1">{item.title}</h3>
                <p className="text-sm text-green-600 font-medium mb-3">{item.subtitle}</p>
                <p className="text-charcoal/70 mb-4 text-sm">{item.desc}</p>
                <p className="text-xs text-muted-foreground">⏱️ {item.duration}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* QVCT & RSE */}
      <section className="py-16 px-4 bg-sage/10 border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Aligner avec la QVCT et la RSE
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="bg-white p-8 shadow-brutal border-brutal shadow-brutal">
            <p className="text-charcoal/80 mb-6">
              Nos ateliers répondent aux critères de <strong>Qualité de Vie et Conditions de Travail (QVCT)</strong> et s'alignent avec votre engagement RSE :
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "✓ Santé physique et mentale des collaborateurs",
                "✓ Écoresponsabilité et engagement environnemental",
                "✓ Cohésion et bien-être collectif",
                "✓ Activité mémorable et gratifiante",
                "✓ Support des semaines QVCT/SQVCT",
                "✓ Documentation pour rapport RSE",
              ].map((item, i) => (
                <p key={i} className="text-charcoal/80 text-sm">
                  {item}
                </p>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Ce qu'en disent nos clients
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Les collaborateurs ont adoré. L'atelier a créé une vraie détente et les gens sont repartis moins stressés.",
                author: "RH, PME Paris",
              },
              {
                quote: "Une activité originale qui renforce réellement les liens. Et on repart avec un objet beau à mettre au bureau.",
                author: "Responsable Évènements, Groupe Tech",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-green-50 border-l-4 border-green-600">
                <p className="text-charcoal/80 italic mb-4">"{item.quote}"</p>
                <p className="text-sm font-medium text-charcoal">{item.author}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Améliorez la QVCT de vos équipes
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous pour un devis personnalisé. Réponse sous 24h.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-green-600 font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg border-brutal shadow-brutal"
            >
              Demander un devis
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LandingPhotoStrip />

      <Footer />
    </div>
  );
};

export default AtelierBienEtreNatureEntreprise;
