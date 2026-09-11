import type { Metadata } from "next";
import {

  SalesEnablementHero,
  EngineeredForClosingVelocity,
  FlowOfAccountability,
  UnifiedAccountGovernedContent,
  RevenueIntelligence,
  SalesEnablementFaq,
} from "@/components/use-case-sales-enablement";

export const metadata: Metadata = {
  title: "AI Sales Enablement Platform | Zoiko Sema",
  description: "Empower sales teams with Zoiko Sema AI-powered sales enablement platform to streamline workflows, improve collaboration, and accelerate revenue growth.",
};
export default function SalesEnablementPage() {
  return (
    <main>
      <SalesEnablementHero />
      <EngineeredForClosingVelocity />
      <FlowOfAccountability />
      <UnifiedAccountGovernedContent />
      <RevenueIntelligence />
      <SalesEnablementFaq />
    </main>
  );
}