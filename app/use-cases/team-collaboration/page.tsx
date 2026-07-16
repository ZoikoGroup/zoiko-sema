import {
  TeamCollabHero,
  WhyCollaboration,
  TeamToWorkLifecycle,
  CoreCapabilities,
  UseCasePatterns,
  GovernanceSecurity,
  RolesPermissions,
  IntegrationsStack,
  QuestionsAnswered,
  FinalCTA,
} from "@/components/use-case-team-collaboration";

export default function UseCaseTeamCollaborationPage() {
  return (
    <main>
      <TeamCollabHero />
      <WhyCollaboration />
      <TeamToWorkLifecycle />
      <CoreCapabilities />
      <UseCasePatterns />
      <GovernanceSecurity />
      <RolesPermissions />
      <IntegrationsStack />
      <QuestionsAnswered />
      <FinalCTA />
    </main>
  );
}
