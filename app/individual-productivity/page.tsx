import {
  IndividualProductivityHeroSection,
  IndividualProductivityWhySection,
  IndividualProductivityCapabilitiesSection,
  IndividualProductivityFollowThroughSection,
  IndividualProductivityUseCasesSection,
  IndividualProductivityGovernanceSection,
  IndividualProductivityIntegrationsSection,
  IndividualProductivityTestimonialSection,
  IndividualProductivityFAQSection,
  IndividualProductivityCTASection,
} from "@/components/individual-productivity";

export default function IndividualProductivityPage() {
  return (
    <main>
      <IndividualProductivityHeroSection />
      <IndividualProductivityWhySection />
      <IndividualProductivityCapabilitiesSection />
      <IndividualProductivityFollowThroughSection />
      <IndividualProductivityUseCasesSection />
      <IndividualProductivityGovernanceSection />
      <IndividualProductivityIntegrationsSection />
      <IndividualProductivityTestimonialSection />
      <IndividualProductivityFAQSection />
      <IndividualProductivityCTASection />
    </main>
  );
}