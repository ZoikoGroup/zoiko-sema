import type { Metadata } from "next";
import { PerformanceAnalyticsHeroSection, MeasurementFrameworkSection , AnalyticsCommandCenterSection, OutcomeQualitySection, FlowCapacitySection, MetricMethodologySection, AIGovernanceSection , WorkerTransparencySection, RolesIntegrationsSection ,TrustProcurementSection , PerformanceAnalyticsFAQSection, PerformanceAnalyticsCTASection} from "@/components/zoikotime-performance-analytics";

export const metadata: Metadata = {
  title: "ZoikoTime Performance Analytics | Zoiko Sema",
  description: "Analyze workforce performance with ZoikoTime Performance Analytics. Track insights, measure productivity, and make smarter decisions with accurate data.",
};
export default function PerformanceAnalyticsPage() {
    return (
        <>
            <PerformanceAnalyticsHeroSection />
            <MeasurementFrameworkSection />
            <AnalyticsCommandCenterSection />
            <OutcomeQualitySection />
            <FlowCapacitySection />
            <MetricMethodologySection />
            <AIGovernanceSection />
            <WorkerTransparencySection />
            <RolesIntegrationsSection />
            <TrustProcurementSection />
            <PerformanceAnalyticsFAQSection />
            <PerformanceAnalyticsCTASection />
        </>
    );
}