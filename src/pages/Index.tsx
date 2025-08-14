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
      <section className="relative overflow-hidden bg-hero min-h-[90vh] flex items-center">
        <div className="container grid md:grid-cols-2 gap-12 py-24">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Premium Healthcare Equipment
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Trusted medical devices for home and clinic: diagnostics, monitoring, respiratory and mobility solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="hover-lift" onClick={() => (window.location.href = "/catalog")}>
                Shop Now
              </Button>
              <Button variant="glass" size="lg" className="hover-lift" onClick={() => (window.location.href = "#about")}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="Healthcare equipment assortment hero image" 
              className="relative rounded-2xl shadow-xl hover-lift floating-animation" 
            />
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular medical equipment, carefully selected for quality and reliability.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, index) => (
            <div 
              key={p.id} 
              className="group elegant-shadow rounded-2xl border border-border/50 bg-card p-6 hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={p.image} 
                  alt={`${p.name} product image`} 
                  className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{p.name}</h3>
                  <div className="text-2xl font-bold text-primary mt-1">${p.price.toFixed(2)}</div>
                </div>
                <Button 
                  variant="accent" 
                  className="w-full" 
                  onClick={() => (window.location.href = `/product/${p.slug}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-secondary/30 py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VitalCare?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality medical equipment with exceptional service.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality You Can Trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clinically validated devices sourced from reputable manufacturers with rigorous quality control.
                </p>
              </div>
            </div>
            <div className="text-center group">
              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dispatch within 24 hours with tracked delivery on all orders. Express options available.
                </p>
              </div>
            </div>
            <div className="text-center group">
              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our specialized team is ready to assist with product selection, usage, and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
