import {
  ComplianceAuditHeroSection,
  ComplianceAuditValueSection,
  ComplianceAuditWorkflowSection,
  ComplianceAuditEvidenceMapSection,
  ComplianceAuditDashboardPreviewSection,
  ComplianceAuditReviewExceptionsSection,
  ComplianceAuditExportPacksSection,
  ComplianceAuditTrustGridSection,
  ComplianceAuditRolesTableSection,
  ComplianceAuditDemoFormSection,
  ComplianceAuditFaqSection,
} from "@/components/compliance-audit";

export default function ComplianceAuditPage() {
  return (
    <main>
      <ComplianceAuditHeroSection />
      <ComplianceAuditValueSection />
      <ComplianceAuditWorkflowSection />
      <ComplianceAuditEvidenceMapSection />
      <ComplianceAuditDashboardPreviewSection />
      <ComplianceAuditReviewExceptionsSection />
      <ComplianceAuditExportPacksSection />
      <ComplianceAuditTrustGridSection />
      <ComplianceAuditRolesTableSection />
      <ComplianceAuditDemoFormSection />
      <ComplianceAuditFaqSection />
    </main>
  );
}
