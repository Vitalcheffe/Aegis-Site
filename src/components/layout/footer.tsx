import Link from "next/link";

const footerLinks = {
  products: [
    { label: "Aegis Core", href: "/products/aegis-core" },
    { label: "Aegis Tactical", href: "/products/aegis-tactical" },
    { label: "Aegis Mobile", href: "/products/aegis-mobile" },
  ],
  solutions: [
    { label: "Military", href: "/solutions/military" },
    { label: "Airports", href: "/solutions/airports" },
    { label: "Critical Infrastructure", href: "/solutions/critical-infrastructure" },
    { label: "Border Security", href: "/solutions/border-security" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "ITAR", href: "/legal/itar" },
    { label: "Compliance", href: "/legal/compliance" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-medium mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#888888] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-medium mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#888888] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#888888] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#888888] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#222222]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[#888888] text-xs">
              © {new Date().getFullYear()} Aegis Defense Systems. All rights reserved.
            </div>
            <div className="text-[#888888] text-xs uppercase tracking-wider">
              NATO Classified — ITAR Controlled
            </div>
          </div>
          <div className="mt-4 text-[#555555] text-xs">
            This product is controlled under the International Traffic in Arms Regulations (ITAR) and may not be exported, transferred, or disclosed to foreign persons without prior authorization from the U.S. Department of State.
          </div>
        </div>
      </div>
    </footer>
  );
}
