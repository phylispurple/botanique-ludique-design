import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Globe, GraduationCap, Heart, Building, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const cities = [
    { name: "Boulogne-Billancourt" },
    { name: "Nanterre" },
    { name: "Rueil-Malmaison" },
    { name: "Issy-les-Moulineaux" },
    { name: "Levallois-Perret" },
    { name: "Colombes" },
    { name: "Clamart" },
];

const faqQuestions = [
  { question: "Proposez-vous de la médiation culturelle autour de la nature dans les Hauts-de-Seine (92) ?", answer: "Oui ! Nous intervenons dans tout le département des Hauts-de-Seine (92), notamment à Boulogne-Billancourt, Nanterre, Rueil-Malmaison, Issy-les-Moulineaux, Levallois-Perret. Nous nous déplaçons dans vos locaux ou structures partenaires." },
  { question: "Quels publics sont concernés par la médiation culturelle autour de la nature ?", answer: "Nous intervenons auprès de tous les publics : entreprises, écoles, EHPAD, collectivités, associations, médiathèques, musées et particuliers." },
  { question: "Quels formats proposez-vous ?", answer: "Conférences, ateliers participatifs, balades botaniques, interventions scolaires, animations événementielles. Chaque format est adapté à vos besoins." },
  { question: "Combien coûte une intervention ?", answer: "Les tarifs dépendent du format, de la durée et du nombre de participants. Contactez-nous pour un devis gratuit sous 24h." },
];

const MediationCulturelleNatureHautsDeSeine = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Médiation Culturelle Nature Hauts-de-Seine (92)"
        description="Médiation Culturelle Nature dans les Hauts-de-Seine (92). Conférences, ateliers et interventions botaniques à Boulogne-Billancourt, Nanterre, Rueil-Malmaison, Issy-les-Moulineaux, Levallois-Perret. Ethnobotaniste diplômée EHESS."
        keywords="médiation culturelle nature, ethnobotanique, conférence plantes cultures, hauts-de-seine, 92, boulogne-billancourt, nanterre, rueil-malmaison, issy-les-moulineaux"
        canonical="/mediation-culturelle-nature-hauts-de-seine"
        region="FR-92"
        city="Boulogne-Billancourt"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Médiation Culturelle Nature",
        name: "Médiation Culturelle Nature - Hauts-de-Seine (92)",
        description: "Médiation Culturelle Nature pour tous publics dans les Hauts-de-Seine.",
        areaServed: ["Hauts-de-Seine"]
      }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Globe className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Médiation Culturelle Nature dans les Hauts-de-Seine (92)
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Médiation culturelle autour de la nature · Hauts-de-Seine · Tous publics
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique propose des interventions de <strong>médiation culturelle autour de la nature</strong> dans tout le département des Hauts-de-Seine (92). 
                Portée par Vanessa Charlery, ethnobotaniste diplômée de l'EHESS, notre approche unique mêle <strong>sciences du vivant, anthropologie et créativité</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Médiation Culturelle Nature à Boulogne-Billancourt et dans les Hauts-de-Seine
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Nous intervenons auprès des <strong>entreprises, écoles, EHPAD, collectivités et associations</strong> des Hauts-de-Seine 
                    pour des conférences, ateliers participatifs et animations autour des plantes et de la biodiversité.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Kokedama, teinture végétale, terrarium, reconnaissance de plantes, ethnobotanique : nos formats s'adaptent à tous les publics 
                    et à tous les contextes, en intérieur comme en extérieur.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers et interventions
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { src: galleryKokedama, title: "Kokedama & créations végétales", desc: "Ateliers créatifs autour du jardinage japonais et des compositions végétales. Un moment zen et convivial." },
                  { src: galleryTeinture, title: "Teinture végétale", desc: "Découvrez les pigments naturels et les savoirs teinturiers ancestraux. Science, histoire et artisanat." },
                  { src: galleryTerrarium, title: "Terrarium & biodiversité", desc: "Créez un micro-écosystème en bocal et comprenez les cycles du vivant. Ludique et pédagogique." }
                ].map((atelier, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-0">
                      <img src={atelier.src} alt={`Médiation Culturelle Nature Hauts-de-Seine - ${atelier.title}`} className="w-full h-48 object-cover rounded-t-lg" loading="lazy" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>{atelier.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed text-sm">{atelier.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-sage/10 rounded-lg p-8 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                <MapPin className="w-6 h-6 inline-block mr-2" />
                Nos interventions dans les Hauts-de-Seine (92)
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <div key={i} className="bg-white rounded-lg p-4">
                    <p className="text-sm text-charcoal/70">📍 {city.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-charcoal/60 mt-6">
                Et dans toutes les communes des Hauts-de-Seine (92). 
                <Link to="/mediation-culturelle-nature-ile-de-france" className="text-sage underline">Voir toutes nos zones d'intervention</Link>
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Questions fréquentes</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-off-white rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                Un projet de médiation culturelle nature dans les Hauts-de-Seine ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Interventions sur mesure · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Voir nos ateliers</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MediationCulturelleNatureHautsDeSeine;
