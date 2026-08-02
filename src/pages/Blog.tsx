import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import blogCarouselBocal from "@/assets/blog-carousel-bocal-indigo.jpg";
import blogCarouselFil from "@/assets/blog-carousel-fil-indigo.jpg";
import blogMonsteraTendance from "@/assets/blog-monstera-tendance.jpg";
import blogMonsteraDeco from "@/assets/blog-monstera-deco-interieur.jpg";
import blogPalmiersAvenue from "@/assets/blog-palmiers-avenue-coloniale.jpg";
import blogPalmiersAlger from "@/assets/blog-palmiers-jardin-hamma-alger.jpg";
import blogTerrariumModerne from "@/assets/blog-terrarium-moderne.jpg";
import blogTerrariumWardian from "@/assets/blog-terrarium-wardian-case.jpg";
import blogFilmsPoster from "@/assets/blog-films-nature-poster.jpg";
import blogBotaniqueCollege from "@/assets/blog-botanique-college.jpg";
import blogPlantesSauvages from "@/assets/blog-plantes-sauvages.jpg";
import blogMediationScientifique from "@/assets/blog-mediation-scientifique.jpg";
import blogDuBreuilAffiche from "@/assets/du-breuil-en-fete-2026-affiche.png";
import blogVoisinsAffiche from "@/assets/au-fil-jardins-voisins-affiche.jpeg";

