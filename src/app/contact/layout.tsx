import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Aegis",
  description: "Contact Aegis Defense Systems for inquiries about counter-UAS technology.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
