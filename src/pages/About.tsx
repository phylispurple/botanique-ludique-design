import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Heart, Globe, Users, Sprout, Camera, BookOpen, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/portrait-vanessa.webp";

const About = () => {
  const timeline = [
  {
    year: "2014",
    title: "Photographe botanique",
    description: "Début de l'aventure artistique. Le végétal devient sujet, médium et obsession photographique.",
    icon: Camera
  },
  {
    year: "2016",
    title: "Kosovo · Gaia Kosovo",
    description: "Service Volontaire Européen. Permaculture, écoconstruction, autonomie. Certification Youthpath.",
    icon: Globe,
    link: { url: "https://www.gaiakosovo.org", label: "gaiakosovo.org" }
  },
  {
    year: "2018",
    title: "Japon · Techniques ancestrales",
    description: "Apprentissage du jardinage japonais et de l'aquaponie. Découverte du kokedama et des arts botaniques nippons.",
    icon: Sprout
  },
  {
    year: "2019",
    title: "EHESS · Anthropologie & Ethnobotanique",
    description: "Master 1 sous la direction de Florence Brunois-Pasina. Recherche sur les interactions citadins-plantes dans le Grand Paris.",
    icon: BookOpen
  },
  {
    year: "2024",
    title: "Ateliers en indépendante",
    description: "Lancement des premiers ateliers d'ethnobotanique en tant qu'indépendante. Entreprises, EHPAD, écoles, centres sociaux : les publics se diversifient.",
    icon: Users
  },
  {
    year: "2026",
    title: "Botanique Ludique",
    description: "Création de l'association loi 1901 pour mettre en avant artistes et chercheurs et rendre ces savoirs accessibles au plus grand nombre.",
    icon: Heart
  },
  {
    year: "Auj.",
    title: "+400 participants · 50+ ateliers",
    description: "Île-de-France : départements 75, 78, 92 et 95. Ateliers, conférences et balades botaniques pour tous les publics.",
    icon: Sprout
  }];


  const values = [
  {
    title: "Transmission",
    text: "Chaque atelier porte en lui une histoire. Je ne transmets pas une technique vide de sens — je partage le contexte culturel, l'origine, le pourquoi derrière chaque geste.",
    accent: "hsl(var(--olive))"
  },
  {
    title: "Accessibilité",
    text: "Du senior en EHPAD à l'enfant de 4 ans, de l'entreprise au centre social. La botanique n'a pas de public cible, elle est pour tout le monde.",
    accent: "hsl(var(--orange))"
  },
  {
    title: "Reconnexion au vivant",
    text: "Nous avons perdu les gestes et les mots qui nous reliaient aux plantes. Mes ateliers sont une invitation à réactiver cette sensibilité, à toucher la mousse, sentir la garance, observer une feuille.",
    accent: "hsl(var(--green))"
  },
  {
    title: "Éthique & sens",
    text: "Ce n'est pas du folklore. Comprendre que la teinture végétale était un acte sacré, que le tressage accompagnait les rites de passage — c'est ça qui donne sa profondeur à l'expérience.",
    accent: "hsl(var(--blue))"
  }];


  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Vanessa Charlery, Animatrice Ethnobotaniste | À Propos ✦ Ma Démarche"
        description="🌿 Découvrez Vanessa Charlery, animatrice ethnobotaniste formée à l'EHESS. Reconnecter l'humain au végétal par des ateliers créatifs uniques. Approche anthropologique et sensorielle."
        keywords="Vanessa Charlery, animatrice ethnobotaniste, EHESS, photographe botanique, éducation environnement, ethnobotanique, philosophie nature, reconnexion vivant"
        canonical="/about" />
      
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
              {/* Portrait */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-6">
                  <div className="absolute inset-0 border-brutal translate-x-2 translate-y-2" />
                  <img
                    src={aboutImage}
                    loading="lazy"
                    alt="Vanessa Charlery, animatrice ethnobotaniste et fondatrice de Botanique Ludique"
                    className="w-56 h-56 md:w-64 md:h-64 object-cover border-brutal relative z-10" />
                  
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive))]">
                  Présidente & Fondatrice · Animatrice ethnobotaniste
                </span>
              </div>

              {/* Intro text */}
              <div>
                <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-[-2px] mb-6 text-[hsl(var(--black))]">
                  Vanessa<br />Charlery
                </h1>
                <p className="text-lg leading-[1.8] text-[hsl(var(--black))]/70 mb-4 max-w-xl">
                  Formée en anthropologie à l'EHESS avec une spécialisation en ethnobotanique, 
                  artiste photographe depuis 2014, j'ai créé Botanique Ludique pour transmettre 
                  autrement les savoirs qui lient l'humain au végétal.
                </p>
                <p className="text-lg leading-[1.8] text-[hsl(var(--black))]/70 max-w-xl">Ma recherche, menée sous la direction de Florence Brunois-Pasina, explore les interactions entre les citadins et les plantes dans les espaces verts urbains du Grand Paris et comment nous percevons, nommons et interagissons avec le monde végétal.



                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-20 px-6 bg-[hsl(var(--cream-dark))] border-y-[3px] border-[hsl(var(--black))]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))]">Parcours</span>
            

            
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-[hsl(var(--black))]/10 -translate-x-1/2" />

            {timeline.map((item, i) => {
              const IconComponent = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection
                  key={i}
                  delay={i * 100}
                  direction={isLeft ? "left" : "right"}
                  className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`
                  }>
                  
                  {/* Dot on timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 border-brutal bg-[hsl(var(--cream))] flex items-center justify-center z-10">
                    <IconComponent className="w-5 h-5 text-[hsl(var(--olive))]" />
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <span className="font-display text-2xl text-[hsl(var(--olive))]">{item.year}</span>
                    <h3 className="font-display text-base uppercase tracking-[-0.5px] mt-1 mb-2 text-[hsl(var(--black))]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[hsl(var(--black))]/60">
                      {item.description}
                    </p>
                    {item.link &&
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 font-mono text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive))] hover:text-[hsl(var(--black))] transition-colors underline">
                      
                        {item.link.label}
                      </a>
                    }
                  </div>
                </AnimatedSection>);

            })}
          </div>
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))]">Nos valeurs</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Ce en quoi nous croyons
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-0">
            {values.map((value, i) =>
            <AnimatedSection key={i} delay={i * 100}>
                <div className="p-10 border-brutal -mt-[3px] -ml-[3px] hover:bg-[hsl(var(--green-pale))] transition-colors duration-300 h-full">
                  <div
                  className="w-1 h-8 mb-4"
                  style={{ backgroundColor: value.accent }} />
                
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-3 text-[hsl(var(--black))]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-[hsl(var(--black))]/60">
                    {value.text}
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* ===== MA DÉMARCHE ===== */}
      <section className="py-20 px-6 bg-[hsl(var(--black))] text-[hsl(var(--cream))]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))]">Philosophie</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mt-2 text-[hsl(var(--cream))]">
              Ma Démarche
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-lg leading-[1.9] text-[hsl(var(--cream))]/80 mb-8">
              Ce que je propose n'est pas du folklore. Ce n'est pas une activité vide de sens 
              où l'on fabrique un objet joli pour l'oublier le lendemain. <strong className="text-[hsl(var(--cream))]">C'est une 
              invitation à comprendre d'où viennent ces pratiques</strong>, à saisir leur profondeur 
              historique et culturelle, et à travers cette compréhension, à développer notre 
              propre sensibilité au vivant.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg leading-[1.9] text-[hsl(var(--cream))]/80 mb-8">
              Quand on comprend que la teinture végétale était un acte sacré dans certaines sociétés, 
              que le tressage de l'osier accompagnait les rites de passage, ou que le jardin japonais 
              incarne une philosophie du vide et de l'impermanence, alors le geste créatif prend une 
              tout autre dimension. <strong className="text-[hsl(var(--cream))]">On ne fait plus "juste" un atelier : 
              on s'inscrit dans une lignée de pratiques millénaires.</strong>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg leading-[1.9] text-[hsl(var(--cream))]/80 mb-12">
              Ce qui m'intéresse, c'est ce qui se passe <em>pendant</em> l'atelier : le moment où 
              les mains touchent la mousse, où l'on sent l'odeur de la garance qui chauffe, où l'on 
              observe les nervures d'une feuille avec un regard neuf. Ces moments de présence et 
              d'attention au vivant sont précieux — ils nous sortent de notre rapport utilitariste 
              au monde. C'est là que quelque chose se transforme.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 px-6 border-t-[3px] border-[hsl(var(--black))]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[-1px] mb-6">
              Envie de participer ?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/workshops"
                className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--olive))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-xs px-7 py-3 inline-flex items-center gap-2">
                
                Voir les ateliers <ArrowRight size={14} />
              </Link>
              <Link
                to="/association"
                className="btn-brutal bg-transparent text-[hsl(var(--black))] border-[hsl(var(--black))] hover:bg-[hsl(var(--black))] hover:text-[hsl(var(--cream))] text-xs px-7 py-3 inline-flex items-center gap-2">
                
                L'association <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>);

};

export default About;