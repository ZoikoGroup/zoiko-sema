import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Pricing | Plans & Features",
  description:
    "Explore Zoiko Sema pricing plans for individuals, teams, and enterprises. Compare Free, Pro, Business, and Enterprise plans with AI communication features.",
};

import { 
    
    PricingHeroSection,
    PricingPlansSection,
    PricingComparisonSection,
    PricingTimeIntegrationSection,
    PricingVolumePricingSection,
    PricingFAQSection,
    PricingFinalCTASection 

} from "@/components/pricing";


export default function PricingPage() {
  return (
    <main>
      <div>
        <PricingHeroSection />
        <PricingPlansSection />
        <PricingComparisonSection />
        <PricingTimeIntegrationSection />
        <PricingVolumePricingSection />
        <PricingFAQSection />
        <PricingFinalCTASection />
      </div>
    </main>
  );
}