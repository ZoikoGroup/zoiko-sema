


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