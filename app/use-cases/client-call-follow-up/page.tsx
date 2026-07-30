import React from "react";
import { Metadata } from "next";

import {
  HeroSection,
  WhyClientCallFollowUpSection,
  WorkflowSection,
  ProductProofSection,
  ScenariosSection,
  CoreCapabilitiesSection,
  GovernanceSection,
  OutcomesSection,
  FAQSection,
  CTASection,
} from "@/components/client-call-follow-up";

export const metadata: Metadata = {
  title: "Client Call Follow-Up | Zoiko Sema",
  description:
    "Zoiko Sema streamlines client follow-up management by connecting call recaps, commitments, owners, tasks, CRM updates and client-ready follow-ups.",
};

export default function ClientCallFollowUp() {
  return (
    <div className="w-full bg-white flex flex-col justify-start items-center overflow-hidden">
      <HeroSection />
      <WhyClientCallFollowUpSection />
      <WorkflowSection />
      <ProductProofSection />
      <ScenariosSection />
      <CoreCapabilitiesSection />
      <GovernanceSection />
      <OutcomesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
