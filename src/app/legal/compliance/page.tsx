import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

export default function CompliancePage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Legal</span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] leading-[1.1] text-white">Compliance</h1>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8"><AnimatedLine /></div>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-8 text-[#b9b9b9] text-base leading-relaxed">
              <p>Aegis Defense Systems maintains rigorous compliance with international and domestic defense trade regulations. Our compliance program is overseen by dedicated export compliance officers and regular third-party audits.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Regulatory Compliance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "ITAR", desc: "International Traffic in Arms Regulations" },
                  { name: "EAR", desc: "Export Administration Regulations" },
                  { name: "NATO AQAP-2110", desc: "NATO Quality Assurance Requirements" },
                  { name: "ISO 9001:2015", desc: "Quality Management Systems" },
                  { name: "MIL-STD-810H", desc: "Environmental Engineering Considerations" },
                  { name: "MIL-STD-461G", desc: "Electromagnetic Interference" },
                  { name: "DO-160G", desc: "Environmental Conditions for Airborne Equipment" },
                  { name: "Cyber Essentials Plus", desc: "UK Cyber Security Certification" },
                  { name: "SOC 2 Type II", desc: "Service Organization Controls" },
                ].map((cert) => (
                  <div key={cert.name} className="border border-white/10 p-4">
                    <div className="text-white text-sm font-medium">{cert.name}</div>
                    <div className="text-[#767676] text-xs mt-1">{cert.desc}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Export Classification</h2>
              <p>All Aegis products are classified under the United States Munitions List (USML). Defense articles are categorized under USML Category XI (Military Electronics) and Category XII (Fire Control, Laser, Imaging, and Guidance Equipment).</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Anti-Corruption</h2>
              <p>Aegis Defense Systems maintains a zero-tolerance policy for bribery and corruption in accordance with the U.S. Foreign Corrupt Practices Act (FCPA) and the UK Bribery Act 2010. All employees and agents undergo annual anti-corruption training.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Responsible AI</h2>
              <p>Our classification algorithms are designed with human-in-the-loop authorization for all kinetic and directed energy effectors. Automated responses are limited to non-lethal countermeasures. We publish annual transparency reports on system performance and safety metrics.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Compliance Contact</h2>
              <p>For compliance inquiries:<br />Aegis Defense Systems, Inc.<br />Chief Compliance Officer<br />1200 Defense Corridor, Arlington, VA 22202<br />compliance@aegissystems.com</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
