import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CheckCircle, Flower2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import bougieFleursSecheesImage from "@/assets/gallery-bougie-fleurs-sechees.jpg";
import floralWatersImage from "@/assets/workshop-floral-waters.jpg";
import galleryKokedama from "@/assets/gallery-kokedama-garden.webp";

const AtelierFloralParis = () => {
  const faqQuestions = [
    {
      question: "Quelle est la différence entre un atelier floral classique et vos ateliers ?",
      answer: "Les ateliers floraux classiques apprennent une technique de composition. Chez Botanique Ludique, chaque atelier mêle création sensorielle et anthropologie du vivant. Vous repartez avec une création florale et de nouvelles façons de regarder les plantes du quotidien.",
    },
    {
      question: "Quels types d'ateliers floraux proposez-vous à Paris ?",
      answer: "Bougies décorées de fleurs séchées, compositions aromatiques et bouquets de tisanes, kokedama, terrariums végétaux. Tous nos ateliers se déroulent à Paris et en Île-de-France, dans vos locaux ou nos espaces partenaires.",
    },
    {
      question: "Faut-il un niveau particulier pour participer ?",
      answer: "Aucun prérequis. Nos ateliers floraux sont accessibles à toutes et tous, des débutants aux passionnés. Le matériel est fourni intégralement, vous repartez avec votre création.",
    },
    {
      question: "Peut-on organiser un atelier floral en entreprise ou pour un EVJF ?",
      answer: "Oui. Nous intervenons pour des team building, séminaires, EVJF, anniversaires et événements privés. Groupes de 6 à 20 personnes, formules sur-mesure, devis gratuit.",
    },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#F7F7EB" }}>
      <SEO
        title="Atelier Floral à Paris & Île-de-France"
        description="Atelier floral à Paris : bougies fleuries, compositions sensorielles, art végétal. Pour particuliers, EVJF, entreprises. Matériel fourni, tous niveaux."
        keywords="atelier floral, atelier floral paris, atelier art floral, atelier composition florale, cours art floral paris, atelier végétal, art floral paris"
        canonical="/atelier-floral-paris"
        city="Paris"
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Atelier floral",
          name: "Atelier Floral à Paris",
          description:
            "Ateliers floraux à Paris et en Île-de-France : bougies fleuries, compositions aromatiques, art végétal.",
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: faqQuestions }} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Flower2 className="w-12 h-12 text-sage mx-auto mb-6" />
              <h1 className="page-title text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Atelier <span className="text-sage">Floral</span> à Paris & Île-de-France
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Compositions sensorielles, art végétal, fleurs séchées. Pour particuliers, entreprises et événements.
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Loin des cours de fleuristerie classiques, nos <strong>ateliers floraux</strong> mêlent gestes créatifs et
                <strong> anthropologie du vivant</strong>. Vous composez votre création florale tout en découvrant les
                histoires et les voyages des plantes qui l'habitent.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h2
                    className="text-2xl md:text-3xl mb-4"
                    style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
                  >
                    Un atelier d'art floral pas comme les autres
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Notre approche allie le geste créatif d'une <strong>composition florale</strong> à la richesse culturelle de
                    l'ethnobotanique. Chaque fleur, chaque feuille porte une histoire. Vous repartez avec une création
                    unique et une nouvelle façon de regarder le végétal.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Nos ateliers s'adressent aux particuliers (cours art floral, EVJF, anniversaires) comme aux
                    professionnels (team building, séminaires, événements de marque).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  src: bougieFleursSecheesImage,
                  title: "Bougies & Fleurs Séchées",
                  desc: "Atelier floral créatif : bougie artisanale décorée de fleurs séchées, 100% personnalisée.",
                },
                {
                  src: floralWatersImage,
                  title: "Compositions Aromatiques",
                  desc: "Bouquets de tisanes et compositions sensorielles autour des plantes aromatiques.",
                },
                {
                  src: galleryKokedama,
                  title: "Kokedama & Art Végétal",
                  desc: "L'art floral japonais revisité, une sphère de mousse et de plantes vivantes.",
                },
              ].map((a, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={a.src} alt={a.title} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-5 bg-white">
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-sm text-charcoal/70">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sand rounded-lg p-8 mb-16">
              <h2
                className="text-2xl mb-6"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
              >
                Infos pratiques
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Matériel floral fourni intégralement",
                  "Création florale à emporter",
                  "6 à 20 participants",
                  "1h30 à 2h30 selon l'atelier",
                  "Paris et toute l'Île-de-France",
                  "Tous niveaux, aucun prérequis",
                  "Idéal EVJF, anniversaire, team building",
                  "Devis gratuit, réponse rapide",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2
                className="text-2xl md:text-3xl mb-8 text-center"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, color: "#3D3D2E" }}
              >
                Questions fréquentes sur l'atelier floral
              </h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqQuestions.map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg p-6">
                    <h3
                      className="text-lg font-semibold text-charcoal mb-2"
                      style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}
                    >
                      {faq.question}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sage text-off-white rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h2
                className="text-2xl md:text-3xl mb-4"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}
              >
                Envie d'un atelier floral à Paris ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Devis gratuit. Particuliers, entreprises, événements. Paris et Île-de-France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
                >
                  Nous écrire
                </Link>
                <Link
                  to="/workshops"
                  className="inline-flex items-center px-6 py-3 border-2 border-off-white hover:bg-off-white hover:text-charcoal text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
                >
                  Voir tous nos ateliers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierFloralParis;
