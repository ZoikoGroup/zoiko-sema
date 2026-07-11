import { 
    MessagingHeroSection,
    FeaturesShowcaseSection,
    ProductShowcaseSection,
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
      <FeaturesShowcaseSection />
      <ProductShowcaseSection />
      <MessagingStructuredCollaborationSection />
      <MessagingAiAssistedSection />
      <MessagingBusinessControlsSection />
      <MessagingZoikoTimeSection />
      <MessagingUseCasesSection />
      <MessagingClosingCTASection />
    </main>
  );
}