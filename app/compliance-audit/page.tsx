import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI Compliance Audit Software Solutions | Zoiko Sema",
  description: "Improve compliance processes with compliance audit software that simplifies audits, manages evidence, and supports regulatory compliance with Zoiko Sema.",
};
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