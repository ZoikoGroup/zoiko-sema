import type { Metadata } from "next";
import {

  ResourceLibraryHero,
  ResourceCategories,
  FeaturedDownloads,
  AdvancedCircuitDownload,
  EnterpriseGovernance,
  VersionManagement,
  ResourceLibraryFaq,
} from "@/components/resource-library";

export const metadata: Metadata = {
  title: "Zoiko Sema Resource Library | Downloads & Guides",
  description: "Access trusted Zoiko Sema resources in one library, including technical guides, API documentation, white papers, templates, case studies, and compliance assets.",
};
export default function ResourceLibraryPage() {
  return (
    <main>
      <ResourceLibraryHero />
      <ResourceCategories />
      <FeaturedDownloads />
      <AdvancedCircuitDownload />
      <EnterpriseGovernance />
      <VersionManagement />
      <ResourceLibraryFaq />
    </main>
  );
}