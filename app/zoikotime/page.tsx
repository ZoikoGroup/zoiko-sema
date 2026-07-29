import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZoikoTime Overview | Verified Work & Workforce Truth",
  description:
    "ZoikoTime provides evidence-based workforce visibility, verified time tracking, performance analytics, and compliance audit trails for modern teams.",
};

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

export default function ZoikoTimePage() {
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
