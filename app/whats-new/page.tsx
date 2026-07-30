import type { Metadata } from "next";
import {
  ProductUpdatesProvider,
  WhatsNewHero,
  FeaturedRelease,
  ReleaseTimeline,
  StatusLegend,
  AvailabilityImpact,
  AdminDeveloperRoutes,
  StayUpdatedNewsletter,
  ProductUpdatesFaq,
  WhatsNewFinalCta,
} from "@/components/whats-new";

export const metadata: Metadata = {
  title: "What’s New in Zoiko Sema | Latest Updates",
  description:
    "Discover the latest Zoiko Sema updates, from new features and phased rollouts to admin changes, developer updates and product deprecations.",
};

export default function WhatsNewPage() {
  return (
    <main>
      <ProductUpdatesProvider>
        <WhatsNewHero />
        <FeaturedRelease />
        <ReleaseTimeline />
        <StatusLegend />
        <AvailabilityImpact />
        <AdminDeveloperRoutes />
        <StayUpdatedNewsletter />
        <ProductUpdatesFaq />
        <WhatsNewFinalCta />
      </ProductUpdatesProvider>
    </main>
  );
}
