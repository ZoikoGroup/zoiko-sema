import type { Metadata } from "next";
import { CommunicationModesSection, SemaNotesHeroSection, SemaNotesLifecycleSection,ActionsFollowUpsSection, GovernancePrivacySection ,SearchableMemorySection,ZoikoTimeBridgeSection,MarketingSectionsPack} from "@/components/sema-notes"

export const metadata: Metadata = {
    title: "Smart Meeting Notes | Zoiko Sema",
    description:
        "Capture smart meeting notes with Zoiko Sema. Connect decisions, follow-ups and conversation memory with messages, calls, mail, calendar and files.",
};

export default function page(){
    return(
        <main>
            <SemaNotesHeroSection/>
            <SemaNotesLifecycleSection/>
            <CommunicationModesSection/>
            <ActionsFollowUpsSection/>
            <GovernancePrivacySection/>
            <SearchableMemorySection/>
            <ZoikoTimeBridgeSection/>
            <MarketingSectionsPack/>

        </main>
    )
}
