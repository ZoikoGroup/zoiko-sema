import { 
    AdminConsoleCapabilitiesSection,
    AdminConsoleHeroSection,
    AdminConsoleGovernanceSection,
    AdminConsoleDashboardShowcaseSection,
    AdminConsoleWorkspaceGovernanceSection,
    AdminConsoleUsersAccessSection,
    AdminConsoleRoleBasedSection,
    AdminConsoleSecurityComplianceSection,
    AdminConsoleAiGovernanceSection,
    AdminConsoleZoikoTimeSection,
    AdminConsoleIntegrationsApisSection,
    AdminConsoleAnalyticsReportingSection,
    AdminConsoleEnterpriseTrustSection,
    AdminConsoleClosingCtaSection
} from "@/components/admin-console";

export default function AdminConsolePage() {
  return (
    <main>
      <AdminConsoleHeroSection />
      <AdminConsoleCapabilitiesSection />
      <AdminConsoleGovernanceSection />
      <AdminConsoleDashboardShowcaseSection />
      <AdminConsoleWorkspaceGovernanceSection />
      <AdminConsoleUsersAccessSection />
      <AdminConsoleRoleBasedSection />
      <AdminConsoleSecurityComplianceSection />
      <AdminConsoleAiGovernanceSection />
      <AdminConsoleZoikoTimeSection />
      <AdminConsoleIntegrationsApisSection />
      <AdminConsoleAnalyticsReportingSection />
      <AdminConsoleEnterpriseTrustSection />
      <AdminConsoleClosingCtaSection />
    </main>
  );
}