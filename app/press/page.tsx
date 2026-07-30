import type { Metadata } from "next";
import { ApprovedProductVisuals, PressAndLeadershipHub, ResourcesAndInquiryHub, ZoikoSemaFactsGlance, ZoikoSemaMediaKit, ZoikoSemaNewsroom, ZoikoSemaPressHero } from "@/components/press"

export default function page(){
    return(
        <main>
            <ZoikoSemaPressHero/>
            <ZoikoSemaFactsGlance/>
            <ZoikoSemaNewsroom/>
            <ZoikoSemaMediaKit/>
            <ApprovedProductVisuals/>
            <PressAndLeadershipHub/>
            <ResourcesAndInquiryHub/>
        </main>
    )
}

export const metadata: Metadata = {
  title: "Press Releases & News Updates | Zoiko Sema",
  description: "Stay informed with Zoiko Sema news, media coverage, press releases, and company announcements highlighting advancements in secure AI communication.",
};