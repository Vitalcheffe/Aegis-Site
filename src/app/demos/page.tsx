"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";

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

    // Initialize some targets
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

      // Fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, size, size);

      // Range rings
      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = 0.5;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR / 4) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Cross hairs
      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy - maxR);
      ctx.lineTo(cx, cy + maxR);
      ctx.moveTo(cx - maxR, cy);
      ctx.lineTo(cx + maxR, cy);
      ctx.stroke();

      // Sweep line
      sweepRef.current += 0.02;
      if (sweepRef.current > Math.PI * 2) sweepRef.current -= Math.PI * 2;

      const sweepGrad = ctx.createConicalGradient
        ? null
        : null;

      // Sweep line
      ctx.strokeStyle = "#333333";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(sweepRef.current) * maxR,
        cy + Math.sin(sweepRef.current) * maxR
      );
      ctx.stroke();

      // Sweep trail
      for (let i = 0; i < 30; i++) {
        const angle = sweepRef.current - (i * 0.02);
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

      // Update and draw targets
      const targets = targetsRef.current;
      for (let i = 0; i < targets.length; i++) {
        const t = targets[i];
        t.x += Math.cos(t.bearing) * t.speed;
        t.y += Math.sin(t.bearing) * t.speed;
        t.age++;

        // Wrap around
        if (Math.abs(t.x) > 0.9 || Math.abs(t.y) > 0.9) {
          const angle = Math.random() * Math.PI * 2;
          const dist = 0.3 + Math.random() * 0.5;
          t.x = Math.cos(angle) * dist;
          t.y = Math.sin(angle) * dist;
          t.bearing = Math.random() * Math.PI * 2;
        }

        const tx = cx + t.x * maxR;
        const ty = cy + t.y * maxR;

        // Target blip
        const targetAngle = Math.atan2(t.y, t.x);
        const sweepDelta = ((sweepRef.current - targetAngle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        
        if (sweepDelta < 0.5) {
          const brightness = Math.max(0.2, 1 - sweepDelta / 0.5);
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.beginPath();
          ctx.arc(tx, ty, 3, 0, Math.PI * 2);
          ctx.fill();

          // Target trail
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.3})`;
          ctx.beginPath();
          ctx.arc(tx, ty, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Occasionally add new targets
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

      // Center dot
      ctx.fillStyle = "#555555";
      ctx.beginPath();
      ctx.arc(cx, cy, 2, 0, Math.PI * 2);
      ctx.fill();

      // Range labels
      ctx.fillStyle = "#444444";
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      for (let i = 1; i <= 4; i++) {
        ctx.fillText(`${i * 3}km`, cx + 2, cy - (maxR / 4) * i + 12);
      }

    }

    // Initial clear
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, size, size);

    let running = true;
    function loop() {
      if (!running) return;
      draw();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    return () => { running = false; };
  }, []);

  return (
    <div className="border border-[#222222] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full max-w-[600px] aspect-square mx-auto block"
      />
    </div>
  );
}

const demoCards = [
  {
    title: "Detection Demo",
    description: "Multi-spectral sensor fusion detects UAS at 12km. Four sensor modalities operating in concert with Bayesian correlation.",
    href: "/detection",
  },
  {
    title: "Tracking Demo",
    description: "IMM-UKF algorithms maintain 500+ simultaneous tracks at 50Hz. Elastic mesh for swarm management.",
    href: "/tracking",
  },
  {
    title: "Neutralization Demo",
    description: "Graduated response from RF jamming to directed energy. Five effector modalities with human authorization.",
    href: "/neutralization",
  },
];

export default function DemosPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Interactive Demo"
            title="Radar PPI Display"
            subtitle="Real-time plan position indicator display showing detection, tracking, and classification of UAS threats."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RadarPPI />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoCards.map((demo) => (
              <Link
                key={demo.title}
                href={demo.href}
                className="border border-[#222222] p-8 hover:bg-[#0A0A0A] transition-colors group"
              >
                <h3 className="text-white text-xl font-bold mb-3">{demo.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{demo.description}</p>
                <div className="mt-4 text-[#888888] text-xs uppercase tracking-wider group-hover:text-white transition-colors">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
