import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const stats = [
  { value: "12", label: "Nations Deployed" },
  { value: "240+", label: "Systems Operational" },
  { value: "500+", label: "Threats Neutralized" },
  { value: "1M+", label: "Operational Hours" },
  { value: "98.9%", label: "Classification Accuracy" },
];

const capabilities = [
  {
    title: "Detection",
    description:
      "Multi-spectral sensor fusion detects UAS at 12km. S-band radar, RF direction finding, electro-optical/infrared, and acoustic arrays operating in concert with Bayesian correlation.",
    href: "/detection",
  },
  {
    title: "Tracking",
    description:
      "IMM-UKF algorithms maintain 500+ simultaneous tracks at 50Hz update rate. Swarm-capable with autonomous track association and elastic mesh management.",
    href: "/tracking",
  },
  {
    title: "Classification",
    description:
      "98.9% accuracy across 200+ drone signatures. Machine learning-driven identification in under 20ms. False positive rate below 0.1%.",
    href: "/technology",
  },
  {
    title: "Neutralization",
    description:
      "Graduated response from RF jamming to directed energy. Five effector modalities with human-in-the-loop authorization for kinetic options.",
    href: "/neutralization",
  },
];

const solutions = [
  {
    title: "Military",
    subtitle: "FOBs · Naval · Convoys",
    description: "Combat-proven across 12 nations. Forward operating bases, naval vessels, and convoy protection with full kill chain integration.",
    href: "/solutions/military",
    image: "/images/fob-aerial.jpg",
  },
  {
    title: "Critical Infrastructure",
    subtitle: "Power · Data · Government",
    description: "Power plants, data centers, government facilities. SCADA integration with zero-false-positive operation.",
    href: "/solutions/critical-infrastructure",
    image: "/images/command-center.jpg",
  },
  {
    title: "Airports",
    subtitle: "ATC · Civilian · Military",
    description: "ATC-integrated with 99.97% uptime. Zero disruption to civilian air traffic while maintaining full threat coverage.",
    href: "/solutions/airports",
    image: "/images/solutions-airport.jpg",
  },
  {
    title: "Border Security",
    subtitle: "Corridors · Coastal · Frontier",
    description: "Long-range corridor surveillance, coastal zone monitoring, and frontier defense with persistent 24/7 coverage.",
    href: "/solutions/border-security",
    image: "/images/satellite.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-radar.jpg"
          alt="Aegis Radar System"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 text-center max-w-[80rem] mx-auto px-5 md:px-8">
          <h1 className="text-[30px] sm:text-[50px] md:text-[80px] font-bold tracking-[-2px] md:tracking-[-3.4px] leading-[1.1] text-white">
            The Future of
            <br />
            Counter-UAS Defense
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Multi-spectral detection. 500+ targets. 20 milliseconds.
            <br />
            Full kill chain from sensor to effector.
          </p>
          <Link
            href="/request-demo"
            className="inline-block mt-10 bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
          >
            Request Demo
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.2em] animate-bounce">
          Scroll to Explore ↓
        </div>
      </section>

      {/* ═══ CALLOUT — Massive centered text ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              Our software detects, classifies, and neutralizes unmanned aerial
              threats in real-time — protecting critical infrastructure, military
              assets, and civilian populations worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ANIMATED LINE ═══ */}
      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ STATS ═══ */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white tracking-[-0.02em]">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#767676] mt-2">
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ ANIMATED LINE ═══ */}
      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ CAPABILITIES — Product-list style ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Capabilities
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1] text-white">
                Complete Kill Chain
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 80}>
                <div className="border-t border-white/10 group">
                  <div className="py-10 md:py-16 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 hover:bg-white/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                    <div className="md:flex-1">
                      <h3 className="text-[36px] md:text-[72px] font-bold tracking-[-3px] text-white group-hover:text-white/90 transition-colors leading-[1]">
                        {cap.title}
                      </h3>
                    </div>
                    <div className="md:flex-1 md:pt-3">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {cap.description}
                      </p>
                      <Link
                        href={cap.href}
                        className="inline-block mt-6 text-[10px] uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
                      >
                        Explore →
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

      {/* ═══ SOLUTIONS — Full-bleed image sections ═══ */}
      {solutions.map((sol, i) => (
        <section
          key={sol.title}
          className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden"
        >
          <Image
            src={sol.image}
            alt={sol.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 py-20 md:py-0 w-full">
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                {sol.subtitle}
              </span>
              <h2 className="mt-3 text-[36px] md:text-[64px] lg:text-[80px] font-bold tracking-[-3px] leading-[1] text-white">
                {sol.title}
              </h2>
              <p className="mt-6 text-[#b9b9b9] text-base md:text-lg leading-relaxed max-w-xl">
                {sol.description}
              </p>
              <Link
                href={sol.href}
                className="inline-block mt-8 bg-white text-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
              >
                Learn More
              </Link>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ═══ DEPLOYMENT STRIP ═══ */}
      <section className="py-16 md:py-24 bg-black border-y border-white/10">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[24px] md:text-[48px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              12 Nations. 5 Continents. 240+ Systems. 1M+ Hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PRODUCTS PREVIEW ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Platforms
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] leading-[1] text-white">
                Built for Every Mission
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                title: "Aegis Core",
                spec: "500+ targets · 50Hz · 20ms",
                href: "/products/aegis-core",
              },
              {
                title: "Aegis Tactical",
                spec: "200+ targets · 25Hz · Mobile",
                href: "/products/aegis-tactical",
              },
              {
                title: "Aegis Mobile",
                spec: "50+ targets · RF DF · Man-packable",
                href: "/products/aegis-mobile",
              },
            ].map((product, i) => (
              <ScrollReveal key={product.title} delay={i * 80}>
                <Link
                  href={product.href}
                  className="block border-t border-white/10 group"
                >
                  <div className="py-10 md:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 hover:bg-white/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                    <h3 className="text-[36px] md:text-[72px] lg:text-[100px] font-bold tracking-[-3px] text-white group-hover:text-white/90 transition-colors leading-[1]">
                      {product.title}
                    </h3>
                    <div className="md:pb-3 flex items-center gap-4">
                      <span className="text-[#767676] text-sm">
                        {product.spec}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
