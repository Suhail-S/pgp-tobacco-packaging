import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PGP Tobacco Packaging – Precision. Quality. Innovation.",
  description: "Premium industrial packaging design and printing for the global tobacco sector, based in Dubai, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pgp-white text-pgp-charcoal`}
      >
        <header className="sticky top-0 left-0 right-0 z-50 bg-pgp-white shadow-card/80 w-full">
          <Navbar />
        </header>
        <div className="pt-6">{children}</div>
      </body>
    </html>
  );
}
