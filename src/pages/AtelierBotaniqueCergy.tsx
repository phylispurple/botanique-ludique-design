import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import kokedamaImage from "@/assets/gallery-kokedama-garden.webp";
import dyeingImage from "@/assets/gallery-teinture-1.webp";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import basketryImage from "@/assets/gallery-basketry.webp";

const AtelierBotaniqueCergy = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Créez votre sphère végétale suspendue, inspirée par la richesse naturelle des bords de l'Oise à Cergy.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Explorez les pigments naturels et apprenez à teindre des textiles avec des plantes du Vexin français.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Composez un jardin miniature sous verre avec des mousses et fougères typiques du Val-d'Oise.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Initiez-vous au tressage de paniers avec des végétaux récoltés dans les espaces naturels du Vexin.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Botanique Cergy-Pontoise | Kokedama, Terrarium ✦ 95"
        description="🌿 Ateliers botaniques à Cergy-Pontoise et Val-d'Oise. Kokedama, teinture végétale, terrarium pour particuliers, entreprises et collectivités. Réservez !"
        keywords="atelier botanique Cergy, kokedama Cergy-Pontoise, terrarium Val-d'Oise, team building Cergy, atelier nature 95, teinture végétale Val-d'Oise, animation EHPAD Cergy"
        canonical="/atelier-botanique-cergy"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers à Cergy-Pontoise",
          "description": "Ateliers botaniques créatifs à Cergy-Pontoise et dans le Val-d'Oise",
          "areaServed": {
            "@type": "City",
            "name": "Cergy",
            "containedIn": {
              "@type": "State",
              "name": "Val-d'Oise"
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
                <span className="text-sage font-medium">Cergy-Pontoise & Val-d'Oise (95)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques à Cergy-Pontoise
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                La nature du Vexin à portée de main
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Cergy-Pontoise, ville nouvelle bordée par l'Oise et aux portes du Parc naturel régional du Vexin français, 
                est un territoire idéal pour redécouvrir le lien avec le végétal. Nos ateliers botaniques s'adressent 
                aux habitants, entreprises et collectivités de Cergy, Pontoise, Osny, Éragny, Saint-Ouen-l'Aumône 
                et de tout le sud du Val-d'Oise.
              </p>
            </div>

            {/* Why Cergy Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir Cergy-Pontoise pour un atelier botanique ?
              </h2>
              
              <div className="bg-sand rounded-lg p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  L'agglomération de Cergy-Pontoise bénéficie d'un environnement naturel exceptionnel. 
                  Le <strong>Parc naturel régional du Vexin français</strong>, les bords de l'Oise et les nombreux parcs urbains 
                  offrent un cadre privilégié pour se reconnecter au végétal. Cette biodiversité locale inspire 
                  directement nos créations botaniques.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Avec son <strong>pôle universitaire</strong>, ses zones d'activités économiques et ses nombreuses structures 
                  associatives, Cergy-Pontoise est un territoire dynamique où nos ateliers trouvent naturellement leur place. 
                  Team building pour les entreprises de la ZAC, animations pour les MJC et centres sociaux, 
                  interventions dans les EHPAD : nous adaptons nos formats à chaque structure.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Les <strong>collectivités du Val-d'Oise</strong> sont de plus en plus nombreuses à intégrer 
                  des animations nature dans leurs programmations culturelles et sociales. Nos ateliers répondent 
                  aux objectifs de sensibilisation environnementale tout en proposant une activité créative 
                  et fédératrice pour tous les âges.
                </p>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers disponibles à Cergy-Pontoise
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={`${workshop.title} à Cergy-Pontoise`}
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
                Nous intervenons dans tout le sud du Val-d'Oise
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Agglomération de Cergy-Pontoise</h3>
                  <p className="text-sm text-charcoal/70">
                    Cergy, Pontoise, Osny, Éragny, Saint-Ouen-l'Aumône, Jouy-le-Moutier
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Vallée de l'Oise</h3>
                  <p className="text-sm text-charcoal/70">
                    Conflans-Sainte-Honorine, Herblay, Pierrelaye, Bessancourt, Taverny
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Vexin & environs</h3>
                  <p className="text-sm text-charcoal/70">
                    Auvers-sur-Oise, L'Isle-Adam, Beaumont-sur-Oise, Méry-sur-Oise, Vauréal
                  </p>
                </div>
              </div>
            </section>

            {/* For Who Section */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pour qui sont nos ateliers à Cergy-Pontoise ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Particuliers & Familles
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers créatifs le week-end à Cergy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Anniversaires botaniques pour enfants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers en famille à domicile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Activités nature pendant les vacances scolaires</span>
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
                      <span className="text-charcoal/80">Team building pour entreprises de Cergy-Pontoise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Animations pour MJC, médiathèques et centres sociaux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Interventions scolaires et périscolaires</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Ateliers thérapeutiques pour EHPAD du 95</span>
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
                    "Vanessa est intervenue dans notre MJC à Pontoise pour un atelier terrarium. 
                    Les participants de 8 à 75 ans ont tous été captivés. Un vrai moment de partage 
                    intergénérationnel autour de la nature !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Nathalie P.</strong>, Animatrice MJC, Pontoise
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir Botanique Ludique ?
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
                  <p className="text-sm text-charcoal/70">Une communauté grandissante de passionnés en Île-de-France</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Déplacement inclus</h3>
                  <p className="text-sm text-charcoal/70">Nous venons chez vous dans tout le Val-d'Oise sud</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Flexibilité totale</h3>
                  <p className="text-sm text-charcoal/70">Ateliers en semaine, week-end ou vacances selon vos disponibilités</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Prêt à vivre une expérience botanique à Cergy-Pontoise ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier. Nous vous répondons sous 24h avec un devis personnalisé 
                  adapté à vos besoins dans le Val-d'Oise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
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

export default AtelierBotaniqueCergy;
