import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface B2BQuoteRequest {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  eventType: string;
  date?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, organization, email, phone, eventType, date, message }: B2BQuoteRequest = await req.json();

    console.log("Sending B2B quote request from:", organization);

    // Send email to botaniqueludique@gmail.com
    const emailResponse = await resend.emails.send({
      from: "Botanique Ludique <onboarding@resend.dev>",
      replyTo: email,
      to: ["botaniqueludique@gmail.com"],
      subject: `[Demande B2B] ${eventType} - ${organization}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #A7B795; border-bottom: 3px solid #C9D2B5; padding-bottom: 10px;">
            💼 Nouvelle demande de devis professionnel
          </h2>
          
          <div style="background-color: #F7F7EB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5D653A; margin-top: 0;">Informations de contact</h3>
            <p style="margin: 10px 0;"><strong>Nom :</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Organisation :</strong> <span style="color: #5D653A; font-weight: 600;">${organization}</span></p>
            <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #A7B795;">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Téléphone :</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background-color: #E8F1E3; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5D653A; margin-top: 0;">Détails de la demande</h3>
            <p style="margin: 10px 0;"><strong>Type d'événement :</strong> <span style="color: #3D3D2E; font-weight: 600;">${eventType}</span></p>
            ${date ? `<p style="margin: 10px 0;"><strong>Date souhaitée :</strong> ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>` : '<p style="margin: 10px 0;"><strong>Date souhaitée :</strong> Non spécifiée</p>'}
          </div>
          
          ${message ? `
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #A7B795; margin: 20px 0;">
            <h3 style="color: #3D3D2E; margin-top: 0;">Description du projet :</h3>
            <p style="color: #3D3D2E; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <hr style="border: none; border-top: 1px solid #C9D2B5; margin: 30px 0;" />
          
          <div style="background-color: #FFF9E6; padding: 15px; border-radius: 8px; border-left: 4px solid #F4D03F;">
            <p style="margin: 0; color: #5D653A;">
              <strong>⏰ Action requise :</strong> Répondre dans les 48h pour maintenir un excellent taux de satisfaction client B2B.
            </p>
          </div>
          
          <p style="color: #5D653A; font-size: 14px; margin-top: 20px;">
            <strong>Pour répondre :</strong> Répondez simplement à cet email - l'adresse du client est configurée en reply-to.
          </p>
        </div>
      `,
    });

    console.log("B2B quote email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-b2b-quote-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
