import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, Users, Zap, Smile, CheckCircle2 } from "lucide-react";

const AtelierKokedamaTeamBuilding = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Atelier Kokedama Team Building | Art Japonais & Cohésion d'Équipe"
        description="Atelier kokedama pour team building en entreprise. Créez une boule de mousse avec plante. Équipe 10-100 pers. Zen, créatif, mémorable. Paris, Île-de-France."
        keywords="kokedama team building, atelier kokedama entreprise, team building créatif, kokedama Paris, art japonais atelier"
        canonical="/atelier-kokedama-team-building"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Atelier Kokedama Team Building",
          description: "Ateliers kokedama pour team building créatif et zen",
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-teal-50 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-100">
                <Leaf className="w-12 h-12 text-teal-600" />
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Kokedama Team Building
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Découvrez l'art japonais du kokedama : créer une boule de mousse avec une plante. Zen, créatif, inoubliable.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                Demander un devis
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is Kokedama */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Qu'est-ce qu'un kokedama ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                <strong>Kokedama</strong> (苔玉) est un art floral japonais qui signifie littéralement "boule de mousse". Il combine l'art du bonsaï et l'ikebana.
              </p>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                La technique consiste à entourer les racines d'une plante avec un substrat (terre, mousse) formant une sphère, remplaçant ainsi le pot traditionnel.
              </p>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                Le résultat ? Un objet design, écologique, facile d'entretien et profondément zen.
              </p>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl border-2 border-teal-200">
              <h3 className="font-semibold text-charcoal mb-4">Caractéristiques</h3>
              <ul className="space-y-3 text-sm text-charcoal/80">
                <li>✓ Art traditionnel japonais (depuis 1990s)</li>
                <li>✓ Très populaire en Asie et en Europe</li>
                <li>✓ Facile d'entretien (juste vaporiser)</li>
                <li>✓ Parfait en décoration intérieure</li>
                <li>✓ À suspendre ou à poser</li>
                <li>✓ Design et naturel</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why for Team Building */}
      <section className="py-16 px-4 bg-teal-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Pourquoi le kokedama pour le team building ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Créativité en action",
                desc: "Chacun crée son propre kokedama, libre d'exprimer son style personnel",
              },
              {
                icon: Smile,
                title: "Ambiance zen et bienveillante",
                desc: "La nature et la lenteur crèent une atmosphère apaisante, loin du stress",
              },
              {
                icon: Leaf,
                title: "Souvenir tangible",
                desc: "Les participants repartent avec un objet qu'ils ont créé, un vrai souvenir",
              },
              {
                icon: Users,
                title: "Discussion naturelle",
                desc: "Créer ensemble encourage les conversations authentiques entre collègues",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <item.icon className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Déroulement de l'atelier
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            {[
              { step: 1, title: "Accueil & présentation", desc: "Découverte de l'art du kokedama et de son histoire" },
              { step: 2, title: "Préparation", desc: "Sélection des plantes et du matériel (mousse, terre, outils)" },
              { step: 3, title: "Création", desc: "Chacun crée sa boule de mousse avec l'accompagnement de l'animateur" },
              { step: 4, title: "Plantation", desc: "Installation de la plante dans la sphère créée" },
              { step: 5, title: "Finalisation", desc: "Décoration et mise en forme selon la créativité de chacun" },
              { step: 6, title: "Partage", desc: "Photos de groupe, retours et conseils d'entretien" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-teal-600">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4 bg-teal-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Durée", value: "1h30 à 2h" },
              { label: "Participants", value: "10 à 100" },
              { label: "Tous âges", value: "À partir de 7 ans" },
              { label: "Déplacement", value: "Inclus en IDF" },
              { label: "Matériel", value: "Fourni" },
              { label: "Résultat", value: "À emporter" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <p className="text-teal-600 font-semibold text-sm mb-2">{item.label}</p>
                <p className="text-charcoal font-semibold">{item.value}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Variations */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Variations et options
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "🎨 Mini kokedama",
                desc: "Versions plus petites et décoratives, parfaites pour cadeaux d'invités",
              },
              {
                title: "🌱 Kokedama suspendu",
                desc: "Avec chaîne ou corde pour créer une installation aérienne",
              },
              {
                title: "👥 Kokedama géant (groupe)",
                desc: "Un seul kokedama créé collectivement, symbole de cohésion",
              },
              {
                title: "📦 Kit kokedama complet",
                desc: "À emporter pour continuer le projet au bureau",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-teal-50 rounded-xl border-l-4 border-teal-600">
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-teal-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Tarifs
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { participants: "10-20", price: "50€/pers", duration: "1h30" },
              { participants: "20-50", price: "40€/pers", duration: "2h" },
              { participants: "50-100", price: "32€/pers", duration: "2h" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border-2 border-teal-200 text-center hover:border-teal-600 transition-colors">
                <p className="text-sm text-muted-foreground mb-2">{item.participants} personnes</p>
                <p className="text-3xl font-bold text-teal-600 mb-2">{item.price}</p>
                <p className="text-sm text-charcoal/70">Atelier de {item.duration}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={200} className="p-6 bg-white rounded-xl border-2 border-teal-200 text-center">
            <p className="text-charcoal/70 mb-4">Tarifs dégressifs pour groupes importants et offres combinées disponibles.</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all"
            >
              Demander un devis
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Créez ensemble votre kokedama
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Une activité zen, créative et mémorable. Contactez-nous pour réserver !
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-teal-600 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
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

export default AtelierKokedamaTeamBuilding;
