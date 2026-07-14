import {
  TrustCenterHeroSection,
  TrustCenterTopicsSection,
  TrustCenterOverviewSection,
  TrustCenterAdminGovernanceSection,
  TrustCenterComplianceEvidenceSection,
  TrustCenterAiGovernanceSection,
  TrustCenterStatusSection,
  TrustCenterSecurityReviewSection,
  TrustCenterRouteSection,
  TrustCenterFaqSection,
  TrustCenterFinalCtaSection,
} from "@/components/trust-center";

export default function TrustCenterPage() {
  return (
    <main>
      <TrustCenterHeroSection />
      <TrustCenterTopicsSection />
      <TrustCenterOverviewSection />
      <TrustCenterAdminGovernanceSection />
      <TrustCenterComplianceEvidenceSection />
      <TrustCenterAiGovernanceSection />
      <TrustCenterStatusSection />
      <TrustCenterSecurityReviewSection />
      <TrustCenterRouteSection />
      <TrustCenterFaqSection />
      <TrustCenterFinalCtaSection />
    </main>
  );
}
