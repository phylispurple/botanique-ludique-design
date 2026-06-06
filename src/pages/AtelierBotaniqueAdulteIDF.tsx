import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, BookOpen, Leaf, MapPin, Users, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierBotaniqueAdulteIDF = () => {
  const ateliers = [
    { title: "Kokedama", desc: "L'art végétal japonais — créez une sphère de mousse et de terre pour suspendre une plante." },
    { title: "Teinture végétale", desc: "Découvrez la chimie des couleurs naturelles en teignant des tissus avec des plantes tinctoriales." },
    { title: "Terrarium", desc: "Composez un écosystème miniature en bocal — un jardin autonome à emporter." },
    { title: "Vannerie sauvage", desc: "Apprenez à tresser des fibres végétales selon des techniques ancestrales." },
    { title: "Herbier contemporain", desc: "Collectez, identifiez et mettez en valeur les plantes dans un herbier artistique." },
    { title: "Cosmétique végétale", desc: "Fabriquez vos propres soins naturels à base de plantes et d'huiles essentielles." }
  ];

  const faqQuestions = [
    { question: "Quels ateliers botaniques proposez-vous pour les adultes ?", answer: "Kokedama, teinture végétale, terrarium, vannerie sauvage, herbier contemporain, cosmétique végétale. Chaque atelier mêle savoir-faire artisanal, science botanique et dimension ethnobotanique." },
    { question: "Faut-il avoir des connaissances en botanique ?", answer: "Aucune connaissance préalable n'est nécessaire ! Nos ateliers sont conçus pour être accessibles à tous, débutants comme passionnés. L'animatrice adapte le discours scientifique au niveau du groupe." },
    { question: "Dans quels départements d'Île-de-France intervenez-vous ?", answer: "Paris (75), Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95). Nous nous déplaçons dans vos locaux ou organisons des ateliers dans nos espaces partenaires." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Atelier Botanique Adulte Île-de-France"
        description="Ateliers botaniques pour adultes en Île-de-France. Kokedama, teinture végétale, terrarium, vannerie. Loisirs créatifs nature pour particuliers, entreprises, associations."
        keywords="atelier botanique adulte, atelier nature adulte ile de france, cours botanique adulte, atelier plantes adulte IDF, loisir créatif nature"
        canonical="/atelier-botanique-adulte-ile-de-france"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique adulte", name: "Atelier Botanique Adulte Île-de-France", description: "Ateliers botaniques créatifs et scientifiques pour adultes en Île-de-France." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Palette className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques pour <span className="text-sage">Adultes</span> en Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">Créatifs · Scientifiques · Ethnobotaniques · Tous niveaux</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Redécouvrez le monde végétal à travers des <strong>ateliers créatifs et scientifiques</strong>.
                Kokedama, teinture végétale, terrarium, vannerie… chaque atelier est une invitation à explorer les
                <strong> savoirs ancestraux liés aux plantes</strong> dans une ambiance conviviale et bienveillante.
              </p>
            </div>
      <LandingPhotoStrip />

            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    L'ethnobotanique, un voyage entre science et culture
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Nos ateliers ne sont pas de simples activités manuelles : chaque geste artisanal s'accompagne d'un
                    <strong> éclairage ethnobotanique</strong>. D'où vient la teinture à l'indigo ? Pourquoi les Japonais créent-ils
                    des kokedamas ? Comment les sociétés traditionnelles utilisaient-elles la vannerie ?
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Cette dimension culturelle et scientifique, portée par une <strong>animatrice ethnobotaniste formée à l'EHESS</strong>,
                    transforme chaque atelier en une expérience riche et mémorable.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers pour adultes
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ateliers.map((a, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 p-6 hover:shadow-brutal-lg transition-all animate-fade-in border-brutal shadow-brutal" style={{ animationDelay: `${i * 80}ms` }}>
                    <h3 className="text-lg font-semibold text-charcoal mb-3" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{a.title}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais — créativité et zen" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Couleurs ancestrales, techniques vivantes" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Un jardin miniature à emporter" }
              ].map((a, i) => (
                <div key={i} className="overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-shadow">
                  <img src={a.src} alt={a.title} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos zones d'intervention
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Paris (75)", link: "/atelier-botanique-adulte-paris" },
                  { name: "Yvelines (78)", link: "/atelier-botanique-adulte-yvelines" },
                  { name: "Hauts-de-Seine (92)", link: "/atelier-botanique-adulte-hauts-de-seine" },
                  { name: "Val-d'Oise (95)", link: "/atelier-botanique-adulte-val-d-oise" }
                ].map((zone, i) => (
                  <Link to={zone.link} key={i} className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center hover:bg-sage hover:text-[hsl(var(--cream))] transition-all shadow-brutal group border-brutal shadow-brutal">
                    <span className="block text-sage-dark font-semibold group-hover:text-[hsl(var(--cream))]"><MapPin className="w-4 h-4 inline mr-1" />{zone.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-sand p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Pour qui ?</h2>
                <ul className="space-y-3">
                  {["Particuliers en quête de loisirs créatifs", "Entreprises (team building, séminaire)", "MJC et centres culturels", "Associations et clubs", "EHPAD et résidences seniors", "Événements privés (EVJF, anniversaires)"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sand p-8">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Infos pratiques</h2>
                <ul className="space-y-3">
                  {["Tout le matériel est fourni", "Création à emporter", "Groupes de 6 à 20 personnes", "Durée : 1h30 à 3h", "Aucun prérequis", "Devis gratuit sous 24h"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Questions fréquentes</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 p-6 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{faq.question}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Un atelier botanique pour adultes ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Paris, 78, 92, 95 · Tous niveaux</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/workshops" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Découvrir nos ateliers</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierBotaniqueAdulteIDF;
