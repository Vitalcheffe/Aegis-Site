import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Truck, Clock, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Convoys — Aegis",
  description: "Vehicle-mounted counter-UAS for military convoys. 200+ targets, <30min deployment.",
};

export default function ConvoysPage() {
  return (
    <>
      <CapabilityHero
        image="/images/products-aegis-tactical.jpg"
        title="Convoy Protection"
        subtitle="Vehicle-mounted. 200+ targets. Operational in under 30 minutes."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Convoys"
            title="Mobile Force Protection"
            subtitle="Aegis Tactical provides vehicle-mounted counter-UAS capability for military convoys. 200+ simultaneous targets, operational in under 30 minutes, with on-the-move detection and jamming. MIL-STD-810G ruggedized for tactical operations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={Truck} title="Vehicle-Mounted" description="Integrated with tactical vehicles" />
            <FeatureCard icon={Clock} title="< 30min Deploy" description="Rapid setup and operational" />
            <FeatureCard icon={Shield} title="200+ Targets" description="Simultaneous tracking" />
            <FeatureCard icon={Zap} title="On-the-Move" description="Detection and jamming while mobile" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Convoy Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Tactical" },
                { key: "Mounting", value: "Vehicle-mounted" },
                { key: "Max Targets", value: "200+" },
                { key: "Update Rate", value: "25Hz" },
                { key: "Response Time", value: "≤ 30ms" },
                { key: "Detection Range", value: "8km" },
                { key: "Deploy Time", value: "< 30 minutes" },
                { key: "Operation Mode", value: "Stationary + on-the-move" },
                { key: "Ruggedization", value: "MIL-STD-810G" },
                { key: "Sensors", value: "X-band + RF + EO/IR" },
                { key: "Effectors", value: "RF + GPS" },
                { key: "Weight", value: "95kg" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Convoy Briefing" description="Evaluate Aegis Tactical for your convoy protection needs." />
    </>
  );
}
