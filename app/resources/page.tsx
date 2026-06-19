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