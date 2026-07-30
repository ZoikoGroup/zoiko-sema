import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ZoikoTime Request a Demo | Zoiko Sema",
  description:
    "Request a ZoikoTime demo to explore smarter time tracking, productivity tools, workforce insights and secure collaboration from Zoiko Sema.",
};

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