const blogPosts = [
  {
    slug: "balade-botanique-voisins-le-bretonneux",
    title: "Au fil des jardins de Voisins : une lecture anthropologique du paysage de SQY",
    excerpt: "Retour ethnobotanique sur la balade du 7 juin 2026 à Voisins-le-Bretonneux. Croix du Bois, distillerie Decauville, Versailles du peuple de Bofill, écoquartier.",
    images: [blogVoisinsAffiche],
    date: "2026-06-09",
    category: "Retour d'expérience"
  },
  {
    slug: "balade-botanique-ecole-du-breuil",
    title: "Plantes voyageuses, histoires oubliées : balade botanique à l'École Du Breuil",
    excerpt: "Retour sur la balade ethnobotanique animée lors de Du Breuil en fête 2026, au cœur du Bois de Vincennes. Jardins de simples, plantes voyageuses et Wardian Cases.",
    images: [blogDuBreuilAffiche],
    date: "2026-06-06",
    category: "Retour d'expérience"
  },
  {
    slug: "10-films-nature-idees-fausses",
    title: "Les 10 Films qui Nous Ont Raconté N'importe Quoi à Propos de la « Nature »",
    excerpt: "D'Avatar à Jurassic Park, analyse ethnobotanique de 10 films cultes qui véhiculent des idées fausses sur le vivant.",
    images: [blogFilmsPoster],
    date: "2026-02-06",
    category: "Ethnobotanique"
  },
  {
    slug: "terrarium-biopiraterie-histoire-coloniale",
    title: "Le Terrarium, une Arme de Biopiraterie à l'Ère Coloniale Victorienne",
    excerpt: "Du Wardian Case victorien au vol de 70 000 graines d'hévéa : comment un simple bocal en verre est devenu l'outil de la plus grande opération de biopiraterie.",
    images: [blogTerrariumModerne, blogTerrariumWardian],
    date: "2026-02-06",
    category: "Ethnobotanique"
  },
  {
    slug: "palmiers-architecture-haussmannienne-colonialisme",
    title: "Palmiers et Architecture Haussmannienne : Quand les Boulevards Racontent l'Empire Colonial",
    excerpt: "Comment les grands boulevards haussmanniens ont été exportés dans les colonies avec un twist botanique : les palmiers comme logo de l'empire.",
    images: [blogPalmiersAvenue, blogPalmiersAlger],
    date: "2026-01-17",
    category: "Ethnobotanique"
  },
  {
    slug: "monstera-plante-coloniale-distinction-sociale",
    title: "La Monstera : Une Plante Déplacée. Histoire Coloniale et Distinction Sociale",
    excerpt: "Comment la Monstera est passée des forêts mexicaines aux salons bourgeois via l'histoire coloniale du XIXe siècle.",
    images: [blogMonsteraTendance, blogMonsteraDeco],
    date: "2026-01-09",
    category: "Ethnobotanique"
  },
  {
    slug: "teinture-vegetale-chou-rouge-indigo-naturel",
    title: "Teinture Végétale au Chou Rouge : Guide Complet pour Obtenir un Indigo Naturel",
    excerpt: "Créer une teinture indigo naturelle à partir de chou rouge fermenté. Tutoriel étape par étape avec techniques de fixation.",
    images: [blogCarouselBocal, blogCarouselFil],
    date: "2025-12-12",
    category: "Tutoriels"
  },
  {
    slug: "botanique-projet-pedagogique-college",
    title: "Comment intégrer la botanique dans un projet pédagogique de collège",
    excerpt: "Guide pratique pour enseignants : formats d'intervention, liens avec les programmes SVT et EMC, exemples concrets en Île-de-France.",
    images: [blogBotaniqueCollege],
    date: "2026-03-20",
    category: "Ressources pédagogiques"
  },
  {
    slug: "plantes-sauvages-sortie-scolaire-ile-de-france",
    title: "5 plantes sauvages à identifier lors d'une sortie scolaire en Île-de-France",
    excerpt: "Plantain, ortie, lierre terrestre, pissenlit, pâquerette : cinq espèces communes avec anecdotes ethnobotaniques pour enrichir vos sorties nature.",
    images: [blogPlantesSauvages],
    date: "2026-03-18",
    category: "Ressources pédagogiques"
  },
  {
    slug: "mediation-scientifique-definition-exemples",
    title: "Qu'est-ce que la médiation scientifique ? Définition et exemples",
    excerpt: "Définition, objectifs et exemples concrets de médiation scientifique en botanique. Conférences, ateliers, balades guidées.",
    images: [blogMediationScientifique],
    date: "2026-03-15",
    category: "Ressources pédagogiques"
  },
  {
    slug: "financer-animation-nature-ccas",
    title: "Comment financer une animation nature en CCAS, guide 2026",
    excerpt: "Lignes budgétaires, Conférence des financeurs, ARS, mutuelles, mécénat : panorama des dispositifs pour les CCAS.",
    images: [blogMediationScientifique],
    date: "2026-04-10",
    category: "Ressources collectivités"
  },
  {
    slug: "organiser-fete-nature-mairie",
    title: "Organiser la Fête de la Nature dans votre commune",
    excerpt: "Calendrier, formats, lieux, communication, budget : guide pratique pour une programmation municipale réussie.",
    images: [blogMediationScientifique],
    date: "2026-04-08",
    category: "Ressources collectivités"
  },
  {
    slug: "journees-patrimoine-animations-vegetales",
    title: "Journées du Patrimoine, idées d'animations végétales",
    excerpt: "Cinq idées de médiation patrimoniale autour du végétal pour les JEP, du parc historique à l'atelier herbier.",
    images: [blogMediationScientifique],
    date: "2026-04-05",
    category: "Ressources collectivités"
  },
  {
    slug: "semaine-developpement-durable-mairie",
    title: "Semaine du Développement Durable, 5 ateliers nature en mairie",
    excerpt: "Bombes à graines, teinture végétale, kokedama, terrarium, conférence : cinq formats clé en main pour la SEDD.",
    images: [blogMediationScientifique],
    date: "2026-04-03",
    category: "Ressources collectivités"
  }
];

