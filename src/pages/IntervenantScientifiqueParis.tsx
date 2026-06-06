import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, BookOpen, Leaf, Users, Building, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const IntervenantScientifiqueParis = () => {
  const faqQuestions = [
    { question: "Quel type d'interventions scientifiques proposez-vous à Paris ?", answer: "Nous proposons des ateliers botaniques à dimension scientifique : teinture végétale (chimie des couleurs), terrarium (écosystèmes), kokedama (art végétal), herbier (classification). Chaque atelier intègre des connaissances en ethnobotanique — l'étude des relations plantes-sociétés." },
    { question: "Intervenez-vous dans tous les arrondissements de Paris ?", answer: "Oui, nous nous déplaçons dans tous les arrondissements de Paris avec l'ensemble du matériel. Nous intervenons dans vos locaux : entreprise, école, EHPAD, centre social, médiathèque ou espace associatif." },
    { question: "Un intervenant scientifique est-il adapté pour des enfants ?", answer: "Absolument ! Notre pédagogie s'adapte à chaque âge. Pour les enfants, l'approche scientifique passe par l'expérimentation sensorielle, le jeu et la création. Pour les adultes, nous approfondissons les dimensions historiques et culturelles." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Intervenant Scientifique Nature Paris (75)"
        description="Intervenant scientifique botanique à Paris. Ateliers nature ethnobotaniques pour entreprises, écoles, EHPAD, centres sociaux. Tous arrondissements."
        keywords="intervenant scientifique paris, intervenant botanique paris, animation scientifique nature paris, intervenant nature paris 75, ethnobotaniste paris"
        canonical="/intervenant-scientifique-paris"
        city="Paris"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Intervention scientifique nature", name: "Intervenant Scientifique Nature Paris", description: "Interventions scientifiques botaniques à Paris par une animatrice ethnobotaniste formée à l'EHESS." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Intervenant Scientifique Nature à Paris
              </h1>
              <p className="subtitle-italic text-lg mb-6">Animatrice ethnobotaniste · Interventions scientifiques · Tous arrondissements</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Paris regorge de trésors botaniques — du Jardin des Plantes aux jardins partagés. Notre <strong>intervenant scientifique</strong> transforme
                ces richesses en ateliers captivants mêlant <strong>science, culture et créativité</strong> pour tous les publics parisiens.
              </p>
            </div>

            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    La science botanique au cœur de Paris
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Paris est un <strong>carrefour mondial de la botanique</strong> : le Muséum national d'Histoire naturelle, les serres d'Auteuil,
                    les jardins ethnobotaniques. Nos interventions scientifiques s'inscrivent dans cette tradition en proposant des ateliers
                    qui mêlent <strong>rigueur académique et plaisir de la découverte</strong>.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Formée à l'EHESS en anthropologie de la nature, Vanessa Charlery apporte un regard unique sur les plantes :
                    leur histoire coloniale, leurs usages traditionnels, leur place dans nos sociétés contemporaines.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Interventions scientifiques par public
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Building, title: "Entreprises parisiennes", desc: "Team building scientifique, séminaire RSE, QVCT. Des ateliers qui allient découverte botanique et cohésion d'équipe.", link: "/pro" },
                  { icon: GraduationCap, title: "Écoles parisiennes", desc: "Interventions pédagogiques conformes aux programmes. De la maternelle au lycée : biodiversité, chimie végétale, écosystèmes.", link: "/animation-scolaire-nature" },
                  { icon: Heart, title: "EHPAD & seniors", desc: "Animations sensorielles adaptées : reconnaissance olfactive, jardinage doux, créations végétales accessibles.", link: "/animation-seniors-ehpad" },
                  { icon: Users, title: "Centres sociaux & MJC", desc: "Interventions dans les structures parisiennes : quartiers prioritaires, médiathèques, associations.", link: "/animation-centre-social" }
                ].map((p, i) => (
                  <Link to={p.link} key={i} className="bg-[hsl(var(--yellow))]/15 p-6 hover:shadow-brutal-lg transition-all animate-fade-in border-brutal shadow-brutal">
                    <div className="flex items-start gap-4">
                      <p.icon className="w-7 h-7 text-sage flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{p.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed text-sm">{p.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais — science et esthétique" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Chimie des pigments naturels" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Écosystèmes en miniature" }
              ].map((a, i) => (
                <div key={i} className="overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-shadow">
                  <img src={a.src} alt={a.title} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sand p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Pourquoi choisir notre intervenant à Paris ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Animatrice ethnobotaniste formée à l'EHESS", "Tous les arrondissements de Paris", "Matériel fourni intégralement", "Ateliers de 1h à une journée", "Adaptés à tout public", "Devis gratuit sous 24h"].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Questions fréquentes</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 p-6 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Intervenant scientifique à Paris — parlons de votre projet</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tous arrondissements · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Nos ateliers</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntervenantScientifiqueParis;
