import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Start Free | AI Communication Platform",
  description:
    "Create a free Zoiko Sema workspace for secure messaging, AI-powered meetings, calls, and collaboration. Start in 90 seconds with no credit card.",
};


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