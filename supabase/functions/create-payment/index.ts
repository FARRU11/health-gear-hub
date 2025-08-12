import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
  );

  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", { apiVersion: "2023-10-16" });
    if (!Deno.env.get("STRIPE_SECRET_KEY")) throw new Error("Stripe secret key not configured");

    const { data: userData } = await supabaseClient.auth.getUser();
    const user = userData.user;

    const body = await req.json();
    const line_itemsInput = (body?.line_items ?? []) as Array<{ name: string; unit_amount: number; quantity: number }>;
    if (!Array.isArray(line_itemsInput) || line_itemsInput.length === 0) throw new Error("No line items provided");

    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email ?? "guest@example.com",
      line_items: line_itemsInput.map((i) => ({
        price_data: {
          currency: "usd",
          product_data: { name: i.name },
          unit_amount: i.unit_amount,
        },
        quantity: i.quantity,
      })),
      mode: "payment",
      success_url: `${req.headers.get("origin")}/catalog?status=success`,
      cancel_url: `${req.headers.get("origin")}/catalog?status=cancelled`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
