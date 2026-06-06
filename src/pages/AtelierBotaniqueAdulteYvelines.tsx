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

const AtelierBotaniqueAdulteYvelines = () => {
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
    { question: "Quels ateliers botaniques pour adultes dans les Yvelines ?", answer: "Kokedama, teinture végétale, terrarium, vannerie sauvage, herbier contemporain. Chaque atelier est enrichi d'une dimension ethnobotanique unique." },
    { question: "Peut-on organiser un atelier privé dans les Yvelines ?", answer: "Oui, nous proposons des formules sur-mesure pour événements privés : EVJF, anniversaires, soirées entre amis. De 6 à 20 personnes, dans vos locaux ou un espace partenaire." },
    { question: "Proposez-vous des ateliers réguliers en MJC ?", answer: "Oui, nous animons des cycles d'ateliers botaniques en MJC et centres culturels des Yvelines. Contactez-nous pour connaître les structures partenaires." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Atelier Botanique Adulte Yvelines (78)"
        description="Ateliers botaniques pour adultes dans les Yvelines (78). Kokedama, teinture végétale, terrarium. Loisirs nature à Saint-Germain, Versailles, Chatou."
        keywords="atelier botanique adulte yvelines, atelier nature adulte 78, cours plantes adulte saint-germain, loisir créatif botanique versailles"
        canonical="/atelier-botanique-adulte-yvelines"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique adulte", name: "Atelier Botanique Adulte Yvelines (78)", description: "Ateliers botaniques créatifs pour adultes dans les Yvelines." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Palette className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques <span className="text-sage">Adultes</span> dans les Yvelines
              </h1>
              <p className="subtitle-italic text-lg mb-6">Créatifs · Ethnobotaniques · Tous niveaux · Tout le département 78</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Les Yvelines et leur patrimoine naturel exceptionnel forment le cadre idéal pour des
                <strong> ateliers botaniques créatifs et enrichissants</strong>. Kokedama, teinture végétale, terrarium…
                chaque atelier est une parenthèse de nature et de savoir.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Couleurs ancestrales" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Jardin miniature" }
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
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Nos villes d'intervention</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <Link to={city.link} key={i} className="bg-white px-4 py-3 rounded-lg text-center hover:bg-sage hover:text-off-white transition-all shadow-sm group">
                    <span className="block text-sage-dark font-semibold group-hover:text-off-white">📍 {city.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Infos pratiques</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Matériel fourni", "Création à emporter", "6 à 20 personnes", "1h30 à 3h", "Déplacement dans tout le 78", "Devis gratuit sous 24h"].map((b, i) => (
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Un atelier botanique adulte dans les Yvelines ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le 78 · Tous niveaux</p>
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

export default AtelierBotaniqueAdulteYvelines;
