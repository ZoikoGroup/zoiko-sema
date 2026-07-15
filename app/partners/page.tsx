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
