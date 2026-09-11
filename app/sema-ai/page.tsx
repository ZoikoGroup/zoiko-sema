import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sema AI Platform for Business | Zoiko Sema",
  description: "Discover Sema AI, an intelligent AI platform designed to help businesses automate workflows, improve productivity, and make smarter decisions.",
};
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