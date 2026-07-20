import { ArchitectureGovernanceSuite, DistributedWorkspaceSuite, RemoteOptimizationHero, WorkspaceMetricsSuite } from "@/components/solutions-hybrid-remote";

export default function page(){
    return(
        <main>
            <RemoteOptimizationHero/>
            <DistributedWorkspaceSuite/>
            <WorkspaceMetricsSuite/>
            <ArchitectureGovernanceSuite/>
            </main>
    )
}