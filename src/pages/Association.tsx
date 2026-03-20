import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import AssociationSection from "@/components/AssociationSection";
import { Link } from "react-router-dom";
import { Users, BookOpen, Mic, TreePine, Camera, Heart } from "lucide-react";

const Association = () => {
  const missions = [
    {
      icon: TreePine,
      title: "Médiation scientifique",
      description: "Vulgariser les savoirs ethnobotaniques et anthropologiques à travers des ateliers, conférences et contenus pédagogiques accessibles à tous les publics.",
      color: "hsl(153 40% 30%)"
    },
    {
      icon: BookOpen,
      title: "Transmission culturelle",
      description: "Faire dialoguer les traditions botaniques du monde entier : savoirs ancestraux, usages populaires des plantes, techniques artisanales héritées.",
      color: "hsl(73 37% 44%)"
    },
    {
      icon: Users,
      title: "Lien social & intergénérationnel",
      description: "Créer des espaces de rencontre entre générations, cultures et milieux sociaux autour du vivant. En EHPAD, en école, en centre social ou en entreprise.",
      color: "hsl(13 76% 61%)"
    },
    {
      icon: Mic,
      title: "Conférences & débats",
      description: "Inviter chercheurs, artistes et praticiens à partager leurs regards sur les relations humains-plantes lors de soirées ouvertes au public.",
      color: "hsl(194 38% 24%)"
    },
    {
      icon: Camera,
      title: "Création artistique",
      description: "Développer des projets photographiques, éditoriaux et d'exposition autour du végétal, entre regard scientifique et approche esthétique.",
      color: "hsl(287 33% 36%)"
    },
    {
      icon: Heart,
      title: "Écologie & bien-être",
      description: "Sensibiliser aux enjeux de biodiversité et de reconnexion au vivant par la pratique manuelle, l'observation et l'immersion en nature.",
      color: "hsl(42 76% 66%)"
    },
  ];

  const valeurs = [
    {
      titre: "Rigueur scientifique",
      texte: "Chaque atelier et conférence s'appuie sur des sources vérifiées, des recherches de terrain et une méthodologie issue de l'anthropologie et de l'ethnobotanique."
    },
    {
      titre: "Accessibilité",
      texte: "Nos actions s'adressent à tous : enfants dès 4 ans, adultes, seniors, personnes en situation de handicap. Nous adaptons nos formats à chaque public."
    },
    {
      titre: "Interculturalité",
      texte: "Explorer les relations humains-plantes à travers le monde, sans hiérarchiser les savoirs. Du Japon à l'Afrique de l'Ouest, de la Martinique à l'Europe médiévale."
    },
    {
      titre: "Écologie du quotidien",
      texte: "Privilégier les matériaux locaux, de saison, récupérés. Nos ateliers génèrent peu de déchets et sensibilisent par la pratique plutôt que par le discours."
    },
  ];

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

      {/* Missions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="section-label mb-4">Nos missions</p>
            <h2 className="font-display text-3xl md:text-4xl">Ce que nous faisons</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <AnimatedSection key={mission.title} delay={index * 80}>
                  <div className="card-brutal p-8 bg-cream h-full">
                    <div className="w-12 h-12 border-brutal flex items-center justify-center mb-6" style={{ background: mission.color }}>
                      <Icon size={22} style={{ color: 'hsl(36 33% 93%)' }} />
                    </div>
                    <h3 className="font-display text-lg mb-3">{mission.title}</h3>
                    <p className="text-sm font-body leading-relaxed" style={{ color: 'hsl(0 0% 40%)' }}>
                      {mission.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6 border-t-2 border-foreground/10" style={{ background: 'hsl(0 0% 10%)' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="section-label mb-4">Nos valeurs</p>
            <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'hsl(36 33% 93%)' }}>
              Ce en quoi nous croyons
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {valeurs.map((valeur, index) => (
              <AnimatedSection key={valeur.titre} delay={index * 100}>
                <div className="flex gap-6 items-start">
                  <div className="font-mono text-sm font-bold flex-shrink-0 w-8 h-8 border-2 border-olive flex items-center justify-center" style={{ color: 'hsl(73 44% 67%)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2" style={{ color: 'hsl(73 44% 67%)' }}>{valeur.titre}</h3>
                    <p className="text-base font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {valeur.texte}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl mb-6">Envie de nous rejoindre ?</h2>
            <p className="text-lg font-body mb-8" style={{ color: 'hsl(0 0% 40%)' }}>
              Que vous soyez bénévole, partenaire institutionnel, entreprise ou simplement curieux·se : nous serions ravis d'échanger avec vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-brutal inline-block"
                style={{ background: 'hsl(73 37% 44%)', color: 'hsl(36 33% 93%)' }}
              >
                Nous contacter
              </Link>
              <Link
                to="/workshops"
                className="btn-brutal inline-block"
                style={{ background: 'hsl(36 33% 93%)', color: 'hsl(0 0% 10%)' }}
              >
                Voir les ateliers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Association;
