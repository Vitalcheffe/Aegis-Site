import Link from "next/link";

const footerColumns = [
  {
    title: "Offerings",
    links: [
      { label: "Detection", href: "/detection" },
      { label: "Tracking", href: "/tracking" },
      { label: "Neutralization", href: "/neutralization" },
      { label: "Technology", href: "/technology" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "Aegis Core", href: "/products/aegis-core" },
      { label: "Aegis Tactical", href: "/products/aegis-tactical" },
      { label: "Aegis Mobile", href: "/products/aegis-mobile" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Demos", href: "/demos" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "ITAR", href: "/legal/itar" },
      { label: "Compliance", href: "/legal/compliance" },
    ],
  },
];

export function Footer() {
  return (
    <>
      {/* Dual CTA Section */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link
            href="/request-demo"
            className="group flex flex-col justify-center p-12 md:p-16 lg:p-20 bg-black hover:bg-[#0a0a0a] transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676] mb-4">
              Get Started
            </span>
            <span className="text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-[-0.04em] leading-[1.1] text-white group-hover:text-white/90 transition-colors">
              Request a Demo
            </span>
            <span className="mt-4 text-[#767676] text-sm group-hover:text-[#b9b9b9] transition-colors">
              Schedule a classified briefing with our defense team →
            </span>
          </Link>
          <Link
            href="/technology"
            className="group flex flex-col justify-center p-12 md:p-16 lg:p-20 bg-[#0a0a0a] border-l border-white/10 hover:bg-[#111111] transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676] mb-4">
              Learn More
            </span>
            <span className="text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-[-0.04em] leading-[1.1] text-white group-hover:text-white/90 transition-colors">
              Explore Technology
            </span>
            <span className="mt-4 text-[#767676] text-sm group-hover:text-[#b9b9b9] transition-colors">
              Discover our multi-layered defense architecture →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 mt-auto">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                className="text-white font-bold text-lg tracking-[0.3em] uppercase"
              >
                AEGIS
              </Link>
              <p className="mt-4 text-[#767676] text-sm leading-relaxed max-w-[240px]">
                Counter-UAS defense systems protecting critical assets across
                12 nations.
              </p>
            </div>

            {/* Link Columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] uppercase tracking-[0.05em] font-medium text-[#767676] mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#b9b9b9] hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="text-[#555555] text-xs">
                © {new Date().getFullYear()} Aegis Defense Systems. All rights
                reserved.
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#555555]">
                NATO Classified — ITAR Controlled
              </div>
            </div>
            <div className="mt-4 text-[#444444] text-[11px] leading-relaxed max-w-3xl">
              This product is controlled under the International Traffic in Arms
              Regulations (ITAR) and may not be exported, transferred, or
              disclosed to foreign persons without prior authorization from the
              U.S. Department of State.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
