import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Use Cases | AI Communication Workflows",
  description:
    "Zoiko Sema AI communication workflows help teams convert meetings, client calls, and discussions into structured actions, insights, and business context.",
};

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