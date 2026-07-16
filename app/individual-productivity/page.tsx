import { Metadata } from "next";
export const metadata = {
  title: "AI Productivity Software | Zoiko Sema",
  description:
    "Boost your efficiency with Zoiko Sema AI productivity software. Manage tasks, improve focus & work smarter with intelligent tools designed for individuals.",
}

import {
  IndividualProductivityHeroSection,
  IndividualProductivityWhySection,
  IndividualProductivityCapabilitiesSection,
  IndividualProductivityFollowThroughSection,
  IndividualProductivityUseCasesSection,
  IndividualProductivityGovernanceSection,
  IndividualProductivityIntegrationsSection,
  IndividualProductivityTestimonialSection,
  IndividualProductivityFAQSection,
  IndividualProductivityCTASection,
} from "@/components/individual-productivity";

export default function IndividualProductivityPage() {
  return (
    <main>
      <IndividualProductivityHeroSection />
      <IndividualProductivityWhySection />
      <IndividualProductivityCapabilitiesSection />
      <IndividualProductivityFollowThroughSection />
      <IndividualProductivityUseCasesSection />
      <IndividualProductivityGovernanceSection />
      <IndividualProductivityIntegrationsSection />
      <IndividualProductivityTestimonialSection />
      <IndividualProductivityFAQSection />
      <IndividualProductivityCTASection />
    </main>
  );
}