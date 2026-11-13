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
import BlackFridayPopup from "@/components/black-friday/BlackFridayPopup";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div>
        <ProductCarouselHeroSection />
        <WorksForSection />
        <PricingSection />
        <StatsSection />
        <FlexibleSolutionsSection />
        <EveryConversationInContextSection />
        <StartWithOneConversationSection />
        <BusinessAdoptionSection />
        <TestimonialCarouselSection />
      </div>
      <BlackFridayPopup />
    </main>
  );
}