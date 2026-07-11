import { 
    ProductHeroSection,
    ProductPlatformSection,
    ProductAdminSection,
    ProductZoikoTimeSection,
    ProductIndividualsSection,
    ProductPathsSection,
    ProductPricingSection,
    ProductCTASection 
} from "@/components/products";

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <div>
        <ProductHeroSection />
        <ProductPlatformSection />
        <ProductAdminSection />
        <ProductZoikoTimeSection />
        <ProductIndividualsSection />
        <ProductPathsSection />
        <ProductPricingSection />
        <ProductCTASection />
      </div>
    </main>
  );
}