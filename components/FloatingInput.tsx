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
        className={`floating-input peer w-full h-14 px-4 pt-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface ${extraClasses}`}
        id={id}
        placeholder=" "
        type={type}
      />
      <label
        className="floating-label absolute left-4 top-4 text-on-surface-variant transition-all pointer-events-none origin-left"
        htmlFor={id}
      >
        {label}
      </label>
      {icon && (
        <Icon
          className="absolute right-4 top-4 h-5 w-5 text-primary"
          name={icon === "credit_card" ? "credit-card" : "chevron-down"}
        />
      )}
    </div>
  );
}
