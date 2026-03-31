import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <>
      <TopNavBar />
      <main className="pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl bg-gray-50 mx-auto min-h-screen">
        <header className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
            Collections
          </h1>
          <p className="text-on-surface-variant text-lg mt-2">
            Explore our curated selection of premium products.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
