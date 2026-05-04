import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Careers — Aegis",
  description: "Join Aegis Defense Systems. Career opportunities in defense technology.",
};

const positions = [
  {
    title: "Senior Radar Engineer",
    location: "Arlington, VA",
    type: "Full-Time",
    clearance: "TS/SCI",
    description: "Design and optimize S-band and X-band radar systems for counter-UAS detection. Lead signal processing algorithm development. Requires 8+ years radar engineering experience.",
  },
  {
    title: "ML Classification Engineer",
    location: "Arlington, VA",
    type: "Full-Time",
    clearance: "Secret",
    description: "Develop machine learning models for UAS classification and threat assessment. Build and maintain training pipelines for 200+ drone signature library. Requires 5+ years ML/AI experience.",
  },
  {
    title: "Embedded Systems Engineer",
    location: "Arlington, VA",
    type: "Full-Time",
    clearance: "Secret",
    description: "Design real-time embedded systems for sensor fusion and effector control. RTOS development for 50Hz tracking loops. Requires 5+ years embedded systems experience with defense applications.",
  },
  {
    title: "Field Service Engineer",
    location: "Multiple Locations",
    type: "Full-Time",
    clearance: "Secret",
    description: "Deploy, install, and maintain Aegis systems worldwide. Provide operator training and technical support. Requires 3+ years field service experience. Travel up to 60%.",
  },
  {
    title: "Business Development Manager",
    location: "Arlington, VA",
    type: "Full-Time",
    clearance: "Secret",
    description: "Drive growth in defense and critical infrastructure markets. Manage government contract pursuits. Requires 7+ years defense BD experience with existing relationships.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Careers"
            title="Protect What Matters"
            subtitle="Join the team building the world's most advanced counter-UAS technology. Mission-driven work. World-class colleagues. Meaningful impact."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {positions.map((position) => (
              <div key={position.title} className="border border-[#222222] p-6 md:p-8 hover:bg-[#0A0A0A] transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-[#888888] text-sm mb-4">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>Clearance: {position.clearance}</span>
                    </div>
                    <p className="text-[#888888] text-sm leading-relaxed">{position.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 border border-[#333333] text-white px-6 py-3 text-sm font-medium hover:border-white transition-colors text-center"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don&apos;t See Your Role?</h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto mb-8">
            We&apos;re always looking for exceptional talent. Send your resume and tell us how you can contribute to the mission.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 text-sm font-medium hover:bg-[#e0e0e0] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
