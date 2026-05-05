"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/hero-radar.jpg"
          alt="Request Aegis Demo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Get Started
          </span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Request a Demo
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Schedule a classified briefing with our defense team. Live
            demonstrations available for qualified organizations.
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
                    <h3 className="text-white text-2xl font-bold mb-4">
                      Demo Request Received
                    </h3>
                    <p className="text-[#b9b9b9] leading-relaxed mb-6">
                      Our defense team will review your request and contact you
                      within 2 business days to schedule a demonstration.
                      Classified briefings require verification of credentials
                      and appropriate security clearance.
                    </p>
                    <Link
                      href="/"
                      className="inline-block bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
                    >
                      Return Home
                    </Link>
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
                        <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">
                        Demo Type
                      </label>
                      <select className="w-full bg-black border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors">
                        <option value="">Select...</option>
                        <option value="virtual">Virtual Demonstration</option>
                        <option value="onsite">On-Site Demonstration</option>
                        <option value="classified">Classified Briefing</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.15em] text-[#767676] block mb-2">
                        Additional Information
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-transparent border border-[#222222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#2b5945] transition-colors resize-none"
                        placeholder="Describe your operational requirements..."
                      />
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-[#555555] text-[11px] leading-relaxed mb-6">
                        By submitting this form, you confirm that you are
                        authorized to receive ITAR-controlled technical data.
                        Demo requests from embargoed countries will not be
                        processed.
                      </p>
                      <button
                        type="submit"
                        className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors"
                      >
                        Submit Demo Request
                      </button>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Side Info */}
            <div className="md:col-span-5">
              <ScrollReveal delay={200}>
                <div className="space-y-10">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                      What to Expect
                    </span>
                    <ul className="mt-4 space-y-4">
                      {[
                        "Live radar PPI display with real-time tracking",
                        "Multi-sensor fusion demonstration",
                        "Graduated response protocol walkthrough",
                        "Classification accuracy benchmarks",
                        "Q&A with defense engineers",
                      ].map((item) => (
                        <li
                          key={item}
                          className="text-[#b9b9b9] text-sm flex items-start gap-3"
                        >
                          <span className="text-[#2b5945] mt-1">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-white/10 pt-8">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                      Requirements
                    </span>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Valid official email address",
                        "Verification of organizational affiliation",
                        "ITAR compliance certification",
                        "Security clearance (for classified briefings)",
                      ].map((item) => (
                        <li
                          key={item}
                          className="text-[#767676] text-sm flex items-start gap-3"
                        >
                          <span className="text-[#555555] mt-0.5">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
