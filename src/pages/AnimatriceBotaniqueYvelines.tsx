import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, CheckCircle, BookOpen, Users, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AnimatriceBotaniqueYvelines = () => {
  const cities = [
    { name: "Saint-Germain-en-Laye", detail: "Forêt domaniale & patrimoine royal", link: "/atelier-botanique-saint-germain-en-laye" },
    { name: "Versailles", detail: "Héritage botanique des jardins royaux", link: "/atelier-botanique-versailles" },
    { name: "Chatou", detail: "Île des Impressionnistes & bords de Seine", link: "/atelier-botanique-chatou" },
    { name: "Le Vésinet", detail: "Ville-parc classée, cadre verdoyant", link: "/atelier-botanique-le-vesinet" },
    { name: "Le Pecq", detail: "Bords de Seine & terrasses", link: "/atelier-botanique-le-pecq" },
    { name: "Conflans-Sainte-Honorine", detail: "Confluent Seine-Oise", link: "/atelier-botanique-conflans-sainte-honorine" },
    { name: "Poissy", detail: "Patrimoine médiéval & nature", link: "/ateliers-botaniques-yvelines" },
    { name: "Mantes-la-Jolie", detail: "Boucle de Seine & biodiversité", link: "/ateliers-botaniques-yvelines" }
  ];

  const faqQuestions = [
    { question: "Pourquoi faire appel à une animatrice botanique dans les Yvelines ?", answer: "Les Yvelines offrent un cadre naturel exceptionnel — forêts domaniales, bords de Seine, parcs historiques — idéal pour des animations botaniques. Notre approche ethnobotanique enrichit cette connexion à la nature locale en y ajoutant une dimension culturelle et scientifique unique." },
    { question: "Quels publics accueillez-vous dans les Yvelines ?", answer: "Nous intervenons auprès de tous les publics : entreprises (team building RSE à Saint-Germain, Versailles), écoles et centres de loisirs, EHPAD et résidences seniors, MJC, centres sociaux, médiathèques et associations. Chaque animation est adaptée au contexte et à l'âge des participants." },
    { question: "Vous déplacez-vous dans toutes les Yvelines ?", answer: "Oui, nous intervenons dans l'ensemble du département des Yvelines (78), de Saint-Germain-en-Laye à Mantes-la-Jolie, en passant par Versailles, Chatou, Le Vésinet, Conflans-Sainte-Honorine et Poissy. Nous nous déplaçons dans vos locaux avec tout le matériel nécessaire." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Animatrice Botanique Yvelines (78) - Ateliers Nature"
        description="Animatrice botanique et ethnobotaniste dans les Yvelines (78). Ateliers nature pour entreprises, écoles, EHPAD à Saint-Germain-en-Laye, Versailles, Chatou, Le Vésinet."
        keywords="animatrice botanique yvelines, animatrice nature 78, animation plantes saint-germain-en-laye, atelier nature versailles, animatrice scientifique yvelines, ethnobotaniste yvelines"
        canonical="/animatrice-botanique-yvelines"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Animation botanique",
        name: "Animatrice Botanique Yvelines (78)",
        description: "Animations botaniques et ateliers nature dans les Yvelines par une animatrice ethnobotaniste formée à l'EHESS."
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
                Animatrice Botanique dans les Yvelines (78)
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Animatrice ethnobotaniste · Ateliers nature pour tous · De Saint-Germain à Versailles
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique propose des <strong>animations botaniques</strong> dans tout le département des Yvelines. 
                Portée par une démarche ethnobotanique, chaque intervention explore les <strong>savoirs ancestraux liés aux plantes</strong> — 
                teinture végétale, vannerie, art végétal — tout en s'adaptant à chaque public : enfants, salariés, seniors, familles.
              </p>
            </div>

            {/* Approche */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    L'ethnobotanique au cœur des Yvelines
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Les Yvelines regorgent de <strong>patrimoines botaniques exceptionnels</strong> : la forêt de Saint-Germain-en-Laye, 
                    les jardins historiques de Versailles, les berges de la Seine à Chatou. Nos animations s'inscrivent dans ce territoire 
                    en explorant les <strong>usages traditionnels des plantes locales</strong> et leur rôle dans l'histoire culturelle de la région.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Formée en anthropologie de la nature à l'EHESS, Vanessa Charlery ne se contente pas de montrer les plantes : 
                    elle raconte leur histoire, leurs voyages, leurs usages à travers les civilisations. Une approche qui captive 
                    autant les enfants que les professionnels.
                  </p>
                </div>
              </div>
            </div>

            {/* Ateliers images */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Sphères végétales japonaises — art et botanique" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Coloration naturelle — savoirs millénaires" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Mini-écosystèmes — biodiversité en bocal" }
              ].map((a, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <img src={a.src} alt={`${a.title} Yvelines`} className="w-full h-48 object-cover" loading="lazy" />
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
                Nos interventions dans les Yvelines
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
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-sand rounded-lg p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Pourquoi nous choisir ?
                </h2>
                <ul className="space-y-3">
                  {[
                    "Formée à l'EHESS en ethnobotanique",
                    "Ateliers adaptés à chaque public et chaque âge",
                    "Déplacement dans tout le 78 avec matériel fourni",
                    "Approche mêlant science, culture et créativité",
                    "Devis gratuit sous 24h",
                    "Réseau d'artisans et professionnels de la nature"
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sand rounded-lg p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Nos publics dans les Yvelines
                </h2>
                <div className="space-y-3 text-charcoal/80">
                  <p><strong className="text-sage-dark">🏢 Entreprises :</strong> Team building RSE, séminaires nature, QVCT</p>
                  <p><strong className="text-sage-dark">🎓 Écoles :</strong> Maternelle au lycée, centres de loisirs, périscolaire</p>
                  <p><strong className="text-sage-dark">🏥 Seniors :</strong> EHPAD, résidences autonomie, CCAS</p>
                  <p><strong className="text-sage-dark">🏛️ Collectivités :</strong> MJC, centres sociaux, médiathèques, mairies</p>
                  <p><strong className="text-sage-dark">👨‍👩‍👧 Particuliers :</strong> Ateliers week-end, événements privés</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Questions fréquentes
              </h2>
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
                Animatrice botanique dans les Yvelines — contactez-nous
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Devis gratuit sous 24h · Tout le département 78 · Tous publics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">
                  Demander un devis
                </Link>
                <Link to="/ateliers-botaniques-yvelines" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">
                  Voir nos ateliers Yvelines
                </Link>
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

export default AnimatriceBotaniqueYvelines;
