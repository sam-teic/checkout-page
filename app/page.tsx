import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TopNavBar />
      <main className="w-full bg-white min-h-screen text-gray-900">
        {/* Minimalist Hero Section */}
        <section className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center pt-24 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
          <div className="flex w-full h-full rounded-2xl md:rounded-[40px] overflow-hidden relative shadow-sm border border-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=2400" 
              alt="Premium Collection" 
              fill 
              className="object-cover object-center"
              priority
            />
            
            {/* Stronger overlay to ensure white text is perfectly legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-end">
              <div className="max-w-2xl mb-8 md:mb-0">
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4 leading-[0.9]">
                  Define Your <br/> Silhouette.
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-light max-w-lg tracking-wide">
                  The new seasonal collection. Masterfully crafted essentials for the modern wardrobe.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <a href="#featured" className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-widest text-black bg-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm">
                  Explore Collection
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Curation / Philosophy Section */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 text-black">
            Uncompromising Quality.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            We believe in fewer, better things. Each piece is designed with pure intention, 
            utilizing the finest materials sourced globally. We obsess over the details so you don't have to.
          </p>
        </section>

        {/* Sleek Categories Section */}
        <section id="categories" className="pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 pl-0">
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl md:rounded-[32px] overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" alt="Womenswear" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               <div className="absolute inset-0 p-10 flex flex-col justify-between">
                 <div className="bg-white/90 backdrop-blur-md w-max px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-black">
                   Curated
                 </div>
                 <div>
                   <h3 className="text-white font-headline text-3xl md:text-4xl font-bold tracking-tight">The Essentials</h3>
                   <Link href="/category/essentials" className="inline-block mt-4 border-b border-white text-white font-medium pb-1 uppercase tracking-wider text-sm hover:text-gray-300 hover:border-gray-300 transition-colors cursor-pointer">Shop Now</Link>
                 </div>
               </div>
            </div>

            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl md:rounded-[32px] overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1200" alt="Accessories" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               <div className="absolute inset-0 p-10 flex flex-col justify-between">
                 <div className="bg-white/90 backdrop-blur-md w-max px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-black">
                   Focus
                 </div>
                 <div>
                   <h3 className="text-white font-headline text-3xl md:text-4xl font-bold tracking-tight">Refined Footwear</h3>
                   <Link href="/category/footwear" className="inline-block mt-4 border-b border-white text-white font-medium pb-1 uppercase tracking-wider text-sm hover:text-gray-300 hover:border-gray-300 transition-colors cursor-pointer">Shop Now</Link>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Featured Products Collection */}
        <section id="featured" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
            <div className="mb-6 md:mb-0">
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-4">Latest Arrivals</h2>
              <p className="text-gray-500 text-lg md:text-xl font-light">Iconic design meets modern utility.</p>
            </div>
            <Link href="/products" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors group">
              View All Products
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
