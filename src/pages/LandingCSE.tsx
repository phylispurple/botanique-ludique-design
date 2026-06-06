import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { Building2, Users, Gift, Leaf, Clock, MapPin, ArrowRight, CheckCircle, Euro } from "lucide-react";

const LandingCSE = () => {
  const advantages = [
    { icon: Gift, title: "Activité originale", description: "Animation nature créative que vos salariés n'oublieront pas." },
    { icon: Leaf, title: "Démarche RSE", description: "Activité éco-responsable alignée avec vos engagements." },
    { icon: Users, title: "Cohésion d'équipe", description: "Favorise les échanges dans une ambiance détendue." },
    { icon: CheckCircle, title: "Clé en main", description: "Animation complète avec tout le matériel fourni." }
  ];

  const workshops = [
    { title: "Kokedama d'équipe", price: "45€/pers", duration: "2h", participants: "10-30 pers" },
    { title: "Terrarium collectif", price: "50€/pers", duration: "1h30", participants: "10-30 pers" },
    { title: "Teinture végétale", price: "55€/pers", duration: "2h30", participants: "10-20 pers" },
    { title: "Bombes à graines", price: "25€/pers", duration: "1h30", participants: "10-40 pers" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Animation CSE & Comité d'Entreprise - Ateliers Nature" description="Animations botaniques pour CSE en Île-de-France : Paris, Yvelines (78), Hauts-de-Seine (92), Val-d'Oise (95). Ateliers nature créatifs. Devis gratuit sous 24h." keywords="animation cse, atelier comité entreprise, activité cse nature, team building cse paris, animation cse val d'oise" canonical="/cse-entreprise" />
      <Navigation />
      <LandingPhotoStrip />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-sage/20 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium"><Building2 className="w-4 h-4" />Activités pour Comités d'Entreprise</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal">Animations Nature pour <span className="text-sage">CSE & CE</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Plus qu'un atelier créatif : une approche ethnobotanique qui explore les relations humains-plantes à travers la création artistique. Des ateliers originaux et porteurs de sens pour vos salariés.</p>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white"><Link to="/contact">Devis gratuit sous 24h<ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">Pourquoi choisir un atelier nature ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6 text-center"><div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4"><a.icon className="w-6 h-6 text-sage" /></div><h3 className="font-display text-lg text-charcoal mb-2">{a.title}</h3><p className="text-sm text-charcoal/70">{a.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">Nos ateliers pour CSE</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((w, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6"><div className="flex justify-between items-start mb-3"><h3 className="font-display text-xl text-charcoal">{w.title}</h3><span className="text-sage font-medium text-sm bg-sage/10 px-3 py-1 rounded-full">{w.price}</span></div><div className="flex gap-4 text-sm text-charcoal/60"><span className="flex items-center gap-1"><Clock className="w-4 h-4" />{w.duration}</span><span className="flex items-center gap-1"><Users className="w-4 h-4" />{w.participants}</span></div></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Zone d'intervention</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Paris", "La Défense", "Hauts-de-Seine (92)", "Yvelines (78)", "Val-d'Oise (95)", "Nanterre", "Boulogne-Billancourt", "Cergy"].map((city) => (
              <span key={city} className="inline-flex items-center gap-1 bg-[hsl(var(--yellow))]/15 px-4 py-2 rounded-full text-sm text-charcoal"><MapPin className="w-3 h-3 text-sage" />{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Prêt à proposer une activité originale ?</h2>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark"><Link to="/contact">Demander un devis gratuit</Link></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingCSE;