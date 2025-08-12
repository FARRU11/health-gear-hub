import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

const Catalog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const { add } = useCart();

  const filtered = useMemo(() => {
    return products.filter((p) =>
      (category === "all" || p.category === category) &&
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, category]);

  return (
    <main className="container py-10">
      <SEO
        title="Shop Healthcare Equipment | VitalCare Medical"
        description="Browse premium healthcare equipment: monitors, diagnostics, respiratory and mobility devices."
        canonical="/catalog"
      />
      <h1 className="text-3xl font-bold tracking-tight">Healthcare Equipment Catalog</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_240px]">
        <Input
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search products"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger aria-label="Filter by category">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Monitoring">Monitoring</SelectItem>
            <SelectItem value="Diagnostics">Diagnostics</SelectItem>
            <SelectItem value="Respiratory">Respiratory</SelectItem>
            <SelectItem value="Mobility">Mobility</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Card key={p.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={p.image} alt={`${p.name} product image`} className="aspect-square w-full rounded-md object-cover" loading="lazy" />
              <p className="mt-3 text-sm text-muted-foreground">{p.shortDesc}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="font-semibold">${p.price.toFixed(2)}</div>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => (window.location.href = `/product/${p.slug}`)}>Details</Button>
                <Button variant="hero" onClick={() => { add(p, 1); toast({ title: "Added to cart", description: p.name }); }}>Add</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Catalog;
