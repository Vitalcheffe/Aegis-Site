import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Aegis",
  description: "Aegis Defense Systems terms of service including ITAR provisions.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">Terms of Service</h1>

        <div className="space-y-12 text-[#888888] text-sm leading-relaxed">
          <div>
            <h2 className="text-white text-xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using Aegis Defense Systems products, services, or website, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">2. Eligibility</h2>
            <p>Our products and services are available only to U.S. persons as defined by the International Traffic in Arms Regulations (ITAR), 22 CFR §120.15. By using our services, you represent and warrant that you are a U.S. person and are not prohibited from receiving defense articles or defense services under any applicable law.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">3. Export Controls</h2>
            <p className="mb-4">All Aegis products and technical data are controlled under ITAR and may not be:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Exported, re-exported, or transferred without prior authorization</li>
              <li>Disclosed to foreign persons without State Department approval</li>
              <li>Used in violation of U.S. export control laws</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">4. Intellectual Property</h2>
            <p>All content, software, technical data, and documentation are the exclusive property of Aegis Defense Systems. No license or right is granted except as expressly provided in a separate written agreement.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Aegis Defense Systems shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">6. ITAR-Specific Terms</h2>
            <p className="mb-4">In addition to the general terms above, the following ITAR-specific provisions apply:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All technical data is classified under USML Category XII</li>
              <li>Foreign person access requires prior State Department authorization</li>
              <li>Violation of ITAR may result in criminal penalties under 22 U.S.C. §2778</li>
              <li>All demo and briefing access is logged and audited</li>
            </ul>
          </div>

          <div className="border-t border-[#222222] pt-8 text-xs text-[#555555]">
            Last updated: January 2026
          </div>
        </div>
      </div>
    </section>
  );
}
