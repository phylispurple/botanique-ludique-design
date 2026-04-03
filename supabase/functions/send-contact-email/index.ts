import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
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
  sendConfirmation: z.boolean().optional(),
  userMessage: z.string().trim().max(500).optional(),
});

const extractFirstName = (fullName: string): string => {
  const trimmedName = fullName.trim();
  if (!trimmedName) return "";

  return trimmedName.split(/\s+/)[0] || trimmedName;
};

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

const getClientIp = (req: Request): string => {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
         req.headers.get("x-real-ip") ||
         req.headers.get("cf-connecting-ip") ||
         "unknown";
};

const checkRateLimit = async (ip: string, endpoint: string): Promise<boolean> => {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase credentials for rate limiting");
      return true;
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { data, error } = await supabase.rpc('check_rate_limit', {
      p_ip_address: ip,
      p_endpoint: endpoint,
      p_max_requests: 5,
      p_window_minutes: 60
    });
    
    if (error) {
      console.error("Rate limit check error:", error);
      return true;
    }
    
    return data === true;
  } catch (error) {
    console.error("Rate limit exception:", error);
    return true;
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIp = getClientIp(req);
    const isAllowed = await checkRateLimit(clientIp, "send-contact-email");
    
    if (!isAllowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Trop de requêtes. Veuillez réessayer dans une heure." 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const body = await req.json();
    
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
    
    const { name, email, subject, message, sendConfirmation } = validationResult.data;
    const firstName = extractFirstName(name);

    console.log("Sending contact email from:", email);

    // Send email to admin
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

    // Send confirmation email to the sender if requested
    if (sendConfirmation) {
      try {
        await resend.emails.send({
          from: "Botanique Ludique <onboarding@resend.dev>",
          to: [email],
          replyTo: "contact@botaniqueludique.com",
          subject: "Confirmation de ton inscription – Atelier Wardian Case 🌿",
          html: `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <div style="background-color: #F7F7EB; padding: 30px 20px; text-align: center;">
                <h1 style="color: #3D3D2E; font-size: 24px; margin: 0;">🌿 Botanique Ludique</h1>
              </div>
              
              <div style="padding: 30px 20px;">
                <h2 style="color: #3D3D2E; font-size: 20px;">Bonjour ${escapeHtml(firstName || name)} !</h2>
                
                <p style="color: #555; line-height: 1.6; font-size: 15px;">
                  Merci beaucoup pour ton inscription 🌿
                </p>
                
                <p style="color: #555; line-height: 1.6; font-size: 15px;">
                  Je te promets que l'on passera un bon moment à parler de l'histoire des terrariums, et que la création te plaira.
                </p>

                <div style="background-color: #F7F7EB; padding: 15px 20px; margin: 25px 0; border-left: 4px solid #A7B795;">
                  <p style="color: #3D3D2E; margin: 0 0 10px; font-size: 14px;">
                    <strong>Atelier :</strong> ${escapeHtml(subject || "Inscription")}
                  </p>
                  <p style="color: #3D3D2E; margin: 0; font-size: 14px; line-height: 1.6;">
                    Il te suffira de me régler directement en liquide le jour de l'atelier, ou via PayPal avant.
                  </p>
                </div>

                <p style="color: #555; line-height: 1.6; font-size: 15px;">
                  N'hésite pas à proposer l'atelier à d'autres amis qui pourraient être intéressés par ce sujet.
                </p>

                ${validationResult.data.userMessage ? `
                <div style="background-color: #fff8e1; padding: 15px 20px; margin: 25px 0; border-left: 4px solid #f0c040;">
                  <p style="color: #3D3D2E; margin: 0 0 8px; font-size: 14px; font-style: italic;">
                    Ton message : « ${escapeHtml(validationResult.data.userMessage)} »
                  </p>
                  <p style="color: #555; margin: 0; font-size: 14px;">
                    Merci beaucoup pour ton message, je te réponds au plus vite !
                  </p>
                </div>
                ` : ''}
                
                <p style="color: #555; line-height: 1.6; font-size: 15px;">
                  Si tu as des questions, n'hésite pas à me répondre directement à ce mail.
                </p>
                
                <p style="color: #555; line-height: 1.6; font-size: 15px;">
                  À très bientôt,<br/>
                  <strong style="color: #3D3D2E;">Vanessa — Botanique Ludique</strong>
                </p>
              </div>
              
              <div style="background-color: #F7F7EB; padding: 15px 20px; text-align: center;">
                <p style="color: #888; font-size: 12px; margin: 0;">
                  Botanique Ludique · Ateliers botaniques en Île-de-France<br/>
                  <a href="https://botaniqueludique.com" style="color: #A7B795;">botaniqueludique.com</a>
                </p>
              </div>
            </div>
          `,
        });
        console.log("Confirmation email sent to:", email);
      } catch (confirmError) {
        console.error("Failed to send confirmation email:", confirmError);
        // Don't fail the whole request if confirmation fails
      }
    }

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
