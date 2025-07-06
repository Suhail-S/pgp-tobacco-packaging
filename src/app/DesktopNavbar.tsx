import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Why the UAE?", href: "/why-uae" },
  { name: "Products", href: "/products" },
  { name: "Capabilities", href: "/process-capabilities" },
  { name: "Service & Quality", href: "/service-quality" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopNavbar() {
  return (
    <nav className="hidden lg:flex items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-8 py-3 bg-white shadow-card/80">
      <div className="flex items-center py-2">
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image
            src="/logo-pgp.png"
            alt="PGP Logo"
            width={120}
            height={71}
            className="rounded-lg"
            priority
          />
        </Link>
      </div>
      <ul className="flex flex-1 justify-evenly items-center ml-8 space-x-4">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="px-8 h-16 flex items-center justify-center rounded-full font-semibold text-lg shadow-md transition bg-pgp-aqua text-white 
                hover:bg-pgp-gold hover:text-pgp-charcoal hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pgp-gold whitespace-nowrap"
              style={{ minWidth: "170px", textAlign: "center" }}
            >
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}