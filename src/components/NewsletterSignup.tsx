import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-newsletter-signup", {
        body: { email },
      });

      if (error) throw error;

      toast.success("Merci pour votre inscription ! Nous vous contacterons bientôt.");
      setEmail("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-sage/10 rounded-lg p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-4 text-sage" />
        <h2 
          className="text-3xl md:text-4xl mb-4" 
          style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}
        >
          Restez informé·e
        </h2>
        <p className="text-lg text-charcoal/80 mb-6">
          Inscrivez-vous à notre newsletter pour recevoir nos actualités, nouveaux ateliers et conseils botaniques.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-sage hover:bg-sage-dark text-off-white"
          >
            {isLoading ? "Inscription..." : "S'inscrire"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
