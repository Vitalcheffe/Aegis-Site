import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const sensors = [
  {
    title: "S-Band Radar",
    description:
      "Primary detection sensor with 12km range for small UAS (RCS 0.01m²). Electronically scanned array with 360° coverage and 2° elevation coverage. Pulse-Doppler processing with MTI and CFAR algorithms for clutter rejection.",
    specs: [
      { key: "Range", value: "12 km" },
      { key: "RCS Threshold", value: "0.01 m²" },
      { key: "Coverage", value: "360° Az" },
      { key: "Elevation", value: "0–60°" },
    ],
  },
  {
    title: "RF Direction Finding",
    description:
      "Passive RF detection and direction finding across 400MHz–6GHz. Identifies UAS control signals, video downlinks, and telemetry. 5-Channel interferometer array with 3° bearing accuracy for rapid geolocation.",
    specs: [
      { key: "Frequency", value: "400MHz–6GHz" },
      { key: "Bearing Accuracy", value: "3°" },
      { key: "Channels", value: "5" },
      { key: "Mode", value: "Passive" },
    ],
  },
  {
    title: "Electro-Optical / Infrared",
    description:
      "Dual-band imaging system with day/night capability. Continuous zoom optics with automatic target handoff from radar and RF sensors. AI-enhanced image processing for visual classification and forensic recording.",
    specs: [
      { key: "Bands", value: "Visible + MWIR" },
      { key: "Zoom", value: "30× Continuous" },
      { key: "Range (Detect)", value: "6 km" },
      { key: "Recording", value: "Forensic HD" },
    ],
  },
  {
    title: "Acoustic Array",
    description:
      "Passive acoustic detection array for low-altitude and terrain-masked UAS. Multi-microphone beamforming with proprietary drone sound signature library. Effective in RF-denied environments and as a supplemental modality.",
    specs: [
      { key: "Range", value: "5 km" },
      { key: "Elements", value: "8 Microphone" },
      { key: "Mode", value: "Passive" },
      { key: "Signature Library", value: "150+" },
    ],
  },
];

const fusionSpecs = [
  { key: "Fusion Algorithm", value: "Bayesian Correlation" },
  { key: "Association Latency", value: "<5 ms" },
  { key: "Multi-Track Merge", value: "Automatic" },
  { key: "Degradation Mode", value: "Graceful" },
  { key: "False Track Rate", value: "<0.01/hr" },
  { key: "Correlation Confidence", value: "99.2%" },
];

export default function DetectionPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/detection-radar.jpg"
          alt="Aegis Detection Systems"
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
            Detection
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Four sensor modalities fused in real-time. 12km range. Sub-second
            detection-to-track. No single point of failure.
          </p>
        </div>
      </section>

      {/* ═══ SENSOR MODALITIES ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Sensor Architecture
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Four Modalities
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {sensors.map((sensor, i) => (
              <ScrollReveal key={sensor.title} delay={i * 80}>
                <div className="border-t border-white/10 py-12 md:py-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-5">
                      <h3 className="text-[28px] md:text-[48px] lg:text-[64px] font-bold tracking-[-2px] text-white leading-[1]">
                        {sensor.title}
                      </h3>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {sensor.description}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <div className="space-y-3">
                        {sensor.specs.map((spec) => (
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
          src="/images/hero-radar.jpg"
          alt="Aegis Radar Array"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>

      {/* ═══ BFT FUSION CALLOUT ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              Bayesian Fusion. Four sensors. One truth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ FUSION SPECS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Fusion Engine
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                BFT Correlation
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {fusionSpecs.map((spec) => (
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
              See Detection in Action
            </h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">
              Live radar PPI display and multi-sensor fusion demonstration.
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
