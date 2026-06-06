import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Users, Leaf, Smile, CheckCircle2 } from "lucide-react";

const AnimationNatureEHPAD = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Animation Nature EHPAD | Ateliers Botaniques pour Seniors"
        description="Animations nature pour EHPAD. Ateliers botaniques créatifs pour seniors. Bien-être, cohésion, stimulation cognitive. Paris, Île-de-France."
        keywords="animation EHPAD nature, atelier EHPAD botanique, animation senior nature, bien-être EHPAD, activité créative maison retraite"
        canonical="/animation-nature-ehpad"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Animation Nature EHPAD",
          description: "Animations nature et ateliers botaniques pour résidents EHPAD",
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-rose-50 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-rose-100">
                <Heart className="w-12 h-12 text-rose-600" />
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Animation Nature EHPAD
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Créez des moments de bien-être, stimulation et joie avec des ateliers botaniques adaptés.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg"
              >
                Demander une animation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Nature for Seniors */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Pourquoi les ateliers botaniques en EHPAD ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Smile,
                title: "Bien-être émotionnel",
                desc: "La nature crée de la sérénité, réduit l'anxiété et apaise l'esprit",
              },
              {
                icon: Users,
                title: "Lien social",
                desc: "Créer ensemble renforce les liens entre résidents et avec l'équipe",
              },
              {
                icon: Heart,
                title: "Stimulation cognitive",
                desc: "Observation, créativité et apprentissage maintiennent l'esprit actif",
              },
              {
                icon: Leaf,
                title: "Reconnexion à la nature",
                desc: "Retrouver le contact avec les plantes, les couleurs, les textures",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-rose-50 border-l-4 border-rose-600">
                <item.icon className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Research & Benefits */}
      <section className="py-16 px-4 bg-rose-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Les bénéfices prouvés
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            {[
              {
                title: "Réduction du stress et de l'anxiété",
                desc: "Les activités avec la nature baissent le cortisol et favorisent la détente",
              },
              {
                title: "Amélioration de la mobilité",
                desc: "Les mouvements fins (planter, manipuler) entretiennent la dextérité et la motricité",
              },
              {
                title: "Stimulation cognitive",
                desc: "L'observation et la création activent la mémoire et la concentration",
              },
              {
                title: "Meilleure qualité de sommeil",
                desc: "Les activités créatives et l'exposition à la nature régulent le sommeil",
              },
              {
                title: "Sentiment d'accomplissement",
                desc: "Créer quelque chose apporte fierté et satisfaction",
              },
              {
                title: "Prévention de la dépression",
                desc: "L'engagement social et la nature combattent l'isolement et la dépression",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white shadow-brutal border-brutal shadow-brutal">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Our Ateliers */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Nos ateliers botaniques
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            {[
              {
                title: "🌱 Kokedama créatif",
                desc: "Créer une boule de mousse avec plante. Très tactile et apaisante.",
                duration: "1h30",
                difficulty: "Faible",
              },
              {
                title: "🌿 Terrarium en bocal",
                desc: "Assembler un mini-jardin sous verre. Fascinant et relaxant.",
                duration: "1h30 à 2h",
                difficulty: "Très faible",
              },
              {
                title: "🎨 Teinture végétale",
                desc: "Explorer les couleurs naturelles des plantes. Très créatif et sensoriel.",
                duration: "2h",
                difficulty: "Moyen",
              },
              {
                title: "🌾 Manipulation de plantes",
                desc: "Activité douce : toucher, observer, sentir. Très adaptée aux personnes fragiles.",
                duration: "45 min à 1h",
                difficulty: "Très faible",
              },
              {
                title: "💐 Atelier bouquets",
                desc: "Créer des arrangements floraux. Création belle et utile.",
                duration: "1h",
                difficulty: "Faible",
              },
              {
                title: "🌼 Journée thématique",
                desc: "Plusieurs activités autour d'un thème (printemps, couleurs, etc.)",
                duration: "2h à 3h",
                difficulty: "Flexible",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-rose-50 border-l-4 border-rose-600 hover:border-rose-800 transition-colors">
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/80 text-sm mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span>⏱️ {item.duration}</span>
                  <span>📊 Difficulté : {item.difficulty}</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Adaptation for Seniors */}
      <section className="py-16 px-4 bg-rose-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Entièrement adapté aux seniors
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-6">
            {[
              "✓ Activités faciles, sans effort excessif",
              "✓ Hauteur de tables adaptée (pas de flexion)",
              "✓ Matériel léger et facile à manipuler",
              "✓ Explications claires et pédagogiques",
              "✓ Rythme lent et bienveillant",
              "✓ Encouragement et valorisation de chacun",
              "✓ Moments de pause si nécessaire",
              "✓ Adaptable aux personnes en fauteuil",
              "✓ Sensible aux déficiences visuelles/auditives",
              "✓ Animation chaleureuse et patiente",
            ].map((item, i) => (
              <p key={i} className="text-charcoal/80 text-sm flex gap-2">
                <span className="flex-shrink-0">{item.split(" ")[0]}</span>
                <span>{item.substring(2)}</span>
              </p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Informations pratiques
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "📍 Lieu",
                desc: "À votre EHPAD. Déplacement inclus en Île-de-France.",
              },
              {
                title: "👥 Groupe",
                desc: "8-15 résidents idéalement. Flexible selon votre configuration.",
              },
              {
                title: "⏱️ Durée",
                desc: "1h à 3h selon l'atelier. Adaptable à votre agenda.",
              },
              {
                title: "📦 Matériel",
                desc: "Tout fourni. Les créations restent à l'EHPAD ou repartent avec les résidents.",
              },
              {
                title: "👨‍⚕️ Sécurité",
                desc: "Formatée aux enjeux spécifiques des seniors. Vigilante et bienveillante.",
              },
              {
                title: "🎯 Fréquence",
                desc: "Ponctuelle ou régulière (mensuelle, hebdomadaire). À vous de choisir.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-rose-50 ">
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-rose-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Ce qu'en disent les EHPAD
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            {[
              {
                quote: "Les résidents parlent de l'atelier toute la semaine. C'est une vraie lueur de joie dans leur quotidien.",
                author: "Directrice, EHPAD Paris",
              },
              {
                quote: "L'animatrice est patiente et bienveillante. Les résidents se sentent valorisés, c'est touchant.",
                author: "Responsable animations, EHPAD Yvelines",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-rose-600 shadow-brutal border-brutal shadow-brutal">
                <p className="text-charcoal/80 italic mb-4">"{item.quote}"</p>
                <p className="text-sm font-medium text-charcoal">{item.author}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Tarifs
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="p-8 bg-rose-50 border-[3px] border-rose-200">
            <p className="text-charcoal/80 mb-6">
              Nous proposons des formules flexibles pour les EHPAD. À partir de <strong>300€ l'atelier</strong>.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-charcoal/80">
              <li>📌 Tarif dégressif pour interventions régulières</li>
              <li>📌 Possibilité de financement par fonds sociaux</li>
              <li>📌 Offres combinées pour plusieurs ateliers</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-all"
            >
              Demander un devis EHPAD
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-rose-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Offrez du bien-être à vos résidents
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Transformez une journée ordinaire en moment magique. Contactez-nous !
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-rose-600 font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg border-brutal shadow-brutal"
            >
              Demander une animation
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LandingPhotoStrip />

      <Footer />
    </div>
  );
};

export default AnimationNatureEHPAD;
