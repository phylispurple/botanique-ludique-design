import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Heart, Leaf, Sparkles, CheckCircle2 } from "lucide-react";

const ActiviteIntergenerationnelle = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Activités Intergénérationnelles Nature | Écoles & EHPAD Île-de-France"
        description="Ateliers botaniques intergénérationnels unissant enfants et seniors. EHPAD + écoles. Créer ensemble, partager, transmettre. Paris, Yvelines, Hauts-de-Seine, Val-d'Oise."
        keywords="activité intergénérationnelle nature, atelier enfants seniors, EHPAD école ensemble, activité transmise, intergénérationnel botanique"
        canonical="/activite-intergenerationnelle-nature"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Activité Intergénérationnelle Nature",
          description: "Ateliers botaniques intergénérationnels pour EHPAD et écoles",
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-50 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-purple-100">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Activité Intergénérationnelle
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Créez des liens authentiques entre enfants et seniors à travers des ateliers botaniques uniques.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                Demander un devis
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Need */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Un besoin social urgent
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: "20%",
                label: "des seniors",
                desc: "se sentent isolés ou seuls en France",
              },
              {
                stat: "30%",
                label: "des enfants",
                desc: "manquent de contact avec la nature",
              },
              {
                stat: "60%",
                label: "des EHPAD",
                desc: "cherchent des animations engageantes",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-purple-50 rounded-xl text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">{item.stat}</p>
                <p className="font-semibold text-charcoal mb-1">{item.label}</p>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4 bg-purple-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Notre solution : créer ensemble
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-8">
            <div className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Comment ça marche ?</h3>
              <ol className="space-y-4">
                {[
                  "Les enfants (dès 5 ans) viennent à l'EHPAD ou l'inverse",
                  "Animateurs botaniques expérimentés les encadrent",
                  "Ensemble, ils créent un kokedama, terrarium ou autre atelier",
                  "Les seniors partagent leurs savoirs, les enfants apprennent",
                  "Un moment de transmission authentique et naturel",
                  "Les participants repartent avec leur création et des souvenirs",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-bold text-purple-600 flex-shrink-0">{i + 1}.</span>
                    <p className="text-charcoal/80">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Les bénéfices prouvés
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Pour les seniors",
                benefits: [
                  "Sentiment d'utilité et de transmission",
                  "Stimulation cognitive et créativité",
                  "Réduction de l'isolement",
                  "Moments joyeux et significatifs",
                ],
              },
              {
                icon: Leaf,
                title: "Pour les enfants",
                benefits: [
                  "Apprentissage du respect de la nature",
                  "Connexion authentique avec l'aîné",
                  "Découverte des savoirs anciens",
                  "Expérience créative et gratifiante",
                ],
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-purple-50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-16 px-4 bg-purple-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Nos formats intergénérationnels
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "🌱 Kokedama Partagé",
                desc: "L'enfant et le senior créent ensemble une boule de mousse. Deux mains, un cœur.",
                duration: "1h30",
                ageRange: "5-99 ans",
              },
              {
                title: "🌿 Terrarium Duo",
                desc: "Le senior raconte l'histoire des plantes, l'enfant les place dans le bocal.",
                duration: "2h",
                ageRange: "7-99 ans",
              },
              {
                title: "🎨 Teinture Intergénérationnelle",
                desc: "Les seniors enseignent les techniques, les enfants explorent les couleurs.",
                duration: "2h30",
                ageRange: "8-99 ans",
              },
              {
                title: "📖 Histoires de Plantes",
                desc: "Le senior raconte les savoirs anciens, l'enfant crée une œuvre inspirée.",
                duration: "1h à 2h",
                ageRange: "6-99 ans",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/80 text-sm mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>⏱️ {item.duration}</span>
                  <span>👥 {item.ageRange}</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Ce qu'en disent nos partenaires
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            {[
              {
                quote: "Les résidents n'avaient jamais été aussi heureux. Voir les enfants rire avec eux, c'était merveilleux.",
                author: "Directrice, EHPAD",
              },
              {
                quote: "Les enfants ont découvert des savoirs oubliés. L'atelier a créé des liens qui vont au-delà de l'après-midi.",
                author: "Enseignant, École primaire",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-600">
                <p className="text-charcoal/80 italic mb-4">"{item.quote}"</p>
                <p className="text-sm font-medium text-charcoal">{item.author}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-16 px-4 bg-purple-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Comment ça s'organise ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "📍 Lieu",
                desc: "À l'EHPAD, à l'école ou un lieu intermédiaire selon vos préférences",
              },
              {
                title: "📅 Timing",
                desc: "Flexible : après-midi, mercredi, samedi selon les disponibilités",
              },
              {
                title: "👥 Taille",
                desc: "5-6 duos (enfant-senior) par session pour une qualité optimale",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Créez un moment intergénérationnel inoubliable
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous pour explorer les possibilités. Réponse sous 24h.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Demander un devis
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ActiviteIntergenerationnelle;
