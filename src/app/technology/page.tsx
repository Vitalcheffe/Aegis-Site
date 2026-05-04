import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Radar, Layers, Crosshair, BarChart3, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology — Aegis",
  description: "5-layer counter-UAS architecture: Detection, Fusion, Tracking, Classification, Engagement",
};

export default function TechnologyPage() {
  return (
    <>
      <CapabilityHero
        image="/images/command-center.jpg"
        title="Technology"
        subtitle="Five-layer architecture. Twenty milliseconds. Full kill chain."
      />

      {/* 5-Layer Architecture */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Architecture"
            title="Five Layers of Defense"
            subtitle="Each layer operates independently and in concert. Redundant. Fault-tolerant. Lethal."
          />
          <div className="mt-16 space-y-4">
            {[
              {
                icon: Radar,
                layer: "Layer 01",
                title: "Detection",
                description: "Multi-spectral sensor array — S-band radar, RF direction finding, EO/IR cameras, acoustic arrays. Detects UAS at 12km in all weather conditions.",
              },
              {
                icon: Layers,
                layer: "Layer 02",
                title: "Fusion",
                description: "Bayesian Fusion Tree (BFT) correlates data from all sensors in under 10ms. Eliminates false positives while preserving 100% detection probability.",
              },
              {
                icon: Crosshair,
                layer: "Layer 03",
                title: "Tracking",
                description: "IMM-UKF algorithms maintain 500+ simultaneous tracks at 50Hz. Elastic mesh for swarm management with autonomous track association.",
              },
              {
                icon: BarChart3,
                layer: "Layer 04",
                title: "Classification",
                description: "98.9% accuracy across 200+ drone signatures. ML-driven identification in under 20ms with confidence scoring and threat prioritization.",
              },
              {
                icon: Zap,
                layer: "Layer 05",
                title: "Engagement",
                description: "Graduated response from RF jamming to directed energy. Five effector modalities with human-in-the-loop authorization for lethal options.",
              },
            ].map((item) => (
              <div
                key={item.layer}
                className="border border-[#222222] p-6 md:p-8 hover:bg-[#0A0A0A] transition-colors flex gap-6 items-start"
              >
                <item.icon className="text-white shrink-0 mt-1" size={28} strokeWidth={1.5} />
                <div>
                  <div className="text-[#888888] text-xs uppercase tracking-wider mb-2">{item.layer}</div>
                  <h3 className="text-white text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Stack */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Detection Stack"
                title="See Everything"
                subtitle="Four sensor modalities fused into a single operating picture. All-weather. Day and night. No gaps."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={Radar}
                title="S-Band Radar"
                description="12km range, 0.01m² RCS, 360° scan"
              />
              <FeatureCard
                icon={Radar}
                title="RF Direction Finding"
                description="400MHz–6GHz, TDOA/AOA geolocation"
              />
              <FeatureCard
                icon={Radar}
                title="EO/IR Cameras"
                description="Dual-band thermal + visible, AI-enhanced"
              />
              <FeatureCard
                icon={Radar}
                title="Acoustic Arrays"
                description="Passive 5km, 200+ drone signatures"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Specifications"
            title="Key Performance Parameters"
          />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "Tracking Loop", value: "≤ 20ms" },
                { key: "Fusion Cycle", value: "≤ 10ms" },
                { key: "Classification Latency", value: "≤ 20ms" },
                { key: "Max Targets", value: "500+" },
                { key: "Update Rate", value: "50Hz" },
                { key: "Detection Range", value: "12km" },
                { key: "Classification Accuracy", value: "98.9%" },
                { key: "False Positive Rate", value: "< 0.1%" },
                { key: "System Uptime", value: "99.97%" },
                { key: "MTBF", value: "10,000 hours" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        heading="Explore the Architecture"
        description="Deep-dive into each layer of the Aegis counter-UAS system."
        buttonText="Request Technical Briefing"
      />
    </>
  );
}
