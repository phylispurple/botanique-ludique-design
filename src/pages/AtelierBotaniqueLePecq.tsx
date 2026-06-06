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

const AtelierBotaniqueLePecq = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Créez votre jardin suspendu japonais inspiré par les berges de Seine au Pecq.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Découvrez les techniques de teinture naturelle avec des plantes des bords de Seine.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Créez un écosystème miniature avec des mousses et plantes des zones humides locales.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Apprenez le tressage de paniers avec des osiers et végétaux récoltés dans la région.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Botanique Le Pecq | Kokedama, Teinture Végétale ✦ Yvelines 78"
        description="🌿 Ateliers botaniques au Pecq et environs (Saint-Germain, Le Vésinet, Chatou). Kokedama, teinture végétale, terrarium dès 25€. Ateliers créatifs en bord de Seine !"
        keywords="atelier botanique Le Pecq, kokedama Le Pecq, teinture végétale Le Pecq, atelier nature Yvelines, terrarium 78, vannerie bord de Seine, atelier créatif Le Pecq"
        canonical="/atelier-botanique-le-pecq"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers au Pecq",
          "description": "Ateliers botaniques créatifs au Pecq et dans les Yvelines",
          "areaServed": {
            "@type": "City",
            "name": "Le Pecq",
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
                <MapPin className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Le Pecq & bords de Seine (78)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques au Pecq
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                L'art botanique au fil de la Seine
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Découvrez nos ateliers créatifs inspirés par les paysages des bords de Seine au Pecq. 
                Une expérience unique alliant nature, créativité et patrimoine fluvial, accessible aux habitants du Pecq, 
                Saint-Germain-en-Laye, Le Vésinet, Chatou et toutes les communes riveraines.
              </p>
            </div>

            {/* Why Le Pecq Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi Le Pecq est idéal pour un atelier botanique ?
              </h2>
              
              <div className="bg-sand rounded-lg p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Le Pecq, nichée entre la Seine et la forêt de Saint-Germain-en-Laye, offre un cadre naturel exceptionnel pour 
                  la pratique des arts botaniques. Cette <strong>commune des boucles de Seine</strong> bénéficie d'une biodiversité 
                  remarquable, mêlant flore des zones humides et essences forestières.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Les berges de la Seine au Pecq ont inspiré de nombreux peintres impressionnistes. Aujourd'hui, elles inspirent 
                  nos ateliers botaniques, où nous puisons dans cette richesse végétale pour créer des œuvres uniques. 
                  La proximité avec <strong>l'île Corbière</strong> et les espaces naturels préservés fait du Pecq un lieu privilégié 
                  pour se reconnecter au végétal.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Que vous résidiez au Pecq, à Saint-Germain-en-Laye, au Vésinet ou à Chatou, nos ateliers vous permettent 
                  d'explorer les techniques botaniques ancestrales tout en profitant de l'atmosphère apaisante des bords de Seine. 
                  Nous nous déplaçons chez vous ou dans un lieu de votre choix pour des expériences sur mesure.
                </p>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers disponibles au Pecq
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} au Pecq`}
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

            {/* Local Areas Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nous intervenons dans tout le secteur du Pecq
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Boucles de Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Le Pecq, Le Port-Marly, Marly-le-Roi, Louveciennes, Bougival
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Coteaux de Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Saint-Germain-en-Laye, Le Vésinet, Chatou, Croissy-sur-Seine
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Plaine de Montesson</h3>
                  <p className="text-sm text-charcoal/70">
                    Montesson, Carrières-sur-Seine, Sartrouville, Houilles
                  </p>
                </div>
              </div>
            </section>

            {/* For Who Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                À qui s'adressent nos ateliers au Pecq ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Particuliers & Familles
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers en famille le week-end au bord de Seine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Anniversaires botaniques pour enfants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers créatifs entre amis à domicile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Sorties nature pendant les vacances scolaires</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Professionnels & Institutions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Team building nature pour entreprises du Pecq</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Animations pour associations et centres sociaux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Interventions pédagogiques dans les écoles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers bien-être pour résidences seniors</span>
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
                    "Nous avons organisé un atelier teinture végétale au Pecq avec nos voisins. 
                    Vanessa a su créer une ambiance conviviale et nous a transmis sa passion des plantes tinctoriales. 
                    Une activité parfaite pour profiter des beaux jours en bord de Seine !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Sophie M.</strong>, Le Pecq
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Seine Inspiration Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Les bords de Seine : une source d'inspiration botanique
              </h2>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  La Seine qui traverse Le Pecq a façonné un écosystème unique, riche en <strong>saules, aulnes, iris des marais</strong> 
                  et autres plantes des zones humides. Cette biodiversité exceptionnelle nourrit notre pratique artistique 
                  et nous permet de proposer des ateliers ancrés dans le terroir local.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Les Impressionnistes comme Sisley et Monet ont immortalisé ces paysages fluviaux. Aujourd'hui, nos ateliers 
                  vous invitent à poursuivre cette tradition artistique en créant vos propres œuvres végétales, 
                  inspirées par la <strong>lumière changeante des boucles de Seine</strong>.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Que ce soit pour un atelier de vannerie avec des osiers des berges, une teinture naturelle aux plantes riveraines, 
                  ou un kokedama évoquant les jardins flottants, chaque création porte l'empreinte de ce territoire d'exception.
                </p>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir Botanique Ludique au Pecq ?
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Expertise EHESS</h3>
                  <p className="text-sm text-charcoal/70">Fondatrice, animatrice ethnobotaniste formée de l'École des Hautes Études</p>
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
                    <MapPin className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">À domicile</h3>
                  <p className="text-sm text-charcoal/70">Nous venons chez vous dans tout le secteur du Pecq</p>
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
                  Envie d'un atelier botanique au Pecq ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier en bord de Seine. Réponse sous 24h avec un devis personnalisé 
                  adapté à vos envies et à votre localisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
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

      <LandingPhotoStrip />

      <Footer />
    </div>
  );
};

export default AtelierBotaniqueLePecq;
