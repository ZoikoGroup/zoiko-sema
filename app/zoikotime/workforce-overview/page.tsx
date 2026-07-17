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
