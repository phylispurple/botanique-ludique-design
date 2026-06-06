import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, BookOpen, Leaf, Users, Building, GraduationCap, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const IntervenantScientifiqueIDF = () => {
  const faqQuestions = [
    { question: "Qu'est-ce qu'un intervenant scientifique nature ?", answer: "Un intervenant scientifique nature est un professionnel formé en sciences naturelles qui conçoit et anime des ateliers pédagogiques autour du végétal. Chez Botanique Ludique, notre approche ethnobotanique ajoute une dimension culturelle unique : nous explorons les liens entre les plantes et les civilisations humaines." },
    { question: "Dans quels départements d'Île-de-France intervenez-vous ?", answer: "Nous intervenons dans quatre départements : Paris (75), les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95). Nous nous déplaçons dans vos locaux avec tout le matériel nécessaire." },
    { question: "Quels types de structures font appel à un intervenant scientifique ?", answer: "Entreprises (team building RSE, QVCT), écoles et centres de loisirs, EHPAD et résidences seniors, MJC, centres sociaux, médiathèques, mairies et associations. Chaque intervention est adaptée au public et aux objectifs." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Intervenant Scientifique Nature Île-de-France"
        description="Intervenant scientifique spécialisé en botanique et ethnobotanique en Île-de-France. Ateliers nature pour entreprises, écoles, EHPAD, collectivités. Paris, 78, 92, 95."
        keywords="intervenant scientifique nature, intervenant botanique ile de france, animation scientifique plantes, intervenant nature IDF, ethnobotaniste ile de france"
        canonical="/intervenant-scientifique-ile-de-france"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Intervention scientifique nature", name: "Intervenant Scientifique Nature Île-de-France", description: "Interventions scientifiques autour de la botanique et de l'ethnobotanique en Île-de-France." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Intervenant Scientifique Nature en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Animatrice ethnobotaniste · Interventions scientifiques végétales · Paris, 78, 92, 95
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique met à disposition un <strong>intervenant scientifique spécialisé en botanique</strong> pour vos structures en Île-de-France.
                Notre approche ethnobotanique — l'étude des relations entre plantes et sociétés humaines — transforme chaque atelier en une expérience
                <strong> à la fois scientifique, culturelle et créative</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Une approche scientifique unique
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Contrairement à une simple animation nature, notre intervention scientifique s'appuie sur une <strong>formation universitaire en anthropologie de la nature</strong> (EHESS).
                    Chaque atelier explore les <strong>savoirs botaniques traditionnels</strong> — teinture végétale, vannerie, art végétal — avec une rigueur scientifique qui enrichit l'expérience des participants.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Cette double compétence — science et pédagogie — permet d'intervenir aussi bien auprès d'enfants de maternelle que de cadres d'entreprise,
                    en adaptant le discours et les activités à chaque contexte.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos interventions par public
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Building, title: "Entreprises & séminaires", desc: "Team building botanique, animation RSE, semaine QVCT. Des interventions scientifiques qui fédèrent les équipes autour du vivant.", link: "/pro" },
                  { icon: GraduationCap, title: "Écoles & périscolaire", desc: "Interventions conformes aux programmes : cycle du végétal, biodiversité, teinture naturelle. De la maternelle au lycée.", link: "/animation-scolaire-nature" },
                  { icon: Heart, title: "EHPAD & seniors", desc: "Animations sensorielles et douces : reconnaissance des plantes, jardinage adapté, créations végétales accessibles.", link: "/animation-seniors-ehpad" },
                  { icon: Users, title: "Collectivités & associations", desc: "MJC, centres sociaux, médiathèques, mairies. Des interventions scientifiques pour tous les publics.", link: "/animation-collectivites-mairies" }
                ].map((p, i) => (
                  <Link to={p.link} key={i} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="flex items-start gap-4">
                      <p.icon className="w-7 h-7 text-sage flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>{p.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed text-sm">{p.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais — science et créativité" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Chimie des couleurs naturelles" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Écosystèmes miniatures — biologie en bocal" }
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

            <div className="bg-sage/10 rounded-lg p-8 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Zones d'intervention en Île-de-France
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Paris (75)", link: "/intervenant-scientifique-paris" },
                  { name: "Yvelines (78)", link: "/intervenant-scientifique-yvelines" },
                  { name: "Hauts-de-Seine (92)", link: "/intervenant-scientifique-hauts-de-seine" },
                  { name: "Val-d'Oise (95)", link: "/intervenant-scientifique-val-d-oise" }
                ].map((zone, i) => (
                  <Link to={zone.link} key={i} className="bg-white px-4 py-3 rounded-lg text-center hover:bg-sage hover:text-off-white transition-all shadow-sm group">
                    <span className="block text-sage-dark font-semibold group-hover:text-off-white"><MapPin className="w-4 h-4 inline mr-1" />{zone.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Pourquoi choisir notre intervenant scientifique ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Animatrice ethnobotaniste formée à l'EHESS", "Approche scientifique et culturelle", "Matériel fourni, rien à prévoir", "Adaptée à tout public et tout âge", "Devis gratuit sous 24h", "Interventions dans 4 départements"].map((b, i) => (
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                Intervenant scientifique nature — contactez-nous
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Paris, 78, 92, 95 · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Découvrir nos ateliers</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntervenantScientifiqueIDF;
