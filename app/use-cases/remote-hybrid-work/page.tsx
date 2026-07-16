import {
  RemoteHybridHero,
  RemoteFrictionProblem,
  TheRemoteHub,
  StructuredAsyncStandups,
  VisualOverlapIntelligence,
  PerformanceHealthAnalytics,
} from "@/components/use-case-remote-hybrid-work";

export default function RemoteHybridWorkPage() {
  return (
    <main>
      <RemoteHybridHero />
      <RemoteFrictionProblem />
      <TheRemoteHub />
      <StructuredAsyncStandups />
      <VisualOverlapIntelligence />
      <PerformanceHealthAnalytics />
    </main>
  );
}
