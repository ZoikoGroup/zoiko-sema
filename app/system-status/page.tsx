import AiAssistedAuthoringSection from "@/components/system-status/AiAssistedAuthoringSection";
import ConnectedWorkSection from "@/components/system-status/ConnectedWorkSection";
import DocumentsFaqSection from "@/components/system-status/DocumentsFaqSection";
import DocumentsFinalCtaSection from "@/components/system-status/DocumentsFinalCtaSection";
import DocumentsHeroSection from "@/components/system-status/DocumentsHeroSection";
import PermissionsAccessSection from "@/components/system-status/PermissionsAccessSection";
import PlansPricingSection from "@/components/system-status/PlansPricingSection";
import ProductShowcaseSection from "@/components/system-status/ProductShowcaseSection";
import TemplatesUseCasesSection from "@/components/system-status/TemplatesUseCasesSection";
import WhyDocumentsFailSection from "@/components/system-status/WhyDocumentsFailSection";

export default function DocumentsPage() {
  return (
    <main>
      <DocumentsHeroSection />
      <WhyDocumentsFailSection />
      <ProductShowcaseSection />
      <AiAssistedAuthoringSection />
      <TemplatesUseCasesSection />
      <PermissionsAccessSection />
      <ConnectedWorkSection />
      <PlansPricingSection />
      <DocumentsFaqSection />
      <DocumentsFinalCtaSection />
    </main>
  );
}
