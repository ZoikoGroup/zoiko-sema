import type { Metadata } from "next";



import { MeetingFlowSection, WorkForceTruthHeroSection, ProofSignalsSection , LeadershipVisibilitySection, TeamOwnershipSection, GovernanceControlsSection, UseCasesSection, TrustSecuritySection, EnterpriseDemoSection, FaqSection } from "@/components/workforce-truth";

export const metadata: Metadata = {
  title: "Workforce Truth & Intelligence | Zoiko Sema",
  description: "Discover workforce truth & intelligence with Zoiko Sema to unlock verified insights, improve transparency, and make smarter workforce decisions.",
};

export default function WorkforceTruthPage() {
  return (
    <main>
      <WorkForceTruthHeroSection />
      <ProofSignalsSection />
      <MeetingFlowSection/>
      <LeadershipVisibilitySection />
      <TeamOwnershipSection/>
      <GovernanceControlsSection/>
      <UseCasesSection/>
      <TrustSecuritySection/>
      <EnterpriseDemoSection/>
      <FaqSection/>
    </main>
  )
}