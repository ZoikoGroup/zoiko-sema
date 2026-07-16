import { Metadata } from "next";
export const metadata = {
  title: "Privacy Notice & Data Protection | Zoiko Sema",
  description:
    "Learn about Zoiko Sema privacy notice, including how we collect, use, protect, and manage personal information while maintaining privacy and security.",
}

import {
  PrivacyNoticeHeroSection,
  PrivacyNoticeContentSection,
} from "@/components/privacy-notice";

export default function PrivacyNoticePage() {
  return (
    <main>
      <PrivacyNoticeHeroSection />
      <PrivacyNoticeContentSection />
    </main>
  );
}