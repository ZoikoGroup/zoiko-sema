import { Metadata } from "next";
export const metadata = {
  title: "Acceptable Use Policy & Standards | Zoiko Sema",
  description:
    "Learn about Zoiko Sema acceptable use policy, including platform rules, user responsibilities, and guidelines for safe and responsible service usage.",
}

import {
  AcceptableUsePolicyHeroSection,
  AcceptableUsePolicyContentSection,
} from "@/components/acceptable-use-policy";

export default function AcceptableUsePolicyPage() {
  return (
    <main>
      <AcceptableUsePolicyHeroSection />
      <AcceptableUsePolicyContentSection />
    </main>
  );
}