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
  description: "See what helps communication move work forward. Unlimited adoption, meeting-to-work follow-through, AI usage, guest access, and policy health through role-aware reporting.",
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
