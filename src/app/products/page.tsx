import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Products — Aegis",
  description: "Three configurations. One mission. Aegis Core, Tactical, and Mobile counter-UAS systems.",
};

const products = [
  {
    name: "Aegis Core",
    designation: "Fixed-Site System",
    image: "/images/hero-radar.jpg",
    href: "/products/aegis-core",
    highlights: ["500+ Targets", "50Hz Update", "20ms Response", "5 Sensor Modalities", "5 Effector Types"],
    description: "Full-spectrum counter-UAS for permanent installations. 12km detection, 360° coverage, all-weather capability.",
  },
  {
    name: "Aegis Tactical",
    designation: "Mobile System",
    image: "/images/products-aegis-tactical.jpg",
    href: "/products/aegis-tactical",
    highlights: ["200+ Targets", "25Hz Update", "30ms Response", "3 Sensor Modalities", "2 Effector Types"],
    description: "Vehicle-mounted rapid deployment. MIL-STD-810G ruggedized, operational in under 30 minutes.",
  },
  {
    name: "Aegis Mobile",
    designation: "Man-Portable System",
    image: "/images/soldier-jammer.jpg",
    href: "/products/aegis-mobile",
    highlights: ["50+ Targets", "RF DF", "Directional Jamming", "4hr Battery", "12.5kg"],
    description: "Dismounted operations. 12.5kg total system weight, operational in under 2 minutes.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Products"
            title="Three Configurations"
            subtitle="One mission. From fixed-site to man-portable, Aegis scales to every operational requirement."
          />
        </div>
      </section>

      {/* Products */}
      {products.map((product, index) => (
        <section key={product.name} className="py-20 md:py-28 border-t border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden md:[direction:ltr]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <div className="text-[#888888] text-xs uppercase tracking-wider mb-2">
                  {product.designation}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{product.name}</h2>
                <p className="text-[#888888] text-lg mb-8">{product.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {product.highlights.map((h) => (
                    <div key={h} className="border border-[#222222] p-3 text-center">
                      <div className="text-white text-sm font-medium">{h}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={product.href}
                  className="inline-block border border-[#333333] text-white px-6 py-3 text-sm font-medium hover:border-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Comparison" title="System Comparison" />
          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-[#222222]">
                  <th className="text-left text-[#888888] text-xs uppercase tracking-wider py-4 pr-4">Parameter</th>
                  <th className="text-left text-white text-sm font-medium py-4 px-4">Aegis Core</th>
                  <th className="text-left text-white text-sm font-medium py-4 px-4">Aegis Tactical</th>
                  <th className="text-left text-white text-sm font-medium py-4 px-4">Aegis Mobile</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Type", "Fixed-Site", "Mobile", "Man-Portable"],
                  ["Max Targets", "500+", "200+", "50+"],
                  ["Update Rate", "50Hz", "25Hz", "RF DF"],
                  ["Response Time", "20ms", "30ms", "< 2min deploy"],
                  ["Detection Range", "12km", "8km", "3km"],
                  ["Sensors", "5 Modalities", "3 Modalities", "RF DF"],
                  ["Effectors", "5 Types", "2 Types", "Jamming"],
                  ["Weight", "180kg", "95kg", "12.5kg"],
                  ["Power", "2.4kW", "1.2kW", "4hr battery"],
                  ["Deploy Time", "Permanent", "< 30min", "< 2min"],
                ].map(([param, core, tactical, mobile], i) => (
                  <tr key={i} className="border-b border-[#222222]">
                    <td className="text-[#888888] text-sm uppercase tracking-wider py-4 pr-4">{param}</td>
                    <td className="text-white text-sm py-4 px-4">{core}</td>
                    <td className="text-white text-sm py-4 px-4">{tactical}</td>
                    <td className="text-white text-sm py-4 px-4">{mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Find Your Configuration"
        description="Our team will match the right Aegis system to your operational requirements."
      />
    </>
  );
}
