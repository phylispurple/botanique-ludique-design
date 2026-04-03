import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "valid" | "already" | "invalid" | "success" | "error">("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }

    const validateToken = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const response = await fetch(
          `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: anonKey } }
        );
        const data = await response.json();

        if (!response.ok) {
          setStatus("invalid");
        } else if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("error");
      }
    };

    validateToken();
  }, [token]);

  const handleUnsubscribe = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });

      if (error) throw error;

      if (data?.success) {
        setStatus("success");
      } else if (data?.reason === "already_unsubscribed") {
        setStatus("already");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen relative bg-background">
      <SEO
        title="Se désabonner | Botanique Ludique"
        description="Gérez vos préférences email."
        canonical="/unsubscribe"
      />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-lg mx-auto text-center">
            {status === "loading" && (
              <p className="text-foreground/60">Vérification en cours…</p>
            )}

            {status === "valid" && (
              <div className="space-y-6">
                <h1 className="text-2xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  Se désabonner
                </h1>
                <p className="text-foreground/70">
                  Souhaitez-vous vous désabonner des emails de Botanique Ludique ?
                </p>
                <button
                  onClick={handleUnsubscribe}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300"
                >
                  Confirmer le désabonnement
                </button>
              </div>
            )}

            {status === "success" && (
              <div className="space-y-4">
                <h1 className="text-2xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  Désabonnement confirmé ✅
                </h1>
                <p className="text-foreground/70">
                  Vous ne recevrez plus d'emails de notre part.
                </p>
              </div>
            )}

            {status === "already" && (
              <div className="space-y-4">
                <h1 className="text-2xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  Déjà désabonné
                </h1>
                <p className="text-foreground/70">
                  Vous êtes déjà désabonné de nos emails.
                </p>
              </div>
            )}

            {status === "invalid" && (
              <div className="space-y-4">
                <h1 className="text-2xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  Lien invalide
                </h1>
                <p className="text-foreground/70">
                  Ce lien de désabonnement n'est pas valide ou a expiré.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="space-y-4">
                <h1 className="text-2xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  Erreur
                </h1>
                <p className="text-foreground/70">
                  Une erreur s'est produite. Veuillez réessayer plus tard.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Unsubscribe;
