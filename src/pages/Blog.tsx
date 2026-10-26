import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import BackToTop from "@/components/BackToTop";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
import blogEpicesAtelier from "@/assets/gallery-atelier-epices-sachets-1.webp";
import blogNoelEpices from "@/assets/gallery-atelier-epices-table.webp";
import blogTatakiZome from "@/assets/gallery-tataki-zome-atelier-table.webp";
import blogSemaineBleue from "@/assets/gallery-kokedama-collection.jpg";
import blogCcas from "@/assets/gallery-workshop-group.webp";
import blogFeteNature from "@/assets/gallery-bombes-graines-sechage.webp";
import blogPatrimoine from "@/assets/gallery-herbier-toiles.webp";
import blogSedd from "@/assets/gallery-papier-recycle-sechage.webp";
import heroBlog from "@/assets/gallery-tableau-feuilles-automne.webp";

const blogPosts = [
  {
    slug: "semaine-bleue-atelier-intergenerationnel-kokedama-ehpad",
    title: "Semaine Bleue : un atelier kokedama intergénérationnel à l'EHPAD de Gif-sur-Yvette",
    excerpt: "Huit enfants du centre de loisirs, huit résidents de l'EHPAD des Chênes Verts et deux heures pour fabriquer ensemble des kokedamas : retour sur un atelier de la Semaine Bleue 2026.",
    images: [blogSemaineBleue],
    date: "2026-10-25",
    category: "Retour d'expérience"
  },
  {
    slug: "animation-noel-entreprise-atelier-sachet-senteur",
    title: "Animation de Noël en entreprise : des sachets senteur en flux continu et des ateliers végétaux pour les fêtes",
    excerpt: "Arbre de Noël CSE, marché de Noël, soirée de fin d'année : un stand de sachets senteur aux épices en flux continu et cinq autres formats pour les fêtes.",
    images: [blogNoelEpices],
    date: "2026-10-20",
    category: "Entreprises & CSE"
  },
  {
    slug: "tataki-zome-impression-vegetale-atelier",
    title: "Tataki zomé : frapper une feuille pour en garder l'empreinte",
    excerpt: "La technique japonaise d'impression végétale par martelage : chimie des pigments, plantes qui marchent, fixation et déroulé d'un atelier.",
    images: [blogTatakiZome],
    date: "2026-10-20",
    category: "Tutoriels"
  },
  {
    slug: "atelier-route-des-epices-fete-de-la-science-versailles",
    title: "Sur la route des épices : retour sur l'atelier de la Fête de la Science à Versailles",
    excerpt: "Histoire des épices, anthropologie des sens et fabrication de sachets senteur : retour sur l'atelier animé le 3 octobre 2026 à la bibliothèque Choiseul.",
    images: [blogEpicesAtelier],
    date: "2026-10-04",
    category: "Retour d'expérience"
  },
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
    images: [blogCcas],
    date: "2026-04-10",
    category: "Ressources collectivités"
  },
  {
    slug: "organiser-fete-nature-mairie",
    title: "Organiser la Fête de la Nature dans votre commune",
    excerpt: "Calendrier, formats, lieux, communication, budget : guide pratique pour une programmation municipale réussie.",
    images: [blogFeteNature],
    date: "2026-04-08",
    category: "Ressources collectivités"
  },
  {
    slug: "journees-patrimoine-animations-vegetales",
    title: "Journées du Patrimoine, idées d'animations végétales",
    excerpt: "Cinq idées de médiation patrimoniale autour du végétal pour les JEP, du parc historique à l'atelier herbier.",
    images: [blogPatrimoine],
    date: "2026-04-05",
    category: "Ressources collectivités"
  },
  {
    slug: "semaine-developpement-durable-mairie",
    title: "Semaine du Développement Durable, 5 ateliers nature en mairie",
    excerpt: "Bombes à graines, teinture végétale, kokedama, terrarium, conférence : cinq formats clé en main pour la SEDD.",
    images: [blogSedd],
    date: "2026-04-03",
    category: "Ressources collectivités"
  }
];

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Du plus récent au plus ancien
  const sortedPosts = useMemo(() => [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)), []);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    sortedPosts.forEach((post) => counts.set(post.category, (counts.get(post.category) ?? 0) + 1));
    return [["Tous", sortedPosts.length] as const, ...[...counts.entries()].sort((a, b) => b[1] - a[1])];
  }, [sortedPosts]);

  const visiblePosts =
    activeCategory === "Tous" ? sortedPosts : sortedPosts.filter((post) => post.category === activeCategory);
  const [featured, ...others] = visiblePosts;

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Blog ethnobotanique, plantes et médiation culturelle"
        description="Lisez notre blog ethnobotanique, histoires culturelles des plantes, ressources pédagogiques, tutoriels botaniques et analyses autour du vivant en Île-de-France."
        keywords="blog botanique, actualités nature, guide kokedama, teinture végétale, team building nature, ateliers botaniques Paris"
        canonical="/blog"
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroBlog} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Réflexions · Découvertes · Retours d'ateliers
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Blog &amp;<br />
              <span className="text-olive-light">Actualités</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[650px] mx-auto leading-relaxed">
              Ethnobotanique, histoire des plantes, tutoriels créatifs et regards croisés sur le vivant.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== FILTRES ===== */}
      <section className="px-6 pt-6">
        <div className="max-w-6xl mx-auto mb-12 flex flex-wrap justify-center">
          {categories.map(([label, count]) => {
            const isActive = activeCategory === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                aria-pressed={isActive}
                className={`font-mono-brand text-[10px] uppercase tracking-[1.5px] px-3 py-3 border-brutal -ml-[3px] -mt-[3px] first:ml-0 transition-colors duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-foreground text-primary-foreground"
                    : "bg-[hsl(var(--cream))] text-foreground hover:bg-[hsl(var(--green-pale))]"
                }`}
              >
                <span>{label}</span>
                <span className={`text-[9px] ${isActive ? "text-primary-foreground/60" : "text-foreground/40"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      <main className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* ===== À LA UNE ===== */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="block group mb-12">
              <article className="grid md:grid-cols-2 border-brutal overflow-hidden bg-foreground shadow-brutal transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-brutal-lg">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden">
                  <img
                    src={featured.images[0]}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))] text-foreground">
                    À la une · {featured.category}
                  </span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] text-olive-light mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featured.date)}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] tracking-[-1px] text-primary-foreground mb-4 group-hover:text-olive-light transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-olive-light font-mono-brand text-xs uppercase tracking-[2px] group-hover:gap-4 transition-all">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          )}

          {/* ===== ARTICLES ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
                <article className="h-full flex flex-col border-brutal bg-[hsl(var(--cream))] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-brutal-lg">
                  <div className="relative aspect-[16/10] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                    <img
                      src={post.images[0]}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))] text-foreground">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/50 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </p>
                    <h2 className="font-display text-lg uppercase leading-[1.1] tracking-[-0.5px] text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-foreground/65 leading-relaxed mb-5">{post.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-primary font-mono-brand text-[11px] uppercase tracking-[2px] group-hover:gap-4 transition-all">
                      Lire <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ===== NEWSLETTER ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Newsletter</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Restez <span className="text-olive-light">informé·e</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Nouveaux articles, dates d'ateliers et actualités botaniques, directement dans votre boîte mail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#newsletter"
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              S'inscrire →
            </Link>
            <Link
              to="/workshops"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Voir les ateliers →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Blog;
