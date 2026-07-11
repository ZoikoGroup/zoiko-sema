import React from "react";
import { SharedStyles } from "@/components/Personal-to-team/SharedStyles";
import { PersonalToTeamHeroSection } from "@/components/Personal-to-team/PersonalToTeamHeroSection";
import { TrustedBySection } from "@/components/Personal-to-team/TrustedBySection";
import { WhyPersonalToTeamSection } from "@/components/Personal-to-team/WhyPersonalToTeamSection";
import { ProductShowcaseSection } from "@/components/Personal-to-team/ProductShowcaseSection";
import { WorkflowMapSection } from "@/components/Personal-to-team/WorkflowMapSection";
import { UsePatternsSection } from "@/components/Personal-to-team/UsePatternsSection";
import { GovernanceControlsSection } from "@/components/Personal-to-team/GovernanceControlsSection";
import { IntegrationsEcosystemSection } from "@/components/Personal-to-team/IntegrationsEcosystemSection";
import { TestimonialStatsSection } from "@/components/Personal-to-team/TestimonialStatsSection";
import { FAQSection } from "@/components/Personal-to-team/FAQSection";
import { CTASection } from "@/components/Personal-to-team/CTASection";

export default function PersonalToTeamRoute() {
  return (
    <div className="w-full bg-white font-sans antialiased">
      <SharedStyles />
      <PersonalToTeamHeroSection />
      <TrustedBySection />
      <WhyPersonalToTeamSection />
      <ProductShowcaseSection />
      <WorkflowMapSection />
      <UsePatternsSection />
      <GovernanceControlsSection />
      <IntegrationsEcosystemSection />
      <TestimonialStatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
