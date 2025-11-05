import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TestimonialNotification {
  name: string;
  role: string;
  workshop: string;
  content: string;
  rating: number;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, role, workshop, content, rating }: TestimonialNotification = await req.json();

    console.log('Sending testimonial notification:', { name, role, workshop, rating });

    const stars = '⭐'.repeat(rating);

    const emailResponse = await resend.emails.send({
      from: "Botanique Ludique <onboarding@resend.dev>",
      to: ["vanessa.charlery@gmail.com"], // Email de l'administrateur
      subject: "Nouveau témoignage soumis - Botanique Ludique",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2d5016;">Nouveau témoignage reçu</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #2d5016; margin-top: 0;">Détails du témoignage</h2>
            
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Rôle :</strong> ${role}</p>
            <p><strong>Atelier :</strong> ${workshop}</p>
            <p><strong>Note :</strong> ${stars} (${rating}/5)</p>
            
            <div style="margin-top: 15px;">
              <strong>Commentaire :</strong>
              <p style="margin-top: 8px; padding: 15px; background-color: white; border-left: 3px solid #2d5016; border-radius: 4px;">
                ${content}
              </p>
            </div>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Ce témoignage est en attente de modération. Connectez-vous à votre interface d'administration pour l'approuver ou le rejeter.
          </p>
        </div>
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
    console.error("Error in send-testimonial-notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});