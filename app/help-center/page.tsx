import { Metadata } from "next";
import { 
  HelpCenterHeroSection,
  HelpCenterPopularArticlesSection,
  HelpCenterArticleDetailSection,
  HelpCenterSupportPhilosophySection,
  HelpCenterLearningTracksSection,
  HelpCenterContactSupportSection,
  HelpCenterFaqSection
} from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center | Zoiko Sema",
  description: "Find setup guides, troubleshooting articles, product help, and support resources for Zoiko Sema.",
};

export default function HelpCenterPage() {
  return (
    <main className="w-full flex flex-col bg-white overflow-hidden">
      <HelpCenterHeroSection />
      <HelpCenterPopularArticlesSection />
      <HelpCenterArticleDetailSection />
      <HelpCenterSupportPhilosophySection />
      <HelpCenterLearningTracksSection />
      <HelpCenterContactSupportSection />
      <HelpCenterFaqSection />
    </main>
  );
}
