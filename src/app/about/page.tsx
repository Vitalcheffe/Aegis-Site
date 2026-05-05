import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/images/hero-radar.jpg" alt="About Aegis" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">About</span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            About Aegis
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Founded with a singular mission: eliminate the unmanned aerial threat. We build the most advanced counter-UAS technology in the world.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              In 2018, our founders saw the drone threat evolving faster than the defense. They built Aegis to close the gap — permanently.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8"><AnimatedLine /></div>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-5">
                <h2 className="text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">Our Story</h2>
              </div>
              <div className="md:col-span-7 md:pt-4">
                <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed mb-6">
                  Aegis Defense Systems was founded in 2018 by a team of defense engineers and military operators who recognized that unmanned aerial systems were becoming the dominant threat to military and civilian assets worldwide.
                </p>
                <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed mb-6">
                  Starting with a single radar prototype and a thesis that sensor fusion could outperform any single modality, the team built what would become the Aegis Core platform — a 500+ track, 50Hz, 20ms counter-UAS system that remains the industry benchmark.
                </p>
                <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                  Today, Aegis systems protect critical assets across 12 nations on 5 continents. From forward operating bases to civilian airports, from naval vessels to border corridors, our technology stands watch 24/7/365.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image src="/images/command-center.jpg" alt="Aegis Operations" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "2018", label: "Founded" },
                { value: "12", label: "Nations" },
                { value: "240+", label: "Systems Deployed" },
                { value: "200+", label: "Engineers" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-white/10 pt-6">
                  <div className="text-3xl md:text-5xl font-bold text-white tracking-[-0.02em]">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#767676] mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[48px] font-bold tracking-[-0.03em] text-white">Join Our Mission</h2>
            <p className="mt-4 text-[#767676] text-lg max-w-xl mx-auto">Build technology that protects. Join Aegis.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/careers" className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors">View Careers</Link>
              <Link href="/company" className="border border-white/20 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white/5 transition-colors">Our Team</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
