import {
  ProductOverviewHeroSection,
  ProductOverviewModulesSection,
  ProductOverviewPhilosophySection,
  ProductOverviewBenefitsSection,
  ProductOverviewUnifiedUISection,
  ProductOverviewZoikoTimeSection,
  ProductOverviewTrustSection,
  ProductOverviewNextStepsSection,
  ProductOverviewClosingCTASection,
} from "@/components/product-overview";

export default function ProductOverviewPage() {
  return (
    <main>
      <ProductOverviewHeroSection />
      <ProductOverviewModulesSection />
      <ProductOverviewPhilosophySection />
      <ProductOverviewBenefitsSection />
      <ProductOverviewUnifiedUISection />
      <ProductOverviewZoikoTimeSection />
      <ProductOverviewTrustSection />
      <ProductOverviewNextStepsSection />
      <ProductOverviewClosingCTASection />
    </main>
  );
}