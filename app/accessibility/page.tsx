import type { Metadata } from "next";
import {

  Hero,
  AccessibilityStatementSection,
  AccessibilityCoverageMapSection,
  ConformanceProductCoverageSection,
  HowWeVerifyAccessibilitySection,
  KnownLimitationsSection,
  BarrierReportingFlowSection,
  ReportABarrierSection,
  ConnectedResourcesSection,
  CtaSection,
  FaqSection,
} from "@/components/accessibility";

export const metadata: Metadata = {
  title: "Accessibility Statement and Commitment | Zoiko Sema",
  description: "Learn about Zoiko Sema accessibility statement and commitment to creating an inclusive digital experience with improved access and usability for all.",
};
export default function AccessibilityPage() {
  return (
    <main>
      <Hero />
      <AccessibilityStatementSection />
      <AccessibilityCoverageMapSection />
      <ConformanceProductCoverageSection />
      <HowWeVerifyAccessibilitySection />
      <KnownLimitationsSection />
      <BarrierReportingFlowSection />
      <ReportABarrierSection />
      <ConnectedResourcesSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
}