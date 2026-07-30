import type { Metadata } from "next";
import { CorporateGovernancePortal, EnterpriseControlCenter ,WorkspaceSettingsPortal} from "@/components/settings";

export const metadata: Metadata = {
  title: "Zoiko Sema Settings | Manage Your Account Preferences",
  description: "Manage your Zoiko Sema settings, update account preferences, configure user options, and customize your experience with simple controls in one place.",
};
export default function page(){
    return (
        <main>
            <EnterpriseControlCenter/>
            <CorporateGovernancePortal/>
            <WorkspaceSettingsPortal/>
        </main>
    )
}