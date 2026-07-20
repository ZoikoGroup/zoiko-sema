import { LatestVerifiedUpdate, MediaKitAndTaxonomyPage, NewsroomFAQ, WorkflowAndGovernancePage, ZoikoSemaNewsroom ,AllArticlesFeed} from "@/components/newsroom";

export default function page(){
    return(
        <main>
            <ZoikoSemaNewsroom/>
            <LatestVerifiedUpdate/>
            <AllArticlesFeed/>
            <MediaKitAndTaxonomyPage/>
            <WorkflowAndGovernancePage/>
            <NewsroomFAQ/>
        </main>
    )
}