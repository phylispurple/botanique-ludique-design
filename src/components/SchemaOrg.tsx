import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type: 'LocalBusiness' | 'Course' | 'FAQPage' | 'Service' | 'Event' | 'Organization' | 'Person';
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
          "description": "Ateliers botaniques créatifs à Paris et en Île-de-France. Team building RSE, animations nature pour entreprises, collectivités et particuliers. Kokedama, teinture végétale, vannerie, terrarium.",
          "founder": {
            "@type": "Person",
            "name": "Vanessa Charlery",
            "jobTitle": "Ethnobotaniste et Fondatrice",
            "description": "Ethnobotaniste diplômée de l'EHESS, Vanessa dirige Botanique Ludique et collabore avec un réseau d'artisans, artistes et professionnels de la nature.",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "EHESS - École des Hautes Études en Sciences Sociales"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris",
            "addressRegion": "Île-de-France",
            "addressCountry": "FR"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Paris"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Yvelines (78)"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Hauts-de-Seine (92)"
            }
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.8566",
            "longitude": "2.3522"
          },
          "url": "https://botaniqueludique.com",
          "email": "botaniqueludique@gmail.com",
          "telephone": "+33609831606",
          "priceRange": "€€",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "currenciesAccepted": "EUR",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "50",
            "bestRating": "5"
          },
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
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Ateliers Botaniques",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Ateliers Particuliers",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Atelier Kokedama", "description": "Création de sphères végétales japonaises" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Atelier Teinture Végétale", "description": "Coloration naturelle de textiles avec des plantes" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Atelier Terrarium", "description": "Création de mini-jardins en bocal" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Atelier Vannerie", "description": "Tressage d'osier et fibres naturelles" } }
                ]
              },
              {
                "@type": "OfferCatalog",
                "name": "Ateliers Professionnels",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Team Building Botanique", "description": "Ateliers de cohésion d'équipe nature" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Animation RSE", "description": "Ateliers éco-responsables pour entreprises" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Animation QVT", "description": "Bien-être au travail par la nature" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Animation EHPAD", "description": "Ateliers adaptés aux seniors" } }
                ]
              }
            ]
          },
          ...data
        };
      
      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": data.serviceType,
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Botanique Ludique",
            "url": "https://botaniqueludique.com"
          },
          "areaServed": ["Paris", "Yvelines (78)", "Hauts-de-Seine (92)"],
          "hasOfferCatalog": data.offers,
          ...data
        };

      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Botanique Ludique",
          "url": "https://botaniqueludique.com",
          "logo": "https://botaniqueludique.com/favicon.png",
          "description": "Ateliers botaniques créatifs et team building nature en Île-de-France",
          "founder": {
            "@type": "Person",
            "name": "Vanessa Charlery",
            "jobTitle": "Ethnobotaniste"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "botaniqueludique@gmail.com",
            "areaServed": "FR",
            "availableLanguage": "French"
          },
          ...data
        };

      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Vanessa Charlery",
          "jobTitle": "Ethnobotaniste et Anthropologue",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "EHESS - École des Hautes Études en Sciences Sociales"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Botanique Ludique"
          },
          "knowsAbout": ["Ethnobotanique", "Anthropologie", "Botanique", "Art végétal"],
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
          "offers": {
            "@type": "Offer",
            "category": "Atelier botanique",
            "priceCurrency": "EUR"
          },
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

      case 'Event':
        return {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": data.name,
          "description": data.description,
          "startDate": data.startDate,
          "endDate": data.endDate,
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": data.locationName,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": data.city,
              "addressRegion": "Île-de-France",
              "addressCountry": "FR"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Botanique Ludique",
            "url": "https://botaniqueludique.com"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString()
          },
          ...data
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
