import { Metadata } from "next";
export const metadata = {
  title: "AI Meeting Summary Software | Zoiko Sema",
  description:
    "Zoiko Sema offers AI meeting summary software that turns conversations into clear notes, action items, and insights, helping teams work smarter.",
};


import { AISummariesHero, MeetingFeaturesShowcase, MeetingProductFeatures,MeetingWorkflowGovernance } from "@/components/ai-meetings";

export default function page(){
    return(
        <main>
            <AISummariesHero/>
            <MeetingProductFeatures/>
            <MeetingWorkflowGovernance/>
            <MeetingFeaturesShowcase/>
        </main>
    )
}