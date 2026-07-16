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