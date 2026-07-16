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
  title: "Remote Optimization | Zoiko Sema",
  description:
    "Coordinate hybrid and remote teams without losing momentum. One governed workspace for async updates, meetings, AI summaries, handoffs, and follow-ups across every time zone.",
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
