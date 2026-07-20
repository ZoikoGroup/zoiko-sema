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
