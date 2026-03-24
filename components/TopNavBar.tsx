"use client";

import Link from "next/link";
import Icon from "./Icon";

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white glass-nav shadow-sm">
      <div className="flex justify-between items-center h-20 px-8 w-full max-w-360 mx-auto">
        <div className="text-2xl font-headline font-bold tracking-tighter text-on-surface">
          Sam Collections
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {["Collections", "Journal", "Archive"].map((item) => (
            <Link
              key={item}
              href="#"
              className="font-headline tracking-tight text-sm uppercase text-slate-500 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button
            className="text-on-surface hover:opacity-70 transition-opacity active:scale-90 duration-200"
            aria-label="Shopping bag"
          >
            <Icon className="h-6 w-6" name="shopping-bag" />
          </button>
          <button
            className="text-on-surface hover:opacity-70 transition-opacity active:scale-90 duration-200"
            aria-label="Account"
          >
            <Icon className="h-6 w-6" name="person" />
          </button>
        </div>
      </div>
    </nav>
  );
}
