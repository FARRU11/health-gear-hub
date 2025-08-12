import heroImage from "@/assets/hero-healthcare.jpg";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { products } from "@/data/products";

const Index = () => {
  const featured = products.slice(0, 3);
  return (
    <main>
      <SEO
        title="Healthcare Equipment Store | VitalCare Medical"
        description="Shop premium healthcare equipment: stethoscopes, monitors, thermometers, nebulizers and more."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VitalCare Medical",
          url: "/",
        }}
      />
      <section className="relative overflow-hidden bg-hero">
        <div className="container grid md:grid-cols-2 gap-10 py-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in">Premium Healthcare Equipment</h1>
            <p className="mt-4 text-lg text-muted-foreground animate-fade-in">Trusted devices for home and clinic: diagnostics, monitoring, respiratory and mobility.</p>
            <div className="mt-8 flex gap-3">
              <Button variant="hero" className="hover-scale" onClick={() => (window.location.href = "/catalog")}>Shop Now</Button>
              <Button variant="outline" className="hover-scale" onClick={() => (window.location.href = "#about")}>Learn More</Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img src={heroImage} alt="Healthcare equipment assortment hero image" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Featured Products</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <div key={p.id} className="group rounded-lg border bg-card p-4 hover:shadow-lg transition-shadow hover-scale animate-fade-in">
              <img src={p.image} alt={`${p.name} product image`} className="rounded-md aspect-square object-cover" loading="lazy" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-muted-foreground">${p.price.toFixed(2)}</div>
                </div>
                <Button variant="secondary" className="hover-scale" onClick={() => (window.location.href = `/product/${p.slug}`)}>View</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="container pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="animate-fade-in">
            <h3 className="font-semibold">Quality You Can Trust</h3>
            <p className="mt-2 text-sm text-muted-foreground">Clinically validated devices sourced from reputable manufacturers.</p>
          </div>
          <div className="animate-fade-in">
            <h3 className="font-semibold">Fast Shipping</h3>
            <p className="mt-2 text-sm text-muted-foreground">Dispatch within 24 hours and tracked delivery on all orders.</p>
          </div>
          <div className="animate-fade-in">
            <h3 className="font-semibold">Expert Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">Our team is ready to assist with product selection and usage.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
