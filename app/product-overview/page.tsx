import { Metadata } from "next";
export const metadata = {
  title:"Zoiko Sema | Intelligent Communication Platform",
description:
"Bring conversations, meetings, decisions, and actions together with Zoiko Sema intelligent communication platform for modern teams and organizations."
}


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