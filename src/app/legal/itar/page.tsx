import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

export default function ItarPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Legal</span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] leading-[1.1] text-white">ITAR Compliance</h1>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8"><AnimatedLine /></div>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-8 text-[#b9b9b9] text-base leading-relaxed">
              <div className="border border-[#2b5945]/30 bg-[#2b5945]/5 p-6 md:p-8">
                <p className="text-white text-sm md:text-base leading-relaxed">
                  This product is controlled under the International Traffic in Arms Regulations (ITAR) and may not be exported, transferred, or disclosed to foreign persons without prior written authorization from the U.S. Department of State, Directorate of Defense Trade Controls (DDTC).
                </p>
              </div>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">What is ITAR?</h2>
              <p>The International Traffic in Arms Regulations (ITAR), 22 CFR Parts 120-130, implements the Arms Export Control Act (AECA) and controls the export and temporary import of defense articles and defense services listed on the United States Munitions List (USML).</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Our ITAR Obligations</h2>
              <p>Aegis Defense Systems, Inc. is registered with the DDTC as a manufacturer and exporter of defense articles. All Aegis products, technical data, and software are classified as defense articles on the USML and are subject to ITAR controls.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Access Restrictions</h2>
              <ul className="space-y-3">
                {[
                  "ITAR-controlled technical data may only be accessed by U.S. persons as defined in 22 CFR §120.15",
                  "Foreign persons may not access ITAR-controlled technical data without DDTC authorization",
                  "Demo requests from embargoed countries will not be processed",
                  "All visitors to Aegis facilities must verify citizenship status",
                  "Technical data may not be re-exported without DDTC approval",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#2b5945] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">USML Classification</h2>
              <p>Aegis products are classified under USML Category XI (Military Electronics) and Category XII (Fire Control, Laser, Imaging, and Guidance Equipment). Specific classification determinations are available upon request to qualified organizations.</p>

              <h2 className="text-white text-2xl font-bold tracking-[-0.02em] pt-4">Compliance Contact</h2>
              <p>For ITAR-related inquiries or to request export authorization:<br />Aegis Defense Systems, Inc.<br />Export Compliance Officer<br />1200 Defense Corridor, Arlington, VA 22202<br />export@aegissystems.com</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
