import { Metadata } from "next";
import { 
  ContactSalesHeroSection,
  ContactSalesMainLayout,
  ContactSalesOptionsSection 
} from "@/components/contact-sales";

export const metadata: Metadata = {
  title: "Contact Sales | Zoiko Sema",
  description: "Talk to our team to see how Zoiko Sema can help your organization communicate, collaborate, and achieve more securely and at scale.",
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
