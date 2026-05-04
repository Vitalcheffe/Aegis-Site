import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos — Aegis",
  description: "Interactive radar PPI display and counter-UAS system demonstrations.",
};

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
