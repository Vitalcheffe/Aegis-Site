import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Demo — Aegis",
  description: "Schedule a classified briefing with Aegis Defense Systems.",
};

export default function RequestDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
