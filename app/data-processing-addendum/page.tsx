import { Metadata } from "next";
export const metadata = {
  title: "Data Processing Addendum | Zoiko Sema",
  description:
    "Learn about Zoiko Sema data processing addendum, including data handling practices, privacy commitments, and security measures for protecting information.",
}

import { DataProcessingAddendumHeroSection, DataProcessingAddendumContentSection } from "@/components/data-processing-addendum";

export default function DataProcessingAddendumPage() {
  return (
    <main>
      <DataProcessingAddendumHeroSection />
      <DataProcessingAddendumContentSection />
    </main>
  );
}