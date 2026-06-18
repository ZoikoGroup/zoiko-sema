import { 
    UseCasesHeroSection,
    UseCasesWorkflowSection,
    UseCasesWorkflowBreakdownSection,
    UseCasesPermissionedSection,
    UseCasesStakeholdersSection,
    UseCasesTrustSection,
    UseCasesCTASection,
    UseCasesFAQSection
 } from "@/components/use-cases";


export default function UseCasesPage() {
  return (
    <main className="min-h-screen">

      <div>
        <UseCasesHeroSection />
        <UseCasesWorkflowSection />
        <UseCasesWorkflowBreakdownSection />
        <UseCasesPermissionedSection />
        <UseCasesStakeholdersSection />
        <UseCasesTrustSection />
        <UseCasesCTASection />
        <UseCasesFAQSection />
      </div>

    </main>
  );
}