import { Metadata } from "next";
import {
  HeroSection,
  StopDriftSection,
  AsyncStandupsSection,
  TimelineMappingSection,
  SemaIntelligenceSection,
  HealthMetricsSection,
  ConnectedArchitectureSection,
  GovernanceSection,
} from "@/components/remote-optimization";

export const metadata: Metadata = {
  title: "Remote Team Collaboration | Zoiko Sema",
  description:
    "Strengthen remote team collaboration with Zoiko Sema. Keep global teams aligned with connected updates, meetings, handoffs, and AI-powered summaries.",
};

export default function RemoteOptimizationPage() {
  return (
    <div className="w-full bg-white font-sans antialiased overflow-x-hidden">
      <HeroSection />
      <StopDriftSection />
      <AsyncStandupsSection />
      <TimelineMappingSection />
      <SemaIntelligenceSection />
      <HealthMetricsSection />
      <ConnectedArchitectureSection />
      <GovernanceSection />
    </div>
  );
}
