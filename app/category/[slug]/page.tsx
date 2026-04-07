import { PRODUCTS } from "@/lib/data";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  // Artificial network delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { slug } = await params;
  
  const categoryProducts = PRODUCTS.filter((p) => p.categoryId === slug);

  if (categoryProducts.length === 0) {
    notFound();
  }

  const formatTitle = (s: string) => {
    return s === "essentials" ? "The Essentials" : s === "footwear" ? "Refined Footwear" : s;
  };

  return (
    <>
      <TopNavBar />
      <main className="w-full bg-white min-h-screen text-gray-900 pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <header className="mb-12">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-black mb-4 capitalize">
            {formatTitle(slug)}
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            Curated pieces thoughtfully assembled for the {slug} collection.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
