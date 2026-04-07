import TopNavBar from "@/components/TopNavBar";
import ShippingInformation from "@/components/ShippingInformation";
import PaymentMethod from "@/components/PaymentMethod";
import OrderSummary from "@/components/OrderSummary";
import Footer from "@/components/Footer";

export default async function CheckoutPage() {
  // Artificial network delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <>
      <TopNavBar />

      <main className="pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl bg-gray-50 mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Checkout Details */}
          <div className="lg:col-span-7 space-y-12">
            <header>
              <h1 className="font-headline text-4xl font-extrabold tracking-tight mb-2 text-on-surface">
                Checkout
              </h1>
              <p className="text-on-surface-variant">
                Review your details and finalize your order.
              </p>
            </header>

            <ShippingInformation />
            <PaymentMethod />
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <OrderSummary />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
