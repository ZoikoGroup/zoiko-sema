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
