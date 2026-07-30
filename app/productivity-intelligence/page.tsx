import type { Metadata } from "next";
import{ EnterpriseUseCasesSection, ExecutiveDashboardSection, GovernanceResourcesSection, IntegrationsSection, PermissionsTableSection, PrivacyPositioningSection, ProductivityDemoSection, ProductivityFaqSection, ProductivityFlowSection, ProductivityHeroSection, ProductivityInsightsSection, ProductivityModuleSection, ReviewGovernanceSection }  from "@/components/productivity-intelligence";

export const metadata: Metadata = {
  title: "Productivity Intelligence Platform | Zoiko Sema",
  description: "Discover Zoiko Sema productivity intelligence platform, built to streamline workflows, automate tasks, improve collaboration & drive business results.",
};
export default function ProductivityIntelligencePage() {
  return (
    <main>
      <ProductivityHeroSection />
      <ProductivityInsightsSection/>
      <ProductivityFlowSection />
      <ProductivityModuleSection />
      <ExecutiveDashboardSection />
      <ReviewGovernanceSection />
      <PrivacyPositioningSection />
      <EnterpriseUseCasesSection />
      <IntegrationsSection />
      <PermissionsTableSection />
      <GovernanceResourcesSection />
      <ProductivityDemoSection />
      <ProductivityFaqSection />
    </main>
  )
}