import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Où se déroulent les ateliers ?",
      answer: "Les ateliers peuvent se dérouler dans vos locaux (écoles, entreprises, centres sociaux, MJC) ou en extérieur (parcs, jardins, forêts). Je me déplace dans toute l'Île-de-France avec le matériel nécessaire. Pour des projets hors Île-de-France, n'hésitez pas à me contacter."
    },
    {
      question: "Quels sont les publics concernés par vos ateliers ?",
      answer: "Mes ateliers s'adressent à tous : enfants à partir de 6 ans, adolescents, adultes, seniors, personnes en situation de handicap, groupes scolaires, entreprises, et structures socio-culturelles. Chaque atelier est adapté au niveau et aux besoins spécifiques du groupe."
    },
    {
      question: "Quelle est la durée d'un atelier ?",
      answer: "La durée varie selon le type d'atelier et le public : de 1h30 pour les ateliers courts à une demi-journée ou journée complète pour les formations professionnelles. Chaque atelier est modulable selon vos contraintes."
    },
    {
      question: "Combien de participants par atelier ?",
      answer: "Pour garantir une expérience de qualité, je recommande des groupes de 8 à 15 participants pour les ateliers créatifs, et jusqu'à 25 personnes pour les sorties nature et conférences. Des groupes plus importants peuvent être divisés en plusieurs sessions."
    },
    {
      question: "Fournissez-vous le matériel ?",
      answer: "Oui, j'apporte tout le matériel nécessaire : plantes, outils, supports pédagogiques, et fournitures créatives. Pour certains ateliers en extérieur, je demande simplement un accès à un point d'eau."
    },
    {
      question: "Qu'est-ce que l'ethnobotanique ?",
      answer: "L'ethnobotanique est l'étude des relations entre les plantes et les sociétés humaines à travers le temps. Elle explore comment les différentes cultures utilisent, nomment et comprennent les plantes pour l'alimentation, la médecine, les rituels, l'artisanat et plus encore. Mes ateliers intègrent ces savoirs ancestraux dans des pratiques créatives modernes."
    },
    {
      question: "Les ateliers sont-ils accessibles aux débutants ?",
      answer: "Absolument ! Aucune connaissance préalable n'est nécessaire. Chaque atelier commence par une introduction claire et progressive. Mon approche pédagogique ludique permet à chacun d'apprendre à son rythme dans une ambiance bienveillante."
    },
    {
      question: "Comment réserver un atelier ?",
      answer: "Il suffit de me contacter via le formulaire de contact ou par email. Nous échangerons sur vos besoins, le nombre de participants, les dates souhaitées et je vous ferai parvenir un devis personnalisé sous 48h."
    },
    {
      question: "Peut-on repartir avec ses créations ?",
      answer: "Oui ! Chaque participant repart avec sa création : kokedama, terrarium, couronne de fleurs, herbier, sachets parfumés, photos végétales, etc. C'est un souvenir tangible de l'expérience vécue."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Les tarifs varient selon le type d'atelier, la durée, le nombre de participants et la distance de déplacement. Je propose des devis personnalisés adaptés à chaque projet. N'hésitez pas à me contacter pour obtenir une estimation gratuite."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ Ateliers Botaniques | Tarifs, Durée, Réservation ✦ Réponses"
        description="❓ Toutes vos questions sur nos ateliers : tarifs dès 25€, durée 1h30-3h, matériel fourni, déplacement IDF. Trouvez votre réponse ou contactez-nous !"
        keywords="FAQ ateliers botaniques, questions ethnobotanique, tarifs ateliers nature, réservation atelier botanique"
        canonical="/faq"
      />
      <SchemaOrg 
        type="FAQPage"
        data={{
          questions: faqs
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <HelpCircle className="w-12 h-12" style={{ color: '#A7B795' }} />
            <Leaf className="w-8 h-8" style={{ color: '#5D653A' }} />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-6 animate-fade-in" style={{ color: '#5D653A' }}>
            Questions Fréquentes
          </h1>
          
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in mb-4" style={{ animationDelay: '0.1s' }}>
            Vous trouverez ici les réponses aux questions les plus courantes concernant mes ateliers d'ethnobotanique et de créations végétales.
          </p>
          <p className="text-center text-sm font-medium animate-fade-in" style={{ color: '#A7B795', animationDelay: '0.2s' }}>
            📍 Interventions dans toute l'Île-de-France
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline" style={{ color: '#5D653A' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: '#5D653A' }}>
            Vous avez d'autres questions ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            N'hésitez pas à me contacter directement. Je serai ravie d'échanger avec vous sur votre projet d'atelier botanique.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: '#A7B795',
              color: '#FDFEF8'
            }}
          >
            Me Contacter
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
