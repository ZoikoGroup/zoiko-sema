import { CoordinationRoomSection, GovernanceTrustSection, TravelCoordinationBreaksSection, TravelEventOperationsSection, TravelGuestServiceSection, TravelHandoffWorkflowSection, TravelHospitalityHeroSection , TravelStatsSection, IntegrationsSection , TravelHospitalityFaqSection, TravelHospitalityCTASection } from "@/components/usecase-travel-hospitality";

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