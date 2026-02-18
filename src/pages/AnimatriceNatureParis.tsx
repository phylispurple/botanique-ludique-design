import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, CheckCircle, BookOpen, Leaf, Users, Building, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AnimatriceNatureParis = () => {
  const faqQuestions = [
    { question: "Où se déroulent vos ateliers nature à Paris ?", answer: "Nous intervenons dans vos locaux (entreprise, école, EHPAD, centre social) dans tous les arrondissements de Paris. Nous disposons également d'espaces partenaires pour les ateliers ouverts aux particuliers. Tout le matériel est fourni." },
    { question: "Quelle est la spécificité d'une animatrice scientifique plantes ?", answer: "Une animatrice scientifique plantes combine rigueur scientifique et pédagogie accessible. Chez Botanique Ludique, nous y ajoutons la dimension ethnobotanique : l'étude des relations entre les plantes et les cultures humaines, pour des ateliers qui éveillent la curiosité et le respect du vivant." },
    { question: "Proposez-vous des cycles d'ateliers ou uniquement des interventions ponctuelles ?", answer: "Les deux ! Nous proposons des ateliers ponctuels (team building, événements) comme des cycles réguliers (trimestre scolaire, programme annuel en centre social). Chaque format est adapté à vos objectifs pédagogiques et budgétaires." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Animatrice Nature Paris (75) - Ateliers Botaniques"
        description="Animatrice nature et scientifique plantes à Paris. Ateliers botaniques ethnobotaniques pour entreprises, écoles, EHPAD, centres sociaux. Kokedama, terrarium, teinture végétale."
        keywords="animatrice nature paris, animatrice botanique paris, animatrice scientifique plantes paris, animation nature paris 75, atelier plantes paris, ethnobotaniste paris, atelier botanique entreprise paris"
        canonical="/animatrice-nature-paris"
        city="Paris"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Animation nature et botanique à Paris",
        name: "Animatrice Nature Paris (75)",
        description: "Animations nature et ateliers botaniques à Paris par une ethnobotaniste diplômée. Tous publics."
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
                Animatrice Nature à Paris
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Ethnobotaniste · Animatrice scientifique plantes · Tous arrondissements
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                À Paris, la nature s'invite partout — jardins partagés, cours d'écoles, salles de séminaire, maisons de retraite. 
                Vanessa Charlery, <strong>animatrice nature et ethnobotaniste</strong>, propose des ateliers qui révèlent les 
                <strong> liens invisibles entre les plantes et nos sociétés</strong>. Une approche scientifique et sensible, 
                adaptée à chaque public parisien.
              </p>
            </div>

            {/* Ethnobotanique à Paris */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Paris, carrefour de l'ethnobotanique
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Paris est un <strong>laboratoire ethnobotanique à ciel ouvert</strong> : des palmiers haussmanniens aux jardins 
                    exotiques du Muséum, des herbes médicinales du Jardin des Plantes aux plantes tinctoriales oubliées. 
                    Nos ateliers parisiens explorent cette richesse en mêlant <strong>histoire coloniale des plantes</strong>, 
                    usages traditionnels et créativité contemporaine.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Que vous soyez une entreprise du 8e arrondissement, une école du 20e ou un centre social du 13e, 
                    nous adaptons le contenu à votre contexte tout en maintenant cette <strong>exigence ethnobotanique</strong> 
                    qui fait la signature de Botanique Ludique.
                  </p>
                </div>
              </div>
            </div>

            {/* Publics parisiens */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Une animatrice nature pour chaque public parisien
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Building, title: "Entreprises parisiennes", desc: "Team building botanique, séminaire RSE, animation QVCT. Nous intervenons dans vos locaux ou dans un espace partenaire au cœur de Paris.", link: "/pro" },
                  { icon: GraduationCap, title: "Écoles & périscolaire", desc: "Ateliers pédagogiques du CP au lycée : cycle du végétal, teinture naturelle, biodiversité urbaine. Interventions conformes aux programmes.", link: "/animation-scolaire-nature" },
                  { icon: Heart, title: "EHPAD & seniors", desc: "Animations douces et sensorielles en maison de retraite : jardinage adapté, reconnaissance olfactive, créations végétales accessibles.", link: "/animation-seniors-ehpad" },
                  { icon: Users, title: "Centres sociaux & MJC", desc: "Ateliers ouverts à tous dans les structures parisiennes : quartiers prioritaires, médiathèques, associations de quartier.", link: "/animation-centre-social" }
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

            {/* Ateliers images */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Atelier Kokedama Paris", desc: "Art végétal japonais dans la capitale" },
                { src: galleryTeinture, title: "Teinture Végétale Paris", desc: "Couleurs naturelles, savoirs ancestraux" },
                { src: galleryTerrarium, title: "Terrarium Paris", desc: "Créer un écosystème miniature" }
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

            {/* Avantages */}
            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Pourquoi choisir Botanique Ludique à Paris ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Ethnobotaniste diplômée EHESS",
                  "Interventions dans tous les arrondissements",
                  "Matériel fourni, rien à prévoir",
                  "Ateliers de 1h à une journée",
                  "Adaptés à tout public et tout âge",
                  "Devis gratuit sous 24h",
                  "Approche scientifique et culturelle",
                  "Réseau d'artisans spécialisés"
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
                Animatrice nature à Paris — parlons de votre projet
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tous arrondissements · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/atelier-kokedama-paris" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Nos ateliers à Paris</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnimatriceNatureParis;
