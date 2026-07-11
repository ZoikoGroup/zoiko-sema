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