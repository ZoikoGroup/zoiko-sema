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