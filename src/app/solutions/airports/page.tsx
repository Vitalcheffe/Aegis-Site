import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Plane, BarChart3, Radio, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Airports — Aegis",
  description: "Counter-UAS for airports. <0.1% false positive, ATC integration, 99.97% uptime.",
};

export default function AirportsPage() {
  return (
    <>
      <CapabilityHero
        image="/images/solutions-airport.jpg"
        title="Airport Protection"
        subtitle="Zero false positives. ATC integrated. Seamless civil aviation."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Airports"
            title="Civil Aviation Security"
            subtitle="Aegis Airport provides counter-UAS protection with less than 0.1% false positive rate. Fully integrated with air traffic control systems. 99.97% system uptime ensures continuous protection without disrupting flight operations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={BarChart3} title="< 0.1% False Positive" description="Near-zero disruption to operations" />
            <FeatureCard icon={Plane} title="ATC Integration" description="Seamless air traffic control interface" />
            <FeatureCard icon={Shield} title="99.97% Uptime" description="Continuous protection" />
            <FeatureCard icon={Radio} title="Non-Kinetic Priority" description="RF jamming and GPS spoofing preferred" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Airport Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Core (Airport)" },
                { key: "False Positive Rate", value: "< 0.1%" },
                { key: "ATC Integration", value: "Full interface" },
                { key: "System Uptime", value: "99.97%" },
                { key: "Detection Range", value: "12km" },
                { key: "Coverage", value: "360°" },
                { key: "Max Targets", value: "500+" },
                { key: "Preferred Effectors", value: "RF + GPS (non-kinetic)" },
                { key: "Alert System", value: "ATC console + mobile" },
                { key: "Classification Accuracy", value: "98.9%" },
                { key: "Regulatory Compliance", value: "ICAO, FAA, EASA" },
                { key: "Installation", value: "Permanent, fixed-site" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Airport Briefing" description="See how Aegis integrates with your airport security infrastructure." />
    </>
  );
}
