import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, CheckCircle, BookOpen, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AnimatriceNatureHautsDeSeine = () => {
  const cities = [
    { name: "Boulogne-Billancourt", detail: "Plus grande ville du 92", link: "/atelier-botanique-boulogne-billancourt" },
    { name: "Nanterre", detail: "Préfecture & université", link: "/atelier-botanique-nanterre" },
    { name: "Rueil-Malmaison", detail: "Parc de la Malmaison", link: "/atelier-botanique-rueil-malmaison" },
    { name: "Issy-les-Moulineaux", detail: "Dynamisme économique", link: "/contact" },
    { name: "Levallois-Perret", detail: "Densité urbaine & nature", link: "/contact" },
    { name: "Neuilly-sur-Seine", detail: "Bois de Boulogne", link: "/contact" },
    { name: "Colombes", detail: "Coulée verte", link: "/contact" },
    { name: "Courbevoie", detail: "La Défense & nature", link: "/contact" }
  ];

  const faqQuestions = [
    { question: "Intervenez-vous en entreprise dans les Hauts-de-Seine ?", answer: "Oui, nous intervenons régulièrement dans les entreprises du 92 — La Défense, Boulogne-Billancourt, Issy-les-Moulineaux, Rueil-Malmaison. Team building botanique, semaine QVCT, animation RSE : nous nous déplaçons dans vos locaux avec tout le matériel." },
    { question: "Quels ateliers proposez-vous aux écoles des Hauts-de-Seine ?", answer: "Nous proposons des ateliers adaptés de la maternelle au collège : teinture végétale, mini-terrariums, reconnaissance de plantes, biodiversité urbaine. Chaque atelier est conçu avec une dimension ethnobotanique pour éveiller la curiosité scientifique et culturelle des élèves." },
    { question: "Quel est le tarif d'une animation nature dans le 92 ?", answer: "Les tarifs dépendent du format (1h à une journée), du nombre de participants et du type de public. Nous proposons des tarifs adaptés aux collectivités et aux établissements publics. Devis gratuit sous 24h." }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Animatrice Nature Hauts-de-Seine (92)"
        description="Animatrice nature et botanique dans les Hauts-de-Seine (92). Ateliers pour entreprises, écoles, EHPAD à Boulogne-Billancourt, Nanterre, Rueil-Malmaison, Issy-les-Moulineaux."
        keywords="animatrice nature hauts-de-seine, animatrice botanique 92, animation plantes boulogne-billancourt, atelier nature nanterre, animatrice scientifique 92, ethnobotaniste hauts-de-seine"
        canonical="/animatrice-nature-hauts-de-seine"
        region="FR-IDF"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Animation nature et botanique",
        name: "Animatrice Nature Hauts-de-Seine (92)",
        description: "Animations botaniques dans les Hauts-de-Seine par une animatrice ethnobotaniste formée à l'EHESS."
      }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Leaf className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Animatrice Nature dans les Hauts-de-Seine (92)
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Animatrice ethnobotaniste · De Boulogne-Billancourt à Nanterre · Tous publics
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Les Hauts-de-Seine, département le plus dense après Paris, ont un <strong>besoin croissant de reconnexion à la nature</strong>. 
                Botanique Ludique propose des animations botaniques qui allient <strong>rigueur scientifique et approche ethnobotanique</strong>, 
                pour les entreprises de La Défense comme pour les écoles de Colombes ou les EHPAD de Rueil-Malmaison.
              </p>
            </div>

            {/* Approche */}
            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    La nature au cœur du 92
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Malgré son urbanisation, le 92 recèle de <strong>trésors botaniques</strong> : le parc de la Malmaison (dont les collections 
                    sont liées à l'histoire coloniale de Joséphine de Beauharnais), les bois de Boulogne et de Meudon, les jardins Albert-Kahn. 
                    Nos ateliers s'inscrivent dans cette géographie en explorant les <strong>plantes qui ont façonné l'histoire locale</strong>.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    L'approche ethnobotanique permet de transformer un simple atelier nature en une <strong>expérience de compréhension du monde</strong> : 
                    pourquoi cette plante est-elle arrivée en France ? Quels peuples l'utilisaient ? Comment la cultivait-on jadis ?
                  </p>
                </div>
              </div>
            </div>

            {/* Ateliers */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { src: galleryKokedama, title: "Kokedama", desc: "Art végétal japonais en entreprise ou en association" },
                { src: galleryTeinture, title: "Teinture végétale", desc: "Couleurs naturelles et savoirs traditionnels" },
                { src: galleryTerrarium, title: "Terrarium", desc: "Mini-écosystèmes pour petits et grands" }
              ].map((a, i) => (
                <div key={i} className="overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-shadow">
                  <img src={a.src} alt={`${a.title} Hauts-de-Seine`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-[hsl(var(--yellow))]/15 border-brutal shadow-brutal">
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>{a.title}</h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Villes */}
            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos interventions dans les Hauts-de-Seine
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city, i) => (
                  <Link to={city.link} key={i} className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center hover:bg-sage hover:text-[hsl(var(--cream))] transition-all shadow-brutal group border-brutal shadow-brutal">
                    <span className="block text-sage-dark font-semibold group-hover:text-[hsl(var(--cream))]">📍 {city.name}</span>
                    <span className="text-xs text-charcoal/60 group-hover:text-[hsl(var(--cream))]/80">{city.detail}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-sand p-8 mb-16">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>Pourquoi nous choisir dans le 92 ?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Formée à l'EHESS en ethnobotanique",
                  "Déplacement dans tout le 92",
                  "Matériel fourni, installation rapide",
                  "Ateliers adaptés entreprises & collectivités",
                  "Approche scientifique et culturelle",
                  "Devis gratuit sous 24h"
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
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

            {/* CTA */}
            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Animatrice nature dans le 92 — contactez-nous
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">Devis gratuit · Tout le département · Entreprises, écoles, collectivités</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Demander un devis</Link>
                <Link to="/pro" className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-charcoal text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all ">Offres professionnelles</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnimatriceNatureHautsDeSeine;
