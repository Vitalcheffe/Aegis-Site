import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Ship, Waves, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Naval — Aegis",
  description: "Shipborne counter-UAS rated to sea state 5. MIL-STD-901D shock qualified.",
};

export default function NavalPage() {
  return (
    <>
      <CapabilityHero
        image="/images/palantir-submarine.png"
        title="Naval Defense"
        subtitle="Shipborne counter-UAS. Sea state 5 rated. MIL-STD-901D qualified."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Naval"
            title="Maritime Counter-UAS"
            subtitle="Aegis Naval provides shipborne counter-UAS capability rated to sea state 5. MIL-STD-901D shock qualified with multi-axis stabilization for vessel motion compensation. Proven in littoral and open-ocean environments."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={Ship} title="Sea State 5" description="Operational in heavy seas" />
            <FeatureCard icon={Waves} title="MIL-STD-901D" description="Shock qualified for combat" />
            <FeatureCard icon={Shield} title="Multi-Axis Stabilization" description="Motion compensation" />
            <FeatureCard icon={Zap} title="Littoral + Open Ocean" description="Proven environments" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Naval Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Core (Naval)" },
                { key: "Sea State Rating", value: "Sea State 5" },
                { key: "Shock Qualification", value: "MIL-STD-901D" },
                { key: "Stabilization", value: "Multi-axis compensated" },
                { key: "Detection Range", value: "12km" },
                { key: "Coverage", value: "360°" },
                { key: "Max Targets", value: "500+" },
                { key: "Update Rate", value: "50Hz" },
                { key: "Corrosion Protection", value: "MIL-STD-810G salt fog" },
                { key: "EMI/EMC", value: "MIL-STD-461G" },
                { key: "Power", value: "2.4kW" },
                { key: "Environments", value: "Littoral + open ocean" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Naval Briefing" description="Evaluate Aegis Naval for your fleet protection requirements." />
    </>
  );
}
