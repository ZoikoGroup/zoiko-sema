import type { Metadata } from "next";
import {

  SecurityComplianceHero,
  SolvedAtScale,
  SecurityControlCenter,
  IdentityAccessManagement,
  DataProtectionPrivacy,
  IntelligentAiGovernance,
  AuditCompliance,
  OperationalTrust,
  BuiltForIndustry,
  SecurityFaq,
} from "@/components/security-compliance";

export const metadata: Metadata = {
  title: "Security & Compliance Solutions | Zoiko Sema",
  description: "Zoiko Sema delivers security & compliance solutions to help organisations manage identity, access, communication security, AI governance & audit readiness.",
};
export default function SecurityCompliancePage() {
  return (
    <main>
      <SecurityComplianceHero />
      <SolvedAtScale />
      <SecurityControlCenter />
      <IdentityAccessManagement />
      <DataProtectionPrivacy />
      <IntelligentAiGovernance />
      <AuditCompliance />
      <OperationalTrust />
      <BuiltForIndustry />
      <SecurityFaq />
    </main>
  );
}