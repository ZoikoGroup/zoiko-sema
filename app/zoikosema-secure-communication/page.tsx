import type { Metadata } from "next";
import { ConfidentialModeSection, SecureCommunicationHeroSection, SecureWorkspaceSection, WhySecureCommunicationSection, GuestGovernanceSection ,MeetingSecuritySection, AIGovernanceSection , DecisionsEvidenceSection , SecureScenariosSection, AdministrationPlansSection ,SecureCommunicationFaqSection ,SecureCommunicationCTASection} from "@/components/zoikosema-secure-communication";

export const metadata: Metadata = {
  title: "Secure Communication Platform | Zoiko Sema",
  description: "Secure business communication with Zoiko Sema. Protect sensitive conversations, collaboration and data with secure, compliant communication tools.",
};
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