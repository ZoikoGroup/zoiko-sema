import {
  DocsHero,
  DocsCards,
  QuickstartWorkflow,
  ApiExample,
  ApiFamilies,
  AuthGovernance,
  SDKSamples,
  FaqSection,
} from "@/components/developer-docs";

export default function DeveloperDocsPage() {
  return (
    <main>
      <DocsHero />
      <DocsCards />
      <QuickstartWorkflow />
      <ApiExample />
      <ApiFamilies />
      <AuthGovernance />
      <SDKSamples />
      <FaqSection />
    </main>
  );
}
