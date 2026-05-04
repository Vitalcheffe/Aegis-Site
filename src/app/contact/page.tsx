"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
            badge="Contact"
            title="Get in Touch"
            subtitle="For inquiries about Aegis systems, technical questions, or partnership opportunities."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="border border-[#222222] p-8">
                  <h3 className="text-white text-xl font-bold mb-4">Message Received</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    Thank you for your interest. A member of our team will respond within 2 business days. Please note that all communications are subject to ITAR regulations.
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
                    <label className="block text-[#888888] text-xs uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-[#e0e0e0] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="text-white shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <div className="text-[#888888] text-xs uppercase tracking-wider mb-1">Email</div>
                  <div className="text-white text-sm">contact@aegis-defense.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-white shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <div className="text-[#888888] text-xs uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-white text-sm">+1 703 555-0100</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-white shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <div className="text-[#888888] text-xs uppercase tracking-wider mb-1">Headquarters</div>
                  <div className="text-white text-sm">Arlington, Virginia, USA</div>
                </div>
              </div>

              <div className="border border-[#222222] p-6 mt-8">
                <h4 className="text-white text-sm font-medium mb-2">ITAR Notice</h4>
                <p className="text-[#888888] text-xs leading-relaxed">
                  This product is controlled under the International Traffic in Arms Regulations (ITAR) and may not be exported, transferred, or disclosed to foreign persons without prior authorization from the U.S. Department of State. By submitting this form, you confirm that you are a U.S. person as defined by ITAR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
