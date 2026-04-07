export default function Loading() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-transparent z-50">
      <div className="w-10 h-10 border-2 border-gray-200 border-t-black rounded-full animate-spin"></div>
      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500 animate-pulse">Loading...</p>
    </div>
  );
}
