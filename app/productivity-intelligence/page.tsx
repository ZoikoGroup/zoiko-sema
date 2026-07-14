import{ EnterpriseUseCasesSection, ExecutiveDashboardSection, GovernanceResourcesSection, IntegrationsSection, PermissionsTableSection, PrivacyPositioningSection, ProductivityDemoSection, ProductivityFaqSection, ProductivityFlowSection, ProductivityHeroSection, ProductivityInsightsSection, ProductivityModuleSection, ReviewGovernanceSection }  from "@/components/productivity-intelligence";

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