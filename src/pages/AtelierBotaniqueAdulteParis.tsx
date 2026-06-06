import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, BookOpen, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierBotaniqueAdulteParis = () => {
  const faqQuestions = [
    { question: "Où se déroulent vos ateliers adultes à Paris ?", answer: "Nous intervenons dans vos locaux (entreprise, MJC, association) dans tous les arrondissements, ou dans nos espaces partenaires au cœur de Paris. Tout le matériel est fourni." },
    { question: "Peut-on organiser un atelier privé entre amis ?", answer: "Oui ! EVJF, anniversaires, soirées entre amis — nous proposons des formules sur-mesure pour des groupes de 6 à 20 personnes. Kokedama, terrarium et teinture végétale sont les plus populaires." },
    { question: "Combien de temps dure un atelier adulte ?", answer: "Entre 1h30 et 3h selon l'atelier choisi. Le kokedama et le terrarium durent environ 1h30-2h, la teinture végétale et la vannerie 2h30-3h." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Atelier Botanique Adulte Paris (75)"
        description="Ateliers botaniques pour adultes à Paris. Kokedama, teinture végétale, terrarium, vannerie. Loisirs créatifs nature pour particuliers et entreprises. Tous arrondissements."
        keywords="atelier botanique adulte paris, atelier nature adulte paris, cours plantes adulte paris, loisir créatif botanique paris, atelier kokedama adulte paris"
        canonical="/atelier-botanique-adulte-paris"
        city="Paris"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique adulte", name: "Atelier Botanique Adulte Paris", description: "Ateliers botaniques créatifs pour adultes à Paris." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Palette className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques pour <span className="text-sage">Adultes</span> à Paris
              </h1>
              <p className="subtitle-italic text-lg mb-6">Créatifs · Scientifiques · Tous niveaux · Tous arrondissements</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Offrez-vous une <strong>parenthèse végétale au cœur de Paris</strong>. Nos ateliers botaniques invitent les adultes
                à créer, apprendre et se reconnecter à la nature à travers des <strong>savoir-faire artisanaux enrichis d'ethnobotanique</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Plus qu'un loisir créatif : une expérience ethnobotanique
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Chaque atelier est une invitation au voyage : l'histoire coloniale des plantes tinctoriales, les traditions japonaises
                    du kokedama, la chimie fascinante des pigments naturels. Vous repartez avec une <strong>création et des connaissances</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama Paris", desc: "Art végétal japonais en plein cœur de Paris" },
                { src: galleryTeinture, title: "Teinture végétale Paris", desc: "Couleurs naturelles, savoir-faire ancestral" },
                { src: galleryTerrarium, title: "Terrarium Paris", desc: "Un jardin miniature personnel" }
              ].map((a, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={a.src} alt={a.title} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-white">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Infos pratiques</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Matériel fourni intégralement", "Création à emporter", "6 à 20 participants", "1h30 à 3h selon l'atelier", "Tous arrondissements de Paris", "Devis gratuit sous 24h", "Aucun prérequis", "Idéal EVJF, anniversaires, team building"].map((b, i) => (
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Un atelier botanique pour adultes à Paris ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tous arrondissements · Tous niveaux</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/atelier-kokedama-paris" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Nos ateliers à Paris</Link>
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

export default AtelierBotaniqueAdulteParis;
