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
