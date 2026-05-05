import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const effectors = [
  {
    level: "01",
    title: "RF Jamming",
    description:
      "Broadband and narrowband RF jamming across 400MHz–6GHz. Disrupts UAS control links and video downlinks. Directional jamming minimizes collateral interference. Effective at ranges up to 8km.",
    specs: [
      { key: "Frequency", value: "400MHz–6GHz" },
      { key: "Range", value: "8 km" },
      { key: "Mode", value: "Directional" },
      { key: "Power", value: "Variable" },
    ],
  },
  {
    level: "02",
    title: "GPS Spoofing",
    description:
      "Precision GPS spoofing on L1/L2/L5 bands. Redirects UAS to designated safe landing zones or return-to-home points. Coordinate injection with sub-meter accuracy for controlled recovery.",
    specs: [
      { key: "Bands", value: "L1/L2/L5" },
      { key: "Accuracy", value: "<1 m" },
      { key: "Mode", value: "Spoof + Redirect" },
      { key: "Latency", value: "<50 ms" },
    ],
  },
  {
    level: "03",
    title: "Protocol Manipulation",
    description:
      "Exploitation of UAS communication protocols for direct vehicle control. Manufacturer-specific and open protocol support. Enables safe landing, battery command, and flight termination.",
    specs: [
      { key: "Protocols", value: "Multi-standard" },
      { key: "Effect", value: "Vehicle Control" },
      { key: "Classification", value: "Type 3+" },
      { key: "Latency", value: "<100 ms" },
    ],
  },
  {
    level: "04",
    title: "Kinetic Intercept",
    description:
      "Integration with kinetic C-UAS interceptors. Human-in-the-loop authorization required. Coordination with Aegis tracking for intercept geometry and timing calculations.",
    specs: [
      { key: "Type", value: "C-UAS Interceptor" },
      { key: "Authorization", value: "HITL Required" },
      { key: "Guidance", value: "Aegis Track Data" },
      { key: "Range", value: "Classified" },
    ],
  },
  {
    level: "05",
    title: "Directed Energy",
    description:
      "High-energy laser integration for UAS defeat. Precise beam steering coordinated with Aegis tracking. Counter-material and counter-sensor effects. Highest escalation level with full authorization chain.",
    specs: [
      { key: "Type", value: "HEL Integration" },
      { key: "Authorization", value: "Full Chain" },
      { key: "Effect", value: "Counter-Material" },
      { key: "Range", value: "Classified" },
    ],
  },
];

const escalationLevels = [
  { level: "Warn", description: "Visual and RF warning to UAS operator" },
  { level: "Track", description: "Persistent track with classification" },
  { level: "Jam", description: "RF jamming of control and video links" },
  { level: "Spoof", description: "GPS spoofing and redirect" },
  { level: "Kinetic", description: "Physical intercept (HITL authorized)" },
  { level: "DE", description: "Directed energy defeat (full authorization)" },
];

export default function NeutralizationPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/neutralization-rf.jpg"
          alt="Aegis Neutralization Systems"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Capabilities
          </span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Neutralization
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Graduated response from RF jamming to directed energy. Five effector
            modalities with human-in-the-loop for lethal options.
          </p>
        </div>
      </section>

      {/* ═══ CALLOUT ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              Five effectors. Graduated response. Human authorization for lethal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ EFFECTOR MODALITIES ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Effector Architecture
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Five Modalities
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {effectors.map((effector, i) => (
              <ScrollReveal key={effector.title} delay={i * 60}>
                <div className="border-t border-white/10 py-12 md:py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-1">
                      <span className="text-[#767676] text-sm font-mono">
                        {effector.level}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-[28px] md:text-[48px] font-bold tracking-[-2px] text-white leading-[1]">
                        {effector.title}
                      </h3>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {effector.description}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <div className="space-y-3">
                        {effector.specs.map((spec) => (
                          <div
                            key={spec.key}
                            className="flex justify-between border-b border-white/5 pb-2"
                          >
                            <span className="text-[#767676] text-xs uppercase tracking-wider">
                              {spec.key}
                            </span>
                            <span className="text-white text-sm font-medium">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* ═══ GRADUATED RESPONSE TIMELINE ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Escalation Protocol
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Graduated Response
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-0">
              {escalationLevels.map((level, i) => (
                <div
                  key={level.level}
                  className="border-t border-white/10 pt-6 pb-8 md:pr-4"
                >
                  <div className="text-[#2b5945] text-xs font-mono mb-2">
                    Level {i + 1}
                  </div>
                  <div className="text-white text-xl md:text-2xl font-bold tracking-[-0.02em] mb-2">
                    {level.level}
                  </div>
                  <div className="text-[#767676] text-sm leading-relaxed">
                    {level.description}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FULL-BLEED IMAGE ═══ */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/neutralization-laser.jpg"
          alt="Aegis Directed Energy"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[48px] font-bold tracking-[-0.03em] text-white">
              Evaluate the Full Kill Chain
            </h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">
              Classified briefings available for qualified defense organizations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-demo"
                className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
              >
                Request Demo
              </Link>
              <Link
                href="/technology"
                className="border border-white/20 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                Full Architecture
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
