import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy";

export const metadata: Metadata = {
  title: "Zoiko Sema Privacy Policy | Data Protection & Trust",
  description: "Learn how Zoiko Sema protects your privacy with secure data practices, transparent policies, and responsible handling of your personal information.",
};
export default function page(){
    return(
        <PrivacyPage/>
        )
}
