import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Professeure des écoles",
    content: "Les ateliers de Vanessa ont transformé notre approche pédagogique. Mes élèves ont découvert l'ethnobotanique de manière ludique et créative. Un vrai succès !",
    rating: 5,
    workshop: "Bombes de graines"
  },
  {
    name: "Camille D.",
    role: "Animatrice MJC",
    content: "Une approche professionnelle et passionnante. Vanessa sait transmettre son savoir avec pédagogie. Les participants repartent enrichis culturellement et créativement.",
    rating: 5,
    workshop: "Teinture végétale"
  },
  {
    name: "Jean-Marc L.",
    role: "Responsable RSE",
    content: "Nous avons organisé plusieurs ateliers pour nos équipes. L'alliance entre art et botanique a créé une dynamique formidable. Une expérience mémorable !",
    rating: 5,
    workshop: "Kokedama"
  },
  {
    name: "Marie R.",
    role: "Particulière",
    content: "J'ai participé à l'atelier terrarium et j'ai adoré ! Au-delà de la création, j'ai appris tant de choses sur les plantes et leurs usages traditionnels.",
    rating: 5,
    workshop: "Terrarium"
  },
  {
    name: "Thomas B.",
    role: "Directeur d'établissement",
    content: "Le parcours de sensibilisation sur les espèces exotiques envahissantes en collège a été un véritable succès pédagogique. Les élèves ont été captivés par cette approche concrète et engagée.",
    rating: 5,
    workshop: "Sensibilisation EEE"
  },
  {
    name: "Élise M.",
    role: "Animatrice senior",
    content: "Les résidents ont été ravis de l'atelier couronnes de fleurs. Vanessa a su adapter le contenu avec bienveillance et expertise. Merci !",
    rating: 5,
    workshop: "Couronnes de fleurs"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-sand">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl md:text-5xl text-charcoal"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
          >
            Ce qu'ils en disent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les retours de nos participants, professionnels et institutions 
            qui ont exploré l'ethnobotanique à travers nos ateliers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-sage/5 rounded-bl-full transition-all duration-300 group-hover:bg-sage/10" />
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <Quote className="w-8 h-8 text-sage/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border/50 space-y-1">
                  <p className="font-semibold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-sage font-medium">
                    Atelier : {testimonial.workshop}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;