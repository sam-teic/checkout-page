"use client";

import Icon from "./Icon";

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  extraClasses?: string;
  icon?: string;
}

export default function FloatingInput({
  id,
  label,
  type = "text",
  extraClasses = "",
  icon,
}: FloatingInputProps) {
  return (
    <div className="relative group">
      <input
        className={`peer w-full h-14 px-4 pt-5 pb-1 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 transition-all outline-none text-gray-900 ${extraClasses}`}
        id={id}
        placeholder=" "
        type={type}
      />
      <label
        className="absolute left-4 top-4 text-gray-500 duration-300 transform -translate-y-3 scale-75 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
        htmlFor={id}
      >
        {label}
      </label>
      {icon && (
        <Icon
          className="absolute right-4 top-4 h-5 w-5 text-gray-400"
          name={icon === "credit_card" ? "credit-card" : "chevron-down"}
        />
      )}
    </div>
  );
}
