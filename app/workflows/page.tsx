import type { Metadata } from "next";
import { ApprovalsSection, GovernanceConsoleSection, IntegrationsApisSection, TemplateGallerySection, WorkflowAutomationSection, WorkflowBuilderSection, WorkflowProcessSection, WorkflowsCtaSection, WorkflowsFaqSection, WorkflowsHeroSection } from "@/components/workflows";

export const metadata: Metadata = {
  title: "Workflows Platform for Smarter Teams | Zoiko Sema",
  description: "Zoiko Sema workflows help teams automate processes, connect tasks, improve collaboration, and create smarter work execution with AI-powered workflows.",
};
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