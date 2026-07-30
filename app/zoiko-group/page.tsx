import type { Metadata } from "next";
import {

  ZoikoGroupHeroSection,
  ZoikoGroupGlanceSection,
  ZoikoGroupEcosystemMapSection,
  ZoikoGroupSemaFitSection,
  ZoikoGroupPrinciplesSection,
  ZoikoGroupFindRouteSection,
  ZoikoGroupTrustSection,
  ZoikoGroupFaqSection,
} from "@/components/zoiko-group";

export const metadata: Metadata = {
  title: "Meet Zoiko Group & Innovation | Zoiko Sema",
  description: "Discover Zoiko Group, the innovation ecosystem behind advanced technology solutions, driving growth, collaboration & the future of AI-powered communication.",
};
export default function ZoikoGroupPage() {
  return (
    <main>
      <ZoikoGroupHeroSection />
      <ZoikoGroupGlanceSection />
      <ZoikoGroupEcosystemMapSection />
      <ZoikoGroupSemaFitSection />
      <ZoikoGroupPrinciplesSection />
      <ZoikoGroupFindRouteSection />
      <ZoikoGroupTrustSection />
      <ZoikoGroupFaqSection />
    </main>
  );
}