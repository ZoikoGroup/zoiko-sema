import type { Metadata } from "next";
import {
  ZoikoTimeOverviewHero,
  WhyCategoryExists,
  PlatformCapabilityArchitecture,
  SystemScopeBoundaries,
  HumanInCommandAI,
  WorkerTransparencyPrivacy,
  IntegrationsEcosystem,
  UseCasePaths,
  ZoikoTimeOverviewFaq,
  ZoikoTimeOverviewFinalCta,
} from "@/components/zoikotime-overview";

export const metadata: Metadata = {
  title: "ZoikoTime Workforce Platform | Zoiko Sema",
  description:
    "Zoiko Sema delivers workforce assurance through ZoikoTime, providing activity visibility, productivity insights and secure tools for modern teams.",
};

export default function ZoikoTimeOverviewPage() {
  return (
    <main>
      <ZoikoTimeOverviewHero />
      <WhyCategoryExists />
      <PlatformCapabilityArchitecture />
      <SystemScopeBoundaries />
      <HumanInCommandAI />
      <WorkerTransparencyPrivacy />
      <IntegrationsEcosystem />
      <UseCasePaths />
      <ZoikoTimeOverviewFaq />
      <ZoikoTimeOverviewFinalCta />
    </main>
  );
}
