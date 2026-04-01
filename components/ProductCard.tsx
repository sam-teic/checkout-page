"use client";

import Image from "next/image";
import { Product } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, setIsCartOpen } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Visual feedback
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 group flex flex-col border border-gray-50">
      <div className="relative h-72 w-full overflow-hidden bg-surface-container-low">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-gray-800 shadow-sm tracking-widest">
          New
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline text-lg font-semibold text-gray-900 leading-tight">
            {product.name}
          </h3>
          <span className="font-medium text-lg text-gray-500">
            ${product.price.toLocaleString("en-US", { minimumFractionDigits: 0 })}
          </span>
        </div>
        
        <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <button
          onClick={handleAdd}
          className={`w-full h-12 rounded-full font-bold text-sm flex items-center justify-center space-x-2 transition-all duration-300 active:scale-95 ${
            isAdded
              ? "bg-green-500 text-white shadow-[0_8px_16px_-4px_rgba(34,197,94,0.3)]"
              : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)]"
          }`}
        >
          <span>{isAdded ? "Added to Cart ✓" : "Add to Cart"}</span>
        </button>
      </div>
    </div>
  );
}
