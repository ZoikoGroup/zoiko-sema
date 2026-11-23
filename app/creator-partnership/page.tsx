import type { Metadata } from "next";
import {
  CreatorHeroSection,
  WhyPartnerSection,
  WhoCanApplySection,
  PartnershipModelsSection,
  HowItWorksSection,
  CreatorApplicationSection,
  ResponsibleMarketingSection,
  CreatorFaqSection,
  CreatorCtaSection,
} from "@/components/creator-partnership";

export const metadata: Metadata = {
  title: "Creator Partnership Program | Zoiko Sema",
  description:
    "Apply to become a Zoiko Sema Creator Partner. Creators, educators, reviewers, and agencies in India can propose sponsored, performance-based, or hybrid collaborations — every application is reviewed for fit.",
};

export default function CreatorPartnershipPage() {
  return (
    <main>
      <CreatorHeroSection />
      <WhyPartnerSection />
      <WhoCanApplySection />
      <PartnershipModelsSection />
      <HowItWorksSection />
      <CreatorApplicationSection />
      <ResponsibleMarketingSection />
      <CreatorFaqSection />
      <CreatorCtaSection />
    </main>
  );
}
