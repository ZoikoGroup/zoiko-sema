import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema | Intelligent Communication Platform",
  description:
    "Learn about Zoiko Sema, an intelligent communication platform combining secure messaging, calls, meetings, AI summaries, and collaboration for modern teams.",
};



import {
  AboutHeroSection,
  AboutConversationsSection,
  WhatSemaConnectsSection,
  WhoSemaServesSection,
  HowSemaWorksSection,
  GovernedAiAdminControlSection,
  CustomerOutcomesSection,
  WhereSemaFitsSection,
  TrustEnterpriseReadinessSection,
  AboutZoikoSemaFaqSection,
  SemaFinalCtaSection,
} from "@/components/about";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutConversationsSection />
      <WhatSemaConnectsSection />
      <WhoSemaServesSection />
      <HowSemaWorksSection />
      <GovernedAiAdminControlSection />
      <CustomerOutcomesSection />
      <WhereSemaFitsSection />
      <TrustEnterpriseReadinessSection />
      <AboutZoikoSemaFaqSection />
      <SemaFinalCtaSection />
    </main>
  );
}
