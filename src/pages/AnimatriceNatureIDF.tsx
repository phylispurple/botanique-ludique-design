import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Leaf, GraduationCap, Heart, Building, CheckCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AnimatriceNatureIDF = () => {
  const publics = [
    {
      icon: Building,
      title: "Entreprises & CSE",
      description: "Team building RSE, semaine QVCT, animations nature pour renforcer la cohésion d'équipe et sensibiliser à l'environnement.",
      link: "/pro"
    },
    {
      icon: GraduationCap,
      title: "Écoles & centres de loisirs",
      description: "Ateliers pédagogiques adaptés aux programmes scolaires : cycle de l'eau, biodiversité, botanique appliquée, teinture végétale.",
      link: "/animation-scolaire-nature"
    },
    {
      icon: Heart,
      title: "EHPAD & résidences seniors",
      description: "Animations douces et sensorielles adaptées aux personnes âgées : jardinage thérapeutique, reconnaissance de plantes, créations végétales.",
      link: "/animation-seniors-ehpad"
    },
    {
      icon: Users,
      title: "Collectivités & associations",
      description: "MJC, centres sociaux, médiathèques, mairies : animations nature ouvertes à tous les publics, toute l'année.",
      link: "/animation-collectivites-mairies"
    }
  ];

  const departments = [
    { name: "Paris (75)", cities: ["Paris 1er–20e"], link: "/animatrice-nature-paris" },
    { name: "Yvelines (78)", cities: ["Saint-Germain-en-Laye", "Versailles", "Chatou", "Le Vésinet", "Le Pecq", "Conflans-Sainte-Honorine"], link: "/animatrice-botanique-yvelines" },
    { name: "Hauts-de-Seine (92)", cities: ["Boulogne-Billancourt", "Nanterre", "Rueil-Malmaison", "Issy-les-Moulineaux", "Levallois-Perret"], link: "/animatrice-nature-hauts-de-seine" },
    { name: "Val-d'Oise (95)", cities: ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Enghien-les-Bains"], link: "/animatrice-botanique-val-d-oise" }
  ];

  const faqQuestions = [
    { question: "Qu'est-ce qu'une animatrice nature ethnobotaniste ?", answer: "Une animatrice nature ethnobotaniste combine les connaissances scientifiques sur les plantes avec une approche anthropologique et culturelle. Vanessa Charlery, formée à l'EHESS, explore les relations entre les sociétés humaines et le monde végétal pour proposer des ateliers qui vont au-delà de la simple botanique." },
    { question: "Quels types d'ateliers propose une animatrice botanique ?", answer: "Nos ateliers couvrent la création de kokedamas, la teinture végétale, les terrariums, la vannerie sauvage, les sachets de senteurs, la reconnaissance de plantes et bien plus. Chaque atelier est adapté au public et au contexte (entreprise, école, EHPAD, événement)." },
    { question: "Dans quels départements intervenez-vous ?", answer: "Nous intervenons dans toute l'Île-de-France, principalement à Paris (75), dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95). Nous nous déplaçons dans vos locaux ou organisons les ateliers dans nos espaces partenaires." },
    { question: "Quelle est la différence entre animatrice nature et animatrice scientifique ?", answer: "L'animatrice nature se concentre sur la connexion sensorielle avec l'environnement. L'animatrice scientifique apporte une rigueur académique. Chez Botanique Ludique, nous combinons les deux approches grâce à notre formation en ethnobotanique et anthropologie de la nature." },
    { question: "Combien coûte une intervention d'animatrice botanique ?", answer: "Les tarifs varient selon le format (atelier ponctuel, cycle, événement), le nombre de participants et le lieu. Contactez-nous pour un devis personnalisé gratuit avec réponse sous 24h." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Animatrice Nature & Botanique en Île-de-France"
        description="Animatrice nature et ethnobotaniste en Île-de-France. Ateliers botaniques pour entreprises, écoles, EHPAD et collectivités à Paris, Yvelines (78), Hauts-de-Seine (92), Val-d'Oise (95)."
        keywords="animatrice nature, animatrice botanique, animatrice scientifique plantes, ethnobotaniste, animation nature île-de-france, atelier botanique paris, animatrice nature yvelines, animation plantes entreprise"
        canonical="/animatrice-nature-ile-de-france"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Animation nature et botanique",
        name: "Animatrice Nature Ethnobotaniste - Île-de-France",
        description: "Animations nature et ateliers botaniques pour tous publics en Île-de-France par une animatrice ethnobotaniste formée à l'EHESS.",
        areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise"]
      }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Animatrice Nature & Botanique en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Animatrice ethnobotaniste · Ateliers pour tous les publics · Paris, 78, 92, 95
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Vanessa Charlery, ethnobotaniste formée à l'EHESS (École des Hautes Études en Sciences Sociales), 
                propose des <strong>animations nature et ateliers botaniques</strong> qui explorent les liens profonds entre 
                les sociétés humaines et le monde végétal. Une approche unique mêlant <strong>science, culture et créativité</strong> 
                pour reconnecter chaque public à la nature.
              </p>
            </div>
      <LandingPhotoStrip />

            {/* Approche ethnobotanique */}
            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Une approche ethnobotanique unique
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Contrairement à une animation nature classique, notre démarche s'appuie sur l'<strong>ethnobotanique</strong> — 
                    la science qui étudie les relations entre les plantes et les cultures humaines. Chaque atelier est l'occasion 
                    de découvrir non seulement les propriétés des plantes, mais aussi leur <strong>histoire culturelle</strong>, 
                    leurs usages traditionnels à travers le monde et leur place dans nos sociétés contemporaines.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Cette approche anthropologique, nourrie par un travail de recherche à l'EHESS sous la direction de 
                    Florence Brunois-Pasina, permet de développer chez les participants une <strong>sensibilité nouvelle</strong> 
                    au monde végétal, bien au-delà du simple loisir créatif.
                  </p>
                </div>
              </div>
            </div>

            {/* Publics */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Animatrice nature pour tous les publics
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {publics.map((p, i) => (
                  <Link to={p.link} key={i}>
                    <Card className="hover:shadow-brutal-lg transition-all h-full animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <p.icon className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                              {p.title}
                            </h3>
                            <p className="text-charcoal/70 leading-relaxed">{p.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ateliers phares */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers botaniques phares
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { src: galleryKokedama, title: "Kokedama", desc: "L'art japonais des sphères végétales suspendues. Un atelier méditatif qui explore les techniques ancestrales du jardinage nippon." },
                  { src: galleryTeinture, title: "Teinture végétale", desc: "Découvrez comment les civilisations ont utilisé les plantes pour teindre les textiles. Indigo, garance, réséda : des savoirs millénaires." },
                  { src: galleryTerrarium, title: "Terrarium", desc: "Créez un écosystème miniature en bocal. L'occasion de comprendre les cycles naturels et la biodiversité à petite échelle." }
                ].map((atelier, i) => (
                  <Card key={i} className="hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-0">
                      <img src={atelier.src} alt={`Atelier ${atelier.title}`} className="w-full h-48 object-cover " loading="lazy" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                          {atelier.title}
                        </h3>
                        <p className="text-charcoal/70 leading-relaxed text-sm">{atelier.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Zones d'intervention */}
            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                <MapPin className="w-6 h-6 inline-block mr-2" />
                Zones d'intervention en Île-de-France
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

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Questions fréquentes
              </h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 p-6 animate-fade-in border-brutal shadow-brutal" style={{ animationDelay: `${i * 50}ms` }}>
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                      {faq.question}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Besoin d'une animatrice nature en Île-de-France ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Devis gratuit sous 24h · Interventions sur mesure · Tous publics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">
                  Demander un devis
                </Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">
                  Voir nos ateliers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnimatriceNatureIDF;
