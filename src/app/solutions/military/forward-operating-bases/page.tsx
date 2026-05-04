import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Shield, Clock, Eye, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Forward Operating Bases — Aegis",
  description: "360° perimeter counter-UAS defense for forward operating bases. 12km, 500+ targets, 24/7.",
};

export default function FOBPage() {
  return (
    <>
      <CapabilityHero
        image="/images/fob-aerial.jpg"
        title="Forward Operating Bases"
        subtitle="360° perimeter defense. 12km detection. 24/7 autonomous operation."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FOB Protection"
            title="Full Perimeter Coverage"
            subtitle="Aegis Core provides 360° counter-UAS coverage for forward operating bases. 12km detection range, 500+ simultaneous targets, and 24/7 autonomous operation with human authorization for lethal engagement."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={Eye} title="360° Coverage" description="Full perimeter detection with no gaps" />
            <FeatureCard icon={Shield} title="500+ Targets" description="Simultaneous tracking and engagement" />
            <FeatureCard icon={Clock} title="24/7 Operation" description="Autonomous with human override" />
            <FeatureCard icon={Zap} title="20ms Response" description="Detection to engagement in seconds" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="FOB Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Core" },
                { key: "Detection Range", value: "12km" },
                { key: "Coverage", value: "360°" },
                { key: "Max Targets", value: "500+" },
                { key: "Update Rate", value: "50Hz" },
                { key: "Response Time", value: "≤ 20ms" },
                { key: "Operation", value: "24/7 autonomous" },
                { key: "Lethal Authorization", value: "Human-in-the-loop" },
                { key: "Sensors", value: "S-band + RF + EO/IR + Acoustic" },
                { key: "Effectors", value: "RF + GPS + Protocol + Kinetic + DE" },
                { key: "Power", value: "2.4kW" },
                { key: "MTBF", value: "10,000 hours" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request FOB Briefing" description="See how Aegis protects forward operating bases in your theater." />
    </>
  );
}
