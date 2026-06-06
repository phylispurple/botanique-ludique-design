import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, Palette, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierBotaniqueAdulteHautsDeSeine = () => {
  const cities = ["Boulogne-Billancourt", "Nanterre", "Rueil-Malmaison", "Issy-les-Moulineaux", "Levallois-Perret", "Neuilly-sur-Seine", "Colombes", "Courbevoie"];

  const faqQuestions = [
    { question: "Proposez-vous des ateliers adultes en entreprise dans le 92 ?", answer: "Oui, nous intervenons régulièrement dans les entreprises des Hauts-de-Seine pour des team buildings botaniques, des animations RSE et des séminaires nature. La Défense, Boulogne, Issy — nous couvrons tout le département." },
    { question: "Quels sont vos ateliers les plus populaires pour adultes ?", answer: "Le kokedama et le terrarium sont les plus demandés pour les événements privés et team buildings. La teinture végétale est privilégiée par les MJC et centres culturels pour des cycles approfondis." },
    { question: "Peut-on offrir un atelier en bon cadeau ?", answer: "Oui, nous proposons des bons cadeaux pour tous nos ateliers. Contactez-nous pour un bon personnalisé." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Atelier Botanique Adulte Hauts-de-Seine (92)"
        description="Ateliers botaniques pour adultes dans les Hauts-de-Seine (92). Kokedama, teinture végétale, terrarium. Loisirs nature à Boulogne, Nanterre, Rueil-Malmaison."
        keywords="atelier botanique adulte hauts-de-seine, atelier nature adulte 92, cours plantes adulte boulogne, loisir créatif botanique nanterre"
        canonical="/atelier-botanique-adulte-hauts-de-seine"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique adulte", name: "Atelier Botanique Adulte Hauts-de-Seine (92)", description: "Ateliers botaniques créatifs pour adultes dans les Hauts-de-Seine." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Palette className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques <span className="text-sage">Adultes</span> dans les Hauts-de-Seine
              </h1>
              <p className="subtitle-italic text-lg mb-6">Créatifs · Ethnobotaniques · Tous niveaux · Tout le département 92</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Des <strong>ateliers botaniques pour adultes</strong> au cœur des Hauts-de-Seine. Que vous soyez salarié à La Défense
                ou habitant de Boulogne-Billancourt, offrez-vous une <strong>parenthèse créative et végétale</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Chimie des couleurs" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Écosystème en bocal" }
              ].map((a, i) => (
                <div key={i} className="overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-shadow">
                  <img src={a.src} alt={`${a.title} Hauts-de-Seine`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Villes d'intervention</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center shadow-brutal border-brutal shadow-brutal">
                    <span className="text-sage-dark font-semibold"><MapPin className="w-4 h-4 inline mr-1" />{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sand p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Infos pratiques</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Matériel fourni", "Création à emporter", "6 à 20 personnes", "1h30 à 3h", "Tout le département 92", "Devis gratuit sous 24h"].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Questions fréquentes</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 p-6 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Un atelier botanique adulte dans le 92 ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le 92 · Tous niveaux</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/atelier-botanique-boulogne-billancourt" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Nos ateliers dans le 92</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierBotaniqueAdulteHautsDeSeine;
