import WhitePapersHeroSection from "@/components/white-papers/WhitePapersHeroSection";
import ResearchLibrary from "@/components/white-papers/ResearchLibrary";
import FindYourPath from "@/components/white-papers/FindYourPath";
import FeaturedSeries from "@/components/white-papers/FeaturedSeries";
import MethodologyTrust from "@/components/white-papers/MethodologyTrust";
import LatestUpdated from "@/components/white-papers/LatestUpdated";
import WhitePapersFAQ from "@/components/white-papers/WhitePapersFAQ";
import ResearchNextStep from "@/components/white-papers/ResearchNextStep";

export default function WhitePapersPage() {
  return (
    <main className="min-h-screen bg-white">
      <WhitePapersHeroSection />
      <ResearchLibrary />
      <FindYourPath />
      <FeaturedSeries />
      <MethodologyTrust />
      <LatestUpdated />
      <WhitePapersFAQ />
      <ResearchNextStep />
    </main>
  );
}