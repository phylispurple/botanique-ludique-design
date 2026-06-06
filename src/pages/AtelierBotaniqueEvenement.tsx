import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail, Heart, Gift, PartyPopper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import kokedamaImage from "@/assets/gallery-kokedama-garden.webp";
import dyeingImage from "@/assets/gallery-teinture-1.webp";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import flowerCrownImage from "@/assets/gallery-flower-crown.webp";

const AtelierBotaniqueEvenement = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Offrez à vos invités une création végétale unique à emporter, souvenir vivant de votre événement.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Atelier Terrarium",
      description: "Un jardin miniature sous verre, cadeau personnalisé idéal pour mariages et anniversaires.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Teinture Végétale",
      description: "Créez ensemble des pièces textiles teintes aux pigments naturels, un moment créatif et convivial.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Couronne de Fleurs",
      description: "Tressez votre couronne végétale, parfaite pour les EVJF, fêtes champêtres et célébrations.",
      duration: "2h",
      price: "40€",
      image: flowerCrownImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Botanique Événement | Mariage, Anniversaire, EVJF ✦ Paris & IDF"
        description="🌿 Ateliers botaniques pour événements privés : mariages, anniversaires, EVJF, baby showers. Animation originale et créative à Paris et en Île-de-France."
        keywords="atelier botanique mariage, animation végétale anniversaire, EVJF nature Paris, atelier terrarium mariage, animation botanique événement, baby shower nature"
        canonical="/atelier-botanique-evenement"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers Événementiels",
          "description": "Ateliers botaniques créatifs pour événements privés à Paris et en Île-de-France",
          "areaServed": {
            "@type": "State",
            "name": "Île-de-France"
          },
          "priceRange": "25€ - 200€"
        }}
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Paris & Île-de-France</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques pour vos Événements
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Mariages, anniversaires, EVJF : célébrez avec la nature
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Offrez à vos invités une expérience créative et mémorable. Nos ateliers botaniques 
                s'adaptent à tous vos événements privés : mariages, anniversaires, enterrements de vie 
                de jeune fille, baby showers, fêtes de famille. Chaque participant repart avec sa création 
                végétale, un souvenir vivant de votre célébration.
              </p>
            </div>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir un atelier botanique pour votre événement ?
              </h2>
              
              <div className="bg-sand rounded-lg p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Un atelier botanique apporte une touche d'<strong>originalité et de nature</strong> à votre célébration. 
                  Contrairement aux animations classiques, nos ateliers créent un véritable moment de partage : 
                  vos invités collaborent, créent et repartent avec un objet vivant qui prolonge la magie de l'événement.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Pour un <strong>mariage</strong>, imaginez vos invités composant leur terrarium pendant le cocktail. 
                  Pour un <strong>EVJF</strong>, tressez ensemble des couronnes de fleurs dans un parc parisien. 
                  Pour un <strong>anniversaire d'enfant</strong>, initiez les petits à la magie des plantes avec des bombes de graines.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Nous nous déplaçons partout en Île-de-France : chez vous, dans un lieu de réception, 
                  un restaurant, un jardin ou tout espace de votre choix. Le matériel, les plantes 
                  et le savoir-faire sont inclus.
                </p>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers pour événements
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} pour événement`}
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

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pour quel type d'événement ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-sage/10 rounded-lg p-6 text-center">
                  <Heart className="w-10 h-10 text-sage mx-auto mb-4" />
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Mariages & Fiançailles</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2 text-left">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Animation cocktail ou vin d'honneur</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Cadeaux invités végétaux</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Décoration florale participative</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6 text-center">
                  <PartyPopper className="w-10 h-10 text-sage mx-auto mb-4" />
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>EVJF & Anniversaires</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2 text-left">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> EVJF nature et couronnes de fleurs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Anniversaires enfants dès 4 ans</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Fêtes entre amis originales</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6 text-center">
                  <Gift className="w-10 h-10 text-sage mx-auto mb-4" />
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Célébrations Familiales</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2 text-left">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Baby showers végétales</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Fêtes de famille intergénérationnelles</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Baptêmes et communions nature</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <div className="bg-sand rounded-lg p-8 md:p-10">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl italic text-charcoal mb-6 leading-relaxed">
                    "Vanessa a animé un atelier terrarium pour mon EVJF. Mes amies ont adoré ! 
                    Chacune est repartie avec sa création, un souvenir magnifique de cette journée. 
                    Merci pour ce moment de douceur et de créativité !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Marine L.</strong>, EVJF à Paris
                  </footer>
                </blockquote>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir Botanique Ludique ?
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Sur mesure</h3>
                  <p className="text-sm text-charcoal/70">Chaque atelier est personnalisé selon votre thème et vos envies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Déplacement inclus</h3>
                  <p className="text-sm text-charcoal/70">Nous venons chez vous partout en Île-de-France (75, 78, 92, 95)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Tous âges</h3>
                  <p className="text-sm text-charcoal/70">Des ateliers adaptés dès 4 ans jusqu'aux seniors</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Souvenir vivant</h3>
                  <p className="text-sm text-charcoal/70">Chaque invité repart avec sa création végétale</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Envie d'une animation botanique pour votre événement ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour recevoir un devis personnalisé. Nous vous répondons sous 24h 
                  avec une proposition adaptée à votre événement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                  >
                    <Mail className="w-4 h-4" />
                    Demander un devis gratuit
                  </Link>
                  <a 
                    href="tel:+33609831606"
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

export default AtelierBotaniqueEvenement;
