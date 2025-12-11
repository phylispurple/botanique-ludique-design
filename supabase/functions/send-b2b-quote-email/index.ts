import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Zod schema for B2B quote validation
const b2bQuoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  organization: z.string().trim().min(1, "Organization is required").max(200, "Organization name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().max(20, "Phone number too long").optional(),
  eventType: z.string().trim().min(1, "Event type is required").max(100, "Event type too long"),
  date: z.string().trim().max(50, "Date too long").optional(),
  message: z.string().trim().max(2000, "Message too long").optional(),
});

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    // Validate input with Zod
    const validationResult = b2bQuoteSchema.safeParse(body);
    
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Validation failed",
          details: validationResult.error.errors 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, organization, email, phone, eventType, date, message } = validationResult.data;

    // Escape all user inputs for HTML
    const safeName = escapeHtml(name);
    const safeOrganization = escapeHtml(organization);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : null;
    const safeEventType = escapeHtml(eventType);
    const safeMessage = message ? escapeHtml(message) : null;

    console.log("Sending B2B quote request from:", safeOrganization);

    // Format date if provided
    let formattedDate = "Non spécifiée";
    if (date) {
      try {
        formattedDate = new Date(date).toLocaleDateString('fr-FR', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      } catch {
        formattedDate = escapeHtml(date);
      }
    }

    // Send email to botaniqueludique@gmail.com
    const emailResponse = await resend.emails.send({
      from: "Botanique Ludique <onboarding@resend.dev>",
      replyTo: email,
      to: ["botaniqueludique@gmail.com"],
      subject: `[Demande B2B] ${safeEventType} - ${safeOrganization}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #A7B795; border-bottom: 3px solid #C9D2B5; padding-bottom: 10px;">
            💼 Nouvelle demande de devis professionnel
          </h2>
          
          <div style="background-color: #F7F7EB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5D653A; margin-top: 0;">Informations de contact</h3>
            <p style="margin: 10px 0;"><strong>Nom :</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Organisation :</strong> <span style="color: #5D653A; font-weight: 600;">${safeOrganization}</span></p>
            <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${safeEmail}" style="color: #A7B795;">${safeEmail}</a></p>
            ${safePhone ? `<p style="margin: 10px 0;"><strong>Téléphone :</strong> ${safePhone}</p>` : ''}
          </div>
          
          <div style="background-color: #E8F1E3; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5D653A; margin-top: 0;">Détails de la demande</h3>
            <p style="margin: 10px 0;"><strong>Type d'événement :</strong> <span style="color: #3D3D2E; font-weight: 600;">${safeEventType}</span></p>
            <p style="margin: 10px 0;"><strong>Date souhaitée :</strong> ${formattedDate}</p>
          </div>
          
          ${safeMessage ? `
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #A7B795; margin: 20px 0;">
            <h3 style="color: #3D3D2E; margin-top: 0;">Description du projet :</h3>
            <p style="color: #3D3D2E; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
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
