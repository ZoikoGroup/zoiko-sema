import { Metadata } from "next";
export const metadata = {
  title: "Cookies & Privacy Policy | Zoiko Sema",
  description:
    "Read Zoiko Sema cookie policy for details on cookies, tracking technologies, privacy considerations, and choices available to website visitors.",
}

import {
  CookiePolicyHeroSection,
  CookiePolicyContentSection,
} from "@/components/cookie-policy";

export default function CookiePolicyPage() {
  return (
    <main>
      <CookiePolicyHeroSection />
      <CookiePolicyContentSection />
    </main>
  );
}