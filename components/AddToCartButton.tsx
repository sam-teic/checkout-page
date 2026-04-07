"use client";

import { Product } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart, setIsCartOpen } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setIsAdded(true);
    // Optionally open cart: setIsCartOpen(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`w-full h-14 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 active:scale-95 ${
        isAdded
          ? "bg-green-500 text-white shadow-[0_8px_16px_-4px_rgba(34,197,94,0.3)]"
          : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)]"
      }`}
    >
      <span>{isAdded ? "Added to Cart ✓" : "Add to Cart - " + product.price.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}</span>
    </button>
  );
}
