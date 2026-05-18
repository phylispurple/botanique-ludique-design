import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import SocialProofBar from "@/components/SocialProofBar";
import { Clock, ArrowRight } from "lucide-react";
import { findProArticle, PRO_ARTICLES } from "@/data/proBlogArticles";
import { findProLanding } from "@/data/proLandings";
import { trackBlogCtaClick } from "@/lib/analytics";

const ProBlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? findProArticle(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const {
    title,
    metaDescription,
    keywords,
    h1,
    excerpt,
    readingTime,
    publishedAt,
    sections,
    ctaText,
    ctaTarget,
    relatedLandings,
  } = article;

  const related = relatedLandings
    .map((s) => findProLanding(s))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const otherArticles = PRO_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#F7F7EB" }}>
      <SEO
        title={title}
        description={metaDescription}
        keywords={keywords}
        canonical={`/blog/${article.slug}`}
        type="article"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: h1,
          description: metaDescription,
          datePublished: publishedAt,
          author: "Botanique Ludique",
        }}
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="text-sm text-sage hover:underline">
              ← Tous les articles
            </Link>

            <header className="mt-6 mb-10">
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl mb-6">{h1}</h1>
              <p className="text-lg text-charcoal/80 leading-relaxed italic mb-4">{excerpt}</p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-charcoal/60">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {readingTime}
                </span>
                <span>Publié le {new Date(publishedAt).toLocaleDateString("fr-FR")}</span>
              </div>
            </header>

            <div className="prose-content space-y-10">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2
                    className="text-2xl md:text-3xl mb-4"
                    style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
                  >
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-charcoal/85 leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-6 space-y-1 text-charcoal/85">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-20">
          <SocialProofBar />
        </div>

        <div className="container mx-auto px-4 md:px-6 mt-16">
          <div className="max-w-3xl mx-auto bg-sage text-off-white rounded-lg p-8 md:p-12 text-center">
            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}
            >
              {ctaText}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Brief gratuit, programme sur-mesure. Réponse rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ctaTarget}
                onClick={() => trackBlogCtaClick(article.slug, ctaTarget, "voir_offre")}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
              >
                Voir l'offre <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                onClick={() => trackBlogCtaClick(article.slug, "/contact", "nous_ecrire")}
                className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
              >
                Nous écrire
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="container mx-auto px-4 md:px-6 mt-20">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-xl md:text-2xl mb-8 text-center"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
              >
                Voir aussi nos offres
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/${r.slug}`}
                    className="bg-white rounded-lg p-5 hover:shadow-lg transition-shadow"
                  >
                    <h3
                      className="text-base mb-2"
                      style={{ fontFamily: "Fraunces, serif", fontWeight: 500, color: "#3D3D2E" }}
                    >
                      {r.h1}
                    </h3>
                    <p className="text-sm text-charcoal/70">{r.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {otherArticles.length > 0 && (
          <div className="container mx-auto px-4 md:px-6 mt-16">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-xl md:text-2xl mb-8 text-center"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
              >
                À lire ensuite
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/blog/${a.slug}`}
                    className="bg-white rounded-lg p-5 hover:shadow-lg transition-shadow"
                  >
                    <h3
                      className="text-base mb-2"
                      style={{ fontFamily: "Fraunces, serif", fontWeight: 500, color: "#3D3D2E" }}
                    >
                      {a.h1}
                    </h3>
                    <p className="text-sm text-charcoal/70">{a.excerpt.slice(0, 100)}...</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProBlogArticle;
