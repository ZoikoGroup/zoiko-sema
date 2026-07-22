import {  ExpertProfilesPage, CommunityHeroSection, CommunityHubPage,ComposerWorkflowPage,ExpertSessionsPage,FeaturedQuestionsPage, QuestionAnatomyPage, TopicSpacesPage, GovernanceSafetyPage, CommunityFAQPage, JoinCommunityPage} from "@/components/community";

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