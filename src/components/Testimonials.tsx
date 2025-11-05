import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import TestimonialForm from "./TestimonialForm";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  workshop: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .eq("approved", true)
          .order("created_at", { ascending: false });

        if (error) throw error;

        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de charger les témoignages.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, [toast]);
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

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Chargement des témoignages...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun témoignage pour le moment. Soyez le premier à partager votre expérience !</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
        )}

        <div className="mt-16">
          <TestimonialForm />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;