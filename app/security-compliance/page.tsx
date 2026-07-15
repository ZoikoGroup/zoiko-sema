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
