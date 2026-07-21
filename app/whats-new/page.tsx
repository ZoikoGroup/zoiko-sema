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
