import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const offerings = [
  {
    prefix: "↳",
    title: "Military",
    description:
      "Forward operating bases, naval vessels, convoy protection. Combat-proven across 12 nations with full kill chain integration. Configured for the most demanding operational environments.",
    href: "/solutions/military",
  },
  {
    prefix: "↳",
    title: "Critical Infrastructure",
    description:
      "Power plants, data centers, government facilities. SCADA integration with zero-false-positive operation. 99.97% uptime protecting assets that cannot fail.",
    href: "/solutions/critical-infrastructure",
  },
  {
    prefix: "↳",
    title: "Airports",
    description:
      "ATC-integrated with 99.97% uptime. Zero disruption to civilian air traffic while maintaining full threat coverage. Certified for operational use in controlled airspace.",
    href: "/solutions/airports",
  },
  {
    prefix: "↳",
    title: "Border Security",
    description:
      "Long-range corridor surveillance, coastal zone monitoring, and frontier defense. Persistent 24/7 coverage across extended perimeters with overlapping detection zones.",
    href: "/solutions/border-security",
  },
  {
    prefix: "↳",
    title: "VIP Protection",
    description:
      "Discreet mobile and fixed protection for high-value individuals. Rapid deployment capability with covert operation modes. Integrated with existing security infrastructure.",
    href: "/solutions/vip-protection",
  },
  {
    prefix: "↳",
    title: "Prisons & Corrections",
    description:
      "Contraband drone detection and interdiction for correctional facilities. RF jamming and GPS spoofing to prevent drone-delivered contraband. Compliant with civil spectrum regulations.",
    href: "/solutions/prisons",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/fob-aerial.jpg"
          alt="Aegis Solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Solutions
          </span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Mission-Ready
            <br />
            Deployments
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Configured for every operational environment — from forward operating
            bases to civilian airports.
          </p>
        </div>
      </section>

      {/* ═══ CALLOUT ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              One architecture. Every mission. Every environment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ OFFERINGS LIST ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Sectors
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Offerings
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {offerings.map((offering, i) => (
              <ScrollReveal key={offering.title} delay={i * 80}>
                <div className="border-t border-white/10 group">
                  <div className="py-10 md:py-16 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 hover:bg-white/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                    <div className="md:flex-1">
                      <h3 className="text-[36px] md:text-[72px] font-bold tracking-[-3px] text-white group-hover:text-white/90 transition-colors leading-[1]">
                        <span className="text-[#767676]">{offering.prefix}</span>{" "}
                        {offering.title}
                      </h3>
                    </div>
                    <div className="md:flex-1 md:pt-3">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {offering.description}
                      </p>
                      <Link
                        href={offering.href}
                        className="inline-block mt-6 text-[10px] uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[48px] font-bold tracking-[-0.03em] text-white">
              Find Your Solution
            </h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">
              Our defense engineers will configure Aegis for your specific operational requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
