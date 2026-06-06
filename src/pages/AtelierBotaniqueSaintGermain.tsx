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

const AtelierBotaniqueSaintGermain = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Créez votre jardin suspendu japonais avec des plantes locales des forêts de Saint-Germain-en-Laye.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Apprenez les techniques ancestrales de teinture naturelle avec des plantes tinctoriales de la région.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Créez un écosystème miniature avec des mousses et fougères des sous-bois saint-germanois.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Initiez-vous au tressage de paniers avec des végétaux récoltés dans les forêts avoisinantes.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Atelier Botanique Saint-Germain-en-Laye | Kokedama, Teinture ✦ 78"
        description="🌿 Ateliers botaniques à Saint-Germain-en-Laye et environs (Le Pecq, Le Vésinet, Chatou). Kokedama, teinture végétale, terrarium dès 25€. Réservez votre atelier nature !"
        keywords="atelier botanique Saint-Germain-en-Laye, kokedama Saint-Germain, teinture végétale Yvelines, atelier nature 78, terrarium Saint-Germain-en-Laye, vannerie Le Pecq, atelier créatif Le Vésinet"
        canonical="/atelier-botanique-saint-germain-en-laye"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers à Saint-Germain-en-Laye",
          "description": "Ateliers botaniques créatifs à Saint-Germain-en-Laye et dans les Yvelines",
          "areaServed": {
            "@type": "City",
            "name": "Saint-Germain-en-Laye",
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
                <span className="text-sage font-medium">Saint-Germain-en-Laye & environs (78)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques à Saint-Germain-en-Laye
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Reconnectez-vous à la nature au cœur des Yvelines
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Découvrez nos ateliers créatifs inspirés par la richesse botanique de la forêt de Saint-Germain-en-Laye. 
                Des expériences uniques pour particuliers, familles et entreprises dans tout le secteur : 
                Le Pecq, Le Vésinet, Chatou, Maisons-Laffitte, Poissy et au-delà.
              </p>
            </div>

            {/* Why Saint-Germain Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pourquoi choisir Saint-Germain-en-Laye pour un atelier botanique ?
              </h2>
              
              <div className="bg-sand p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Saint-Germain-en-Laye est un écrin de verdure exceptionnel au cœur des Yvelines. Avec sa <strong>forêt domaniale de 3 500 hectares</strong>, 
                  ses jardins historiques et sa proximité avec la Seine, cette ville offre un cadre idéal pour se reconnecter au végétal.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Nos ateliers botaniques tirent leur inspiration de cette richesse naturelle. Que vous habitiez à Saint-Germain-en-Laye, 
                  au Pecq, au Vésinet, à Chatou ou dans les communes environnantes, nous nous déplaçons chez vous ou dans un lieu de votre choix 
                  pour animer des expériences créatives uniques.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  La tradition horticole des Yvelines, héritée des jardins royaux de Versailles et de Saint-Germain, fait de ce territoire 
                  un lieu privilégié pour redécouvrir les <strong>savoir-faire botaniques ancestraux</strong>. Nos ateliers perpétuent cette tradition 
                  tout en l adaptant aux sensibilités contemporaines.
                </p>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers disponibles à Saint-Germain-en-Laye
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-brutal-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} à Saint-Germain-en-Laye`}
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
                Nous intervenons dans toute la région de Saint-Germain-en-Laye
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Boucles de Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, Croissy-sur-Seine, Le Port-Marly
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Plaine de Versailles</h3>
                  <p className="text-sm text-charcoal/70">
                    Maisons-Laffitte, Sartrouville, Houilles, Carrières-sur-Seine, Montesson
                  </p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Vallée de la Seine</h3>
                  <p className="text-sm text-charcoal/70">
                    Poissy, Conflans-Sainte-Honorine, Achères, Andrésy, Triel-sur-Seine
                  </p>
                </div>
              </div>
            </section>

            {/* For Who Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pour qui sont nos ateliers botaniques ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 p-6 border-brutal shadow-brutal">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Particuliers & Familles
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers parents-enfants le week-end</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Anniversaires créatifs et originaux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers entre amis à domicile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Activités de vacances scolaires</span>
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
                      <span className="text-charcoal/80">Team building pour entreprises de Saint-Germain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Animations pour MJC et centres sociaux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Interventions scolaires (écoles, collèges)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers thérapeutiques pour EHPAD</span>
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
                    mes enfants ont adoré créer leur petit jardin suspendu. Une expérience que je recommande 
                    à toutes les familles du secteur de Saint-Germain."
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
                Pourquoi choisir Botanique Ludique ?
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Expertise EHESS</h3>
                  <p className="text-sm text-charcoal/70">Fondatrice, animatrice ethnobotaniste formée de l école des Hautes Études</p>
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
                  <p className="text-sm text-charcoal/70">Nous venons chez vous dans tout le secteur de Saint-Germain</p>
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
                  Prêt à vivre une expérience botanique à Saint-Germain-en-Laye ?
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

export default AtelierBotaniqueSaintGermain;