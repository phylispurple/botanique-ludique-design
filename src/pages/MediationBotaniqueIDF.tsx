import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Leaf, GraduationCap, Heart, Building, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const MediationBotaniqueIDF = () => {
  const publics = [
    { icon: Building, title: "Entreprises & CSE", description: "Médiation botanique en entreprise : ateliers végétaux, sensibilisation à la biodiversité, team building autour des plantes.", link: "/pro" },
    { icon: GraduationCap, title: "Écoles & centres de loisirs", description: "Médiation botanique pour les jeunes publics : découverte du monde végétal, herbiers, jardinage pédagogique.", link: "/animation-scolaire-nature" },
    { icon: Heart, title: "EHPAD & résidences seniors", description: "Médiation botanique thérapeutique : ateliers sensoriels, jardinage adapté, reconnexion au vivant pour les personnes âgées.", link: "/animation-seniors-ehpad" },
    { icon: Users, title: "Collectivités & associations", description: "MJC, médiathèques, centres sociaux, mairies : médiation botanique accessible et conviviale pour tous.", link: "/animation-collectivites-mairies" },
  ];

  const departments = [
    { name: "Paris (75)", cities: ["Paris 1er–20e", "Jardins botaniques, parcs, médiathèques"], link: "/mediation-botanique-paris" },
    { name: "Yvelines (78)", cities: ["Saint-Germain-en-Laye", "Versailles", "Chatou", "Le Vésinet", "Le Pecq"], link: "/mediation-botanique-yvelines" },
    { name: "Hauts-de-Seine (92)", cities: ["Boulogne-Billancourt", "Nanterre", "Rueil-Malmaison", "Issy-les-Moulineaux"], link: "/mediation-botanique-hauts-de-seine" },
    { name: "Val-d'Oise (95)", cities: ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Enghien-les-Bains"], link: "/mediation-botanique-val-d-oise" },
  ];

  const faqQuestions = [
    { question: "Qu'est-ce que la médiation botanique ?", answer: "La médiation botanique consiste à transmettre les savoirs sur les plantes de manière accessible et engageante. Nous utilisons des approches créatives — ateliers manuels, balades commentées, conférences illustrées — pour créer un lien sensible entre les participants et le monde végétal." },
    { question: "Quelle est la différence entre médiation botanique et animation nature ?", answer: "La médiation botanique se concentre spécifiquement sur le monde des plantes et intègre une dimension culturelle et scientifique approfondie. L'animation nature est plus large et peut couvrir la faune, les écosystèmes, etc. Notre approche ethnobotanique enrichit la médiation d'une perspective anthropologique unique." },
    { question: "Pour quels publics proposez-vous la médiation botanique ?", answer: "Nous intervenons auprès de tous les publics : enfants dès 3 ans, adolescents, adultes, seniors, personnes en situation de handicap. Chaque intervention est adaptée au public concerné." },
    { question: "Quels sont vos lieux d'intervention en Île-de-France ?", answer: "Nous nous déplaçons dans toute l'Île-de-France : Paris (75), Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95). En extérieur (parcs, jardins) ou en intérieur (salles, médiathèques, écoles)." },
    { question: "Comment réserver une intervention de médiation botanique ?", answer: "Contactez-nous via notre formulaire pour un devis gratuit sous 24h. Nous construisons ensemble un programme adapté à vos besoins, votre public et votre budget." },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Médiation Botanique en Île-de-France"
        description="Médiation botanique en Île-de-France : ateliers, balades et conférences autour des plantes. Approche ethnobotanique unique par une diplômée de l'EHESS. Paris, 78, 92, 95."
        keywords="médiation botanique, médiation botanique île-de-france, médiation végétale, atelier plantes paris, médiation botanique yvelines, animation botanique hauts-de-seine, médiation plantes val-d-oise"
        canonical="/mediation-botanique-ile-de-france"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Médiation botanique",
        name: "Médiation Botanique - Botanique Ludique - Île-de-France",
        description: "Médiation botanique et ateliers autour des plantes pour tous publics en Île-de-France.",
        areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise"]
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
                Médiation Botanique en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Transmettre les savoirs sur les plantes · Ateliers & conférences · Paris, 78, 92, 95
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                La <strong>médiation botanique</strong> est au cœur de notre démarche : rendre accessibles les savoirs sur les plantes 
                à travers des expériences créatives, sensorielles et pédagogiques. Une approche <strong>ethnobotanique</strong> unique, 
                nourrie par l'anthropologie et l'histoire culturelle du monde végétal.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    La botanique comme outil de médiation culturelle
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Les plantes sont un formidable <strong>vecteur de lien social et de transmission</strong>. À travers la médiation botanique, 
                    nous créons des espaces de rencontre et de partage autour du vivant. Chaque atelier est l'occasion de découvrir 
                    les propriétés des plantes, leurs usages ancestraux et leur place dans notre quotidien.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Notre spécificité : une lecture <strong>ethnobotanique</strong> qui explore les relations entre les sociétés humaines et le monde végétal, 
                    enrichissant chaque intervention d'une profondeur culturelle et scientifique.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Médiation botanique pour tous les publics
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {publics.map((p, i) => (
                  <Link to={p.link} key={i}>
                    <Card className="hover:shadow-brutal-lg transition-all h-full animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <p.icon className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{p.title}</h3>
                            <p className="text-charcoal/70 leading-relaxed">{p.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers de médiation botanique
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { src: galleryKokedama, title: "Kokedama", desc: "L'art japonais des sphères végétales. Découvrez les techniques ancestrales du jardinage nippon et les liens entre culture et nature." },
                  { src: galleryTeinture, title: "Teinture végétale", desc: "Des pigments naturels aux textiles : un voyage à travers les savoirs teinturiers millénaires et la chimie des plantes." },
                  { src: galleryTerrarium, title: "Terrarium", desc: "Créez un micro-écosystème et comprenez les cycles naturels. Une médiation par le geste et l'observation du vivant." }
                ].map((atelier, i) => (
                  <Card key={i} className="hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-0">
                      <img src={atelier.src} alt={`Médiation botanique - ${atelier.title}`} className="w-full h-48 object-cover " loading="lazy" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{atelier.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed text-sm">{atelier.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                <MapPin className="w-6 h-6 inline-block mr-2" />
                Médiation botanique en Île-de-France
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, i) => (
                  <Link to={dept.link} key={i} className="bg-white p-5 hover:shadow-brutal-lg transition-all group border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold text-sage-dark mb-3 group-hover:text-sage">{dept.name}</h3>
                    <ul className="space-y-1">
                      {dept.cities.map((city, j) => (
                        <li key={j} className="text-sm text-charcoal/70">📍 {city}</li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Questions fréquentes</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-white p-6 animate-fade-in border-brutal shadow-brutal" style={{ animationDelay: `${i * 50}ms` }}>
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Besoin d'une médiatrice botanique en Île-de-France ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Interventions sur mesure · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Voir nos ateliers</Link>
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

export default MediationBotaniqueIDF;
