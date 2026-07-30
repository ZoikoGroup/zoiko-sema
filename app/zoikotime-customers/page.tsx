import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ZoikoTime Customers & Success Stories | Zoiko Sema",
  description: "Discover how ZoikoTime customers use Zoiko Sema to streamline workflows, improve team alignment, and achieve better business results.",
};
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