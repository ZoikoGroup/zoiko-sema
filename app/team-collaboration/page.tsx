


import { CoreFeatures, FAQSection, GovernedCollaboration, ProductShowcase, ResultsMetrics, TeamCollaborationHero, TeamWayOfWorking, TestimonialMetrics } from "@/components/team-collaboration";
import {WhyTeamCollaboration} from "@/components/team-collaboration";

export default function TeamCollaboratioPage(){
   return(
    <main>
    <TeamCollaborationHero/>
    <WhyTeamCollaboration/>
    <ProductShowcase/>
    <CoreFeatures/>
    <TeamWayOfWorking/>
    <ResultsMetrics/>
    <GovernedCollaboration/>
    <TestimonialMetrics/>
    <FAQSection/>
    </main>
   )
}