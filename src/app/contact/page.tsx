"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image src="/images/command-center.jpg" alt="Contact Aegis" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Contact</span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Get in Touch
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Schedule a classified briefing, request a demonstration, or connect with our defense team.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
            {/* Form */}
            <div className="md:col-span-7">
              <ScrollReveal>
                {submitted ? (
                  <div className="border border-[#2b5945]/30 bg-[#2b5945]/5 p-12 text-center">
                    <h3 className="text-white text-2xl font-bold mb-4">Request Received</h3>
                    <p className="text-[#b9b9b9] leading-relaxed">
                      Our defense team will review your inquiry and respond within 2 business days. Classified briefings require verification of credentials.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">Organization</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">Inquiry Type</label>
                      <select className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors">
                        <option value="">Select...</option>
                        <option value="demo">Request Demo</option>
                        <option value="briefing">Classified Briefing</option>
                        <option value="procurement">Procurement</option>
                        <option value="partnership">Partnership</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-5">
              <ScrollReveal delay={200}>
                <div className="space-y-10">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Headquarters</span>
                    <p className="text-white mt-2 text-base leading-relaxed">
                      Aegis Defense Systems, Inc.<br />
                      1200 Defense Corridor<br />
                      Arlington, VA 22202<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">EMEA Office</span>
                    <p className="text-white mt-2 text-base leading-relaxed">
                      Aegis Defense Systems Ltd.<br />
                      85 Queen Victoria Street<br />
                      London, EC4V 4AB<br />
                      United Kingdom
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Contact</span>
                    <p className="text-white mt-2 text-base leading-relaxed">
                      defense@aegissystems.com<br />
                      +1 (703) 555-0199
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-8">
                    <p className="text-[#555555] text-[11px] leading-relaxed">
                      All communications are subject to ITAR restrictions. Do not include classified information in web form submissions. For classified inquiries, contact your Aegis security officer.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
