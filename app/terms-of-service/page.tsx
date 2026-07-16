import { Metadata } from "next";
export const metadata = {
  title: "Terms of Service & User Agreement | Zoiko Sema",
  description:
    "Read Zoiko Sema terms of service to understand the rules, policies, and conditions that apply when using our AI-powered communication platform.",
}
import {
  TermsOfServiceHeroSection,
  TermsOfServiceContentSection,
} from "@/components/terms-of-service";

export default function TermsOfServicePage() {
  return (
    <main>
      <TermsOfServiceHeroSection />
      <TermsOfServiceContentSection />
    </main>
  );
}