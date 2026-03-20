import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonialSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  role: z.string()
    .trim()
    .min(2, { message: "Votre rôle/fonction doit contenir au moins 2 caractères" })
    .max(100, { message: "Le rôle ne peut pas dépasser 100 caractères" }),
  workshop: z.string()
    .trim()
    .min(2, { message: "Le nom de l'atelier doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom de l'atelier ne peut pas dépasser 100 caractères" }),
  content: z.string()
    .trim()
    .min(10, { message: "Votre témoignage doit contenir au moins 10 caractères" })
    .max(1000, { message: "Le témoignage ne peut pas dépasser 1000 caractères" }),
  rating: z.number()
    .min(1, { message: "Veuillez donner une note" })
    .max(5, { message: "La note maximum est 5" }),
});

type TestimonialFormData = z.infer<typeof testimonialSchema>;

const TestimonialForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const form = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      role: "",
      workshop: "",
      content: "",
      rating: 0,
    },
  });

  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);

    try {
      const { data: response, error } = await supabase.functions.invoke('submit-testimonial', {
        body: {
          name: data.name,
          role: data.role,
          workshop: data.workshop,
          content: data.content,
          rating: data.rating,
        }
      });

      if (error) throw error;
      if (response && !response.success) {
        throw new Error(response.error || "Une erreur s'est produite.");
      }

      toast({
        title: "Témoignage envoyé !",
        description: "Merci pour votre avis. Il sera publié après validation.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentRating = form.watch("rating");

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle 
          className="text-3xl text-charcoal"
          style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
        >
          Partagez votre expérience
        </CardTitle>
        <CardDescription>
          Vous avez participé à un atelier ? Laissez-nous votre témoignage !
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom et initiale du nom *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sophie M." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre fonction/statut *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Professeure des écoles" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="workshop"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de l'atelier *</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Bombes de graines" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre note *</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => field.onChange(rating)}
                          onMouseEnter={() => setHoveredRating(rating)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              rating <= (hoveredRating || currentRating)
                                ? "fill-accent text-accent"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre témoignage *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Partagez votre expérience avec cet atelier..."
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer mon témoignage"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TestimonialForm;
