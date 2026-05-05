import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const specs = [
  { key: "Track Capacity", value: "200+" },
  { key: "Update Rate", value: "25 Hz" },
  { key: "End-to-End Latency", value: "40 ms" },
  { key: "Detection Range", value: "8 km" },
  { key: "Sensor Modalities", value: "3" },
  { key: "Effector Types", value: "4" },
  { key: "Classification Accuracy", value: "97.2%" },
  { key: "Deploy Time", value: "<15 min" },
  { key: "Vehicle Mount", value: "Standard" },
  { key: "Power", value: "Vehicle + Battery" },
  { key: "Mast Height", value: "8m / 12m" },
  { key: "Operators", value: "1–3" },
];

const differentiators = [
  {
    title: "Rapid Deployment",
    description:
      "Operational in under 15 minutes from arrival. Vehicle-mounted sensor mast deploys automatically with hydraulic actuation. No crane required.",
  },
  {
    title: "Mobile Kill Chain",
    description:
      "Full detection-to-neutralization capability while on the move. Maintains 200+ tracks at 25Hz during vehicle transit at speeds up to 60 km/h.",
  },
  {
    title: "Modular Architecture",
    description:
      "Sensor and effector pods can be swapped in the field. Configure for radar + RF, EO/IR + RF, or full-spectrum depending on mission requirements.",
  },
  {
    title: "Convoy Integration",
    description:
      "Multiple Tactical units form a mesh network for convoy protection. Shared tracking picture with automatic handoff between vehicles.",
  },
];

export default function AegisTacticalPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/products-aegis-tactical.jpg"
          alt="Aegis Tactical System"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Products
          </span>
          <h1 className="mt-4 text-[48px] md:text-[80px] lg:text-[120px] font-bold tracking-[-3px] md:tracking-[-4px] leading-[0.9] text-white">
            Aegis Tactical
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Vehicle-mounted counter-UAS system for tactical operations. 200+
            tracks. Mobile kill chain. Operational in under 15 minutes.
          </p>
          <Link
            href="/request-demo"
            className="inline-block mt-10 bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </section>

      {/* ═══ CALLOUT ═══ */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              200 tracks. On the move. Full kill chain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ SPECIFICATIONS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Specifications
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Technical Data
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {specs.map((spec) => (
                <div
                  key={spec.key}
                  className="flex justify-between items-center border-b border-white/10 py-5"
                >
                  <span className="text-[#767676] text-sm uppercase tracking-wider">
                    {spec.key}
                  </span>
                  <span className="text-white text-lg font-bold tracking-[-0.02em]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FULL-BLEED IMAGE ═══ */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/fob-aerial.jpg"
          alt="Aegis Tactical Deployment"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </section>

      {/* ═══ KEY DIFFERENTIATORS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Differentiators
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Why Aegis Tactical
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 80}>
                <div className="border-t border-white/10 py-10 md:py-14">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                    <div className="md:col-span-5">
                      <h3 className="text-[24px] md:text-[40px] font-bold tracking-[-2px] text-white leading-[1.1]">
                        {d.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7 md:pt-2">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {d.description}
                      </p>
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
              Deploy Aegis Tactical
            </h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">
              Request a mobile demonstration at your facility or forward operating location.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-demo"
                className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
              >
                Request Demo
              </Link>
              <Link
                href="/products"
                className="border border-white/20 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                All Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
