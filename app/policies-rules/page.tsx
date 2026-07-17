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
