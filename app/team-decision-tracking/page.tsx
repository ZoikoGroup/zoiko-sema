import React from "react";
import type { Metadata } from "next";

import {
  TeamDecisionTrackingHeroSection,
  TrustedBySection,
  WhyDecisionTrackingSection,
  WorkflowShowcaseSection,
  DecisionRegisterSection,
  ContextAndEvidenceSection,
  AIAssistedCaptureSection,
  GovernanceControlsSection,
  UseCasesSection,
  IntegrationsSection,
  TestimonialStatsSection,
  FAQSection,
  CTASection
} from "@/components/team-decision-tracking";

export const metadata: Metadata = {
  title: "Team Decision Tracking Platform | Zoiko Sema",
  description: "Zoiko Sema helps teams track decisions with clear context, ownership, approvals, and records in one governed workspace for better execution.",
};

export default function TeamDecisionTrackingPage() {
  return (
    <div className="w-full bg-white font-sans antialiased overflow-x-hidden">
      <TeamDecisionTrackingHeroSection />
      <TrustedBySection />
      <WhyDecisionTrackingSection />
      <WorkflowShowcaseSection />
      <DecisionRegisterSection />
      <ContextAndEvidenceSection />
      <AIAssistedCaptureSection />
      <GovernanceControlsSection />
      <UseCasesSection />
      <IntegrationsSection />
      <TestimonialStatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}