import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Palette, Users, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import teintureEnfants1 from "@/assets/gallery-teinture-enfants-1.jpg.asset.json";
import teintureEnfants2 from "@/assets/gallery-teinture-enfants-2.jpg.asset.json";
import teintureEnfants3 from "@/assets/gallery-teinture-enfants-3.jpg.asset.json";


const AtelierTeintureScolaire = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Atelier Teinture Végétale École | Ateliers Botaniques Éducatifs"
        description="Ateliers teinture végétale pour écoles. Apprentissage nature, art et écologie. TAP, sorties scolaires. Yvelines, Hauts-de-Seine, Val-d'Oise. À partir de 6 ans."
        keywords="atelier teinture végétale école, teinture naturelle enfants, atelier botanique école, TAP ateliers nature, apprentissage écologie"
        canonical="/atelier-teinture-vegetale-ecole"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Atelier Teinture Végétale Scolaire",
          description: "Ateliers teinture végétale pour écoles et apprentissage botanique",
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-yellow-100">
                <Palette className="w-12 h-12 text-yellow-700" />
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Teinture Végétale à l'École
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Ateliers créatifs et botaniques pour découvrir les couleurs naturelles des plantes.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg"
              >
                Demander un devis
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <LandingPhotoStrip />

      {/* Galerie photos atelier enfants */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[teintureEnfants1, teintureEnfants2, teintureEnfants3].map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden border-brutal shadow-brutal">
                <img
                  src={img.url}
                  alt={`Atelier teinture végétale enfants ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Educational Value */}
      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Apprendre par l'expérience
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Savoirs naturels</h3>
              {[
                "Comment les plantes créent des couleurs",
                "Les techniques anciennes de teinture",
                "La chimie naturelle et la botanique",
                "L'écologie et la durabilité",
                "L'art textile et l'artisanat",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <BookOpen className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-1" />
                  <span className="text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Compétences développées</h3>
              {[
                "Observation et curiosité scientifique",
                "Créativité artistique et expression",
                "Travail en équipe et collaboration",
                "Respect de l'environnement",
                "Patience et précision",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-1" />
                  <span className="text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-4 bg-yellow-50/50">
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
              {
                step: 1,
                title: "Découverte des plantes tinctoriales",
                desc: "Les enfants observent et touchent les plantes : chou rouge, fleurs de tournesol, feuilles d'eucalyptus, etc.",
              },
              {
                step: 2,
                title: "Apprentissage des techniques",
                desc: "Explication simple de la chimie derrière la couleur (mordançage, teinture, fixation)",
              },
              {
                step: 3,
                title: "Préparation de la teinture",
                desc: "Chaque enfant broie et prépare sa plante. Observation du processus d'extraction",
              },
              {
                step: 4,
                title: "Teinture du tissu",
                desc: "Immersion du tissu dans la teinture et observation des couleurs qui apparaissent",
              },
              {
                step: 5,
                title: "Résultats et séchage",
                desc: "Les enfants voient le résultat final et repartent avec leur création",
              },
              {
                step: 6,
                title: "Partage et discussion",
                desc: "Discussion sur le processus, l'écologie et comment utiliser ces connaissances",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 flex items-center justify-center">
                  <span className="font-bold text-yellow-700">{item.step}</span>
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

      {/* Format Options */}
      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Formats disponibles
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "🎨 TAP (Temps d'Activités Périscolaires)",
                desc: "Sessions courtes et régulières dans le cadre scolaire. Parfait pour explorer progressivement.",
                duration: "1h à 1h30",
                group: "15-25 enfants",
              },
              {
                title: "📚 Projet classe entière",
                desc: "Atelier d'une demi-journée avec toute la classe. Expérience immersive et cohésive.",
                duration: "2h à 2h30",
                group: "Jusqu'à 30 enfants",
              },
              {
                title: "🏫 Sortie scolaire",
                desc: "Journée complète avec ateliers multiples et apprentissage approfondi.",
                duration: "3h à 4h",
                group: "20-50 enfants",
              },
              {
                title: "🌍 Projet annuel",
                desc: "Plusieurs séances tout au long de l'année pour un apprentissage progressif.",
                duration: "À définir",
                group: "Flexible",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-yellow-50 border-l-4 border-yellow-700">
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/80 text-sm mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span>⏱️ {item.duration}</span>
                  <span>👥 {item.group}</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 px-4 bg-yellow-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Adaptation par âge
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-3 gap-6">
            {[
              {
                age: "6-8 ans (CP-CE2)",
                focus: "Découverte sensorielle et émerveillement",
                activities: "Observation, manipulation, couleurs vives",
              },
              {
                age: "8-11 ans (CM1-CM2)",
                focus: "Apprentissage scientifique et créativité",
                activities: "Chimie simple, teinture complète, art textile",
              },
              {
                age: "11+ ans (Collège)",
                focus: "Compréhension scientifique approfondie",
                activities: "Chimie avancée, histoire, écologie, projets artistiques",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[hsl(var(--yellow))]/15 shadow-brutal border-brutal shadow-brutal">
                <h3 className="font-bold text-yellow-700 mb-3">{item.age}</h3>
                <p className="text-sm font-semibold text-charcoal mb-2">{item.focus}</p>
                <p className="text-sm text-charcoal/70">{item.activities}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Alignment with Education */}
      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Aligné avec les programmes scolaires
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="p-8 bg-yellow-50 border-[3px] border-yellow-200">
            <p className="text-charcoal/80 mb-6">
              Notre atelier s'aligne avec les objectifs du programme éducatif français :
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "✓ Sciences : chimie, botanique, écologie",
                "✓ Arts plastiques : couleur, composition, création",
                "✓ Développement durable : conscience écologique",
                "✓ Travail collaboratif et d'équipe",
                "✓ Respect de l'environnement et de la nature",
                "✓ Patrimoine : savoirs anciens et artisanaux",
              ].map((item, i) => (
                <p key={i} className="text-charcoal/80 text-sm">
                  {item}
                </p>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 px-4 bg-yellow-50/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Informations pratiques
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[hsl(var(--yellow))]/15 shadow-brutal border-brutal shadow-brutal">
              <h3 className="font-semibold text-charcoal mb-4">📍 Lieu</h3>
              <p className="text-charcoal/80 text-sm">
                À votre école ou dans nos locaux. Déplacement inclus en Île-de-France pour les groupes importants.
              </p>
            </div>
            <div className="p-6 bg-[hsl(var(--yellow))]/15 shadow-brutal border-brutal shadow-brutal">
              <h3 className="font-semibold text-charcoal mb-4">📦 Matériel</h3>
              <p className="text-charcoal/80 text-sm">
                Tout est fourni : plantes, tissus, outils. Les enfants repartent avec leur création.
              </p>
            </div>
            <div className="p-6 bg-[hsl(var(--yellow))]/15 shadow-brutal border-brutal shadow-brutal">
              <h3 className="font-semibold text-charcoal mb-4">👨‍🏫 Animateur</h3>
              <p className="text-charcoal/80 text-sm">
                Ethnobotaniste expérimentée, formatrice en pédagogie. Approche bienveillante et inclusive.
              </p>
            </div>
            <div className="p-6 bg-[hsl(var(--yellow))]/15 shadow-brutal border-brutal shadow-brutal">
              <h3 className="font-semibold text-charcoal mb-4">🎯 Résultats</h3>
              <p className="text-charcoal/80 text-sm">
                Les enfants repartent avec leurs créations teintes et une compréhension de la botanique.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Tarifs scolaires
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="p-8 bg-yellow-50 border-[3px] border-yellow-200 text-center mb-8">
            <p className="text-charcoal/80 mb-4">
              Tarifs à partir de <strong>12€ par enfant</strong> (selon le groupe et la durée)
            </p>
            <p className="text-charcoal/70 text-sm">
              Possibilité de financement par mairie, académie ou projets éducatifs
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200} className="text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold transition-all"
            >
              Demander un devis scolaire
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-yellow-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Offrez à vos élèves une expérience inoubliable
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous pour explorer les possibilités. Réponse sous 24h.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[hsl(var(--yellow))]/15 text-yellow-700 font-semibold transition-all hover:scale-105 hover:shadow-brutal-lg border-brutal shadow-brutal"
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

export default AtelierTeintureScolaire;
