import { Metadata } from "next";
import { SubprocessorsSidebar } from "@/components/subprocessors/SubprocessorsSidebar";
import {
  SubprocessorsHeroSection,
  SubprocessorsOverviewSection,
  SubprocessorsCurrentListSection,
  SubprocessorsCategoriesSection,
  SubprocessorsDataCategoriesSection,
  SubprocessorsRegionsSection,
  SubprocessorsEcosystemMapSection,
  SubprocessorsChangeNoticesSection,
  SubprocessorsSubscribeSection,
  SubprocessorsObjectionsSection,
  SubprocessorsRelatedMaterialSection,
  SubprocessorsFooterCtaSection,
  SubprocessorsFaqSection,
} from "@/components/subprocessors";

export const metadata: Metadata = {
  title: "Subprocessors | Zoiko Sema",
  description: "A transparent view of service-provider categories, data-processing roles, regions, and update notices.",
};

export default function SubprocessorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero section is full width at the very top, outside the sidebar layout */}
      <SubprocessorsHeroSection />
      {/* Main content layout with sticky sidebar */}
      <div className="flex w-full">
        {/* Sidebar */}
        <SubprocessorsSidebar />

        {/* Scrollable Content Area */}
        <div className="flex-1 flex flex-col w-full overflow-hidden">
          <SubprocessorsOverviewSection />
          <SubprocessorsCurrentListSection />
          <SubprocessorsCategoriesSection />
          <SubprocessorsDataCategoriesSection />
          <SubprocessorsRegionsSection />
          <SubprocessorsEcosystemMapSection />
          <SubprocessorsChangeNoticesSection />
          <SubprocessorsSubscribeSection />
          <SubprocessorsObjectionsSection />
          <SubprocessorsRelatedMaterialSection />
        </div>
      </div>

      {/* Full bleed sections spanning the entire width of the page, below the sidebar */}
      <SubprocessorsFooterCtaSection />
      <SubprocessorsFaqSection />
    </main>
  );
}
