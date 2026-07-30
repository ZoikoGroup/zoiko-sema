import type { Metadata } from "next";
import { ArchitectureGovernanceSuite, DistributedWorkspaceSuite, RemoteOptimizationHero, WorkspaceMetricsSuite } from "@/components/solutions-hybrid-remote";

export const metadata: Metadata = {
  title: "Hybrid Remote Solutions Platform | Zoiko Sema",
  description: "Zoiko Sema hybrid remote solutions help teams connect remote and in-office work with secure collaboration, workflows, communication, and AI-powered tools.",
};
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