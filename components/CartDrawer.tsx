"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-headline text-2xl font-bold">Your Bag</h2>
          <div className="flex items-center space-x-2">
            {items.length > 0 && (
              <button 
                onClick={clearCart}
                className="text-sm font-semibold text-red-600 hover:text-red-800 transition-colors px-3 py-1 rounded-full hover:bg-red-50 mr-2"
              >
                Clear Cart
              </button>
            )}
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
              aria-label="Close cart"
            >
              <Icon name="close" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-on-surface-variant space-y-4">
              <Icon name="shopping-bag" className="w-12 h-12 opacity-20" />
              <p>Your bag is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 bg-gray-100 text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4 border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-surface-container-low flex-shrink-0">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.imageAlt} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base leading-tight pr-4">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Icon name="close" className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-1">{item.color} / {item.size}</p>
                  
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-gray-500 hover:text-gray-900 active:scale-95"
                      >
                        <Icon name="minus" className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-gray-500 hover:text-gray-900 active:scale-95"
                      >
                        <Icon name="add" className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <span className="font-bold text-lg">
                      {(item.price * item.quantity).toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold text-gray-500">Subtotal</span>
              <span className="font-extrabold text-2xl text-gray-900">
                {subtotal.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}
              </span>
            </div>
            <p className="text-xs text-gray-500 text-center">Shipping & taxes calculated at checkout.</p>
            
            <Link 
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="w-full flex items-center justify-center h-14 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors active:scale-95 shadow-md hover:shadow-xl"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
