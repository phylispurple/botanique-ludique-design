import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import kokedamaImage from "@/assets/gallery-kokedama-garden.webp";
import dyeingImage from "@/assets/gallery-teinture-1.webp";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import basketryImage from "@/assets/gallery-basketry.webp";

const AtelierBotaniqueChatou = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Créez votre jardin suspendu japonais sur l'île des Impressionnistes à Chatou.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Découvrez les pigments naturels comme les Impressionnistes découvraient la lumière.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Composez un paysage miniature évoquant les berges peintes par Renoir et Monet.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Tressez des paniers avec les osiers des îles de la Seine à Chatou.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Botanique Chatou | Kokedama, Teinture ✦ Île des Impressionnistes 78"
        description="🌿 Ateliers botaniques à Chatou, l'île des Impressionnistes. Kokedama, teinture végétale, terrarium dès 25€. Créez dans le décor qui inspira Renoir !"
        keywords="atelier botanique Chatou, kokedama Chatou, île des Impressionnistes, atelier nature Yvelines, teinture végétale 78, terrarium Chatou, MJC Chatou, vannerie"
        canonical="/atelier-botanique-chatou"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers à Chatou",
          "description": "Ateliers botaniques créatifs à Chatou, l'île des Impressionnistes",
          "areaServed": {
            "@type": "City",
            "name": "Chatou",
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

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Chatou - L'île des Impressionnistes (78)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques à Chatou
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Créez dans le décor qui inspira les Impressionnistes
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Découvrez nos ateliers créatifs à Chatou, célèbre pour son île des Impressionnistes où Renoir peignit 
                "Le Déjeuner des canotiers". Une expérience botanique unique alliant art, nature et patrimoine, 
                accessible depuis Le Vésinet, Croissy-sur-Seine, Rueil-Malmaison et tout le secteur.
              </p>
            </div>

            {/* Why Chatou Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Chatou : quand l'art rencontre la botanique
              </h2>
              
              <div className="bg-sand rounded-lg p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Chatou occupe une place unique dans l'histoire de l'art français. L'<strong>île des Impressionnistes</strong>, 
                  autrefois appelée île de Chatou, fut le lieu de villégiature préféré de Renoir, Monet, Manet et leurs amis. 
                  Ces peintres venaient ici capturer la lumière changeante de la Seine et la végétation luxuriante des berges.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Aujourd'hui, cette tradition artistique se poursuit à travers nos ateliers botaniques. Comme les Impressionnistes 
                  cherchaient à <strong>saisir l'essence de la nature</strong>, nous vous invitons à créer des œuvres végétales 
                  qui capturent la beauté du monde vivant. Chaque kokedama, chaque terrarium devient une petite toile verte.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  La <strong>Maison Fournaise</strong>, restaurant immortalisé par Renoir, témoigne encore de cette époque. 
                  Nos ateliers s'inscrivent dans cette lignée créative, utilisant les mêmes plantes et les mêmes lumières 
                  qui fascinaient les maîtres impressionnistes il y a 150 ans.
                </p>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers disponibles à Chatou
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} à Chatou`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                >
                  <Leaf className="w-4 h-4" />
                  Voir tous nos ateliers
                </Link>
              </div>
            </section>

            {/* MJC Chatou Partnership */}
            <section className="mb-20 animate-fade-in">
              <div className="bg-sage/10 rounded-lg p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Partenaire de la MJC de Chatou
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                  Botanique Ludique collabore régulièrement avec la <strong>MJC de Chatou</strong> pour proposer des ateliers 
                  botaniques accessibles à tous. Cette collaboration nous permet d'ancrer notre pratique dans la vie culturelle locale 
                  et de partager notre passion avec les habitants de Chatou et des communes voisines.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-2xl font-bold text-sage">+50</span>
                    <p className="text-sm text-charcoal/70">Participants à la MJC</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-2xl font-bold text-sage">12</span>
                    <p className="text-sm text-charcoal/70">Ateliers organisés</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-2xl font-bold text-sage">5★</span>
                    <p className="text-sm text-charcoal/70">Satisfaction moyenne</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Impressionist Heritage */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                L'héritage impressionniste dans nos ateliers
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Palette className="w-8 h-8 text-sage mb-3" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Les couleurs de Renoir
                  </h3>
                  <p className="text-charcoal/70">
                    Nos ateliers de teinture végétale explorent les mêmes nuances que celles capturées par les Impressionnistes : 
                    les verts profonds des saules, les reflets bleutés de la Seine, les touches de couleur des fleurs sauvages.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Leaf className="w-8 h-8 text-sage mb-3" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    La lumière en bord de Seine
                  </h3>
                  <p className="text-charcoal/70">
                    L'île de Chatou offre une luminosité particulière, filtrée par les peupliers et les saules. 
                    Nos terrariums et kokedamas capturent cette atmosphère apaisante des bords de Seine.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Users className="w-8 h-8 text-sage mb-3" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    L'esprit des guinguettes
                  </h3>
                  <p className="text-charcoal/70">
                    Comme les artistes qui se retrouvaient chez Fournaise, nos ateliers favorisent la convivialité et l'échange. 
                    Créer ensemble, c'est perpétuer l'esprit des bords de Seine.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mb-3" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Un territoire d'inspiration
                  </h3>
                  <p className="text-charcoal/70">
                    De l'île des Impressionnistes aux berges de Croissy, chaque lieu raconte une histoire végétale 
                    que nous explorons à travers nos créations botaniques.
                  </p>
                </div>
              </div>
            </section>

            {/* Local Areas Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nous intervenons dans tout le secteur de Chatou
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Boucles de Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Chatou, Croissy-sur-Seine, Le Vésinet, Montesson, Carrières-sur-Seine
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Hauts-de-Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Rueil-Malmaison, Nanterre, Suresnes, La Garenne-Colombes
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Yvelines Nord</h3>
                  <p className="text-sm text-charcoal/70">
                    Le Pecq, Saint-Germain-en-Laye, Maisons-Laffitte, Sartrouville
                  </p>
                </div>
              </div>
            </section>

            {/* For Who Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                À qui s'adressent nos ateliers à Chatou ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Particuliers & Familles
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers créatifs sur l'île des Impressionnistes</span>
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
                      <span className="text-charcoal/80">Découvertes artistiques et végétales</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Professionnels & Collectivités
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers à la MJC de Chatou</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Team building nature pour entreprises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Interventions scolaires créatives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Animations pour résidences seniors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="mb-20 animate-fade-in">
              <div className="bg-sand rounded-lg p-8 md:p-10">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl italic text-charcoal mb-6 leading-relaxed">
                    "J'ai participé à un atelier teinture végétale à la MJC de Chatou. Vanessa nous a fait découvrir 
                    les techniques ancestrales avec passion. Créer des couleurs à partir de plantes, dans ce lieu 
                    chargé d'histoire artistique, c'était magique. Je reviens pour le prochain atelier !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Isabelle D.</strong>, Chatou
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir Botanique Ludique à Chatou ?
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Expertise EHESS</h3>
                  <p className="text-sm text-charcoal/70">Fondatrice ethnobotaniste diplômée de l'École des Hautes Études</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">+400 Participants</h3>
                  <p className="text-sm text-charcoal/70">Une communauté passionnée en Île-de-France</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Esprit artistique</h3>
                  <p className="text-sm text-charcoal/70">Ateliers inspirés par l'héritage impressionniste</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Flexibilité</h3>
                  <p className="text-sm text-charcoal/70">Semaine, week-end ou vacances selon vos disponibilités</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Envie d'un atelier botanique à Chatou ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier sur l'île des Impressionnistes ou à domicile. 
                  Réponse sous 24h avec un devis personnalisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                  >
                    <Mail className="w-4 h-4" />
                    Demander un devis
                  </Link>
                  <a 
                    href="tel:0609831606"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
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

export default AtelierBotaniqueChatou;
