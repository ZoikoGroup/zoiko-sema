import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI Document Management Platform | Zoiko Sema",
  description: "Manage documents smarter with Zoiko Sema. Store, organize, share, and connect files with conversations, decisions, and workflows in one workspace.",
};
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