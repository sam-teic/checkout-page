import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
