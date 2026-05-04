"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl tracking-[0.3em]">
            AEGIS
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#888888] hover:text-white text-sm uppercase tracking-wider transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-demo"
              className="bg-white text-black px-5 py-2 text-sm font-medium hover:bg-[#e0e0e0] transition-colors"
            >
              Request Demo
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-[#222222]">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#888888] hover:text-white text-sm uppercase tracking-wider transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="block bg-white text-black px-5 py-2 text-sm font-medium text-center hover:bg-[#e0e0e0] transition-colors mt-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
