import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Leaf, GraduationCap, Heart, Building, Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const MediationCulturelleNatureIDF = () => {
  const publics = [
    { icon: Building, title: "Institutions culturelles", description: "Musées, médiathèques, centres d'art : médiation culturelle autour de la nature, conférences ethnobotaniques, expositions participatives.", link: "/pro" },
    { icon: GraduationCap, title: "Établissements éducatifs", description: "Collèges, lycées, universités : interventions sur les liens entre cultures humaines et monde végétal, anthropologie de la nature.", link: "/animation-scolaire-nature" },
    { icon: Heart, title: "Structures médico-sociales", description: "EHPAD, centres de soin, résidences : médiation culturelle douce par la nature, reconnexion sensorielle au vivant.", link: "/animation-seniors-ehpad" },
    { icon: Users, title: "Collectivités & festivals", description: "Fêtes de la science, festivals culturels, journées du patrimoine : médiation culturelle nature grand public.", link: "/animation-collectivites-mairies" },
  ];

  const departments = [
    { name: "Paris (75)", cities: ["Musées, médiathèques, centres culturels", "Jardins botaniques, parcs"], link: "/mediation-culturelle-nature-paris" },
    { name: "Yvelines (78)", cities: ["Saint-Germain-en-Laye", "Versailles", "Chatou", "Le Vésinet"], link: "/mediation-culturelle-nature-yvelines" },
    { name: "Hauts-de-Seine (92)", cities: ["Boulogne-Billancourt", "Nanterre", "Rueil-Malmaison", "Issy-les-Moulineaux"], link: "/mediation-culturelle-nature-hauts-de-seine" },
    { name: "Val-d'Oise (95)", cities: ["Cergy", "Pontoise", "Argenteuil", "Enghien-les-Bains"], link: "/mediation-culturelle-nature-val-d-oise" },
  ];

  const faqQuestions = [
    { question: "Qu'est-ce que la médiation culturelle autour de la nature ?", answer: "C'est une approche qui utilise le monde végétal comme porte d'entrée vers la compréhension des cultures humaines. En explorant comment les sociétés ont utilisé, nommé et sacré les plantes, nous ouvrons des perspectives sur l'histoire, l'art, la science et les enjeux contemporains." },
    { question: "En quoi l'ethnobotanique enrichit-elle la médiation culturelle ?", answer: "L'ethnobotanique — l'étude des relations entre plantes et sociétés — apporte une profondeur unique à la médiation culturelle. Elle permet de croiser sciences du vivant et sciences humaines, offrant aux publics une compréhension riche et nuancée du monde végétal." },
    { question: "Quels formats proposez-vous pour la médiation culturelle nature ?", answer: "Conférences illustrées, ateliers participatifs, balades ethnobotaniques, expositions interactives, cycles de cours, interventions ponctuelles. Chaque format est conçu sur mesure pour votre structure et votre public." },
    { question: "La médiation culturelle nature est-elle adaptée aux scolaires ?", answer: "Oui, nos interventions sont adaptées à tous les niveaux, du primaire au supérieur. Nous proposons des contenus en lien avec les programmes de SVT, histoire, géographie et EMC." },
    { question: "Comment organiser une intervention de médiation culturelle ?", answer: "Contactez-nous pour un échange sur votre projet. Nous construisons ensemble un programme sur mesure, adapté à votre public, votre espace et vos objectifs. Devis gratuit sous 24h." },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Médiation Culturelle Nature en Île-de-France"
        description="Médiation culturelle autour de la nature et de l'ethnobotanique en Île-de-France. Conférences, ateliers et interventions par une ethnobotaniste diplômée de l'EHESS. Paris, 78, 92, 95."
        keywords="médiation culturelle nature, médiation culturelle plantes, ethnobotanique île-de-france, conférence plantes cultures, médiation culturelle paris, médiation nature yvelines, anthropologie nature, médiation culturelle botanique"
        canonical="/mediation-culturelle-nature-ile-de-france"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Médiation culturelle nature",
        name: "Médiation Culturelle Nature - Botanique Ludique - Île-de-France",
        description: "Médiation culturelle autour de la nature et de l'ethnobotanique pour institutions, écoles et collectivités en Île-de-France.",
        areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise"]
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
                Médiation Culturelle Nature en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Ethnobotanique · Plantes & cultures · Anthropologie de la nature · Paris, 78, 92, 95
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                La <strong>médiation culturelle autour de la nature</strong> explore les liens profonds entre les sociétés humaines et le monde végétal. 
                Portée par Vanessa Charlery, ethnobotaniste formée à l'EHESS, cette approche unique croise <strong>sciences du vivant, 
                anthropologie et histoire culturelle</strong> pour offrir une lecture riche et sensible du monde des plantes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    L'ethnobotanique au service de la médiation culturelle
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Comment les peuples autochtones ont-ils utilisé les plantes pour se soigner, se vêtir, jouer de la musique ? 
                    Pourquoi certaines plantes sont-elles sacrées dans certaines cultures ? La <strong>médiation culturelle par la nature</strong> 
                    ouvre ces questions fascinantes et les rend accessibles à tous.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Instruments de musique végétaux, teintures ancestrales, pharmacopées traditionnelles, plantes et colonialisme : 
                    nos interventions proposent une <strong>traversée des savoirs</strong> qui enrichit la compréhension du monde végétal 
                    et des sociétés qui l'habitent.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Médiation culturelle pour tous les publics
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {publics.map((p, i) => (
                  <Link to={p.link} key={i}>
                    <Card className="hover:shadow-lg transition-all h-full animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <p.icon className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>{p.title}</h3>
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
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos thématiques de médiation culturelle
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { src: galleryTeinture, title: "Plantes & colonialisme", desc: "Comment les plantes ont façonné l'histoire coloniale : palmiers, monstera, caoutchouc. Une lecture critique et éclairante." },
                  { src: galleryKokedama, title: "Savoirs autochtones", desc: "Les connaissances botaniques des peuples autochtones : pharmacopées, teintures, instruments de musique végétaux." },
                  { src: galleryTerrarium, title: "Biodiversité & écologie", desc: "Comprendre les écosystèmes, les espèces invasives et les enjeux contemporains de la biodiversité végétale." }
                ].map((theme, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-0">
                      <img src={theme.src} alt={`Médiation culturelle - ${theme.title}`} className="w-full h-48 object-cover rounded-t-lg" loading="lazy" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>{theme.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed text-sm">{theme.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-sage/10 rounded-lg p-8 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                <MapPin className="w-6 h-6 inline-block mr-2" />
                Médiation culturelle nature en Île-de-France
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, i) => (
                  <Link to={dept.link} key={i} className="bg-white rounded-lg p-5 hover:shadow-md transition-all group">
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
                Un projet de médiation culturelle autour de la nature ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Programmes sur mesure · Tous publics</p>
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

export default MediationCulturelleNatureIDF;
