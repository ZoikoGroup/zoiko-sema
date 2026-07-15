import { Metadata } from "next";
export const metadata = {
  title: "Freelancer Workflow Software | Zoiko Sema",
  description:
    "Streamline your freelance business with Zoiko Sema freelancer workflow software. Manage tasks, clients, projects, and workflows with intelligent AI tools.",
}

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