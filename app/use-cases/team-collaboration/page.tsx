import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Team Collaboration Platform | Zoiko Sema",
  description: "Improve team collaboration with Zoiko Sema. Connect teams, streamline communication and manage projects securely in one unified workspace.",
};
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