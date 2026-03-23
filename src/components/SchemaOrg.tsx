import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type: 'LocalBusiness' | 'EducationalOrganization' | 'Course' | 'FAQPage' | 'Service' | 'Event' | 'Organization' | 'Person' | 'Article' | 'BreadcrumbList';
  data: any;
}

export const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  const getSchema = () => {
    switch (type) {
      case 'EducationalOrganization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "@id": "https://botaniqueludique.com",
          "name": "Botanique Ludique",
          "url": "https://botaniqueludique.com",
          "logo": "https://botaniqueludique.com/favicon.png",
          "image": "https://botaniqueludique.com/hero-botanical.jpg",
          "description": "Association de médiation culturelle et scientifique autour du vivant. Ateliers de botanique pour scolaires, entreprises et grand public. Conférences et balades guidées en Île-de-France.",
          "founder": {
            "@type": "Person",
            "name": "Vanessa Charlery",
            "jobTitle": "Animatrice ethnobotaniste et Artiste Photographe",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "EHESS - École des Hautes Études en Sciences Sociales"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Le Pecq",
            "postalCode": "78230",
            "addressRegion": "Yvelines",
            "addressCountry": "FR"
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Yvelines", "sameAs": "https://fr.wikipedia.org/wiki/Yvelines" },
            { "@type": "AdministrativeArea", "name": "Île-de-France", "sameAs": "https://fr.wikipedia.org/wiki/%C3%8Ele-de-France" },
            { "@type": "City", "name": "Paris", "sameAs": "https://fr.wikipedia.org/wiki/Paris" },
            { "@type": "AdministrativeArea", "name": "Hauts-de-Seine", "sameAs": "https://fr.wikipedia.org/wiki/Hauts-de-Seine" },
            { "@type": "AdministrativeArea", "name": "Val-d'Oise", "sameAs": "https://fr.wikipedia.org/wiki/Val-d%27Oise" },
            { "@type": "City", "name": "Le Pecq" },
            { "@type": "City", "name": "Chatou" },
            { "@type": "City", "name": "Saint-Germain-en-Laye" },
            { "@type": "City", "name": "Le Vésinet" },
            { "@type": "City", "name": "Versailles" }
          ],
          "knowsAbout": [
            "Botanique",
            "Écologie",
            "Médiation scientifique",
            "Ateliers scolaires",
            "Conférences",
            "Ethnobotanique",
            "Teinture végétale",
            "Kokedama"
          ],
          "email": "contact@botaniqueludique.com",
          "telephone": "+33609831606",
          "sameAs": [
            "https://www.instagram.com/botanique.ludique/",
            "https://www.linkedin.com/in/vanessa-charlery-a988a8319/"
          ],
          ...data
        };

      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://botaniqueludique.com",
          "name": "Botanique Ludique",
          "image": "https://botaniqueludique.com/hero-botanical.jpg",
          "description": "Association de médiation culturelle et scientifique autour du vivant. Ateliers de botanique, conférences et balades guidées à Paris et en Île-de-France.",
          "founder": {
            "@type": "Person",
            "name": "Vanessa Charlery",
            "jobTitle": "Animatrice ethnobotaniste et Artiste Photographe",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "EHESS - École des Hautes Études en Sciences Sociales"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Le Pecq",
            "postalCode": "78230",
            "addressRegion": "Yvelines",
            "addressCountry": "FR"
          },
          "areaServed": [
            { "@type": "City", "name": "Paris", "sameAs": "https://fr.wikipedia.org/wiki/Paris" },
            { "@type": "AdministrativeArea", "name": "Yvelines", "sameAs": "https://fr.wikipedia.org/wiki/Yvelines" },
            { "@type": "AdministrativeArea", "name": "Hauts-de-Seine", "sameAs": "https://fr.wikipedia.org/wiki/Hauts-de-Seine" },
            { "@type": "AdministrativeArea", "name": "Val-d'Oise", "sameAs": "https://fr.wikipedia.org/wiki/Val-d%27Oise" },
            { "@type": "City", "name": "Chatou" },
            { "@type": "City", "name": "Saint-Germain-en-Laye" },
            { "@type": "City", "name": "Le Vésinet" },
            { "@type": "City", "name": "Le Pecq" },
            { "@type": "City", "name": "Versailles" },
            { "@type": "City", "name": "Boulogne-Billancourt" },
            { "@type": "City", "name": "Nanterre" },
            { "@type": "City", "name": "Rueil-Malmaison" }
          ],
          "knowsAbout": [
            "Botanique",
            "Écologie",
            "Médiation scientifique",
            "Ateliers scolaires",
            "Conférences",
            "Ethnobotanique"
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.8951",
            "longitude": "2.1052"
          },
          "url": "https://botaniqueludique.com",
          "email": "contact@botaniqueludique.com",
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
            "https://www.instagram.com/botanique.ludique/",
            "https://www.linkedin.com/in/vanessa-charlery-a988a8319/"
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
            "@type": "EducationalOrganization",
            "name": "Botanique Ludique",
            "url": "https://botaniqueludique.com"
          },
          "areaServed": ["Paris", "Yvelines (78)", "Hauts-de-Seine (92)", "Val-d'Oise (95)"],
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
          "description": "Association loi 1901 de médiation culturelle et scientifique autour du vivant. Ateliers, conférences, balades botaniques en Île-de-France.",
          "founder": {
            "@type": "Person",
            "name": "Vanessa Charlery",
            "jobTitle": "Ethnobotaniste"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Le Pecq",
            "postalCode": "78230",
            "addressRegion": "Yvelines",
            "addressCountry": "FR"
          },
          "knowsAbout": ["Botanique", "Écologie", "Médiation scientifique", "Ateliers scolaires", "Conférences"],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@botaniqueludique.com",
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
            "@type": "EducationalOrganization",
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
            "name": q.question || q.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer || q.a
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
            "@type": "EducationalOrganization",
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

      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.headline,
          "description": data.description,
          "author": {
            "@type": "Person",
            "name": data.author?.name || "Vanessa Charlery",
            "url": "https://botaniqueludique.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Botanique Ludique",
            "logo": {
              "@type": "ImageObject",
              "url": "https://botaniqueludique.com/favicon.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://botaniqueludique.com/blog/${data.slug || ''}`
          },
          "image": data.image || "https://botaniqueludique.com/og-image.jpg",
          ...data
        };

      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data.items || []).map((item: { name: string; url: string }, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
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