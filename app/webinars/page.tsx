import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Zoiko Sema Webinars | Live Sessions & Expert Insights",
  description: "Join Zoiko Sema webinars featuring expert-led sessions, practical workshops, product demos, and insights designed to improve communication & collaboration.",
};