import { CommunityAnatomySuite, CommunityFinalSuite, CommunityHeroSection, CommunityHubsuite } from "@/components/community";

export default function page(){
    return (
        <main>
            <CommunityHeroSection/>
            <CommunityHubsuite/>
            <CommunityAnatomySuite/>
            <CommunityFinalSuite/>
        </main>
    )
}