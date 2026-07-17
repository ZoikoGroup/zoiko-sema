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
