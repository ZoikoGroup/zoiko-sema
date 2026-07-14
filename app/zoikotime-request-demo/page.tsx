import {
  ZTRDProvider,
  ZTRDHeroSection,
  ZTRDAudienceSection,
  ZTRDAgendaSection,
  ZTRDUseCaseSection,
  ZTRDFormSection,
  ZTRDNextStepsSection,
  ZTRDTrustSection,
  ZTRDIntegrationSection,
  ZTRDFaqSection,
} from "@/components/zoikotime-request-demo";

export default function ZoikoTimeRequestDemoPage() {
  return (
    <main>
      <ZTRDHeroSection />
      <ZTRDAudienceSection />
      <ZTRDAgendaSection />
      <ZTRDProvider>
        <ZTRDUseCaseSection />
        <ZTRDFormSection />
      </ZTRDProvider>
      <ZTRDNextStepsSection />
      <ZTRDTrustSection />
      <ZTRDIntegrationSection />
      <ZTRDFaqSection />
    </main>
  );
}