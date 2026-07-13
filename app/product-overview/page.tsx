import {
  ProductOverviewHeroSection,
  ProductOverviewModulesSection,
  ProductOverviewWorkflowSection,
  ProductOverviewCommunicationCoreSection,
  ProductOverviewIntelligenceLayerSection,
  ProductOverviewPlanCoordinateSection,
  ProductOverviewZoikoTimeBridgeSection,
  ProductOverviewAudiencePathsSection,
  ProductOverviewFaqSection,
  ProductOverviewGetStartedSection,
} from "@/components/product-overview";

export default function ProductOverviewPage() {
  return (
    <main>
      <ProductOverviewHeroSection />
      <ProductOverviewModulesSection />
      <ProductOverviewWorkflowSection />
      <ProductOverviewCommunicationCoreSection />
      <ProductOverviewIntelligenceLayerSection />
      <ProductOverviewPlanCoordinateSection />
      <ProductOverviewZoikoTimeBridgeSection />
      <ProductOverviewAudiencePathsSection />
      <ProductOverviewFaqSection />
      <ProductOverviewGetStartedSection />
    </main>
  );
}