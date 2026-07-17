import {
  Hero,
  OrganizationIdentity,
  Graph,
  HighRiskWorkflow,
  RegionalNotificationPolicies,
  ComprehensiveGovernance,
  PersonalPreferences,
  SettingsFAQ,
} from "@/components/settings";

export default function SettingPage() {
  return (
    <main>
      <Hero />
      <OrganizationIdentity />
      <Graph />
      <HighRiskWorkflow />
      <RegionalNotificationPolicies />
      <ComprehensiveGovernance />
      <PersonalPreferences />
      <SettingsFAQ />
    </main>
  );
}
