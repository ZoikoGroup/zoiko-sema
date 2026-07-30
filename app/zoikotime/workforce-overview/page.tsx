import type { Metadata } from "next";
import {
  WorkforceOverviewHero,
  OperationalFinancialGovernance,
  ProductShowcase,
  MetricDefinitions,
  StatusModel,
  TeamProcessViews,
  ExceptionWorkflow,
  WorkerTransparency,
  RoleSpecificViews,
  IntegrationsDataQuality,
  GovernancePlanGates,
  FinalCta,
  WorkforceFaq,
} from "@/components/zoikotime-workforce-overview";

export const metadata: Metadata = {
  title: "ZoikoTime Workforce Overview | Zoiko Sema",
  description: "Improve workforce visibility with ZoikoTime. Access centralized workforce insights, monitor trends, and make smarter management decisions.",
};
export default function WorkforceOverviewPage() {
  return (
    <main>
      <WorkforceOverviewHero />
      <OperationalFinancialGovernance />
      <ProductShowcase />
      <MetricDefinitions />
      <StatusModel />
      <TeamProcessViews />
      <ExceptionWorkflow />
      <WorkerTransparency />
      <RoleSpecificViews />
      <IntegrationsDataQuality />
      <GovernancePlanGates />
      <FinalCta />
      <WorkforceFaq />
    </main>
  );
}