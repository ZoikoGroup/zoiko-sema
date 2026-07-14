import { ContactSalesFeaturesSection } from "./ContactSalesFeaturesSection";
import { ContactSalesFormSection } from "./ContactSalesFormSection";

export function ContactSalesMainLayout() {
  return (
    <section className="w-full flex justify-center py-20 bg-white">
      <div className="w-full max-w-[1280px] px-8 flex flex-col lg:flex-row gap-16 justify-between items-start">
        <ContactSalesFeaturesSection />
        <ContactSalesFormSection />
      </div>
    </section>
  );
}
