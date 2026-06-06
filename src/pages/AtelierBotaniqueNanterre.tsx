import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import kokedamaImage from "@/assets/gallery-kokedama-garden.webp";
import dyeingImage from "@/assets/gallery-teinture-1.webp";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import basketryImage from "@/assets/gallery-basketry.webp";

const AtelierBotaniqueNanterre = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Créez votre sphère végétale suspendue dans un cadre inspiré par les bords de Seine de Nanterre.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Explorez les couleurs naturelles et les pigments issus de plantes tinctoriales cultivées en Île-de-France.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Composez un écosystème miniature avec des mousses et fougères, parfait pour végétaliser vos espaces de bureau.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Initiez-vous au tressage de paniers avec des matériaux naturels, une pause créative idéale en milieu urbain.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Atelier Botanique Nanterre | Kokedama, Terrarium, Teinture ✦ 92"
        description="🌿 Ateliers botaniques à Nanterre et Hauts-de-Seine. Kokedama, teinture végétale, terrarium pour particuliers et entreprises. Team building nature à La Défense."
        keywords="atelier botanique Nanterre, kokedama Nanterre, team building La Défense, terrarium Hauts-de-Seine, atelier nature 92, teinture végétale Nanterre, bien-être entreprise 92"
        canonical="/atelier-botanique-nanterre"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers à Nanterre",
          "description": "Ateliers botaniques créatifs à Nanterre et dans les Hauts-de-Seine",
          "areaServed": {
            "@type": "City",
            "name": "Nanterre",
            "containedIn": {
              "@type": "State",
              "name": "Hauts-de-Seine"
            }
          },
          "priceRange": "25€ - 200€"
        }}
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Nanterre & Hauts-de-Seine (92)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques à Nanterre
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                La nature s'invite dans le premier quartier d'affaires d'Europe
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                À deux pas de La Défense, Nanterre est un territoire en pleine transformation qui allie dynamisme économique 
                et espaces verts remarquables. Nos ateliers botaniques apportent une bouffée de nature aux entreprises, 
                collectivités et habitants de Nanterre, Rueil-Malmaison, Puteaux, Courbevoie, Suresnes et Colombes.
              </p>
            </div>

            {/* Why Nanterre Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pourquoi choisir Nanterre pour un atelier botanique ?
              </h2>
              
              <div className="bg-sand p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Nanterre et le quartier de La Défense concentrent <strong>plus de 180 000 salariés</strong> au quotidien.
                  Dans cet environnement urbain dense, nos ateliers botaniques offrent une parenthèse verte précieuse. 
                  Le parc André-Malraux, les berges de Seine réaménagées et le Mont-Valérien rappellent que la nature 
                  n'est jamais loin, même au cœur de la ville.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Pour les <strong>entreprises et CSE</strong> du secteur, nos ateliers représentent une alternative créative 
                  aux activités classiques de team building. Kokedama, terrarium ou teinture végétale : 
                  chaque atelier favorise la déconnexion, la créativité et la cohésion d'équipe.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Les <strong>collectivités de Nanterre</strong>, Rueil-Malmaison et Colombes font également appel à nous 
                  pour des animations dans les centres sociaux, les EHPAD et les structures municipales.
                  Nos interventions s'adaptent à tous les publics et à tous les formats.
                </p>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers disponibles à Nanterre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-brutal-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} à Nanterre`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                        {workshop.title}
                      </h3>
                      <p className="text-charcoal/70 mb-4">{workshop.description}</p>
                       <div className="flex items-center gap-4">
                         <span className="flex items-center gap-1 text-charcoal/60">
                           <Clock className="w-4 h-4" /> {workshop.duration}
                         </span>
                         <span className="flex items-center gap-1 text-charcoal/60">
                           <Users className="w-4 h-4" /> 10 max
                         </span>
                       </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link 
                  to="/workshops"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 "
                >
                  <Leaf className="w-4 h-4" />
                  Voir tous nos ateliers
                </Link>
              </div>
            </section>

            {/* Local Areas Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nous intervenons dans tout le nord des Hauts-de-Seine
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">La Défense & environs</h3>
                  <p className="text-sm text-charcoal/70">
                    Nanterre, Puteaux, Courbevoie, La Garenne-Colombes, Neuilly-sur-Seine
                  </p>
                </div>
                <div className="bg-white p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Boucle nord de Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Colombes, Asnières-sur-Seine, Gennevilliers, Clichy, Levallois-Perret
                  </p>
                </div>
                <div className="bg-white p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Collines de l'ouest</h3>
                  <p className="text-sm text-charcoal/70">
                    Rueil-Malmaison, Suresnes, Saint-Cloud, Garches, Vaucresson
                  </p>
                </div>
              </div>
            </section>

            {/* For Who Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pour qui sont nos ateliers dans les Hauts-de-Seine ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 p-6 border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Particuliers & Familles
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers créatifs le week-end à Nanterre</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Anniversaires botaniques originaux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers entre amis ou en famille à domicile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Activités pendant les vacances scolaires</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 p-6 border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Entreprises & Collectivités
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Team building nature à La Défense</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Animations CSE, QVCT et séminaires RSE</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Interventions en centres sociaux et MJC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers thérapeutiques pour EHPAD du 92</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="mb-20 animate-fade-in">
              <div className="bg-sand p-8 md:p-10">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl italic text-charcoal mb-6 leading-relaxed">
                    "Notre CSE a organisé un atelier kokedama avec Botanique Ludique dans nos locaux à La Défense. 
                    Une vraie bouffée d'air frais pour les collaborateurs. L'atelier a été plébiscité par toute l'équipe !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Thomas M.</strong>, CSE, Courbevoie
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pourquoi choisir Botanique Ludique ?
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Expertise EHESS</h3>
                  <p className="text-sm text-charcoal/70">Fondatrice, animatrice ethnobotaniste formée de l'École des Hautes Études</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">+400 Participants</h3>
                  <p className="text-sm text-charcoal/70">Une communauté grandissante de passionnés en Île-de-France</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Déplacement inclus</h3>
                  <p className="text-sm text-charcoal/70">Nous venons dans vos locaux à Nanterre et alentours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Flexibilité totale</h3>
                  <p className="text-sm text-charcoal/70">Ateliers en semaine, week-end ou sur mesure pour votre entreprise</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  Envie d'un atelier botanique à Nanterre ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier. Nous vous répondons sous 24h avec un devis personnalisé 
                  adapté à vos besoins, que vous soyez à La Défense, Rueil ou Colombes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-[3px] border-sage text-sage hover:bg-sage hover:text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 "
                  >
                    <Mail className="w-4 h-4" />
                    Demander un devis gratuit
                  </Link>
                  <a 
                    href="tel:+33609831606"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-[3px] border-sage text-sage hover:bg-sage hover:text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 "
                  >
                    <Phone className="w-4 h-4" />
                    06 09 83 16 06
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <LandingPhotoStrip />

      <Footer />
    </div>
  );
};

export default AtelierBotaniqueNanterre;
