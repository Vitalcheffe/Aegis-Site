import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITAR Compliance — Aegis",
  description: "ITAR classification, foreign person access restrictions, and export control information.",
};

export default function ItarPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">ITAR Compliance</h1>

        <div className="space-y-12 text-[#888888] text-sm leading-relaxed">
          <div>
            <h2 className="text-white text-xl font-bold mb-4">USML Classification</h2>
            <p>All Aegis Defense Systems products, technical data, and defense services are classified under the United States Munitions List (USML) Category XII — Fire Control, Laser, Imaging, and Guidance Equipment. This classification is made pursuant to the International Traffic in Arms Regulations (ITAR), 22 CFR Parts 120-130.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">Foreign Person Access</h2>
            <p className="mb-4">Under ITAR, a &quot;foreign person&quot; is any person who is not a U.S. person as defined in 22 CFR §120.15. This includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any person who is not a U.S. citizen, U.S. national, or lawful permanent resident</li>
              <li>Any foreign corporation, business, or organization</li>
              <li>Any international organization</li>
              <li>Any foreign government</li>
            </ul>
            <p className="mt-4">Disclosure of ITAR-controlled technical data to foreign persons — including within the United States — constitutes a &quot;deemed export&quot; and requires prior authorization from the U.S. Department of State, Directorate of Defense Trade Controls (DDTC).</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">Export Authorization</h2>
            <p className="mb-4">Any export, temporary import, or transfer of Aegis products or technical data requires:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Prior DDTC approval via DSP-5 or DSP-73 license application</li>
              <li>Approved Technical Assistance Agreement (TAA) for defense services</li>
              <li>Compliance with all ITAR licensing requirements and conditions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">Penalties</h2>
            <p>Violations of ITAR may result in criminal penalties of up to $1,000,000 per violation and imprisonment of up to 20 years, or civil penalties of up to $500,000 per violation, pursuant to 22 U.S.C. §2778 and the Arms Export Control Act.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">Contact</h2>
            <p>For ITAR-related inquiries, export license requests, or compliance questions, contact our Export Compliance Officer:</p>
            <div className="mt-4 border border-[#222222] p-6">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Email</span>
                  <span className="text-white">export@aegis-defense.com</span>
                </div>
                <div className="flex justify-between border-b border-[#222222] pb-2">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">Phone</span>
                  <span className="text-white">+1 703 555-0200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888888] uppercase tracking-wider text-xs">DDTC</span>
                  <span className="text-white">+1 202 663-1282</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#222222] pt-8 text-xs text-[#555555]">
            Last updated: January 2026
          </div>
        </div>
      </div>
    </section>
  );
}
