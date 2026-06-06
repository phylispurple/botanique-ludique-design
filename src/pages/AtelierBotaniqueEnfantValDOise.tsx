import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierBotaniqueEnfantValDOise = () => {
  const cities = ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Franconville", "Ermont", "Enghien-les-Bains", "Saint-Ouen-l'Aumône"];

  const faqQuestions = [
    { question: "Proposez-vous des ateliers enfants dans le Val-d'Oise ?", answer: "Oui, nous intervenons dans tout le Val-d'Oise (95) pour des ateliers botaniques adaptés aux enfants : terrarium, bombes à graines, teinture végétale, herbier créatif." },
    { question: "À partir de quel âge ?", answer: "Nos ateliers sont adaptés dès 3 ans. Le contenu et la durée sont ajustés à chaque tranche d'âge." },
    { question: "Intervenez-vous en milieu scolaire ?", answer: "Oui, nous intervenons dans les écoles, centres de loisirs, MJC et associations du Val-d'Oise. Interventions conformes aux programmes scolaires." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Atelier Botanique Enfant Val-d'Oise (95)"
        description="Ateliers botaniques pour enfants dans le Val-d'Oise (95). Activités nature : terrarium, teinture, herbier. Écoles, centres de loisirs à Cergy, Pontoise, Argenteuil."
        keywords="atelier botanique enfant val d'oise, atelier nature enfant 95, activité plantes enfant cergy, animation nature enfant pontoise, atelier enfant argenteuil"
        canonical="/atelier-botanique-enfant-val-d-oise"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique enfant", name: "Atelier Botanique Enfant Val-d'Oise (95)", description: "Ateliers botaniques pour enfants dans le Val-d'Oise." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Sparkles className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques <span className="text-sage">Enfants</span> dans le Val-d'Oise
              </h1>
              <p className="subtitle-italic text-lg mb-6">Ludiques · Pédagogiques · Dès 3 ans · Cergy, Pontoise, Argenteuil</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Le Val-d'Oise, entre <strong>nature et ville</strong>, offre un cadre idéal pour initier les enfants à la botanique.
                Nos ateliers éveillent la curiosité scientifique à travers des <strong>activités créatives et sensorielles</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryTerrarium, title: "Terrarium enfant", desc: "Un écosystème à emporter" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Couleurs naturelles magiques" },
                { src: galleryKokedama, title: "Kokedama", desc: "Boule de mousse vivante" }
              ].map((a, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={a.src} alt={`${a.title} Val-d'Oise`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-white">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sage/10 rounded-lg p-8 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Villes d'intervention</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <div key={i} className="bg-white px-4 py-3 rounded-lg text-center shadow-sm">
                    <span className="text-sage-dark font-semibold"><MapPin className="w-4 h-4 inline mr-1" />{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Infos pratiques</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Matériel fourni", "Création à emporter", "Dès 3 ans", "8 à 30 enfants", "Tout le département 95", "Devis gratuit sous 24h"].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Questions fréquentes</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-off-white rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Un atelier nature pour enfants dans le 95 ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le 95 · Dès 3 ans</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/animation-scolaire-nature" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Ateliers scolaires</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierBotaniqueEnfantValDOise;
