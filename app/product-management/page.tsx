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
