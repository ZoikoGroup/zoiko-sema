import React from "react";
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
