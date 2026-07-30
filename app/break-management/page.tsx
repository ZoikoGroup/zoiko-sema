import type { Metadata } from "next";
import {

  Hero,
  AutomatedBreakCompliance,
  HumanInTheLoop,
  PrecisionTouchpoint,
} from "@/components/break-management";

export const metadata: Metadata = {
  title: "Break Compliance & Management Platform | Zoiko Sema",
  description: "Automate break compliance with Zoiko Sema. Manage schedules, meal periods, alerts, reviews, and payroll accuracy while meeting labor requirements.",
};
export default function BreakMgtPage() {
  return (
    <main>
      <Hero />
      <AutomatedBreakCompliance />
      <HumanInTheLoop />
      <PrecisionTouchpoint />
    </main>
  );
}