import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
  city?: string;
  region?: string;
  noindex?: boolean;
}

const AUTO_NOINDEX_PATTERNS: RegExp[] = [
  /^\/animation-botanique-/,
  /^\/animatrice-(nature|botanique)-/,
  /^\/intervenant-scientifique-/,
  /^\/mediation-(scientifique|botanique|culturelle-nature)-/,
  /^\/atelier-botanique-(enfant|adulte)-/,
  /^\/atelier-botanique-(rambouillet|saint-germain-en-laye|le-pecq|le-vesinet|chatou|versailles|nanterre|boulogne-billancourt|cergy|rueil-malmaison|conflans-sainte-honorine)$/,
  // Les 4 pages balade-botanique par département (paris, yvelines,
  // hauts-de-seine, val-d-oise) ont été rendues indexables : leur contenu est
  // réellement différencié (lieux, références clients, publics propres à
  // chaque territoire) et ce sont des pages d'entrée locales utiles.
  // Les autres départements de l'ancienne règle sont de simples redirections
  // vers /balades-botaniques : ils n'affichent aucune balise SEO.
];

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://botaniqueludique.com/og-image.jpg",
  canonical,
  type = "website",
  city = "Paris",
  region = "FR-IDF",
  noindex,
}: SEOProps) => {
  const fullTitle = title.includes('Botanique Ludique') ? title : `${title} | Botanique Ludique`;
  const siteUrl = "https://botaniqueludique.com";
  const normalizedPath = canonical
    ? canonical.startsWith("http")
      ? new URL(canonical).pathname
      : canonical
    : "/";
  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${siteUrl}${canonical}`
    : siteUrl;
  const resolvedNoindex = noindex ?? AUTO_NOINDEX_PATTERNS.some((pattern) => pattern.test(normalizedPath));
  const robotsContent = resolvedNoindex ? "noindex, follow" : "index, follow";

  return (
    <Helmet>
      {/* Language & Hreflang */}
      <html lang="fr" />
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Language Meta */}
      <meta name="language" content="French" />
      <meta http-equiv="content-language" content="fr-FR" />

      {/* Geo Targeting for France / Île-de-France */}
      <meta name="geo.region" content={region} />
      <meta name="geo.placename" content={`${city}, Île-de-France, France`} />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="ICBM" content="48.8566, 2.3522" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Botanique Ludique" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta for Local SEO */}
      <meta name="author" content="Vanessa Charlery" />
      <meta name="publisher" content="Botanique Ludique" />
      <meta name="copyright" content="Botanique Ludique" />
      <meta name="distribution" content="France" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};
