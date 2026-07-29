import type { Metadata } from "next";
import {
  FilesHeroSection,
  FileFirstSystemSection,
  ContextAwareApproachSection,
  FileLifecycleSection,
  MailCalendarContinuitySection,
  SearchAiMemorySection,
  GovernanceSecurityControlsSection,
  FilesScaleSection,
  SemaFilesFaqSection,
  FilesFinalCtaSection,
} from "@/components/files";

export const metadata: Metadata = {
  title: "Secure File Sharing & Management | Zoiko Sema",
  description:
    "Manage, share, and govern files with Zoiko Sema. Keep documents connected to conversations, meetings, decisions, and workflows in one secure workspace.",
};

export default function FilesPage() {
  return (
    <main>
      <FilesHeroSection />
      <FileFirstSystemSection />
      <ContextAwareApproachSection />
      <FileLifecycleSection />
      <MailCalendarContinuitySection />
      <SearchAiMemorySection />
      <GovernanceSecurityControlsSection />
      <FilesScaleSection />
      <SemaFilesFaqSection />
      <FilesFinalCtaSection />
    </main>
  );
}
