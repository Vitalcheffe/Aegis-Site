import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const openings = [
  {
    title: "Senior Sensor Fusion Engineer",
    department: "Engineering",
    location: "Washington, DC",
  },
  {
    title: "RF Systems Engineer",
    department: "Engineering",
    location: "Washington, DC",
  },
  {
    title: "Machine Learning Engineer — Classification",
    department: "AI/ML",
    location: "Washington, DC / Remote",
  },
  {
    title: "Embedded Systems Engineer",
    department: "Engineering",
    location: "Washington, DC",
  },
  {
    title: "Field Service Engineer — EMEA",
    department: "Operations",
    location: "London, UK",
  },
  {
    title: "Business Development Manager — APAC",
    department: "Business Development",
    location: "Singapore",
  },
  {
    title: "Security Clearance Administrator",
    department: "Security",
    location: "Washington, DC",
  },
  {
    title: "Technical Writer — Defense Systems",
    department: "Documentation",
    location: "Remote",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/images/fob-aerial.jpg" alt="Aegis Careers" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Careers</span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Build Technology
            <br />
            That Protects
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Join the team building the world's most advanced counter-UAS defense
            systems. Every line of code, every circuit, every algorithm protects
            lives.
          </p>
          <Link href="/contact" className="inline-block mt-10 bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#e0e0e0] transition-colors">
            Apply Now
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-[22px] md:text-[48px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
              The threats evolve. So must we. Join the mission.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8"><AnimatedLine /></div>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">Open Positions</span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">Current Openings</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 60}>
                <div className="border-t border-white/10 py-6 md:py-8 hover:bg-white/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-white text-lg md:text-xl font-medium">{job.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-[#767676] text-xs uppercase tracking-wider">{job.department}</span>
                        <span className="text-[#555555]">·</span>
                        <span className="text-[#767676] text-xs uppercase tracking-wider">{job.location}</span>
                      </div>
                    </div>
                    <Link href="/contact" className="text-[10px] uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors self-start md:self-auto">
                      Apply →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
