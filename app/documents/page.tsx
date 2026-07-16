import AiAssistedAuthoringSection from "@/components/documents/AiAssistedAuthoringSection";
import ConnectedWorkSection from "@/components/documents/ConnectedWorkSection";
import DocumentsFaqSection from "@/components/documents/DocumentsFaqSection";
import DocumentsFinalCtaSection from "@/components/documents/DocumentsFinalCtaSection";
import DocumentsHeroSection from "@/components/documents/DocumentsHeroSection";
import PermissionsAccessSection from "@/components/documents/PermissionsAccessSection";
import PlansPricingSection from "@/components/documents/PlansPricingSection";
import ProductShowcaseSection from "@/components/documents/ProductShowcaseSection";
import TemplatesUseCasesSection from "@/components/documents/TemplatesUseCasesSection";
import WhyDocumentsFailSection from "@/components/documents/WhyDocumentsFailSection";

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
