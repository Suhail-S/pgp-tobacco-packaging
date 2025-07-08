"use client";
import { useEffect, useState } from "react";

export default function Home() {
  // Animated counter for "1B+ packs produced"
  const [packCount, setPackCount] = useState(0);
  useEffect(() => {
    if (packCount < 1000000000) {
      const inc = Math.ceil((1000000000 - packCount) / 11);
      const id = setTimeout(() => setPackCount(packCount + inc), 18);
      return () => clearTimeout(id);
    }
    setPackCount(1000000000);
  }, [packCount]);

  return (
    <main className="min-h-screen bg-pgp-white text-pgp-charcoal flex flex-col items-center px-2 sm:px-6 py-8">
      {/* DEBUG: TAILWIND RESPONSIVE TEST */}
      <div className="hidden lg:block text-white bg-green-600 rounded p-4 my-4">
        {"IF YOU SEE THIS BOX, TAILWIND RESPONSIVE CLASSES ARE WORKING (>=1024px)."}
      </div>
      {/* rest of page unchanged */}
      {/* Top Bar */}
      <div className="w-full flex justify-end items-center pb-1">
        <span className="text-pgp-gold font-semibold text-sm sm:text-base">CALL NOW +971 4 435 7362</span>
      </div>
      {/* Hero & Tagline (no logo here) */}
      <section className="flex flex-col items-center mt-3 mb-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pgp-charcoal tracking-tight mb-1 mt-2 sm:mt-4 text-center">
          Serving the Tobacco Industry
        </h1>
        <span className="inline-block bg-pgp-gold rounded-full px-6 py-2 font-bold text-pgp-white text-lg mt-2 shadow-card">
          {packCount.toLocaleString()}+ packs produced
        </span>
      </section>
      {/* ... rest of original homepage unchanged ... */}
    </main>
  );
}
