import type { Metadata } from "next";
import {

  Hero,
  Integrations,
  Lifecycle,
  IntegrationHub,
  PlatformCards,
  Observability,
  DeveloperExperience,
  FAQ,
  InfiniteScale,
} from "@/components/integration-scalability";

export const metadata: Metadata = {
  title: "Enterprise Integration & Scalability | Zoiko Sema",
  description: "Zoiko Sema connects enterprise systems with secure integrations, API management and workflow automation built to scale global operations efficiently.",
};
export default function Page() {
  return (
    <main>
      <Hero />
      <Integrations />
      <Lifecycle />
      <IntegrationHub />
      <PlatformCards />
      <InfiniteScale />
      <Observability />
      <DeveloperExperience />
      <FAQ />
    </main>
  );
}