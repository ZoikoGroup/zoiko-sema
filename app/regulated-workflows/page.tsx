import { Metadata } from "next";
export const metadata = {
  title: "Secure Regulated Workflow Management | Zoiko Sema",
  description:
    "Zoiko Sema regulated workflow management helps organizations create secure, compliant workflows with better governance, control, and operational efficiency.",
}

import { 
    RegulatedWorkflowsHeroSection,
    RegulatedWorkflowsIndustriesSection,
    RegulatedWorkflowsControlSection,
    RegulatedWorkflowsWorkflowMapSection,
    RegulatedWorkflowsGovernedCollaborationSection,
    RegulatedWorkflowsPolicyAccessSection,
    RegulatedWorkflowsAuditTimelineSection,
    RegulatedWorkflowsAiGovernanceSection,
    RegulatedWorkflowsIntegrationsSection,
    RegulatedWorkflowsTrustSecuritySection,
    RegulatedWorkflowsTestimonialSection,
    RegulatedWorkflowsFaqSection,
    RegulatedWorkflowsClosingCtaSection
 } from "@/components/regulated-workflows";

export default function RegulatedWorkflowsPage() {
  return (
    <main>
      <RegulatedWorkflowsHeroSection />
      <RegulatedWorkflowsIndustriesSection />
      <RegulatedWorkflowsControlSection />
      <RegulatedWorkflowsWorkflowMapSection />
      <RegulatedWorkflowsGovernedCollaborationSection />
      <RegulatedWorkflowsPolicyAccessSection />
      <RegulatedWorkflowsAuditTimelineSection />
      <RegulatedWorkflowsAiGovernanceSection />
      <RegulatedWorkflowsIntegrationsSection />
      <RegulatedWorkflowsTrustSecuritySection />
      <RegulatedWorkflowsTestimonialSection />
      <RegulatedWorkflowsFaqSection />
      <RegulatedWorkflowsClosingCtaSection />
    </main>
  );
}