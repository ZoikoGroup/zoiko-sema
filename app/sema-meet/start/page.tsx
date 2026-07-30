import type { Metadata } from "next";
import {

  StartMeetingHero,
  SixGatesEligibility,
  DevicePreflight,
  PolicyResolutionLayers,
  HostControlsLiveRoom,
  PostMeetingOutcomes,
  RolesPermissions,
  StatesRecovery,
  PlanGatesPricing,
  StartMeetingFinalCta,
} from "@/components/sema-meet-start";

export const metadata: Metadata = {
  title: "Start Zoiko Sema Meet | Secure Online Meetings",
  description: "Start Zoiko Sema Meet for secure online meetings and video calls. Connect with your team, collaborate easily, and enjoy smooth communication anytime.",
};
export default function StartMeetingPage() {
  return (
    <main>
      <StartMeetingHero />
      <SixGatesEligibility />
      <DevicePreflight />
      <PolicyResolutionLayers />
      <HostControlsLiveRoom />
      <PostMeetingOutcomes />
      <RolesPermissions />
      <StatesRecovery />
      <PlanGatesPricing />
      <StartMeetingFinalCta />
    </main>
  );
}