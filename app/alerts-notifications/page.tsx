import {
  Hero,
  OutcomeStrip,
  TriageQueue,
  AlertTaxonomy,
  RuleBuilder,
  AlertLifecycle,
  RoutingFatigue,
  Governance,
  IntegrationsReporting,
  AlertsFAQ,
  RouteExceptionsCTA,
} from "@/components/alerts-notifications";

export default function AlertNotificationPage() {
  return (
    <main>
      <Hero />
      <OutcomeStrip />
      <TriageQueue />
      <AlertTaxonomy />
      <RuleBuilder />
      <AlertLifecycle />
      <RoutingFatigue />
      <Governance />
      <IntegrationsReporting />
      <AlertsFAQ />
      <RouteExceptionsCTA />
    </main>
  );
}
