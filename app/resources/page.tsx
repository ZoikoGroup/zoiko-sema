import type { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Resource Library | Downloads & Guides",
  description:
    "Access trusted Zoiko Sema resources in one library, including technical guides, API documentation, white papers, templates, case studies, and compliance assets.",
};

import { 
    
    ResourcesHeroSection,
    ResourcesFeaturedSection,
    ResourcesTopicsSection,
    ResourcesLibrarySection,
    ResourcesZoikoTimeSection,
    ResourcesNewsletterSection,
    ResourcesCTASection

} from "@/components/resources";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <div>
        <ResourcesHeroSection />
        <ResourcesFeaturedSection />
        <ResourcesTopicsSection />
        <ResourcesLibrarySection />
        <ResourcesZoikoTimeSection />
        <ResourcesNewsletterSection />
        <ResourcesCTASection />
      </div>
    </main>
  );
}
