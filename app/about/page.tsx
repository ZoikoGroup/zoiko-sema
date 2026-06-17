import { 
  
  AboutHeroSection,
  AboutConversationsSection,
  AboutNotJustSection,
  AboutBuiltForBothSection,
  AboutZoikoTimeSection,
  AboutCarriesMeaningSection,
  AboutCommitmentsSection,
  AboutTrustSection,
  AboutCTASection

 } from "@/components/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div>
       <AboutHeroSection />
       <AboutConversationsSection />
       <AboutNotJustSection />
       <AboutBuiltForBothSection />
       <AboutZoikoTimeSection />
       <AboutCarriesMeaningSection />
       <AboutCommitmentsSection />
       <AboutTrustSection />
       <AboutCTASection />
      </div>
    </main>
  );
}