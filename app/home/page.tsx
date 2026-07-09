import { 
  // HeroSection, 
  WorksForSection, 
  EveryConversationSection, 
  UnderstandsSection, 
  ZoikoTimeSection, 
  BuiltForSection,
  ConversationsGridSection ,
  DesignedForTrustSection,
  StartGrowSection,
  PricingSection,
  TestimonialCarouselSection,
  ProductCarouselHeroSection
 } from "@/components/home";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div>
        <ProductCarouselHeroSection />
        {/* <HeroSection heroImageUrl="/Home/banner.webp" /> */}
        <WorksForSection />
        <EveryConversationSection />
        <UnderstandsSection />
        <ZoikoTimeSection />
        <BuiltForSection />
        <ConversationsGridSection />
        <DesignedForTrustSection />
        <StartGrowSection />
        <PricingSection />
        <TestimonialCarouselSection />
        
      </div>
    </main>
  );
}