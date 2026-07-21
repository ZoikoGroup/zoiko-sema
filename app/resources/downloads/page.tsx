import {
  ResourceLibraryHero,
  ResourceCategories,
  FeaturedDownloads,
  AdvancedCircuitDownload,
  EnterpriseGovernance,
  VersionManagement,
  ResourceLibraryFaq,
} from "@/components/resource-library";

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
