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

const AnimatriceBotaniqueValDOise = () => {
  const cities = [
    { name: "Cergy", detail: "Préfecture & base de loisirs", link: "/atelier-botanique-cergy" },
    { name: "Pontoise", detail: "Patrimoine médiéval & Oise", link: "/contact" },
    { name: "Argenteuil", detail: "Plus grande ville du 95", link: "/contact" },
    { name: "Sarcelles", detail: "Diversité culturelle", link: "/contact" },
    { name: "Enghien-les-Bains", detail: "Ville thermale & lac", link: "/contact" },
    { name: "Franconville", detail: "Forêt de Montmorency", link: "/contact" },
    { name: "Ermont", detail: "Nœud ferroviaire", link: "/contact" },
    { name: "Herblay-sur-Seine", detail: "Bords de Seine & nature", link: "/contact" }
  ];

  const faqQuestions = [
    { question: "Proposez-vous des ateliers nature à Cergy-Pontoise ?", answer: "Oui, nous intervenons régulièrement dans l'agglomération de Cergy-Pontoise : entreprises, écoles, centres sociaux, médiathèques. Nous proposons des ateliers botaniques adaptés à chaque structure et chaque public, avec une approche ethnobotanique unique." },
    { question: "Quels types d'animations nature pour les collectivités du Val-d'Oise ?", answer: "Nous proposons des animations pour les MJC, centres sociaux, CCAS, médiathèques et relais familles du Val-d'Oise. Kokedama, teinture végétale, terrariums, reconnaissance de plantes : chaque atelier mêle créativité, science et dimension culturelle." },
    { question: "Intervenez-vous dans le nord du Val-d'Oise ?", answer: "Nous couvrons l'ensemble du département 95, d'Argenteuil à Pontoise, de Sarcelles à Enghien-les-Bains. Pour les communes plus éloignées, contactez-nous pour vérifier la disponibilité." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Animatrice Botanique Val-d'Oise (95)"
        description="Animatrice botanique et nature dans le Val-d'Oise (95). Ateliers ethnobotaniques pour entreprises, écoles, EHPAD, collectivités à Cergy, Pontoise, Argenteuil, Enghien-les-Bains."
        keywords="animatrice botanique val-d-oise, animatrice nature 95, animation plantes cergy, atelier nature pontoise, animatrice scientifique val-d-oise, ethnobotaniste 95, animation botanique argenteuil"
        canonical="/animatrice-botanique-val-d-oise"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Animation botanique",
        name: "Animatrice Botanique Val-d'Oise (95)",
        description: "Animations botaniques et ateliers nature dans le Val-d'Oise par une animatrice ethnobotaniste formée à l'EHESS."
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
                Animatrice Botanique dans le Val-d'Oise (95)
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Animatrice ethnobotaniste · De Cergy à Argenteuil · Entreprises, écoles, collectivités
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Le Val-d'Oise offre une <strong>mosaïque de paysages</strong> — forêt de Montmorency, vallée de l'Oise, 
                bords de Seine — propice à la découverte botanique. Vanessa Charlery, <strong>animatrice nature et ethnobotaniste</strong>, 
                y propose des ateliers qui explorent les <strong>liens entre plantes, cultures et territoires</strong>, 
                adaptés à chaque structure et chaque public du département.
              </p>
            </div>

            {/* Approche */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Ethnobotanique et diversité dans le 95
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Le Val-d'Oise est un département de <strong>grande diversité culturelle</strong>, ce qui enrichit considérablement 
                    notre approche ethnobotanique. Les participants apportent leurs propres savoirs sur les plantes — 
                    qu'ils viennent du Maghreb, d'Afrique subsaharienne, d'Asie ou de métropole — créant un 
                    <strong>dialogue interculturel autour du végétal</strong> d'une rare richesse.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    C'est précisément cette dimension que cultive l'ethnobotanique : comprendre que chaque plante porte en elle 
                    des <strong>histoires, des usages et des savoirs différents selon les cultures</strong>. Un terreau fertile pour 
                    des ateliers véritablement inclusifs et enrichissants.
                  </p>
                </div>
              </div>
            </div>

            {/* Ateliers */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Sphères végétales — entre tradition japonaise et créativité" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Explorer les couleurs de la nature, d'ici et d'ailleurs" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Un monde miniature pour comprendre les écosystèmes" }
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

            {/* Villes */}
            <div className="bg-sage/10 rounded-lg p-8 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos interventions dans le Val-d'Oise
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

            {/* Avantages + Publics */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-sand rounded-lg p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Pourquoi nous choisir ?</h2>
                <ul className="space-y-3">
                  {[
                    "Formée à l'EHESS en ethnobotanique",
                    "Interventions dans tout le Val-d'Oise",
                    "Approche interculturelle et inclusive",
                    "Matériel fourni, déplacement compris",
                    "Ateliers de 1h à une journée complète",
                    "Devis gratuit sous 24h"
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sand rounded-lg p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Nos publics dans le 95</h2>
                <div className="space-y-3 text-charcoal/80">
                  <p><strong className="text-sage-dark">🏢 Entreprises :</strong> Team building, séminaires RSE, QVCT</p>
                  <p><strong className="text-sage-dark">🎓 Écoles :</strong> Maternelle au collège, périscolaire, centres de loisirs</p>
                  <p><strong className="text-sage-dark">🏥 Seniors :</strong> EHPAD, résidences autonomie, CCAS</p>
                  <p><strong className="text-sage-dark">🏛️ Collectivités :</strong> MJC, centres sociaux, médiathèques, relais familles</p>
                  <p><strong className="text-sage-dark">👨‍👩‍👧 Particuliers :</strong> Ateliers week-end, anniversaires, événements</p>
                </div>
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
                Animatrice botanique dans le Val-d'Oise — contactez-nous
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le 95 · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/atelier-botanique-cergy" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Ateliers à Cergy</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnimatriceBotaniqueValDOise;
