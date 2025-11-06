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
    <div className="bg-sage/10 rounded-lg p-6 md:p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Mail className="w-6 h-6 text-sage" />
          <h3 
            className="text-2xl md:text-3xl" 
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}
          >
            Restez informé·e
          </h3>
        </div>
        <p className="text-sm md:text-base text-charcoal/70 mb-4">
          Recevez nos actualités et nouveaux ateliers
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
