import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import AssociationSection from "@/components/AssociationSection";
import { Link } from "react-router-dom";

const Association = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="L'Association — Botanique Ludique"
        description="Botanique Ludique est une association loi 1901 de médiation culturelle et scientifique autour du vivant. Ateliers, conférences, balades botaniques. Le Pecq (78), Paris, Île-de-France."
        canonical="/association"
        keywords="association botanique, médiation scientifique, ethnobotanique, ateliers nature, Le Pecq, Paris, Île-de-France"
      />
      <SchemaOrg
        type="Organization"
        data={{
          "@type": "Organization",
          "name": "Botanique Ludique",
          "description": "Association loi 1901 de médiation culturelle et scientifique autour du vivant",
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 border-b-2 border-foreground/10" style={{ background: 'hsl(0 0% 10%)' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-6">L'association</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8" style={{ color: 'hsl(36 33% 93%)' }}>
              Médiation culturelle<br/>
              <span style={{ color: 'hsl(73 44% 67%)' }}>& scientifique</span><br/>
              autour du vivant
            </h1>
            <p className="text-lg md:text-xl font-body leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Botanique Ludique est une association loi 1901 fondée par Vanessa Charlery, animatrice ethnobotaniste formée à l'EHESS. 
              Basée au Pecq (78), elle intervient dans toute l'Île-de-France pour transmettre les savoirs sur les relations humains-plantes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission développée */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="section-label mb-4">Notre raison d'être</p>
            <h2 className="font-display text-3xl md:text-4xl mb-8">Mettre en lumière des savoirs méconnus</h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-6 text-base md:text-lg font-body leading-relaxed" style={{ color: 'hsl(0 0% 35%)' }}>
              <p className="text-justify">
                L'objectif principal de Botanique Ludique est de financer et organiser l'intervention de chercheurs, artistes et praticiens, parfois méconnus du grand public, afin de mettre en avant leurs savoirs et leurs disciplines. Ethnobotanistes, anthropologues, teinturiers, musiciens, artisans du végétal : autant de voix que nous souhaitons faire entendre.
              </p>
              <p className="text-justify">
                Pour cela, l'association organise des ateliers, des conférences, des événements culturels et artistiques ouverts à tous. Chaque rendez-vous est une occasion de croiser les regards entre sciences du vivant, sciences humaines et pratiques créatives, et de rendre ces savoirs accessibles au plus grand nombre.
              </p>
              <p className="text-justify">
                En soutenant ces intervenants, nous contribuons à la reconnaissance de disciplines souvent invisibilisées et à la transmission de connaissances précieuses sur les relations entre les humains et le monde végétal, d'ici et d'ailleurs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Association Section from homepage */}
      <AssociationSection />

      <Footer />
    </div>
  );
};

export default Association;
