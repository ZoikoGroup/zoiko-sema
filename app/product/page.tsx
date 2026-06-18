import { 
    ProductHeroSection,
    ProductPlatformSection,
    ProductFeaturesSection,
    ProductAdminSection,
    ProductZoikoTimeSection,
    ProductIndividualsSection,
    ProductEcosystemSection,
    ProductPathsSection,
    ProductTrustSection,
    ProductPricingSection,
    ProductCTASection 
} from "@/components/product";

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <div>
        <ProductHeroSection />
        <ProductPlatformSection />
        <ProductFeaturesSection />
        <ProductAdminSection />
        <ProductZoikoTimeSection />
        <ProductIndividualsSection />
        <ProductEcosystemSection />
        <ProductPathsSection />
        <ProductTrustSection />
        <ProductPricingSection />
        <ProductCTASection />
      </div>
    </main>
  );
}