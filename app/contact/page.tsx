import { Metadata } from "next";
export const metadata = {
  title: "Contact Zoiko Sema | We're Here to Help",
  description:
    "Contact Zoiko Sema to learn more about AI-powered communication, meetings, collaboration solutions, demos, support, and enterprise workflow options.",
}
import { 
    ContactHeroSection,
    ContactRoutesSection,
    ContactSmartFormSection,
    ContactRouteSection,
    ContactSensitiveRequestsSection,
    ContactEcosystemMediaSection,
    ContactOtherWaysSection,
    ContactFaqSection
 } from "@/components/contact";

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactRoutesSection />
      <ContactSmartFormSection />
      <ContactRouteSection />
      <ContactSensitiveRequestsSection />
      <ContactEcosystemMediaSection />
      <ContactOtherWaysSection />
      <ContactFaqSection />
    </main>
  );
}