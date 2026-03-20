import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Building2, Leaf, Users, Calendar, Clock, MapPin, ArrowRight, CheckCircle, Landmark, HeartHandshake, Palette } from "lucide-react";

const LandingCollectivites = () => {
  const benefits = [
    { icon: Landmark, title: "Animation clé en main", description: "Nous nous adaptons à vos espaces et contraintes logistiques municipales." },
    { icon: HeartHandshake, title: "Lien social & intergénérationnel", description: "Ateliers fédérateurs ouverts à tous les publics de votre commune." },
    { icon: Leaf, title: "Sensibilisation écologique", description: "Éducation à l'environnement par la pratique créative et ludique." },
    { icon: Palette, title: "Valorisation culturelle", description: "Découverte du patrimoine végétal local et des savoir-faire botaniques." }
  ];

  const workshops = [
    { title: "Atelier Kokedama", duration: "2h", participants: "10-40 pers", highlight: "Tout public" },
    { title: "Teinture végétale naturelle", duration: "2h30", participants: "10-30 pers", highlight: "Éco-citoyen" },
    { title: "Terrarium miniature", duration: "1h30", participants: "10-40 pers", highlight: "Familial" },
    { title: "Bombes à graines", duration: "1h30", participants: "10-60 pers", highlight: "Biodiversité" },
    { title: "Herbier créatif & cyanotype", duration: "2h", participants: "10-30 pers", highlight: "Art & Nature" },
    { title: "Atelier boutures & semis", duration: "1h30", participants: "10-40 pers", highlight: "Jardinage" }
  ];

  const occasions = [
    "Fête de quartier",
    "Journée du patrimoine",
    "Semaine du développement durable",
    "Fête de la nature",
    "Événement municipal",
    "Forum des associations",
    "Marché de Noël",
    "Fête de la science",
    "Journée citoyenne",
    "Animation estivale"
  ];

  const cities = [
    "Paris (75)", "Versailles (78)", "Saint-Germain-en-Laye (78)", "Chatou (78)", "Le Pecq (78)",
    "Nanterre (92)", "Boulogne-Billancourt (92)", "Rueil-Malmaison (92)", "Issy-les-Moulineaux (92)",
    "Cergy (95)", "Pontoise (95)", "Franconville (95)", "Ermont (95)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Animation Collectivités & Mairies - Ateliers Botaniques | Botanique Ludique"
        description="Animations botaniques pour collectivités et mairies en Île-de-France. Ateliers nature clé en main pour fêtes de quartier, journées du patrimoine, événements municipaux. Devis gratuit sous 24h."
        keywords="animation collectivité, atelier mairie, animation fête de quartier, atelier nature commune, animation municipale, atelier botanique collectivité, animation développement durable mairie, atelier nature île-de-france"
        canonical="/animation-collectivites-mairies"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-sage/20 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium">
            <Building2 className="w-4 h-4" />
            Collectivités & Mairies
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal">
            Animations <span className="text-sage">Botaniques</span> pour vos Événements Municipaux
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Bien plus que des ateliers créatifs : une approche ethnobotanique qui tisse des ponts entre création artistique, savoirs botaniques et histoire des relations humains-plantes. Animations clé en main pour vos événements municipaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white">
              <Link to="/contact">Devis gratuit sous 24h <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sage text-sage hover:bg-sage/10">
              <Link to="/workshops">Découvrir les ateliers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            Pourquoi choisir nos animations pour votre collectivité ?
          </h2>
          <p className="text-charcoal/60 text-center max-w-2xl mx-auto mb-10">
            Botanique Ludique accompagne les communes, intercommunalités et services municipaux dans l'organisation d'animations nature accessibles et fédératrices.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="border-sage/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{b.title}</h3>
                  <p className="text-sm text-charcoal/70">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ateliers */}
      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            Nos ateliers pour les collectivités
          </h2>
          <p className="text-charcoal/60 text-center max-w-2xl mx-auto mb-10">
            Chaque atelier est adaptable au nombre de participants, à l'espace disponible et au public visé. En intérieur comme en extérieur.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w, i) => (
              <Card key={i} className="border-sage/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-xl text-charcoal">{w.title}</h3>
                    <span className="text-xs font-medium bg-sage text-white px-2 py-1 rounded whitespace-nowrap">{w.highlight}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-charcoal/60">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{w.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" />{w.participants}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Échangeons sur votre projet", desc: "Décrivez votre événement, le public attendu et vos objectifs. Nous vous proposons les ateliers les plus adaptés." },
              { step: "2", title: "Devis personnalisé", desc: "Recevez un devis détaillé sous 24h, adapté à votre budget municipal et au nombre de participants." },
              { step: "3", title: "Animation clé en main", desc: "Nous apportons tout le matériel. Installation, animation et rangement inclus. Vous n'avez rien à prévoir." }
            ].map((s, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">{s.step}</div>
                <h3 className="font-display text-lg text-charcoal">{s.title}</h3>
                <p className="text-sm text-charcoal/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Pour quelles occasions ?</h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-8">
            Nos ateliers s'intègrent dans tous les temps forts de votre collectivité.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {occasions.map((o, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-charcoal shadow-sm">
                <CheckCircle className="w-4 h-4 text-sage" />{o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">Nos engagements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Matériaux naturels, bio ou recyclés — zéro plastique",
              "Approche pédagogique adaptée à tous les âges",
              "Sensibilisation au patrimoine végétal local",
              "Facturation adaptée aux budgets publics",
              "Attestation d'intervention fournie",
              "Assurance responsabilité civile professionnelle"
            ].map((e, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-sage/5 rounded-lg">
                <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <p className="text-charcoal">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Zone d'intervention</h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-8">
            Nous intervenons dans toute l'Île-de-France, avec une expertise particulière sur les départements 78, 92 et 95.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span key={city} className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm text-charcoal shadow-sm">
                <MapPin className="w-3 h-3 text-sage" />{city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display">Organisez une animation nature dans votre commune</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Contactez-nous pour recevoir un devis personnalisé et gratuit. Réponse garantie sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sage hover:bg-sage-dark">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href="tel:0609831606">Appeler le 06 09 83 16 06</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingCollectivites;
