import { 
    MessagingHeroSection,
    MessagingProblemSection,
    MessagingShowcaseSection,
    MessagingStructuredCollaborationSection,
    MessagingAiAssistedSection,
    MessagingBusinessControlsSection,
    MessagingZoikoTimeSection,
    MessagingUseCasesSection,
    MessagingClosingCTASection
 } from "@/components/messaging";

export default function MessagingPage() {
  return (
    <main>
      <MessagingHeroSection />
      <MessagingProblemSection />
      <MessagingShowcaseSection />
      <MessagingStructuredCollaborationSection />
      <MessagingAiAssistedSection />
      <MessagingBusinessControlsSection />
      <MessagingZoikoTimeSection />
      <MessagingUseCasesSection />
      <MessagingClosingCTASection />
    </main>
  );
}