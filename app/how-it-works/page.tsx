import type { Metadata } from "next";
import {
  VerificationHero,
  PlatformLifecycle,
  GuidedDemoShell,
  PolicySetup,
  ViolationReview,
  AppendOnlyCorrections,
  RolePaths,
  WorkerTransparency,
  GovernanceAndAI,
  EndToEndIntegrations,
  ChooseNextStep,
  HowItWorksFaq,
  FinalJourneyFooter,
} from "@/components/how-it-works";

export const metadata: Metadata = {
  title: "How It Works: Workforce Verification | Zoiko Sema",
  description:
    "Discover how ZoikoTime works with workforce verification, transparent tracking, human review, and audit-ready records for smarter workforce management.",
};

export default function HowItWorksPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <VerificationHero />
      <PlatformLifecycle />
      <GuidedDemoShell />
      <PolicySetup />
      <ViolationReview />
      <AppendOnlyCorrections />
      <RolePaths />
      <WorkerTransparency />
      <GovernanceAndAI />
      <EndToEndIntegrations />
      <ChooseNextStep />
      <HowItWorksFaq />
      <FinalJourneyFooter />
    </main>
  );
}
