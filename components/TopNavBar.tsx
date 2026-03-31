"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { useCart } from "./CartProvider";
import { useEffect, useRef } from "react";

export default function TopNavBar() {
  const { isCartOpen, setIsCartOpen, cartCount, items, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_32px_-12px_rgba(0,0,0,0.03)] relative text-on-surface transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-8 w-full max-w-7xl mx-auto">
        {/* Brand */}
        <div className="w-1/3 flex justify-start">
          <Link href="/" className="text-xl font-headline font-extrabold tracking-tighter hover:text-blue-800 transition-colors uppercase">
            Sam
          </Link>
        </div>

        {/* Center Dummy Links */}
        <div className="hidden md:flex w-1/3 justify-center items-center space-x-8">
          {["New Arrivals", "Men", "Women", "Editorial"].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-[13px] font-semibold text-gray-500 hover:text-gray-900 tracking-wide uppercase transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="w-1/3 flex items-center justify-end space-x-6">
          {/* Cart Wrapper */}
          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative text-on-surface hover:text-blue-800 transition-colors active:scale-95 duration-200"
              aria-label="Shopping bag"
              aria-expanded={isCartOpen}
            >
              <Icon className="h-6 w-6" name="shopping-bag" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-pulse-once">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Dropdown Menu */}
            {isCartOpen && (
              <div className="absolute right-0 top-full mt-5 w-[360px] sm:w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_12px_48px_-12px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col z-[100] max-h-[85vh] overflow-hidden animate-fade-in-up">
                
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white">
                  <h3 className="font-headline font-bold text-base tracking-wide uppercase">Your Cart</h3>
                  {items.length > 0 && (
                    <button 
                      onClick={clearCart}
                      className="text-xs font-semibold text-red-600 hover:text-red-800 transition-colors px-2 py-1 rounded hover:bg-red-50"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Items Container */}
                <div className="overflow-y-auto p-4 flex-1 space-y-4">
                  {items.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 flex flex-col items-center">
                      <Icon name="shopping-bag" className="w-10 h-10 opacity-20 mb-3" />
                      <p>Your bag is empty.</p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 text-blue-800 font-bold hover:underline"
                      >
                        Keep Shopping
                      </button>
                    </div>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="flex space-x-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image 
                            src={item.imageSrc} 
                            alt={item.imageAlt} 
                            fill 
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-sm leading-tight pr-2">{item.name}</h4>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Icon name="close" className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-2 py-1">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <Icon name="minus" className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <Icon name="add" className="w-3 h-3" />
                              </button>
                            </div>
                            
                            <span className="font-bold text-sm text-blue-800">
                              ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50 flex flex-col space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-500 text-sm">Subtotal</span>
                      <span className="font-extrabold text-xl">
                        ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    
                    <Link 
                      href="/checkout"
                      onClick={() => setIsCartOpen(false)}
                      className="w-full flex items-center justify-center py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-blue-800 transition-colors active:scale-95 shadow-md"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            className="text-on-surface hover:text-blue-800 transition-colors active:scale-95 duration-200"
            aria-label="Account"
          >
            <Icon className="h-6 w-6" name="person" />
          </button>
        </div>
      </div>
    </nav>
  );
}
