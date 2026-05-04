import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Radar, Radio, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Aegis Tactical — Mobile System",
  description: "Vehicle-mounted counter-UAS system. 200+ targets, MIL-STD-810G, <30min deployment.",
};

export default function AegisTacticalPage() {
  return (
    <>
      <CapabilityHero
        image="/images/products-aegis-tactical.jpg"
        title="Aegis Tactical"
        subtitle="Mobile Counter-UAS System — Rapid Deployment"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                badge="Mobile System"
                title="Deploy in 30 Minutes"
                subtitle="Vehicle-mounted rapid deployment. MIL-STD-810G ruggedized for tactical operations. 200+ simultaneous tracks, 8km detection range."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBlock value="200+" label="Max Targets" />
              <StatBlock value="25Hz" label="Update Rate" />
              <StatBlock value="30ms" label="Response" />
              <StatBlock value="<30min" label="Deploy Time" />
            </div>
          </div>
        </div>
      </section>

      {/* Sensors */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Sensors" title="Three Modalities" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
            <FeatureCard icon={Radar} title="X-Band Radar" description="8km range, 0.01m² RCS, 360° mechanical scan, all-weather" />
            <FeatureCard icon={Radio} title="RF Direction Finding" description="400MHz–6GHz, multi-band, TDOA/AOA geolocation" />
            <FeatureCard icon={Eye} title="EO/IR Cameras" description="Dual-band thermal + visible, AI-enhanced, auto-track" />
          </div>
        </div>
      </section>

      {/* Effectors */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Effectors" title="Two Neutralization Modes" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
            <FeatureCard icon={Radio} title="RF Jamming" description="Broadband and targeted jamming, directional and omnidirectional modes" />
            <FeatureCard icon={Radar} title="GPS Spoofing" description="Selective GPS/GNSS denial, geo-fence enforcement, safe landing" />
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
                { key: "System Type", value: "Mobile / Vehicle-Mounted" },
                { key: "Max Targets", value: "200+" },
                { key: "Update Rate", value: "25Hz" },
                { key: "Response Time", value: "≤ 30ms" },
                { key: "Detection Range", value: "8km" },
                { key: "Classification Range", value: "5km" },
                { key: "Sensors", value: "X-band + RF + EO/IR" },
                { key: "Effectors", value: "RF + GPS" },
                { key: "Ruggedization", value: "MIL-STD-810G" },
                { key: "Weight", value: "95kg" },
                { key: "Power", value: "1.2kW" },
                { key: "Deploy Time", value: "< 30 minutes" },
                { key: "Operating Temperature", value: "-40°C to +55°C" },
                { key: "MTBF", value: "8,000 hours" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Tactical Briefing" description="See how Aegis Tactical integrates with your vehicle fleet." />
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
