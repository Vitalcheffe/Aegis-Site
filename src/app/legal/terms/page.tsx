import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Legal</span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] leading-[1.1] text-white">Terms of Service</h1>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8"><AnimatedLine /></div>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-8 text-[#b9b9b9] text-base leading-relaxed">
              <p><span className="text-white font-medium">Last Updated:</span> January 2025</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">1. Acceptance of Terms</h2>
              <p>By accessing the Aegis Defense Systems website and services, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">2. ITAR Restrictions</h2>
              <p>This website contains information subject to the International Traffic in Arms Regulations (ITAR). Access to certain technical data is restricted to U.S. persons as defined by ITAR (22 CFR §120.15). Non-U.S. persons may not access ITAR-controlled technical data without prior authorization from the U.S. Department of State.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">3. Export Control</h2>
              <p>The products and technical data described on this website are subject to U.S. export controls. No part of this website or its contents may be exported, re-exported, or transferred in violation of U.S. export laws and regulations.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">4. Intellectual Property</h2>
              <p>All content, trademarks, and intellectual property on this website are owned by Aegis Defense Systems, Inc. Unauthorized use, reproduction, or distribution is prohibited.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">5. Disclaimer</h2>
              <p>Performance specifications listed on this website are representative and subject to configuration and environmental conditions. Actual performance may vary. Aegis makes no warranty, express or implied, regarding the accuracy of specifications for any particular application.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Aegis Defense Systems shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or its contents.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">7. Governing Law</h2>
              <p>These terms are governed by the laws of the Commonwealth of Virginia, United States of America.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">8. Contact</h2>
              <p>For legal inquiries, contact:<br />Aegis Defense Systems, Inc.<br />Legal Department<br />1200 Defense Corridor, Arlington, VA 22202<br />legal@aegissystems.com</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
