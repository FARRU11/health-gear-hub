import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { items, remove, update, count, total } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover-lift transition-all duration-300">
          <div className="rounded-xl p-3 bg-primary-gradient shadow-md">
            <Stethoscope className="size-6 text-white" aria-hidden />
          </div>
          <span className="font-bold tracking-tight text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            VitalCare Medical
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `transition-elegant px-3 py-2 rounded-lg ${isActive 
                ? "text-primary bg-primary/10" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/catalog" 
            className={({ isActive }) => 
              `transition-elegant px-3 py-2 rounded-lg ${isActive 
                ? "text-primary bg-primary/10" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`
            }
          >
            Shop
          </NavLink>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-elegant px-3 py-2 rounded-lg hover:bg-secondary/50">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-elegant px-3 py-2 rounded-lg hover:bg-secondary/50">Contact</a>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="glass" 
              size="icon" 
              className="relative hover-glow" 
              aria-label={`Open cart with ${count} items`}
            >
              <ShoppingCart />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                  {count}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[420px] max-w-full">
            <SheetHeader className="pb-6">
              <SheetTitle className="text-2xl font-bold">Your Cart</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              ) : (
                <div className="space-y-6">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                      <img 
                        src={product.image} 
                        alt={`${product.name} product image`} 
                        className="h-16 w-16 rounded-lg object-cover shadow-sm" 
                        loading="lazy" 
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{product.name}</div>
                        <div className="text-lg font-bold text-primary">${product.price.toFixed(2)}</div>
                        <div className="mt-3 flex items-center gap-3">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8 w-8 p-0" 
                            onClick={() => update(product.id, Math.max(1, quantity - 1))}
                          >
                            -
                          </Button>
                          <span className="font-medium text-sm w-8 text-center">{quantity}</span>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8 w-8 p-0" 
                            onClick={() => update(product.id, quantity + 1)}
                          >
                            +
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-destructive hover:text-destructive/90 ml-auto" 
                            onClick={() => remove(product.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Separator className="my-6" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-lg">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-2xl text-primary">${total.toFixed(2)}</span>
                    </div>
                    <Button variant="hero" size="lg" className="w-full" onClick={() => { navigate("/catalog"); }}>
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
