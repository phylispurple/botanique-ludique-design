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

const IntervenantScientifiqueHautsDeSeine = () => {
  const cities = ["Boulogne-Billancourt", "Nanterre", "Rueil-Malmaison", "Issy-les-Moulineaux", "Levallois-Perret", "Neuilly-sur-Seine", "Colombes", "Courbevoie"];

  const faqQuestions = [
    { question: "Quels ateliers scientifiques proposez-vous dans les Hauts-de-Seine ?", answer: "Teinture végétale (chimie des pigments), terrarium (écosystèmes miniatures), kokedama (art végétal japonais), herbier (classification botanique). Chaque atelier intègre une dimension ethnobotanique unique." },
    { question: "Intervenez-vous dans les entreprises du 92 ?", answer: "Oui, nous intervenons dans les entreprises de La Défense, Boulogne-Billancourt, Issy-les-Moulineaux et tout le département pour des team buildings RSE, séminaires et animations QVCT." },
    { question: "Quel est le tarif d'une intervention scientifique ?", answer: "Le tarif dépend du format (durée, nombre de participants, matériel). Nous établissons un devis personnalisé gratuit sous 24h, adapté à votre budget et vos objectifs." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Intervenant Scientifique Nature Hauts-de-Seine (92)"
        description="Intervenant scientifique botanique dans les Hauts-de-Seine (92). Ateliers nature pour entreprises, écoles, EHPAD à Boulogne-Billancourt, Nanterre, Rueil-Malmaison."
        keywords="intervenant scientifique hauts-de-seine, intervenant botanique 92, animation scientifique nature 92, intervenant nature boulogne-billancourt, intervenant scientifique nanterre"
        canonical="/intervenant-scientifique-hauts-de-seine"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Intervention scientifique nature", name: "Intervenant Scientifique Hauts-de-Seine (92)", description: "Interventions scientifiques botaniques dans les Hauts-de-Seine." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Intervenant Scientifique dans les Hauts-de-Seine (92)
              </h1>
              <p className="subtitle-italic text-lg mb-6">Animatrice ethnobotaniste · Interventions scientifiques · Boulogne, Nanterre, Rueil</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Les Hauts-de-Seine allient <strong>dynamisme économique et espaces verts remarquables</strong>. Notre intervenant scientifique
                propose des ateliers botaniques innovants pour les entreprises de La Défense comme pour les écoles et EHPAD du département.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Science et botanique dans le 92
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Du <strong>parc de Saint-Cloud</strong> au <strong>jardin Albert Kahn</strong> à Boulogne, les Hauts-de-Seine possèdent
                    un patrimoine végétal riche. Nos interventions scientifiques explorent ces espaces en mêlant botanique,
                    <strong> ethnobotanique et créativité</strong> pour des ateliers mémorables.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal — science et esthétique" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Chimie des couleurs naturelles" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Biologie des écosystèmes miniatures" }
              ].map((a, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={a.src} alt={`${a.title} Hauts-de-Seine`} className="w-full h-48 object-cover" loading="lazy" />
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
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Pourquoi nous choisir ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Animatrice ethnobotaniste formée à l'EHESS", "Interventions dans tout le 92", "Matériel fourni", "Approche scientifique unique", "Tous publics, tous âges", "Devis gratuit sous 24h"].map((b, i) => (
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Intervenant scientifique dans le 92 — contactez-nous</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le département 92 · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/atelier-botanique-boulogne-billancourt" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Nos ateliers dans le 92</Link>
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

export default IntervenantScientifiqueHautsDeSeine;
