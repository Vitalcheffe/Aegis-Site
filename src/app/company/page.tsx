import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const leaders = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Executive Officer",
    description:
      "Former DARPA program manager. 20+ years in defense technology. PhD Computer Science, MIT.",
  },
  {
    name: "Col. James Miller (Ret.)",
    title: "Chief Technology Officer",
    description:
      "Former U.S. Army Air Defense Artillery. 25+ years C-UAS experience. MSEE, West Point.",
  },
  {
    name: "Dr. Aisha Patel",
    title: "VP of Engineering",
    description:
      "Former Lockheed Martin sensor fusion lead. PhD Electrical Engineering, Stanford.",
  },
  {
    name: "Maj. David Volkov (Ret.)",
    title: "VP of Operations",
    description:
      "Former IDF C-UAS battalion commander. 15+ years operational experience. MBA, INSEAD.",
  },
];

const values = [
  {
    title: "Mission First",
    description:
      "Every decision filtered through the lens of operator safety and mission success. We build systems that work when lives depend on them.",
  },
  {
    title: "Technical Excellence",
    description:
      "20ms latency isn't a target — it's a commitment. We hold ourselves to the highest engineering standards in the defense industry.",
  },
  {
    title: "Operational Integrity",
    description:
      "ITAR compliance, NATO classification, human-in-the-loop for lethal options. We build responsible systems with appropriate safeguards.",
  },
  {
    title: "Global Partnership",
    description:
      "12 nations trust Aegis to protect their critical assets. We honor that trust with transparent communication and reliable performance.",
  },
];

const certifications = [
  "NATO AQAP-2110",
  "ITAR Registered",
  "ISO 9001:2015",
  "MIL-STD-810H",
  "MIL-STD-461G",
  "DO-160G",
  "Cyber Essentials Plus",
  "SOC 2 Type II",
];

export default function CompanyPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/command-center.jpg"
          alt="Aegis Defense Systems"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Company
          </span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Built to Protect
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Aegis Defense Systems designs and manufactures the world's most
            advanced counter-UAS technology. Protecting 12 nations.
          </p>
        </div>
      </section>

      {/* ═══ MISSION CALLOUT ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              We exist to protect those who protect others. Every system we build
              must perform flawlessly when lives depend on it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ LEADERSHIP ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Leadership
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Executive Team
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 80}>
                <div className="border-t border-white/10 py-10 md:py-14 md:pr-12">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-[#111111] rounded-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-bold tracking-[-0.02em]">
                        {leader.name}
                      </h3>
                      <div className="text-[#2b5945] text-xs uppercase tracking-[0.15em] mt-1">
                        {leader.title}
                      </div>
                      <p className="text-[#b9b9b9] text-sm leading-relaxed mt-3">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-24 md:py-40 bg-black border-t border-white/10">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Principles
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="border-t border-white/10 py-10 md:py-14">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                    <div className="md:col-span-5">
                      <h3 className="text-[24px] md:text-[40px] font-bold tracking-[-2px] text-white leading-[1.1]">
                        {v.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7 md:pt-2">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Compliance
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Certifications
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="border-t border-white/10 pt-6 pb-8 md:pr-4"
                >
                  <div className="text-white text-sm md:text-base font-medium">
                    {cert}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
