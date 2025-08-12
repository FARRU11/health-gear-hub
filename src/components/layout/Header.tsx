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
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-md p-2 bg-secondary text-primary">
            <Stethoscope className="size-5" aria-hidden />
          </div>
          <span className="font-bold tracking-tight text-lg">VitalCare Medical</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary" : "text-muted-foreground hover:text-foreground")}>Home</NavLink>
          <NavLink to="/catalog" className={({ isActive }) => (isActive ? "text-primary" : "text-muted-foreground hover:text-foreground")}>Shop</NavLink>
          <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label={`Open cart with ${count} items`}>
              <ShoppingCart />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[420px] max-w-full">
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              ) : (
                <div className="space-y-6">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-4">
                      <img src={product.image} alt={`${product.name} product image`} className="h-16 w-16 rounded-md object-cover" loading="lazy" />
                      <div className="flex-1">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">${product.price.toFixed(2)}</div>
                        <div className="mt-2 flex items-center gap-2">
                          <Button variant="secondary" size="sm" onClick={() => update(product.id, Math.max(1, quantity - 1))}>-</Button>
                          <span className="text-sm">{quantity}</span>
                          <Button variant="secondary" size="sm" onClick={() => update(product.id, quantity + 1)}>+</Button>
                          <Button variant="ghost" size="sm" onClick={() => remove(product.id)}>Remove</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <Button variant="hero" className="w-full" onClick={() => { navigate("/catalog"); }}>
                    Checkout
                  </Button>
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
