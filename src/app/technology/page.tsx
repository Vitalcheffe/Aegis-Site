import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const layers = [
  {
    number: "01",
    title: "Sensor Layer",
    description:
      "S-band radar, RF direction finding (400MHz–6GHz), electro-optical/infrared cameras, and acoustic arrays. Four sensor modalities fused in real-time with Bayesian correlation for 12km detection range.",
    specs: [
      { key: "Radar Range", value: "12 km" },
      { key: "RF Band", value: "400MHz–6GHz" },
      { key: "EO/IR", value: "Dual-band" },
      { key: "Acoustic", value: "5 km" },
    ],
  },
  {
    number: "02",
    title: "Processing Layer",
    description:
      "IMM-UKF tracking algorithms maintain 500+ simultaneous tracks at 50Hz update rate. Distributed processing architecture with hot-standby redundancy and sub-20ms latency from detection to track initiation.",
    specs: [
      { key: "Track Capacity", value: "500+" },
      { key: "Update Rate", value: "50 Hz" },
      { key: "Latency", value: "<20 ms" },
      { key: "Algorithm", value: "IMM-UKF" },
    ],
  },
  {
    number: "03",
    title: "Classification Layer",
    description:
      "Machine learning-driven identification with 98.9% accuracy across 200+ drone signatures. Seven classification categories from commercial quadcopter to fixed-wing military UAS. Classification in under 20ms.",
    specs: [
      { key: "Accuracy", value: "98.9%" },
      { key: "Signatures", value: "200+" },
      { key: "Classes", value: "7" },
      { key: "Latency", value: "<20 ms" },
    ],
  },
  {
    number: "04",
    title: "Decision Layer",
    description:
      "Automated threat assessment and graduated response recommendation. Rules-of-engagement engine with configurable escalation protocols. Human-in-the-loop authorization for kinetic and directed energy options.",
    specs: [
      { key: "Response", value: "Graduated" },
      { key: "Escalation", value: "6 Levels" },
      { key: "Authorization", value: "HITL" },
      { key: "Decision Time", value: "<5 ms" },
    ],
  },
  {
    number: "05",
    title: "Effector Layer",
    description:
      "Five effector modalities from RF jamming and GPS spoofing to protocol manipulation, kinetic intercept, and directed energy. Coordinated multi-effector engagement for swarm scenarios.",
    specs: [
      { key: "RF Jamming", value: "400MHz–6GHz" },
      { key: "GPS Spoofing", value: "L1/L2/L5" },
      { key: "Protocol", value: "Multi-standard" },
      { key: "Kinetic", value: "C-UAS" },
    ],
  },
];

const keySpecs = [
  { label: "End-to-End Latency", value: "20 ms" },
  { label: "Simultaneous Tracks", value: "500+" },
  { label: "Detection Range", value: "12 km" },
  { label: "Classification Accuracy", value: "98.9%" },
  { label: "Effector Modalities", value: "5" },
  { label: "Uptime", value: "99.97%" },
  { label: "Sensor Modalities", value: "4" },
  { label: "Threat Database", value: "200+ Signatures" },
];

export default function TechnologyPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/command-center.jpg"
          alt="Aegis Command Center"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Technology
          </span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Five Layers.
            <br />
            One System.
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            From sensor to effector in 20 milliseconds. Our multi-layered
            architecture delivers the fastest kill chain in counter-UAS defense.
          </p>
        </div>
      </section>

      {/* ═══ CALLOUT ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              Twenty milliseconds. Full kill chain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ ARCHITECTURE LAYERS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Architecture
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Layer by Layer
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {layers.map((layer, i) => (
              <ScrollReveal key={layer.title} delay={i * 60}>
                <div className="border-t border-white/10 py-12 md:py-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-2">
                      <span className="text-[#767676] text-sm font-mono">
                        {layer.number}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-[28px] md:text-[48px] lg:text-[64px] font-bold tracking-[-2px] text-white leading-[1]">
                        {layer.title}
                      </h3>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <div className="space-y-3">
                        {layer.specs.map((spec) => (
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

      {/* ═══ FULL-BLEED IMAGE ═══ */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/detection-radar.jpg"
          alt="Aegis Detection Systems"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>

      {/* ═══ KEY SPECIFICATIONS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Specifications
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                By the Numbers
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {keySpecs.map((spec) => (
                <div key={spec.label} className="border-t border-white/10 pt-6">
                  <div className="text-2xl md:text-4xl font-bold text-white tracking-[-0.02em]">
                    {spec.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#767676] mt-2">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[48px] font-bold tracking-[-0.03em] text-white">
              Experience the Architecture
            </h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">
              Request a classified briefing to see the full system demonstration.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-demo"
                className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
              >
                Request Demo
              </Link>
              <Link
                href="/demos"
                className="border border-white/20 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                View Demos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
