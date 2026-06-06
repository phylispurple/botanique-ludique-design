import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail, Building, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import seedBombsImage from "@/assets/gallery-seed-bombs.webp";
import dyeingImage from "@/assets/gallery-teinture-1.webp";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import basketryImage from "@/assets/gallery-basketry.webp";

const AnimationCentreSocial = () => {
  const workshops = [
    {
      title: "Atelier Terrarium",
      description: "Création collective d'un jardin miniature, favorisant échanges et coopération entre participants de tous âges.",
      duration: "2h",
      price: "Sur devis",
      image: terrariumImage
    },
    {
      title: "Bombes de Graines",
      description: "Fabrication de seed bombs pour fleurir le quartier, un geste citoyen et écologique accessible dès 4 ans.",
      duration: "1h30",
      price: "Sur devis",
      image: seedBombsImage
    },
    {
      title: "Teinture Végétale",
      description: "Découverte des pigments naturels avec des plantes du quotidien. Idéal pour les ateliers parents-enfants.",
      duration: "2h30",
      price: "Sur devis",
      image: dyeingImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Initiation au tressage avec des matériaux naturels, transmettant un savoir-faire ancestral intergénérationnel.",
      duration: "3h",
      price: "Sur devis",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Animation Centre Social & Médiathèque | Ateliers Nature ✦ IDF"
        description="🌿 Animations botaniques pour centres sociaux, médiathèques, MJC et maisons de quartier. Ateliers nature intergénérationnels en Île-de-France. Devis gratuit."
        keywords="animation centre social nature, atelier botanique médiathèque, animation MJC plantes, atelier nature maison de quartier, animation intergénérationnelle centre social, atelier végétal association"
        canonical="/animation-centre-social"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Animations Centres Sociaux",
          "description": "Animations botaniques pour centres sociaux, médiathèques et structures associatives en Île-de-France",
          "areaServed": { "@type": "State", "name": "Île-de-France" },
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
                <Building className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Île-de-France (75, 78, 92, 95)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Animations Nature pour Centres Sociaux
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Le végétal au service du lien social
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Les centres sociaux, médiathèques, MJC et maisons de quartier jouent un rôle essentiel 
                dans la vie des territoires. Nos ateliers botaniques s'intègrent parfaitement 
                dans vos programmations : activités intergénérationnelles, ateliers parents-enfants, 
                animations vacances scolaires et projets de quartier autour de la nature.
              </p>
            </div>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir nos animations ?
              </h2>
              <div className="bg-sand rounded-lg p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Nos ateliers sont conçus pour être <strong>inclusifs et accessibles à tous</strong>. 
                  Aucune compétence préalable n'est requise : chaque participant, de 4 à 99 ans, 
                  peut créer quelque chose de beau et de vivant. C'est un puissant vecteur de 
                  <strong> lien social et intergénérationnel</strong>.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Le végétal est un <strong>médiateur universel</strong> : il permet de dépasser les barrières 
                  linguistiques, culturelles et générationnelles. Autour d'une plante, les échanges naissent 
                  naturellement. C'est pourquoi nos ateliers sont particulièrement adaptés aux quartiers 
                  prioritaires et aux publics éloignés de la nature.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Nous proposons des <strong>tarifs adaptés aux budgets associatifs</strong> et pouvons 
                  co-construire des projets sur mesure avec vos équipes d'animation. Cycles d'ateliers, 
                  événements ponctuels, projets de territoire : nous nous adaptons à vos besoins.
                </p>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers pour structures associatives
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img src={workshop.image} alt={`${workshop.title} pour centre social`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>{workshop.title}</h3>
                      <p className="text-charcoal/70 mb-4">{workshop.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-charcoal/60"><Clock className="w-4 h-4" /> {workshop.duration}</span>
                          <span className="flex items-center gap-1 text-charcoal/60"><Users className="w-4 h-4" /> 12 max</span>
                        </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Quelles structures accompagnons-nous ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Structures sociales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Centres sociaux et maisons de quartier</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Relais familles et LAEP</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Associations de quartier</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Jardins partagés et collectifs</span></li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Structures culturelles</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Médiathèques et bibliothèques</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">MJC et espaces culturels</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Centres de loisirs ALSH</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Festivals et événements municipaux</span></li>
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
                    "Vanessa intervient régulièrement dans notre centre social pour des ateliers parents-enfants. 
                    Les familles adorent et reviennent à chaque session. Un vrai succès qui crée du lien dans le quartier !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Fatima R.</strong>, Directrice de centre social, Yvelines
                  </footer>
                </blockquote>
              </div>
            </section>

            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Envie d'intégrer la nature dans votre programmation ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour co-construire un projet adapté à votre structure et votre public. 
                  Devis gratuit et tarifs adaptés aux budgets associatifs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full">
                    <Mail className="w-4 h-4" /> Demander un devis gratuit
                  </Link>
                  <a href="tel:+33609831606" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full">
                    <Phone className="w-4 h-4" /> 06 09 83 16 06
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

export default AnimationCentreSocial;
