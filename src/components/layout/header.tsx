"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[600] mix-blend-difference transition-all duration-300 ${
        scrolled ? "py-2" : "py-0"
      }`}
    >
      <div className="max-w-[80rem] mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-[0.3em] uppercase"
        >
          AEGIS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-demo"
            className="text-white text-sm uppercase tracking-wider border border-white/30 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            Request Demo
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-5 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white text-sm uppercase tracking-wider py-2 hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="block text-white text-sm uppercase tracking-wider border border-white/30 px-5 py-3 text-center hover:bg-white hover:text-black transition-all duration-300 mt-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
