import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Zoiko Sema Products | Secure Messaging, Calls & AI Meetings",
  description: "Zoiko Sema is an intelligent communication platform with secure messaging, HD calls, video meetings, AI summaries, channels, and business-ready controls.",
};
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