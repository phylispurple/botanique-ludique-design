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

const contactEmailSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().max(200, "Subject must be less than 200 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const escapeHtml = (text: string): string => {
  return text.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return entities[char] || char;
  });
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    // Validate input with Zod
    const validationResult = contactEmailSchema.safeParse(body);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid input data",
          details: validationResult.error.issues 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const { name, email, subject, message } = validationResult.data;

    console.log("Sending contact email from:", email);

    // Send email to botaniqueludique@gmail.com
    const emailResponse = await resend.emails.send({
      from: "Botanique Ludique <onboarding@resend.dev>",
      replyTo: email,
      to: ["botaniqueludique@gmail.com"],
      subject: `[Botanique Ludique] ${subject || "Nouveau message de contact"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #A7B795;">Nouveau message reçu via le formulaire de contact</h2>
          
          <div style="background-color: #F7F7EB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom :</strong> ${escapeHtml(name)}</p>
            <p style="margin: 10px 0;"><strong>Email :</strong> ${escapeHtml(email)}</p>
            <p style="margin: 10px 0;"><strong>Sujet :</strong> ${escapeHtml(subject || "Non spécifié")}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #A7B795; margin: 20px 0;">
            <h3 style="color: #3D3D2E; margin-top: 0;">Message :</h3>
            <p style="color: #3D3D2E; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #C9D2B5; margin: 30px 0;" />
          
          <p style="color: #5D653A; font-size: 14px;">
            <strong>Pour répondre :</strong> Répondez simplement à cet email, il est configuré avec l'adresse de l'expéditeur.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
