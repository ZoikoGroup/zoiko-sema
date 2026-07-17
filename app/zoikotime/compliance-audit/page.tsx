import {
  ComplianceAuditHero,
  ComplianceDashboardOverview,
  ComplianceEvidenceShowcase,
  LegalHoldIntegrationHealth,
} from "@/components/zoikotime-compliance-audit";

export default function ZoikoTimeComplianceAuditPage() {
  return (
    <main>
      <ComplianceAuditHero />
      <ComplianceDashboardOverview />
      <ComplianceEvidenceShowcase />
      <LegalHoldIntegrationHealth />
    </main>
  );
}
