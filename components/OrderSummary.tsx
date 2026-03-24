"use client";

import { useState } from "react";
import OrderItem, { CartItem } from "./OrderItem";

const INITIAL_ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Studio Sneaker 01",
    color: "Bone White",
    size: "42",
    price: 245.0,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYjfTvFi_qcXExosCYww937h4wUwxZToS4j77_gUEKNvpoiGBIlol2ZPQ0bWafcVLVUK48GhIj4t35lxeuKgx065LMld_RztNfpMetw6PHl8e1rRxRTYBe1bMUA0gbiUXPSq7h2mPEFhy0a-3G-i5pQ_-qFISWDy2eWzfQDGpMzx68IqLsayVrJ_YO3EWZZNnwwa5xzU5jd4B32kxpOUcGow_Bpu6-6xO6BmKoLr_eb1K9ZLtoad60e50iiRNSkPiFfBP6FrXfF3Q",
    imageAlt: "Modern beige leather minimalist sneakers on soft background",
  },
  {
    id: 2,
    name: "Loro Piana Overcoat",
    color: "Charcoal",
    size: "L",
    price: 1890.0,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxgy-Q7KneO_oZeJ13Z2q8SJNaUkUUTSBK2stMd6hfUoo2dqJAsjvIMTk6Baxt5keY8cJq4XeVlGHrLGd-qUTX0os3yao1p0gedxfC0YFfZJTAdjzneTSA23fTPMZrg0CJHOtbkhl99vqtih7Nnd_2DFSjhfyFHkShNwzDRiBi0YTn9-8eyETEcfkcfOVUkeaDICdyTP-R2yzrcQVTWbSx7z5gMe6H1zx_GKNeLOgkIhh0XtJJwSQW0ZxNLXxZbvtm6XWiizOzfdM",
    imageAlt: "High-end charcoal wool overcoat detail texture",
  },
];

const TAX_RATE = 0.08;

export default function OrderSummary() {
  const [quantities, setQuantities] = useState<Record<number, number>>({
    1: 1,
    2: 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const subtotal = INITIAL_ITEMS.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );
  const estimatedTax = subtotal * TAX_RATE;
  const total = subtotal + estimatedTax;

  const handlePurchase = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsLoading(false);
  };

  return (
    <div className="sticky top-32 p-10 bg-surface-container-lowest bg-white rounded-2xl shadow-sm space-y-10">
      <h2 className="font-headline text-2xl font-bold">Order Summary</h2>

      {/* Product Items */}
      <div className="space-y-8">
        {INITIAL_ITEMS.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 1}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-surface-container" />

      {/* Totals */}
      <div className="space-y-4">
        <div className="flex justify-between text-on-surface-variant">
          <span>Subtotal</span>
          <span>
            $
            {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Shipping</span>
          <span className="text-blue-800 font-medium">
            Calculated at next step
          </span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Estimated Tax</span>
          <span>
            $
            {estimatedTax.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className="pt-4 flex justify-between items-baseline">
          <span className="font-headline text-lg font-bold">Total</span>
          <div className="text-right">
            <span className="text-sm text-on-surface-variant block uppercase tracking-widest font-bold">
              USD
            </span>
            <span className="font-headline text-3xl font-extrabold tracking-tighter">
              ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <button
          onClick={handlePurchase}
          disabled={isLoading}
          className="w-full h-16 bg-blue-800 text-white rounded-full font-bold text-lg flex items-center justify-center space-x-4 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <span>Processing...</span>
              <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
            </>
          ) : (
            <span>Complete Purchase</span>
          )}
        </button>
        <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest leading-relaxed">
          Secure encrypted checkout. Your data is protected by industry standard
          protocols.
        </p>
      </div>
    </div>
  );
}
