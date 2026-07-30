import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Zoiko Sema Workforce Alerts & Notifications",
  description: "Manage workforce exceptions with Zoiko Sema Alerts & Notifications. Configure policy-aware alerts, reviews, and workflows with full audit visibility.",
};
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