import { MeetingFlowSection, WorkForceTruthHeroSection, ProofSignalsSection , LeadershipVisibilitySection, TeamOwnershipSection, GovernanceControlsSection, UseCasesSection, TrustSecuritySection, EnterpriseDemoSection, FaqSection } from "@/components/workforce-truth";

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
