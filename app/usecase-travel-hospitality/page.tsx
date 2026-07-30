import type { Metadata } from "next";
import { CoordinationRoomSection, GovernanceTrustSection, TravelCoordinationBreaksSection, TravelEventOperationsSection, TravelGuestServiceSection, TravelHandoffWorkflowSection, TravelHospitalityHeroSection , TravelStatsSection, IntegrationsSection , TravelHospitalityFaqSection, TravelHospitalityCTASection } from "@/components/usecase-travel-hospitality";

export const metadata: Metadata = {
  title: "Travel & Hospitality Coordination Platform | Zoiko Sema",
  description: "Discover Zoiko Sema travel and hospitality coordination platform that streamlines coordination, enhances guest experiences & improves operational efficiency.",
};
export default function TravelHospitalityPage() {
  return (
    <>
        <TravelHospitalityHeroSection />
        <TravelStatsSection />
        <TravelCoordinationBreaksSection />
        <TravelHandoffWorkflowSection />
        <TravelGuestServiceSection />
        <TravelEventOperationsSection />
        <CoordinationRoomSection />
        <GovernanceTrustSection />
        <IntegrationsSection />
        <TravelHospitalityFaqSection />
        <TravelHospitalityCTASection />
    </>
  );
}