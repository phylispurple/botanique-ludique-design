import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Users, Leaf, TreePine, Award, Clock, MapPin, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const LandingTeamBuilding = () => {
  const benefits = [
    { icon: Users, title: "Cohésion d'équipe", description: "Renforce les liens dans une ambiance détendue." },
    { icon: Leaf, title: "Engagement RSE", description: "Activité éco-responsable alignée avec vos valeurs." },
    { icon: Sparkles, title: "Bien-être au travail", description: "Parenthèse nature qui réduit le stress." },
    { icon: Award, title: "Création tangible", description: "Chaque participant repart avec sa création." }
  ];

  const workshops = [
    { title: "Kokedama d'équipe", duration: "2h", participants: "10-50 pers", highlight: "Le plus demandé" },
    { title: "Teinture végétale collaborative", duration: "2h30", participants: "10-40 pers", highlight: "Création collective" },
    { title: "Terrarium d'entreprise", duration: "1h30", participants: "10-40 pers", highlight: "Pour les bureaux" },
    { title: "Bombes à graines RSE", duration: "1h30", participants: "10-60 pers", highlight: "Action RSE" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Team Building Nature Paris - Atelier RSE Entreprise" description="Team building nature et RSE en Île-de-France. Ateliers botaniques pour entreprises : kokedama, teinture végétale, terrarium." keywords="team building nature paris, atelier rse entreprise, team building écologique" canonical="/team-building-nature" />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-sage/20 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium"><TreePine className="w-4 h-4" />Team Building & RSE</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal">Team Building <span className="text-sage">Nature</span> en Île-de-France</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Renforcez la cohésion de vos équipes et affichez vos valeurs RSE.</p>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white"><Link to="/contact">Devis gratuit sous 24h<ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">Pourquoi un team building nature ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6 text-center"><div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4"><b.icon className="w-6 h-6 text-sage" /></div><h3 className="font-display text-lg text-charcoal mb-2">{b.title}</h3><p className="text-sm text-charcoal/70">{b.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">Nos ateliers team building</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((w, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6"><div className="flex justify-between items-start mb-3"><h3 className="font-display text-xl text-charcoal">{w.title}</h3><span className="text-xs font-medium bg-sage text-white px-2 py-1 rounded">{w.highlight}</span></div><div className="flex gap-4 text-sm text-charcoal/60"><span className="flex items-center gap-1"><Clock className="w-4 h-4" />{w.duration}</span><span className="flex items-center gap-1"><Users className="w-4 h-4" />{w.participants}</span></div></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Pour quelles occasions ?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Séminaire", "Journée de cohésion", "Journée RSE", "Onboarding", "Summer party", "Fête de fin d'année", "Anniversaire entreprise", "Offsite"].map((o, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full text-charcoal"><CheckCircle className="w-4 h-4 text-sage" />{o}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Zone d'intervention</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Paris", "La Défense", "Hauts-de-Seine (92)", "Yvelines (78)", "Boulogne-Billancourt", "Nanterre", "Courbevoie", "Rueil-Malmaison", "Versailles"].map((city) => (
              <span key={city} className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm text-charcoal shadow-sm"><MapPin className="w-3 h-3 text-sage" />{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Prêt à organiser votre team building nature ?</h2>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark"><Link to="/contact">Demander un devis gratuit</Link></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingTeamBuilding;