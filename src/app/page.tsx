"use client";
import { useEffect, useState } from "react";

const dashboardStats = [
  {
    label: "Packs Produced",
    value: "1B+",
    desc: "World-class capacity",
    icon: "📦",
    accent: "bg-pgp-aqua/90"
  },
  {
    label: "Years Industry Experience",
    value: "20+",
    desc: "Unmatched expertise",
    icon: "🏭",
    accent: "bg-pgp-gold/90"
  },
  {
    label: "Markets Served",
    value: "40+",
    desc: "Middle East | Africa | Asia | Europe",
    icon: "🌍",
    accent: "bg-pgp-charcoal/90 text-white"
  }
];

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
      {/* Dashboard/Stats Bar */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 my-7">
        {dashboardStats.map((stat, idx) => (
          <div key={idx} className={`rounded-xl shadow-card p-6 flex flex-col items-center gap-2 ${stat.accent}`}>
            <span className="text-3xl">{stat.icon}</span>
            <span className="text-3xl font-extrabold">{stat.value}</span>
            <div className="text-xs uppercase tracking-wide font-semibold">{stat.label}</div>
            <div className="text-[13px] font-light">{stat.desc}</div>
          </div>
        ))}
      </section>
      {/* Main Content Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-9 pt-5">
        <div className="lg:col-span-2 card flex flex-col gap-3">
          <h2 className="section-title text-2xl mb-1">Tobacco Packaging</h2>
          <h3 className="text-pgp-aqua text-xl font-bold leading-tight mb-1">
            Delivering the highest quality on time, every time
          </h3>
          <p className="text-base sm:text-lg mb-2 font-medium text-pgp-charcoal">
            At PGP Tobacco Packaging we understand the critical role packaging plays in the tobacco industry. That’s why we’re driven by quality and equipped with industry benchmark production technology.
          </p>
          <p className="text-base sm:text-md text-pgp-charcoal">
            Our mission is to transform service in tobacco packaging. We deliver “best in class” products, backed by excellent service so customers can respond quickly to changing market demands.
          </p>
        </div>
        <aside className="card flex flex-col justify-center gap-3">
          <h4 className="text-pgp-aqua text-lg font-bold mb-1">PGP – focused exclusively on Tobacco Packaging</h4>
          <ul className="space-y-1 text-base text-left font-semibold text-pgp-charcoal">
            <li className="flex items-start gap-1"><span className="text-green-600 pt-1">✔</span> We understand the unique nature of the industry</li>
            <li className="flex items-start gap-1"><span className="text-green-600 pt-1">✔</span> We understand what matters</li>
            <li className="flex items-start gap-1"><span className="text-green-600 pt-1">✔</span> 100% focus & attention – guaranteed</li>
            <li className="flex items-start gap-1"><span className="text-green-600 pt-1">✔</span> Box clever… protect your brand!</li>
          </ul>
          <a href="/contact" className="btn-primary mt-2 text-center">Contact Us</a>
        </aside>
      </section>
    </main>
  );
}
