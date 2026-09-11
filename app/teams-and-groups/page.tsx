import type { Metadata } from "next";
import {

  HeroSection,
  SplitsSection,
  MatrixStructure,
  RuleInheritance,
  EffectiveDates,
  DeepDiveSection,
  SystemAttributes,
  FeatureMatrix,
  TabbedInterface,
  AgreementCascade,
  DataMapping,
  GlobalFramework,
  ComparisonTable,
  SystemIntegrity,
  WorkspaceIsolation,
  OperationalScale,
  GetStartedSection,
  FaqSection,
} from "@/components/teams-and-groups";

export const metadata: Metadata = {
  title: "Zoiko Sema Teams & Groups | Workforce Management",
  description: "Organize employees into teams and groups with Zoiko Sema. Simplify workforce management, reporting, scheduling, and collaboration across your organization.",
};
export default function TeamsAndGroupPage() {
  return (
    <main>
      <HeroSection />
      <SplitsSection />
      <MatrixStructure />
      <RuleInheritance />
      <EffectiveDates />
      <DeepDiveSection />
      <SystemAttributes />
      <FeatureMatrix />
      <TabbedInterface />
      <AgreementCascade />
      <DataMapping />
      <GlobalFramework />
      <ComparisonTable />
      <SystemIntegrity />
      <WorkspaceIsolation />
      <OperationalScale />
      <GetStartedSection />
      <FaqSection />
    </main>
  );
}