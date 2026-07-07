import { 
    MessagingHeroSection,
    MessagingProblemSection,
    MessagingShowcaseSection,
    MessagingStructuredCollaborationSection,
    MessagingAiAssistedSection,
    MessagingBusinessControlsSection,
    MessagingZoikoTimeSection
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
    </main>
  );
}