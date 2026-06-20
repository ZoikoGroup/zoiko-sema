import { 
    StartFreeHeroSection, 
    StartFreeTrustSection, 
    StartPricingPlansCardsSection,
    StartFeaturesGridSection,
    StartRouteComparisonSection,
    StartSecuritySection,
    StartSignupFAQSection,
    StartFinalCTASection 
} from "@/components/start-free";

export default function StartFreePage() {
  return (

    <main className="min-h-screen">
          <div>
      <StartFreeHeroSection />
      <StartFreeTrustSection />
      <StartPricingPlansCardsSection />
      <StartFeaturesGridSection />
      <StartRouteComparisonSection />
      <StartSecuritySection />
      <StartSignupFAQSection />
      <StartFinalCTASection />
          </div>
        </main>
  );
}