import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, Leaf, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierBotaniqueEnfantYvelines = () => {
  const cities = [
    { name: "Saint-Germain-en-Laye", link: "/atelier-botanique-saint-germain-en-laye" },
    { name: "Versailles", link: "/atelier-botanique-versailles" },
    { name: "Chatou", link: "/atelier-botanique-chatou" },
    { name: "Le Vésinet", link: "/atelier-botanique-le-vesinet" },
    { name: "Le Pecq", link: "/atelier-botanique-le-pecq" },
    { name: "Conflans-Sainte-Honorine", link: "/atelier-botanique-conflans-sainte-honorine" },
    { name: "Poissy", link: "/ateliers-botaniques-yvelines" },
    { name: "Mantes-la-Jolie", link: "/ateliers-botaniques-yvelines" }
  ];

  const faqQuestions = [
    { question: "Quels ateliers nature pour enfants dans les Yvelines ?", answer: "Bombes à graines (dès 3 ans), terrarium (dès 6 ans), herbier créatif (dès 5 ans), teinture végétale (dès 7 ans), kokedama (dès 6 ans). Chaque atelier est adapté à l'âge et au contexte." },
    { question: "Intervenez-vous dans les écoles des Yvelines ?", answer: "Oui, nous intervenons dans les écoles maternelles et primaires de tout le département 78. Nos interventions sont conformes aux programmes scolaires et tout le matériel est fourni." },
    { question: "Proposez-vous des ateliers pendant les vacances scolaires ?", answer: "Oui, nous proposons des ateliers pour les centres de loisirs et les stages vacances dans les Yvelines. Format découverte (2h) ou journée complète." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Atelier Botanique Enfant Yvelines (78)"
        description="Ateliers botaniques pour enfants dans les Yvelines (78). Activités nature : terrarium, teinture végétale, herbier. Écoles, centres de loisirs à Saint-Germain, Versailles, Chatou."
        keywords="atelier botanique enfant yvelines, atelier nature enfant 78, activité plantes enfant saint-germain, animation nature enfant versailles"
        canonical="/atelier-botanique-enfant-yvelines"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique enfant", name: "Atelier Botanique Enfant Yvelines (78)", description: "Ateliers botaniques ludiques pour enfants dans les Yvelines." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Sparkles className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques <span className="text-sage">Enfants</span> dans les Yvelines
              </h1>
              <p className="subtitle-italic text-lg mb-6">Ludiques · Pédagogiques · Dès 3 ans · Tout le département 78</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Les Yvelines offrent un cadre naturel exceptionnel pour éveiller les enfants à la botanique :
                <strong> forêts, bords de Seine, parcs historiques</strong>. Nos ateliers transforment ces richesses
                en aventures ludiques et scientifiques.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryTerrarium, title: "Terrarium enfant", desc: "Créer un monde miniature" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Les couleurs de la nature" },
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais" }
              ].map((a, i) => (
                <div key={i} className="overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-shadow">
                  <img src={a.src} alt={`${a.title} Yvelines`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Nos villes d'intervention</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <Link to={city.link} key={i} className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center hover:bg-sage hover:text-[hsl(var(--cream))] transition-all shadow-brutal group border-brutal shadow-brutal">
                    <span className="block text-sage-dark font-semibold group-hover:text-[hsl(var(--cream))]">📍 {city.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-sand p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Infos pratiques</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Matériel fourni", "Création à emporter", "Dès 3 ans", "8 à 30 enfants", "Déplacement dans tout le 78", "Devis gratuit sous 24h"].map((b, i) => (
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Un atelier nature pour vos enfants dans les Yvelines ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le 78 · Dès 3 ans</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/animation-scolaire-nature" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Ateliers scolaires</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierBotaniqueEnfantYvelines;
