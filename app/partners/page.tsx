import type { Metadata } from "next";
import {

  PartnersProvider,
  PartnersHero,
  PartnerTypes,
  WhyPartner,
  EcosystemMap,
  CompareRoutes,
  PartnerEnablement,
  HowPartneringWorks,
  PartnerApplication,
  TrustSecurity,
  PartnerFaq,
} from "@/components/partners";

export const metadata: Metadata = {
  title: "Zoiko Sema Partner Program | Grow Together",
  description: "Partner with Zoiko Sema to build integrations, support deployments, refer customers, and help teams adopt secure, governed AI communication solutions.",
};
export default function PartnersPage() {
  return (
    <main>
      <PartnersProvider>
        <PartnersHero />
        <PartnerTypes />
        <WhyPartner />
        <EcosystemMap />
        <CompareRoutes />
        <PartnerEnablement />
        <HowPartneringWorks />
        <PartnerApplication />
        <TrustSecurity />
        <PartnerFaq />
      </PartnersProvider>
    </main>
  );
}