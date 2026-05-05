import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const trackingSpecs = [
  { key: "Track Capacity", value: "500+" },
  { key: "Update Rate", value: "50 Hz" },
  { key: "Algorithm", value: "IMM-UKF" },
  { key: "Latency (Detect→Track)", value: "<20 ms" },
  { key: "Track Association", value: "Autonomous" },
  { key: "Swarm Management", value: "Elastic Mesh" },
  { key: "Position Accuracy", value: "<15 m CEP" },
  { key: "Velocity Accuracy", value: "<2 m/s" },
  { key: "Bearing Accuracy", value: "<1°" },
  { key: "Track Memory", value: "30 sec" },
  { key: "Coast Duration", value: "10 sec" },
  { key: "Simultaneous Engagements", value: "24+" },
];

const features = [
  {
    title: "IMM-UKF Algorithm",
    description:
      "Interacting Multiple Model with Unscented Kalman Filter. Dynamically switches between kinematic models for straight-line, turning, and maneuvering targets. Maintains accurate state estimates through aggressive maneuvers.",
  },
  {
    title: "Swarm-Capable",
    description:
      "Elastic mesh architecture scales to 500+ simultaneous tracks. Autonomous track-to-track association with probabilistic data association. Group tracking for formation and swarm scenarios.",
  },
  {
    title: "Autonomous Association",
    description:
      "Nearest-neighbor joint probabilistic data association with multi-hypothesis tracking. Resolves ambiguous returns in dense environments. Automatic track initiation and termination.",
  },
  {
    title: "Multi-Source Fusion",
    description:
      "Fuses track data from radar, RF DF, EO/IR, and acoustic sensors. Bayesian correlation with sensor-specific uncertainty models. Graceful degradation when individual sensors are unavailable.",
  },
];

export default function TrackingPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/satellite.jpg"
          alt="Aegis Tracking Systems"
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
            Tracking
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            500+ simultaneous tracks at 50Hz. IMM-UKF algorithms with autonomous
            association and elastic mesh for swarm scenarios.
          </p>
        </div>
      </section>

      {/* ═══ CALLOUT ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              500 tracks. 50 updates per second. Zero human intervention.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ FEATURES ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Architecture
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Track Management
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="border-t border-white/10 py-10 md:py-14">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                    <div className="md:col-span-5">
                      <h3 className="text-[24px] md:text-[40px] font-bold tracking-[-2px] text-white leading-[1.1]">
                        {f.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7 md:pt-2">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {f.description}
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

      {/* ═══ FULL-BLEED IMAGE ═══ */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/command-center.jpg"
          alt="Aegis Tracking Command"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </section>

      {/* ═══ SPECIFICATIONS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Specifications
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Tracking Data
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {trackingSpecs.map((spec) => (
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

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[48px] font-bold tracking-[-0.03em] text-white">
              Experience Real-Time Tracking
            </h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">
              See the live radar PPI display with 500+ track management.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demos"
                className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
              >
                View Demo
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
