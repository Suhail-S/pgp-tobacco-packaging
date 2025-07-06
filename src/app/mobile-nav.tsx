"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Expect navLinks as a prop from layout
interface NavLinksProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileNav({ navLinks }: NavLinksProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="sm:hidden flex items-center justify-between w-full px-5 py-3">
        <Link href="/" className="flex items-center py-2 hover:opacity-90 transition-opacity">
          <Image
            src="/logo-pgp.png"
            alt="PGP Logo"
            width={80}
            height={48}
            className="rounded"
            priority
          />
        </Link>
        <button
          className="bg-pgp-charcoal text-pgp-white rounded px-5 py-2 text-lg font-bold"
          onClick={() => setMobileNavOpen((o) => !o)}
          aria-label="Open navigation menu"
        >
          MENU
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-90 transition-all">
          <div className="flex justify-end py-5 px-6">
            <button
              aria-label="Close menu"
              className="text-white text-3xl font-bold"
              onClick={() => setMobileNavOpen(false)}
            >
              &times;
            </button>
          </div>
          <ul className="flex-1 flex flex-col justify-start items-stretch gap-1 text-white text-lg font-semibold">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block w-full text-left px-8 py-4 border-b border-white/20 tracking-wide"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}