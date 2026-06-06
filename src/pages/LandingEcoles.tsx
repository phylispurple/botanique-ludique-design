import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { GraduationCap, BookOpen, Users, Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const LandingEcoles = () => {
  const workshopsByLevel = [
    { level: "Maternelle (PS-MS-GS)", workshops: ["Bombes à graines", "Découverte sensorielle", "Plantation de graines"] },
    { level: "Cycle 2 (CP-CE2)", workshops: ["Herbier créatif", "Mini-terrarium", "Semis et bouturage"] },
    { level: "Cycle 3 (CM1-CM2)", workshops: ["Teinture végétale", "Herbier scientifique", "Écosystèmes"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Animation Scolaire Nature - Ateliers Botaniques Écoles" description="Interventions pédagogiques nature dans les écoles maternelles et primaires en Île-de-France : Paris, Yvelines, Hauts-de-Seine, Val-d'Oise. Ateliers botaniques." keywords="intervention scolaire nature, animation école botanique, atelier pédagogique plantes, intervention scolaire val d'oise" canonical="/ecoles-scolaire" />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-sage/20 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium"><GraduationCap className="w-4 h-4" />Interventions pédagogiques</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal">Ateliers Nature pour <span className="text-sage">Écoles</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Des interventions qui allient création artistique et anthropologie de la nature : vos élèves explorent les savoirs botaniques et les relations humains-plantes à travers la pratique.</p>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white"><Link to="/contact">Demander un devis<ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
        </div>
      </section>
      <LandingPhotoStrip />

      <section className="py-16 px-4 bg-[hsl(var(--yellow))]/15">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">Ateliers par niveau</h2>
          <div className="space-y-6">
            {workshopsByLevel.map((level, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6"><h3 className="font-display text-xl text-charcoal mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-sage" />{level.level}</h3><div className="flex flex-wrap gap-3">{level.workshops.map((w, j) => (<span key={j} className="bg-sage/10 text-charcoal px-4 py-2 rounded-full text-sm">{w}</span>))}</div></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-sage/20"><CardContent className="p-8">
            <h2 className="text-2xl font-display text-charcoal mb-6">Informations pratiques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><h3 className="font-medium text-charcoal mb-3">Organisation</h3><ul className="space-y-2 text-charcoal/70">{["Intervention en classe ou en extérieur", "Classe entière ou demi-groupe", "Tout le matériel est fourni", "Création à emporter"].map((item, i) => (<li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />{item}</li>))}</ul></div>
              <div><h3 className="font-medium text-charcoal mb-3">Financement</h3><ul className="space-y-2 text-charcoal/70">{["Coopérative scolaire", "Budget mairie / commune", "Association de parents", "Devis adapté à votre budget"].map((item, i) => (<li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />{item}</li>))}</ul></div>
            </div>
          </CardContent></Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Zone d'intervention</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Paris", "Hauts-de-Seine (92)", "Yvelines (78)", "Val-d'Oise (95)", "Versailles", "Saint-Germain-en-Laye", "Cergy", "Pontoise"].map((city) => (
              <span key={city} className="inline-flex items-center gap-1 bg-[hsl(var(--yellow))]/15 px-4 py-2 rounded-full text-sm text-charcoal"><MapPin className="w-3 h-3 text-sage" />{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Envie d'un atelier nature dans votre classe ?</h2>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark"><Link to="/contact">Demander un devis</Link></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingEcoles;