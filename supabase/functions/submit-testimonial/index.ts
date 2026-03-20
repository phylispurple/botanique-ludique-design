import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const testimonialSchema = z.object({
  name: z.string().trim().min(2).max(100),
  role: z.string().trim().min(2).max(100),
  workshop: z.string().trim().min(2).max(100),
  content: z.string().trim().min(10).max(1000),
  rating: z.number().int().min(1).max(5),
});

const escapeHtml = (text: string): string => {
  return text.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase credentials");
      return new Response(
        JSON.stringify({ success: false, error: "Internal server error." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Rate limit check
    const clientIp = getClientIp(req);
    const { data: isAllowed, error: rlError } = await supabase.rpc('check_rate_limit', {
      p_ip_address: clientIp,
      p_endpoint: "submit-testimonial",
      p_max_requests: 5,
      p_window_minutes: 60
    });

    if (rlError) {
      console.error("Rate limit check error:", rlError);
    }

    if (isAllowed === false) {
      return new Response(
        JSON.stringify({ success: false, error: "Trop de requêtes. Veuillez réessayer dans une heure." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate input
    const body = await req.json();
    const validationResult = testimonialSchema.safeParse(body);

    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Données invalides." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, role, workshop, content, rating } = validationResult.data;

    // Insert testimonial (approved defaults to false via DB default)
    const { error: insertError } = await supabase
      .from("testimonials")
      .insert([{ name, role, workshop, content, rating, approved: false }]);

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ success: false, error: "Erreur lors de l'enregistrement." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email notification (non-blocking)
    try {
      const resendKey = Deno.env.get('RESEND_API_KEY');
      if (resendKey) {
        const resend = new Resend(resendKey);
        const stars = '⭐'.repeat(rating);
        await resend.emails.send({
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
                Ce témoignage est en attente de modération.
              </p>
            </div>
          `,
        });
      }
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("submit-testimonial error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
