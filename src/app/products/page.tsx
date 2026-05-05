import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

const products = [
  {
    slug: "aegis-core",
    title: "Aegis Core",
    subtitle: "Fixed-Site Command System",
    description:
      "Full-spectrum counter-UAS command system for fixed installations. 500+ simultaneous tracks at 50Hz update rate with 20ms end-to-end latency. Integrates all five sensor modalities and five effector types with human-in-the-loop authorization.",
    specs: [
      { key: "Track Capacity", value: "500+" },
      { key: "Update Rate", value: "50 Hz" },
      { key: "End-to-End Latency", value: "20 ms" },
      { key: "Detection Range", value: "12 km" },
      { key: "Sensor Modalities", value: "4" },
      { key: "Effector Types", value: "5" },
      { key: "Classification Accuracy", value: "98.9%" },
      { key: "Uptime", value: "99.97%" },
    ],
    image: "/images/command-center.jpg",
    href: "/products/aegis-core",
  },
  {
    slug: "aegis-tactical",
    title: "Aegis Tactical",
    subtitle: "Vehicle-Mounted System",
    description:
      "Mobile counter-UAS system for tactical operations. 200+ simultaneous tracks at 25Hz with rapid deployment capability. Vehicle-mounted with integrated sensor mast and effector array. Full kill chain in a single platform.",
    specs: [
      { key: "Track Capacity", value: "200+" },
      { key: "Update Rate", value: "25 Hz" },
      { key: "End-to-End Latency", value: "40 ms" },
      { key: "Detection Range", value: "8 km" },
      { key: "Sensor Modalities", value: "3" },
      { key: "Effector Types", value: "4" },
      { key: "Classification Accuracy", value: "97.2%" },
      { key: "Deploy Time", value: "<15 min" },
    ],
    image: "/images/products-aegis-tactical.jpg",
    href: "/products/aegis-tactical",
  },
  {
    slug: "aegis-mobile",
    title: "Aegis Mobile",
    subtitle: "Man-Packable System",
    description:
      "Lightweight man-packable counter-UAS system for dismounted operations. 50+ tracks with RF direction finding and jamming. Designed for individual operator use in austere environments. Battery-powered with 8-hour runtime.",
    specs: [
      { key: "Track Capacity", value: "50+" },
      { key: "Update Rate", value: "10 Hz" },
      { key: "End-to-End Latency", value: "80 ms" },
      { key: "Detection Range", value: "4 km" },
      { key: "Sensor Modalities", value: "1 (RF DF)" },
      { key: "Effector Types", value: "2" },
      { key: "Weight", value: "12 kg" },
      { key: "Battery", value: "8 hours" },
    ],
    image: "/images/soldier-jammer.jpg",
    href: "/products/aegis-mobile",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/drone-threat.jpg"
          alt="Aegis Products"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Platforms
          </span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Built for Every
            <br />
            Mission Profile
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Three platforms. One architecture. From fixed-site command centers to
            man-packable units — the same 20ms kill chain.
          </p>
        </div>
      </section>

      {/* ═══ PRODUCT LIST ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          {products.map((product, i) => (
            <div key={product.slug}>
              <AnimatedLine />
              <div className="py-16 md:py-24">
                <ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
                    <div className="md:col-span-7">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                        {product.subtitle}
                      </span>
                      <Link href={product.href}>
                        <h2 className="mt-3 text-[48px] md:text-[80px] lg:text-[120px] font-bold tracking-[-3px] md:tracking-[-4px] text-white hover:text-white/90 transition-colors leading-[0.9]">
                          {product.title}
                        </h2>
                      </Link>
                    </div>
                    <div className="md:col-span-5 md:pt-12">
                      <p className="text-[#b9b9b9] text-base md:text-lg leading-relaxed mb-8">
                        {product.description}
                      </p>
                      <Link
                        href={product.href}
                        className="inline-block text-[10px] uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {product.specs.slice(0, 4).map((spec) => (
                      <div
                        key={spec.key}
                        className="border-t border-white/10 pt-4"
                      >
                        <div className="text-white text-xl md:text-2xl font-bold tracking-[-0.02em]">
                          {spec.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.15em] text-[#767676] mt-1">
                          {spec.key}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
          <AnimatedLine />
        </div>
      </section>

      {/* ═══ COMPARISON ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Compare
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Platform Comparison
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 pr-4 text-[10px] uppercase tracking-[0.15em] text-[#767676] font-normal">
                      Specification
                    </th>
                    {products.map((p) => (
                      <th
                        key={p.slug}
                        className="text-left py-4 px-4 text-white text-sm font-medium"
                      >
                        {p.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Track Capacity",
                      values: ["500+", "200+", "50+"],
                    },
                    {
                      label: "Update Rate",
                      values: ["50 Hz", "25 Hz", "10 Hz"],
                    },
                    {
                      label: "Latency",
                      values: ["20 ms", "40 ms", "80 ms"],
                    },
                    {
                      label: "Detection Range",
                      values: ["12 km", "8 km", "4 km"],
                    },
                    {
                      label: "Sensor Modalities",
                      values: ["4", "3", "1"],
                    },
                    {
                      label: "Effector Types",
                      values: ["5", "4", "2"],
                    },
                    {
                      label: "Classification Accuracy",
                      values: ["98.9%", "97.2%", "94.5%"],
                    },
                    {
                      label: "Deployment",
                      values: ["Fixed", "Vehicle", "Man-pack"],
                    },
                  ].map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 pr-4 text-[#767676] text-sm">
                        {row.label}
                      </td>
                      {row.values.map((val, i) => (
                        <td
                          key={i}
                          className="py-4 px-4 text-white text-sm font-medium"
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
