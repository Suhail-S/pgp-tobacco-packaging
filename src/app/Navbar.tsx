"use client";
import DesktopNavbar from "./DesktopNavbar";
import MobileNav from "./mobile-nav";

// Only render MobileNav below 1024px, DesktopNavbar at 1024px and up
import useMediaQuery from "./useMediaQuery";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
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
  if (isDesktop) {
    return <DesktopNavbar />;
  }
  return <MobileNav navLinks={navLinks} />;
}