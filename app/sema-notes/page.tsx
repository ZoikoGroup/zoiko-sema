import { CommunicationModesSection, SemaNotesHeroSection, SemaNotesLifecycleSection,ActionsFollowUpsSection, GovernancePrivacySection ,SearchableMemorySection,ZoikoTimeBridgeSection,MarketingSectionsPack} from "@/components/sema-notes"

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