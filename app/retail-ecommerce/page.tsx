import type { Metadata } from "next";
import {

  RetailHero,
  WhyRetailTeams,
  ResolveIssues,
  RetailAnalytics,
  ResilienceStatus,
} from "@/components/retail-ecommerce";

export const metadata: Metadata = {
  title: "Retail & eCommerce Solutions | Zoiko Sema",
  description: "Unify retail operations with Zoiko Sema retail & eCommerce solutions for store coordination, customer issues, campaigns, analytics and omnichannel teams.",
};
export default function RetailEcommerce() {
  return (
    <main>
      <RetailHero />
      <WhyRetailTeams />
      <ResolveIssues />
      <RetailAnalytics />
      <ResilienceStatus />
    </main>
  );
}