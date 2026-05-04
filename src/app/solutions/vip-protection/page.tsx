import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { UserCheck, Monitor, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "VIP Protection — Aegis",
  description: "Counter-UAS for VIP protection. Mobile + fixed systems, common operating picture.",
};

export default function VIPProtectionPage() {
  return (
    <>
      <CapabilityHero
        image="/images/soldier-jammer.jpg"
        title="VIP Protection"
        subtitle="Mobile and fixed systems. Common operating picture. Rapid deployment."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="VIP Protection"
            title="Personal Security"
            subtitle="Aegis provides mobile and fixed counter-UAS protection for VIPs and high-value individuals. Common operating picture across all deployed systems. Rapid deployment for temporary venues and events."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={UserCheck} title="Mobile + Fixed" description="Comprehensive coverage" />
            <FeatureCard icon={Monitor} title="Common Operating Picture" description="Unified situational awareness" />
            <FeatureCard icon={Zap} title="Rapid Deployment" description="Temporary venues and events" />
            <FeatureCard icon={Shield} title="Non-Kinetic Priority" description="Discreet engagement options" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="VIP Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Tactical + Mobile" },
                { key: "Fixed Coverage", value: "12km (Aegis Core)" },
                { key: "Mobile Coverage", value: "8km (Aegis Tactical)" },
                { key: "Man-Portable", value: "3km (Aegis Mobile)" },
                { key: "Operating Picture", value: "Unified COP" },
                { key: "Deploy Time", value: "< 30min / < 2min" },
                { key: "Preferred Effectors", value: "RF + GPS (non-kinetic)" },
                { key: "Alert System", value: "Mobile + desktop + wearable" },
                { key: "Event Mode", value: "Temporary venue coverage" },
                { key: "Convoy Mode", value: "On-the-move protection" },
                { key: "Residence Mode", value: "Permanent fixed-site" },
                { key: "Staff Training", value: "Included with deployment" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request VIP Protection Briefing" description="Protect principals with Aegis counter-UAS technology." />
    </>
  );
}
