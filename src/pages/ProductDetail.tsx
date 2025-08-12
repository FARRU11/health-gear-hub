import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { SEO } from "@/components/SEO";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { add } = useCart();

  if (!product) return <main className="container py-10">Product not found.</main>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.shortDesc,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <main className="container py-10">
      <SEO
        title={`${product.name} | VitalCare Medical`}
        description={product.shortDesc}
        canonical={`/product/${product.slug}`}
        jsonLd={jsonLd}
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="overflow-hidden">
          <img src={product.image} alt={`${product.name} product image`} className="w-full object-cover" />
        </Card>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.shortDesc}</p>
          <div className="mt-4 text-2xl font-semibold">${product.price.toFixed(2)}</div>
          <div className="mt-6 flex gap-3">
            <Button variant="hero" onClick={() => add(product, 1)}>Add to Cart</Button>
            <Button variant="secondary">Buy Now</Button>
          </div>
          <Card className="mt-8">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold">Details</h2>
              <p className="mt-2 text-sm text-muted-foreground">{product.longDesc}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
