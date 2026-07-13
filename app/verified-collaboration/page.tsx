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
