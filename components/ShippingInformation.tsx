import FloatingInput from "./FloatingInput";
import Icon from "./Icon";

export default function ShippingInformation() {
  return (
    <section className="space-y-8">
      <h2 className="font-headline text-xl font-bold">Shipping Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FloatingInput id="full_name" label="Full Name" />
        <FloatingInput id="email" label="Email Address" type="email" />
      </div>

      <FloatingInput id="address" label="Street Address" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FloatingInput id="city" label="City" />
        <FloatingInput id="postal" label="Postal Code" />

        {/* Country Select */}
        <div className="relative group  rounded-xl">
          <select
            className="w-full h-14 bg-white px-4 bg-surface-container-lowest rounded-xl border-0 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface appearance-none"
            id="country"
          >
            <option>United States</option>
            <option>United Kingdom</option>
            <option>France</option>
            <option>Japan</option>
          </select>
          <Icon
            className="absolute right-4 top-4 h-5 w-5 text-on-surface-variant pointer-events-none"
            name="chevron-down"
          />
        </div>
      </div>
    </section>
  );
}
