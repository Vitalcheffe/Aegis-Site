import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Target, Shield, Lightbulb, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Company — Aegis",
  description: "Aegis Defense Systems — mission-driven defense technology company.",
};

const leaders = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Former DARPA program manager. 20+ years in defense technology. PhD in Electrical Engineering, MIT.",
  },
  {
    name: "Col. James Miller",
    role: "Chief Technology Officer",
    bio: "32 years US Army Air Defense Artillery. Led Patriot battery operations. MS in Systems Engineering, West Point.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "VP Engineering",
    bio: "Former Lockheed Martin senior engineer. 15 years radar systems design. PhD in Signal Processing, Stanford.",
  },
  {
    name: "Maj. David Volkov",
    role: "VP Operations",
    bio: "Former IDF Iron Dome operator. 18 years operational air defense. MBA, Wharton.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every specification is tested. Every system is validated. Zero tolerance for ambiguity in defense.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "99.97% uptime isn't aspirational — it's measured. Systems that work when lives depend on them.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuous advancement in detection, tracking, and neutralization. The threat evolves. So do we.",
  },
  {
    icon: Lock,
    title: "Integrity",
    description: "Honest performance data. Transparent testing. Ethical engagement doctrine. No exceptions.",
  },
];

const certifications = [
  "ITAR Registered",
  "STANAG 4671 Certified",
  "MIL-STD-882D System Safety",
  "MIL-STD-498 Software Development",
  "MIL-STD-810G Environmental Engineering",
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Company"
            title="Mission-Driven Defense"
            subtitle="Aegis Defense Systems exists to protect people and critical infrastructure from the growing threat of unmanned aerial systems. Every decision we make serves that mission."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              To provide the world&apos;s most advanced counter-UAS capabilities, enabling nations and organizations to defend their airspace with confidence, precision, and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Leadership" title="Experienced Operators" subtitle="Our leadership team combines deep technical expertise with operational defense experience." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {leaders.map((leader) => (
              <div key={leader.name} className="border border-[#222222] p-8">
                <h3 className="text-white text-xl font-bold">{leader.name}</h3>
                <div className="text-[#888888] text-sm uppercase tracking-wider mt-1 mb-4">{leader.role}</div>
                <p className="text-[#888888] text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Values" title="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value) => (
              <div key={value.title} className="border border-[#222222] p-6">
                <value.icon className="text-white mb-4" size={28} strokeWidth={1.5} />
                <h3 className="text-white text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Compliance" title="Certifications" />
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

      <CtaSection heading="Join the Mission" description="Explore career opportunities at Aegis Defense Systems." buttonText="View Careers" buttonHref="/careers" />
    </>
  );
}
