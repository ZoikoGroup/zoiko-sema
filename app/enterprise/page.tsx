import { DeploymentCommandCenter, EnterpriseDeploymentSection, EnterpriseIntegrationsSection, Finalsection, IdentityProvisioning, RolloutJourneyTimeline } from "@/components/enterprise";

export default function(){
    return(
        <main>
            <EnterpriseDeploymentSection/>
            <EnterpriseIntegrationsSection/>
            <DeploymentCommandCenter/>
            <RolloutJourneyTimeline/>
            <IdentityProvisioning/>
            <Finalsection/>
        </main>
    )
}