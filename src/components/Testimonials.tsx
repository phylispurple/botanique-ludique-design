import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

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
    <section className="py-28 px-6 md:px-16 lg:px-[120px] bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label block mb-3">Retours d'expérience</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mb-14">
            Ce qu'ils<br />en disent
          </h2>
        </AnimatedSection>

        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm font-mono-brand uppercase tracking-[2px]">Chargement...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm font-mono-brand uppercase tracking-[2px]">Aucun témoignage pour le moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-0">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 120}>
                <div className="p-8 md:p-10 border-brutal -mt-[3px] -ml-[3px] hover:bg-green-pale transition-colors duration-300 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[15px] text-foreground/80 leading-[1.75] mb-6 flex-1 font-editorial italic">
                    « {testimonial.content} »
                  </p>

                  {/* Author */}
                  <div className="pt-5 border-t-2 border-foreground/10">
                    <p className="font-display text-sm uppercase tracking-[1px]">
                      {testimonial.name}
                    </p>
                    <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                    <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary mt-0.5">
                      {testimonial.workshop}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
