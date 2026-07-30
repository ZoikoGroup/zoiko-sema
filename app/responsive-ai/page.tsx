import type { Metadata } from "next";
import {

  ResponsibleAiHeroSection,
  AiAtAGlanceSection,
  AiFeatureScopeSection,
  ResponsibleAiPrinciplesSection,
  AiReview,
  AdminGovernanceSection,
  TrustMaterialSection,
  AIBoundariesSection,
  AITransparencySection,
  GovernanceLifecycleSection,
  CtaSection,
  FaqSection,
} from "@/components/responsive-ai";

export const metadata: Metadata = {
  title: "Responsive AI Solutions for Business | Zoiko Sema",
  description: "Zoiko Sema delivers responsive AI solutions for business with AI governance, compliance, secure collaboration, and responsible AI practices.",
};
export default function ResponsiveAi() {
  return (
    <main>
      <ResponsibleAiHeroSection />
      <AiAtAGlanceSection />
      <AiFeatureScopeSection />
      <ResponsibleAiPrinciplesSection />
      <AiReview />
      <AdminGovernanceSection />
      <TrustMaterialSection />
      <AIBoundariesSection />
      <AITransparencySection />
      <GovernanceLifecycleSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
}