import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterSignupRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: NewsletterSignupRequest = await req.json();

    console.log("Newsletter signup request received for:", email);

    const emailResponse = await resend.emails.send({
      from: "Botanique Ludique <onboarding@resend.dev>",
      to: ["botaniqueludique@gmail.com"],
      subject: "Nouvelle inscription à la newsletter",
      html: `
        <h1>Nouvelle inscription à votre newsletter</h1>
        <p>Une personne souhaite s'inscrire à votre newsletter :</p>
        <p><strong>Email :</strong> ${email}</p>
        <p>Pensez à ajouter cette adresse à votre liste de diffusion.</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Cet email a été généré automatiquement depuis votre site Botanique Ludique.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-newsletter-signup function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
