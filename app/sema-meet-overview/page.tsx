import type { Metadata } from "next";
import { ZoikoSemaExtendedSuite, ZoikoSemaFeatureSuite, ZoikoSemaMeetingsHero, ZoikoSemaProductCapabilities } from "@/components/sema-meet-overview"

export default function page(){
    return(
        <main>
        <ZoikoSemaMeetingsHero/>
        <ZoikoSemaProductCapabilities/>
        <ZoikoSemaFeatureSuite/>
        <ZoikoSemaExtendedSuite/>
        </main>
    )
}

export const metadata: Metadata = {
  title: "Zoiko Sema Meet Overview | Smart Meeting Platform",
  description: "Discover Zoiko Sema Meet, a smart meeting platform with secure video meetings, AI summaries, real-time collaboration, and connected workspace solutions.",
};