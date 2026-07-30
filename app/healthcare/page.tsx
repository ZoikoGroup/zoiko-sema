import type { Metadata } from "next";
import { HealthcareAccessSection, HealthcareAiGovernanceSection, HealthcareCTASection, HealthcareFaqSection, HealthcareHeroSection, HealthcareIntegrationsSection, HealthcarePermissionsSection, HealthcareReportingSection, HealthcareShowcaseSection, HealthcareTeamsSection, HealthcareTrustSection, HealthcareWorkflowsSection } from "@/components/healthcare";

export const metadata: Metadata = {
  title: "Healthcare Communication Platform | Zoiko Sema",
  description: "Improve healthcare communication with Zoiko Sema. Connect teams, patient workflows, secure collaboration, and governance in one trusted platform.",
};
export default function HealthcarePage() {
    return (
        <>
            <HealthcareHeroSection />
            <HealthcareTeamsSection />
            <HealthcareShowcaseSection />
            <HealthcareWorkflowsSection />
            <HealthcareAccessSection />
            <HealthcareAiGovernanceSection />
            <HealthcareIntegrationsSection />
            <HealthcareReportingSection />
            <HealthcarePermissionsSection />
            <HealthcareTrustSection />
            <HealthcareFaqSection />
            <HealthcareCTASection />
        </>
    );
}