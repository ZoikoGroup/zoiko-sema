import {
  ZoikoCustomersHeroSection,
  ZoikoCustomersWhySection,
  ZoikoCustomersShowcaseSection,
  ZoikoCustomersWorkflowsSection,
  ZoikoCustomersExperienceSection,
  ZoikoCustomersControlsSection,
  ZoikoCustomersIntegrationStepsSection,
  ZoikoCustomersEcosystemSection,
  ZoikoCustomersExpansionSection,
  ZoikoCustomersFAQSection,
  ZoikoCustomersCTASection
} from "@/components/zoikotime-customers";

export default function ZoikotimeCustomersPage() {
  return (
    <main>
      <ZoikoCustomersHeroSection />
      <ZoikoCustomersWhySection />
      <ZoikoCustomersShowcaseSection />
      <ZoikoCustomersWorkflowsSection />
      <ZoikoCustomersExperienceSection />
      <ZoikoCustomersControlsSection />
      <ZoikoCustomersIntegrationStepsSection />
      <ZoikoCustomersEcosystemSection />
      <ZoikoCustomersExpansionSection />
      <ZoikoCustomersFAQSection />
      <ZoikoCustomersCTASection />
    </main>
  );
}