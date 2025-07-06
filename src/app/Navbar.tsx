import DesktopNavbar from "./DesktopNavbar";
import MobileNav from "./mobile-nav";

// Wrapper which renders both navs and uses Tailwind breakpoints for visibility.
export default function Navbar() {
  return (
    <>
      <MobileNav navLinks={[
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Why the UAE?", href: "/why-uae" },
        { name: "Products", href: "/products" },
        { name: "Capabilities", href: "/process-capabilities" },
        { name: "Service & Quality", href: "/service-quality" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" },
      ]} />
      <DesktopNavbar />
    </>
  );
}