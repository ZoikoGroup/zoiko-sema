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