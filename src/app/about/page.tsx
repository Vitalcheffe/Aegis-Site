import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatCounter } from "@/components/sections/stat-counter";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Aegis",
  description: "Aegis Defense Systems — 12 nations, 240+ systems, 1M+ operational hours.",
};

const certifications = [
  "ITAR Registered",
  "STANAG 4671 Certified",
  "MIL-STD-882D System Safety",
  "MIL-STD-498 Software Development",
  "MIL-STD-810G Environmental Engineering",
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About"
            title="Protecting Airspace Worldwide"
            subtitle="Aegis Defense Systems designs, manufactures, and deploys the world's most advanced counter-UAS technology. From fixed-site installations to man-portable systems, we protect people and critical infrastructure in 12 nations."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value="12" label="Nations Deployed" />
            <StatCounter value="240+" label="Systems Operational" />
            <StatCounter value="500+" label="Threats Neutralized" />
            <StatCounter value="1M+" label="Operational Hours" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-6">
              The proliferation of commercial and military unmanned aerial systems presents an unprecedented threat to national security, critical infrastructure, and civilian safety.
            </p>
            <p className="text-[#888888] text-lg leading-relaxed">
              Aegis Defense Systems was founded to answer that threat. Our multi-spectral counter-UAS technology provides comprehensive detection, tracking, classification, and neutralization — from fixed-site installations protecting airports and military bases to man-portable systems safeguarding dismounted operations.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Compliance" title="Certifications & Standards" />
          <div className="mt-16 max-w-2xl">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-4 py-4 border-b border-[#222222]">
                <Lock className="text-white shrink-0" size={16} strokeWidth={1.5} />
                <span className="text-white text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
