import { HealthcareAccessSection, HealthcareAiGovernanceSection, HealthcareCTASection, HealthcareFaqSection, HealthcareHeroSection, HealthcareIntegrationsSection, HealthcarePermissionsSection, HealthcareReportingSection, HealthcareShowcaseSection, HealthcareTeamsSection, HealthcareTrustSection, HealthcareWorkflowsSection } from "@/components/healthcare";

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