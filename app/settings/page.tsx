import { CorporateGovernancePortal, EnterpriseControlCenter ,WorkspaceSettingsPortal} from "@/components/settings";

export default function page(){
    return (
        <main>
            <EnterpriseControlCenter/>
            <CorporateGovernancePortal/>
            <WorkspaceSettingsPortal/>
        </main>
    )
}