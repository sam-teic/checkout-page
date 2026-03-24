import FloatingInput from "./FloatingInput";

export default function PaymentMethod() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-end">
        <h2 className="font-headline text-xl font-bold">Payment Method</h2>
        <div className="flex space-x-2">
          {["VISA", "MC"].map((brand) => (
            <div
              key={brand}
              className="w-10 h-6 bg-surface-container-high bg-white rounded flex items-center justify-center text-[10px] font-bold text-on-surface-variant"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 rounded-2xl space-y-6 bg-gray-200">
        <FloatingInput
          id="card_number"
          label="Card Number"
          extraClasses="font-mono tracking-widest"
          icon="credit_card"
        />

        <div className="grid grid-cols-2 gap-6">
          <FloatingInput id="expiry" label="Expiry (MM/YY)" />
          <FloatingInput id="cvv" label="CVV" type="password" />
        </div>
      </div>
    </section>
  );
}
