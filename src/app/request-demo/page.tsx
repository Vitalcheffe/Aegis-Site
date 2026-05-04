"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Lock } from "lucide-react";

const steps = [
  { number: "01", title: "Submit Request", description: "Complete the form below. Our team will review your inquiry within 48 hours." },
  { number: "02", title: "NDA Execution", description: "Qualified organizations will receive a non-disclosure agreement for classified technical data." },
  { number: "03", title: "Technical Briefing", description: "Schedule a detailed technical briefing with our defense engineering team." },
  { number: "04", title: "Live Demo", description: "See Aegis in action. On-site or virtual demonstrations available for qualified organizations." },
];

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Request Demo"
            title="See Aegis in Action"
            subtitle="Schedule a classified briefing with our defense team. Live demonstrations available for qualified organizations."
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="border border-[#222222] p-6">
                <div className="text-[#888888] text-xs uppercase tracking-wider mb-4">{step.number}</div>
                <h3 className="text-white text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            {submitted ? (
              <div className="border border-[#222222] p-8">
                <h3 className="text-white text-xl font-bold mb-4">Request Submitted</h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  Thank you for your interest in Aegis. Our team will review your request and respond within 48 hours. If your organization qualifies, you will receive an NDA followed by a technical briefing invitation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#888888] text-xs uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-[#888888] text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#888888] text-xs uppercase tracking-wider mb-2">Organization</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label className="block text-[#888888] text-xs uppercase tracking-wider mb-2">Use Case</label>
                  <select
                    required
                    className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="">Select use case</option>
                    <option value="military">Military</option>
                    <option value="airport">Airport</option>
                    <option value="critical-infrastructure">Critical Infrastructure</option>
                    <option value="border-security">Border Security</option>
                    <option value="vip-protection">VIP Protection</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#888888] text-xs uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Describe your operational requirements"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-[#e0e0e0] transition-colors"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ITAR Notice */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#222222] p-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-white" size={20} strokeWidth={1.5} />
              <h3 className="text-white text-sm font-medium uppercase tracking-wider">ITAR Notice</h3>
            </div>
            <p className="text-[#888888] text-xs leading-relaxed">
              This product is controlled under the International Traffic in Arms Regulations (ITAR) and may not be exported, transferred, or disclosed to foreign persons without prior authorization from the U.S. Department of State. By submitting this form, you confirm that you are a U.S. person as defined by ITAR (22 CFR §120.15). Demo access is restricted to authorized personnel only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
