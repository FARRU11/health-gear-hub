import type { CartItem } from "@/contexts/CartContext";

export async function checkoutWithStripe(items: CartItem[]): Promise<string | null> {
  try {
    if (!items.length) return null;
    const line_items = items.map(({ product, quantity }) => ({
      name: product.name,
      unit_amount: Math.round(product.price * 100),
      quantity,
    }));

    const baseUrl = import.meta.env.VITE_SUPABASE_URL as string;
    const anon = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
    if (!baseUrl) return null;

    const res = await fetch(`${baseUrl}/functions/v1/create-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': anon || '',
      },
      body: JSON.stringify({ line_items }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.url ?? null;
  } catch (e) {
    return null;
  }
}
