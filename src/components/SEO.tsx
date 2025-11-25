import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://botaniqueludique.com/og-image.jpg",
  canonical,
  type = "website"
}: SEOProps) => {
  const fullTitle = `${title} | Botanique Ludique`;
  const siteUrl = "https://botaniqueludique.com";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

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

      {/* Additional Meta */}
      <meta name="author" content="Vanessa Charlery" />
      <meta name="geo.region" content="FR-IDF" />
      <meta name="geo.placename" content="Paris" />
    </Helmet>
  );
};
