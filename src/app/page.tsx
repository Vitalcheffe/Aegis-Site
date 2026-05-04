import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureCard } from "@/components/sections/feature-card";
import { StatCounter } from "@/components/sections/stat-counter";
import { CtaSection } from "@/components/sections/cta-section";
import { Radar, Crosshair, BarChart3, Zap, Shield, Building2, Plane, Lock } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/hero-radar.jpg"
          alt="Aegis Radar System"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-[0.2em]">
            AEGIS
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#888888]">
            Counter-UAS System
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">500</div>
              <div className="text-[#888888] text-xs uppercase tracking-wider mt-1">Drones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">50Hz</div>
              <div className="text-[#888888] text-xs uppercase tracking-wider mt-1">Update Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">20ms</div>
              <div className="text-[#888888] text-xs uppercase tracking-wider mt-1">Response</div>
            </div>
          </div>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-black px-8 py-4 text-sm font-medium hover:bg-[#e0e0e0] transition-colors mt-12"
          >
            Request Demo
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-[#222222] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value="12" label="Nations Deployed" />
            <StatCounter value="240+" label="Systems Operational" />
            <StatCounter value="500+" label="Threats Neutralized" />
            <StatCounter value="1M+" label="Operational Hours" />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="Complete Kill Chain"
            subtitle="From detection to neutralization in under 20 seconds. Every layer, every threat, every time."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            <FeatureCard
              icon={Radar}
              title="Detection"
              description="Multi-spectral sensor fusion detects UAS at 12km. S-band radar, RF DF, EO/IR, and acoustic arrays operating in concert."
            />
            <FeatureCard
              icon={Crosshair}
              title="Tracking"
              description="IMM-UKF algorithms maintain 500+ simultaneous tracks at 50Hz update rate. Swarm-capable with autonomous association."
            />
            <FeatureCard
              icon={BarChart3}
              title="Classification"
              description="98.9% accuracy across 200+ drone signatures. ML-driven identification in under 20ms. False positive rate below 0.1%."
            />
            <FeatureCard
              icon={Zap}
              title="Neutralization"
              description="Graduated response from RF jamming to directed energy. Five effector modalities with human-in-the-loop for lethal options."
            />
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Solutions"
            title="Mission-Ready Deployments"
            subtitle="Configured for every operational environment — from forward operating bases to civilian airports."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            {[
              {
                icon: Shield,
                title: "Military",
                description: "FOBs, naval vessels, convoys. Combat-proven in 12 nations.",
                href: "/solutions/military",
              },
              {
                icon: Plane,
                title: "Airports",
                description: "Zero false positives. ATC-integrated. 99.97% uptime.",
                href: "/solutions/airports",
              },
              {
                icon: Building2,
                title: "Critical Infrastructure",
                description: "Power plants, data centers, government facilities. SCADA integration.",
                href: "/solutions/critical-infrastructure",
              },
              {
                icon: Lock,
                title: "Border Security",
                description: "Long-range corridors, coastal zones, frontier surveillance.",
                href: "/solutions/border-security",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors group"
              >
                <item.icon className="text-white mb-4" size={28} strokeWidth={1.5} />
                <h3 className="text-white text-xl font-medium mb-2 group-hover:text-white">{item.title}</h3>
                <p className="text-[#888888] text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Map */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Global Reach"
            title="Deployed Worldwide"
            subtitle="Aegis systems protect critical assets across 12 nations on 4 continents."
          />
          <div className="mt-16 border border-[#222222] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-white text-sm font-medium mb-2">Europe</div>
                <div className="text-[#888888] text-sm">6 Nations</div>
                <div className="text-[#888888] text-sm">84 Systems</div>
              </div>
              <div>
                <div className="text-white text-sm font-medium mb-2">Middle East</div>
                <div className="text-[#888888] text-sm">3 Nations</div>
                <div className="text-[#888888] text-sm">96 Systems</div>
              </div>
              <div>
                <div className="text-white text-sm font-medium mb-2">Asia-Pacific</div>
                <div className="text-[#888888] text-sm">2 Nations</div>
                <div className="text-[#888888] text-sm">38 Systems</div>
              </div>
              <div>
                <div className="text-white text-sm font-medium mb-2">Americas</div>
                <div className="text-[#888888] text-sm">1 Nation</div>
                <div className="text-[#888888] text-sm">22 Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        heading="See Aegis in Action"
        description="Schedule a classified briefing with our defense team. Live demonstrations available for qualified organizations."
        buttonText="Request a Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
