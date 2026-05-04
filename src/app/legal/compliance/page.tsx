import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance — Aegis",
  description: "Aegis Defense Systems certifications and military standards compliance.",
};

const certifications = [
  {
    name: "ITAR Registered",
    code: "22 CFR Parts 120-130",
    description: "Registered with the Directorate of Defense Trade Controls (DDTC) for the manufacture and export of defense articles. All products classified under USML Category XII.",
  },
  {
    name: "STANAG 4671",
    code: "NATO Standardization Agreement",
    description: "Certified to STANAG 4671 for UAS detection and counter-UAS system interoperability. Enables integration with NATO allied forces and coalition operations.",
  },
  {
    name: "MIL-STD-882D",
    code: "System Safety",
    description: "System safety analysis and hazard tracking per MIL-STD-882D. All system hazards identified, assessed, and mitigated throughout the design and operational lifecycle.",
  },
  {
    name: "MIL-STD-498",
    code: "Software Development",
    description: "Software development and documentation per MIL-STD-498. All software modules developed with traceable requirements, verified testing, and configuration management.",
  },
  {
    name: "MIL-STD-810G",
    code: "Environmental Engineering",
    description: "Environmental testing and qualification per MIL-STD-810G. Systems tested for temperature, humidity, altitude, salt fog, sand/dust, shock, and vibration.",
  },
  {
    name: "MIL-STD-461G",
    code: "EMI/EMC",
    description: "Electromagnetic interference and compatibility per MIL-STD-461G. Systems designed to operate without interference in complex electromagnetic environments.",
  },
  {
    name: "MIL-STD-901D",
    code: "Shock Qualification",
    description: "High-impact shock testing per MIL-STD-901D for naval installations. Systems qualified to withstand combat-level shock loads aboard surface vessels.",
  },
];

export default function CompliancePage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Compliance</h1>
        <p className="text-[#888888] text-lg mb-16">
          Aegis Defense Systems maintains the highest standards of compliance with U.S. and international defense regulations.
        </p>

        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.code} className="border border-[#222222] p-6">
              <div className="flex items-start gap-4">
                <Lock className="text-white shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h2 className="text-white text-lg font-bold">{cert.name}</h2>
                  <div className="text-[#888888] text-xs uppercase tracking-wider mt-1 mb-3">{cert.code}</div>
                  <p className="text-[#888888] text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[#222222] pt-8 mt-12 text-xs text-[#555555]">
          Last updated: January 2026
        </div>
      </div>
    </section>
  );
}
