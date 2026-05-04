import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Solutions — Aegis",
  description: "Counter-UAS solutions for military, airports, critical infrastructure, border security, VIP protection, and prisons.",
};

const solutions = [
  {
    title: "Military",
    description: "Forward operating bases, naval vessels, and convoy protection. Combat-proven in 12 nations.",
    image: "/images/fob-aerial.jpg",
    href: "/solutions/military",
  },
  {
    title: "Critical Infrastructure",
    description: "Power plants, data centers, government facilities. 99.97% uptime with SCADA integration.",
    image: "/images/command-center.jpg",
    href: "/solutions/critical-infrastructure",
  },
  {
    title: "Airports",
    description: "Zero false positives. ATC-integrated. Seamless civil aviation operations.",
    image: "/images/solutions-airport.jpg",
    href: "/solutions/airports",
  },
  {
    title: "Border Security",
    description: "Long-range corridors, coastal zones, and frontier surveillance networks.",
    image: "/images/detection-radar.jpg",
    href: "/solutions/border-security",
  },
  {
    title: "VIP Protection",
    description: "Mobile and fixed systems. Common operating picture. Rapid deployment.",
    image: "/images/soldier-jammer.jpg",
    href: "/solutions/vip-protection",
  },
  {
    title: "Prisons",
    description: "Contraband interdiction. Perimeter detection and jamming. Indoor and outdoor coverage.",
    image: "/images/neutralization-rf.jpg",
    href: "/solutions/prisons",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Solutions"
            title="Mission-Ready Deployments"
            subtitle="Configured for every operational environment. From forward operating bases to civilian airports."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="group border border-[#222222] hover:bg-[#0A0A0A] transition-colors overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-[#888888] text-sm">{solution.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Find Your Solution"
        description="Our team will configure Aegis for your specific operational requirements."
      />
    </>
  );
}
