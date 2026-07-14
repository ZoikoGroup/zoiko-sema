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
