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

const AtelierBotaniqueRueilMalmaison = () => {
  const workshops = [
    {
      title: "Atelier Kokedama",
      description: "Créez votre sphère végétale suspendue, inspirée par les jardins romantiques du château de Malmaison.",
      duration: "2h30",
      price: "45€",
      image: kokedamaImage
    },
    {
      title: "Teinture Végétale",
      description: "Explorez les pigments naturels et créez vos textiles colorés, hommage à la roseraie de Joséphine.",
      duration: "3h",
      price: "55€",
      image: dyeingImage
    },
    {
      title: "Atelier Terrarium",
      description: "Composez un jardin miniature sous verre avec des plantes évoquant la forêt de la Malmaison.",
      duration: "2h",
      price: "50€",
      image: terrariumImage
    },
    {
      title: "Vannerie Sauvage",
      description: "Initiez-vous au tressage avec des végétaux issus des bords de Seine à Rueil.",
      duration: "3h30",
      price: "60€",
      image: basketryImage
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Atelier Botanique Rueil-Malmaison | Kokedama, Terrarium ✦ 92"
        description="🌿 Ateliers botaniques à Rueil-Malmaison et Hauts-de-Seine ouest. Kokedama, terrarium, teinture végétale pour particuliers et entreprises. Réservez !"
        keywords="atelier botanique Rueil-Malmaison, kokedama Rueil, terrarium Hauts-de-Seine, team building Rueil-Malmaison, atelier nature 92, animation EHPAD Rueil"
        canonical="/atelier-botanique-rueil-malmaison"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Ateliers à Rueil-Malmaison",
          "description": "Ateliers botaniques créatifs à Rueil-Malmaison et dans les Hauts-de-Seine",
          "areaServed": {
            "@type": "City",
            "name": "Rueil-Malmaison",
            "containedIn": { "@type": "State", "name": "Hauts-de-Seine" }
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
                <span className="text-sage font-medium">Rueil-Malmaison & environs (92)</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Ateliers Botaniques à Rueil-Malmaison
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                L'héritage botanique de Joséphine à portée de main
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Rueil-Malmaison, ville imprégnée d'histoire botanique grâce au château de la Malmaison 
                et à la passion de Joséphine de Beauharnais pour les plantes, offre un cadre idéal 
                pour nos ateliers. Nous intervenons pour les particuliers, entreprises et collectivités 
                de Rueil, Garches, Vaucresson, La Celle-Saint-Cloud et Chatou.
              </p>
            </div>
      <LandingPhotoStrip />

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pourquoi choisir Rueil-Malmaison pour un atelier botanique ?
              </h2>
              <div className="bg-sand p-8 md:p-10 mb-8">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Rueil-Malmaison possède un <strong>patrimoine botanique unique</strong>. Le château de la Malmaison, 
                  résidence de Joséphine de Beauharnais, abritait l'une des plus belles collections de roses d'Europe. 
                  Cette tradition horticole inspire nos ateliers et donne un sens particulier à la création végétale dans cette ville.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Avec son <strong>tissu économique dense</strong> — sièges sociaux de grandes entreprises, PME dynamiques 
                  et commerces de proximité — Rueil-Malmaison est un territoire idéal pour nos interventions professionnelles : 
                  team building, séminaires RSE, journées QVCT et animations CSE.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  La ville offre également de nombreux <strong>espaces verts</strong> — parc de la Malmaison, 
                  bois de Saint-Cucufa, bords de Seine — qui nourrissent l'inspiration de nos ateliers 
                  et rappellent que la nature reste présente au cœur de l'urbanité.
                </p>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers disponibles à Rueil-Malmaison
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-brutal-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img src={workshop.image} alt={`${workshop.title} à Rueil-Malmaison`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{workshop.title}</h3>
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
                <Link to="/workshops" className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 ">
                  <Leaf className="w-4 h-4" /> Voir tous nos ateliers
                </Link>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nous intervenons dans tout le secteur de Rueil-Malmaison
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Rueil & environs</h3>
                  <p className="text-sm text-charcoal/70">Rueil-Malmaison, Garches, Vaucresson, Marnes-la-Coquette</p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Boucle de Seine</h3>
                  <p className="text-sm text-charcoal/70">Chatou, Le Vésinet, Croissy-sur-Seine, Le Pecq</p>
                </div>
                <div className="bg-[hsl(var(--yellow))]/15 p-6 text-center shadow-brutal border-brutal shadow-brutal">
                  <MapPin className="w-8 h-8 text-sage mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Hauts-de-Seine ouest</h3>
                  <p className="text-sm text-charcoal/70">Suresnes, Puteaux, Nanterre, La Celle-Saint-Cloud</p>
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <div className="bg-sand p-8 md:p-10">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl italic text-charcoal mb-6 leading-relaxed">
                    "Un atelier kokedama organisé pour notre CSE à Rueil. Les collaborateurs ont adoré 
                    cette parenthèse verte ! Vanessa est passionnée et pédagogue, un vrai régal."
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Frédéric M.</strong>, Membre CSE, Rueil-Malmaison
                  </footer>
                </blockquote>
              </div>
            </section>

            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  Prêt à vivre une expérience botanique à Rueil-Malmaison ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour organiser votre atelier. Nous vous répondons sous 24h avec un devis personnalisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-[3px] border-sage text-sage hover:bg-sage hover:text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 ">
                    <Mail className="w-4 h-4" /> Demander un devis gratuit
                  </Link>
                  <a href="tel:+33609831606" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-[3px] border-sage text-sage hover:bg-sage hover:text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 ">
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

export default AtelierBotaniqueRueilMalmaison;
