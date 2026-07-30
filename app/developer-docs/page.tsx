import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Developer API Documentation | Zoiko Sema",
  description: "Build with Zoiko Sema using developer API documentation, integration guides, and SDK resources designed for secure enterprise workflows.",
};
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