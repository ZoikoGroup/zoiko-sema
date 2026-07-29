import { Metadata } from "next";
export const metadat={
  title:"Workforce Truth & Intelligence | Zoiko Sema",
  description:"Discover workforce truth & intelligence with Zoiko Sema to unlock verified insights, improve transparency, and make smarter workforce decisions."
}


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
