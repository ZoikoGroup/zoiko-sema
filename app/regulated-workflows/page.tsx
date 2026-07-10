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