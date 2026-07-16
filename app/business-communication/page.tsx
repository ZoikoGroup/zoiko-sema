import { Metadata } from "next";
export const metadata = {
  title: "Business Communication Platform | Zoiko Sema",
  description:
    "Streamline business communication with Zoiko Sema. Enable better teamwork, faster conversations, and seamless collaboration across your organization.",
}


import { BusinessAdministration, CommunicationHealthSection, ExternalCollaboration, FAQSection, GovernedAISection, HeroSection, IntegrationsSection, OnboardingRhythmSection, ProductShowcase, SemaProductSuite, TeamsMovementSection, WorkspaceOrganization, WorkspaceWorkflows, ZoikoTimeIntegration } from "@/components/business-communication";
export default function(){
    return(
        <main>
            <HeroSection/>
            <WorkspaceWorkflows/>
            <ProductShowcase/>
            <WorkspaceOrganization/>
            <GovernedAISection/>
            <ExternalCollaboration/>
            <BusinessAdministration/>
            <IntegrationsSection/>
            <CommunicationHealthSection/>
            <ZoikoTimeIntegration/>
            <TeamsMovementSection/>
            <OnboardingRhythmSection/>
            <SemaProductSuite/>
            <FAQSection/>
        </main>
    )
}