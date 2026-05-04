import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Shield, Radio, Eye, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Prisons — Aegis",
  description: "Counter-UAS for prisons. Contraband interdiction, perimeter detection and jamming.",
};

export default function PrisonsPage() {
  return (
    <>
      <CapabilityHero
        image="/images/neutralization-rf.jpg"
        title="Prison Security"
        subtitle="Contraband interdiction. Perimeter detection and jamming."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Prisons"
            title="Contraband Interdiction"
            subtitle="Aegis provides counter-UAS protection for correctional facilities. Detect and neutralize drones attempting to deliver contraband. Indoor and outdoor coverage with perimeter detection and RF jamming."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={Eye} title="Perimeter Detection" description="24/7 drone detection" />
            <FeatureCard icon={Radio} title="RF Jamming" description="Prevent contraband delivery" />
            <FeatureCard icon={Shield} title="Indoor + Outdoor" description="Complete facility coverage" />
            <FeatureCard icon={Building} title="Low False Positive" description="No disruption to operations" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Prison Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Core (Prison)" },
                { key: "Detection Range", value: "12km" },
                { key: "Coverage", value: "360° perimeter" },
                { key: "Primary Effector", value: "RF Jamming" },
                { key: "Indoor Coverage", value: "Signal detection + jamming" },
                { key: "False Positive Rate", value: "< 0.1%" },
                { key: "Alert System", value: "Control room + mobile" },
                { key: "Contraband Mode", value: "Continuous RF denial" },
                { key: "Installation", value: "Permanent, fixed-site" },
                { key: "Power", value: "2.4kW" },
                { key: "Regulatory", value: "FCC waiver supported" },
                { key: "Integration", value: "Existing CCTV + access control" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Prison Security Briefing" description="Protect your facility from drone-delivered contraband." />
    </>
  );
}
