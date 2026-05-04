import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Radio, Battery } from "lucide-react";

export const metadata: Metadata = {
  title: "Aegis Mobile — Man-Portable System",
  description: "Man-portable counter-UAS system. 50+ targets, 12.5kg, <2min deployment.",
};

export default function AegisMobilePage() {
  return (
    <>
      <CapabilityHero
        image="/images/soldier-jammer.jpg"
        title="Aegis Mobile"
        subtitle="Man-Portable Counter-UAS System — Dismounted Operations"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                badge="Man-Portable"
                title="2 Minutes to Operational"
                subtitle="12.5kg total system weight. Dismounted operations. Directional and omni jamming with RF direction finding. 4-hour battery life."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBlock value="50+" label="Max Targets" />
              <StatBlock value="12.5kg" label="System Weight" />
              <StatBlock value="4hr" label="Battery Life" />
              <StatBlock value="<2min" label="Deploy Time" />
            </div>
          </div>
        </div>
      </section>

      {/* Sensors & Effectors */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Capabilities" title="Detect and Defeat" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
            <FeatureCard
              icon={Radio}
              title="RF Direction Finding"
              description="400MHz–6GHz frequency coverage, directional bearing to threat, 3km detection range"
            />
            <FeatureCard
              icon={Radio}
              title="Directional Jamming"
              description="Focused RF disruption, targeted engagement, minimal collateral interference"
            />
            <FeatureCard
              icon={Battery}
              title="Omni Jamming"
              description="360° RF disruption, area denial mode, rapid threat suppression"
            />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Technical Parameters" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System Type", value: "Man-Portable" },
                { key: "Max Targets", value: "50+" },
                { key: "Detection Method", value: "RF Direction Finding" },
                { key: "Detection Range", value: "3km" },
                { key: "Jamming Modes", value: "Directional + Omni" },
                { key: "Frequency Range", value: "400MHz–6GHz" },
                { key: "Battery Life", value: "4 hours" },
                { key: "System Weight", value: "12.5kg" },
                { key: "Deploy Time", value: "< 2 minutes" },
                { key: "Operating Temperature", value: "-20°C to +50°C" },
                { key: "Ruggedization", value: "MIL-STD-810G" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Mobile System Briefing" description="Evaluate Aegis Mobile for your dismounted operations." />
    </>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-[#222222] p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
      <div className="text-[#888888] text-xs uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
}
