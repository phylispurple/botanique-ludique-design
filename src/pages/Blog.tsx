import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import kokedamaImage from "@/assets/workshop-kokedama.jpg";
import terrariumImage from "@/assets/workshop-terrarium.jpg";
import teintureChouRougeImage from "@/assets/gallery-teinture-2.jpg";

const blogPosts = [
  {
    slug: "teinture-vegetale-chou-rouge-indigo-naturel",
    title: "Teinture Végétale au Chou Rouge : Guide Complet pour Obtenir un Indigo Naturel",
    excerpt: "Découvrez comment créer une teinture indigo naturelle à partir de chou rouge fermenté. Tutoriel étape par étape : fermentation, modification du pH, mordançage à l'alun et techniques de fixation.",
    image: teintureChouRougeImage,
    date: "2025-01-20",
    category: "Tutoriels"
  },
  {
    slug: "top-5-ateliers-botaniques-paris-2025",
    title: "Top 5 des Ateliers Botaniques à Faire à Paris en 2025",
    excerpt: "Découvrez notre sélection des meilleurs ateliers botaniques créatifs à Paris cette année : kokedama, teinture végétale, terrarium et plus encore.",
    image: kokedamaImage,
    date: "2025-01-15",
    category: "Guides"
  },
  {
    slug: "organiser-team-building-nature-yvelines",
    title: "Comment Organiser un Team Building Nature dans les Yvelines ?",
    excerpt: "Guide complet pour organiser un team building réussi avec des ateliers botaniques dans les Yvelines. Conseils, formats et idées d'activités.",
    image: terrariumImage,
    date: "2025-01-10",
    category: "Entreprise"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Blog Botanique | Guides, Tutoriels & Idées Nature ✦ Actualités"
        description="📖 Articles, guides et tutoriels sur la botanique : kokedama, teinture végétale, team building nature. Conseils d'experts et idées d'activités à Paris & IDF."
        keywords="blog botanique, actualités nature, guide kokedama, teinture végétale, team building nature, ateliers botaniques Paris"
        canonical="/blog"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Blog & Actualités
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Guides, conseils et actualités autour de la botanique ludique
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Retrouvez nos articles sur les ateliers botaniques, l'ethnobotanique, les plantes sauvages, 
                et nos conseils pour organiser vos activités nature en Île-de-France.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-56 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-sage text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-sm text-charcoal/60">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      <h2 className="text-xl font-semibold text-charcoal leading-tight" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                        {post.title}
                      </h2>
                      <p className="text-charcoal/70 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sage-dark hover:text-sage font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-sand rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Restez Informé·e
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir nos nouveaux articles, actualités et dates d'ateliers
              </p>
              <Link 
                to="/#newsletter"
                className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
              >
                S'inscrire à la newsletter
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
