import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
    <section className="py-16 px-4 bg-gradient-to-b from-background to-sand">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 space-y-2">
          <h2 
            className="text-3xl md:text-4xl text-charcoal"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
          >
            Ce qu'ils en disent
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Retours de nos participants
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">Chargement...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">Aucun témoignage pour le moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-sage/5 rounded-bl-full transition-all duration-300 group-hover:bg-sage/10" />
              
              <CardContent className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <Quote className="w-6 h-6 text-sage/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed italic line-clamp-4">
                  "{testimonial.content}"
                </p>

                <div className="pt-3 border-t border-border/50 space-y-0.5">
                  <p className="font-semibold text-charcoal text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-sage font-medium">
                    {testimonial.workshop}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;