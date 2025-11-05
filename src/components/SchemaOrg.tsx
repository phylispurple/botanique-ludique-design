import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type: 'LocalBusiness' | 'Course' | 'FAQPage';
  data: any;
}

export const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  const getSchema = () => {
    switch (type) {
      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://botaniqueludique.com",
          "name": "Botanique Ludique",
          "image": "https://botaniqueludique.com/hero-botanical.jpg",
          "description": "Ateliers botaniques créatifs à Paris et en Île-de-France. Ethnobotanique par la création artistique : kokedama, teinture végétale, vannerie, terrarium.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris",
            "addressRegion": "Île-de-France",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.8566",
            "longitude": "2.3522"
          },
          "url": "https://botaniqueludique.com",
          "telephone": "+33-X-XX-XX-XX-XX",
          "priceRange": "€€",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.instagram.com/botaniqueludique/",
            "https://www.facebook.com/botaniqueludique/"
          ],
          ...data
        };
      
      case 'Course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Botanique Ludique",
            "sameAs": "https://botaniqueludique.com"
          },
          "courseMode": "Onsite",
          "educationalCredentialAwarded": data.certificate || "Certificat de participation",
          "availableLanguage": "fr",
          ...data
        };
      
      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        };
      
      default:
        return null;
    }
  };

  const schema = getSchema();
  
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
