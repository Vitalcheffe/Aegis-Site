import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Legal</span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] leading-[1.1] text-white">Privacy Policy</h1>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8"><AnimatedLine /></div>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-8 text-[#b9b9b9] text-base leading-relaxed">
              <p><span className="text-white font-medium">Last Updated:</span> January 2025</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">1. Information We Collect</h2>
              <p>Aegis Defense Systems, Inc. collects personal information that you voluntarily provide when requesting demonstrations, submitting inquiries, or engaging with our services. This includes name, organization, email address, phone number, and country of residence.</p>
              <p>We may also collect technical information automatically when you visit our website, including IP address, browser type, and device information. This data is used solely for security and analytics purposes.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">2. How We Use Information</h2>
              <p>Your information is used to process demo requests, respond to inquiries, comply with ITAR regulations, and improve our services. We do not sell or rent personal information to third parties.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">3. ITAR Compliance</h2>
              <p>As a defense contractor subject to the International Traffic in Arms Regulations (ITAR), we are required to verify the identity and nationality of all individuals who request access to technical data. This information is collected and retained in compliance with U.S. Department of State requirements.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information. All communications are encrypted in transit. Access to personal data is restricted to authorized personnel on a need-to-know basis.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">5. Data Retention</h2>
              <p>Personal information is retained for the period necessary to fulfill the purposes outlined in this policy, or as required by law. ITAR-related records are retained in accordance with U.S. federal record-keeping requirements.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">6. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact our Data Protection Officer at privacy@aegissystems.com.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">7. Contact</h2>
              <p>For privacy-related inquiries, contact:<br />Aegis Defense Systems, Inc.<br />Data Protection Officer<br />1200 Defense Corridor, Arlington, VA 22202<br />privacy@aegissystems.com</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
