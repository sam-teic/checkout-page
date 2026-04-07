"use client";

import Image from "next/image";
import Icon from "./Icon";

export interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
}

interface OrderItemProps {
  item: CartItem;
  onQuantityChange: (id: number, delta: number) => void;
  quantity: number;
}

export default function OrderItem({
  item,
  onQuantityChange,
  quantity,
}: OrderItemProps) {
  return (
    <div className="flex items-center space-x-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-surface-container-low">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <div className="flex-grow space-y-1 min-w-0">
        <h3 className="text-lg font-bold truncate">{item.name}</h3>
        <p className="mb-4 text-sm text-on-surface-variant truncate">
          Color: {item.color} / Size: {item.size}
        </p>

        <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
          <div className="inline-flex items-center bg-gray-100 rounded-full bg-surface-container-low px-2 py-1">
            <button
              onClick={() => onQuantityChange(item.id, -1)}
              className="flex h-8 w-8 items-center justify-center text-on-surface-variant transition-all hover:scale-110 hover:text-primary active:scale-90"
              aria-label="Decrease quantity"
            >
              <Icon className="h-4 w-4" name="minus" />
            </button>
            <span className="w-8 text-center text-sm font-semibold">
              {quantity}
            </span>
            <button
              onClick={() => onQuantityChange(item.id, 1)}
              className="flex h-8 w-8 items-center justify-center text-on-surface-variant transition-all hover:scale-110 hover:text-primary active:scale-90"
              aria-label="Increase quantity"
            >
              <Icon className="h-4 w-4" name="add" />
            </button>
          </div>
          <span className="font-bold whitespace-nowrap">
            {(item.price * quantity).toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 })}
          </span>
        </div>
      </div>
    </div>
  );
}
