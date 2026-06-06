import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Leaf, GraduationCap, Heart, Building, Microscope, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const MediationScientifiqueIDF = () => {
  const publics = [
    { icon: Building, title: "Entreprises & CSE", description: "Médiation scientifique en entreprise : conférences nature, ateliers RSE, sensibilisation à la biodiversité et à l'ethnobotanique.", link: "/pro" },
    { icon: GraduationCap, title: "Écoles & établissements scolaires", description: "Interventions pédagogiques en milieu scolaire : biodiversité, écologie, botanique appliquée, espèces exotiques envahissantes.", link: "/animation-scolaire-nature" },
    { icon: Heart, title: "EHPAD & résidences seniors", description: "Médiation scientifique adaptée aux personnes âgées : ateliers sensoriels, découvertes botaniques, reconnexion à la nature.", link: "/animation-seniors-ehpad" },
    { icon: Users, title: "Collectivités & institutions culturelles", description: "Médiathèques, musées, centres culturels, mairies : conférences, expositions et ateliers de vulgarisation scientifique.", link: "/animation-collectivites-mairies" },
  ];

  const departments = [
    { name: "Paris (75)", cities: ["Paris 1er–20e", "Muséum, Cité des Sciences, médiathèques"], link: "/mediation-scientifique-paris" },
    { name: "Yvelines (78)", cities: ["Saint-Germain-en-Laye", "Versailles", "Chatou", "Le Vésinet", "Conflans"], link: "/mediation-scientifique-yvelines" },
    { name: "Hauts-de-Seine (92)", cities: ["Boulogne-Billancourt", "Nanterre", "Rueil-Malmaison", "Issy-les-Moulineaux"], link: "/mediation-scientifique-hauts-de-seine" },
    { name: "Val-d'Oise (95)", cities: ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Enghien-les-Bains"], link: "/mediation-scientifique-val-d-oise" },
  ];

  const faqQuestions = [
    { question: "Qu'est-ce que la médiation scientifique botanique ?", answer: "La médiation scientifique botanique consiste à rendre accessibles les savoirs sur les plantes, l'écologie et la biodiversité à tous les publics. Chez Botanique Ludique, nous y ajoutons une dimension ethnobotanique et anthropologique unique, enrichie par une formation à l'EHESS." },
    { question: "Quels formats de médiation scientifique proposez-vous ?", answer: "Conférences, ateliers participatifs, interventions scolaires, balades botaniques commentées, expositions interactives et contenus de vulgarisation. Chaque format est adapté au public et au cadre d'intervention." },
    { question: "Dans quels départements intervenez-vous pour la médiation scientifique ?", answer: "Nous intervenons dans toute l'Île-de-France : Paris (75), Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95). Nous nous déplaçons dans vos locaux ou structures partenaires." },
    { question: "La médiation scientifique est-elle adaptée aux enfants ?", answer: "Absolument ! Nos interventions sont conçues pour tous les âges, du cycle 2 au lycée. Nous adaptons le vocabulaire, les supports et les activités pratiques à chaque tranche d'âge." },
    { question: "Combien coûte une intervention de médiation scientifique ?", answer: "Les tarifs varient selon le format, la durée et le nombre de participants. Contactez-nous pour un devis personnalisé gratuit sous 24h." },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO
        title="Médiation Scientifique Botanique en Île-de-France"
        description="Médiation scientifique autour des plantes et de la biodiversité en Île-de-France. Conférences, ateliers, interventions scolaires par une ethnobotaniste diplômée de l'EHESS. Paris, 78, 92, 95."
        keywords="médiation scientifique, médiation scientifique botanique, vulgarisation scientifique plantes, conférence botanique île-de-france, médiation scientifique paris, médiation scientifique yvelines, intervention scientifique nature"
        canonical="/mediation-scientifique-ile-de-france"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Médiation scientifique botanique",
        name: "Médiation Scientifique - Botanique Ludique - Île-de-France",
        description: "Médiation scientifique et vulgarisation botanique pour tous publics en Île-de-France par une ethnobotaniste diplômée de l'EHESS.",
        areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise"]
      }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Microscope className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Médiation Scientifique Botanique en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Vulgarisation · Ethnobotanique · Conférences & ateliers · Paris, 78, 92, 95
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Vanessa Charlery, ethnobotaniste diplômée de l'EHESS, propose des interventions de <strong>médiation scientifique</strong> qui 
                rendent accessibles les savoirs sur les plantes, la biodiversité et l'écologie. Une approche unique croisant 
                <strong> sciences du vivant, anthropologie et histoire culturelle</strong> des sociétés humaines et du monde végétal.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Une médiation scientifique ancrée dans l'ethnobotanique
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Notre approche de la médiation scientifique va au-delà de la simple transmission de connaissances botaniques. 
                    En croisant <strong>sciences du vivant et sciences humaines</strong>, nous proposons une lecture enrichie du monde végétal 
                    qui intègre les usages culturels, médicinaux et symboliques des plantes à travers les civilisations.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Conférences sur l'ethnobotanique, interventions sur les espèces exotiques envahissantes, ateliers de vulgarisation 
                    sur la biodiversité : chaque format est conçu pour <strong>éveiller la curiosité scientifique</strong> tout en 
                    développant une conscience écologique.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Médiation scientifique pour tous les publics
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
                Nos formats de médiation scientifique
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { src: galleryKokedama, title: "Conférences", desc: "Ethnobotanique, plantes & cultures du monde, espèces exotiques envahissantes. Format adaptable : 45 min à 2h, avec échanges." },
                  { src: galleryTeinture, title: "Ateliers participatifs", desc: "Teinture végétale, reconnaissance de plantes, création botanique. Apprendre par le geste et l'expérimentation." },
                  { src: galleryTerrarium, title: "Interventions scolaires", desc: "Programmes adaptés du CP au lycée. Biodiversité, écologie, sciences du vivant avec une approche pratique et ludique." }
                ].map((atelier, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-0">
                      <img src={atelier.src} alt={atelier.title} className="w-full h-48 object-cover rounded-t-lg" loading="lazy" />
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
                Zones d'intervention en Île-de-France
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
                Besoin d'une médiatrice scientifique en Île-de-France ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Formats sur mesure · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Demander un devis</Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full">Voir nos ateliers</Link>
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

export default MediationScientifiqueIDF;
