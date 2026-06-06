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

const AtelierBotaniqueVersailles = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Façonnez votre sphère végétale japonaise, inspirée par l'art des jardins du château de Versailles.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Découvrez les pigments naturels utilisés à la Manufacture royale et créez vos propres couleurs botaniques.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Composez un jardin miniature avec des plantes évoquant les serres historiques du Potager du Roi.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Apprenez le tressage avec des végétaux récoltés dans les bois de Versailles et de Viroflay.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Atelier Botanique Versailles | Kokedama, Terrarium, Teinture ✦ 78"
        description="🌿 Ateliers botaniques à Versailles et environs. Kokedama, teinture végétale, terrarium dès 25€. Pour particuliers, entreprises et collectivités. Réservez !"
        keywords="atelier botanique Versailles, kokedama Versailles, teinture végétale Versailles, terrarium Versailles, atelier nature Yvelines 78, team building Versailles"
        canonical="/atelier-botanique-versailles"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers à Versailles",
          "description": "Ateliers botaniques créatifs à Versailles et dans les Yvelines",
          "areaServed": {
            "@type": "City",
            "name": "Versailles",
            "containedIn": {
              "@type": "State",
              "name": "Yvelines"
            }
          },
          "priceRange": "25€ - 200€"
        }}
      />
      <FloatingIllustrations />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Versailles & environs (78)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques à Versailles
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                L'art du végétal au cœur de la ville royale
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Versailles, ville emblématique de l'art des jardins, est le cadre idéal pour nos ateliers botaniques.
                Du Potager du Roi aux allées du Domaine, la tradition horticole versaillaise inspire chacune de nos créations.
                Nous intervenons pour les particuliers, les entreprises et les collectivités à Versailles, 
                Viroflay, Le Chesnay-Rocquencourt, Vélizy-Villacoublay et dans tout le sud des Yvelines.
              </p>
            </div>

            {/* Why Versailles Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pourquoi choisir Versailles pour un atelier botanique ?
              </h2>
              
              <div className="bg-sand p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Versailles possède un patrimoine botanique exceptionnel. Le <strong>Potager du Roi</strong>, créé en 1683, 
                  et les <strong>jardins du château</strong> témoignent d'une tradition horticole séculaire. Cette richesse végétale 
                  fait de Versailles un lieu d'inspiration unique pour redécouvrir les savoir-faire botaniques.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Nos ateliers s'inscrivent dans cette histoire en proposant des expériences créatives autour des plantes.
                  Que ce soit pour un <strong>team building original</strong> dans les locaux de votre entreprise, 
                  une animation pour un <strong>EHPAD</strong> du secteur ou un atelier entre amis, 
                  nous adaptons chaque intervention au contexte versaillais.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Le tissu économique dynamique de Versailles, avec ses nombreuses entreprises et institutions, 
                  fait de cette ville un territoire privilégié pour nos <strong>interventions professionnelles</strong>. 
                  CSE, séminaires RSE, journées QVCT : nous accompagnons les organisations versaillaises 
                  dans leurs projets de cohésion et de bien-être au travail.
                </p>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers disponibles à Versailles
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-brutal-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} à Versailles`}
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
                Nous intervenons dans tout le secteur de Versailles
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Grand Versailles</h3>
                  <p className="text-sm text-charcoal/70">
                    Versailles, Le Chesnay-Rocquencourt, Viroflay, Buc, Jouy-en-Josas
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Plateau de Saclay</h3>
                  <p className="text-sm text-charcoal/70">
                    Vélizy-Villacoublay, Chaville, Meudon, Sèvres, Saint-Cloud
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Plaine de Versailles</h3>
                  <p className="text-sm text-charcoal/70">
                    Saint-Cyr-l'École, Fontenay-le-Fleury, Rocquencourt, Bailly
                  </p>
                </div>
              </div>
            </section>

            {/* For Who Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pour qui sont nos ateliers à Versailles ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 p-6 border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Particuliers & Familles
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers créatifs le week-end à Versailles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Anniversaires botaniques pour enfants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers entre amis à domicile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Activités nature pendant les vacances scolaires</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 p-6 border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Professionnels & Collectivités
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Team building pour entreprises de Versailles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Animations CSE et séminaires RSE</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Interventions pour écoles et médiathèques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers pour EHPAD et résidences seniors</span>
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
                    "Un team building terrarium inoubliable pour notre équipe à Versailles. 
                    Vanessa a su créer une ambiance chaleureuse et pédagogique. 
                    Tout le monde est reparti avec sa création et le sourire !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Sophie R.</strong>, DRH, Versailles
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
                  <p className="text-sm text-charcoal/70">Nous venons chez vous dans tout le secteur de Versailles</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Flexibilité totale</h3>
                  <p className="text-sm text-charcoal/70">Ateliers en semaine, week-end ou vacances selon vos disponibilités</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  Prêt à vivre une expérience botanique à Versailles ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier. Nous vous répondons sous 24h avec un devis personnalisé 
                  adapté à vos besoins et à votre localisation dans les Yvelines.
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

      <Footer />
    </div>
  );
};

export default AtelierBotaniqueVersailles;
