import { ApprovalsSection, GovernanceConsoleSection, IntegrationsApisSection, TemplateGallerySection, WorkflowAutomationSection, WorkflowBuilderSection, WorkflowProcessSection, WorkflowsCtaSection, WorkflowsFaqSection, WorkflowsHeroSection } from "@/components/workflows";

export default function WorkflowsPage() {
    return (
        <>
            <WorkflowsHeroSection/>
            <WorkflowAutomationSection/>
            <TemplateGallerySection/>
            <WorkflowBuilderSection/>
            <WorkflowProcessSection/>
            <ApprovalsSection/>
            <IntegrationsApisSection/>
            <GovernanceConsoleSection/>
            <WorkflowsFaqSection/>
            <WorkflowsCtaSection/>
        </>
    );
}