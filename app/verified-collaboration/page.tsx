import { Metadata } from "next";
export const metadat={
  title:"Zoiko Sema | Verified Collaboration Platform",
  description:"Discover Zoiko Sema verified collaboration platform that helps teams build trust, improve accountability, and connect work with real outcomes."
}
import {
  VerifiedCollaborationHeroSection,
  VerifiedCollaborationProblemSection,
  VerifiedCollaborationModelSection,
  VerifiedCollaborationSignalSourcesSection,
  VerifiedCollaborationReviewBeforeSyncSection,
  VerifiedCollaborationZoikoTimeIntegrationSection,
  VerifiedCollaborationGovernanceSection,
  VerifiedCollaborationUseCasesSection,
  VerifiedCollaborationDemoFormSection,
  VerifiedCollaborationFaqSection,
} from "@/components/verified-collaboration";

export default function VerifiedCollaborationPage() {
  return (
    <main>
      <VerifiedCollaborationHeroSection />
      <VerifiedCollaborationProblemSection />
      <VerifiedCollaborationModelSection />
      <VerifiedCollaborationSignalSourcesSection />
      <VerifiedCollaborationReviewBeforeSyncSection />
      <VerifiedCollaborationZoikoTimeIntegrationSection />
      <VerifiedCollaborationGovernanceSection />
      <VerifiedCollaborationUseCasesSection />
      <VerifiedCollaborationDemoFormSection />
      <VerifiedCollaborationFaqSection />
    </main>
  );
}
