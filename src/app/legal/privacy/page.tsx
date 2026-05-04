import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Aegis",
  description: "Aegis Defense Systems privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">Privacy Policy</h1>

        <div className="space-y-12 text-[#888888] text-sm leading-relaxed">
          <div>
            <h2 className="text-white text-xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-4">Aegis Defense Systems collects information that you voluntarily provide when requesting demonstrations, contacting our team, or engaging with our services. This includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Organization and job title</li>
              <li>Use case and operational requirements</li>
              <li>Communication preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">2. How We Use Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to inquiries and demo requests</li>
              <li>Provide technical support and product information</li>
              <li>Process and fulfill contractual obligations</li>
              <li>Comply with legal and regulatory requirements, including ITAR</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">3. Information Sharing</h2>
            <p className="mb-4">We do not sell, trade, or rent personal information to third parties. We may share information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Authorized government agencies as required by law or regulation</li>
              <li>Contractors and partners subject to equivalent confidentiality obligations</li>
              <li>Legal counsel when necessary for compliance or litigation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. All communications containing technical data are encrypted in transit and at rest.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-4">5. Contact</h2>
            <p>For privacy-related inquiries, contact our Data Protection Officer at privacy@aegis-defense.com or write to: Aegis Defense Systems, Attn: Data Protection Officer, Arlington, VA 22201.</p>
          </div>

          <div className="border-t border-[#222222] pt-8 text-xs text-[#555555]">
            Last updated: January 2026
          </div>
        </div>
      </div>
    </section>
  );
}
