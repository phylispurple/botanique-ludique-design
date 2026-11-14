import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import BackToTop from "@/components/BackToTop";
import TraitDessine from "@/components/TraitDessine";
import { galet, galetPhoto } from "@/lib/organic";
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
import blogBombesGraines from "@/assets/gallery-bombes-graines-mains.webp";

const blogPosts = [
  {
    slug: "histoire-bombes-de-graines-atelier-la-celle-saint-cloud",
    title: "Les bombes de graines : de Fukuoka à New York, l'histoire d'un geste qui fait pousser la vie",
    excerpt: "Des boulettes d'argile de Masanobu Fukuoka aux grenades à graines des Green Guerillas, et pourquoi semer des fleurs mellifères : retour sur notre atelier à la bibliothèque de La Celle-Saint-Cloud, expo « Sur la route des saisons ».",
    images: [blogBombesGraines],
    date: "2026-11-14",
    category: "Retour d'expérience"
  },
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
    <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
      <SEO
        title="Blog ethnobotanique, plantes et médiation culturelle"
        description="Lisez notre blog ethnobotanique, histoires culturelles des plantes, ressources pédagogiques, tutoriels botaniques et analyses autour du vivant en Île-de-France."
        keywords="blog botanique, actualités nature, guide kokedama, teinture végétale, team building nature, ateliers botaniques Paris"
        canonical="/blog"
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative px-6 pt-28 pb-10 md:pt-36 md:pb-14">
        <div
          className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
          style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 top-40 w-[340px] h-[340px] bg-accent/15 pointer-events-none"
          style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
          aria-hidden="true"
        />
        <AnimatedSection className="relative max-w-6xl mx-auto">
          <span className="inline-flex font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
            Réflexions · Découvertes · Retours d'ateliers
          </span>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
            Blog &amp;<br />
            <span className="text-primary md:ml-20">actualités</span>
          </h1>
          <TraitDessine className="mb-7 md:ml-20" />
          <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[600px] leading-snug">
            Ethnobotanique, histoire des plantes, tutoriels créatifs et regards croisés sur le vivant.
          </p>
        </AnimatedSection>
      </section>

      {/* ===== FILTRES ===== */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto mb-14 flex flex-wrap gap-2.5">
          {categories.map(([label, count]) => {
            const isActive = activeCategory === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                aria-pressed={isActive}
                className={`font-mono-brand text-[10px] uppercase tracking-[1.5px] px-4 py-2.5 border-brutal-thin rounded-full transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-foreground text-primary-foreground -rotate-2 shadow-[3px_3px_0_hsl(var(--olive))]"
                    : "bg-[hsl(var(--cream))] text-foreground hover:bg-[hsl(var(--olive-light))] shadow-[2px_2px_0_hsl(var(--black))]"
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
            <Link to={`/blog/${featured.slug}`} className="block group mb-16">
              <article className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
                <div className="relative -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <img
                    src={featured.images[0]}
                    alt={featured.title}
                    className="w-full aspect-[4/3] object-cover border-brutal shadow-brutal-lg"
                    style={galetPhoto(0)}
                  />
                  <span className="absolute -top-4 left-6 font-mono-brand text-[10px] uppercase tracking-[2px] px-4 py-2 border-brutal-thin rounded-full bg-accent -rotate-2 shadow-[2px_2px_0_hsl(var(--black))]">
                    À la une · {featured.category}
                  </span>
                </div>
                <div>
                  <p className="flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/55 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {formatDate(featured.date)}
                  </p>
                  <h2 className="font-display text-2xl md:text-[2.2rem] uppercase leading-[1] tracking-[-1px] mb-4 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <TraitDessine className="mb-5" variant={2} color="hsl(var(--orange))" />
                  <p className="text-base text-foreground/75 leading-relaxed mb-7">{featured.excerpt}</p>
                  <span
                    className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 group-hover:rotate-0 text-xs px-7 py-3.5"
                    style={{ borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" }}
                  >
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          )}

          {/* ===== ARTICLES ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {others.map((post, i) => (
              <AnimatedSection key={post.slug} delay={(i % 3) * 80} className={i % 3 === 1 ? "lg:mt-10" : ""}>
                <Link to={`/blog/${post.slug}`} className="block group h-full">
                  <article
                    className={`h-full flex flex-col bg-[hsl(var(--cream))] border-brutal shadow-brutal p-4 transition-transform duration-300 group-hover:rotate-0 group-hover:-translate-y-1 ${i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}
                    style={galet(i)}
                  >
                    <div className="relative">
                      <img
                        src={post.images[0]}
                        alt={post.title}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover border-brutal-thin"
                        style={galetPhoto(i)}
                      />
                      <span className={`absolute -bottom-3 left-4 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin rounded-full bg-[hsl(var(--cream))] ${i % 2 ? "rotate-2" : "-rotate-2"}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="px-2 pt-6 pb-2 flex flex-col flex-1">
                      <p className="flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/50 mb-2.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {formatDate(post.date)}
                      </p>
                      <h2 className="font-display text-lg uppercase leading-[1.1] tracking-[-0.5px] mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-5">{post.excerpt}</p>
                      <span className="mt-auto inline-flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 group-hover:text-primary">
                        Lire <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>

      {/* ===== NEWSLETTER ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>Newsletter</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Restez <span className="text-[hsl(var(--olive-light))]">informé·e</span>
          </h2>
          <TraitDessine className="mx-auto mt-3 mb-6" color="hsl(var(--olive-light))" variant={1} />
          <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 leading-relaxed mb-9 max-w-xl mx-auto">
            Nouveaux articles, dates d'ateliers et actualités botaniques, directement dans votre boîte mail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#newsletter"
              className="btn-brutal inline-flex items-center bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5"
              style={{ borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" }}
            >
              S'inscrire →
            </Link>
            <Link
              to="/workshops"
              className="btn-brutal inline-flex items-center bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
              style={{ borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" }}
            >
              Voir les ateliers →
            </Link>
          </div>
        </AnimatedSection>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Blog;
