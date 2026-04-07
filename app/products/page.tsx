import { PRODUCTS } from "@/lib/data";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default async function AllProductsPage() {
  // Artificial network delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 600));
  return (
    <>
      <TopNavBar />
      <main className="w-full bg-white min-h-screen text-gray-900 pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <header className="mb-12">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-black mb-4">
            All Products
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            Explore our complete collection of meticulously crafted modern essentials and refined footwear.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
