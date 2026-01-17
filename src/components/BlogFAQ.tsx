import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQProps {
  items: FAQItem[];
  schemaId: string;
}

const BlogFAQ = ({ items, schemaId }: BlogFAQProps) => {
  // Generate FAQ Schema.org structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="animate-fade-in mt-12 border-t border-charcoal/10 pt-8">
      {/* Schema.org FAQ structured data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      
      <h2 className="flex items-center gap-3 text-xl md:text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
        <HelpCircle className="w-6 h-6 text-sage" />
        Questions Fréquentes
      </h2>
      
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`faq-${index}`}
            className="bg-sand/30 rounded-lg px-6 border-none"
          >
            <AccordionTrigger className="text-left text-charcoal hover:text-sage hover:no-underline py-4">
              <span className="text-base font-medium">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-charcoal/80 leading-relaxed pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default BlogFAQ;
