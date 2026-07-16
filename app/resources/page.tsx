import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Resources | AI Communication Guides",
  description:
    "Discover Zoiko Sema AI communication guides with practical resources on meeting intelligence, decision capture, workflows, and accountable collaboration.",
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