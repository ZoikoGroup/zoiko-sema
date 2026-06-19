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