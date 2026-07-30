import type { Metadata } from "next";
import { DevicePreviewSection, HandshakeLogicSection, JoinMeetingHeroSection, MeetingHealthSection, MeetingStatusSection, SessionPerformanceSection } from "@/components/join-a-meeting";

export const metadata: Metadata = {
  title: "Join Zoiko Sema Meet | Meeting Access Portal",
  description: "Join Zoiko Sema Meet securely using a direct link, meeting code, or QR scan. Connect instantly with encrypted and reliable online meeting technology.",
};
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