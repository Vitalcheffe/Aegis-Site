import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Radar, Radio, Eye, Ear, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Detection — Aegis",
  description: "Multi-spectral detection: S-band radar, RF DF, EO/IR cameras, and acoustic arrays.",
};

export default function DetectionPage() {
  return (
    <>
      <CapabilityHero
        image="/images/detection-radar.jpg"
        title="Detection"
        subtitle="Four sensor modalities. Zero gaps. All-weather, day and night."
      />

      {/* Sensor Modalities */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sensor Stack"
            title="Four Modalities"
            subtitle="Overlapping coverage eliminates blind spots. Each modality compensates for the others' limitations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Radar className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-bold mb-2">S-Band Radar</h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                Primary detection sensor. 12km range with 0.01m² RCS minimum detectable target. 360° continuous scan with electronic beam steering. All-weather operation through rain, fog, and dust.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Range</span>
                  <span className="text-white">12km</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">RCS Minimum</span>
                  <span className="text-white">0.01m²</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Coverage</span>
                  <span className="text-white">360°</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Weather</span>
                  <span className="text-white">All-weather</span>
                </div>
              </div>
            </div>

            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Radio className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-bold mb-2">RF Direction Finding</h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                Passive detection of UAS communication links. 400MHz to 6GHz coverage with multi-band simultaneous monitoring. TDOA and AOA geolocation for precise emitter location.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Frequency Range</span>
                  <span className="text-white">400MHz–6GHz</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Method</span>
                  <span className="text-white">TDOA / AOA</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Bands</span>
                  <span className="text-white">Multi-band simultaneous</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Mode</span>
                  <span className="text-white">Passive</span>
                </div>
              </div>
            </div>

            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Eye className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-bold mb-2">EO/IR Cameras</h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                Dual-band thermal and visible spectrum cameras with AI-enhanced imagery. Auto-tracking and identification. Complements radar for visual confirmation and classification.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Bands</span>
                  <span className="text-white">Thermal + Visible</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Enhancement</span>
                  <span className="text-white">AI-enhanced</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Tracking</span>
                  <span className="text-white">Auto-track</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Role</span>
                  <span className="text-white">Visual confirmation</span>
                </div>
              </div>
            </div>

            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Ear className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-bold mb-2">Acoustic Arrays</h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                Passive acoustic detection to 5km. 200+ drone signature library for identification. Complements radar for low-RCS targets and provides backup sensor coverage.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Range</span>
                  <span className="text-white">5km</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Signature Library</span>
                  <span className="text-white">200+ drones</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Mode</span>
                  <span className="text-white">Passive</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Role</span>
                  <span className="text-white">Low-RCS complement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BFT Fusion */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Sensor Fusion"
                title="Bayesian Fusion Tree"
                subtitle="BFT correlates data from all four sensor modalities in under 10ms. Probabilistic association eliminates false positives while preserving 100% detection probability. Each sensor vote is weighted by confidence and historical accuracy."
              />
            </div>
            <div className="space-y-4">
              <FeatureCard icon={Layers} title="< 10ms Fusion Cycle" description="All sensor data correlated and fused in a single cycle" />
              <FeatureCard icon={Layers} title="Probabilistic Association" description="Bayesian weighting with confidence scoring per sensor modality" />
              <FeatureCard icon={Layers} title="False Positive Elimination" description="Multi-sensor confirmation required before track initiation" />
            </div>
          </div>
        </div>
      </section>

      {/* Full Specs */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Detection Parameters" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "Radar Band", value: "S-Band" },
                { key: "Radar Range", value: "12km" },
                { key: "Radar RCS Min", value: "0.01m²" },
                { key: "Radar Scan", value: "360° electronic" },
                { key: "RF Frequency Range", value: "400MHz–6GHz" },
                { key: "RF Method", value: "TDOA / AOA" },
                { key: "EO/IR Bands", value: "Thermal + Visible" },
                { key: "EO/IR Enhancement", value: "AI-enhanced" },
                { key: "Acoustic Range", value: "5km" },
                { key: "Acoustic Signatures", value: "200+" },
                { key: "Fusion Algorithm", value: "Bayesian Fusion Tree" },
                { key: "Fusion Cycle", value: "≤ 10ms" },
                { key: "Detection Probability", value: "100% (multi-sensor)" },
                { key: "False Positive Rate", value: "< 0.1%" },
                { key: "Classification Accuracy", value: "98.9%" },
                { key: "Target Types", value: "Fixed-wing, multi-rotor, VTOL, custom" },
                { key: "Simultaneous Targets", value: "500+" },
                { key: "Update Rate", value: "50Hz" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Detection Briefing" description="See how Aegis multi-spectral detection works in your operational environment." />
    </>
  );
}
