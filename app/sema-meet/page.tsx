import type { Metadata } from "next";
import { SemaMeetDashboard } from "@/components/sema-meet";

export const metadata: Metadata = {
  title: "Sema Meet AI Meeting Platform | Zoiko Sema",
  description: "Sema Meet is an AI-powered collaboration platform for secure meetings, smarter communication, and productive teamwork with advanced business solutions.",
};
export default function SemaMeet() {
  return (
    <main>
      <SemaMeetDashboard />
    </main>
  );
}