const Blog = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO 
        title="Blog ethnobotanique, plantes et médiation culturelle"
        description="Lisez notre blog ethnobotanique, histoires culturelles des plantes, ressources pédagogiques, tutoriels botaniques et analyses autour du vivant en Île-de-France."
        keywords="blog botanique, actualités nature, guide kokedama, teinture végétale, team building nature, ateliers botaniques Paris"
        canonical="/blog"
      />
      <Navigation />

      <main className="pt-28 pb-24">
        {/* Hero */}
        <div className="px-6 md:px-16 lg:px-[120px] mb-20">
          <AnimatedSection>
            <span className="section-label block mb-5">Réflexions & découvertes</span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.9] tracking-[-3px] mb-6">
              Blog &<br />
              <span className="text-[hsl(var(--olive))]">Actualités</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-lg leading-[1.7] text-[hsl(var(--black))]/70 max-w-[550px]">
              Ethnobotanique, histoire coloniale des plantes, tutoriels créatifs et regards croisés sur le vivant.
            </p>
          </AnimatedSection>
        </div>

        <div className="px-6 md:px-16 lg:px-[120px]">
          {/* Featured article — first post large */}
          <AnimatedSection delay={150}>
            <Link to={`/blog/${blogPosts[0].slug}`} className="block group mb-16">
              <div className="grid md:grid-cols-2 gap-0 border-brutal overflow-hidden bg-[hsl(var(--black))] shadow-brutal">
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Carousel
                    plugins={[autoplayPlugin.current]}
                    className="w-full h-full pointer-events-none"
                    opts={{ loop: true }}
                  >
                    <CarouselContent className="h-full">
                      {blogPosts[0].images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="h-full">
                          <img 
                            src={image} 
                            alt={`${blogPosts[0].title} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <div className="absolute top-4 left-4 bg-[hsl(var(--olive))] text-[hsl(var(--cream))] px-3 py-1 text-[10px] font-mono uppercase tracking-[2px] z-10">
                    {blogPosts[0].category}
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-[hsl(var(--cream))]/40 font-mono uppercase tracking-[1.5px] mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(blogPosts[0].date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1.1] tracking-[-1px] text-[hsl(var(--cream))] mb-4 group-hover:text-[hsl(var(--olive-light))] transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-sm text-[hsl(var(--cream))]/60 leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[hsl(var(--olive-light))] font-mono text-xs uppercase tracking-[2px] group-hover:gap-4 transition-all">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Grid of remaining articles */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <AnimatedSection key={post.slug} delay={200 + index * 80}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="border-brutal overflow-hidden shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300 bg-[hsl(var(--cream))]">
                    {post.images.length > 0 ? (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Carousel
                          plugins={[Autoplay({ delay: 3000 + index * 500, stopOnInteraction: false })]}
                          className="w-full h-full pointer-events-none"
                          opts={{ loop: true }}
                        >
                          <CarouselContent className="h-full">
                            {post.images.map((image, imgIndex) => (
                              <CarouselItem key={imgIndex} className="h-full">
                                <img 
                                  src={image} 
                                  alt={`${post.title} - Image ${imgIndex + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                        <div className="absolute top-4 left-4 bg-[hsl(var(--olive))] text-[hsl(var(--cream))] px-3 py-1 text-[10px] font-mono uppercase tracking-[2px] z-10">
                          {post.category}
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] overflow-hidden bg-[hsl(var(--green-pale))] flex items-center justify-center">
                        <span className="font-display text-4xl md:text-5xl uppercase text-[hsl(var(--olive))]/20 tracking-[-2px] text-center px-6 leading-[1.1]">
                          {post.category}
                        </span>
                        <div className="absolute top-4 left-4 bg-[hsl(var(--olive))] text-[hsl(var(--cream))] px-3 py-1 text-[10px] font-mono uppercase tracking-[2px] z-10">
                          {post.category}
                        </div>
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 text-xs text-[hsl(var(--black))]/40 font-mono uppercase tracking-[1.5px] mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      <h2 className="font-display text-lg md:text-xl uppercase leading-[1.15] tracking-[-0.5px] text-[hsl(var(--black))] mb-3 group-hover:text-[hsl(var(--olive))] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[hsl(var(--black))]/60 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[hsl(var(--olive))] font-mono text-[11px] uppercase tracking-[2px] group-hover:gap-4 transition-all">
                        Lire
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Newsletter CTA */}
          <AnimatedSection delay={500}>
            <div className="mt-20 border-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] p-10 md:p-16 shadow-brutal flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive-light))] block mb-4">Newsletter</span>
                <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[-1px] mb-3">
                  Restez Informé·e
                </h2>
                <p className="text-sm text-[hsl(var(--cream))]/60 leading-relaxed max-w-lg">
                  Nouveaux articles, dates d'ateliers et actualités botaniques directement dans votre boîte mail.
                </p>
              </div>
              <Link 
                to="/#newsletter"
                className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--olive))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] hover:border-[hsl(var(--cream))] text-xs px-8 py-4 flex-shrink-0"
              >
                S'inscrire
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
