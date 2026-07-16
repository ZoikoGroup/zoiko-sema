import { Metadata } from "next";
export const metadata = {
  title: "Smart Enterprise Admin Console | Zoiko Sema",
  description:
    "Manage your organization with Zoiko Sema enterprise admin console. Control users, permissions, workspaces, and settings from one centralized platform.",
};
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