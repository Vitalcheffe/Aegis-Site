import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Radio, Satellite, Wifi, Crosshair, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Neutralization — Aegis",
  description: "Five effector modalities with graduated response. From RF jamming to directed energy.",
};

export default function NeutralizationPage() {
  return (
    <>
      <CapabilityHero
        image="/images/neutralization-laser.jpg"
        title="Neutralization"
        subtitle="Five effectors. Graduated response. Human in the loop."
      />

      {/* Five Effectors */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Effectors"
            title="Five Modalities"
            subtitle="From non-kinetic disruption to hard-kill. Each effector is matched to threat type, environment, and rules of engagement."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Radio className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-xl font-bold mb-2">RF Jamming</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                Broadband and targeted RF disruption. Directional and omnidirectional modes. 400MHz–6GHz coverage. Breaks command links and forces autonomous return-to-home or landing.
              </p>
            </div>
            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Satellite className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-xl font-bold mb-2">GPS Spoofing</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                Selective GPS/GNSS denial and spoofing. Geo-fence enforcement redirects threats to safe landing zones. Precise control over navigation manipulation.
              </p>
            </div>
            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Wifi className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-xl font-bold mb-2">Protocol Manipulation</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                Command injection and protocol exploitation. Forced landing, motor shutdown, and operator takeover. WiFi and Bluetooth attack vectors for commercial UAS.
              </p>
            </div>
            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Crosshair className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-xl font-bold mb-2">Kinetic Interceptors</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                C-UAS missile integration and net launcher compatibility. Interceptor management and fire control. Hard-kill assurance for high-value asset protection.
              </p>
            </div>
            <div className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors">
              <Zap className="text-white mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-white text-xl font-bold mb-2">Directed Energy</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                High-power microwave and laser options. Precision hard-kill capability. Structural damage and electronic disruption. Extended engagement range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Graduated Response */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Doctrine"
            title="Graduated Response"
            subtitle="Escalating engagement levels match force to threat. Human authorization required for all lethal options."
          />
          <div className="mt-16 space-y-4">
            {[
              { level: "Level 01", title: "Warn", description: "Visual and acoustic warning. Non-threatening notification to UAS operator.", icon: Shield },
              { level: "Level 02", title: "Track", description: "Lock tracking. Continuous surveillance and classification. Threat assessment in progress.", icon: Crosshair },
              { level: "Level 03", title: "Jam", description: "RF jamming initiated. Command link disruption. Forced return-to-home or autonomous landing.", icon: Radio },
              { level: "Level 04", title: "Spoof", description: "GPS spoofing active. Navigation manipulation. Redirect to safe landing zone.", icon: Satellite },
              { level: "Level 05", title: "Kinetic", description: "Kinetic interceptor engagement. Human authorization required. Hard-kill of confirmed threat.", icon: Crosshair },
              { level: "Level 06", title: "Directed Energy", description: "Laser or HPM engagement. Human authorization required. Maximum force option.", icon: Zap },
            ].map((item) => (
              <div key={item.level} className="border border-[#222222] p-6 flex gap-6 items-start hover:bg-[#0A0A0A] transition-colors">
                <item.icon className="text-white shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <div className="text-[#888888] text-xs uppercase tracking-wider mb-1">{item.level}</div>
                  <h3 className="text-white text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-[#888888] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human in the Loop */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Safety"
            title="Human in the Loop"
            subtitle="All lethal engagement options — kinetic interceptors and directed energy — require explicit human authorization. The operator retains full control over escalation decisions. Automated engagement is available only for non-kinetic effectors within configured rules of engagement."
          />
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Neutralization Parameters" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "Effector Types", value: "5 (RF, GPS, Protocol, Kinetic, DE)" },
                { key: "RF Jamming Band", value: "400MHz–6GHz" },
                { key: "RF Jamming Modes", value: "Directional + Omni" },
                { key: "RF Power Output", value: "Classified" },
                { key: "GPS Spoofing", value: "Selective GNSS denial" },
                { key: "Protocol Attack Vectors", value: "WiFi, Bluetooth, custom" },
                { key: "Kinetic Options", value: "Missile, net launcher" },
                { key: "Directed Energy", value: "Laser, HPM" },
                { key: "Engagement Range", value: "Classification dependent" },
                { key: "Response Levels", value: "6 (Warn → DE)" },
                { key: "Human Authorization", value: "Required for kinetic + DE" },
                { key: "Automated Engagement", value: "Non-kinetic only" },
                { key: "Simultaneous Engagements", value: "Multiple per effector type" },
                { key: "Effect Assessment", value: "Real-time battle damage" },
                { key: "Rules of Engagement", value: "Configurable per mission" },
                { key: "Escalation Time", value: "Auto or operator-controlled" },
                { key: "Safe Landing Protocol", value: "GPS redirect to designated zone" },
                { key: "Collateral Mitigation", value: "Directional effectors, geo-fence" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Neutralization Briefing" description="Review Aegis engagement options for your rules of engagement." />
    </>
  );
}
