import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Leaf, GraduationCap, Heart, Building, Sprout, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AnimationBotaniqueIDF = () => {
  const publics = [
    { icon: Building, title: "Entreprises & CSE", description: "Animations botaniques pour le bien-être au travail : team building nature, ateliers RSE, semaine QVCT.", link: "/pro" },
    { icon: GraduationCap, title: "Écoles & centres de loisirs", description: "Animations botaniques pédagogiques : découverte des plantes, jardinage, biodiversité adaptée aux programmes scolaires.", link: "/animation-scolaire-nature" },
    { icon: Heart, title: "EHPAD & résidences seniors", description: "Animations botaniques douces et sensorielles pour les personnes âgées : jardinage thérapeutique, créations végétales.", link: "/animation-seniors-ehpad" },
    { icon: Users, title: "Collectivités & événements", description: "Animations botaniques pour fêtes de ville, marchés, festivals, MJC, centres sociaux et médiathèques.", link: "/animation-collectivites-mairies" },
  ];

  const departments = [
    { name: "Paris (75)", cities: ["Paris 1er–20e", "Parcs, jardins, salles municipales"], link: "/animation-botanique-paris" },
    { name: "Yvelines (78)", cities: ["Saint-Germain-en-Laye", "Versailles", "Chatou", "Le Vésinet", "Conflans"], link: "/animation-botanique-yvelines" },
    { name: "Hauts-de-Seine (92)", cities: ["Boulogne-Billancourt", "Nanterre", "Rueil-Malmaison", "Issy-les-Moulineaux"], link: "/animation-botanique-hauts-de-seine" },
    { name: "Val-d'Oise (95)", cities: ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Enghien-les-Bains"], link: "/animation-botanique-val-d-oise" },
  ];

  const faqQuestions = [
    { question: "Quels types d'animations botaniques proposez-vous ?", answer: "Nous proposons des ateliers kokedama, teinture végétale, terrarium, couronnes de fleurs, vannerie, herbiers, bombes de graines, sachets de senteurs et bien plus. Chaque animation est adaptée à votre public et votre contexte." },
    { question: "Les animations botaniques sont-elles adaptées aux enfants ?", answer: "Oui ! Nos animations sont conçues pour tous les âges, dès 3 ans. Pour les plus jeunes, nous privilégions des activités sensorielles et ludiques. Pour les plus grands, nous intégrons des notions scientifiques et culturelles." },
    { question: "Combien de participants par animation ?", answer: "Nos animations accueillent généralement de 8 à 25 participants, selon le format. Pour les grands événements (fêtes de ville, marchés), nous proposons des stands en continu." },
    { question: "Fournissez-vous tout le matériel ?", answer: "Oui, nous apportons l'intégralité du matériel nécessaire : plantes, substrats, outils, protections, contenants. Les participants repartent avec leur création." },
    { question: "Dans quelles villes intervenez-vous ?", answer: "Nous intervenons dans toute l'Île-de-France : Paris, Versailles, Saint-Germain-en-Laye, Chatou, Boulogne-Billancourt, Nanterre, Cergy, Pontoise et toutes les communes des départements 75, 78, 92 et 95." },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Animation Botanique en Île-de-France"
        description="Animations botaniques créatives en Île-de-France : kokedama, teinture végétale, terrarium, vannerie. Pour entreprises, écoles, EHPAD, collectivités. Paris, 78, 92, 95."
        keywords="animation botanique, animation botanique île-de-france, atelier botanique paris, animation plantes yvelines, animation végétale hauts-de-seine, atelier nature val-d-oise, animation botanique entreprise, animation botanique école"
        canonical="/animation-botanique-ile-de-france"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Animation botanique",
        name: "Animation Botanique - Botanique Ludique - Île-de-France",
        description: "Animations botaniques créatives pour tous publics en Île-de-France : kokedama, teinture végétale, terrarium et plus.",
        areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise"]
      }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Sprout className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Animation Botanique en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Ateliers créatifs · Nature & plantes · Tous publics · Paris, 78, 92, 95
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique propose des <strong>animations botaniques</strong> créatives et pédagogiques dans toute l'Île-de-France. 
                Kokedama, teinture végétale, terrarium, vannerie : nos ateliers permettent de <strong>reconnecter les participants au monde végétal</strong> 
                à travers le geste, la créativité et la découverte scientifique.
              </p>
            </div>

            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Des animations botaniques avec une approche ethnobotanique
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Nos animations ne sont pas de simples ateliers manuels : elles intègrent une <strong>dimension culturelle et scientifique</strong> 
                    qui enrichit l'expérience. Chaque plante utilisée est l'occasion de raconter une histoire — celle de ses usages à travers 
                    les cultures, de ses propriétés et de son rôle dans les écosystèmes.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Cette approche, portée par Vanessa Charlery, ethnobotaniste formée à l'EHESS, transforme chaque animation botanique 
                    en un <strong>moment d'apprentissage joyeux</strong> et de reconnexion au vivant.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Animations botaniques pour tous les publics
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {publics.map((p, i) => (
                  <Link to={p.link} key={i}>
                    <Card className="hover:shadow-brutal-lg transition-all h-full animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <p.icon className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{p.title}</h3>
                            <p className="text-charcoal/70 leading-relaxed">{p.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos animations botaniques phares
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { src: galleryKokedama, title: "Atelier Kokedama", desc: "Créez votre sphère végétale suspendue. Une animation zen et créative qui plaît à tous les publics." },
                  { src: galleryTeinture, title: "Teinture Végétale", desc: "Transformez les pigments des plantes en couleurs sur textile. Un atelier fascinant mêlant science et artisanat." },
                  { src: galleryTerrarium, title: "Atelier Terrarium", desc: "Composez un jardin miniature en bocal. Une animation ludique pour comprendre les écosystèmes." }
                ].map((atelier, i) => (
                  <Card key={i} className="hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-0">
                      <img src={atelier.src} alt={`Animation botanique - ${atelier.title}`} className="w-full h-48 object-cover " loading="lazy" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{atelier.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed text-sm">{atelier.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                <MapPin className="w-6 h-6 inline-block mr-2" />
                Animations botaniques en Île-de-France
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, i) => (
                  <Link to={dept.link} key={i} className="bg-[hsl(var(--yellow))]/15 p-5 hover:shadow-brutal-lg transition-all group border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold text-sage-dark mb-3 group-hover:text-sage">{dept.name}</h3>
                    <ul className="space-y-1">
                      {dept.cities.map((city, j) => (
                        <li key={j} className="text-sm text-charcoal/70">📍 {city}</li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Questions fréquentes</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 p-6 animate-fade-in border-brutal shadow-brutal" style={{ animationDelay: `${i * 50}ms` }}>
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Besoin d'une animation botanique en Île-de-France ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tout le matériel inclus · Tous publics</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Voir nos ateliers</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnimationBotaniqueIDF;
