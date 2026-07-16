import { Metadata } from "next";
export const metadata = {
  title: "Responsible AI Use Policy | Zoiko Sema",
  description:
    "Learn about Zoiko Sema AI Use Policy, covering responsible AI practices, ethical guidelines, and standards to ensure safe, secure, and transparent AI usage.",
}


import {
  AiUsePolicyHeroSection,
  AiUsePolicyContentSection,
} from "@/components/ai-use-policy";

export default function AiUsePolicyPage() {
  return (
    <main>
      <AiUsePolicyHeroSection />
      <AiUsePolicyContentSection />
    </main>
  );
}