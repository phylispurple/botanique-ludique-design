import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Calendar, ArrowLeft, User, Instagram, BookOpen, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import BlogCTA from "@/components/BlogCTA";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";

// Images
import blogPalmiersParis from "@/assets/blog-palmiers-haussmann-paris.jpg";
import blogPalmiersAlger from "@/assets/blog-palmiers-jardin-hamma-alger.jpg";
import blogPalmiersAvenue from "@/assets/blog-palmiers-avenue-coloniale.jpg";
import blogParisPreHaussmann from "@/assets/blog-paris-pre-haussmann.jpg";
import blogImmeubleAlger from "@/assets/blog-immeuble-colonial-alger.jpg";

// Images pour articles liés
import blogMonsteraTendance from "@/assets/blog-monstera-tendance.jpg";
import blogCarouselBocal from "@/assets/blog-carousel-bocal-indigo.jpg";

const BlogPalmiersHaussmann = () => {
  const articleData = {
    headline: "Palmiers et Architecture Haussmannienne : Quand les Boulevards Racontent l'Empire Colonial",
    description: "Comment les grands boulevards haussmanniens ont été exportés dans les colonies françaises, avec les palmiers comme symboles de domination. Une analyse ethnobotanique de la géographie végétale impériale.",
    datePublished: "2026-01-17",
    dateModified: "2026-01-17",
    author: {
      "@type": "Person",
      name: "Vanessa Charlery",
      url: "https://botaniqueludique.com/about"
    },
    publisher: {
      "@type": "Organization",
      name: "Botanique Ludique",
      logo: {
        "@type": "ImageObject",
        url: "https://botaniqueludique.com/og-image.jpg"
      }
    },
    image: "https://botaniqueludique.com/blog-palmiers-haussmann-paris.jpg",
    mainEntityOfPage: "https://botaniqueludique.com/blog/palmiers-architecture-haussmannienne-colonialisme"
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Palmiers et Architecture Haussmannienne : Histoire Coloniale des Boulevards"
        description="Comment les palmiers sont devenus le logo de l'empire colonial français. Du Jardin d'Essai du Hamma à Alger aux boulevards de Casablanca. Références : Hélène Blais, Edward Said."
        keywords="palmiers colonialisme, architecture haussmannienne, jardin d'essai Alger, boulevards coloniaux, Phoenix canariensis, Washingtonia, orientalisme botanique, empire colonial français"
        canonical="/blog/palmiers-architecture-haussmannienne-colonialisme"
        type="article"
      />
      <SchemaOrg type="Article" data={articleData} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Retour au blog */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sage-dark hover:text-sage transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            {/* En-tête de l'article */}
            <header className="mb-12 animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-sage text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Ethnobotanique
                </span>
                <span className="bg-terracotta/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Histoire Coloniale
                </span>
                <span className="bg-charcoal/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Urbanisme
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Palmiers et Architecture Haussmannienne : Quand les Boulevards Racontent l'Empire Colonial
              </h1>
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Comment les grands boulevards parisiens ont été exportés dans les colonies avec un twist botanique : 
                à la place des platanes, des palmiers importés pour créer un décor orientaliste fantasmé.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal/60 border-b border-charcoal/10 pb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Vanessa Charlery, Botaniste</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2026-01-17">17 janvier 2026</time>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Temps de lecture : 6 min</span>
                </div>
              </div>
            </header>

            {/* Image principale */}
            <figure className="mb-12 animate-fade-in">
              <img 
                src={blogPalmiersParis}
                alt="Boulevard haussmannien à Paris avec ses immeubles en pierre et alignements d'arbres"
                className="w-full rounded-lg shadow-lg"
              />
              <figcaption className="text-sm text-charcoal/60 mt-3 text-center italic">
                Boulevard haussmannien à Paris. Ces grandes artères rectilignes seront exportées dans les colonies françaises.
              </figcaption>
            </figure>

            {/* Contenu de l'article */}
            <div className="prose prose-lg max-w-none space-y-8">
              
              {/* Table des matières */}
              <BlogTableOfContents 
                items={[
                  { id: "haussmann", title: "Le Baron Haussmann et la transformation de Paris" },
                  { id: "jardin-essai", title: "Le Jardin d'Essai du Hamma : laboratoire botanique" },
                  { id: "cosplay-botanique", title: "Du cosplay botanique impérial" },
                  { id: "platanes-palmiers", title: "Les platanes disent République, les palmiers disent Colonies" },
                  { id: "orientalisme", title: "L'orientalisme végétal : une projection fantasmée" },
                  { id: "aujourdhui", title: "Du symbole impérial à l'icône tropicale" },
                ]}
              />

              {/* Introduction */}
              <section className="animate-fade-in">
                <p className="text-lg leading-relaxed text-charcoal/90">
                  Est-ce que tu savais que les palmiers que tu photographies en vacances avaient un lien avec 
                  l'architecture haussmannienne ? Derrière ces alignements majestueux de palmiers bordant les 
                  avenues du Maghreb se cache une histoire de domination coloniale, de fantasme orientaliste 
                  et de géographie végétale au service de l'empire.
                </p>
              </section>

              {/* Section 1 : Haussmann */}
              <section id="haussmann" className="animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Le Baron Haussmann et la transformation de Paris
                </h2>
                
                <p className="text-charcoal/85 leading-relaxed mb-6">
                  Sous le Second Empire, entre 1853 et 1870, le Baron Haussmann s'est efforcé de transformer Paris 
                  en capitale mondiale des appartements hors de prix, parquet qui craque et cheminées décoratives... 
                  Mais surtout à créer les grands boulevards afin de permettre une meilleure circulation, 
                  un assainissement de la ville, et bonus non négligeable pour Napoléon III, ça rendait les 
                  barricades révolutionnaires vachement plus compliquées à monter.
                </p>

                <figure className="my-8">
                  <img 
                    src={blogParisPreHaussmann}
                    alt="Paris avant Haussmann photographié par Charles Marville, montrant les quartiers populaires détruits"
                    className="w-full rounded-lg shadow-md"
                  />
                  <figcaption className="text-sm text-charcoal/60 mt-3 text-center italic">
                    Paris avant Haussmann : les quartiers populaires photographiés par Charles Marville, avant leur destruction pour créer les grands boulevards.
                  </figcaption>
                </figure>

                <p className="text-charcoal/85 leading-relaxed">
                  Ces grandes artères rectilignes, bordées de platanes et d'immeubles en pierre de taille, 
                  deviennent le modèle de la modernité urbaine française. Un modèle qui sera exporté 
                  bien au-delà des frontières de l'Hexagone.
                </p>
              </section>

              {/* Section 2 : Le Jardin d'Essai */}
              <section id="jardin-essai" className="animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Le Jardin d'Essai du Hamma : laboratoire botanique de l'empire
                </h2>
                
                <p className="text-charcoal/85 leading-relaxed mb-6">
                  Pendant ce temps, la France en pleine expansion coloniale importe massivement des palmiers. 
                  Pas n'importe lesquels : le <em>Phoenix canariensis</em> des Canaries et le <em>Washingtonia</em> de 
                  Californie, éprouvés au Jardin d'Essai du Hamma à Alger, le plus grand laboratoire botanique 
                  colonial de l'époque.
                </p>

                <figure className="my-8">
                  <img 
                    src={blogPalmiersAlger}
                    alt="Jardin d'Essai du Hamma à Alger avec ses allées de palmiers monumentaux"
                    className="w-full rounded-lg shadow-md"
                  />
                  <figcaption className="text-sm text-charcoal/60 mt-3 text-center italic">
                    Le Jardin d'Essai du Hamma à Alger, créé en 1832. Le plus grand laboratoire botanique colonial français, 
                    où étaient testées les espèces destinées à orner les villes coloniales.
                  </figcaption>
                </figure>

                <p className="text-charcoal/85 leading-relaxed">
                  Créé en 1832, deux ans seulement après la conquête de l'Algérie, ce jardin d'acclimatation 
                  servait à tester quelles espèces pouvaient être rentables économiquement et esthétiquement 
                  dans le contexte colonial. Comme l'explique l'historienne <strong>Hélène Blais</strong> dans 
                  <em> L'Empire de la nature</em>, les empires se construisent sur une véritable 
                  "ingénierie de la nature".
                </p>
              </section>

              {/* Section 3 : L'exportation du modèle */}
              <section id="cosplay-botanique" className="animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Du cosplay botanique impérial
                </h2>
                
                <p className="text-charcoal/85 leading-relaxed mb-6">
                  Et là, accrochez-vous : toute cette architecture haussmannienne est exportée dans les colonies. 
                  À Alger, Casablanca, Rabat, Tunis... On retrouve les mêmes grands boulevards, les mêmes 
                  immeubles en pierre, les mêmes façades. Mais avec un twist absurde : à la place des platanes 
                  parisiens, on plante ces palmiers importés pour créer un décor orientaliste fantasmé qui ne 
                  correspond pas du tout à la réalité locale.
                </p>

                <div className="bg-sand/50 border-l-4 border-sage p-6 my-8 rounded-r-lg">
                  <p className="text-charcoal/90 italic leading-relaxed text-lg">
                    "C'est littéralement du cosplay botanique impérial."
                  </p>
                </div>

                <figure className="my-8">
                  <img 
                    src={blogImmeubleAlger}
                    alt="Immeuble de style haussmannien à Alger, rue Jamal Abdelnasser"
                    className="w-full rounded-lg shadow-md"
                  />
                  <figcaption className="text-sm text-charcoal/60 mt-3 text-center italic">
                    Façade d'immeuble colonial à Alger. L'architecture haussmannienne a été exportée dans les colonies, 
                    créant des "petits Paris" en Afrique du Nord.
                  </figcaption>
                </figure>
              </section>

              {/* Section 4 : Platanes vs Palmiers */}
              <section id="platanes-palmiers" className="animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  "Les platanes disent République, les palmiers disent Colonies"
                </h2>
                
                <p className="text-charcoal/85 leading-relaxed mb-6">
                  Pourquoi le palmier ? Parce qu'il coche toutes les cases de son cousin parisien le platane : 
                  droit, résistant, alignement impeccable. Mais avec un atout majeur : il hurle "exotisme" 
                  sans dire un mot. C'est le logo parfait de l'empire colonial.
                </p>

                <figure className="my-8">
                  <img 
                    src={blogPalmiersAvenue}
                    alt="Avenue bordée de palmiers Phoenix canariensis au Maroc"
                    className="w-full rounded-lg shadow-md"
                  />
                  <figcaption className="text-sm text-charcoal/60 mt-3 text-center italic">
                    Avenue Hassan II à Fès, Maroc. Les palmiers alignés reprennent le modèle des boulevards haussmanniens, 
                    mais avec une symbolique coloniale.
                  </figcaption>
                </figure>

                <p className="text-charcoal/85 leading-relaxed">
                  Cette géographie végétale n'est pas innocente : les palmiers étaient plantés exclusivement 
                  dans les quartiers européens, les boulevards, les places administratives, les bâtiments 
                  officiels. Les médinas ? Interdiction tacite. Le code est simple : palmiers alignés = ordre 
                  colonial. Pas de palmiers = "espaces à civiliser".
                </p>
              </section>

              {/* Section 5 : Orientalisme */}
              <section id="orientalisme" className="animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  L'orientalisme végétal : une projection fantasmée
                </h2>
                
                <p className="text-charcoal/85 leading-relaxed mb-6">
                  Comme l'a théorisé <strong>Edward Said</strong>, les colons projetaient leur fantasme de "l'Orient" 
                  sur les colonies. Le palmier devient alors le symbole d'un exotisme fabriqué, une mise en 
                  scène végétale de la domination. Ironie suprême : ces palmiers "orientaux" venaient souvent 
                  des Canaries ou de Californie, pas du tout du Maghreb.
                </p>

                <div className="bg-sage/10 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
                    Dimensions anthropologiques clés
                  </h3>
                  <ul className="space-y-3 text-charcoal/85">
                    <li className="flex items-start gap-3">
                      <span className="text-sage font-bold">•</span>
                      <span><strong>Orientalisme :</strong> Les colons projetaient leur fantasme de "l'Orient" sur les colonies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage font-bold">•</span>
                      <span><strong>Hiérarchie spatiale :</strong> Palmiers = modernité coloniale / Médinas = tradition à contrôler</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage font-bold">•</span>
                      <span><strong>Acclimatation :</strong> Les jardins d'essai testaient quelles espèces pouvaient être rentables</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage font-bold">•</span>
                      <span><strong>Ingénierie de la nature :</strong> Les empires se construisent sur une maîtrise du végétal</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 : Aujourd'hui */}
              <section id="aujourdhui" className="animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Du symbole impérial à l'icône tropicale
                </h2>
                
                <p className="text-charcoal/85 leading-relaxed mb-6">
                  Aujourd'hui, ce symbole impérial a été largement recyclé lors de l'explosion du tourisme 
                  des années 50-70 qui en a fait une icône tropicale. Même plante, mais rebranding complet. 
                  Les palmiers des cartes postales ont effacé leur histoire coloniale pour devenir de simples 
                  symboles de vacances et de détente.
                </p>

                <p className="text-charcoal/85 leading-relaxed">
                  La prochaine fois que vous photographierez un palmier sur un boulevard maghrébin, 
                  vous saurez qu'il raconte une histoire bien plus complexe qu'un simple décor de vacances.
                </p>
              </section>

              {/* Références */}
              <section className="animate-fade-in border-t border-charcoal/10 pt-8 mt-12">
                <h2 className="text-xl md:text-2xl mb-6 flex items-center gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  <BookOpen className="w-6 h-6 text-sage" />
                  Références bibliographiques
                </h2>
                
                <ul className="space-y-4 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <span className="text-sage">📚</span>
                    <span>
                      <strong>Hélène Blais</strong>, <em>L'Empire de la nature. Une histoire des jardins botaniques coloniaux 
                      (fin XVIIIe siècle, années 1930)</em>, Champ Vallon, 2023
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage">📚</span>
                    <span>
                      <strong>Christophe Bonneuil & Mina Kleiche</strong>, <em>Du jardin d'essais colonial à la station 
                      expérimentale, 1880-1930</em>, 1993
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage">📚</span>
                    <span>
                      <strong>Edward Said</strong>, <em>L'Orientalisme. L'Orient créé par l'Occident</em>, Seuil, 1978
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage">📄</span>
                    <span>
                      "Pépinières coloniales : de la valeur des plantes des jardins botaniques au XIXe siècle"
                    </span>
                  </li>
                </ul>
              </section>

              {/* Jardins à visiter */}
              <section className="animate-fade-in bg-sand/30 p-6 md:p-8 rounded-lg mt-8">
                <h2 className="text-xl md:text-2xl mb-6 flex items-center gap-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  <MapPin className="w-6 h-6 text-sage" />
                  Jardins d'essai coloniaux à visiter
                </h2>
                
                <ul className="grid md:grid-cols-2 gap-4 text-charcoal/80">
                  <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                    <span className="text-sage">🌴</span>
                    <span><strong>Jardin d'Essai du Hamma</strong> (Alger) - créé en 1832</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                    <span className="text-sage">🌴</span>
                    <span><strong>Jardin des Pamplemousses</strong> (Maurice) - 1768</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                    <span className="text-sage">🌴</span>
                    <span><strong>Jardins de Peradeniya</strong> (Sri Lanka)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                    <span className="text-sage">🌴</span>
                    <span><strong>Jardin botanique de Saint-Denis</strong> (La Réunion)</span>
                  </li>
                </ul>
              </section>

              {/* CTA Instagram avec vidéo */}
              <div className="bg-gradient-to-r from-sage/20 to-sand p-8 rounded-lg text-center mt-12 animate-fade-in">
                <h3 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Voir la vidéo sur ce sujet
                </h3>
                <p className="text-charcoal/80 mb-6">
                  Retrouvez ma vidéo complète sur les palmiers et l'architecture coloniale sur Instagram !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.instagram.com/p/DTdEVMVDlmo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Voir la vidéo
                  </a>
                  <a 
                    href="https://www.instagram.com/botanique.ludique/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-sage-dark px-6 py-3 rounded-full font-semibold transition-colors border border-sage/30"
                  >
                    <Instagram className="w-5 h-5" />
                    @botanique.ludique
                  </a>
                </div>
              </div>

              {/* CTA Ateliers */}
              <BlogCTA />

              {/* Articles liés */}
              <BlogRelatedArticles 
                currentSlug="palmiers-architecture-haussmannienne-colonialisme"
                articles={[
                  {
                    slug: "monstera-plante-coloniale-distinction-sociale",
                    title: "La Monstera : Une Plante Déplacée. Histoire Coloniale et Distinction Sociale",
                    excerpt: "Comment la Monstera est passée des forêts mexicaines aux salons bourgeois via l'histoire coloniale.",
                    image: blogMonsteraTendance,
                    category: "Ethnobotanique"
                  },
                  {
                    slug: "teinture-vegetale-chou-rouge-indigo-naturel",
                    title: "Teinture Végétale au Chou Rouge : Guide Complet pour Obtenir un Indigo Naturel",
                    excerpt: "Découvrez comment créer une teinture indigo naturelle à partir de chou rouge fermenté.",
                    image: blogCarouselBocal,
                    category: "Tutoriel"
                  }
                ]}
              />

            </div>

            {/* Navigation articles */}
            <nav className="flex justify-between items-center pt-8 border-t border-charcoal/10 mt-12">
              <Link 
                to="/blog/monstera-plante-coloniale-distinction-sociale"
                className="inline-flex items-center gap-2 text-sage-dark hover:text-sage transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Article précédent</span>
              </Link>
              <Link 
                to="/blog"
                className="text-charcoal/60 hover:text-charcoal transition-colors"
              >
                Tous les articles
              </Link>
              <Link 
                to="/blog/teinture-vegetale-chou-rouge-indigo-naturel"
                className="inline-flex items-center gap-2 text-sage-dark hover:text-sage transition-colors group"
              >
                <span className="hidden sm:inline">Article suivant</span>
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPalmiersHaussmann;
