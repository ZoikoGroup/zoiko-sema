import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Solutions | Teams, Business & Enterprise",
  description:
"Explore Zoiko Sema solutions for individuals, teams, businesses, and enterprises with secure communication, AI summaries, calls, meetings, and governance."};
import {
     SolutionsHeroSection,
     SolutionsSixPathsSection,
     SolutionsComparisonSection,
     SolutionsZoikoTimeAdvantageSection,
     SolutionsThreePathsSection,
     SolutionsCTASection
     } from "@/components/solutions";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <div>
        <SolutionsHeroSection />
        <SolutionsSixPathsSection />
        <SolutionsComparisonSection />
        <SolutionsZoikoTimeAdvantageSection />
        <SolutionsThreePathsSection />
        <SolutionsCTASection />
      </div>
    </main>
  );
}