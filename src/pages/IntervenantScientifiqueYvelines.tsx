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

const IntervenantScientifiqueYvelines = () => {
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
    { question: "Pourquoi faire appel à un intervenant scientifique dans les Yvelines ?", answer: "Les Yvelines offrent un patrimoine naturel exceptionnel — forêt de Saint-Germain, jardins de Versailles, bords de Seine. Un intervenant scientifique enrichit cette connexion à la nature en apportant des connaissances ethnobotaniques et culturelles uniques." },
    { question: "Pour quels publics intervenez-vous dans les Yvelines ?", answer: "Entreprises (team building RSE), écoles et centres de loisirs, EHPAD et résidences seniors, MJC, centres sociaux, médiathèques et associations. Chaque intervention est adaptée au contexte et à l'âge des participants." },
    { question: "Vous déplacez-vous dans toutes les Yvelines ?", answer: "Oui, nous intervenons dans l'ensemble du département des Yvelines (78), de Saint-Germain-en-Laye à Mantes-la-Jolie. Nous nous déplaçons dans vos locaux avec tout le matériel nécessaire." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Intervenant Scientifique Nature Yvelines (78)"
        description="Intervenant scientifique botanique dans les Yvelines (78). Ateliers nature pour entreprises, écoles, EHPAD à Saint-Germain-en-Laye, Versailles, Chatou."
        keywords="intervenant scientifique yvelines, intervenant botanique 78, animation scientifique nature yvelines, intervenant nature saint-germain, intervenant scientifique versailles"
        canonical="/intervenant-scientifique-yvelines"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Intervention scientifique nature", name: "Intervenant Scientifique Nature Yvelines (78)", description: "Interventions scientifiques botaniques dans les Yvelines." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Intervenant Scientifique dans les Yvelines (78)
              </h1>
              <p className="subtitle-italic text-lg mb-6">Animatrice ethnobotaniste · Interventions scientifiques · De Saint-Germain à Versailles</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Les Yvelines possèdent un <strong>patrimoine botanique exceptionnel</strong>. Notre intervenant scientifique exploite cette richesse
                pour proposer des ateliers mêlant <strong>science, histoire et créativité</strong> dans tout le département.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Science et nature dans les Yvelines
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    De la <strong>forêt domaniale de Saint-Germain</strong> aux <strong>jardins royaux de Versailles</strong>, les Yvelines
                    offrent un terrain d'exploration botanique unique. Nos interventions scientifiques s'ancrent dans ce territoire
                    en explorant les usages traditionnels des plantes locales et leur rôle dans l'histoire culturelle de la région.
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
                  <img src={a.src} alt={`${a.title} Yvelines`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-white">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sage/10 rounded-lg p-8 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos interventions dans les Yvelines
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <Link to={city.link} key={i} className="bg-white px-4 py-3 rounded-lg text-center hover:bg-sage hover:text-off-white transition-all shadow-sm group">
                    <span className="block text-sage-dark font-semibold group-hover:text-off-white">📍 {city.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Pourquoi nous choisir ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Animatrice ethnobotaniste formée à l'EHESS", "Déplacement dans tout le 78", "Matériel fourni intégralement", "Approche scientifique et culturelle", "Adaptée à tout public", "Devis gratuit sous 24h"].map((b, i) => (
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Intervenant scientifique dans les Yvelines — contactez-nous</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le département 78 · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/ateliers-botaniques-yvelines" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Nos ateliers Yvelines</Link>
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

export default IntervenantScientifiqueYvelines;
