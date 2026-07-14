import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema | Business Messaging Platform",
  description:
    "Improve workplace communication with Zoiko Sema, a business messaging platform featuring secure messaging, AI insights, and team collaboration.",
};

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