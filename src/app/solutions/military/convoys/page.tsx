import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const specs = [
  { key: "Coverage", value: "Moving Formation" },
  { key: "Track Capacity", value: "200+" },
  { key: "Configuration", value: "Tactical (3+ units)" },
  { key: "Mesh Network", value: "Automatic" },
  { key: "Handoff", value: "Seamless" },
  { key: "Speed", value: "Up to 60 km/h" },
];

export default function ConvoysPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/images/products-aegis-tactical.jpg" alt="Aegis Convoy Protection" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Military · Convoys</span>
          <h1 className="mt-4 text-[48px] md:text-[80px] lg:text-[120px] font-bold tracking-[-3px] md:tracking-[-4px] leading-[0.9] text-white">Convoys</h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Mesh-networked Aegis Tactical units provide overlapping coverage for military convoys. Seamless track handoff between vehicles at speed.
          </p>
          <Link href="/request-demo" className="inline-block mt-10 bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors">Request Demo</Link>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              Mobile protection. Mesh network. On the move.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8"><AnimatedLine /></div>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Data</span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">By the Numbers</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {specs.map((spec) => (
                <div key={spec.key} className="flex justify-between items-center border-b border-white/10 py-5">
                  <span className="text-[#767676] text-sm uppercase tracking-wider">{spec.key}</span>
                  <span className="text-white text-lg font-bold tracking-[-0.02em]">{spec.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
