import { PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Artificial network delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <>
      <TopNavBar />
      <main className="w-full bg-white min-h-screen text-gray-900 pb-24">
        {/* Full Split-Screen Layout */}
        <div className="flex flex-col lg:flex-row min-h-[90vh]">
          {/* Image Side (Left) */}
          <div className="w-full lg:w-1/2 relative bg-gray-50 flex items-center justify-center pt-24 lg:pt-0">
             <div className="absolute top-28 left-6 md:left-12 z-10">
               <Link href="/products" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                 Back to Products
               </Link>
             </div>
             
             {/* Main Image */}
             <div className="relative w-full h-[60vh] lg:h-full">
               <Image
                 src={product.imageSrc}
                 alt={product.imageAlt}
                 fill
                 className="object-cover object-center"
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 priority
               />
             </div>
          </div>
          
          {/* Details Side (Right) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
            <div className="max-w-lg w-full">
              <div className="mb-4 flex items-center space-x-3">
                <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  {product.categoryId === 'footwear' ? 'Footwear' : 'Essentials'}
                </span>
                <span className="text-gray-400 text-sm font-medium">In Stock</span>
              </div>
              
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black mb-4 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-3xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-8">
                {product.price.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}
              </p>
              
              <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div>
                  <p className="text-xs text-black font-bold uppercase tracking-widest mb-2">Selected Color</p>
                  <div className="flex items-center space-x-3 border border-gray-200 p-3 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-gray-200 border border-gray-300 shadow-sm" />
                    <span className="font-semibold text-black">{product.color}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black font-bold uppercase tracking-widest mb-2">Size</p>
                  <div className="flex items-center space-x-3 border border-black p-3 rounded-xl bg-black text-white">
                    <span className="font-bold flex-1 text-center">{product.size}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <AddToCartButton product={product} />
                <p className="text-xs text-center text-gray-400 font-medium uppercase tracking-widest mt-6">
                  Free shipping on all domestic orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
