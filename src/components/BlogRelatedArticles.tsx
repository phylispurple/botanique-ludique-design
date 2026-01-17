import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

interface BlogRelatedArticlesProps {
  articles: RelatedArticle[];
  currentSlug: string;
}

const BlogRelatedArticles = ({ articles, currentSlug }: BlogRelatedArticlesProps) => {
  // Filter out current article and take max 2
  const relatedArticles = articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, 2);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="animate-fade-in mt-12 border-t border-charcoal/10 pt-8">
      <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
        Articles Liés
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {relatedArticles.map((article) => (
          <Link 
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="group block bg-sand/30 rounded-lg overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold text-sage uppercase tracking-wide">
                {article.category}
              </span>
              <h3 className="text-base font-medium text-charcoal mt-1 mb-2 line-clamp-2 group-hover:text-sage transition-colors" style={{ fontFamily: 'Fraunces, serif' }}>
                {article.title}
              </h3>
              <p className="text-sm text-charcoal/70 line-clamp-2 mb-3">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-sage-dark group-hover:text-sage font-medium">
                Lire
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogRelatedArticles;
