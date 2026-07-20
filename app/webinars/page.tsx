import { WebinarsEventsHero,UpcomingEventsSection, TopicAudiencePaths, PastEventsReplays, EventWorkflowSuite, ExtendedEventSuite } from "@/components/webinars"
export default function page(){
    return(
        <main>
            <WebinarsEventsHero/>
            <UpcomingEventsSection/>
            <TopicAudiencePaths/>
            <PastEventsReplays/>
            <EventWorkflowSuite/>
            <ExtendedEventSuite/>
        </main>
    )
}