import type { Metadata } from "next";
import {

  Hero,
  WhyChooseUs,
  CampaignLifestyle,
  CommandCenter,
  AutomatedGovernance,
  MeasureMatters,
  StatusCards,
  FAQ,
} from "@/components/marketing";

export const metadata: Metadata = {
  title: "Marketing Collaboration Platform | Zoiko Sema",
  description: "Streamline marketing collaboration with Zoiko Sema governed workspace for campaigns, content, approvals, agencies, AI workflows and reporting.",
};
export default function MarketingPage() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <CampaignLifestyle />
      <CommandCenter />
      <AutomatedGovernance />
      <MeasureMatters />
      <StatusCards />
      <FAQ />
    </main>
  );
}