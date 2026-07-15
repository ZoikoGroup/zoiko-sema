import { Metadata } from "next";
export const metadata = {
  title: "Team Collaboration Platform | Zoiko Sema",
  description:
    "Zoiko Sema team collaboration platform helps teams communicate, organize workflows, and work together with smarter tools built for modern businesses.",
}
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