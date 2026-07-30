import type { Metadata } from "next";
import {
  ComplianceAuditHero,
  ComplianceDashboardOverview,
  ComplianceEvidenceShowcase,
  LegalHoldIntegrationHealth,
} from "@/components/zoikotime-compliance-audit";

export const metadata: Metadata = {
  title: "ZoikoTime Enterprise Compliance & Audit | Zoiko Sema",
  description:
    "Strengthen Enterprise Compliance & Audit with ZoikoTime from Zoiko Sema. Manage evidence, governance controls, and traceable audit trails securely.",
};

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
