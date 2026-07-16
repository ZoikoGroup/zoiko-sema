import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Security Policy | Data Protection",
  description:
    "Learn how Zoiko Sema protects your data through strong security practices, privacy controls, and policies that ensure safe and reliable platform use.",
}


import { SecurityPolicyHeroSection, SecurityPolicyContentSection } from "@/components/security-policy";

export default function SecurityPolicyPage() {
  return (
    <main>
      <SecurityPolicyHeroSection />
      <SecurityPolicyContentSection />
    </main>
  );
}