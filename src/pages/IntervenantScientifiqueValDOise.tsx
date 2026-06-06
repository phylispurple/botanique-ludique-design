import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, BookOpen, Leaf, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const IntervenantScientifiqueValDOise = () => {
  const cities = ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Franconville", "Ermont", "Enghien-les-Bains", "Saint-Ouen-l'Aumône"];

  const faqQuestions = [
    { question: "Proposez-vous des interventions scientifiques dans le Val-d'Oise ?", answer: "Oui, nous intervenons dans tout le Val-d'Oise (95), de Cergy-Pontoise à Argenteuil. Nos ateliers botaniques mêlent science, ethnobotanique et créativité pour tous les publics." },
    { question: "Quels formats d'intervention proposez-vous ?", answer: "Ateliers ponctuels (2h), demi-journées, journées complètes ou cycles sur plusieurs séances. Le format est adapté à votre structure et à vos objectifs pédagogiques." },
    { question: "Le matériel est-il fourni ?", answer: "Oui, nous apportons l'intégralité du matériel nécessaire. Vous n'avez rien à prévoir, si ce n'est un espace adapté (intérieur ou extérieur)." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Intervenant Scientifique Nature Val-d'Oise (95)"
        description="Intervenant scientifique botanique dans le Val-d'Oise (95). Ateliers nature pour entreprises, écoles, EHPAD à Cergy, Pontoise, Argenteuil."
        keywords="intervenant scientifique val d'oise, intervenant botanique 95, animation scientifique nature cergy, intervenant nature pontoise, intervenant scientifique argenteuil"
        canonical="/intervenant-scientifique-val-d-oise"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Intervention scientifique nature", name: "Intervenant Scientifique Val-d'Oise (95)", description: "Interventions scientifiques botaniques dans le Val-d'Oise." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Intervenant Scientifique dans le Val-d'Oise (95)
              </h1>
              <p className="subtitle-italic text-lg mb-6">Animatrice ethnobotaniste · Interventions scientifiques · Cergy, Pontoise, Argenteuil</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Le Val-d'Oise, entre <strong>plaines agricoles et forêts</strong>, offre un cadre idéal pour des interventions scientifiques
                autour du végétal. Notre ethnobotaniste propose des ateliers qui mêlent <strong>science, histoire et créativité</strong>.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    La botanique scientifique dans le 95
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Du <strong>Parc naturel régional du Vexin</strong> aux espaces verts de Cergy-Pontoise, le Val-d'Oise recèle
                    une biodiversité riche et variée. Nos interventions scientifiques s'appuient sur ce patrimoine naturel pour proposer
                    des ateliers ethnobotaniques qui explorent les <strong>liens entre les plantes et les cultures humaines</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais — science et création" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Chimie naturelle des pigments" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Écosystèmes en miniature" }
              ].map((a, i) => (
                <div key={i} className="overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-shadow">
                  <img src={a.src} alt={`${a.title} Val-d'Oise`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-white border-brutal shadow-brutal">
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
                  <div key={i} className="bg-white px-4 py-3 text-center shadow-brutal border-brutal shadow-brutal">
                    <span className="text-sage-dark font-semibold"><MapPin className="w-4 h-4 inline mr-1" />{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sand p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Pourquoi nous choisir ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Animatrice ethnobotaniste formée à l'EHESS", "Interventions dans tout le 95", "Matériel fourni", "Approche scientifique unique", "Tous publics, tous âges", "Devis gratuit sous 24h"].map((b, i) => (
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
                  <div key={i} className="bg-white p-6 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Intervenant scientifique dans le 95 — contactez-nous</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le département 95 · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/atelier-botanique-cergy" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Nos ateliers dans le 95</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LandingPhotoStrip />
      <Footer />
    </div>
  );
};

export default IntervenantScientifiqueValDOise;
