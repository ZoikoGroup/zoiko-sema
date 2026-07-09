import { 
  ProductCarouselHeroSection,
  WorksForSection, 
  PricingSection,
  StatsSection,
  FlexibleSolutionsSection,
  EveryConversationInContextSection,
  StartWithOneConversationSection,
  BusinessAdoptionSection,
  TestimonialCarouselSection, 
 } from "@/components/home";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div>
        <ProductCarouselHeroSection />
        {/* <HeroSection heroImageUrl="/Home/banner.webp" /> */}
        <WorksForSection />
        <PricingSection />
        <StatsSection />
        <FlexibleSolutionsSection />
        <EveryConversationInContextSection />
        <StartWithOneConversationSection />
        <BusinessAdoptionSection />
        <TestimonialCarouselSection />        
      </div>
    </main>
  );
}