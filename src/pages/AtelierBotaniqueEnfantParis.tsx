import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, BookOpen, Leaf, Sparkles, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierBotaniqueEnfantParis = () => {
  const faqQuestions = [
    { question: "Où se déroulent les ateliers enfants à Paris ?", answer: "Nous intervenons dans vos locaux dans tous les arrondissements : écoles, centres de loisirs, médiathèques, espaces associatifs, ou en extérieur dans les parcs et jardins parisiens." },
    { question: "Combien d'enfants peuvent participer ?", answer: "Nos ateliers accueillent de 8 à 30 enfants selon l'activité. Pour les groupes scolaires, nous pouvons intervenir par demi-classe ou classe entière." },
    { question: "Peut-on organiser un anniversaire botanique ?", answer: "Oui ! Nous proposons des formules anniversaire nature pour les enfants de 4 à 12 ans : terrarium, bombes à graines, herbier créatif. Une façon originale de fêter un anniversaire." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO
        title="Atelier Botanique Enfant Paris (75)"
        description="Ateliers botaniques pour enfants à Paris. Activités nature ludiques et pédagogiques : terrarium, teinture végétale, herbier. Écoles, centres de loisirs, anniversaires. Tous arrondissements."
        keywords="atelier botanique enfant paris, atelier nature enfant paris, activité plantes enfant paris, animation nature enfant paris 75, atelier scolaire nature paris"
        canonical="/atelier-botanique-enfant-paris"
        city="Paris"
      />
      <SchemaOrg type="Service" data={{ serviceType: "Atelier botanique enfant", name: "Atelier Botanique Enfant Paris", description: "Ateliers botaniques ludiques pour enfants à Paris." }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Sparkles className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques pour <span className="text-sage">Enfants</span> à Paris
              </h1>
              <p className="subtitle-italic text-lg mb-6">Ludiques · Pédagogiques · Dès 3 ans · Tous arrondissements</p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                À Paris, la nature est partout pour qui sait la regarder. Nos ateliers botaniques invitent les enfants
                à <strong>explorer, toucher, créer et comprendre le monde végétal</strong> à travers des activités ludiques
                et scientifiques adaptées à leur âge.
              </p>
            </div>

            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    Apprendre par l'expérience
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Nos ateliers ne sont pas de simples activités manuelles : chaque création est l'occasion de découvrir
                    un <strong>savoir botanique</strong>. Pourquoi les plantes ont-elles des couleurs ? Comment voyagent les graines ?
                    Les enfants repartent avec une création <strong>et</strong> des connaissances.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos ateliers par âge
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { level: "Maternelle (3-5 ans)", items: ["Bombes à graines", "Découverte sensorielle", "Plantation de graines"] },
                  { level: "CP-CE2 (6-8 ans)", items: ["Mini-terrarium", "Herbier créatif", "Semis et bouturage"] },
                  { level: "CM1-Collège (9-12 ans)", items: ["Teinture végétale", "Herbier scientifique", "Kokedama"] }
                ].map((g, i) => (
                  <div key={i} className="bg-[hsl(var(--yellow))]/15 p-6 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold text-charcoal mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{g.level}</h3>
                    <ul className="space-y-2">
                      {g.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-charcoal/70 text-sm">
                          <Leaf className="w-4 h-4 text-sage flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryTerrarium, title: "Terrarium enfant", desc: "Un écosystème à emporter" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "La magie des couleurs naturelles" },
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais" }
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

            <div className="bg-sand p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Infos pratiques</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Tout le matériel fourni", "Création à emporter", "8 à 30 enfants par atelier", "1h à 2h selon l'âge", "Tous arrondissements de Paris", "Devis gratuit sous 24h"].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
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
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Un atelier nature pour vos enfants à Paris ?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit sous 24h · Tous arrondissements · Dès 3 ans</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/animation-scolaire-nature" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Ateliers scolaires</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierBotaniqueEnfantParis;
