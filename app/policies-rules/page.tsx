import type { Metadata } from "next";
import {

  Hero,
  WhyItMatters,
  TwoBuildingBlocksSection,
  HierarchyPrecedenceSection,
  CommandCenterSection,
  BuildSimulateSection,
  ApprovePublishSection,
  WorkerTransparency,
  IntegrationsSection,
  FaqSection,
  GetStartedSection,
} from "@/components/policies-rules";

export const metadata: Metadata = {
  title: "Zoiko Sema Policies & Rules | HR Policy Management",
  description: "Create and manage employee policies and rules with Zoiko Sema. Simplify HR processes, improve compliance, and streamline workforce management.",
};
export default function PolicyRulesPage() {
  return (
    <main>
      <Hero />
      <WhyItMatters />
      <TwoBuildingBlocksSection />
      <HierarchyPrecedenceSection />
      <CommandCenterSection />
      <BuildSimulateSection />
      <ApprovePublishSection />
      <WorkerTransparency />
      <IntegrationsSection />
      <FaqSection />
      <GetStartedSection />
    </main>
  );
}