import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/StaggerAnimation";

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
    <section className="py-32 px-6 md:px-16 lg:px-[120px] bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection variant="reveal">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            {/* Left — Title column */}
            <div>
              <span className="section-label block mb-3">Retours d'expérience</span>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.9] tracking-[-1px] mb-6">
                Ce qu'ils<br />en disent
              </h2>
              <p className="text-[15px] text-foreground/50 leading-relaxed">
                Découvrez les retours de nos participants sur leurs ateliers botaniques.
              </p>
            </div>

            {/* Right — Testimonials */}
            <div>
              {isLoading ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-sm font-mono-brand uppercase tracking-[2px]">Chargement...</p>
                </div>
              ) : testimonials.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-sm font-mono-brand uppercase tracking-[2px]">Aucun témoignage pour le moment.</p>
                </div>
              ) : (
                <StaggerContainer className="flex flex-col gap-0" staggerDelay={0.15}>
                  {testimonials.slice(0, 3).map((testimonial) => (
                    <StaggerItem key={testimonial.id}>
                      <div className="py-8 border-b-2 border-foreground/8 last:border-b-0 group hover:bg-green-pale/30 transition-colors duration-300 px-6 -mx-6">
                        <div className="flex items-start gap-8">
                          {/* Quote */}
                          <div className="flex-1">
                            <p className="text-[17px] text-foreground/75 leading-[1.8] font-editorial italic mb-4">
                              « {testimonial.content} »
                            </p>
                            <div className="flex items-center gap-4">
                              <div>
                                <p className="font-display text-sm uppercase tracking-[1px]">
                                  {testimonial.name}
                                </p>
                                <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-muted-foreground">
                                  {testimonial.role} — {testimonial.workshop}
                                </p>
                              </div>
                              <div className="flex gap-0.5 ml-auto">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
