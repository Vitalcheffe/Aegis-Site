"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Investors", href: "/investors" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[600] mix-blend-difference transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-[0.3em] uppercase"
        >
          AEGIS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-[11px] uppercase tracking-[0.15em] hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-demo"
            className="text-white text-[11px] uppercase tracking-[0.15em] border border-white/30 px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300 ml-4"
          >
            Request Demo
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu — full screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-black z-[599] flex flex-col justify-center">
          <div className="px-6 md:px-12 space-y-1">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.02em] py-3 hover:text-white/70 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="block text-white text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.02em] py-3 hover:text-white/70 transition-colors border-t border-white/10 mt-8 pt-8"
            >
              Request Demo →
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white p-2"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </header>
  );
}
