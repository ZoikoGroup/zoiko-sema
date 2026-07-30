import type { Metadata } from "next";
import {  ExpertProfilesPage, CommunityHeroSection, CommunityHubPage,ComposerWorkflowPage,ExpertSessionsPage,FeaturedQuestionsPage, QuestionAnatomyPage, TopicSpacesPage, GovernanceSafetyPage, CommunityFAQPage, JoinCommunityPage} from "@/components/community";

export const metadata: Metadata = {
  title: "Zoiko Sema Community | Connect, Share & Collaborate",
  description: "Join the Zoiko Sema Community to connect with users, share ideas, discuss updates, and explore conversations around intelligent communication.",
};
export default function page(){
    return (
        <main>
            <CommunityHeroSection/>
            <CommunityHubPage/>
            <FeaturedQuestionsPage/>
            <TopicSpacesPage/>
            <QuestionAnatomyPage/>
            <ComposerWorkflowPage/>
            <ExpertSessionsPage/>
            <ExpertProfilesPage/>
            <GovernanceSafetyPage/>
            <CommunityFAQPage/>
            <JoinCommunityPage/>
        </main>
    )
}