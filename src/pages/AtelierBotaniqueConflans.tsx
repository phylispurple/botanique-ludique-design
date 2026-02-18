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

const AtelierBotaniqueConflans = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Façonnez votre sphère végétale japonaise, inspirée par la confluence de l'Oise et de la Seine à Conflans.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Explorez les pigments naturels issus de plantes des berges de l'Oise et de la forêt de Saint-Germain.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Composez un jardin miniature avec des mousses et fougères typiques des bords de rivière.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Apprenez le tressage avec des végétaux récoltés le long de l'Oise et dans les espaces naturels du confluent.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Botanique Conflans-Sainte-Honorine | Kokedama, Terrarium ✦ 78"
        description="🌿 Ateliers botaniques à Conflans-Sainte-Honorine et environs. Kokedama, terrarium, teinture végétale pour particuliers, entreprises et collectivités."
        keywords="atelier botanique Conflans, kokedama Conflans-Sainte-Honorine, terrarium Yvelines nord, team building Conflans, atelier nature 78, animation nature confluent"
        canonical="/atelier-botanique-conflans-sainte-honorine"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers à Conflans-Sainte-Honorine",
          "description": "Ateliers botaniques créatifs à Conflans-Sainte-Honorine et nord des Yvelines",
          "areaServed": {
            "@type": "City",
            "name": "Conflans-Sainte-Honorine",
            "containedIn": { "@type": "State", "name": "Yvelines" }
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
                <MapPin className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Conflans-Sainte-Honorine & environs (78)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques à Conflans-Sainte-Honorine
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                La nature au confluent de l'Oise et de la Seine
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Conflans-Sainte-Honorine, capitale de la batellerie et ville au confluent de l'Oise et de la Seine, 
                est un territoire riche en biodiversité fluviale. Nos ateliers botaniques s'adressent aux habitants, 
                entreprises et collectivités de Conflans, Herblay, Achères, Maurecourt, Andrésy et Chanteloup-les-Vignes.
              </p>
            </div>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pourquoi choisir Conflans pour un atelier botanique ?
              </h2>
              <div className="bg-sand rounded-lg p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Conflans-Sainte-Honorine bénéficie d'un <strong>environnement fluvial unique</strong>. 
                  La confluence de l'Oise et de la Seine crée des écosystèmes riches qui inspirent nos créations botaniques. 
                  Les berges aménagées, les îles et les espaces naturels offrent un cadre privilégié pour se reconnecter au végétal.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Ville à la frontière des <strong>Yvelines et du Val-d'Oise</strong>, Conflans est un carrefour 
                  idéal pour toucher un large bassin de population. Nos ateliers y trouvent un public varié : 
                  familles des quartiers résidentiels, associations locales, entreprises de la zone d'activités 
                  et collectivités engagées dans la transition écologique.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Les <strong>médiathèques, centres sociaux et MJC</strong> de Conflans et des communes voisines 
                  intègrent régulièrement des animations nature dans leur programmation. Nos ateliers répondent 
                  parfaitement à cette demande croissante de reconnexion au vivant.
                </p>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers disponibles à Conflans-Sainte-Honorine
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img src={workshop.image} alt={`${workshop.title} à Conflans-Sainte-Honorine`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>{workshop.title}</h3>
                      <p className="text-charcoal/70 mb-4">{workshop.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-charcoal/60"><Clock className="w-4 h-4" /> {workshop.duration}</span>
                          <span className="flex items-center gap-1 text-charcoal/60"><Users className="w-4 h-4" /> 10 max</span>
                        </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Link to="/workshops" className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full">
                  <Leaf className="w-4 h-4" /> Voir tous nos ateliers
                </Link>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nous intervenons dans tout le secteur du confluent
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Confluent Seine-Oise</h3>
                  <p className="text-sm text-charcoal/70">Conflans, Andrésy, Maurecourt, Chanteloup-les-Vignes</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Yvelines nord</h3>
                  <p className="text-sm text-charcoal/70">Achères, Poissy, Carrières-sous-Poissy, Triel-sur-Seine</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Val-d'Oise sud</h3>
                  <p className="text-sm text-charcoal/70">Herblay, Pierrelaye, Saint-Ouen-l'Aumône, Éragny</p>
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
                    "Vanessa est venue animer un atelier teinture végétale à notre médiathèque de Conflans. 
                    Les participants ont découvert les pigments de plantes des bords de l'Oise. Magique et instructif !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Claire D.</strong>, Bibliothécaire, Conflans-Sainte-Honorine
                  </footer>
                </blockquote>
              </div>
            </section>

            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Prêt à vivre une expérience botanique à Conflans ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier. Nous vous répondons sous 24h avec un devis personnalisé.
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

export default AtelierBotaniqueConflans;
