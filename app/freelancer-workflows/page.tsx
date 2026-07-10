import {
  FreelancerHeroSection,
  FreelancerBuiltForSection,
  FreelancerWhySection,
  FreelancerShowcaseSection,
  FreelancerCycleSection,
  FreelancerBoardSection,
  FreelancerAISection,
  FreelancerTrustSection,
  FreelancerTestimonialSection,
  FreelancerPricingSection,
  FreelancerClosingCTASection,
} from "@/components/freelancer-workflows";

export default function FreelancerWorkflowsPage() {
  return (
    <main>
      <FreelancerHeroSection />
      <FreelancerBuiltForSection />
      <FreelancerPricingSection />
      <FreelancerWhySection />
      <FreelancerShowcaseSection />
      <FreelancerCycleSection />
      <FreelancerBoardSection />
      <FreelancerAISection />
      <FreelancerTrustSection />
      <FreelancerTestimonialSection />
 
      <FreelancerClosingCTASection />
    </main>
  );
}