import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, CheckCircle, BookOpen, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AnimatriceNatureHautsDeSeine = () => {
  const cities = [
    { name: "Boulogne-Billancourt", detail: "Plus grande ville du 92", link: "/atelier-botanique-boulogne-billancourt" },
    { name: "Nanterre", detail: "Préfecture & université", link: "/atelier-botanique-nanterre" },
    { name: "Rueil-Malmaison", detail: "Parc de la Malmaison", link: "/atelier-botanique-rueil-malmaison" },
    { name: "Issy-les-Moulineaux", detail: "Dynamisme économique", link: "/contact" },
    { name: "Levallois-Perret", detail: "Densité urbaine & nature", link: "/contact" },
    { name: "Neuilly-sur-Seine", detail: "Bois de Boulogne", link: "/contact" },
    { name: "Colombes", detail: "Coulée verte", link: "/contact" },
    { name: "Courbevoie", detail: "La Défense & nature", link: "/contact" }
  ];

  const faqQuestions = [
    { question: "Intervenez-vous en entreprise dans les Hauts-de-Seine ?", answer: "Oui, nous intervenons régulièrement dans les entreprises du 92 — La Défense, Boulogne-Billancourt, Issy-les-Moulineaux, Rueil-Malmaison. Team building botanique, semaine QVCT, animation RSE : nous nous déplaçons dans vos locaux avec tout le matériel." },
    { question: "Quels ateliers proposez-vous aux écoles des Hauts-de-Seine ?", answer: "Nous proposons des ateliers adaptés de la maternelle au collège : teinture végétale, mini-terrariums, reconnaissance de plantes, biodiversité urbaine. Chaque atelier est conçu avec une dimension ethnobotanique pour éveiller la curiosité scientifique et culturelle des élèves." },
    { question: "Quel est le tarif d'une animation nature dans le 92 ?", answer: "Les tarifs dépendent du format (1h à une journée), du nombre de participants et du type de public. Nous proposons des tarifs adaptés aux collectivités et aux établissements publics. Devis gratuit sous 24h." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Animatrice Nature Hauts-de-Seine (92)"
        description="Animatrice nature et botanique dans les Hauts-de-Seine (92). Ateliers pour entreprises, écoles, EHPAD à Boulogne-Billancourt, Nanterre, Rueil-Malmaison, Issy-les-Moulineaux."
        keywords="animatrice nature hauts-de-seine, animatrice botanique 92, animation plantes boulogne-billancourt, atelier nature nanterre, animatrice scientifique 92, ethnobotaniste hauts-de-seine"
        canonical="/animatrice-nature-hauts-de-seine"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Animation nature et botanique",
        name: "Animatrice Nature Hauts-de-Seine (92)",
        description: "Animations botaniques dans les Hauts-de-Seine par une animatrice ethnobotaniste formée à l'EHESS."
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
                Animatrice Nature dans les Hauts-de-Seine (92)
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Animatrice ethnobotaniste · De Boulogne-Billancourt à Nanterre · Tous publics
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Les Hauts-de-Seine, département le plus dense après Paris, ont un <strong>besoin croissant de reconnexion à la nature</strong>. 
                Botanique Ludique propose des animations botaniques qui allient <strong>rigueur scientifique et approche ethnobotanique</strong>, 
                pour les entreprises de La Défense comme pour les écoles de Colombes ou les EHPAD de Rueil-Malmaison.
              </p>
            </div>

            {/* Approche */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    La nature au cœur du 92
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Malgré son urbanisation, le 92 recèle de <strong>trésors botaniques</strong> : le parc de la Malmaison (dont les collections 
                    sont liées à l'histoire coloniale de Joséphine de Beauharnais), les bois de Boulogne et de Meudon, les jardins Albert-Kahn. 
                    Nos ateliers s'inscrivent dans cette géographie en explorant les <strong>plantes qui ont façonné l'histoire locale</strong>.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    L'approche ethnobotanique permet de transformer un simple atelier nature en une <strong>expérience de compréhension du monde</strong> : 
                    pourquoi cette plante est-elle arrivée en France ? Quels peuples l'utilisaient ? Comment la cultivait-on jadis ?
                  </p>
                </div>
              </div>
            </div>

            {/* Ateliers */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais en entreprise ou en association" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Couleurs naturelles et savoirs traditionnels" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Mini-écosystèmes pour petits et grands" }
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

            {/* Villes */}
            <div className="bg-sage/10 rounded-lg p-8 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos interventions dans les Hauts-de-Seine
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <Link to={city.link} key={i} className="bg-white px-4 py-3 rounded-lg text-center hover:bg-sage hover:text-off-white transition-all shadow-sm group">
                    <span className="block text-sage-dark font-semibold group-hover:text-off-white">📍 {city.name}</span>
                    <span className="text-xs text-charcoal/60 group-hover:text-off-white/80">{city.detail}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Pourquoi nous choisir dans le 92 ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Formée à l'EHESS en ethnobotanique",
                  "Déplacement dans tout le 92",
                  "Matériel fourni, installation rapide",
                  "Ateliers adaptés entreprises & collectivités",
                  "Approche scientifique et culturelle",
                  "Devis gratuit sous 24h"
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
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

            {/* CTA */}
            <div className="bg-sage text-off-white rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                Animatrice nature dans le 92 — contactez-nous
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit · Tout le département · Entreprises, écoles, collectivités</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/pro" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Offres professionnelles</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnimatriceNatureHautsDeSeine;
