import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Trust Center for Enterprise Security | Zoiko Sema",
  description: "Learn how Zoiko Sema prioritizes security, privacy, and responsible AI with transparent practices, compliance resources, and enterprise trust standards.",
};
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