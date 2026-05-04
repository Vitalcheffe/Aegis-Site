import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Radar, Radio, Eye, Ear, Wifi, Satellite, Crosshair, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Aegis Core — Fixed-Site System",
  description: "Full-spectrum counter-UAS fixed-site system. 500+ targets, 50Hz, 20ms response.",
};

export default function AegisCorePage() {
  return (
    <>
      <CapabilityHero
        image="/images/hero-radar.jpg"
        title="Aegis Core"
        subtitle="Fixed-Site Counter-UAS System — Full Spectrum"
      />

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                badge="Fixed-Site System"
                title="360° Protection"
                subtitle="The flagship Aegis system. Permanent installation with full-spectrum detection and neutralization. 12km detection range, 500+ simultaneous tracks, 5 effector modalities."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBlock value="500+" label="Max Targets" />
              <StatBlock value="50Hz" label="Update Rate" />
              <StatBlock value="20ms" label="Response" />
              <StatBlock value="12km" label="Detection Range" />
            </div>
          </div>
        </div>
      </section>

      {/* Sensors */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Sensors" title="Five Modalities" subtitle="Overlapping sensor coverage eliminates blind spots and false positives." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            <FeatureCard icon={Radar} title="S-Band Radar" description="12km range, 0.01m² RCS minimum, 360° scan, all-weather operation" />
            <FeatureCard icon={Radio} title="RF Direction Finding" description="400MHz–6GHz coverage, multi-band simultaneous, TDOA/AOA geolocation" />
            <FeatureCard icon={Eye} title="EO/IR Cameras" description="Dual-band thermal + visible, AI-enhanced imagery, auto-tracking" />
            <FeatureCard icon={Ear} title="Acoustic Arrays" description="Passive 5km detection, 200+ drone signature library, low-RCS complement" />
            <FeatureCard icon={Wifi} title="Protocol Analysis" description="WiFi/Bluetooth sniffing, command channel identification, operator geolocation" />
          </div>
        </div>
      </section>

      {/* Effectors */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Effectors" title="Five Neutralization Modes" subtitle="Graduated response from non-kinetic to lethal, always with human authorization." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            <FeatureCard icon={Radio} title="RF Jamming" description="Broadband and targeted jamming, 400MHz–6GHz, directional and omnidirectional" />
            <FeatureCard icon={Satellite} title="GPS Spoofing" description="Selective GPS/GNSS denial, geo-fence enforcement, safe landing protocols" />
            <FeatureCard icon={Wifi} title="Protocol Manipulation" description="Command injection, forced landing, operator takeover capability" />
            <FeatureCard icon={Crosshair} title="Kinetic Interceptors" description="C-UAS missile integration, net launcher compatible, interceptor management" />
            <FeatureCard icon={Zap} title="Directed Energy" description="High-power microwave and laser options, hard-kill capability, precision engagement" />
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
                { key: "System Type", value: "Fixed-Site" },
                { key: "Max Targets", value: "500+" },
                { key: "Update Rate", value: "50Hz" },
                { key: "Response Time", value: "≤ 20ms" },
                { key: "Detection Range", value: "12km" },
                { key: "Classification Range", value: "8km" },
                { key: "Sensors", value: "S-band + RF + EO/IR + Acoustic + Protocol" },
                { key: "Effectors", value: "RF + GPS + Protocol + Kinetic + DE" },
                { key: "Classification Accuracy", value: "98.9%" },
                { key: "False Positive Rate", value: "< 0.1%" },
                { key: "Ingress Protection", value: "IP67" },
                { key: "Weight", value: "180kg (sensor head)" },
                { key: "Power", value: "2.4kW" },
                { key: "Operating Temperature", value: "-40°C to +55°C" },
                { key: "MTBF", value: "10,000 hours" },
                { key: "System Uptime", value: "99.97%" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Request Core System Briefing" description="Schedule a classified technical briefing for your fixed-site requirements." />
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
