"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import OrderItem from "./OrderItem";

const TAX_RATE = 0.08;

export default function OrderSummary() {
  const { items, updateQuantity, subtotal } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantityChange = (id: number, delta: number) => {
    updateQuantity(id, delta);
  };

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
        {items.length === 0 ? (
          <div className="text-center py-8 text-on-surface-variant">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          items.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
            />
          ))
        )}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-surface-container" />

      {/* Totals */}
      <div className="space-y-4">
        <div className="flex justify-between text-on-surface-variant">
          <span>Subtotal</span>
          <span>
            {subtotal.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}
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
            {estimatedTax.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}
          </span>
        </div>
        <div className="pt-4 flex justify-between items-baseline">
          <span className="font-headline text-lg font-bold">Total</span>
          <div className="text-right">
            <span className="text-sm text-on-surface-variant block uppercase tracking-widest font-bold">
              NGN
            </span>
            <span className="font-headline text-3xl font-extrabold tracking-tighter">
              {total.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}
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
