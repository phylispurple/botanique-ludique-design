import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import TraitDessine from "@/components/TraitDessine";

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
    <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-[120px] bg-background overflow-x-clip">
      {/* taches organiques en fond */}
      <div
        className="absolute -left-24 top-24 w-[420px] h-[420px] bg-[hsl(var(--olive-light))]/25 pointer-events-none"
        style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-10 w-[360px] h-[360px] bg-accent/15 pointer-events-none"
        style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label block mb-3">Retours d'expérience</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mb-3">
            Ce qu'ils<br /><span className="md:ml-16">en <span className="text-primary">disent</span></span>
          </h2>
          <TraitDessine className="mb-16 md:mb-20 md:ml-16" color="hsl(var(--accent))" variant={2} />
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
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start">
            {testimonials.slice(0, 3).map((testimonial, index) => {
              const look = CARD_LOOKS[index % CARD_LOOKS.length];
              return (
                <AnimatedSection key={testimonial.id} delay={index * 120} className={look.offset}>
                  <figure
                    className={`relative p-8 md:p-9 pt-14 border-brutal shadow-brutal ${look.tone} ${look.tilt} hover:rotate-0 transition-transform duration-300 flex flex-col`}
                    style={{ borderRadius: look.radius }}
                  >
                    {/* grand guillemet en galet */}
                    <span
                      className={`absolute -top-7 left-8 w-14 h-14 flex items-center justify-center border-brutal font-editorial text-4xl leading-none pt-3 ${look.quoteTone}`}
                      style={{ borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }}
                      aria-hidden="true"
                    >
                      “
                    </span>

                    <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} étoiles sur 5`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <blockquote className="text-[16px] md:text-[17px] text-foreground/85 leading-[1.7] mb-7 font-editorial italic">
                      {testimonial.content}
                    </blockquote>

                    <figcaption className="flex items-center gap-3">
                      <span
                        className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-foreground text-[hsl(var(--cream))] font-display text-sm"
                        style={{ borderRadius: "50% 50% 45% 55% / 55% 45% 55% 45%" }}
                        aria-hidden="true"
                      >
                        {initials(testimonial.name)}
                      </span>
                      <span>
                        <span className="block font-display text-sm uppercase tracking-[1px]">{testimonial.name}</span>
                        <span className="block font-mono-brand text-[10px] uppercase tracking-[1.5px] text-foreground/60 mt-0.5">
                          {testimonial.role}
                        </span>
                        <span className="inline-block font-mono-brand text-[9px] uppercase tracking-[1.5px] mt-1.5 px-2.5 py-0.5 rounded-full border-2 border-foreground/70">
                          {testimonial.workshop}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </AnimatedSection>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

/** Chaque carte a sa forme, sa couleur, son inclinaison et sa hauteur (effet « posé à la main »). */
const CARD_LOOKS = [
  { radius: "34px 60px 30px 56px / 56px 30px 60px 34px", tone: "bg-[hsl(var(--cream))]", quoteTone: "bg-accent",
    tilt: "-rotate-[1.5deg]", offset: "" },
  { radius: "60px 30px 58px 34px / 30px 58px 34px 60px", tone: "bg-[hsl(var(--olive-light))]/60", quoteTone: "bg-[hsl(var(--cream))]",
    tilt: "rotate-[1.2deg]", offset: "md:mt-14" },
  { radius: "40px 56px 34px 62px / 62px 36px 56px 40px", tone: "bg-[hsl(var(--cream))]", quoteTone: "bg-[hsl(var(--olive-light))]",
    tilt: "-rotate-[0.8deg]", offset: "md:mt-4" },
];

const initials = (name: string) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");

export default Testimonials;
