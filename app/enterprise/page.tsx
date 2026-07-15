import { Metadata } from "next";
export const metadata = {
  title: "Enterprise Collaboration Software | Zoiko Sema",
  description:
    "Scale your business with Zoiko Sema enterprise collaboration software. Manage communication, workflows, and teamwork through one intelligent platform.",
}


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