import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "Checkout - sam collections",
  description: "Premium fashion checkout experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-surface font-body text-on-surface selection:bg-secondary-container">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
