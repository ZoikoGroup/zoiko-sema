import React from "react";
import { ProjectCollabHeroSection } from "@/components/Project-collaboration";
import { TrustedBySection } from "@/components/Project-collaboration";
import { WhyProjectCollabSection } from "@/components/Project-collaboration";
import { ProductShowcaseSection } from "@/components/Project-collaboration";
import { WorkflowMapSection } from "@/components/Project-collaboration";
import { ProjectPatternsSection } from "@/components/Project-collaboration";
import { GovernanceControlsSection } from "@/components/Project-collaboration";
import { IntegrationsEcosystemSection } from "@/components/Project-collaboration";
import { TestimonialStatsSection } from "@/components/Project-collaboration";
import { FAQSection } from "@/components/Project-collaboration";
import { CTASection } from "@/components/Project-collaboration";

export default function ProjectCollaborationPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans overflow-x-hidden">
      <ProjectCollabHeroSection />
      <TrustedBySection />
      <WhyProjectCollabSection />
      <ProductShowcaseSection />
      <WorkflowMapSection />
      <ProjectPatternsSection />
      <GovernanceControlsSection />
      <IntegrationsEcosystemSection />
      <TestimonialStatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
