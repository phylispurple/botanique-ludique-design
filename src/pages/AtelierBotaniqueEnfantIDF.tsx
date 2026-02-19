import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, BookOpen, Leaf, MapPin, GraduationCap, Sparkles, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierBotaniqueEnfantIDF = () => {
  const ateliers = [
    { title: "Bombes à graines", age: "Dès 3 ans", desc: "Fabriquer des billes d'argile et de graines pour végétaliser le quartier." },
    { title: "Mini-terrarium", age: "Dès 6 ans", desc: "Créer un écosystème miniature en bocal — observer la nature en miniature." },
    { title: "Herbier créatif", age: "Dès 5 ans", desc: "Collecter, identifier et mettre en valeur les plantes de son environnement." },
    { title: "Teinture végétale", age: "Dès 7 ans", desc: "Découvrir la chimie des couleurs naturelles en teignant des tissus." },
    { title: "Kokedama enfant", age: "Dès 6 ans", desc: "Créer une sphère végétale japonaise — art et botanique." },
    { title: "Semis et bouturage", age: "Dès 4 ans", desc: "Apprendre à multiplier les plantes et comprendre le cycle végétal." }
  ];

  const faqQuestions = [
    { question: "À partir de quel âge un enfant peut-il participer ?", answer: "Nos ateliers sont adaptés dès 3 ans (maternelle) jusqu'au collège. Le contenu, la durée et la complexité sont ajustés à chaque tranche d'âge pour garantir une expérience enrichissante et amusante." },
    { question: "Les ateliers sont-ils conformes aux programmes scolaires ?", answer: "Oui, nos interventions en milieu scolaire sont conçues en lien avec les programmes de l'Éducation nationale : découverte du monde vivant (cycle 1), sciences et technologie (cycles 2-3), SVT (cycle 4)." },
    { question: "Dans quels départements intervenez-vous ?", answer: "Nous intervenons à Paris (75), dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95). Nous nous déplaçons dans vos locaux avec tout le matériel." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Atelier Botanique Enfant Île-de-France"
        description="Ateliers botaniques pour enfants en Île-de-France. Activités nature ludiques et pédagogiques : terrarium, teinture végétale, herbier. Écoles, centres de loisirs, anniversaires."
        keywords="atelier botanique enfant, atelier nature enfant ile de france, activité plantes enfant, atelier botanique scolaire, animation nature enfant IDF"
        canonical="/atelier-botanique-enfant-ile-de-france"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique enfant", name: "Atelier Botanique Enfant Île-de-France", description: "Ateliers botaniques ludiques et pédagogiques pour enfants en Île-de-France." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Sparkles className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques pour <span className="text-sage">Enfants</span> en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">Ludiques · Pédagogiques · Scientifiques · Dès 3 ans</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Éveiller les enfants à la <strong>beauté et à la science du monde végétal</strong> : voilà notre mission.
                Nos ateliers botaniques transforment chaque plante en une aventure sensorielle, créative et scientifique,
                adaptée à chaque âge de la maternelle au collège.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    L'ethnobotanique accessible aux enfants
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Comment les plantes ont-elles voyagé à travers le monde ? Pourquoi certaines teignent-elles les tissus ?
                    Comment fonctionne un écosystème ? Nos ateliers répondent à ces questions par <strong>l'expérimentation directe</strong>,
                    le jeu et la création artistique.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Chaque atelier intègre une dimension <strong>ethnobotanique</strong> adaptée à l'âge : découverte sensorielle
                    pour les tout-petits, exploration culturelle pour les plus grands.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers pour enfants
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ateliers.map((a, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-charcoal" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>{a.title}</h3>
                      <span className="bg-sage/10 text-sage-dark text-xs px-2 py-1 rounded-full whitespace-nowrap">{a.age}</span>
                    </div>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryTerrarium, title: "Terrarium enfant", desc: "Observer la nature en miniature" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "La magie des couleurs naturelles" },
                { src: galleryKokedama, title: "Kokedama", desc: "Créer une boule de mousse vivante" }
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
                Nos zones d'intervention
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Paris (75)", link: "/atelier-botanique-enfant-paris" },
                  { name: "Yvelines (78)", link: "/atelier-botanique-enfant-yvelines" },
                  { name: "Hauts-de-Seine (92)", link: "/atelier-botanique-enfant-hauts-de-seine" },
                  { name: "Val-d'Oise (95)", link: "/atelier-botanique-enfant-val-d-oise" }
                ].map((zone, i) => (
                  <Link to={zone.link} key={i} className="bg-white px-4 py-3 rounded-lg text-center hover:bg-sage hover:text-off-white transition-all shadow-sm group">
                    <span className="block text-sage-dark font-semibold group-hover:text-off-white"><MapPin className="w-4 h-4 inline mr-1" />{zone.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-sand rounded-lg p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Pour quelles structures ?</h2>
                <ul className="space-y-3">
                  {["Écoles maternelles et primaires", "Centres de loisirs et périscolaire", "MJC et centres culturels", "Anniversaires et fêtes privées", "Médiathèques", "Associations de quartier"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sand rounded-lg p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Infos pratiques</h2>
                <ul className="space-y-3">
                  {["Tout le matériel est fourni", "Création à emporter pour chaque enfant", "Groupes de 8 à 30 enfants", "Durée : 1h à 2h selon l'âge", "Intérieur ou extérieur", "Devis gratuit sous 24h"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{b}</span>
                    </li>
                  ))}
                </ul>
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Un atelier botanique pour vos enfants ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Paris, 78, 92, 95 · Dès 3 ans</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/animation-scolaire-nature" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Ateliers scolaires</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierBotaniqueEnfantIDF;
