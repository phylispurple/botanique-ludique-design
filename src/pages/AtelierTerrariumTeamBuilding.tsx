import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, Users, Clock, MapPin, Check } from "lucide-react";

const AtelierTerrariumTeamBuilding = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Atelier Terrarium Team Building Paris | Créatif & Naturel"
        description="Ateliers terrarium pour team building en entreprise à Paris et Île-de-France. Activité créative, écologique et cohésive pour 10-100 participants. Déplacement sur site."
        keywords="terrarium team building Paris, atelier terrarium entreprise, team building nature Paris, animation cohésion équipe, atelier créatif entreprise, terrarium atelier"
        canonical="/atelier-terrarium-team-building"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Atelier Terrarium Team Building",
          description: "Ateliers terrarium créatifs pour team building en entreprise",
          url: "https://botaniqueludique.com/atelier-terrarium-team-building",
          telephone: "+33661847482",
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-sage/30 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-sage/20">
                <Leaf className="w-12 h-12 text-sage" />
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Atelier Terrarium Team Building
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Créez ensemble un mini-écosystème végétal. Une activité créative, écologique et cohésive pour renforcer la cohésion de vos équipes.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-sage hover:bg-sage-dark text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                Demander un devis
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: "10 à 100 participants", desc: "Groupes flexibles" },
              { icon: Clock, label: "1h à 2h30", desc: "Selon le format" },
              { icon: MapPin, label: "Déplacement sur site", desc: "Partout en Île-de-France" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-8 h-8 text-sage mx-auto mb-3" />
                <h3 className="font-semibold text-charcoal mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-sand/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Qu'est-ce qui est inclus ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-4">
            {[
              "Matériel et fournitures (pots, substrat, plantes, mousse, sable, pierres)",
              "Animation par un expert en botanique et créativité",
              "Apprentissage du concept écologique du terrarium",
              "Création personnalisée de chaque participant",
              "Emportage du terrarium créé",
              "Photos de groupe et moments partagés",
              "Conseil d'entretien individuel pour chacun",
              "Déplacement inclus dans les zones de couverture",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <Check className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                <p className="text-charcoal/80">{item}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Pourquoi l'atelier terrarium pour votre team building ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Créativité collectée",
                desc: "Chaque participant crée son propre terrarium, ce qui encourage l'expression personnelle tout en renforçant le sentiment d'appartenance.",
              },
              {
                title: "Bien-être et nature",
                desc: "Le contact avec les plantes réduces le stress, apaise l'esprit et favorise un environnement professionnel plus sain.",
              },
              {
                title: "Durabilité et RSE",
                desc: "Une activité écologique et responsable, parfaitement alignée avec les valeurs de bien-être au travail et de conscience environnementale.",
              },
              {
                title: "Souvenir concret",
                desc: "Contrairement à d'autres team buildings, les participants repartent avec un objet qu'ils créé, un vrai souvenir de l'événement.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-sage/10 border border-sage/20">
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-sand/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Tarifs et formules
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="grid md:grid-cols-3 gap-6">
            {[
              { participants: "10-20", price: "45€/pers", duration: "1h30" },
              { participants: "20-50", price: "35€/pers", duration: "2h" },
              { participants: "50-100", price: "28€/pers", duration: "2h30" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border-2 border-sage/30 text-center hover:border-sage/60 transition-colors">
                <p className="text-sm text-muted-foreground mb-2">{item.participants} personnes</p>
                <p className="text-3xl font-bold text-sage mb-2">{item.price}</p>
                <p className="text-sm text-charcoal/70">Atelier de {item.duration}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={200} className="mt-8 p-6 bg-white rounded-xl border-2 border-sage/20 text-center">
            <p className="text-charcoal/70 mb-4">Tarifs dégressifs pour groupes importants. Devis personnalisé sur demande.</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-sage hover:bg-sage-dark text-white rounded-full font-semibold transition-all"
            >
              Demander un devis personnalisé
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: "Fraunces, serif", color: "#5D653A" }}
            >
              Prêt à créer ensemble ?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour organiser votre atelier terrarium. Réponse sous 24h garantie.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-sage hover:bg-sage-dark text-white rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              Nous contacter
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AtelierTerrariumTeamBuilding;
