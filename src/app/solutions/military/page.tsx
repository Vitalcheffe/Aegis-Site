import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const subSolutions = [
  { title: "Forward Operating Bases", href: "/solutions/military/forward-operating-bases" },
  { title: "Convoys", href: "/solutions/military/convoys" },
  { title: "Naval Vessels", href: "/solutions/military/naval" },
];

const specs = [
  { key: "Deployment", value: "12 Nations" },
  { key: "Systems Active", value: "180+" },
  { key: "Threats Neutralized", value: "350+" },
  { key: "Uptime", value: "99.97%" },
  { key: "Configuration", value: "Core + Tactical" },
  { key: "Response Time", value: "<20 ms" },
];

export default function MilitaryPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/fob-aerial.jpg"
          alt="Aegis Military Solutions"
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
          <h1 className="mt-4 text-[48px] md:text-[80px] lg:text-[120px] font-bold tracking-[-3px] md:tracking-[-4px] leading-[0.9] text-white">
            Military
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Combat-proven across 12 nations. Forward operating bases, naval vessels,
            and convoy protection with full kill chain integration.
          </p>
          <Link
            href="/request-demo"
            className="inline-block mt-10 bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Sub-Solutions
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Configurations
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {subSolutions.map((sub, i) => (
              <ScrollReveal key={sub.title} delay={i * 80}>
                <Link
                  href={sub.href}
                  className="block border-t border-white/10 group"
                >
                  <div className="py-10 md:py-16 flex items-center justify-between hover:bg-white/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                    <h3 className="text-[28px] md:text-[56px] font-bold tracking-[-2px] text-white group-hover:text-white/90 transition-colors leading-[1]">
                      {sub.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              Combat-proven. 12 nations. Full spectrum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Data
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                By the Numbers
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {specs.map((spec) => (
                <div key={spec.key} className="flex justify-between items-center border-b border-white/10 py-5">
                  <span className="text-[#767676] text-sm uppercase tracking-wider">{spec.key}</span>
                  <span className="text-white text-lg font-bold tracking-[-0.02em]">{spec.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
