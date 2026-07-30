import type { Metadata } from "next";
import {

  RemoteHybridHero,
  RemoteFrictionProblem,
  TheRemoteHub,
  StructuredAsyncStandups,
  VisualOverlapIntelligence,
  PerformanceHealthAnalytics,
} from "@/components/use-case-remote-hybrid-work";

export const metadata: Metadata = {
  title: "Remote & Hybrid Work Solutions | Zoiko Sema",
  description: "Zoiko Sema provides remote & hybrid work solutions that connect distributed teams with secure collaboration, smart workflows and AI-assisted coordination.",
};
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