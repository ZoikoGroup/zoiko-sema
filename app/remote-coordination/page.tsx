import React from "react";
import { RemoteCoordinationHeroSection } from "@/components/remote-coordination";
import { TrustedBySection } from "@/components/remote-coordination";
import { WhyRemoteCoordinationSection } from "@/components/remote-coordination";
import { ProductShowcaseSection } from "@/components/remote-coordination";
import { WorkflowMapSection } from "@/components/remote-coordination";
import { RemoteWorkPatternsSection } from "@/components/remote-coordination";
import { GovernanceControlsSection } from "@/components/remote-coordination";
import { IntegrationsEcosystemSection } from "@/components/remote-coordination";
import { TestimonialStatsSection } from "@/components/remote-coordination";
import { FAQSection } from "@/components/remote-coordination";
import { CTASection } from "@/components/remote-coordination";

export default function RemoteCoordinationPage() {
  return (
    <div className="w-full bg-white font-sans antialiased overflow-x-hidden">
      <RemoteCoordinationHeroSection />
      <TrustedBySection />
      <WhyRemoteCoordinationSection />
      <ProductShowcaseSection />
      <WorkflowMapSection />
      <RemoteWorkPatternsSection />
      <GovernanceControlsSection />
      <IntegrationsEcosystemSection />
      <TestimonialStatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
