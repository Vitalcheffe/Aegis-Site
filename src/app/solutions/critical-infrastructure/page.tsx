import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Building2, Shield, BarChart3, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Critical Infrastructure — Aegis",
  description: "Counter-UAS for critical infrastructure. 99.97% uptime, SCADA integration.",
};

export default function CriticalInfrastructurePage() {
  return (
    <>
      <CapabilityHero
        image="/images/command-center.jpg"
        title="Critical Infrastructure"
        subtitle="99.97% uptime. SCADA integrated. Uninterrupted protection."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Critical Infrastructure"
            title="Uninterrupted Protection"
            subtitle="Aegis protects power plants, data centers, government facilities, and other critical infrastructure with 99.97% system uptime. Full SCADA integration enables seamless operation with existing security infrastructure."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard icon={Shield} title="99.97% Uptime" description="Continuous protection guaranteed" />
            <FeatureCard icon={Link2} title="SCADA Integration" description="Seamless security infrastructure" />
            <FeatureCard icon={Building2} title="Multi-Site Management" description="Centralized command" />
            <FeatureCard icon={BarChart3} title="Low False Positive" description="< 0.1% — no unnecessary disruptions" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Infrastructure Configuration" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "System", value: "Aegis Core (Infrastructure)" },
                { key: "System Uptime", value: "99.97%" },
                { key: "SCADA Integration", value: "Full interface" },
                { key: "Detection Range", value: "12km" },
                { key: "Coverage", value: "360°" },
                { key: "Max Targets", value: "500+" },
                { key: "False Positive Rate", value: "< 0.1%" },
                { key: "Site Types", value: "Power, data, government" },
                { key: "Multi-Site", value: "Centralized management" },
                { key: "Installation", value: "Permanent, fixed-site" },
                { key: "Redundancy", value: "Dual-redundant architecture" },
                { key: "Monitoring", value: "24/7 SOC integration" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Infrastructure Briefing" description="Protect your critical assets with Aegis counter-UAS technology." />
    </>
  );
}
