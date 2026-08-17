import { Metadata } from "next";
import { 
  ContactSalesHeroSection,
  ContactSalesMainLayout,
  ContactSalesOptionsSection 
} from "@/components/contact-sales";

export const metadata: Metadata = {
  title: "Zoiko Sema Contact Sales | Secure Team Solutions",
  description: "Contact Zoiko Sema sales experts to learn about secure communication solutions, request a demo, and discover how our platform can support your business.",
};

export default function ContactSalesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <ContactSalesHeroSection />
      <ContactSalesMainLayout />
      <ContactSalesOptionsSection />
    </main>
  );
}
