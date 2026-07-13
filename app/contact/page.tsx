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