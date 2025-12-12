import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const testimonialNotificationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  role: z.string().trim().min(1, "Role is required").max(100, "Role must be less than 100 characters"),
  workshop: z.string().trim().min(1, "Workshop is required").max(200, "Workshop must be less than 200 characters"),
  content: z.string().trim().min(1, "Content is required").max(1000, "Content must be less than 1000 characters"),
  rating: z.number().int().min(1).max(5, "Rating must be between 1 and 5"),
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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check rate limit
    const clientIp = getClientIp(req);
    const isAllowed = await checkRateLimit(clientIp, "send-testimonial-notification");
    
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
    
    // Validate input with Zod
    const validationResult = testimonialNotificationSchema.safeParse(body);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ 
          error: "Invalid testimonial data",
          details: validationResult.error.issues 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const { name, role, workshop, content, rating } = validationResult.data;

    console.log('Sending testimonial notification:', { name, role, workshop, rating });

    const stars = '⭐'.repeat(rating);

    const emailResponse = await resend.emails.send({
      from: "Botanique Ludique <onboarding@resend.dev>",
      to: ["botaniqueludique@gmail.com"],
      subject: "Nouveau témoignage soumis - Botanique Ludique",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2d5016;">Nouveau témoignage reçu</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #2d5016; margin-top: 0;">Détails du témoignage</h2>
            
            <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
            <p><strong>Rôle :</strong> ${escapeHtml(role)}</p>
            <p><strong>Atelier :</strong> ${escapeHtml(workshop)}</p>
            <p><strong>Note :</strong> ${stars} (${rating}/5)</p>
            
            <div style="margin-top: 15px;">
              <strong>Commentaire :</strong>
              <p style="margin-top: 8px; padding: 15px; background-color: white; border-left: 3px solid #2d5016; border-radius: 4px;">
                ${escapeHtml(content)}
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
