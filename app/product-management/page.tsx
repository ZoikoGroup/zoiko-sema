import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {
  ProductHero,
  ProductProblems,
  ProductCapabilities,
  ProductHowItWorks,
  ProductShowcase,
  ProductHumanOversight,
  ProductWorkerTransparency,
  ProductBoundaries,
  ProductIntegrations,
  ProductTrustGates,
  ProductCTA,
  ProductFaq,
} from "@/components/product-management";

export const metadata: Metadata = {
  title: "Product Management Platform | Zoiko Sema",
  description:
    "Manage product planning and collaboration with Zoiko Sema product management platform, connecting teams, tasks, decisions and product workflows.",
};

export default function ProductManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProductHero />
      <ProductProblems />
      <ProductCapabilities />
      <ProductHowItWorks />
      <ProductShowcase />
      <ProductHumanOversight />
      <ProductWorkerTransparency />
      <ProductBoundaries />
      <ProductIntegrations />
      <ProductTrustGates />
      <ProductCTA />
      <ProductFaq />
      <Footer />
    </main>
  );
}
