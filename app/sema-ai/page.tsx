import {
  SemaAiHeroSection,
  SemaAiOperatingModelSection,
  SemaAiProductsSection,
  SemaAiActionReviewSection,
  SemaAiMeetingsIntelligenceSection,
  SemaAiGovernanceSection,
  SemaAiSearchMemorySection,
  SemaAiZoikoTimeBridgeSection,
  SemaAiAudiencePathsSection,
  SemaAiFAQSection,
  SemaAiCTASection,
} from "@/components/sema-ai";

export default function SemaAiPage() {
  return (
    <main>
      <SemaAiHeroSection />
      <SemaAiOperatingModelSection />
      <SemaAiProductsSection />
      <SemaAiActionReviewSection />
      <SemaAiMeetingsIntelligenceSection />
      <SemaAiGovernanceSection />
      <SemaAiSearchMemorySection />
      <SemaAiZoikoTimeBridgeSection />
      <SemaAiAudiencePathsSection />
      <SemaAiFAQSection />
      <SemaAiCTASection />
    </main>
  );
}