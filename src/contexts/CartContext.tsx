import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = { product: Product; quantity: number };

type CartContextType = {
  items: CartItem[];
  add: (product: Product, quantity?: number) => void;
  remove: (productId: string) => void;
  update: (productId: string, quantity: number) => void;
  clear: () => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const add: CartContextType["add"] = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: Math.min(i.quantity + quantity, product.stock) } : i
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const remove = (productId: string) => setItems((prev) => prev.filter((i) => i.product.id !== productId));
  const update = (productId: string, quantity: number) =>
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity: Math.max(1, Math.min(quantity, i.product.stock)) } : i))
    );
  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const total = useMemo(() => items.reduce((sum, i) => sum + i.quantity * i.product.price, 0), [items]);

  const value = { items, add, remove, update, clear, count, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
