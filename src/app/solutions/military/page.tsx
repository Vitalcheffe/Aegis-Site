import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Military Solutions — Aegis",
  description: "Counter-UAS for military: FOBs, naval vessels, and convoy protection.",
};

const subSolutions = [
  {
    title: "Forward Operating Bases",
    description: "360° perimeter defense. 12km detection. 500+ simultaneous targets. 24/7 autonomous operation with human authorization for lethal engagement.",
    image: "/images/fob-aerial.jpg",
    href: "/solutions/military/forward-operating-bases",
  },
  {
    title: "Naval",
    description: "Shipborne counter-UAS rated to sea state 5. MIL-STD-901D shock qualified. Multi-axis stabilization for vessel motion compensation.",
    image: "/images/palantir-submarine.png",
    href: "/solutions/military/naval",
  },
  {
    title: "Convoys",
    description: "Vehicle-mounted tactical systems. 200+ target tracking. Operational in under 30 minutes. On-the-move detection and jamming capability.",
    image: "/images/products-aegis-tactical.jpg",
    href: "/solutions/military/convoys",
  },
];

export default function MilitarySolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Military"
            title="Defense Operations"
            subtitle="Counter-UAS solutions for every military environment — from fixed bases to mobile convoys and naval vessels."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {subSolutions.map((sub, i) => (
            <div key={sub.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`${i % 2 === 1 ? "md:order-2" : ""} relative aspect-[4/3] overflow-hidden`}>
                <Image src={sub.image} alt={sub.title} fill className="object-cover" />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{sub.title}</h2>
                <p className="text-[#888888] text-lg leading-relaxed mb-6">{sub.description}</p>
                <Link
                  href={sub.href}
                  className="inline-block border border-[#333333] text-white px-6 py-3 text-sm font-medium hover:border-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection heading="Request Military Briefing" description="Schedule a classified briefing for your defense operations." />
    </>
  );
}
