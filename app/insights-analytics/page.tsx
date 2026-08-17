import React from "react";
import { Metadata } from "next";

import {
  HeroSection,
  WhatItReportsSection,
  ProductProofSection,
  MetricMethodologySection,
  InsightTaxonomySection,
  MeetingToWorkSection,
  ReportsViewsAlertsSection,
  ZoikoTimeContextSection,
  RolesPlansSection,
  PrivacyTrustSection,
  FAQSection
} from "@/components/insights-analytics";

export const metadata: Metadata = {
  title: "Insights & Analytics - ZoikoSema",
  description: "Zoiko Sema insights & analytics platform helps teams uncover work intelligence, analyze performance, and make smarter decisions with trusted data.",
};

export default function InsightsAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <WhatItReportsSection />
      <ProductProofSection />
      <MetricMethodologySection />
      <InsightTaxonomySection />
      <MeetingToWorkSection />
      <ReportsViewsAlertsSection />
      <ZoikoTimeContextSection />
      <RolesPlansSection />
      <PrivacyTrustSection />
      <FAQSection />
    </div>
  );
}
