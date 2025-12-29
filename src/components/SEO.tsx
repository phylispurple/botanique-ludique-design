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
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://botaniqueludique.com/og-image.jpg",
  canonical,
  type = "website",
  city = "Paris",
  region = "FR-IDF"
}: SEOProps) => {
  const fullTitle = `${title} | Botanique Ludique`;
  const siteUrl = "https://botaniqueludique.com";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

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
      <meta name="robots" content="index, follow" />
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
