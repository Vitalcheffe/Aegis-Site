"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, AnimatedLine } from "@/components/sections/scroll-reveal";

interface Target {
  x: number;
  y: number;
  bearing: number;
  speed: number;
  age: number;
}

export function RadarPPI() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetsRef = useRef<Target[]>([]);
  const sweepRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 600;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    const maxR = size / 2 - 20;

    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 0.3 + Math.random() * 0.6;
      targetsRef.current.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        bearing: Math.random() * Math.PI * 2,
        speed: 0.0005 + Math.random() * 0.002,
        age: 0,
      });
    }

    function draw() {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, size, size);

      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = 0.5;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR / 4) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy - maxR);
      ctx.lineTo(cx, cy + maxR);
      ctx.moveTo(cx - maxR, cy);
      ctx.lineTo(cx + maxR, cy);
      ctx.stroke();

      sweepRef.current += 0.02;
      if (sweepRef.current > Math.PI * 2) sweepRef.current -= Math.PI * 2;

      ctx.strokeStyle = "#333333";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(sweepRef.current) * maxR,
        cy + Math.sin(sweepRef.current) * maxR
      );
      ctx.stroke();

      for (let i = 0; i < 30; i++) {
        const angle = sweepRef.current - i * 0.02;
        const alpha = 0.03 * (1 - i / 30);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(angle) * maxR,
          cy + Math.sin(angle) * maxR
        );
        ctx.stroke();
      }

      const targets = targetsRef.current;
      for (let i = 0; i < targets.length; i++) {
        const t = targets[i];
        t.x += Math.cos(t.bearing) * t.speed;
        t.y += Math.sin(t.bearing) * t.speed;
        t.age++;

        if (Math.abs(t.x) > 0.9 || Math.abs(t.y) > 0.9) {
          const angle = Math.random() * Math.PI * 2;
          const dist = 0.3 + Math.random() * 0.5;
          t.x = Math.cos(angle) * dist;
          t.y = Math.sin(angle) * dist;
          t.bearing = Math.random() * Math.PI * 2;
        }

        const tx = cx + t.x * maxR;
        const ty = cy + t.y * maxR;

        const targetAngle = Math.atan2(t.y, t.x);
        const sweepDelta =
          ((sweepRef.current - targetAngle) % (Math.PI * 2) + Math.PI * 2) %
          (Math.PI * 2);

        if (sweepDelta < 0.5) {
          const brightness = Math.max(0.2, 1 - sweepDelta / 0.5);
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.beginPath();
          ctx.arc(tx, ty, 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.3})`;
          ctx.beginPath();
          ctx.arc(tx, ty, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      frameRef.current++;
      if (frameRef.current % 300 === 0 && targets.length < 15) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 0.5 + Math.random() * 0.4;
        targets.push({
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          bearing: Math.random() * Math.PI * 2,
          speed: 0.0005 + Math.random() * 0.002,
          age: 0,
        });
      }

      ctx.fillStyle = "#555555";
      ctx.beginPath();
      ctx.arc(cx, cy, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#444444";
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      for (let i = 1; i <= 4; i++) {
        ctx.fillText(`${i * 3}km`, cx + 2, cy - (maxR / 4) * i + 12);
      }
    }

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, size, size);

    let running = true;
    function loop() {
      if (!running) return;
      draw();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    return () => {
      running = false;
    };
  }, []);

  return (
    <div className="border border-white/10 overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="w-full max-w-[600px] aspect-square mx-auto block"
      />
    </div>
  );
}

const demoLinks = [
  {
    title: "Detection",
    description:
      "Multi-spectral sensor fusion detects UAS at 12km. Four sensor modalities operating in concert with Bayesian correlation.",
    href: "/detection",
  },
  {
    title: "Tracking",
    description:
      "IMM-UKF algorithms maintain 500+ simultaneous tracks at 50Hz. Elastic mesh for swarm management.",
    href: "/tracking",
  },
  {
    title: "Neutralization",
    description:
      "Graduated response from RF jamming to directed energy. Five effector modalities with human authorization.",
    href: "/neutralization",
  },
];

export default function DemosPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/detection-radar.jpg"
          alt="Aegis Demos"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-5 md:px-8 pt-32 pb-20">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
            Interactive
          </span>
          <h1 className="mt-4 text-[36px] md:text-[60px] lg:text-[80px] font-bold tracking-[-3px] md:tracking-[-3.4px] leading-[1.1] text-white">
            Live Demo
          </h1>
          <p className="mt-6 text-[#b9b9b9] text-lg md:text-xl max-w-2xl leading-relaxed">
            Real-time plan position indicator display showing detection,
            tracking, and classification of UAS threats.
          </p>
        </div>
      </section>

      {/* ═══ RADAR PPI ═══ */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <RadarPPI />
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[80rem] mx-auto px-5 md:px-8">
        <AnimatedLine />
      </div>

      {/* ═══ DEMO LINKS ═══ */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[80rem] mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#767676]">
                Explore
              </span>
              <h2 className="mt-4 text-[36px] md:text-[60px] font-bold tracking-[-3px] leading-[1] text-white">
                Capabilities
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {demoLinks.map((demo, i) => (
              <ScrollReveal key={demo.title} delay={i * 80}>
                <Link
                  href={demo.href}
                  className="block border-t border-white/10 group"
                >
                  <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-white/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                    <h3 className="text-[28px] md:text-[48px] font-bold tracking-[-2px] text-white group-hover:text-white/90 transition-colors leading-[1]">
                      {demo.title}
                    </h3>
                    <div className="md:flex-1 md:px-12">
                      <p className="text-[#b9b9b9] text-base leading-relaxed">
                        {demo.description}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors self-start md:self-auto">
                      Explore →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
