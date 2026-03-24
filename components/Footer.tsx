export default function Footer() {
  return (
    <footer className="w-full py-12 border-t-0 bg-slate-50">
      <div className="flex flex-col items-center justify-center px-12 max-w-[1440px] mx-auto">
        <div className="font-body text-xs tracking-wide text-slate-500">
          © {new Date().getFullYear()} Sam Collections. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
