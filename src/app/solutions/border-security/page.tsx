import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Radar, Waves, Mountain, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Border Security — Aegis",
  description: "Counter-UAS for border security. Long-range corridors, coastal zones.",
};

export default function BorderSecurityPage() {
  return (
    <>
      <CapabilityHero
        image="/images/detection-radar.jpg"
        title="Border Security"
        subtitle="Long-range corridors. Coastal zones. Frontier surveillance."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Border Security"
            title="Perimeter Surveillance"
            subtitle="Aegis provides long-range counter-UAS coverage for border corridors and coastal zones. Networked sensor arrays create overlapping detection zones along extended frontier perimeters."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={Radar} title="Long-Range Corridors" description="Networked sensor coverage" />
            <FeatureCard icon={Waves} title="Coastal Zones" description="Maritime surveillance integration" />
            <FeatureCard icon={Mountain} title="Terrain Adaptation" description="Mountain, desert, urban" />
            <FeatureCard icon={Shield} title="Overlapping Zones" description="No gaps in coverage" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Border Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Core (Border)" },
                { key: "Detection Range", value: "12km" },
                { key: "Coverage", value: "360° per node" },
                { key: "Networked Nodes", value: "Unlimited" },
                { key: "Corridor Length", value: "Extended frontier" },
                { key: "Terrain Types", value: "Mountain, desert, coastal, urban" },
                { key: "Max Targets", value: "500+ per node" },
                { key: "Coastal Integration", value: "Maritime radar fusion" },
                { key: "Power", value: "Grid + solar backup" },
                { key: "Communications", value: "Encrypted mesh network" },
                { key: "Deployment", value: "Fixed + mobile nodes" },
                { key: "Monitoring", value: "24/7 centralized SOC" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Border Briefing" description="Secure your borders with networked Aegis counter-UAS technology." />
    </>
  );
}
