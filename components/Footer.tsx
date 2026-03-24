import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Shipping Info", href: "#" },
  { label: "Returns", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t-0 bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 space-y-4 md:space-y-0 max-w-[1440px] mx-auto">
        <div className="font-body text-xs tracking-wide text-slate-500">
          © {new Date().getFullYear()} Sam Collections. All Rights Reserved.
        </div>
        <div className="flex space-x-8">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-xs tracking-wide text-slate-500 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
