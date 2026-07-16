import { DevicePreviewSection, HandshakeLogicSection, JoinMeetingHeroSection, MeetingHealthSection, MeetingStatusSection, SessionPerformanceSection } from "@/components/join-a-meeting";

export default function JoinMeetingPage() {
    return (
        <>
            <JoinMeetingHeroSection />
            <HandshakeLogicSection />
            <DevicePreviewSection />
            <MeetingHealthSection />
            <MeetingStatusSection />
            <SessionPerformanceSection />
        </>
    );
}
