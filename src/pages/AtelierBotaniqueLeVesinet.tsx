import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail, TreeDeciduous } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import kokedamaImage from "@/assets/gallery-kokedama-garden.webp";
import dyeingImage from "@/assets/gallery-teinture-1.webp";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import basketryImage from "@/assets/gallery-basketry.webp";

const AtelierBotaniqueLeVesinet = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Créez votre jardin suspendu japonais dans l'esprit des parcs paysagers du Vésinet.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Explorez les techniques de teinture naturelle avec des plantes des jardins vésigondins.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Composez un écosystème miniature inspiré par les lacs et espaces verts du Vésinet.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Initiez-vous au tressage traditionnel avec des végétaux des zones humides locales.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Atelier Botanique Le Vésinet | Kokedama, Terrarium ✦ Ville-Parc 78"
        description="🌿 Ateliers botaniques au Vésinet, ville-parc des Yvelines. Kokedama, teinture végétale, terrarium dès 25€. Créez au cœur d'un patrimoine paysager exceptionnel !"
        keywords="atelier botanique Le Vésinet, kokedama Le Vésinet, terrarium ville-parc, atelier nature Yvelines 78, teinture végétale Le Vésinet, vannerie, atelier créatif jardin"
        canonical="/atelier-botanique-le-vesinet"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers au Vésinet",
          "description": "Ateliers botaniques créatifs au Vésinet, ville-parc des Yvelines",
          "areaServed": {
            "@type": "City",
            "name": "Le Vésinet",
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
                <TreeDeciduous className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Le Vésinet - Ville-Parc (78)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques au Vésinet
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Créez au cœur de la plus belle ville-parc de France
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Découvrez nos ateliers créatifs dans le cadre exceptionnel du Vésinet, joyau paysager classé. 
                Une expérience botanique unique inspirée par les 5 lacs artificiels, les parcs romantiques 
                et la végétation luxuriante de cette ville-jardin, accessible depuis Chatou, Saint-Germain-en-Laye et Le Pecq.
              </p>
            </div>
      <LandingPhotoStrip />

            {/* Why Le Vésinet Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Le Vésinet : un écrin végétal unique pour les arts botaniques
              </h2>
              
              <div className="bg-sand p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Le Vésinet est un cas unique en France : une <strong>ville entièrement conçue comme un parc paysager</strong>. 
                  Créée en 1875 par le comte de Choulot, elle offre 100 hectares d'espaces verts, 5 lacs artificiels, 
                  et des milliers d'arbres centenaires. Ce patrimoine végétal exceptionnel inspire naturellement nos ateliers botaniques.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Les jardins vésigondins, avec leurs <strong>séquoias géants, cèdres du Liban et magnolias</strong>, 
                  témoignent d'une tradition horticole raffinée. Nos ateliers s'inscrivent dans cette histoire en proposant 
                  des créations végétales qui honorent ce patrimoine vivant.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Que vous habitiez Le Vésinet, Chatou, Le Pecq ou Saint-Germain-en-Laye, nous organisons des ateliers 
                  à domicile ou dans un lieu de votre choix. Chaque création devient un écho de cette <strong>ville-parc 
                  classée au patrimoine remarquable</strong>.
                </p>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers disponibles au Vésinet
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-brutal-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} au Vésinet`}
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

            {/* Parks & Lakes Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Les parcs du Vésinet : une inspiration botanique inépuisable
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Les 5 lacs artificiels
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Lac des Ibis, lac de la Station, lac Supérieur... Ces miroirs d'eau entourés de végétation 
                    luxuriante inspirent nos créations aquatiques et nos terrariums humides.
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Les arbres remarquables
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Séquoias centenaires, cèdres majestueux, platanes monumentaux... 
                    Cette collection botanique exceptionnelle nourrit notre approche pédagogique.
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Les jardins privés
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Les villas vésigondinnes sont entourées de jardins soignés où prospèrent rhododendrons, 
                    camélias et roses anciennes, sources d'inspiration pour nos ateliers floraux.
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    La coulée verte
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Ce corridor écologique traverse la ville, reliant les différents lacs et parcs. 
                    Un lieu privilégié pour observer la flore locale et ses usages traditionnels.
                  </p>
                </div>
              </div>
            </section>

            {/* Local Areas Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nous intervenons dans tout le secteur du Vésinet
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Villes-parcs</h3>
                  <p className="text-sm text-charcoal/70">
                    Le Vésinet, Maisons-Laffitte, Saint-Germain-en-Laye
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Boucles de Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Chatou, Croissy-sur-Seine, Le Pecq, Le Port-Marly
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Rive droite</h3>
                  <p className="text-sm text-charcoal/70">
                    Rueil-Malmaison, Nanterre, Bougival, La Celle-Saint-Cloud
                  </p>
                </div>
              </div>
            </section>

            {/* For Who Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                À qui s'adressent nos ateliers au Vésinet ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 p-6 border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Particuliers & Familles
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers en famille dans les jardins vésigondins</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Anniversaires botaniques originaux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers créatifs entre amis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Découverte de l'art végétal japonais</span>
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
                      <span className="text-charcoal/80">Team building nature pour entreprises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Animations pour la MJC du Vésinet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Interventions scolaires écologiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers thérapeutiques en EHPAD</span>
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
                    "Un atelier kokedama magique au Vésinet ! Vanessa est passionnée et pédagogue, 
                    mes enfants ont adoré créer leur petit jardin suspendu. L'ambiance de la ville-parc 
                    a rendu l'expérience encore plus spéciale. Je recommande à toutes les familles !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Marie L.</strong>, Le Vésinet
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pourquoi choisir Botanique Ludique au Vésinet ?
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
                  <p className="text-sm text-charcoal/70">Une communauté passionnée en Île-de-France</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <TreeDeciduous className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Esprit ville-parc</h3>
                  <p className="text-sm text-charcoal/70">Ateliers inspirés par le patrimoine végétal vésigondin</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Flexibilité</h3>
                  <p className="text-sm text-charcoal/70">Semaine, week-end ou vacances selon vos disponibilités</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  Prêt pour un atelier botanique au Vésinet ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier dans la plus belle ville-parc de France. 
                  Réponse sous 24h avec un devis personnalisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-[3px] border-sage text-sage hover:bg-sage hover:text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 "
                  >
                    <Mail className="w-4 h-4" />
                    Demander un devis
                  </Link>
                  <a 
                    href="tel:0609831606"
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

export default AtelierBotaniqueLeVesinet;
