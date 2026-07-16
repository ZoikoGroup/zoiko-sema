import { ConfidentialModeSection, SecureCommunicationHeroSection, SecureWorkspaceSection, WhySecureCommunicationSection, GuestGovernanceSection ,MeetingSecuritySection, AIGovernanceSection , DecisionsEvidenceSection , SecureScenariosSection, AdministrationPlansSection ,SecureCommunicationFaqSection ,SecureCommunicationCTASection} from "@/components/zoikosema-secure-communication";


export default function ZoikoSemaSecureCommunicationPage() {
    return (
        <>
            <SecureCommunicationHeroSection/>
            <WhySecureCommunicationSection/>
            <SecureWorkspaceSection/>
            <ConfidentialModeSection/>
            <GuestGovernanceSection/>
            <MeetingSecuritySection/>
            <AIGovernanceSection/>
            <DecisionsEvidenceSection/>
            <SecureScenariosSection/>
            <AdministrationPlansSection/>
            <SecureCommunicationFaqSection/>
            <SecureCommunicationCTASection/>
        </>
    );
}