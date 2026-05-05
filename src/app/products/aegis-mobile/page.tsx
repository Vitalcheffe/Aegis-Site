import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const specs = [
  { key: "Track Capacity", value: "50+" },
  { key: "Update Rate", value: "10 Hz" },
  { key: "End-to-End Latency", value: "80 ms" },
  { key: "Detection Range", value: "4 km" },
  { key: "Sensor Modality", value: "RF DF" },
  { key: "Effector Types", value: "2 (Jam + Spoof)" },
  { key: "Classification Accuracy", value: "94.5%" },
  { key: "Weight", value: "12 kg" },
  { key: "Battery Life", value: "8 hours" },
  { key: "Operators", value: "1" },
  { key: "RF Band", value: "400MHz–6GHz" },
  { key: "Operating Temp", value: "-20°C to +55°C" },
];

const differentiators = [
  {
    title: "Man-Packable",
    description:
      "At 12 kg, Aegis Mobile is the lightest full-capability C-UAS system in the world. Single-operator deployment in under 2 minutes. No vehicle required.",
  },
  {
    title: "RF Direction Finding",
    description:
      "Precision RF direction finding across 400MHz–6GHz. Detects and locates UAS control signals and video downlinks at 4km range with 3° bearing accuracy.",
  },
  {
    title: "8-Hour Battery",
    description:
      "Hot-swappable battery packs provide 8 hours of continuous operation. Solar charging option for extended dismounted missions. No external power required.",
  },
  {
    title: "Austere Environment",
    description:
      "Rated for -20°C to +55°C. IP67 sealed. Drop-tested to 1.5m. Designed for airborne, amphibious, and arctic operations where other systems cannot operate.",
  },
];

export default function AegisMobilePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/soldier-jammer.jpg"
          alt="Aegis Mobile System"
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
            Aegis Mobile
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Man-packable counter-UAS for dismounted operations. 12 kg. 8-hour
            battery. RF direction finding and jamming in a single operator package.
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
              12 kilograms. One operator. Full counter-UAS.
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
          src="/images/drone-threat.jpg"
          alt="Aegis Mobile Operations"
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
                Why Aegis Mobile
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
              Test Aegis Mobile
            </h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">
              Hands-on evaluation available for qualified defense organizations.
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
