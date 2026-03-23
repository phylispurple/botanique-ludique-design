import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Leaf, GraduationCap, Heart, Building, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const cities = [
    { name: "Saint-Germain-en-Laye" },
    { name: "Versailles" },
    { name: "Chatou" },
    { name: "Le Vésinet" },
    { name: "Le Pecq" },
    { name: "Conflans-Sainte-Honorine" },
    { name: "Maurepas" },
    { name: "Poissy" },
];

const faqQuestions = [
  { question: "Proposez-vous de la médiation botanique dans les Yvelines (78) ?", answer: "Oui ! Nous intervenons dans tout le département des Yvelines (78), notamment à Saint-Germain-en-Laye, Versailles, Chatou, Le Vésinet, Le Pecq. Nous nous déplaçons dans vos locaux ou structures partenaires." },
  { question: "Quels publics sont concernés par la médiation botanique ?", answer: "Nous intervenons auprès de tous les publics : entreprises, écoles, EHPAD, collectivités, associations, médiathèques, musées et particuliers." },
  { question: "Quels formats proposez-vous ?", answer: "Conférences, ateliers participatifs, balades botaniques, interventions scolaires, animations événementielles. Chaque format est adapté à vos besoins." },
  { question: "Combien coûte une intervention ?", answer: "Les tarifs dépendent du format, de la durée et du nombre de participants. Contactez-nous pour un devis gratuit sous 24h." },
];

const MediationBotaniqueYvelines = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Médiation Botanique Yvelines (78)"
        description="Médiation Botanique dans les Yvelines (78). Conférences, ateliers et interventions botaniques à Saint-Germain-en-Laye, Versailles, Chatou, Le Vésinet, Le Pecq. Ethnobotaniste diplômée EHESS."
        keywords="médiation botanique, médiation végétale, atelier plantes, yvelines, 78, saint-germain-en-laye, versailles, chatou, le vésinet"
        canonical="/mediation-botanique-yvelines"
        region="FR-78"
        city="Saint-Germain-en-Laye"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Médiation Botanique",
        name: "Médiation Botanique - Yvelines (78)",
        description: "Médiation Botanique pour tous publics dans les Yvelines.",
        areaServed: ["Yvelines"]
      }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Médiation Botanique dans les Yvelines (78)
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Médiation botanique · Yvelines · Tous publics
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique propose des interventions de <strong>médiation botanique</strong> dans tout le département des Yvelines (78). 
                Portée par Vanessa Charlery, ethnobotaniste diplômée de l'EHESS, notre approche unique mêle <strong>sciences du vivant, anthropologie et créativité</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Médiation Botanique à Saint-Germain-en-Laye et dans les Yvelines
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Nous intervenons auprès des <strong>entreprises, écoles, EHPAD, collectivités et associations</strong> des Yvelines 
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
                      <img src={atelier.src} alt={`Médiation Botanique Yvelines - ${atelier.title}`} className="w-full h-48 object-cover rounded-t-lg" loading="lazy" />
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
                Nos interventions dans les Yvelines (78)
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <div key={i} className="bg-white rounded-lg p-4">
                    <p className="text-sm text-charcoal/70">📍 {city.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-charcoal/60 mt-6">
                Et dans toutes les communes des Yvelines (78). 
                <Link to="/mediation-botanique-ile-de-france" className="text-sage underline">Voir toutes nos zones d'intervention</Link>
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
                Besoin d'une médiation botanique dans les Yvelines ?
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

export default MediationBotaniqueYvelines;
