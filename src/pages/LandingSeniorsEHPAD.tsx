import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Heart, Brain, Users, Flower2, Clock, MapPin, Phone, ArrowRight, Sparkles, Leaf } from "lucide-react";

const LandingSeniorsEHPAD = () => {
  const benefits = [
    { icon: Brain, title: "Stimulation cognitive", description: "Éveil des sens, travail de la mémoire et maintien des capacités cognitives." },
    { icon: Heart, title: "Bien-être émotionnel", description: "Réduction du stress et de l'anxiété, moments de sérénité." },
    { icon: Users, title: "Lien social", description: "Moments de partage et de convivialité entre résidents." },
    { icon: Sparkles, title: "Valorisation personnelle", description: "Fierté de créer quelque chose de beau à emporter." }
  ];

  const workshops = [
    { title: "Sachets de lavande", description: "Atelier sensoriel autour des plantes aromatiques.", duration: "1h", participants: "6-12 personnes" },
    { title: "Mini-kokedama", description: "Création d'une sphère végétale japonaise adaptée.", duration: "1h30", participants: "6-10 personnes" },
    { title: "Herbier mémoire", description: "Reconnaissance et collage de plantes familières.", duration: "1h", participants: "8-12 personnes" },
    { title: "Compositions florales", description: "Création de bouquets avec des fleurs de saison.", duration: "1h", participants: "6-10 personnes" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Animation EHPAD & Seniors - Ateliers Botaniques Adaptés" description="Animations nature pour EHPAD et résidences seniors en Île-de-France. Ateliers botaniques adaptés : kokedama, sachets parfumés, herbier mémoire." keywords="animation ehpad, atelier seniors nature, activité maison retraite, hortithérapie" canonical="/seniors-ehpad" />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-sage/20 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium"><Heart className="w-4 h-4" />Ateliers adaptés aux personnes âgées</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal">Animations Botaniques pour <span className="text-sage">EHPAD & Seniors</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Des ateliers nature spécialement conçus pour le bien-être des personnes âgées.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white"><Link to="/contact">Demander un devis gratuit<ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-8 text-center">Les bienfaits pour les seniors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6 text-center"><div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4"><benefit.icon className="w-6 h-6 text-sage" /></div><h3 className="font-display text-lg text-charcoal mb-2">{benefit.title}</h3><p className="text-sm text-charcoal/70">{benefit.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-8 text-center">Nos ateliers adaptés</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((w, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0"><Flower2 className="w-5 h-5 text-sage" /></div><div><h3 className="font-display text-xl text-charcoal mb-2">{w.title}</h3><p className="text-charcoal/70 mb-4">{w.description}</p><div className="flex gap-4 text-sm text-charcoal/60"><span className="flex items-center gap-1"><Clock className="w-4 h-4" />{w.duration}</span><span className="flex items-center gap-1"><Users className="w-4 h-4" />{w.participants}</span></div></div></div></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Zone d'intervention</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Paris", "Hauts-de-Seine (92)", "Yvelines (78)", "Nanterre", "Boulogne", "Rueil-Malmaison", "Versailles", "Saint-Germain-en-Laye"].map((city) => (
              <span key={city} className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm text-charcoal"><MapPin className="w-3 h-3 text-sage" />{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Offrez un moment de nature à vos résidents</h2>
          <p className="text-white/80 mb-8">Devis gratuit sous 24h. Tarifs adaptés aux structures.</p>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark"><Link to="/contact">Demander un devis gratuit</Link></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingSeniorsEHPAD;