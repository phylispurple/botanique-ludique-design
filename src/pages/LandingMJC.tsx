import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Users, Palette, MapPin, ArrowRight, CheckCircle, Clock } from "lucide-react";

const LandingMJC = () => {
  const workshops = [
    { title: "Kokedama", price: "45€/pers", duration: "2h-2h30", public: "Adultes" },
    { title: "Teinture végétale", price: "55€/pers", duration: "2h30-3h", public: "Adultes" },
    { title: "Terrarium", price: "50€/pers", duration: "1h30-2h", public: "Tout public" },
    { title: "Vannerie sauvage", price: "60€/pers", duration: "2h30-3h", public: "Adultes" },
    { title: "Herbier créatif", price: "40€/pers", duration: "2h", public: "Tout public" },
    { title: "Bombes à graines", price: "25€/pers", duration: "1h30", public: "Familles" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Ateliers MJC & Associations - Cours Botanique Adultes" description="Ateliers botaniques pour MJC et associations en Île-de-France : Paris, Yvelines, Hauts-de-Seine, Val-d'Oise. Kokedama, teinture végétale, vannerie." keywords="atelier mjc botanique, cours nature association, atelier adultes plantes, atelier mjc val d'oise" canonical="/mjc-associations" />
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-sage/20 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium"><Palette className="w-4 h-4" />Loisirs créatifs nature</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal">Ateliers pour <span className="text-sage">MJC & Associations</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Quand l'atelier accessible rencontre l'anthropologie de la nature : des cours qui tissent des ponts entre création artistique, savoirs botaniques et histoire des relations humains-plantes.</p>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white"><Link to="/contact">Proposer un atelier<ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">Catalogue d'ateliers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w, i) => (
              <Card key={i} className="border-sage/20"><CardContent className="p-6"><div className="flex justify-between items-start mb-3"><h3 className="font-display text-xl text-charcoal">{w.title}</h3><span className="text-sage font-medium text-sm bg-sage/10 px-2 py-1 rounded">{w.price}</span></div><div className="flex gap-3 text-xs text-charcoal/60"><span className="flex items-center gap-1 bg-background px-2 py-1 rounded"><Clock className="w-3 h-3" />{w.duration}</span><span className="flex items-center gap-1 bg-background px-2 py-1 rounded"><Users className="w-3 h-3" />{w.public}</span></div></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Ils me font confiance</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["MJC de Chatou", "MJC du Vésinet", "MJC de Saint-Germain-en-Laye", "Centres culturels du 92"].map((partner) => (
              <span key={partner} className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm text-charcoal shadow-sm"><CheckCircle className="w-3 h-3 text-sage" />{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Zone d'intervention</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Paris", "Hauts-de-Seine (92)", "Yvelines (78)", "Val-d'Oise (95)", "Chatou", "Le Vésinet", "Cergy", "Pontoise"].map((city) => (
              <span key={city} className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm text-charcoal"><MapPin className="w-3 h-3 text-sage" />{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Envie de proposer un atelier nature ?</h2>
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark"><Link to="/contact">Demander un devis</Link></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingMJC;