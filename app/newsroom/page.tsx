import type { Metadata } from "next";
import { LatestVerifiedUpdate, MediaKitAndTaxonomyPage, NewsroomFAQ, WorkflowAndGovernancePage, ZoikoSemaNewsroom ,AllArticlesFeed} from "@/components/newsroom";

export const metadata: Metadata = {
  title: "Zoiko Sema Newsroom | Official Updates & Announcements",
  description: "Get the latest Zoiko Sema updates, announcements, product news, and insights on intelligent communication platforms, AI features, and business solutions.",
};
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